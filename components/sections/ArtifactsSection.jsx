"use client";

import { motion } from "framer-motion";
import { Box, Music2 } from "lucide-react";
import { SectionReveal } from "@/components/motion/SectionReveal";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

const kindIcon = {
  Blender: Box,
  Audio: Music2,
};

export function ArtifactsSection({ data }) {
  return (
    <SectionReveal id="artifacts" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <div>
        <div className="flex items-center gap-2">
          <span className="size-2 rounded-sm bg-accent" aria-hidden />
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-accent">
            Media gallery
          </p>
        </div>
        <h2 className="mt-3 font-serif text-2xl font-semibold tracking-tight sm:text-3xl">
          {data.title}
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
          {data.subtitle}
        </p>
      </div>
      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {data.items.map((item, i) => {
          const Icon = kindIcon[item.kind] || Box;
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
              whileHover={{ y: -4 }}
            >
              <Card className="h-full overflow-hidden border-border/80 bg-card/90">
                <CardHeader>
                  <div className="flex items-center justify-between gap-2">
                    <CardTitle className="flex items-center gap-2 text-base">
                      <Icon className="size-4 text-accent" />
                      {item.title}
                    </CardTitle>
                    <span
                      className={cn(
                        "rounded-md px-2 py-0.5 font-mono text-[10px] uppercase",
                        item.status === "wip"
                          ? "bg-accent/15 text-accent"
                          : "bg-muted text-muted-foreground"
                      )}
                    >
                      {item.status}
                    </span>
                  </div>
                  <CardDescription>{item.kind}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex aspect-video items-center justify-center rounded-xl border border-dashed border-accent/25 bg-muted/50 text-center text-xs text-muted-foreground">
                    サムネ・埋め込み用プレースホルダー
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground">{item.note}</p>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </SectionReveal>
  );
}
