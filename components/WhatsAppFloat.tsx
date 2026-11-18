"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { waUrl } from "@/content/business";
import type { Dict } from "@/lib/i18n";
import { WhatsAppIcon } from "./ui/Icons";
import { EASE } from "./ui/Reveal";

/** Botón flotante de WhatsApp: aparece recién cuando el usuario pasa el hero. */
export default function WhatsAppFloat({ t }: { t: Dict }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setShow(window.scrollY > window.innerHeight * 0.6);
        ticking = false;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show ? (
        <motion.a
          href={waUrl(t.contact.waDefault)}
          target="_blank"
          rel="noopener"
          aria-label={t.common.whatsappAria}
          initial={{ opacity: 0, scale: 0.6, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 12 }}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3, ease: EASE }}
          className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-wa text-[#06240f] shadow-[0_12px_30px_-10px_rgba(37,211,102,0.7)] sm:bottom-6 sm:right-6"
        >
          <WhatsAppIcon className="h-7 w-7" />
        </motion.a>
      ) : null}
    </AnimatePresence>
  );
}
