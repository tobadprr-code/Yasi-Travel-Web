"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Plus } from "lucide-react";
import type { Dict } from "@/lib/i18n";
import { SECTIONS } from "@/lib/i18n";
import { cn } from "@/lib/cn";
import SectionHeading from "./ui/SectionHeading";
import { Stagger, StaggerItem, EASE } from "./ui/Reveal";

export default function Faq({ t }: { t: Dict }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id={SECTIONS.faq} className="relative py-20 sm:py-28">
      <div className="container-x grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <SectionHeading tag={t.faq.eyebrow} title={t.faq.title} className="lg:sticky lg:top-28 lg:self-start" />

        <Stagger gap={0.05} className="flex flex-col gap-3">
          {t.faq.items.map((item, i) => {
            const isOpen = open === i;
            return (
              <StaggerItem key={item.q}>
                <div
                  className={cn(
                    "card overflow-hidden transition-colors duration-300",
                    isOpen ? "border-gold/40 bg-navy-3" : "hover:border-white/[0.14]",
                  )}
                >
                  <h3>
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${i}`}
                      id={`faq-button-${i}`}
                      className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-[15.5px] font-semibold text-ink sm:px-6 sm:py-5"
                    >
                      {item.q}
                      <span
                        className={cn(
                          "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-[transform,background-color,border-color,color] duration-300 ease-out",
                          isOpen ? "rotate-45 border-gold bg-gold text-gold-ink" : "border-white/15 text-gold",
                        )}
                        aria-hidden
                      >
                        <Plus size={16} />
                      </span>
                    </button>
                  </h3>
                  <AnimatePresence initial={false}>
                    {isOpen ? (
                      <motion.div
                        id={`faq-panel-${i}`}
                        role="region"
                        aria-labelledby={`faq-button-${i}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.32, ease: EASE }}
                        className="overflow-hidden"
                      >
                        <p className="px-5 pb-5 text-[15px] leading-relaxed text-ink-muted sm:px-6">{item.a}</p>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
