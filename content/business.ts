/**
 * DATOS DEL NEGOCIO — editá acá y se actualiza en toda la web
 * (links de WhatsApp, footer, contacto, datos estructurados para Google).
 */
export const BUSINESS = {
  name: "Yasí Travel",
  legalName: "Yasí Travel Remisería",
  slogan: "Tu viaje comienza con nosotros",
  /** Solo números, con código de país. Se usa en los links wa.me */
  whatsapp: "5493757680410",
  /** Cómo se muestra el teléfono en pantalla */
  phoneDisplay: "+54 9 3757 68-0410",
  phoneTel: "+5493757680410",
  address: {
    street: "RN12 km 4,5",
    locality: "Puerto Iguazú",
    region: "Misiones",
    postalCode: "N3370",
    country: "AR",
  },
  /** Coordenadas de la base (las del sitio anterior): solo se usan en los datos estructurados para Google */
  geo: { lat: -25.622035721460172, lng: -54.55271446479825 },
  /** Dominio público con www (Vercel redirige el dominio sin www) */
  siteUrl: "https://www.yasitravel.com",
  /** ID de Google Analytics 4. Dejar vacío para desactivar. */
  gaId: "G-E8VDC6T3B2",
  /** Capacidad del vehículo: se usa en el cotizador y en la FAQ */
  vehicle: { model: "Fiat Cronos 2026", seats: 4, bigBags: 3 },
  credit: { name: "NEXUS Dev", url: "https://nexus-web-theta-woad.vercel.app/" },
} as const;

/** Arma un link de WhatsApp con el mensaje ya escrito. */
export function waUrl(message: string) {
  return `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(message)}`;
}
