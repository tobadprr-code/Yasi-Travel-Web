import Script from "next/script";
import { Manrope, Playfair_Display } from "next/font/google";
import "@/app/globals.css";
import { BUSINESS } from "@/content/business";
import { getDict, type Lang } from "@/lib/i18n";
import { jsonLd } from "@/lib/seo";

// Playfair Display: títulos (serif elegante). Manrope: texto e interfaz (sans limpia).
// Se sirven desde el propio dominio: no bloquean el render ni dependen de Google Fonts.
const serif = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

/** <html> + <body> compartidos por los tres idiomas (cada idioma tiene su propio layout raíz). */
export default function RootShell({ lang, children }: { lang: Lang; children: React.ReactNode }) {
  const t = getDict(lang);
  return (
    <html lang={t.htmlLang} className={`${sans.variable} ${serif.variable}`}>
      <body className="bg-navy font-sans text-ink antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[100] focus:rounded-full focus:bg-gold focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-gold-ink"
        >
          {t.nav.skip}
        </a>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd(lang)) }} />
        {children}
        {BUSINESS.gaId ? (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${BUSINESS.gaId}`} strategy="afterInteractive" />
            <Script id="ga4" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${BUSINESS.gaId}');`}
            </Script>
          </>
        ) : null}
      </body>
    </html>
  );
}
