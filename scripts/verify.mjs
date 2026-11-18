// Recorrido automático de la web ya construida, con Brave (playwright-core):
//  - escritorio 1440x900 y móvil 390x844, en los tres idiomas
//  - sin errores de consola, sin desborde horizontal
//  - CTAs del hero y de servicios, armador de paquetes y FAQ funcionando
//  - todos los links de WhatsApp con el número real
//  - hero visible con JavaScript desactivado
//  - genera public/og.jpg (imagen para redes) y capturas para el portfolio en la carpeta de salida
//
// Uso:  npm run build && npm run start   (en otra terminal)
//       node scripts/verify.mjs http://localhost:3000 tmp/verify
import { chromium } from "playwright-core";
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import sharp from "sharp";

const base = (process.argv[2] ?? "http://localhost:3000").replace(/\/$/, "");
const outDir = process.argv[3] ?? "tmp/verify";
mkdirSync(outDir, { recursive: true });

const BRAVE = process.env.BRAVE_PATH ?? "C:\\Program Files\\BraveSoftware\\Brave-Browser\\Application\\brave.exe";
const WA = "5493757680410";
const WA_PREFIX = `https://wa.me/${WA}?text=`;
const LANGS = [
  { code: "es", path: "/", h1: "Traslados privados", locale: "es-AR" },
  { code: "pt", path: "/pt", h1: "Traslados privativos", locale: "pt-BR" },
  { code: "en", path: "/en", h1: "Private transfers", locale: "en-US" },
];
const MOBILE_UA =
  "Mozilla/5.0 (Linux; Android 14; Pixel 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Mobile Safari/537.36";

const results = [];
let failures = 0;
function check(name, ok, detail = "") {
  results.push({ name, ok, detail });
  if (!ok) failures++;
  console.log(`${ok ? "OK  " : "FAIL"} ${name}${detail ? ` — ${detail}` : ""}`);
}

async function scrollAll(page) {
  await page.evaluate(async () => {
    document.documentElement.style.scrollBehavior = "auto";
    const max = document.documentElement.scrollHeight;
    for (let y = 0; y <= max; y += 400) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 90));
    }
    window.scrollTo(0, 0);
    await new Promise((r) => setTimeout(r, 1200));
  });
}

const browser = await chromium.launch({ executablePath: BRAVE, headless: true });

for (const [name, viewport, mobile] of [
  ["desktop", { width: 1440, height: 900 }, false],
  ["mobile", { width: 390, height: 844 }, true],
]) {
  for (const lang of LANGS) {
    const ctx = await browser.newContext({
      viewport,
      deviceScaleFactor: mobile ? 2 : 1,
      isMobile: mobile,
      hasTouch: mobile,
      locale: lang.locale,
      colorScheme: "dark",
      ...(mobile ? { userAgent: MOBILE_UA } : {}),
    });
    const page = await ctx.newPage();
    const errors = [];
    page.on("console", (m) => {
      if (m.type() === "error") errors.push(m.text().slice(0, 300));
    });
    page.on("pageerror", (e) => errors.push(`pageerror: ${String(e).slice(0, 300)}`));
    page.on("requestfailed", (r) => errors.push(`requestfailed: ${r.url().slice(0, 120)}`));

    const tag = `${name}/${lang.code}`;
    const res = await page.goto(base + lang.path, { waitUntil: "load", timeout: 120000 });
    check(`${tag} responde 200`, res?.status() === 200, String(res?.status()));
    await page.waitForTimeout(1500);

    const h1 = await page.locator("h1").innerText();
    check(`${tag} título en el idioma correcto`, h1.includes(lang.h1), h1);
    const htmlLang = await page.evaluate(() => document.documentElement.lang);
    check(`${tag} <html lang>`, htmlLang.startsWith(lang.code), htmlLang);

    await page.screenshot({ path: join(outDir, `${name}-${lang.code}-hero.png`) });
    await scrollAll(page);

    const m = await page.evaluate(() => ({
      docH: document.documentElement.scrollHeight,
      docW: document.documentElement.scrollWidth,
      vw: innerWidth,
    }));
    check(
      `${tag} sin desborde horizontal`,
      m.docW <= m.vw,
      `${m.docW}px de ancho, alto ${m.docH}px (${(m.docH / viewport.height).toFixed(1)} pantallas)`,
    );

    // CTA principal del hero y tarjetas de servicios: abren WhatsApp
    const heroHref = (await page.locator("header a.btn-gold").first().getAttribute("href")) ?? "";
    check(`${tag} CTA del hero abre WhatsApp`, heroHref.startsWith(WA_PREFIX), heroHref.slice(0, 60));
    const svcHrefs = await page.locator("#servicios a[href]").evaluateAll((as) => as.map((a) => a.getAttribute("href") ?? ""));
    check(
      `${tag} ${svcHrefs.length} tarjetas de servicios abren WhatsApp`,
      svcHrefs.length === 4 && svcHrefs.every((h) => h.startsWith(WA_PREFIX)),
    );

    // Armador de paquetes: dos lugares elegidos y el mensaje los incluye
    const chips = page.locator("#armar button[aria-pressed]");
    await chips.nth(0).click();
    await chips.nth(2).click();
    await page.waitForTimeout(500);
    const count = (await page.locator("#armar .text-4xl").innerText()).trim();
    const bHref = (await page.locator("#armar a.btn-wa").getAttribute("href")) ?? "";
    const bMsg = decodeURIComponent(bHref.split("text=")[1] ?? "");
    const names = await chips.evaluateAll((bs) => [bs[0], bs[2]].map((b) => (b.textContent ?? "").trim()));
    check(
      `${tag} armador de paquetes`,
      count === "2" && bHref.startsWith(WA_PREFIX) && names.every((n) => bMsg.includes(n)),
      `${count} lugares · ${bMsg.split("\n")[1] ?? ""}`,
    );

    // Todos los links de WhatsApp apuntan al número real
    const total = await page.locator('a[href*="wa.me"]').count();
    const bad = await page.evaluate(
      (prefix) => [...document.querySelectorAll('a[href*="wa.me"]')].filter((a) => !a.href.startsWith(prefix)).length,
      WA_PREFIX,
    );
    check(`${tag} ${total} links de WhatsApp con el número real`, bad === 0 && total >= 8, `${bad} incorrectos`);

    // FAQ: abrir el segundo ítem
    const faq = page.locator("#preguntas button[aria-expanded]");
    await faq.nth(1).click();
    await page.waitForTimeout(500);
    check(`${tag} FAQ abre y cierra`, (await faq.nth(1).getAttribute("aria-expanded")) === "true");

    check(`${tag} sin errores de consola`, errors.length === 0, errors.slice(0, 3).join(" || "));

    if (name === "mobile" && lang.code === "es") {
      await page.evaluate(() => window.scrollTo(0, 0));
      await page.waitForTimeout(600);
      await page.screenshot({ path: join(outDir, "yasi-travel-mobile.png") });
    }
    await ctx.close();
  }
}

