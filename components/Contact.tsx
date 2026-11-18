import Image from "next/image";
import { Clock, MapPin, Phone } from "lucide-react";
import type { Dict } from "@/lib/i18n";
import { SECTIONS } from "@/lib/i18n";
import { BUSINESS, waUrl } from "@/content/business";
import { Reveal, WordsReveal } from "./ui/Reveal";
import { WhatsAppIcon } from "./ui/Icons";

export default function Contact({ t }: { t: Dict }) {
  const address = `${BUSINESS.address.street}, ${BUSINESS.address.locality}, ${BUSINESS.address.region}`;
  return (
    <section id={SECTIONS.contact} className="relative isolate overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 -z-10">
        <Image src="/img/contact-cataratas.webp" alt="" fill sizes="100vw" quality={70} className="object-cover" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#040a1a_0%,rgba(4,10,26,0.78)_30%,rgba(4,10,26,0.82)_70%,#040a1a_100%)]" />
      </div>

      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal y={10}>
            <span className="eyebrow">{t.contact.eyebrow}</span>
          </Reveal>
          <WordsReveal
            text={t.contact.title}
            className="mt-4 font-serif text-[2.4rem] font-semibold leading-[1.05] text-ink sm:text-[3.2rem] lg:text-[3.8rem]"
          />
          <Reveal delay={0.12} y={12}>
            <p className="mt-5 text-[17px] leading-relaxed text-ink-muted">{t.contact.sub}</p>
          </Reveal>
          <Reveal delay={0.2} y={12} className="mt-8 flex flex-wrap justify-center gap-3">
            <a href={waUrl(t.contact.waDefault)} target="_blank" rel="noopener" className="btn btn-wa">
              <WhatsAppIcon />
              {t.contact.cta}
            </a>
            <a href={`tel:${BUSINESS.phoneTel}`} className="btn btn-outline">
              <Phone size={16} className="text-gold" aria-hidden />
              {BUSINESS.phoneDisplay}
            </a>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="mx-auto mt-14 grid max-w-5xl gap-4 sm:grid-cols-3">
          <div className="card flex items-start gap-3 bg-navy-3/70 p-5 backdrop-blur-sm">
            <MapPin size={18} className="mt-0.5 shrink-0 text-gold" aria-hidden />
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-dim">{t.contact.addressLabel}</p>
              <p className="mt-1 text-[15px] text-ink">{address}</p>
            </div>
          </div>
          <div className="card flex items-start gap-3 bg-navy-3/70 p-5 backdrop-blur-sm">
            <Clock size={18} className="mt-0.5 shrink-0 text-gold" aria-hidden />
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-dim">{t.contact.hoursLabel}</p>
              <p className="mt-1 text-[15px] text-ink">{t.contact.hours}</p>
            </div>
          </div>
          <div className="card flex items-start gap-3 bg-navy-3/70 p-5 backdrop-blur-sm">
            <WhatsAppIcon className="mt-0.5 h-[18px] w-[18px] shrink-0 text-wa" />
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-dim">{t.common.whatsapp}</p>
              <a href={waUrl(t.contact.waDefault)} target="_blank" rel="noopener" className="mt-1 block text-[15px] text-ink transition-colors duration-200 hover:text-gold-light">
                {BUSINESS.phoneDisplay}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
