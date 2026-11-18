import Image from "next/image";
import type { Dict } from "@/lib/i18n";
import { SECTIONS } from "@/lib/i18n";
import { waUrl } from "@/content/business";
import SectionHeading from "./ui/SectionHeading";
import { Stagger, StaggerItem } from "./ui/Reveal";
import SpotCard from "./ui/SpotCard";
import { WhatsAppIcon } from "./ui/Icons";

export default function Packages({ t }: { t: Dict }) {
  return (
    <section id={SECTIONS.packages} className="relative overflow-hidden py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-full bg-[radial-gradient(900px_420px_at_85%_0%,rgba(233,185,73,0.07),transparent_65%)]" />
      <div className="container-x">
        <SectionHeading tag={t.packages.eyebrow} title={t.packages.title} subtitle={t.packages.sub} />

        <Stagger
          gap={0.06}
          className="no-scrollbar -mx-5 mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-5 sm:overflow-visible sm:px-0 lg:grid-cols-6 lg:[&>*:nth-child(4)]:col-start-2"
        >
          {t.packages.items.map((it) => (
            <StaggerItem key={it.id} className="w-[80vw] max-w-[360px] shrink-0 snap-start sm:w-auto sm:max-w-none lg:col-span-2">
              <SpotCard as="article" className="card group flex h-full flex-col overflow-hidden shadow-card">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={it.img}
                    alt={it.alt}
                    fill
                    sizes="(max-width: 640px) 80vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_55%,rgba(11,24,56,0.9)_100%)]" />
                  <span className="absolute left-4 top-4 rounded-full border border-gold/30 bg-navy/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-gold-light backdrop-blur-sm">
                    {it.full ? t.packages.tagFull : t.packages.tagHalf}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-serif text-[1.35rem] font-semibold leading-tight text-ink">{it.title}</h3>
                  <p className="mt-3 flex-1 text-[14px] leading-relaxed text-ink-muted">{it.text}</p>
                  <a
                    href={waUrl(`${t.packages.msg} ${it.title}.`)}
                    target="_blank"
                    rel="noopener"
                    className="btn btn-sm btn-outline mt-5 w-full hover:border-wa/60"
                  >
                    <WhatsAppIcon className="h-4 w-4 text-wa" />
                    {t.packages.book}
                  </a>
                </div>
              </SpotCard>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
