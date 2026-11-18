"use client";

import { useEffect, useRef } from "react";

/**
 * Marca su contenedor con data-inview="true|false" según esté o no en pantalla.
 * El CSS global pausa todas las animaciones en loop de los bloques que no se ven.
 * Escribe el atributo directo en el DOM: no provoca re-renders de React.
 */
export default function InView({
  children,
  className,
  rootMargin = "15% 0px",
}: {
  children: React.ReactNode;
  className?: string;
  rootMargin?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        el.dataset.inview = entry.isIntersecting ? "true" : "false";
      },
      { rootMargin },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [rootMargin]);

  return (
    <div ref={ref} data-inview="false" className={className}>
      {children}
    </div>
  );
}
