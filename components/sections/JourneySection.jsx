"use client";

import { MapPin, GraduationCap, Briefcase, Code2 } from "lucide-react";
import { SectionReveal } from "@/components/motion/SectionReveal";
import { cn } from "@/lib/utils";

const typeIcon = {
  learning: Code2,
  campus: GraduationCap,
  work: Briefcase,
};

export function JourneySection({ data }) {
  return (
    <SectionReveal
      id="journey"
      className="border-t border-border/60 bg-muted/35"
    >
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="size-2 rounded-sm bg-accent" aria-hidden />
              <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-accent">
                Interactive timeline
              </p>
            </div>
            <h2 className="mt-3 font-serif text-2xl font-semibold tracking-tight sm:text-3xl">
              {data.title}
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
              {data.subtitle}
            </p>
          </div>
          <MapPin className="mt-1 size-7 shrink-0 text-muted-foreground" />
        </div>
        <ol className="relative mt-12 space-y-8 before:absolute before:left-[11px] before:top-2 before:h-[calc(100%-16px)] before:w-px before:bg-border sm:before:left-[15px]">
          {data.events.map((ev) => {
            const Icon = typeIcon[ev.type] || MapPin;
            return (
              <li key={ev.id} className="relative pl-10 sm:pl-12">
                <span
                  className={cn(
                    "absolute left-0 top-1 flex size-[22px] items-center justify-center rounded-full border bg-background sm:size-7",
                    ev.highlight
                      ? "border-accent text-accent"
                      : "border-border text-muted-foreground"
                  )}
                >
                  <Icon className="size-3.5 sm:size-4" aria-hidden />
                </span>
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <span className="font-mono text-xs text-muted-foreground">
                    {ev.period}
                  </span>
                  <span className="rounded-full bg-muted px-2 py-0.5 text-[11px] font-medium text-foreground">
                    {ev.label}
                  </span>
                </div>
                <h3 className="mt-1 text-lg font-medium">{ev.headline}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{ev.detail}</p>
              </li>
            );
          })}
        </ol>
      </div>
    </SectionReveal>
  );
}
