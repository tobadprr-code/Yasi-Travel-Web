import { cn } from "@/lib/cn";
import { Reveal, WordsReveal } from "./Reveal";

/** Encabezado estándar de sección: etiqueta + título (con *destacado*) + bajada. */
export default function SectionHeading({
  tag,
  title,
  subtitle,
  align = "left",
  className,
  id,
}: {
  tag: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
  id?: string;
}) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      <Reveal y={10}>
        <span className="eyebrow">{tag}</span>
      </Reveal>
      <WordsReveal
        id={id}
        text={title}
        className="mt-4 font-serif text-[2.1rem] font-semibold leading-[1.08] tracking-[-0.01em] text-ink sm:text-[2.75rem] lg:text-[3.25rem]"
      />
      {subtitle ? (
        <Reveal delay={0.12} y={12}>
          <p className={cn("mt-5 max-w-2xl text-[17px] leading-relaxed text-ink-muted", align === "center" && "mx-auto")}>
            {subtitle}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}
