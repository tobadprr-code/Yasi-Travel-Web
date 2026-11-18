import { es } from "@/content/i18n/es";
import { pt } from "@/content/i18n/pt";
import { en } from "@/content/i18n/en";
import type { Dict } from "@/content/i18n/types";
import type { Lang } from "@/content/places";

export type { Dict, Lang };

export const DICTS: Record<Lang, Dict> = { es, pt, en };
export const LANGS: Lang[] = ["es", "pt", "en"];
export const DEFAULT_LANG: Lang = "es";

export function isLang(x: string): x is Lang {
  return (LANGS as string[]).includes(x);
}

export function getDict(lang: Lang): Dict {
  return DICTS[lang] ?? es;
}

/** Ruta pública de cada idioma: "/" para español, "/pt" y "/en" para los demás. */
export function langPath(lang: Lang) {
  return DICTS[lang].path;
}

/** IDs de las secciones (anclas). Son iguales en los tres idiomas para que los links no cambien. */
export const SECTIONS = {
  top: "inicio",
  services: "servicios",
  packages: "excursiones",
  builder: "armar",
  fleet: "flota",
  faq: "preguntas",
  contact: "contacto",
} as const;
