"use client";

export function TagStrip({ tags }) {
  if (!tags?.length) return null;

  return (
    <div className="border-y border-border/80 bg-muted/70 py-4 backdrop-blur-[2px]">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-3 gap-y-2 px-4 font-mono text-[11px] sm:px-6">
        {tags.map((tag, i) => (
          <span key={tag} className="inline-flex items-center gap-3">
            {i > 0 ? (
              <span className="select-none text-border" aria-hidden>
                |
              </span>
            ) : null}
            <span className="cursor-default text-accent transition-colors hover:text-primary">
              {tag}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
