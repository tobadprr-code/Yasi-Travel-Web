import Image from "next/image";
import { Globe, Plane, Wallet } from "lucide-react";
import type { Dict } from "@/lib/i18n";
import { SECTIONS } from "@/lib/i18n";
import { BUSINESS, waUrl } from "@/content/business";
import { RichText } from "./ui/Text";
import { WhatsAppIcon } from "./ui/Icons";

const FACT_ICONS = [Globe, Plane, Wallet];

export default function Hero({ t }: { t: Dict }) {
  return (
    <header id={SECTIONS.top} className="relative isolate overflow-hidden">
      {/* Foto de fondo: las Cataratas, con zoom lento y degradados para legibilidad */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <Image
          src="/img/gallery-cataratas-panorama.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          quality={78}
          className="slow-zoom object-cover object-[60%_35%]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(4,10,26,0.94)_0%,rgba(4,10,26,0.7)_45%,rgba(4,10,26,0.35)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,10,26,0.55)_0%,rgba(4,10,26,0.1)_30%,rgba(4,10,26,0.35)_75%,#040a1a_100%)]" />
      </div>

      <div className="container-x flex min-h-[100svh] flex-col justify-center pb-24 pt-32 sm:pt-36 lg:pb-28">
        <div className="max-w-3xl">
          <span className="eyebrow rise">{t.hero.eyebrow}</span>
          <h1 className="rise rise-1 mt-5 font-serif text-[2.7rem] font-semibold leading-[1.04] tracking-[-0.012em] text-ink sm:text-[3.6rem] lg:text-[4.5rem]">
            <RichText text={t.hero.title} />
          </h1>
          <p className="rise rise-2 mt-6 max-w-xl text-[17px] leading-relaxed text-ink-muted sm:text-lg">{t.hero.sub}</p>

          <div className="rise rise-3 mt-8 flex flex-wrap gap-3">
            <a href={waUrl(t.contact.waDefault)} target="_blank" rel="noopener" className="btn btn-gold">
              <WhatsAppIcon className="h-[18px] w-[18px]" />
              {t.hero.cta1}
            </a>
            <a href={`#${SECTIONS.packages}`} className="btn btn-outline">
              {t.hero.cta2}
            </a>
          </div>

          <ul className="rise rise-4 mt-9 flex flex-wrap gap-2.5">
            <li className="chip border-wa/30 bg-wa/10">
              <span className="blink h-2 w-2 rounded-full bg-wa" aria-hidden />
              {t.hero.online}
            </li>
            {t.hero.facts.map((f, i) => {
              const Icon = FACT_ICONS[i] ?? Globe;
              return (
                <li key={f} className="chip">
                  <Icon size={14} className="text-gold" aria-hidden />
                  {f}
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <p className="pointer-events-none absolute bottom-5 left-1/2 hidden -translate-x-1/2 text-[11px] uppercase tracking-[0.22em] text-ink-dim lg:block">
        {BUSINESS.address.street} · {BUSINESS.address.locality} · {BUSINESS.address.region}
      </p>
    </header>
  );
}
