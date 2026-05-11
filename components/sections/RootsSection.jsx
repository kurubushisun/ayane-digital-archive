"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { SectionReveal } from "@/components/motion/SectionReveal";

export function RootsSection({ data }) {
  const [openId, setOpenId] = useState(null);

  return (
    <SectionReveal id="roots" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      {/* ヘッダー */}
      <div className="mb-12">
        <div className="flex items-center gap-2">
          <span className="size-2 rounded-sm bg-accent" aria-hidden />
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-accent">
            {data.subtitle}
          </p>
        </div>
        <h2 className="mt-3 font-serif text-2xl font-semibold tracking-tight sm:text-3xl">
          {data.albumTitle}
        </h2>
      </div>

      {/* トラックリスト */}
      <div className="space-y-3">
        {data.tracks.map((track, i) => {
          const open = openId === track.id;
          return (
            <motion.div
              key={track.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.07, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <button
                type="button"
                onClick={() => setOpenId(open ? null : track.id)}
                className={cn(
                  "group w-full rounded-2xl border text-left transition-all duration-300",
                  open
                    ? "border-accent/30 bg-card shadow-lg shadow-accent/5"
                    : "border-border/70 bg-card/60 hover:border-accent/20 hover:bg-card hover:shadow-md"
                )}
              >
                {/* トラックヘッダー行 */}
                <div className="flex items-center gap-4 px-5 py-4">
                  {/* トラック番号バッジ */}
                  <span
                    className={cn(
                      "flex size-9 shrink-0 items-center justify-center rounded-xl font-mono text-xs font-semibold transition-colors",
                      open
                        ? "bg-accent text-white"
                        : "bg-muted text-muted-foreground group-hover:bg-accent/15 group-hover:text-accent"
                    )}
                  >
                    {String(track.number).padStart(2, "0")}
                  </span>

                  {/* emoji + タイトル */}
                  <div className="flex min-w-0 flex-1 items-center gap-3">
                    <span className="text-xl leading-none">{track.emoji}</span>
                    <div className="min-w-0">
                      <p className="truncate font-semibold tracking-tight">{track.title}</p>
                      <p
                        className={cn(
                          "truncate font-mono text-[11px] transition-colors",
                          open ? "text-accent" : "text-muted-foreground"
                        )}
                      >
                        {track.label}
                      </p>
                    </div>
                  </div>

                  {/* 開閉インジケーター */}
                  <motion.div
                    animate={{ rotate: open ? 45 : 0 }}
                    transition={{ type: "spring", stiffness: 320, damping: 24 }}
                    className={cn(
                      "flex size-6 shrink-0 items-center justify-center rounded-full border transition-colors",
                      open
                        ? "border-accent/40 text-accent"
                        : "border-border text-muted-foreground group-hover:border-accent/30 group-hover:text-accent"
                    )}
                  >
                    <svg viewBox="0 0 16 16" className="size-3 fill-current">
                      <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" fill="none" />
                    </svg>
                  </motion.div>
                </div>

                {/* 展開コンテンツ */}
                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-border/50 px-5 pb-6 pt-5">
                        {/* リード文 */}
                        <p className="mb-3 text-sm font-medium leading-relaxed text-foreground">
                          {track.lead}
                        </p>
                        {/* 本文 */}
                        <p className="text-sm leading-relaxed text-muted-foreground">
                          {track.summary}
                        </p>
                        {/* デコレーションライン */}
                        <div className="mt-5 flex items-center gap-3">
                          <div className="h-px flex-1 bg-gradient-to-r from-accent/30 to-transparent" />
                          <span className="font-mono text-[10px] text-accent/60">
                            Track {String(track.number).padStart(2, "0")}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          );
        })}
      </div>
    </SectionReveal>
  );
}
