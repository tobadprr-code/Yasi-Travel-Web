import { Fragment } from "react";

export type Piece = { text: string; accent: boolean };
export type Group = { pieces: Piece[]; space: boolean };

/**
 * Convierte "Hola *mundo lindo*, chau" en grupos de palabras.
 * Lo que va entre *asteriscos* queda marcado como destacado, y la puntuación
 * pegada a una palabra viaja con ella (así nunca queda una coma sola en otra línea).
 */
export function tokenize(text: string): Group[] {
  const groups: Group[] = [];
  let pendingSpace = false;

  text.split(/\*([^*]+)\*/g).forEach((part, i) => {
    const accent = i % 2 === 1;
    const re = /(\s*)(\S+)/g;
    let m: RegExpExecArray | null;
    while ((m = re.exec(part))) {
      const space = pendingSpace || m[1].length > 0;
      pendingSpace = false;
      const piece = { text: m[2], accent };
      if (!space && groups.length > 0) groups[groups.length - 1].pieces.push(piece);
      else groups.push({ pieces: [piece], space });
    }
    if (/\s$/.test(part)) pendingSpace = true;
  });

  return groups;
}

export function Pieces({ pieces }: { pieces: Piece[] }) {
  return (
    <>
      {pieces.map((p, i) =>
        p.accent ? (
          <em key={i} className="accent">
            {p.text}
          </em>
        ) : (
          <Fragment key={i}>{p.text}</Fragment>
        ),
      )}
    </>
  );
}

/** Título estático con *destacados* (sin animación JS: sirve para el hero). */
export function RichText({ text }: { text: string }) {
  const groups = tokenize(text);
  return (
    <>
      {groups.map((g, i) => (
        <Fragment key={i}>
          {i > 0 && g.space ? " " : null}
          <Pieces pieces={g.pieces} />
        </Fragment>
      ))}
    </>
  );
}
