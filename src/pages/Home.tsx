import { Link } from "react-router-dom";
import { ArrowRight, Zap, Shield, Globe2, Clock, FileText, TrendingUp, AlertTriangle, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ShortageTicker } from "@/components/ShortageTicker";
import { BRANDS, INDUSTRIES, PROJECTS, STATS, TESTIMONIALS } from "@/data/site";

const Home = () => {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-50" />
        <div className="absolute inset-0 radial-glow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

        <div className="container relative pt-16 lg:pt-24 pb-20">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 animate-fade-up">
              <div className="label-tag mb-6">
                <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse"/>
                UAE · GCC PROCUREMENT INTELLIGENCE
              </div>
              <h1 className="font-display text-5xl md:text-7xl lg:text-[5.5rem] leading-[0.92]">
                Emergency Industrial<br/>
                <span className="text-primary">Procurement</span><br/>
                For the GCC.
              </h1>
              <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
                Mission-critical, obsolete and hard-to-find parts sourced across Schneider, ABB, Siemens,
                Eaton, Mitsubishi and Rockwell — engineered for Vision 2030 megaprojects and 72-hour response.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg" className="bg-primary hover:bg-primary-glow text-primary-foreground font-semibold h-12 px-6">
                  <Link to="/rfq"><Zap className="h-4 w-4 mr-2"/>Submit Emergency RFQ <ArrowRight className="h-4 w-4 ml-2"/></Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="h-12 px-6 border-border hover:border-primary">
                  <Link to="/intelligence"><TrendingUp className="h-4 w-4 mr-2"/>Market Intelligence</Link>
                </Button>
              </div>

              <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-px bg-border/60 border border-border">
                {STATS.map((s) => (
                  <div key={s.label} className="bg-card p-5">
                    <div className="font-display text-3xl text-primary">{s.value}</div>
                    <div className="text-[11px] mono uppercase tracking-widest text-muted-foreground mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual panel */}
            <div className="lg:col-span-5 relative">
              <div className="relative industrial-card p-6 bg-card/70 backdrop-blur scan-line overflow-hidden">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-destructive animate-pulse"/>
                    <span className="mono text-[10px] tracking-widest text-destructive font-bold">PROCUREMENT OPS · LIVE</span>
                  </div>
                  <span className="mono text-[10px] text-muted-foreground">v3.21</span>
                </div>
                <div className="font-display text-xl mb-4">GCC Shortage Index</div>
                <div className="space-y-2">
                  {[
                    { name: "PLC Controllers", val: 92, lvl: "CRITICAL" },
                    { name: "Medium Voltage Drives", val: 78, lvl: "ALERT" },
                    { name: "Switchgear Components", val: 64, lvl: "ALERT" },
                    { name: "Industrial UPS", val: 41, lvl: "WATCH" },
                    { name: "Sensors & I/O", val: 33, lvl: "WATCH" },
                  ].map((r) => (
                    <div key={r.name} className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span className="text-muted-foreground">{r.name}</span>
                        <span className={`mono font-bold ${r.lvl === "CRITICAL" ? "text-destructive" : r.lvl === "ALERT" ? "text-warning" : "text-primary"}`}>{r.val}</span>
                      </div>
                      <div className="h-1.5 bg-muted overflow-hidden">
                        <div className={`h-full ${r.lvl === "CRITICAL" ? "bg-destructive" : r.lvl === "ALERT" ? "bg-warning" : "bg-primary"}`} style={{ width: `${r.val}%` }}/>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-4 border-t border-border flex items-center justify-between">
                  <span className="mono text-[10px] text-muted-foreground">UPDATED 08:42 GST</span>
                  <Link to="/intelligence" className="text-xs text-primary hover:text-primary-glow font-semibold">View dashboard →</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ShortageTicker />

      {/* EMERGENCY MESSAGING */}
      <section className="container py-20">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: Clock, title: "72-Hour Response", desc: "Critical-path sourcing, expedited freight, and direct OEM access. Built for unplanned downtime." },
            { icon: Shield, title: "Authenticated Supply", desc: "Tier-1 authorised channels, full traceability and certificates of conformity on every shipment." },
            { icon: Globe2, title: "GCC Logistics Mesh", desc: "Bonded warehousing across UAE & KSA. Same-week clearance into all 6 GCC countries." },
          ].map((f) => (
            <div key={f.title} className="industrial-card p-7 group">
              <f.icon className="h-9 w-9 text-primary mb-5 group-hover:scale-110 transition-transform"/>
              <h3 className="font-display text-2xl mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* LIVE SHORTAGE ALERT */}
      <section className="relative py-20 border-y border-destructive/20 bg-gradient-alert">
        <div className="absolute inset-0 grid-bg opacity-30"/>
        <div className="container relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="label-tag border-destructive/40 bg-destructive/5 text-destructive mb-5">
                <AlertTriangle className="h-3.5 w-3.5"/> CRITICAL SHORTAGE ALERT
              </div>
              <h2 className="font-display text-4xl md:text-5xl leading-tight mb-4">
                Lead Times Just Hit<br/><span className="text-destructive">40+ Weeks.</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-xl mb-6">
                Several Tier-1 OEMs are quoting 30–40 week lead times on PLC, MV drives and switchgear.
                Our active inventory and grey-market intelligence close the gap.
              </p>
              <Button asChild size="lg" variant="outline" className="border-destructive/60 hover:bg-destructive hover:text-destructive-foreground">
                <Link to="/rfq">Escalate a Critical Part →</Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { val: "40w", lbl: "Siemens S7-1500 PLC" },
                { val: "36w", lbl: "Schneider ATV930 Drives" },
                { val: "32w", lbl: "ABB MV Switchgear" },
                { val: "22w", lbl: "Rockwell ControlLogix" },
              ].map((c) => (
                <div key={c.lbl} className="industrial-card p-5">
                  <div className="mono text-[10px] tracking-widest text-destructive mb-2">CURRENT LEAD</div>
                  <div className="font-display text-4xl text-destructive">{c.val}</div>
                  <div className="text-xs text-muted-foreground mt-2">{c.lbl}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BRANDS */}
      <section className="container py-24">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
          <div>
            <div className="label-tag mb-3">AUTHORISED & INDEPENDENT CHANNELS</div>
            <h2 className="font-display text-4xl md:text-5xl">Multi-Brand Industrial Sourcing</h2>
          </div>
          <Link to="/brands" className="text-sm text-primary hover:text-primary-glow font-semibold">View all brands →</Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-border/60 border border-border">
          {BRANDS.map((b) => (
            <Link key={b.slug} to={`/brands/${b.slug}`} className="group relative bg-card hover:bg-card/60 p-6 transition-all">
              <div className="h-1 w-8 mb-4 transition-all group-hover:w-full" style={{ background: b.color }}/>
              <div className="font-display text-lg leading-tight">{b.name}</div>
              <div className="text-[11px] text-muted-foreground mt-1.5 leading-snug">{b.tagline}</div>
              <ArrowRight className="absolute top-5 right-5 h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:text-primary transition-all"/>
            </Link>
          ))}
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="relative py-24 border-y border-border bg-card/30">
        <div className="absolute inset-0 grid-bg-fine opacity-30"/>
        <div className="container relative">
          <div className="mb-12 max-w-2xl">
            <div className="label-tag mb-3">INDUSTRIES SERVED</div>
            <h2 className="font-display text-4xl md:text-5xl">From Oilfield to Smart City.</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {INDUSTRIES.map((i) => (
              <div key={i.name} className="industrial-card p-6 group cursor-pointer">
                <div className="text-3xl mb-3">{i.icon}</div>
                <div className="font-display text-lg leading-tight mb-2">{i.name}</div>
                <div className="text-xs text-muted-foreground leading-relaxed">{i.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VISION 2030 INTELLIGENCE */}
      <section className="container py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="label-tag mb-4">VISION 2030 · INTELLIGENCE</div>
            <h2 className="font-display text-4xl md:text-5xl leading-tight mb-5">
              We Read the Megaproject Pipeline.
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              From NEOM to Etihad Rail, we map procurement demand 18 months ahead of build phase —
              positioning inventory, allocating slots with OEMs, and flagging shortages before they bite.
            </p>
            <div className="space-y-3">
              {[
                "Live OEM allocation tracking across 18 product families",
                "GCC megaproject demand forecasting",
                "Grey-market & obsolete-stock global sweep",
                "Quarterly intelligence briefings for enterprise clients",
              ].map((p) => (
                <div key={p} className="flex items-start gap-3">
                  <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0"/>
                  <span className="text-sm">{p}</span>
                </div>
              ))}
            </div>
            <Button asChild className="mt-8 bg-primary text-primary-foreground hover:bg-primary-glow">
              <Link to="/intelligence">Open Intelligence Dashboard →</Link>
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {PROJECTS.slice(0,4).map((p) => (
              <div key={p.name} className="industrial-card p-5">
                <div className="mono text-[10px] tracking-widest text-primary mb-2">{p.country.toUpperCase()}</div>
                <div className="font-display text-xl">{p.name}</div>
                <div className="text-xs text-muted-foreground mt-1">{p.scope}</div>
                <div className="mt-4 pt-3 border-t border-border flex justify-between text-[11px] mono">
                  <span className="text-muted-foreground">{p.stage}</span>
                  <span className="text-primary">{p.value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RFQ CTA */}
      <section className="relative py-24 border-y border-border overflow-hidden">
        <div className="absolute inset-0 bg-gradient-steel"/>
        <div className="absolute inset-0 grid-bg opacity-20"/>
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent"/>
        <div className="container relative text-center max-w-3xl">
          <div className="label-tag mx-auto mb-6">RFQ PORTAL · 24/7</div>
          <h2 className="font-display text-5xl md:text-6xl leading-[0.95] mb-5">
            Got a Critical BOM?<br/>
            <span className="text-primary">Send it. We Quote in Hours.</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Drop part numbers, manufacturer codes or full bills of materials. Engineered quotations,
            certified stock and bonded logistics — all in one portal.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary-glow h-12 px-7">
              <Link to="/rfq"><FileText className="h-4 w-4 mr-2"/>Submit RFQ</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-12 px-7 border-border">
              <Link to="/contact">Talk to an Engineer →</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="container py-24">
        <div className="label-tag mb-4">CLIENT VOICES</div>
        <h2 className="font-display text-4xl md:text-5xl mb-12 max-w-2xl">Trusted on Critical-Path Days.</h2>
        <div className="grid md:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="industrial-card p-7">
              <div className="text-primary text-4xl font-display leading-none mb-3">“</div>
              <p className="text-foreground leading-relaxed mb-6">{t.quote}</p>
              <div className="pt-4 border-t border-border">
                <div className="font-semibold text-sm">{t.author}</div>
                <div className="text-xs text-muted-foreground mt-0.5">{t.company}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* GCC COVERAGE */}
      <section className="relative py-24 border-t border-border bg-card/30">
        <div className="absolute inset-0 grid-bg-fine opacity-20"/>
        <div className="container relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="label-tag mb-4"><Truck className="h-3.5 w-3.5"/> GCC LOGISTICS COVERAGE</div>
              <h2 className="font-display text-4xl md:text-5xl leading-tight mb-5">
                Six Countries. One Procurement Mesh.
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Bonded warehousing in Sharjah and Jebel Ali. Customs-cleared distribution across UAE,
                Saudi Arabia, Qatar, Oman, Kuwait and Bahrain.
              </p>
              <div className="grid grid-cols-3 gap-3">
                {["UAE","KSA","Qatar","Oman","Kuwait","Bahrain"].map((c) => (
                  <div key={c} className="industrial-card p-4 text-center">
                    <div className="font-display text-xl">{c}</div>
                    <div className="mono text-[10px] text-primary mt-1">ACTIVE</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="industrial-card p-8 relative aspect-square overflow-hidden">
              <div className="absolute inset-0 grid-bg opacity-30"/>
              <svg viewBox="0 0 400 400" className="absolute inset-0 w-full h-full">
                {/* Stylised GCC map dots */}
                {[
                  { x: 180, y: 200, l: "UAE" },
                  { x: 120, y: 180, l: "KSA" },
                  { x: 220, y: 220, l: "Qatar" },
                  { x: 250, y: 260, l: "Oman" },
                  { x: 150, y: 130, l: "Kuwait" },
                  { x: 200, y: 175, l: "Bahrain" },
                ].map((p, i) => (
                  <g key={i}>
                    <circle cx={p.x} cy={p.y} r="20" fill="hsl(var(--primary))" opacity="0.15"/>
                    <circle cx={p.x} cy={p.y} r="6" fill="hsl(var(--primary))"/>
                    <text x={p.x + 14} y={p.y + 4} className="mono" fill="hsl(var(--foreground))" fontSize="10">{p.l}</text>
                  </g>
                ))}
                <g stroke="hsl(var(--primary))" strokeWidth="0.5" opacity="0.4" fill="none">
                  <line x1="180" y1="200" x2="120" y2="180"/>
                  <line x1="180" y1="200" x2="220" y2="220"/>
                  <line x1="180" y1="200" x2="250" y2="260"/>
                  <line x1="180" y1="200" x2="150" y2="130"/>
                  <line x1="180" y1="200" x2="200" y2="175"/>
                </g>
              </svg>
              <div className="absolute bottom-4 left-4 mono text-[10px] tracking-widest text-muted-foreground">GCC NETWORK · LIVE</div>
              <div className="absolute top-4 right-4 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-primary animate-pulse"/>
                <span className="mono text-[10px] text-primary">6 HUBS</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
