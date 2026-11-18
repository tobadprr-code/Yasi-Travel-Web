import Image from "next/image";
import type { Dict } from "@/lib/i18n";
import { SECTIONS } from "@/lib/i18n";
import { BUSINESS, waUrl } from "@/content/business";

export default function Footer({ t }: { t: Dict }) {
  const links = [
    { id: SECTIONS.services, label: t.nav.services },
    { id: SECTIONS.packages, label: t.nav.packages },
    { id: SECTIONS.builder, label: t.nav.builder },
    { id: SECTIONS.fleet, label: t.nav.fleet },
    { id: SECTIONS.faq, label: t.nav.faq },
  ];
  const address = `${BUSINESS.address.street}, ${BUSINESS.address.locality}, ${BUSINESS.address.region}`;

  return (
    <footer className="border-t border-white/[0.06] bg-[#020611]">
      <div className="container-x grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <a href={`#${SECTIONS.top}`} className="flex items-center gap-2.5" aria-label={t.nav.home}>
            <Image src="/img/yasi-isotipo.png" alt="" width={40} height={40} className="h-10 w-10 object-contain" />
            <span className="leading-none">
              <span className="block font-serif text-[1.35rem] font-bold tracking-[0.12em] text-ink">YASÍ</span>
              <span className="mt-0.5 block text-[9px] font-semibold tracking-[0.42em] text-gold">TRAVEL</span>
            </span>
          </a>
          <p className="mt-4 max-w-sm text-[14px] leading-relaxed text-ink-muted">{t.footer.desc}</p>
          <a
            href={waUrl(t.footer.reviewMsg)}
            target="_blank"
            rel="noopener"
            className="mt-4 inline-block py-1 text-[13px] font-medium text-gold transition-colors duration-200 hover:text-gold-light"
          >
            {t.footer.review} →
          </a>
        </div>

        <nav aria-label={t.footer.nav}>
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">{t.footer.nav}</p>
          <ul className="mt-4 space-y-2.5">
            {links.map((l) => (
              <li key={l.id}>
                <a href={`#${l.id}`} className="inline-block py-1 text-[14px] text-ink-muted transition-[color,transform] duration-200 ease-out hover:translate-x-1 hover:text-ink">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">{t.footer.contact}</p>
          <ul className="mt-4 space-y-1.5 text-[14px] leading-7 text-ink-muted">
            <li>
              <a href={waUrl(t.contact.waDefault)} target="_blank" rel="noopener" className="transition-colors duration-200 hover:text-ink">
                WhatsApp · {BUSINESS.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`tel:${BUSINESS.phoneTel}`} className="transition-colors duration-200 hover:text-ink">
                {t.contact.call} · {BUSINESS.phoneDisplay}
              </a>
            </li>
            <li>{address}</li>
            <li>{t.contact.hours}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/[0.06]">
        <div className="container-x flex flex-col items-center justify-between gap-2 py-5 text-center text-[12.5px] text-ink-dim sm:flex-row sm:text-left">
          <p>
            © {new Date().getFullYear()} {BUSINESS.name}. {t.footer.rights}
          </p>
          <p>
            {t.footer.by}{" "}
            <a href={BUSINESS.credit.url} target="_blank" rel="noopener" className="font-semibold text-gold transition-colors duration-200 hover:text-gold-light">
              {BUSINESS.credit.name}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
