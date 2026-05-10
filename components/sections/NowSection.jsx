"use client";

import { motion } from "framer-motion";
import { Coffee, Headphones, Users } from "lucide-react";
import { SectionReveal } from "@/components/motion/SectionReveal";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function NowSection({ data }) {
  return (
    <SectionReveal
      id="now"
      className="border-t border-border/60 bg-cream/40"
    >
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <div className="flex items-center gap-2">
          <span className="size-2 rounded-sm bg-accent" aria-hidden />
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-accent">
            Dynamic data
          </p>
        </div>
        <h2 className="mt-3 font-serif text-2xl font-semibold tracking-tight sm:text-3xl">
          {data.title}
        </h2>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          <motion.div whileHover={{ y: -2 }} transition={{ type: "spring", stiffness: 400, damping: 28 }}>
            <Card className="h-full border-border/80 bg-card/90 lg:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base">
                  <Headphones className="size-4 text-accent" />
                  Spotify
                </CardTitle>
                <CardDescription>Wrapped 風 UI は API 接続後に実装</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {data.spotify.message}
                </p>
                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  {["Now", "Month", "Genres"].map((label) => (
                    <div
                      key={label}
                      className="rounded-lg border border-dashed border-border bg-muted/40 p-4 text-center font-mono text-xs text-muted-foreground"
                    >
                      {label}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div whileHover={{ y: -2 }} transition={{ type: "spring", stiffness: 400, damping: 28 }}>
            <Card className="h-full border-border/80 bg-card/90">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base">
                  <Coffee className="size-4 text-accent" />
                  {data.coffee.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {data.coffee.entries.map((e) => (
                  <div key={e.id} className="rounded-md border border-border/80 bg-muted/30 p-3">
                    <p className="text-sm font-medium">{e.title}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{e.body}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <div className="mt-4">
          <Card className="border-border/80 bg-card/90">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <Users className="size-4 text-accent" />
                Community
              </CardTitle>
              <CardDescription>所属の可視化（データは now.json）</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="flex flex-wrap gap-2">
                {data.community.map((org) => (
                  <li
                    key={org.id}
                    className="rounded-full border border-border bg-muted/40 px-3 py-1 text-xs"
                  >
                    <span className="font-medium">{org.name}</span>
                    <span className="text-muted-foreground"> · {org.role}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </SectionReveal>
  );
}
