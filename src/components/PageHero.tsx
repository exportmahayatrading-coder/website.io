import { ReactNode } from "react";

export const PageHero = ({
  eyebrow, title, subtitle, children,
}: { eyebrow: string; title: string; subtitle?: string; children?: ReactNode }) => (
  <section className="relative overflow-hidden border-b border-border">
    <div className="absolute inset-0 grid-bg opacity-40" />
    <div className="absolute inset-0 radial-glow" />
    <div className="container relative py-20 lg:py-28">
      <div className="label-tag mb-6">{eyebrow}</div>
      <h1 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[0.95] max-w-4xl">
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
  <section className={`container py-20 lg:py-28 ${className}`}>
    {(eyebrow || title) && (
      <div className="mb-12 max-w-3xl">
        {eyebrow && <div className="label-tag mb-4">{eyebrow}</div>}
        {title && <h2 className="font-display text-4xl md:text-5xl leading-tight">{title}</h2>}
        {subtitle && <p className="mt-4 text-muted-foreground text-lg">{subtitle}</p>}
      </div>
    )}
    {children}
  </section>
);
