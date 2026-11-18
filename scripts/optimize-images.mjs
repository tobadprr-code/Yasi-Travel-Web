// Genera las imágenes optimizadas que usa la web a partir de los originales de /img.
// Los originales NO se tocan. Uso:  npm run images
import sharp from "sharp";
import { mkdirSync, readdirSync, statSync, existsSync } from "node:fs";
import { join, parse } from "node:path";

const SRC = "img";
const OUT = "public/img";
mkdirSync(OUT, { recursive: true });
mkdirSync("app", { recursive: true });

// Ancho máximo y calidad WebP por imagen (las que no figuran usan `fallback`).
// `crop` recorta antes de redimensionar (left, top, width, height en píxeles del original).
const RULES = {
  "gallery-cataratas-panorama": { w: 1920, q: 78 },
  "contact-cataratas": { w: 1920, q: 76 },
  "hero-auto-route": { w: 1600, q: 80 },
  "shopping-foz": { w: 1400, q: 80, crop: { left: 150, top: 95, width: 1300, height: 810 } },
  "chofer-1": { w: 900, q: 80 },
  "chofer-2": { w: 900, q: 80 },
  "yasi-logo": { w: 480, q: 85 },
};
const FALLBACK = { w: 1400, q: 78 };
const SKIP = new Set(["yasi-isotipo", "yasi-flyer"]);

const rows = [];
for (const file of readdirSync(SRC).sort()) {
  const { name, ext } = parse(file);
  if (SKIP.has(name)) continue;
  const rule = RULES[name] ?? FALLBACK;
  let img = sharp(join(SRC, file), { failOn: "none" }).rotate();
  if (rule.crop) img = img.extract(rule.crop);
  const out = join(OUT, `${name}.webp`);
  await img.resize({ width: rule.w, withoutEnlargement: true }).webp({ quality: rule.q, effort: 5 }).toFile(out);
  const meta = await sharp(out).metadata();
  rows.push([file, `${meta.width}x${meta.height}`, (statSync(join(SRC, file)).size / 1024).toFixed(0), (statSync(out).size / 1024).toFixed(0)]);
}

// Íconos a partir del isotipo (Next los sirve solo con ponerlos en /app)
const iso = join(SRC, "yasi-isotipo.png");
if (existsSync(iso)) {
  await sharp(iso).resize(512, 512, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toFile("app/icon.png");
  await sharp(iso)
    .resize(180, 180, { fit: "contain", background: "#040a1a" })
    .flatten({ background: "#040a1a" })
    .png()
    .toFile("app/apple-icon.png");
  await sharp(iso).resize(512, 512, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toFile(join("public", "icon-512.png"));
  await sharp(iso).resize(192, 192, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toFile(join("public", "icon-192.png"));
  await sharp(iso).resize(160, 160, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toFile(join(OUT, "yasi-isotipo.png"));
}

console.log("archivo".padEnd(34), "salida".padEnd(11), "orig KB".padStart(8), "webp KB".padStart(8));
for (const [f, d, a, b] of rows) console.log(f.padEnd(34), d.padEnd(11), a.padStart(8), b.padStart(8));
const total = rows.reduce((s, r) => s + Number(r[3]), 0);
console.log(`\nTotal optimizado: ${(total / 1024).toFixed(2)} MB en ${rows.length} imágenes`);
