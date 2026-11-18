"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Check, ChevronDown, PenLine } from "lucide-react";
import { BUILDER_PLACES, placeById, type Lang } from "@/content/places";
import { waUrl } from "@/content/business";
import type { Dict } from "@/lib/i18n";
import { SECTIONS } from "@/lib/i18n";
import { cn } from "@/lib/cn";
import SectionHeading from "./ui/SectionHeading";
import { Reveal, EASE } from "./ui/Reveal";
import { WhatsAppIcon } from "./ui/Icons";

export default function Builder({ t, lang }: { t: Dict; lang: Lang }) {
  const b = t.builder;
  const [selected, setSelected] = useState<string[]>([]);
  const [other, setOther] = useState("");
  const [otherOn, setOtherOn] = useState(false);
  const [duration, setDuration] = useState(1);
  const [pax, setPax] = useState("2");
  const [date, setDate] = useState("");
  const [notes, setNotes] = useState("");
  const [minDate, setMinDate] = useState("");

  useEffect(() => setMinDate(new Date().toISOString().slice(0, 10)), []);

  const toggle = (id: string) =>
    setSelected((s) => (s.includes(id) ? s.filter((x) => x !== id) : [...s, id]));

  const names = useMemo(() => {
    const list = selected.map((id) => placeById(id)?.name[lang] ?? id);
    if (otherOn) list.push(other.trim() ? `${b.other}: ${other.trim()}` : b.other);
    return list;
  }, [selected, otherOn, other, lang, b.other]);

  const count = selected.length + (otherOn ? 1 : 0);

  const message = useMemo(() => {
    const lines = [b.msg.intro, `• ${b.msg.places}: ${names.join(", ") || b.msg.tbd}`, `• ${b.msg.duration}: ${b.durations[duration]}`, `• ${b.msg.pax}: ${pax === "5+" ? b.paxMore : pax}`];
    if (date) lines.push(`• ${b.msg.date}: ${date.split("-").reverse().join("/")}`);
    if (notes.trim()) lines.push(`• ${b.msg.notes}: ${notes.trim()}`);
    return lines.join("\n");
  }, [b, names, duration, pax, date, notes]);

  return (
    <section id={SECTIONS.builder} className="relative py-20 sm:py-28">
      <div className="container-x">
        <SectionHeading tag={b.eyebrow} title={b.title} subtitle={b.sub} />

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <Reveal className="card p-5 sm:p-7">
            <h3 className="font-serif text-xl font-semibold text-ink">{b.what}</h3>
            <p className="mt-1 text-sm text-ink-muted">{b.hint}</p>
            <div className="mt-5 grid grid-cols-2 gap-2.5">
              {BUILDER_PLACES.map((id) => {
                const p = placeById(id);
                if (!p) return null;
                const on = selected.includes(id);
                return (
                  <button
                    key={id}
                    type="button"
                    onClick={() => toggle(id)}
                    aria-pressed={on}
                    className={cn(
                      "flex items-center justify-between gap-2 rounded-2xl border px-3.5 py-3 text-left text-[13.5px] font-medium leading-snug transition-[border-color,background-color,transform] duration-200 ease-out active:scale-[0.99] sm:px-4 sm:py-3.5 sm:text-[14.5px]",
                      on
                        ? "border-gold/70 bg-gold/[0.12] text-ink"
                        : "border-white/[0.08] bg-navy-2/60 text-ink-muted hover:border-white/20 hover:text-ink",
                    )}
                  >
                    <span>{p.name[lang]}</span>
                    <span
                      className={cn(
                        "flex h-6 w-6 shrink-0 items-center justify-center rounded-full border transition-[background-color,border-color,transform] duration-200",
                        on ? "scale-105 border-gold bg-gold text-gold-ink" : "border-white/15 text-transparent",
                      )}
                      aria-hidden
                    >
                      <Check size={14} strokeWidth={3} />
                    </span>
                  </button>
                );
              })}
              <button
                type="button"
                onClick={() => setOtherOn((o) => !o)}
                aria-pressed={otherOn}
                className={cn(
                  "col-span-2 flex items-center justify-between gap-3 rounded-2xl border px-4 py-3.5 text-left text-[14.5px] font-medium transition-[border-color,background-color] duration-200",
                  otherOn
                    ? "border-gold/70 bg-gold/[0.12] text-ink"
                    : "border-dashed border-white/[0.14] bg-transparent text-ink-muted hover:border-white/30 hover:text-ink",
                )}
              >
                <span className="inline-flex items-center gap-2">
                  <PenLine size={15} className="text-gold" aria-hidden />
                  {b.other}
                </span>
                <span
                  className={cn(
                    "flex h-6 w-6 shrink-0 items-center justify-center rounded-full border transition-[background-color,border-color] duration-200",
                    otherOn ? "border-gold bg-gold text-gold-ink" : "border-white/15 text-transparent",
                  )}
                  aria-hidden
                >
                  <Check size={14} strokeWidth={3} />
                </span>
              </button>
            </div>
            <AnimatePresence initial={false}>
              {otherOn ? (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.28, ease: EASE }}
                  className="overflow-hidden"
                >
                  <input
                    type="text"
                    aria-label={b.other}
                    value={other}
                    onChange={(e) => setOther(e.target.value)}
                    placeholder={b.otherPh}
                    maxLength={160}
                    className="field mt-3"
                    autoFocus
                  />
                </motion.div>
              ) : null}
            </AnimatePresence>
          </Reveal>

          <Reveal delay={0.1} className="card p-5 sm:p-7 lg:sticky lg:top-24">
            <h3 className="font-serif text-xl font-semibold text-ink">{b.summary}</h3>
            <p className="mt-2 flex items-baseline gap-2">
              <AnimatePresence mode="popLayout" initial={false}>
                <motion.span
                  key={count}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2, ease: EASE }}
                  className="font-serif text-4xl font-semibold text-gold-light"
                >
                  {count}
                </motion.span>
              </AnimatePresence>
              <span className="text-sm text-ink-muted">{count === 1 ? b.count1 : b.countN}</span>
            </p>

            <div className="mt-3 min-h-[2.5rem]">
              {count === 0 ? (
                <p className="text-sm text-ink-dim">{b.empty}</p>
              ) : (
                <ul className="flex flex-wrap gap-2">
                  <AnimatePresence initial={false}>
                    {names.map((n) => (
                      <motion.li
                        key={n}
                        layout
                        initial={{ opacity: 0, scale: 0.7 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.7 }}
                        transition={{ duration: 0.22, ease: EASE }}
                        className="rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-[12.5px] font-medium text-gold-light"
                      >
                        {n}
                      </motion.li>
                    ))}
                  </AnimatePresence>
                </ul>
              )}
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3">
              <div>
                <label htmlFor="b-dur" className="field-label">
                  {b.duration}
                </label>
                <div className="relative">
                  <select id="b-dur" value={duration} onChange={(e) => setDuration(Number(e.target.value))} className="field appearance-none pr-10">
                    {b.durations.map((d, i) => (
                      <option key={d} value={i}>
                        {d}
                      </option>
                    ))}
                  </select>
                  <ChevronDown size={16} className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-ink-dim" aria-hidden />
                </div>
              </div>
              <div>
                <label htmlFor="b-pax" className="field-label">
                  {b.pax}
                </label>
                <div className="relative">
                  <select id="b-pax" value={pax} onChange={(e) => setPax(e.target.value)} className="field appearance-none pr-10">
                    {["1", "2", "3", "4"].map((n) => (
                      <option key={n} value={n}>
                        {n}
                      </option>
                    ))}
                    <option value="5+">{b.paxMore}</option>
                  </select>
                  <ChevronDown size={16} className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-ink-dim" aria-hidden />
                </div>
              </div>
              <div className="col-span-2">
                <label htmlFor="b-date" className="field-label">
                  {b.date}
                </label>
                <input id="b-date" type="date" min={minDate} value={date} onChange={(e) => setDate(e.target.value)} className="field" />
              </div>
              <div className="col-span-2">
                <label htmlFor="b-notes" className="field-label">
                  {b.notes}
                </label>
                <input id="b-notes" type="text" value={notes} onChange={(e) => setNotes(e.target.value)} placeholder={b.notesPh} maxLength={160} className="field" />
              </div>
            </div>

            <a href={waUrl(message)} target="_blank" rel="noopener" className="btn btn-wa mt-5 w-full">
              <WhatsAppIcon />
              {b.send}
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
