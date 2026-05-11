import { PageHero, Section } from "@/components/PageHero";
import { SHORTAGES } from "@/data/site";
import { Download, TrendingUp, TrendingDown, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const LEAD_MATRIX = [
  { fam: "PLC & Controllers", schneider: "30w", abb: "—", siemens: "40w", rockwell: "22w" },
  { fam: "MV Drives", schneider: "36w", abb: "26w", siemens: "32w", rockwell: "20w" },
  { fam: "LV Switchgear", schneider: "18w", abb: "22w", siemens: "20w", rockwell: "—" },
  { fam: "Servo & Motion", schneider: "16w", abb: "18w", siemens: "24w", rockwell: "14w" },
  { fam: "Industrial UPS", schneider: "12w", abb: "—", siemens: "—", rockwell: "—" },
  { fam: "Protection Relays", schneider: "10w", abb: "12w", siemens: "16w", rockwell: "—" },
];

const PRICE_MOVES = [
  { cat: "PLC Controllers", q: "+18%", up: true },
  { cat: "MV Drives", q: "+11%", up: true },
  { cat: "LV Breakers", q: "+6%", up: true },
  { cat: "Sensors & I/O", q: "+2%", up: true },
  { cat: "Industrial UPS", q: "-3%", up: false },
  { cat: "Cabling", q: "-1%", up: false },
];

const REPORTS = [
  { t: "GCC Procurement Quarterly Q2 2026", s: "48 pages · Lead times, allocation, megaproject demand", tag: "FLAGSHIP" },
  { t: "Vision 2030 Demand Outlook", s: "Saudi megaproject electrical & automation forecast", tag: "INTELLIGENCE" },
  { t: "Obsolete Parts Watchlist", s: "Updated monthly · EOL announcements & grey-market depth", tag: "WATCHLIST" },
  { t: "OEM Allocation Brief", s: "Schneider / ABB / Siemens allocation policy tracker", tag: "BRIEF" },
];

const Intelligence = () => (
  <>
    <PageHero
      eyebrow="MARKET INTELLIGENCE"
      title="Read the GCC supply chain before it bites you."
      subtitle="Real-time shortage signals, lead-time matrices, price movement and downloadable intelligence reports."
    />

    {/* SHORTAGE DASHBOARD */}
    <Section eyebrow="LIVE DASHBOARD" title="Procurement Shortage Dashboard">
      <div className="industrial-card overflow-hidden">
        <div className="grid grid-cols-12 px-6 py-3 border-b border-border bg-muted/30 mono text-[10px] tracking-widest text-muted-foreground uppercase">
          <div className="col-span-5">Part</div>
          <div className="col-span-2">Status</div>
          <div className="col-span-3">Lead Time</div>
          <div className="col-span-2 text-right">Price 30d</div>
        </div>
        {SHORTAGES.map((s, i) => (
          <div key={i} className="grid grid-cols-12 px-6 py-4 border-b border-border/40 last:border-0 items-center text-sm hover:bg-muted/20 transition-colors">
            <div className="col-span-5 font-semibold">{s.part}</div>
            <div className="col-span-2">
              <span className={`mono text-[10px] px-2 py-1 ${
                s.status === "CRITICAL" ? "bg-destructive/15 text-destructive" :
                s.status === "ALERT" ? "bg-warning/15 text-warning" :
                "bg-primary/15 text-primary"
              }`}>{s.status}</span>
            </div>
            <div className="col-span-3 mono text-muted-foreground">{s.lead}</div>
            <div className="col-span-2 text-right text-destructive mono">{s.trend}</div>
          </div>
        ))}
      </div>
    </Section>

    {/* LEAD TIME MATRIX */}
    <Section eyebrow="LEAD TIME MATRIX" title="Cross-Brand Lead Time View">
      <div className="industrial-card overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border bg-muted/30">
              <th className="text-left p-4 mono text-[10px] tracking-widest text-muted-foreground uppercase">Family</th>
              <th className="p-4 mono text-[10px] tracking-widest text-muted-foreground uppercase">Schneider</th>
              <th className="p-4 mono text-[10px] tracking-widest text-muted-foreground uppercase">ABB</th>
              <th className="p-4 mono text-[10px] tracking-widest text-muted-foreground uppercase">Siemens</th>
              <th className="p-4 mono text-[10px] tracking-widest text-muted-foreground uppercase">Rockwell</th>
            </tr>
          </thead>
          <tbody>
            {LEAD_MATRIX.map((r) => (
              <tr key={r.fam} className="border-b border-border/40">
                <td className="p-4 font-semibold">{r.fam}</td>
                {[r.schneider, r.abb, r.siemens, r.rockwell].map((v, i) => {
                  const n = parseInt(v);
                  const cls = isNaN(n) ? "text-muted-foreground" : n >= 30 ? "text-destructive" : n >= 18 ? "text-warning" : "text-primary";
                  return <td key={i} className={`p-4 text-center mono ${cls}`}>{v}</td>;
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>

    {/* PRICE TRACKER */}
    <Section eyebrow="PRICE TRACKER" title="Quarterly Price Movement">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {PRICE_MOVES.map((p) => (
          <div key={p.cat} className="industrial-card p-6 flex items-center justify-between">
            <div>
              <div className="mono text-[10px] tracking-widest text-muted-foreground">CATEGORY</div>
              <div className="font-display text-xl mt-1">{p.cat}</div>
            </div>
            <div className={`flex items-center gap-2 font-display text-2xl ${p.up ? "text-destructive" : "text-primary"}`}>
              {p.up ? <TrendingUp className="h-5 w-5"/> : <TrendingDown className="h-5 w-5"/>}
              {p.q}
            </div>
          </div>
        ))}
      </div>
    </Section>

    {/* REPORTS */}
    <Section eyebrow="INTELLIGENCE REPORTS" title="Download Briefings">
      <div className="grid md:grid-cols-2 gap-5">
        {REPORTS.map((r) => (
          <div key={r.t} className="industrial-card p-7 flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <FileText className="h-8 w-8 text-primary"/>
              <span className="mono text-[10px] px-2 py-1 bg-primary/10 text-primary tracking-widest">{r.tag}</span>
            </div>
            <div className="font-display text-2xl mb-2">{r.t}</div>
            <div className="text-sm text-muted-foreground flex-1">{r.s}</div>
            <Button variant="outline" className="mt-5 border-primary/40 hover:bg-primary hover:text-primary-foreground self-start">
              <Download className="h-4 w-4 mr-2"/>Request Report
            </Button>
          </div>
        ))}
      </div>
    </Section>
  </>
);
export default Intelligence;
