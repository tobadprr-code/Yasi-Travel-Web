# Yasí Travel — sitio web

Web de **Yasí Travel**, remisería y traslados privados en Puerto Iguazú y la Triple Frontera.
Una sola página en tres idiomas (español en `/`, portugués en `/pt`, inglés en `/en`). Todos los
pedidos (servicios, excursiones y el **armador de paquetes**) terminan en un mensaje de WhatsApp ya
escrito.

- Stack: Next.js 15 (App Router) · React 18 · TypeScript · Tailwind CSS 3 · `motion`
- Hosting: Vercel (dominio `www.yasitravel.com`; el dominio sin `www` redirige)
- Sin base de datos ni backend: todo el contenido vive en archivos de este repo.

## Comandos

```bash
npm install          # instalar dependencias (una vez)
npm run dev          # servidor de desarrollo en http://localhost:3000
npm run build        # build de producción
npm run start        # servir el build (http://localhost:3000)
npm run typecheck    # chequeo de tipos
npm run images       # regenerar public/img a partir de los originales de /img
npm run verify       # recorrido automático con Brave (ver "Verificación")
```

## Dónde se edita cada cosa

| Qué querés cambiar | Archivo |
| --- | --- |
| Teléfono / WhatsApp, dirección, coordenadas (datos para Google), ID de Google Analytics, capacidad del auto, link del crédito del footer | `content/business.ts` |
| Textos en español (títulos, servicios, excursiones, FAQ, botones, mensajes de WhatsApp) | `content/i18n/es.ts` |
| Textos en portugués / inglés | `content/i18n/pt.ts` · `content/i18n/en.ts` |
| Lugares que se pueden elegir en "Armá tu propio paquete" | `content/places.ts` |
| Orden de las secciones | `components/Site.tsx` |
| Colores, tipografías y sombras | `tailwind.config.ts` y `app/globals.css` |
| Fotos originales (no se tocan) | `img/` |
| Fotos que usa la web (se generan) | `public/img/` |

### Textos

`content/i18n/es.ts` define la estructura; `pt.ts` y `en.ts` deben tener **las mismas claves**
(TypeScript avisa si falta una). Para destacar una palabra en dorado dentro de un título, ponela
`*entre asteriscos*`: `"Traslados privados en Iguazú, *a un mensaje de distancia*"`.

Las excursiones (`packages.items`) y los servicios (`services.items`) son listas: podés agregar,
sacar o reordenar entradas. Cada servicio tiene un `msg`, que es el mensaje de WhatsApp que se abre
al tocar la tarjeta. Las excursiones usan el texto de `packages.msg` seguido del nombre.

### Armador de paquetes

En `content/places.ts` está la lista de lugares (con el nombre en los tres idiomas) que aparecen
como botones en "Armá tu propio paquete". El orden de la lista es el orden en pantalla. Las
opciones de duración y los textos del mensaje están en `builder` dentro de cada idioma.

### Datos del negocio

`content/business.ts` alimenta los links `wa.me`, el footer, la sección de contacto, el `sitemap`,
el `robots` y los datos estructurados (JSON-LD `TaxiService` + `FAQPage`) que lee Google.
Si cambia el número de WhatsApp, se cambia **solo ahí**.

### Imágenes

Los originales quedan en `img/` tal cual llegaron. `npm run images` genera versiones WebP livianas
en `public/img/` (y los íconos `app/icon.png`, `app/apple-icon.png`, `public/icon-*.png` a partir
de `img/yasi-isotipo.png`). Si sumás una foto nueva: la ponés en `img/`, corrés `npm run images` y
la referenciás como `/img/nombre.webp` desde los textos (campos `img`).

`public/og.jpg` (imagen que muestran WhatsApp/Facebook al compartir el link) la genera
`npm run verify` a partir del hero; también podés reemplazarla por una imagen propia de 1200×630.

### Idiomas

Las rutas son fijas: `/` (es), `/pt`, `/en`. Cada una se genera estática en el build con su
`<html lang>`, `canonical`, `hreflang`, Open Graph y JSON-LD propios. El selector del menú son
links comunes entre esas rutas. Para agregar un idioma: crear `content/i18n/xx.ts` con la misma
estructura, sumarlo a `DICTS`/`LANGS` en `lib/i18n.ts` y a `generateStaticParams` en
`app/(intl)/[lang]/layout.tsx`, y agregar su nombre a `name` en cada lugar de `content/places.ts`.

## Estructura

```
app/
  (es)/            layout + page de la raíz (español)
  (intl)/[lang]/   layout + page de /pt y /en
  globals.css      base, componentes (.btn, .field, .card…) y utilidades de movimiento
  sitemap.ts · robots.ts · manifest.ts · icon.png · apple-icon.png
components/
  Site.tsx         arma la página: Navbar, Hero, MarqueeBand, Services, Packages, Builder,
                   Fleet, Faq, Contact, Footer, WhatsAppFloat
  Builder.tsx      armá tu propio paquete
  ui/              Reveal (aparición al scroll, títulos palabra por palabra), Marquee,
                   InView (pausa loops fuera de pantalla), SpotCard (reflejo que sigue al mouse)
content/           business.ts · places.ts · i18n/{es,pt,en}.ts
lib/               i18n.ts · seo.ts (metadata + JSON-LD)
scripts/           optimize-images.mjs · verify.mjs
img/               fotos originales (archivo)
public/img/        fotos optimizadas (generadas)
```

## Animaciones: reglas que sigue el sitio

- Micro-interacciones de 150–300 ms, solo `transform` y `opacity`, easing `cubic-bezier(0.22, 1, 0.36, 1)`.
- Aparición al scroll una sola vez (`components/ui/Reveal.tsx`), títulos palabra por palabra.
- El hero entra con animaciones **CSS** (`.rise`): se ve aunque el JavaScript tarde o falle.
- `prefers-reduced-motion`: todo pasa a ser instantáneo (ver `app/globals.css`).
- Los loops (marquee) se pausan fuera de pantalla (`InView`) y con el mouse encima.
- Nada tapa el contenido: sin pantalla de carga, sin cursor custom, sin popups.

## Deploy

El sitio corre en Vercel. Con el repo conectado, cada push a la rama principal publica solo; Vercel
detecta Next.js sin configuración extra. Si se publica a mano: `npx vercel --prod` desde esta carpeta.
Variables de entorno: ninguna.

## Verificación

1. `npm run build` y, en otra terminal, `npm run start`.
2. `node scripts/verify.mjs http://localhost:3000 tmp/verify`

El script abre Brave sin ventana (ruta por defecto
`C:\Program Files\BraveSoftware\Brave-Browser\Application\brave.exe`, configurable con la variable
`BRAVE_PATH`) y comprueba, en escritorio y móvil y en los tres idiomas: respuesta 200, idioma del
`<html>` y del título, ausencia de desborde horizontal y de errores de consola, los CTA del hero y de
servicios, el armador de paquetes, la FAQ, que todos los links de WhatsApp tengan el número real y
que el hero se vea con JavaScript desactivado. Deja capturas y `report.json` en la carpeta de salida
y regenera `public/og.jpg`.
