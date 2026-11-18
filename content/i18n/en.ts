import type { Dict } from "./types";

/** ENGLISH TEXTS. Same structure as es.ts. */
export const en: Dict = {
  code: "en",
  htmlLang: "en",
  label: "EN",
  name: "English",
  path: "/en",

  meta: {
    title: "Yasí Travel | Private transfers & taxi service in Puerto Iguazú",
    description:
      "Private transfers in Puerto Iguazú and the Triple Border: IGR airport, Iguazú Falls, Foz do Iguaçu, Ciudad del Este and day trips across Misiones. Professional driver, 24-hour service on WhatsApp in English, Spanish and Portuguese.",
    ogAlt: "Yasí Travel — Private transfers in Puerto Iguazú and the Triple Border",
  },

  nav: {
    services: "Services",
    packages: "Day trips",
    builder: "Build your package",
    fleet: "Fleet",
    faq: "FAQ",
    contact: "Contact",
    whatsapp: "WhatsApp",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    language: "Language",
    home: "Home",
    skip: "Skip to content",
  },

  hero: {
    eyebrow: "Taxi service · Puerto Iguazú · Triple Border",
    title: "Private transfers in Iguazú, *one message away*",
    sub: "Airport, Iguazú Falls, Foz do Iguaçu, Ciudad del Este and all of Misiones, with a professional driver and a 2026 car. Message us and we'll arrange your trip on WhatsApp.",
    cta1: "Book on WhatsApp",
    cta2: "See day trips",
    online: "Open 24 hours, every day",
    facts: ["English · Spanish · Portuguese", "Flight tracking", "Pay in your currency"],
  },

  marquee: [
    "Iguazú Falls",
    "IGR Airport",
    "Foz do Iguaçu",
    "Parque das Aves",
    "Ciudad del Este",
    "Wanda Mines",
    "Moconá Falls",
    "Three Borders Landmark",
    "Itaipu Dam",
    "San Ignacio Ruins",
  ],

  services: {
    eyebrow: "Services",
    title: "A driver for *every kind of trip*",
    sub: "From an on-the-spot ride to a full-day excursion, always with the same standard: punctuality, a spotless car and direct contact.",
    cta: "Request on WhatsApp",
    items: [
      {
        id: "urban",
        title: "Local rides",
        text: "Taxi rides in Puerto Iguazú and surroundings, right away. Request it on WhatsApp and we pick you up.",
        img: "/img/shopping-foz.webp",
        alt: "Yasí Travel's Fiat Cronos parked in Foz do Iguaçu",
        msg: "Hi Yasí Travel! I need a taxi in Puerto Iguazú.",
      },
      {
        id: "airport",
        title: "Airport transfers",
        text: "Iguazú (IGR) and Foz (IGU) airports, with flight tracking to agree on the exact pick-up time.",
        img: "/img/service-airport.webp",
        alt: "Airport transfer",
        msg: "Hi Yasí Travel! I'd like a quote for an airport transfer.",
      },
      {
        id: "tourism",
        title: "Regional tourism",
        text: "Both sides of the Falls, Parque das Aves, Itaipu, Wanda, Moconá and San Ignacio, with a driver who knows every corner.",
        img: "/img/cataratas-5.webp",
        alt: "Iguazú Falls",
        msg: "Hi Yasí Travel! I'd like a quote for a day trip in the region.",
      },
      {
        id: "events",
        title: "Events & business",
        text: "Executive transfers, events and long trips within and beyond Misiones, in total comfort.",
        img: "/img/service-long.webp",
        alt: "Long road trip",
        msg: "Hi Yasí Travel! I'd like a quote for an event transfer or a long trip.",
      },
    ],
  },

  packages: {
    eyebrow: "Day trips",
    title: "Discover the region *with a private transfer*",
    sub: "Departures from Puerto Iguazú or your hotel, at your own pace and with no shuttle timetables. We arrange everything on WhatsApp.",
    tagFull: "Full day",
    tagHalf: "Half day",
    book: "Book",
    msg: "Hi Yasí Travel! I'd like to book the day trip:",
    items: [
      {
        id: "cataratas",
        title: "Iguazú Falls",
        text: "Argentine and Brazilian sides, with door-to-door transfer and time to explore without rushing.",
        img: "/img/cataratas-2.webp",
        alt: "Iguazú Falls",
        full: true,
      },
      {
        id: "aves",
        title: "Parque das Aves",
        text: "A walk among tropical birds in the middle of the jungle, in Foz do Iguaçu (Brazil).",
        img: "/img/entrada-parque-das-aves.webp",
        alt: "Entrance of Parque das Aves",
        full: false,
      },
      {
        id: "triple",
        title: "Triple Border",
        text: "The Three Borders Landmark and a tour across Argentina, Brazil and Paraguay in a single day.",
        img: "/img/package-puerto-noche-1.webp",
        alt: "Puerto Iguazú at night",
        full: false,
      },
      {
        id: "wanda",
        title: "Wanda Mines",
        text: "Gemstones and unique landscapes of Misiones, less than an hour from Puerto Iguazú.",
        img: "/img/minas-wanda.webp",
        alt: "Wanda Mines",
        full: false,
      },
      {
        id: "mocona",
        title: "Moconá Falls",
        text: "One of the natural wonders of Misiones: almost 3 km of waterfalls along the Uruguay River.",
        img: "/img/mocona-2.webp",
        alt: "Moconá Falls",
        full: true,
      },
    ],
  },

  builder: {
    eyebrow: "Tailor-made",
    title: "Build your own package",
    sub: "Tap the places you want to visit and we'll build the route for you.",
    what: "What do you want to see?",
    hint: "Pick as many as you like.",
    other: "Somewhere else",
    otherPh: "Tell us where you want to go",
    summary: "Your package",
    count1: "place selected",
    countN: "places selected",
    empty: "You haven't picked any place yet.",
    duration: "Duration",
    durations: ["Half day", "Full day", "2 days or more", "To be decided"],
    pax: "Passengers",
    paxMore: "5 or more",
    date: "Date",
    notes: "Comments",
    notesPh: "Time, hotel, luggage…",
    send: "Request my package on WhatsApp",
    msg: {
      intro: "Hi Yasí Travel! I'd like to build my own tour package:",
      places: "Places",
      duration: "Duration",
      pax: "Passengers",
      date: "Date",
      notes: "Comments",
      tbd: "To be decided",
    },
  },

  fleet: {
    eyebrow: "Fleet & drivers",
    title: "A spotless car and *people who know the region*",
    sub: "You ride in a 2026 Fiat Cronos with air conditioning, driven by local drivers who speak your language.",
    specs: [
      { k: "Model", v: "Fiat Cronos 2026" },
      { k: "Comfort", v: "Air conditioning" },
      { k: "Capacity", v: "4 passengers" },
      { k: "Luggage", v: "3 large suitcases" },
    ],
    photos: [
      { src: "/img/hero-auto-route.webp", alt: "Fiat Cronos on the road, deep in the Misiones jungle" },
      { src: "/img/service-local.webp", alt: "Fiat Cronos on a trip" },
      { src: "/img/gallery-interior.webp", alt: "Interior of the Fiat Cronos" },
    ],
    role: "Professional driver",
    knows: "Knows very well",
    languages: "Languages",
    drivers: [
      {
        name: "Matías Rivas",
        img: "/img/chofer-1.webp",
        quote: "Besides visiting magical places, I build a bond of family, trust and good vibes with my passengers.",
        langs: "Spanish · Portuguese · English (basic)",
        knows: ["The Falls (both sides)", "Parque das Aves", "Wanda Mines", "Aquarium (Brazil)", "Shopping malls", "Airport", "Paraguay"],
      },
      {
        name: "Carlos Rivas",
        img: "/img/chofer-2.webp",
        quote: "My goal is for every passenger to feel at home and enjoy the trip from start to finish.",
        langs: "Spanish · Portuguese",
        knows: ["The Falls (both sides)", "Iguazú", "Wanda Mines", "Aquarium (Brazil)", "Shopping malls", "Airport", "Paraguay"],
      },
    ],
  },

  faq: {
    eyebrow: "FAQ",
    title: "Got questions?",
    items: [
      {
        q: "What payment methods do you accept?",
        a: "We accept any foreign currency, both in cash and by bank transfer.",
      },
      {
        q: "Do you go to Foz do Iguaçu or Ciudad del Este?",
        a: "Yes, we cover the whole Triple Border: Puerto Iguazú, Foz do Iguaçu (Brazil) and Ciudad del Este (Paraguay).",
      },
      {
        q: "How far ahead should I book?",
        a: "Local rides can be requested right away. For airport transfers or day trips, we recommend a few hours' notice.",
      },
      {
        q: "How many passengers fit in the car?",
        a: "Up to 4 passengers with 3 large suitcases. For bigger groups, message us and we'll arrange it.",
      },
      {
        q: "Do you do long trips?",
        a: "Yes, we arrange trips within and beyond Misiones. Message us and we'll confirm availability and fare.",
      },
      {
        q: "Are you open 24 hours?",
        a: "Yes, we're available 24 hours a day, 7 days a week.",
      },
      {
        q: "Can I build my own tour package?",
        a: "Yes. In “Build your package” pick the places you want to visit and we'll tailor the route with you on WhatsApp.",
      },
    ],
  },

  contact: {
    eyebrow: "Contact",
    title: "Ready to *travel*?",
    sub: "Message us on WhatsApp and book your transfer. We're open 24 hours, every day.",
    cta: "Chat on WhatsApp",
    call: "Call",
    addressLabel: "Base",
    hoursLabel: "Hours",
    hours: "Open 24 hours, every day",
    waDefault: "Hi Yasí Travel! I'd like to book a transfer.",
  },

  footer: {
    desc: "Taxi service and private transfers in Puerto Iguazú and the Triple Border. Your journey starts with us.",
    nav: "Navigation",
    contact: "Contact",
    rights: "All rights reserved.",
    by: "Designed by",
    review: "Already travelled with us? Tell us how it went",
    reviewMsg: "Hi Yasí Travel! Here's how my trip went:",
  },

  common: {
    whatsapp: "WhatsApp",
    whatsappAria: "Message Yasí Travel on WhatsApp",
  },
};
