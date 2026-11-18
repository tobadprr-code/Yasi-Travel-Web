import type { PointerEvent } from "react";

/**
 * Handler para elementos con la clase `.spotlight` (ver globals.css):
 * guarda la posición del mouse en variables CSS para que el reflejo lo siga.
 * No usa estado de React, así que no provoca re-renders.
 */
export function spotlightMove(e: PointerEvent<HTMLElement>) {
  if (e.pointerType !== "mouse") return;
  const el = e.currentTarget;
  const r = el.getBoundingClientRect();
  el.style.setProperty("--mx", `${e.clientX - r.left}px`);
  el.style.setProperty("--my", `${e.clientY - r.top}px`);
}
