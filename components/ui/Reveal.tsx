"use client";

import { Fragment } from "react";
import { motion, type Variants } from "motion/react";
import { cn } from "@/lib/cn";
import { Pieces, tokenize } from "./Text";

export const EASE = [0.22, 1, 0.36, 1] as const;
const VIEWPORT = { once: true, margin: "0px 0px -10% 0px" } as const;

/** Aparece al entrar en pantalla: sube unos píxeles y gana opacidad. */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 20,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT}
      transition={{ duration: 0.7, delay, ease: EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const staggerContainer = (gap: number, delay: number): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren: gap, delayChildren: delay } },
});

const staggerItem: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE } },
};

/** Contenedor que hace aparecer a sus <StaggerItem> uno detrás del otro. */
export function Stagger({
  children,
  className,
  gap = 0.08,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  gap?: number;
  delay?: number;
}) {
  return (
    <motion.div
      variants={staggerContainer(gap, delay)}
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div variants={staggerItem} className={className}>
      {children}
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/* Títulos que se revelan palabra por palabra                          */
/* ------------------------------------------------------------------ */

const wordsContainer = (delay: number): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren: 0.045, delayChildren: delay } },
});

const wordItem: Variants = {
  hidden: { opacity: 0, y: "0.4em" },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

export function WordsReveal({
  text,
  as = "h2",
  className,
  delay = 0,
  id,
}: {
  text: string;
  as?: "h2" | "h3" | "p";
  className?: string;
  delay?: number;
  id?: string;
}) {
  const Tag = motion[as] as typeof motion.h2;
  const groups = tokenize(text);

  return (
    <Tag
      id={id}
      variants={wordsContainer(delay)}
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT}
      className={cn(className)}
    >
      {groups.map((g, i) => (
        <Fragment key={i}>
          {i > 0 && g.space ? " " : null}
          <motion.span variants={wordItem} className="inline-block whitespace-nowrap">
            <Pieces pieces={g.pieces} />
          </motion.span>
        </Fragment>
      ))}
    </Tag>
  );
}
