/**
 * LUGARES DE "ARMÁ TU PROPIO PAQUETE"
 * Cada lugar tiene su nombre en los tres idiomas. El orden de esta lista es el orden
 * en que aparecen los botones. Para agregar uno, sumá una línea con un id nuevo.
 */
export type Lang = "es" | "pt" | "en";

export type Place = {
  id: string;
  name: Record<Lang, string>;
};

export const PLACES: Place[] = [
  { id: "catar", name: { es: "Cataratas · lado argentino", pt: "Cataratas · lado argentino", en: "Iguazú Falls · Argentine side" } },
  { id: "catbr", name: { es: "Cataratas · lado brasileño", pt: "Cataratas · lado brasileiro", en: "Iguazú Falls · Brazilian side" } },
  { id: "aves", name: { es: "Parque das Aves", pt: "Parque das Aves", en: "Parque das Aves" } },
  { id: "hito", name: { es: "Hito Tres Fronteras", pt: "Marco das Três Fronteiras", en: "Three Borders Landmark" } },
  { id: "itaipu", name: { es: "Represa de Itaipú", pt: "Usina de Itaipu", en: "Itaipu Dam" } },
  { id: "cde", name: { es: "Compras en Ciudad del Este", pt: "Compras em Ciudad del Este", en: "Shopping in Ciudad del Este" } },
  { id: "wanda", name: { es: "Minas de Wanda", pt: "Minas de Wanda", en: "Wanda Mines" } },
  { id: "mocona", name: { es: "Saltos del Moconá", pt: "Saltos do Moconá", en: "Moconá Falls" } },
  { id: "guira", name: { es: "Güirá Oga (refugio de fauna)", pt: "Güirá Oga (refúgio de fauna)", en: "Güirá Oga (wildlife refuge)" } },
  { id: "ruinas", name: { es: "Ruinas de San Ignacio", pt: "Ruínas de San Ignacio", en: "San Ignacio Ruins" } },
];

/** Ids que se muestran en el armador (por defecto, todos). */
export const BUILDER_PLACES = PLACES.map((p) => p.id);

export const placeById = (id: string) => PLACES.find((p) => p.id === id);
