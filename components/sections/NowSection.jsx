"use client";

import { motion } from "framer-motion";
import { Coffee, Users } from "lucide-react";
import { SectionReveal } from "@/components/motion/SectionReveal";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import SpotifyWidget from "@/components/spotify/SpotifyWidget";

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
          {/* Spotify カード */}
          <motion.div whileHover={{ y: -2 }} transition={{ type: "spring", stiffness: 400, damping: 28 }}>
            <Card className="h-full border-border/80 bg-card/90 lg:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base">
                  <svg viewBox="0 0 24 24" className="size-4 fill-[#1DB954]">
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                  </svg>
                  Spotify
                </CardTitle>
              </CardHeader>
              <CardContent>
                <SpotifyWidget
                  profileUrl={data.spotify.profileUrl}
                  embeds={data.spotify.embeds}
                />
              </CardContent>
            </Card>
          </motion.div>

          {/* Coffee LOG カード */}
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
                  <div key={e.id} className="overflow-hidden rounded-md border border-border/80 bg-muted/30">
                    {e.image && (
                      <img
                        src={e.image}
                        alt={e.title}
                        className="h-48 w-full object-cover"
                      />
                    )}
                    <div className="p-3">
                      <p className="text-sm font-medium">{e.title}</p>
                      <p className="mt-1 text-xs text-muted-foreground">{e.body}</p>
                    </div>
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

