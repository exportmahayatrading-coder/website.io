import { Link } from "react-router-dom";
import {
  ArrowRight, Zap, Archive, Layers, Truck, FileCheck, Building2,
  ShieldCheck, Clock, Globe, Sparkles, TrendingUp, Download, MessageCircle,
} from "lucide-react";
import { BRANDS, INDUSTRIES, PROJECTS, STATS } from "@/data/site";
import heroImg from "@/assets/hero-switchgear.jpg";
import indOilgas from "@/assets/ind-oilgas.jpg";
import indUtilities from "@/assets/ind-utilities.jpg";
import indEpc from "@/assets/ind-epc.jpg";
import indManufacturing from "@/assets/ind-manufacturing.jpg";
import indDatacenter from "@/assets/ind-datacenter.jpg";
import indEnergy from "@/assets/ind-energy.jpg";

const SERVICES = [
  { icon: Zap, title: "Emergency Procurement", desc: "Critical-path sourcing with 72-hour response on downtime-driving shortages." },
  { icon: Archive, title: "Obsolete & Legacy Parts", desc: "Discontinued, end-of-life and hard-to-find OEM components, traced and verified." },
  { icon: Layers, title: "Multi-Brand Sourcing", desc: "Independent access to Schneider, ABB, Siemens, Eaton, Mitsubishi and Rockwell." },
  { icon: Truck, title: "GCC Export & Logistics", desc: "Bonded storage in UAE with customs-cleared delivery across all six GCC states." },
  { icon: FileCheck, title: "Technical Advisory", desc: "Engineering-led BOM review, cross-references and certified equivalents." },
  { icon: Building2, title: "Vision 2030 Support", desc: "Forward-positioned inventory for NEOM, Red Sea, Etihad Rail and Duqm." },
];

const INDUSTRY_CARDS = [
  { name: "Oil & Gas", img: indOilgas, desc: "Upstream to downstream procurement for ADNOC, Aramco and QatarEnergy partners." },
  { name: "EPC & Construction", img: indEpc, desc: "Bulk electrical and instrumentation for tier-one engineering contractors." },
  { name: "Utilities", img: indUtilities, desc: "Transmission, distribution and substation components for GCC utilities." },
  { name: "Manufacturing", img: indManufacturing, desc: "Automation, drives and controls for plants across the Gulf." },
  { name: "Data Centers", img: indDatacenter, desc: "Critical power, UPS and switchgear for hyperscale and enterprise facilities." },
  { name: "Energy & Renewables", img: indEnergy, desc: "Solar, wind and storage procurement aligned with Vision 2030 targets." },
];

const WHY = [
  { icon: Clock, title: "24/7 Emergency Procurement", desc: "Dedicated desk for after-hours and weekend escalations on critical-path parts." },
  { icon: Globe, title: "GCC Logistics Coverage", desc: "Bonded warehousing in Sharjah and Jebel Ali with same-week clearance regionally." },
  { icon: Layers, title: "Multi-Brand Flexibility", desc: "Authorised and independent channels across the six leading industrial OEMs." },
  { icon: Sparkles, title: "Vision 2030 Alignment", desc: "Engineering desk briefed on megaproject pipeline and forward-loaded inventory." },
  { icon: ShieldCheck, title: "Independent Sourcing", desc: "Direct manufacturer access without single-channel restrictions or markup layers." },
  { icon: Zap, title: "Fast RFQ Response", desc: "Engineered quotations within hours, not days, on standard and obsolete enquiries." },
];

const INTEL = [
  { tag: "Shortage Trend", title: "PLC Controllers — GCC", val: "+18%", sub: "12-week demand index", tone: "warning" as const },
  { tag: "Lead Time", title: "Siemens S7-1500 Family", val: "40 wks", sub: "Quoted Q2 2026", tone: "destructive" as const },
  { tag: "Price Movement", title: "MV Drives Index", val: "+9.4%", sub: "vs. previous quarter", tone: "warning" as const },
];

