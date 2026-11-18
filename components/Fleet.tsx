import Image from "next/image";
import { Languages, MapPinned } from "lucide-react";
import type { Dict } from "@/lib/i18n";
import { SECTIONS } from "@/lib/i18n";
import SectionHeading from "./ui/SectionHeading";
import { Reveal, Stagger, StaggerItem } from "./ui/Reveal";
import SpotCard from "./ui/SpotCard";

export default function Fleet({ t }: { t: Dict }) {
  const [big, ...small] = t.fleet.photos;
  return (
    <section id={SECTIONS.fleet} className="relative border-t border-white/[0.06] bg-navy-2/40 py-20 sm:py-28">
      <div className="container-x">
        <SectionHeading tag={t.fleet.eyebrow} title={t.fleet.title} subtitle={t.fleet.sub} />

        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:gap-12">
          {/* Vehículo */}
          <div>
            <Reveal className="grid grid-cols-2 gap-3">
              <div className="relative col-span-2 aspect-[16/9] overflow-hidden rounded-3xl border border-white/[0.08]">
                <Image src={big.src} alt={big.alt} fill sizes="(max-width: 1024px) 100vw, 45vw" className="object-cover" />
              </div>
              {small.map((p) => (
                <div key={p.src} className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/[0.08]">
                  <Image src={p.src} alt={p.alt} fill sizes="(max-width: 1024px) 50vw, 22vw" className="object-cover" />
                </div>
              ))}
            </Reveal>
            <Stagger gap={0.06} className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2">
              {t.fleet.specs.map((s) => (
                <StaggerItem key={s.k} className="rounded-2xl border border-white/[0.08] bg-navy-3/60 px-4 py-3">
                  <p className="text-[10.5px] font-semibold uppercase tracking-[0.18em] text-gold">{s.k}</p>
                  <p className="mt-1 text-[15px] font-medium text-ink">{s.v}</p>
                </StaggerItem>
              ))}
            </Stagger>
          </div>

          {/* Choferes */}
          <Stagger gap={0.1} className="no-scrollbar -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-5 sm:overflow-visible sm:px-0 sm:pb-0">
            {t.fleet.drivers.map((d) => (
              <StaggerItem key={d.name} className="w-[82vw] max-w-[360px] shrink-0 snap-start sm:h-full sm:w-auto sm:max-w-none">
                <SpotCard as="article" className="card flex h-full flex-col overflow-hidden shadow-card">
                  <div className="relative aspect-[4/4.2] overflow-hidden">
                    <Image src={d.img} alt={d.name} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" className="object-cover object-top" />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_45%,rgba(11,24,56,0.95)_100%)]" />
                    <div className="absolute inset-x-0 bottom-0 p-5">
                      <h3 className="font-serif text-[1.45rem] font-semibold text-ink">{d.name}</h3>
                      <p className="mt-0.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-gold">{t.fleet.role}</p>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col gap-4 p-5 pt-4">
                    <p className="border-l-2 border-gold/60 pl-3 font-serif text-[15px] italic leading-relaxed text-ink">“{d.quote}”</p>
                    <p className="flex items-start gap-2 text-[13px] text-ink-muted">
                      <Languages size={15} className="mt-0.5 shrink-0 text-gold" aria-hidden />
                      <span>
                        <span className="sr-only">{t.fleet.languages}: </span>
                        {d.langs}
                      </span>
                    </p>
                    <div>
                      <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-dim">
                        <MapPinned size={14} className="text-gold" aria-hidden />
                        {t.fleet.knows}
                      </p>
                      <ul className="mt-2 flex flex-wrap gap-1.5">
                        {d.knows.map((k) => (
                          <li key={k} className="rounded-full border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 text-[12px] text-ink-muted">
                            {k}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </SpotCard>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
