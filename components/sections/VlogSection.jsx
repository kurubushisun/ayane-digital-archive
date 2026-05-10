"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Camera } from "lucide-react";
import { SectionReveal } from "@/components/motion/SectionReveal";
import { Card, CardContent } from "@/components/ui/card";

export function VlogSection({ data }) {
  return (
    <SectionReveal id="vlog" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <div className="flex items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="size-2 rounded-sm bg-accent" aria-hidden />
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-accent">
              Micro-blog
            </p>
          </div>
          <h2 className="mt-3 font-serif text-2xl font-semibold tracking-tight sm:text-3xl">
            {data.title}
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">{data.subtitle}</p>
        </div>
        <Camera className="size-7 text-muted-foreground" aria-hidden />
      </div>
      <div className="mt-10 columns-1 gap-4 sm:columns-2">
        {data.entries.map((entry, i) => (
          <motion.div
            key={entry.id}
            className="mb-4 break-inside-avoid"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.05, duration: 0.35 }}
            whileHover={{ scale: 1.01 }}
          >
            <Card className="overflow-hidden border-border/80 bg-card/90">
              <div className="relative aspect-[4/5] bg-gradient-to-br from-muted to-card">
                {entry.image ? (
                  <Image
                    src={entry.image}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                ) : (
                  <div className="flex size-full items-center justify-center px-6 text-center text-xs text-muted-foreground">
                    画像 URL を vlog.json に設定（同一オリジン or next.config の
                    images.remotePatterns）
                  </div>
                )}
              </div>
              <CardContent className="space-y-2 p-4">
                <p className="text-sm leading-relaxed">{entry.caption}</p>
                <p className="font-mono text-[10px] text-muted-foreground">
                  {entry.date}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </SectionReveal>
  );
}
