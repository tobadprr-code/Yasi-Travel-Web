import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Dict } from "@/lib/i18n";
import { SECTIONS } from "@/lib/i18n";
import { waUrl } from "@/content/business";
import SectionHeading from "./ui/SectionHeading";
import { Stagger, StaggerItem } from "./ui/Reveal";
import { WhatsAppIcon } from "./ui/Icons";

export default function Services({ t }: { t: Dict }) {
  return (
    <section id={SECTIONS.services} className="relative py-20 sm:py-28">
      <div className="container-x">
        <SectionHeading tag={t.services.eyebrow} title={t.services.title} subtitle={t.services.sub} />

        <Stagger
          gap={0.07}
          className="no-scrollbar -mx-5 mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 lg:grid-cols-4"
        >
          {t.services.items.map((it, i) => (
            <StaggerItem key={it.id} className="w-[76vw] max-w-[330px] shrink-0 snap-start sm:w-auto sm:max-w-none">
              <a
                href={waUrl(it.msg)}
                target="_blank"
                rel="noopener"
                className="group relative block aspect-[3/4] overflow-hidden rounded-3xl border border-white/[0.08] bg-navy-3 shadow-card transition-[border-color,transform] duration-300 ease-out hover:-translate-y-1 hover:border-gold/40"
              >
                <Image
                  src={it.img}
                  alt={it.alt}
                  fill
                  sizes="(max-width: 640px) 76vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                  loading={i < 2 ? "eager" : "lazy"}
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,10,26,0.05)_0%,rgba(4,10,26,0.25)_40%,rgba(4,10,26,0.94)_100%)]" />
                <span className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-navy/50 text-ink backdrop-blur-sm transition-[background-color,color] duration-300 group-hover:bg-gold group-hover:text-gold-ink">
                  <ArrowUpRight size={16} className="transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <h3 className="font-serif text-[1.4rem] font-semibold leading-tight text-ink">{it.title}</h3>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-ink-muted">{it.text}</p>
                  <span className="mt-3 inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.16em] text-gold">
                    <WhatsAppIcon className="h-3.5 w-3.5 text-wa" />
                    {t.services.cta}
                  </span>
                </div>
              </a>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
