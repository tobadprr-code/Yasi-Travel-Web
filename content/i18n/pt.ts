import type { Dict } from "./types";

/** TEXTOS EM PORTUGUÊS (Brasil). Mesma estrutura de es.ts. */
export const pt: Dict = {
  code: "pt",
  htmlLang: "pt-BR",
  label: "PT",
  name: "Português",
  path: "/pt",

  meta: {
    title: "Yasí Travel | Transfers e traslados privativos em Puerto Iguazú",
    description:
      "Traslados privativos em Puerto Iguazú e na Tríplice Fronteira: aeroporto IGR, Cataratas, Foz do Iguaçu, Ciudad del Este e passeios por Misiones. Motorista profissional, atendimento 24 h pelo WhatsApp em português, espanhol e inglês.",
    ogAlt: "Yasí Travel — Traslados privativos em Puerto Iguazú e na Tríplice Fronteira",
  },

  nav: {
    services: "Serviços",
    packages: "Passeios",
    builder: "Monte seu pacote",
    fleet: "Frota",
    faq: "Dúvidas",
    contact: "Contato",
    whatsapp: "WhatsApp",
    openMenu: "Abrir menu",
    closeMenu: "Fechar menu",
    language: "Idioma",
    home: "Início",
    skip: "Pular para o conteúdo",
  },

  hero: {
    eyebrow: "Remisería · Puerto Iguazú · Tríplice Fronteira",
    title: "Traslados privativos em Iguaçu, *a uma mensagem de distância*",
    sub: "Aeroporto, Cataratas, Foz do Iguaçu, Ciudad del Este e toda Misiones, com motorista profissional e carro 2026. Fale com a gente e combinamos sua viagem pelo WhatsApp.",
    cta1: "Reservar pelo WhatsApp",
    cta2: "Ver passeios",
    online: "Atendimento 24 h, todos os dias",
    facts: ["Português · Espanhol · Inglês", "Monitoramento de voos", "Pague na sua moeda"],
  },

  marquee: [
    "Cataratas do Iguaçu",
    "Aeroporto IGR",
    "Foz do Iguaçu",
    "Parque das Aves",
    "Ciudad del Este",
    "Minas de Wanda",
    "Saltos do Moconá",
    "Marco das Três Fronteiras",
    "Usina de Itaipu",
    "Ruínas de San Ignacio",
  ],

  services: {
    eyebrow: "Serviços",
    title: "Um motorista para *cada tipo de viagem*",
    sub: "De uma corrida na hora até um dia inteiro de passeio, sempre com o mesmo padrão: pontualidade, carro impecável e atendimento direto.",
    cta: "Pedir pelo WhatsApp",
    items: [
      {
        id: "urban",
        title: "Corridas urbanas",
        text: "Remís em Puerto Iguazú e arredores, na hora. Peça pelo WhatsApp e passamos para buscar você.",
        img: "/img/shopping-foz.webp",
        alt: "Fiat Cronos da Yasí Travel estacionado em Foz do Iguaçu",
        msg: "Olá Yasí Travel! Preciso de um remís em Puerto Iguazú.",
      },
      {
        id: "airport",
        title: "Traslados para o aeroporto",
        text: "Aeroporto de Iguazú (IGR) e de Foz (IGU), com monitoramento do voo para combinar a hora exata.",
        img: "/img/service-airport.webp",
        alt: "Traslado para o aeroporto",
        msg: "Olá Yasí Travel! Quero cotar um traslado para o aeroporto.",
      },
      {
        id: "tourism",
        title: "Turismo regional",
        text: "Cataratas dos dois lados, Parque das Aves, Itaipu, Wanda, Moconá e San Ignacio, com um motorista que conhece cada canto.",
        img: "/img/cataratas-5.webp",
        alt: "Cataratas do Iguaçu",
        msg: "Olá Yasí Travel! Quero cotar um passeio pela região.",
      },
      {
        id: "events",
        title: "Eventos e negócios",
        text: "Traslados executivos, eventos e viagens longas dentro e fora de Misiones, com todo o conforto.",
        img: "/img/service-long.webp",
        alt: "Viagem longa pela estrada",
        msg: "Olá Yasí Travel! Quero cotar um traslado para um evento ou uma viagem longa.",
      },
    ],
  },

  packages: {
    eyebrow: "Passeios",
    title: "Descubra a região *com traslado privativo*",
    sub: "Saídas de Puerto Iguazú ou do seu hotel, no seu ritmo e sem horário de van. Montamos tudo pelo WhatsApp.",
    tagFull: "Dia inteiro",
    tagHalf: "Meio dia",
    book: "Reservar",
    msg: "Olá Yasí Travel! Quero reservar o passeio:",
    items: [
      {
        id: "cataratas",
        title: "Cataratas do Iguaçu",
        text: "Lado argentino e brasileiro, com traslado porta a porta e tempo para passear sem pressa.",
        img: "/img/cataratas-2.webp",
        alt: "Cataratas do Iguaçu",
        full: true,
      },
      {
        id: "aves",
        title: "Parque das Aves",
        text: "Um passeio entre aves tropicais em plena mata, em Foz do Iguaçu (Brasil).",
        img: "/img/entrada-parque-das-aves.webp",
        alt: "Entrada do Parque das Aves",
        full: false,
      },
      {
        id: "triple",
        title: "Tríplice Fronteira",
        text: "Marco das Três Fronteiras e passeio por Argentina, Brasil e Paraguai no mesmo dia.",
        img: "/img/package-puerto-noche-1.webp",
        alt: "Puerto Iguazú à noite",
        full: false,
      },
      {
        id: "wanda",
        title: "Minas de Wanda",
        text: "Pedras preciosas e paisagens únicas de Misiones, a menos de uma hora de Puerto Iguazú.",
        img: "/img/minas-wanda.webp",
        alt: "Minas de Wanda",
        full: false,
      },
      {
        id: "mocona",
        title: "Saltos do Moconá",
        text: "Uma das maravilhas naturais de Misiones: quase 3 km de quedas ao longo do rio Uruguai.",
        img: "/img/mocona-2.webp",
        alt: "Saltos do Moconá",
        full: true,
      },
    ],
  },

  builder: {
    eyebrow: "Sob medida",
    title: "Monte seu próprio pacote",
    sub: "Toque nos lugares que quer conhecer e montamos o roteiro para você.",
    what: "O que você quer conhecer?",
    hint: "Escolha quantos quiser.",
    other: "Outro lugar",
    otherPh: "Conte para onde quer ir",
    summary: "Seu pacote",
    count1: "lugar escolhido",
    countN: "lugares escolhidos",
    empty: "Você ainda não escolheu nenhum lugar.",
    duration: "Duração",
    durations: ["Meio dia", "Dia inteiro", "2 dias ou mais", "A definir"],
    pax: "Passageiros",
    paxMore: "5 ou mais",
    date: "Data",
    notes: "Comentários",
    notesPh: "Horário, hotel, bagagem…",
    send: "Pedir meu pacote pelo WhatsApp",
    msg: {
      intro: "Olá Yasí Travel! Quero montar meu próprio pacote turístico:",
      places: "Lugares",
      duration: "Duração",
      pax: "Passageiros",
      date: "Data",
      notes: "Comentários",
      tbd: "A definir",
    },
  },

  fleet: {
    eyebrow: "Frota e motoristas",
    title: "Um carro impecável e *gente que conhece a região*",
    sub: "Você viaja em um Fiat Cronos 2026 com ar-condicionado, dirigido por motoristas locais que falam o seu idioma.",
    specs: [
      { k: "Modelo", v: "Fiat Cronos 2026" },
      { k: "Conforto", v: "Ar-condicionado" },
      { k: "Capacidade", v: "4 passageiros" },
      { k: "Bagagem", v: "3 malas grandes" },
    ],
    photos: [
      { src: "/img/hero-auto-route.webp", alt: "Fiat Cronos na estrada, em plena mata de Misiones" },
      { src: "/img/service-local.webp", alt: "Fiat Cronos em viagem" },
      { src: "/img/gallery-interior.webp", alt: "Interior do Fiat Cronos" },
    ],
    role: "Motorista profissional",
    knows: "Conhece muito bem",
    languages: "Idiomas",
    drivers: [
      {
        name: "Matías Rivas",
        img: "/img/chofer-1.webp",
        quote: "Além de conhecer lugares mágicos, com os passageiros nasce um vínculo de família, confiança e muito boa energia.",
        langs: "Espanhol · Português · Inglês (básico)",
        knows: ["Cataratas (os dois lados)", "Parque das Aves", "Minas de Wanda", "Aquário (Brasil)", "Shoppings", "Aeroporto", "Paraguai"],
      },
      {
        name: "Carlos Rivas",
        img: "/img/chofer-2.webp",
        quote: "Meu objetivo é que cada passageiro se sinta em casa e aproveite a viagem do começo ao fim.",
        langs: "Espanhol · Português",
        knows: ["Cataratas (os dois lados)", "Iguazú", "Minas de Wanda", "Aquário (Brasil)", "Shoppings", "Aeroporto", "Paraguai"],
      },
    ],
  },

  faq: {
    eyebrow: "Perguntas frequentes",
    title: "Tem dúvidas?",
    items: [
      {
        q: "Quais formas de pagamento vocês aceitam?",
        a: "Aceitamos qualquer moeda estrangeira, em dinheiro ou por transferência.",
      },
      {
        q: "Vocês vão a Foz do Iguaçu ou Ciudad del Este?",
        a: "Sim, cobrimos toda a Tríplice Fronteira: Puerto Iguazú, Foz do Iguaçu (Brasil) e Ciudad del Este (Paraguai).",
      },
      {
        q: "Com quanta antecedência devo reservar?",
        a: "Para corridas urbanas, pode pedir na hora. Para aeroporto ou passeios, recomendamos avisar com algumas horas de antecedência.",
      },
      {
        q: "Quantos passageiros cabem?",
        a: "Até 4 passageiros com 3 malas grandes. Se forem mais pessoas, escreva para a gente e combinamos.",
      },
      {
        q: "Fazem viagens longas?",
        a: "Sim, organizamos viagens dentro e fora de Misiones. Escreva e confirmamos disponibilidade e tarifa.",
      },
      {
        q: "Atendem 24 horas?",
        a: "Sim, estamos disponíveis 24 horas, 7 dias por semana.",
      },
      {
        q: "Posso montar meu próprio pacote turístico?",
        a: "Sim. Em “Monte seu pacote” escolha os lugares que quer conhecer e montamos o roteiro sob medida pelo WhatsApp.",
      },
    ],
  },

  contact: {
    eyebrow: "Contato",
    title: "Pronto para *viajar*?",
    sub: "Fale com a gente pelo WhatsApp e reserve seu traslado. Atendemos 24 horas, todos os dias.",
    cta: "Conversar no WhatsApp",
    call: "Ligar",
    addressLabel: "Base",
    hoursLabel: "Horário",
    hours: "Atendimento 24 horas, todos os dias",
    waDefault: "Olá Yasí Travel! Quero reservar um traslado.",
  },

  footer: {
    desc: "Remisería e traslados privativos em Puerto Iguazú e na Tríplice Fronteira. Sua viagem começa com a gente.",
    nav: "Navegação",
    contact: "Contato",
    rights: "Todos os direitos reservados.",
    by: "Desenvolvido por",
    review: "Já viajou com a gente? Conte como foi",
    reviewMsg: "Olá Yasí Travel! Vou contar como foi minha viagem:",
  },

  common: {
    whatsapp: "WhatsApp",
    whatsappAria: "Falar com a Yasí Travel pelo WhatsApp",
  },
};
