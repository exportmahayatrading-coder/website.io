import { SHORTAGES } from "@/data/site";

export const ShortageTicker = () => {
  const items = [...SHORTAGES, ...SHORTAGES];
  return (
    <div className="relative overflow-hidden border-y border-border bg-card/40 py-3">
      <div className="absolute left-0 top-0 bottom-0 z-10 w-20 bg-gradient-to-r from-background to-transparent" />
      <div className="absolute right-0 top-0 bottom-0 z-10 w-20 bg-gradient-to-l from-background to-transparent" />
      <div className="absolute left-4 top-1/2 -translate-y-1/2 z-20 hidden md:flex items-center gap-2 bg-background/90 px-3 py-1 border border-destructive/40">
        <span className="h-2 w-2 rounded-full bg-destructive animate-pulse"/>
        <span className="mono text-[10px] tracking-widest text-destructive font-bold">LIVE · SHORTAGES</span>
      </div>
      <div className="flex ticker-track gap-10 whitespace-nowrap">
        {items.map((s, i) => (
          <div key={i} className="flex items-center gap-3 text-sm">
            <span className={`mono text-[10px] px-2 py-0.5 ${
              s.status === "CRITICAL" ? "bg-destructive/15 text-destructive" :
              s.status === "ALERT" ? "bg-warning/15 text-warning" :
              "bg-primary/15 text-primary"
            }`}>{s.status}</span>
            <span className="font-semibold">{s.part}</span>
            <span className="text-muted-foreground mono text-xs">LEAD {s.lead}</span>
            <span className="text-destructive mono text-xs">{s.trend}</span>
            <span className="text-border">·</span>
          </div>
        ))}
      </div>
    </div>
  );
};