const Home = () => {
  return (
    <>
      {/* 1. HERO */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0 dot-grid opacity-30" />
        <div className="container relative pt-16 lg:pt-24 pb-20 lg:pb-28">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7 animate-fade-up">
              <div className="eyebrow mb-6">GCC Industrial Procurement Specialists</div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-[3.75rem] leading-[1.05] tracking-tight">
                Strategic Industrial<br />
                Procurement Across the <span className="text-primary">GCC</span>.
              </h1>
              <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
                Emergency sourcing, multi-brand procurement and supply chain support for Vision 2030
                infrastructure and industrial projects across the Gulf.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/rfq" className="btn-primary">
                  Request Quote <ArrowRight className="h-4 w-4" />
                </Link>
                <a href="https://wa.me/971600000000" target="_blank" rel="noreferrer" className="btn-ghost">
                  <MessageCircle className="h-4 w-4" /> WhatsApp
                </a>
              </div>
              <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs text-muted-foreground">
                <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-primary" /> 72-hour response</span>
                <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-primary" /> 6 GCC countries</span>
                <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-primary" /> Tier-1 OEM access</span>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden hairline border">
                <img src={heroImg} alt="GCC industrial switchgear control room" className="w-full h-full object-cover" width={1280} height={1280} />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="rounded-xl bg-background/70 backdrop-blur-xl p-5 hairline border">
                    <div className="text-[11px] mono tracking-widest text-primary mb-1">OPERATIONS · UAE</div>
                    <div className="font-display text-lg leading-snug">Bonded inventory across Sharjah & Jebel Ali — engineered for critical-path supply.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRUST METRICS */}
      <section className="hairline-t hairline-b bg-surface/60">
        <div className="container py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((s) => (
            <div key={s.label}>
              <div className="font-display text-3xl md:text-4xl text-foreground">{s.value}</div>
              <div className="text-xs uppercase tracking-[0.15em] text-muted-foreground mt-2">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. SERVICES OVERVIEW */}
      <section className="container section">
        <div className="grid lg:grid-cols-12 gap-12 mb-14">
          <div className="lg:col-span-5">
            <div className="eyebrow mb-4">What We Do</div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl leading-tight">
              Procurement built for industrial reality.
            </h2>
          </div>
          <p className="lg:col-span-7 text-lg text-muted-foreground leading-relaxed self-end max-w-2xl">
            Six service lines, one engineering-led desk. We act as an extension of your procurement
            and maintenance teams — sourcing, verifying and delivering the parts that keep critical
            infrastructure running.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((s) => (
            <div key={s.title} className="card-premium p-7 group">
              <div className="h-11 w-11 grid place-items-center rounded-lg bg-primary/10 text-primary mb-5">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="font-display text-xl mb-2.5">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">{s.desc}</p>
              <Link to="/services" className="link-arrow">
                Learn more <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* 4. INDUSTRIES */}
      <section className="hairline-t bg-surface/40">
        <div className="container section">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <div className="eyebrow mb-4">Industries We Serve</div>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl leading-tight">
                Trusted across the GCC's most demanding sectors.
              </h2>
            </div>
            <Link to="/industries" className="link-arrow">All industries <ArrowRight className="h-3.5 w-3.5" /></Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {INDUSTRY_CARDS.map((i) => (
              <Link key={i.name} to="/industries" className="card-premium overflow-hidden group">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={i.img} alt={i.name} loading="lazy" width={1024} height={768}
                       className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl mb-2">{i.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{i.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. BRANDS */}
      <section className="container section">
        <div className="max-w-2xl mb-12">
          <div className="eyebrow mb-4">Authorised & Independent Channels</div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl leading-tight">
            Six industrial brands. One procurement partner.
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 hairline border rounded-xl overflow-hidden">
          {BRANDS.map((b) => (
            <Link
              key={b.slug}
              to={`/brands/${b.slug}`}
              className="group relative bg-card hover:bg-card/70 p-7 transition-colors border-r border-b hairline last:border-r-0"
            >
              <div className="font-display text-lg leading-tight text-foreground">{b.name}</div>
              <div className="text-[11px] text-muted-foreground mt-2 leading-snug">{b.tagline}</div>
              <ArrowRight className="absolute top-5 right-5 h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:text-primary transition-all" />
            </Link>
          ))}
        </div>
      </section>

      {/* 6. WHY MAHAYA */}
      <section className="hairline-t bg-surface/40">
        <div className="container section">
          <div className="max-w-2xl mb-14">
            <div className="eyebrow mb-4">Why Mahaya Amaal</div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl leading-tight">
              Calm, capable procurement when it matters most.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14">
            {WHY.map((w) => (
              <div key={w.title}>
                <div className="h-10 w-10 grid place-items-center rounded-lg bg-primary/10 text-primary mb-5">
                  <w.icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-lg mb-2">{w.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. VISION 2030 PROJECTS */}
      <section className="container section">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <div className="eyebrow mb-4">GCC & Vision 2030</div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl leading-tight mb-5">
              Procurement aligned with the region's largest projects.
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              From NEOM to Etihad Rail, we map procurement demand against megaproject pipelines —
              positioning inventory, securing OEM allocations and de-risking critical supply.
            </p>
            <Link to="/projects" className="btn-ghost">
              View project pipeline <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
            {PROJECTS.slice(0, 4).map((p) => (
              <div key={p.name} className="card-premium p-6">
                <div className="text-[11px] mono tracking-[0.2em] text-primary mb-3">{p.country.toUpperCase()}</div>
                <div className="font-display text-xl mb-1.5">{p.name}</div>
                <div className="text-sm text-muted-foreground leading-relaxed">{p.scope}</div>
                <div className="mt-5 pt-4 hairline-t flex justify-between text-xs">
                  <span className="text-muted-foreground">{p.stage}</span>
                  <span className="text-foreground font-medium">{p.value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. MARKET INTELLIGENCE PREVIEW */}
      <section className="hairline-t bg-surface/40">
        <div className="container section">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <div className="eyebrow mb-4">Market Intelligence</div>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl leading-tight">
                Executive insight into GCC supply chains.
              </h2>
            </div>
            <Link to="/intelligence" className="link-arrow">Open dashboard <ArrowRight className="h-3.5 w-3.5" /></Link>
          </div>

          <div className="grid lg:grid-cols-3 gap-5">
            {INTEL.map((i) => (
              <div key={i.title} className="card-premium p-7">
                <div className="flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-5">
                  <TrendingUp className="h-3.5 w-3.5" /> {i.tag}
                </div>
                <div className="font-display text-lg mb-3">{i.title}</div>
                <div className={`font-display text-4xl ${i.tone === "destructive" ? "text-destructive" : "text-warning"}`}>{i.val}</div>
                <div className="text-xs text-muted-foreground mt-2">{i.sub}</div>
                <div className="mt-6 pt-4 hairline-t">
                  <Link to="/intelligence" className="link-arrow text-xs">
                    <Download className="h-3.5 w-3.5" /> Download briefing
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. RFQ CTA */}
      <section className="container section">
        <div className="relative overflow-hidden rounded-2xl hairline border bg-gradient-to-br from-surface to-card">
          <div className="absolute inset-0 dot-grid opacity-20" />
          <div className="relative grid lg:grid-cols-12 gap-10 p-10 md:p-14 items-center">
            <div className="lg:col-span-7">
              <div className="eyebrow mb-5">Request a Quote</div>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl leading-tight mb-5">
                Send a BOM. Receive an engineered quotation.
              </h2>
              <p className="text-muted-foreground text-lg max-w-xl">
                Drop part numbers, manufacturer codes or full bills of materials. Our procurement
                desk responds within hours, 24/7, across the GCC.
              </p>
            </div>
            <div className="lg:col-span-5 flex flex-col gap-3">
              <Link to="/rfq" className="btn-primary h-12 text-base">
                Request Quote <ArrowRight className="h-4 w-4" />
              </Link>
              <a href="https://wa.me/971600000000" target="_blank" rel="noreferrer" className="btn-ghost h-12 text-base">
                <MessageCircle className="h-4 w-4" /> WhatsApp Procurement Desk
              </a>
              <div className="text-xs text-muted-foreground text-center mt-2">Average first response: under 4 hours</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
