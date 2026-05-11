import { ReactNode } from "react";

export const PageHero = ({
  eyebrow, title, subtitle, children,
}: { eyebrow: string; title: string; subtitle?: string; children?: ReactNode }) => (
  <section className="relative overflow-hidden hairline-b bg-gradient-hero">
    <div className="absolute inset-0 dot-grid opacity-40" />
    <div className="container relative py-20 lg:py-28">
      <div className="eyebrow mb-5">{eyebrow}</div>
      <h1 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] max-w-4xl">
        {title}
      </h1>
      {subtitle && (
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">{subtitle}</p>
      )}
      {children}
    </div>
  </section>
);

export const Section = ({
  eyebrow, title, subtitle, children, className = "",
}: { eyebrow?: string; title?: string; subtitle?: string; children: ReactNode; className?: string }) => (
  <section className={`container section ${className}`}>
    {(eyebrow || title) && (
      <div className="mb-12 max-w-3xl">
        {eyebrow && <div className="eyebrow mb-4">{eyebrow}</div>}
        {title && <h2 className="font-display text-3xl md:text-4xl lg:text-5xl leading-tight">{title}</h2>}
        {subtitle && <p className="mt-4 text-muted-foreground text-lg leading-relaxed">{subtitle}</p>}
      </div>
    )}
    {children}
  </section>
);
