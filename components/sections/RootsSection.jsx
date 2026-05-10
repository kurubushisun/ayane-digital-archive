"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ListMusic, ChevronRight } from "lucide-react";
import { SectionReveal } from "@/components/motion/SectionReveal";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export function RootsSection({ data }) {
  const [openId, setOpenId] = useState(null);

  return (
    <SectionReveal id="roots" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <div className="flex items-end justify-between gap-4">
        <div>
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
        <ListMusic className="size-8 text-muted-foreground" aria-hidden />
      </div>
      <ul className="mt-10 space-y-2">
        {data.tracks.map((track) => {
          const open = openId === track.id;
          return (
            <li key={track.id}>
              <button
                type="button"
                onClick={() => setOpenId(open ? null : track.id)}
                className={cn(
                  "group flex w-full items-center justify-between rounded-lg border border-border bg-card/80 px-4 py-3 text-left transition-colors",
                  "hover:border-accent/40 hover:bg-card"
                )}
              >
                <span className="flex items-baseline gap-3">
                  <span className="font-mono text-xs text-muted-foreground">
                    Track {track.number}
                  </span>
                  <span className="font-medium">{track.title}</span>
                </span>
                <motion.span
                  animate={{ rotate: open ? 90 : 0 }}
                  transition={{ type: "spring", stiffness: 320, damping: 24 }}
                >
                  <ChevronRight className="size-4 text-muted-foreground group-hover:text-accent" />
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {open && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <Card className="mt-2 border-border/80 bg-muted/30">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">
                          {track.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="text-sm text-muted-foreground">
                        {track.summary}
                        <p className="mt-3 font-mono text-[11px] text-accent/90">
                          写真・長文エピソードは JSON のフィールドを増やして接続予定。
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          );
        })}
      </ul>
    </SectionReveal>
  );
}
