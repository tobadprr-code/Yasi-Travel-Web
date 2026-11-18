import type { Metadata } from "next";
import { BUSINESS } from "@/content/business";
import { DICTS, getDict, type Lang } from "./i18n";

const OG_LOCALE: Record<Lang, string> = { es: "es_AR", pt: "pt_BR", en: "en_US" };

/** Metadatos de la página en un idioma: título, descripción, canonical, hreflang, Open Graph. */
export function buildMetadata(lang: Lang): Metadata {
  const t = getDict(lang);
  const url = `${BUSINESS.siteUrl}${t.path === "/" ? "/" : t.path}`;
  const languages: Record<string, string> = {};
  (Object.keys(DICTS) as Lang[]).forEach((l) => {
    languages[DICTS[l].htmlLang] = `${BUSINESS.siteUrl}${DICTS[l].path === "/" ? "/" : DICTS[l].path}`;
  });
  languages["x-default"] = `${BUSINESS.siteUrl}/`;

  return {
    metadataBase: new URL(BUSINESS.siteUrl),
    title: t.meta.title,
    description: t.meta.description,
    applicationName: BUSINESS.name,
    keywords: [
      "remisería Puerto Iguazú",
      "traslados Puerto Iguazú",
      "transfer aeropuerto Iguazú",
      "remis Iguazú Cataratas",
      "traslado Foz do Iguaçu",
      "transfer Puerto Iguazú Ciudad del Este",
      "Yasí Travel",
    ],
    alternates: { canonical: url, languages },
    openGraph: {
      type: "website",
      locale: OG_LOCALE[lang],
      alternateLocale: (Object.keys(OG_LOCALE) as Lang[]).filter((l) => l !== lang).map((l) => OG_LOCALE[l]),
      url,
      siteName: BUSINESS.name,
      title: t.meta.title,
      description: t.meta.description,
      images: [{ url: "/og.jpg", width: 1200, height: 630, alt: t.meta.ogAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: t.meta.title,
      description: t.meta.description,
      images: ["/og.jpg"],
    },
    robots: { index: true, follow: true, "max-image-preview": "large" },
    manifest: "/manifest.webmanifest",
  };
}

/** Datos estructurados para Google: el servicio de remís + las preguntas frecuentes. */
export function jsonLd(lang: Lang) {
  const t = getDict(lang);
  const url = `${BUSINESS.siteUrl}${t.path === "/" ? "/" : t.path}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TaxiService",
        "@id": `${BUSINESS.siteUrl}/#business`,
        name: BUSINESS.name,
        alternateName: BUSINESS.legalName,
        description: t.meta.description,
        url,
        image: `${BUSINESS.siteUrl}/og.jpg`,
        logo: `${BUSINESS.siteUrl}/icon-512.png`,
        telephone: BUSINESS.phoneTel,
        priceRange: "$$",
        openingHours: "Mo-Su 00:00-23:59",
        address: {
          "@type": "PostalAddress",
          streetAddress: BUSINESS.address.street,
          addressLocality: BUSINESS.address.locality,
          addressRegion: BUSINESS.address.region,
          postalCode: BUSINESS.address.postalCode,
          addressCountry: BUSINESS.address.country,
        },
        geo: { "@type": "GeoCoordinates", latitude: BUSINESS.geo.lat, longitude: BUSINESS.geo.lng },
        areaServed: ["Puerto Iguazú", "Foz do Iguaçu", "Ciudad del Este", "Wanda", "Misiones", "Triple Frontera"],
        availableLanguage: ["Spanish", "Portuguese", "English"],
        contactPoint: {
          "@type": "ContactPoint",
          telephone: BUSINESS.phoneTel,
          contactType: "customer service",
          availableLanguage: ["Spanish", "Portuguese", "English"],
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        inLanguage: t.htmlLang,
        mainEntity: t.faq.items.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      },
    ],
  };
}
