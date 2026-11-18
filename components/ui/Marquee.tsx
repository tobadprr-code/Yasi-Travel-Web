import type { CSSProperties } from "react";
import { cn } from "@/lib/cn";

/**
 * Carrusel infinito hecho solo con CSS (ver `.marquee` en globals.css).
 * Duplica el contenido en dos pistas idénticas para que el loop no tenga corte.
 */
export default function Marquee({
  children,
  className,
  duration = 40,
  gap = "1rem",
  reverse = false,
  pauseOnHover = true,
}: {
  children: React.ReactNode;
  className?: string;
  duration?: number;
  gap?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
}) {
  return (
    <div
      className={cn("marquee", reverse && "marquee-reverse", pauseOnHover && "marquee-pausable", className)}
      style={{ "--duration": `${duration}s`, "--gap": gap } as CSSProperties}
    >
      <div className="marquee-track">{children}</div>
      <div className="marquee-track" aria-hidden>
        {children}
      </div>
    </div>
  );
}
