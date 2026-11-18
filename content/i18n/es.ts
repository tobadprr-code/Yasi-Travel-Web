/**
 * TEXTOS EN ESPAÑOL (idioma base). Los otros idiomas copian esta misma estructura.
 * Para destacar una palabra en dorado dentro de un título, ponela *entre asteriscos*.
 */
export const es = {
  code: "es",
  htmlLang: "es-AR",
  label: "ES",
  name: "Español",
  path: "/",

  meta: {
    title: "Yasí Travel | Remisería y traslados privados en Puerto Iguazú",
    description:
      "Traslados privados en Puerto Iguazú y la Triple Frontera: aeropuerto IGR, Cataratas, Foz do Iguaçu, Ciudad del Este y excursiones por Misiones. Chofer profesional, atención 24 h por WhatsApp en español, portugués e inglés.",
    ogAlt: "Yasí Travel — Traslados privados en Puerto Iguazú y la Triple Frontera",
  },

  nav: {
    services: "Servicios",
    packages: "Excursiones",
    builder: "Armá tu paquete",
    fleet: "Flota",
    faq: "Preguntas",
    contact: "Contacto",
    whatsapp: "WhatsApp",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    language: "Idioma",
    home: "Inicio",
    skip: "Saltar al contenido",
  },

  hero: {
    eyebrow: "Remisería · Puerto Iguazú · Triple Frontera",
    title: "Traslados privados en Iguazú, *a un mensaje de distancia*",
    sub: "Aeropuerto, Cataratas, Foz do Iguaçu, Ciudad del Este y todo Misiones, con chofer profesional y auto 2026. Escribinos y coordinamos tu viaje por WhatsApp.",
    cta1: "Reservar por WhatsApp",
    cta2: "Ver excursiones",
    online: "Atención 24 h, todos los días",
    facts: ["Español · Portugués · Inglés", "Seguimiento de vuelos", "Pagás en tu moneda"],
  },

  marquee: [
    "Cataratas del Iguazú",
    "Aeropuerto IGR",
    "Foz do Iguaçu",
    "Parque das Aves",
    "Ciudad del Este",
    "Minas de Wanda",
    "Saltos del Moconá",
    "Hito Tres Fronteras",
    "Represa de Itaipú",
    "Ruinas de San Ignacio",
  ],

  services: {
    eyebrow: "Servicios",
    title: "Un chofer para *cada tipo de viaje*",
    sub: "Desde un remís al instante hasta un día completo de excursión, siempre con el mismo estándar: puntualidad, auto impecable y atención directa.",
    cta: "Pedir por WhatsApp",
    items: [
      {
        id: "urban",
        title: "Viajes urbanos",
        text: "Remís en Puerto Iguazú y alrededores, en el momento. Pedilo por WhatsApp y te pasamos a buscar.",
        img: "/img/shopping-foz.webp",
        alt: "Fiat Cronos de Yasí Travel estacionado en Foz do Iguaçu",
        msg: "Hola Yasí Travel! Necesito un remís en Puerto Iguazú.",
      },
      {
        id: "airport",
        title: "Traslados al aeropuerto",
        text: "Aeropuerto de Iguazú (IGR) y de Foz (IGU), con seguimiento del vuelo para coordinar la hora exacta.",
        img: "/img/service-airport.webp",
        alt: "Traslado al aeropuerto",
        msg: "Hola Yasí Travel! Quiero cotizar un traslado al aeropuerto.",
      },
      {
        id: "tourism",
        title: "Turismo regional",
        text: "Cataratas de los dos lados, Parque das Aves, Itaipú, Wanda, Moconá y San Ignacio, con un chofer que conoce cada rincón.",
        img: "/img/cataratas-5.webp",
        alt: "Cataratas del Iguazú",
        msg: "Hola Yasí Travel! Quiero cotizar una excursión por la región.",
      },
      {
        id: "events",
        title: "Eventos y negocios",
        text: "Traslados ejecutivos, eventos y viajes largos dentro y fuera de Misiones, con total comodidad.",
        img: "/img/service-long.webp",
        alt: "Viaje largo por ruta",
        msg: "Hola Yasí Travel! Quiero cotizar un traslado para un evento o un viaje largo.",
      },
    ],
  },

  packages: {
    eyebrow: "Excursiones",
    title: "Descubrí la región *con traslado privado*",
    sub: "Salidas desde Puerto Iguazú o tu hotel, a tu ritmo y sin horarios de combi. Las armamos por WhatsApp.",
    tagFull: "Día completo",
    tagHalf: "Medio día",
    book: "Reservar",
    msg: "Hola Yasí Travel! Quiero reservar la excursión:",
    items: [
      {
        id: "cataratas",
        title: "Cataratas del Iguazú",
        text: "Lado argentino y brasileño, con traslado puerta a puerta y tiempo para recorrer sin apuro.",
        img: "/img/cataratas-2.webp",
        alt: "Cataratas del Iguazú",
        full: true,
      },
      {
        id: "aves",
        title: "Parque das Aves",
        text: "Un paseo entre aves tropicales en plena selva, en Foz do Iguaçu (Brasil).",
        img: "/img/entrada-parque-das-aves.webp",
        alt: "Entrada del Parque das Aves",
        full: false,
      },
      {
        id: "triple",
        title: "Triple Frontera",
        text: "Hito de las Tres Fronteras y recorrido por Argentina, Brasil y Paraguay en un mismo día.",
        img: "/img/package-puerto-noche-1.webp",
        alt: "Puerto Iguazú de noche",
        full: false,
      },
      {
        id: "wanda",
        title: "Minas de Wanda",
        text: "Piedras preciosas y paisajes únicos de Misiones, a menos de una hora de Puerto Iguazú.",
        img: "/img/minas-wanda.webp",
        alt: "Minas de Wanda",
        full: false,
      },
      {
        id: "mocona",
        title: "Saltos del Moconá",
        text: "Una de las maravillas naturales de Misiones: casi 3 km de saltos a lo largo del río Uruguay.",
        img: "/img/mocona-2.webp",
        alt: "Saltos del Moconá",
        full: true,
      },
    ],
  },

  builder: {
    eyebrow: "A tu medida",
    title: "Armá tu propio paquete",
    sub: "Tocá los lugares que querés conocer y te armamos el recorrido.",
    what: "¿Qué querés conocer?",
    hint: "Elegí todos los que quieras.",
    other: "Otro lugar",
    otherPh: "Contanos a dónde querés ir",
    summary: "Tu paquete",
    count1: "lugar elegido",
    countN: "lugares elegidos",
    empty: "Todavía no elegiste ningún lugar.",
    duration: "Duración",
    durations: ["Medio día", "Día completo", "2 días o más", "A definir"],
    pax: "Pasajeros",
    paxMore: "5 o más",
    date: "Fecha",
    notes: "Comentarios",
    notesPh: "Horario, hotel, equipaje…",
    send: "Pedir mi paquete por WhatsApp",
    msg: {
      intro: "Hola Yasí Travel! Quiero armar mi propio paquete turístico:",
      places: "Lugares",
      duration: "Duración",
      pax: "Pasajeros",
      date: "Fecha",
      notes: "Comentarios",
      tbd: "A definir",
    },
  },

  fleet: {
    eyebrow: "Flota y choferes",
    title: "Un auto impecable y *gente que conoce la región*",
    sub: "Viajás en un Fiat Cronos 2026 con aire acondicionado, manejado por choferes locales que hablan tu idioma.",
    specs: [
      { k: "Modelo", v: "Fiat Cronos 2026" },
      { k: "Confort", v: "Aire acondicionado" },
      { k: "Capacidad", v: "4 pasajeros" },
      { k: "Equipaje", v: "3 valijas grandes" },
    ],
    photos: [
      { src: "/img/hero-auto-route.webp", alt: "Fiat Cronos en la ruta, en plena selva misionera" },
      { src: "/img/service-local.webp", alt: "Fiat Cronos de viaje" },
      { src: "/img/gallery-interior.webp", alt: "Interior del Fiat Cronos" },
    ],
    role: "Chofer profesional",
    knows: "Conoce muy bien",
    languages: "Idiomas",
    drivers: [
      {
        name: "Matías Rivas",
        img: "/img/chofer-1.webp",
        quote: "Además de conocer lugares mágicos, con los pasajeros se crea un vínculo de familia, confianza y muy buena onda.",
        langs: "Español · Portugués · Inglés (básico)",
        knows: ["Cataratas (ambos lados)", "Parque das Aves", "Minas de Wanda", "Acuario (Brasil)", "Shoppings", "Aeropuerto", "Paraguay"],
      },
      {
        name: "Carlos Rivas",
        img: "/img/chofer-2.webp",
        quote: "Mi objetivo es que cada pasajero se sienta como en casa y disfrute el viaje de principio a fin.",
        langs: "Español · Portugués",
        knows: ["Cataratas (ambos lados)", "Iguazú", "Minas de Wanda", "Acuario (Brasil)", "Shoppings", "Aeropuerto", "Paraguay"],
      },
    ],
  },

  faq: {
    eyebrow: "Preguntas frecuentes",
    title: "¿Tenés dudas?",
    items: [
      {
        q: "¿Qué medios de pago aceptan?",
        a: "Aceptamos cualquier moneda extranjera, tanto en efectivo como por transferencia.",
      },
      {
        q: "¿Viajan a Foz do Iguaçu o Ciudad del Este?",
        a: "Sí, cubrimos toda la Triple Frontera: Puerto Iguazú, Foz do Iguaçu (Brasil) y Ciudad del Este (Paraguay).",
      },
      {
        q: "¿Con cuánta anticipación debo reservar?",
        a: "Para viajes urbanos podés pedirlo al instante. Para aeropuerto o excursiones, recomendamos avisar con algunas horas de anticipación.",
      },
      {
        q: "¿Cuántos pasajeros entran?",
        a: "Hasta 4 pasajeros con 3 valijas grandes. Si son más personas, escribinos y lo coordinamos.",
      },
      {
        q: "¿Hacen viajes largos?",
        a: "Sí, coordinamos viajes dentro y fuera de Misiones. Escribinos y confirmamos disponibilidad y tarifa.",
      },
      {
        q: "¿Atienden las 24 horas?",
        a: "Sí, estamos disponibles las 24 horas, los 7 días de la semana.",
      },
      {
        q: "¿Puedo armar mi propio paquete turístico?",
        a: "Sí. En “Armá tu paquete” elegí los lugares que querés conocer y te armamos el recorrido a tu medida por WhatsApp.",
      },
    ],
  },

  contact: {
    eyebrow: "Contacto",
    title: "¿Listo para *viajar*?",
    sub: "Escribinos por WhatsApp y reservá tu traslado. Atendemos las 24 horas, todos los días.",
    cta: "Chatear por WhatsApp",
    call: "Llamar",
    addressLabel: "Base",
    hoursLabel: "Horario",
    hours: "Atención 24 horas, todos los días",
    waDefault: "Hola Yasí Travel! Quiero reservar un traslado.",
  },

  footer: {
    desc: "Remisería y traslados privados en Puerto Iguazú y la Triple Frontera. Tu viaje comienza con nosotros.",
    nav: "Navegación",
    contact: "Contacto",
    rights: "Todos los derechos reservados.",
    by: "Diseñada por",
    review: "¿Ya viajaste con nosotros? Contanos cómo fue",
    reviewMsg: "Hola Yasí Travel! Les cuento cómo fue mi viaje:",
  },

  common: {
    whatsapp: "WhatsApp",
    whatsappAria: "Escribir a Yasí Travel por WhatsApp",
  },
};
