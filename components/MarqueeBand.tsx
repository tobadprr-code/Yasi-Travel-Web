import type { Dict } from "@/lib/i18n";
import InView from "./ui/InView";
import Marquee from "./ui/Marquee";

/** Franja fina con los destinos, en loop (se pausa fuera de pantalla y con el mouse encima). */
export default function MarqueeBand({ t }: { t: Dict }) {
  return (
    <InView className="relative border-y border-white/[0.06] bg-navy-2/60" aria-hidden>
      <div className="[mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
        <Marquee duration={48} gap="2.75rem" className="py-4">
          {t.marquee.map((m) => (
            <span key={m} className="flex shrink-0 items-center gap-[2.75rem] text-[12px] font-semibold uppercase tracking-[0.26em] text-ink-muted">
              {m}
              <span className="text-gold/70">✦</span>
            </span>
          ))}
        </Marquee>
      </div>
    </InView>
  );
}
