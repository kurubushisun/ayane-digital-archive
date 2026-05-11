"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function HeroBand({ hero }) {
  const pickup = hero?.pickup;

  return (
    <div className="relative overflow-hidden border-b border-border/70">
      <div
        className="pointer-events-none absolute inset-0 bg-hero-glow opacity-90"
        aria-hidden
      />
      <div className="pointer-events-none absolute -right-24 top-1/2 size-[420px] -translate-y-1/2 rounded-full border border-foreground/6 bg-[radial-gradient(circle,hsl(var(--cyan)_/_12%)_0%,transparent_65%)]" />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-12 lg:gap-10 lg:py-24">
        <div className="lg:col-span-6">
          <motion.p
            className="font-mono text-[11px] uppercase tracking-[0.35em] text-accent"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
          >
            {pickup?.magazineLabel ?? "WEB MAGAZINE"}
          </motion.p>
          <motion.h2
            className="mt-4 font-serif text-4xl font-semibold tracking-tight text-foreground sm:text-5xl"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
          >
            <span className="block font-sans text-3xl font-bold tracking-tighter sm:text-4xl">
              {hero?.labelEn ?? "DIGITAL × LIFE"}
            </span>
            <span className="mt-4 block text-2xl font-semibold sm:text-3xl">
              {hero?.titleJa ?? "このアーカイブとは？"}
            </span>
          </motion.h2>
          <motion.p
            className="mt-6 max-w-xl text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.22 }}
          >
            {hero?.lead}
          </motion.p>
          <motion.div
            className="mt-10"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28 }}
          >
            <Link
              href="#roots"
              className="group inline-flex items-center gap-2 rounded-full border border-foreground/15 bg-white/70 px-5 py-2.5 text-sm font-medium text-foreground shadow-sm backdrop-blur-sm transition-colors hover:border-accent hover:text-accent"
            >
              {hero?.cta ?? "セクションへ進む"}
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </motion.div>

          <motion.div
            className="relative mt-14 hidden max-w-xs sm:block"
            aria-hidden
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45 }}
          >
            <svg viewBox="0 0 320 200" className="text-foreground/25">
              <circle cx="120" cy="120" r="68" fill="none" stroke="currentColor" strokeWidth="1.2" />
              <circle cx="120" cy="120" r="42" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.6" />
              <path
                d="M52 148c18-26 44-44 76-48"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
              />
              <circle cx="248" cy="56" r="6" fill="none" stroke="currentColor" strokeWidth="1" />
              <path d="M232 72l24 30M248 52v28" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
            </svg>
          </motion.div>
        </div>

        <div className="relative lg:col-span-6">
          <div className="absolute -top-6 right-0 hidden font-mono text-[10px] uppercase tracking-[0.5em] text-muted-foreground xl:block">
            <span className="inline-block [writing-mode:vertical-rl]">
              Digital archive
            </span>
          </div>

          <motion.div
            className="relative overflow-hidden rounded-2xl border border-[#41C8D6]/40 bg-gradient-to-br from-[#098B9B] to-[#41C8D6] p-6 text-[#F4E6C0] shadow-xl sm:p-8"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="pointer-events-none absolute -right-16 -top-16 size-56 rounded-full bg-[radial-gradient(circle,hsl(var(--cyan)_/_55%)_0%,transparent_70%)] blur-2xl" />
            <div className="relative flex items-start justify-between gap-4 border-b border-white/10 pb-4">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-[#41C8D6]">
                  {pickup?.sectionLabel ?? "PICK UP"}
                </p>
                <p className="mt-3 font-serif text-lg font-semibold leading-snug">
                  {pickup?.title}
                </p>
              </div>
              <span className="shrink-0 rounded-full border border-[#41C8D6]/50 bg-[#41C8D6]/15 px-2.5 py-1 font-mono text-[10px] tracking-wide text-[#41C8D6]">
                {pickup?.category}
              </span>
            </div>
            <div className="relative mt-6 grid gap-4 sm:grid-cols-5">
              <div className="sm:col-span-2">
                <p className="font-mono text-[10px] uppercase tracking-widest text-[#F4E6C0]/55">
                  Date
                </p>
                <p className="mt-1 font-mono text-sm">{pickup?.date}</p>
              </div>
              <div className="relative aspect-[4/5] overflow-hidden rounded-lg border border-white/20 bg-[#098B9B]/35 sm:col-span-3">
                <div className="absolute inset-0 bg-gradient-to-t from-[#098B9B]/85 to-transparent" />
                {pickup?.image ? (
                  <img
                    src={pickup.image}
                    alt={pickup.title}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex size-full items-center justify-center p-4 text-center font-serif text-xs leading-relaxed text-[#F4E6C0]/75">
                    画像エリア
                  </div>
                )}
              </div>
            </div>
            <div className="relative mt-5 flex flex-wrap gap-2 font-mono text-[11px] text-[#41C8D6]/90">
              {(pickup?.tags ?? []).map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
