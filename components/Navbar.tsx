"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/cn";
import { DICTS, LANGS, SECTIONS, type Dict, type Lang } from "@/lib/i18n";
import { waUrl } from "@/content/business";
import { WhatsAppIcon } from "./ui/Icons";
import { EASE } from "./ui/Reveal";

function LangSwitch({ lang, className, size = "sm" }: { lang: Lang; className?: string; size?: "sm" | "lg" }) {
  return (
    <div
      role="group"
      aria-label={DICTS[lang].nav.language}
      className={cn("inline-flex rounded-full border border-white/10 bg-white/[0.04] p-0.5", className)}
    >
      {LANGS.map((l) => {
        const active = l === lang;
        return (
          <a
            key={l}
            href={DICTS[l].path}
            hrefLang={DICTS[l].htmlLang}
            lang={DICTS[l].htmlLang}
            aria-current={active ? "page" : undefined}
            className={cn(
              "rounded-full font-semibold transition-colors duration-200",
              size === "sm" ? "px-3 py-2 text-[12px] tracking-wider" : "px-4 py-2.5 text-sm tracking-wider",
              active ? "bg-gold text-gold-ink" : "text-ink-muted hover:text-ink",
            )}
          >
            {DICTS[l].label}
          </a>
        );
      })}
    </div>
  );
}

export default function Navbar({ t, lang }: { t: Dict; lang: Lang }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  const links = [
    { id: SECTIONS.services, label: t.nav.services },
    { id: SECTIONS.packages, label: t.nav.packages },
    { id: SECTIONS.builder, label: t.nav.builder },
    { id: SECTIONS.fleet, label: t.nav.fleet },
    { id: SECTIONS.faq, label: t.nav.faq },
    { id: SECTIONS.contact, label: t.nav.contact },
  ];

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 24);
        ticking = false;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Resalta la sección visible
  useEffect(() => {
    const els = links.map((l) => document.getElementById(l.id)).filter(Boolean) as HTMLElement[];
    if (!els.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Bloquea el scroll del fondo con el menú abierto
  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <div
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300",
          scrolled || open
            ? "border-b border-white/[0.06] bg-navy/85 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <nav className={cn("container-x flex items-center justify-between gap-4 transition-[height] duration-300", scrolled ? "h-16" : "h-20")}>
          <a href={`#${SECTIONS.top}`} className="flex items-center gap-2.5" aria-label={t.nav.home}>
            <Image src="/img/yasi-isotipo.png" alt="" width={40} height={40} className="h-10 w-10 object-contain drop-shadow-[0_0_10px_rgba(233,185,73,0.35)]" priority />
            <span className="leading-none">
              <span className="block font-serif text-[1.35rem] font-bold tracking-[0.12em] text-ink">YASÍ</span>
              <span className="mt-0.5 block text-[9px] font-semibold tracking-[0.42em] text-gold">TRAVEL</span>
            </span>
          </a>

          <ul className="hidden items-center gap-7 lg:flex">
            {links.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  className={cn(
                    "relative py-2 text-[13px] font-medium tracking-wide text-ink-muted transition-colors duration-200 hover:text-ink",
                    active === l.id && "text-ink",
                  )}
                >
                  {l.label}
                  <span
                    className={cn(
                      "absolute inset-x-0 -bottom-0.5 h-px origin-left bg-gold transition-transform duration-300 ease-out",
                      active === l.id ? "scale-x-100" : "scale-x-0",
                    )}
                    aria-hidden
                  />
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2.5">
            <LangSwitch lang={lang} />
            <a
              href={waUrl(t.contact.waDefault)}
              target="_blank"
              rel="noopener"
              className="btn btn-sm btn-gold hidden sm:inline-flex"
            >
              <WhatsAppIcon className="h-4 w-4" />
              {t.nav.whatsapp}
            </a>
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-ink lg:hidden"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-navy/95 backdrop-blur-xl lg:hidden"
          >
            <motion.nav
              initial={{ y: 12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 8, opacity: 0 }}
              transition={{ duration: 0.3, ease: EASE }}
              className="container-x flex h-full flex-col pt-24"
              aria-label={t.nav.openMenu}
            >
              <ul className="flex flex-col divide-y divide-white/[0.06]">
                {links.map((l, i) => (
                  <motion.li
                    key={l.id}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 * i + 0.05, duration: 0.3, ease: EASE }}
                  >
                    <a
                      href={`#${l.id}`}
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between py-4 font-serif text-2xl text-ink"
                    >
                      {l.label}
                      <span className="text-gold" aria-hidden>
                        →
                      </span>
                    </a>
                  </motion.li>
                ))}
              </ul>
              <div className="mt-8 flex flex-col gap-4">
                <a href={waUrl(t.contact.waDefault)} target="_blank" rel="noopener" className="btn btn-wa w-full">
                  <WhatsAppIcon />
                  {t.hero.cta2}
                </a>
                <LangSwitch lang={lang} size="lg" className="self-start" />
              </div>
            </motion.nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
