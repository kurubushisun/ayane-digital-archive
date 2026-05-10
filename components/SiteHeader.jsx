"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Disc3,
  Map,
  Images,
  Sparkles,
  Camera,
  Search,
  Menu,
  Circle,
  Hexagon,
  Triangle,
} from "lucide-react";
import { cn } from "@/lib/utils";

const nav = [
  { href: "#roots", label: "Roots", icon: Disc3 },
  { href: "#journey", label: "Journey", icon: Map },
  { href: "#artifacts", label: "Artifacts", icon: Images },
  { href: "#now", label: "Now", icon: Sparkles },
  { href: "#vlog", label: "Vlog", icon: Camera },
];

function formatHeaderDate(d) {
  const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  const yyyy = d.getFullYear();
  return `${mm}/${dd} ${yyyy} ${days[d.getDay()]}`;
}

export function SiteHeader({ title, tagline }) {
  const [dateLabel, setDateLabel] = useState("");

  useEffect(() => {
    setDateLabel(formatHeaderDate(new Date()));
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/85 backdrop-blur-md">
      <div className="relative mx-auto max-w-6xl px-4 py-4 sm:px-6">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-lg">
            <Link href="/" className="group inline-flex flex-col gap-1">
              <span className="font-mono text-[10px] uppercase tracking-[0.35em] text-accent">
                Digital archive
              </span>
              <h1 className="font-serif text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                {title}
              </h1>
            </Link>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
              {tagline}
            </p>
          </div>

          <div className="flex flex-col items-stretch gap-4 lg:items-end">
            <div className="flex flex-wrap items-center justify-between gap-4 lg:justify-end">
              <div
                className="hidden items-center gap-3 md:flex"
                aria-hidden
              >
                {[Circle, Hexagon, Triangle, Circle, Hexagon].map((Icon, i) => (
                  <Icon
                    key={i}
                    className="size-[18px] stroke-[1.25] text-foreground/75"
                  />
                ))}
              </div>
              <div className="flex items-center gap-4 font-mono text-[11px] text-muted-foreground">
                <span className="tabular-nums">{dateLabel}</span>
                <span className="flex items-center gap-2 text-foreground">
                  <button
                    type="button"
                    className="rounded-full border border-border/90 p-2 transition-colors hover:border-accent hover:text-accent"
                    aria-label="検索（準備中）"
                  >
                    <Search className="size-4" />
                  </button>
                  <button
                    type="button"
                    className="rounded-full border border-border/90 p-2 transition-colors hover:border-accent hover:text-accent"
                    aria-label="メニュー"
                  >
                    <Menu className="size-4" />
                  </button>
                </span>
              </div>
            </div>

            <nav className="flex flex-wrap gap-1 border-t border-border/60 pt-3 lg:border-t-0 lg:pt-0">
              {nav.map(({ href, label, icon: Icon }) => (
                <a
                  key={href}
                  href={href}
                  className={cn(
                    "inline-flex items-center gap-1.5 rounded-full border border-transparent px-3 py-1.5 text-[11px] font-medium text-muted-foreground transition-[transform,colors] hover:-translate-y-px hover:border-accent/35 hover:bg-white/60 hover:text-foreground active:scale-[0.98]"
                  )}
                >
                  <Icon className="size-3.5 shrink-0 text-accent" aria-hidden />
                  {label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