// Hero visible sin JavaScript
for (const [name, viewport] of [
  ["desktop", { width: 1440, height: 900 }],
  ["mobile", { width: 390, height: 844 }],
]) {
  const ctx = await browser.newContext({ viewport, javaScriptEnabled: false, colorScheme: "dark" });
  const page = await ctx.newPage();
  await page.goto(`${base}/`, { waitUntil: "load", timeout: 120000 });
  await page.waitForTimeout(1500);
  const vis = await page.evaluate(() => {
    const h = document.querySelector("h1");
    const r = h.getBoundingClientRect();
    const btn = document.querySelector("header .btn-gold");
    return {
      h1Opacity: getComputedStyle(h).opacity,
      h1InView: r.top >= 0 && r.top < innerHeight,
      ctaOpacity: btn ? getComputedStyle(btn.parentElement).opacity : "n/a",
    };
  });
  check(`${name} hero visible sin JavaScript`, Number(vis.h1Opacity) > 0.95 && vis.h1InView && Number(vis.ctaOpacity) > 0.95, JSON.stringify(vis));
  await page.screenshot({ path: join(outDir, `${name}-sin-js.png`) });
  await ctx.close();
}

// Capturas para el portfolio (escritorio: hero y página larga) + imagen Open Graph
{
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1, locale: "es-AR", colorScheme: "dark" });
  const page = await ctx.newPage();
  await page.goto(`${base}/`, { waitUntil: "load", timeout: 120000 });
  await page.waitForTimeout(2500);
  await page.screenshot({ path: join(outDir, "yasi-travel-hero.png") });
  await scrollAll(page);
  const docH = await page.evaluate(() => document.documentElement.scrollHeight);
  await page.screenshot({ path: join(outDir, "yasi-travel-tall.png"), fullPage: true, clip: { x: 0, y: 0, width: 1440, height: Math.min(docH, 3200) } });
  await ctx.close();

  const og = await browser.newContext({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1, locale: "es-AR", colorScheme: "dark" });
  const p2 = await og.newPage();
  await p2.goto(`${base}/`, { waitUntil: "load", timeout: 120000 });
  await p2.waitForTimeout(2500);
  await p2.evaluate(() => {
    document.querySelectorAll(".slow-zoom").forEach((e) => (e.style.animation = "none"));
  });
  const raw = join(outDir, "og-raw.png");
  await p2.screenshot({ path: raw });
  await og.close();
  await sharp(raw).jpeg({ quality: 84, mozjpeg: true }).toFile("public/og.jpg");
  console.log("OK   public/og.jpg generado (1200x630)");
}

await browser.close();
writeFileSync(join(outDir, "report.json"), JSON.stringify({ base, failures, results }, null, 2));
console.log(`\n${results.length - failures}/${results.length} chequeos pasaron. Capturas en ${outDir}`);
process.exit(failures ? 1 : 0);
