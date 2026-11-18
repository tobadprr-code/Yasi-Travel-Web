"use client";

import { cn } from "@/lib/cn";
import { spotlightMove } from "./spotlight";

/** Tarjeta con reflejo dorado que sigue al mouse (no hace nada en pantallas táctiles). */
export default function SpotCard({
  children,
  className,
  as: Tag = "div",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "article" | "li";
}) {
  return (
    <Tag className={cn("spotlight", className)} onPointerMove={spotlightMove}>
      {children}
    </Tag>
  );
}
