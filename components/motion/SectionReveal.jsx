"use client";

export function SectionReveal({ children, className, id }) {
  return (
    <section id={id} className={className}>
      {children}
    </section>
  );
}
