import { PageHero, Section } from "@/components/PageHero";
import { Zap, Search, FileText, Truck, BarChart3, Wrench, ShieldCheck, Layers } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const SERVICES = [
  { icon: Zap, t: "Emergency Procurement", d: "Critical-path sourcing with 72-hour quotation and expedited air-freight across the GCC." },
  { icon: Search, t: "Obsolete & Hard-to-Find", d: "Global sweep of grey-market and surplus channels for EOL Schneider, ABB, Siemens and more." },
  { icon: Layers, t: "Multi-Brand Sourcing", d: "Single-PO procurement across six Tier-1 brands — consolidated invoicing and shipping." },
  { icon: BarChart3, t: "Supply Chain Intelligence", d: "Live lead-time matrices, price tracking and shortage briefings for procurement teams." },
  { icon: FileText, t: "RFQ & BOM Engineering", d: "Engineer-reviewed BOMs with equivalents, cross-references and constructability notes." },
  { icon: ShieldCheck, t: "Authenticated Channels", d: "Certificates of conformity, traceable serials, and OEM warranty on every Tier-1 line item." },
  { icon: Truck, t: "Bonded GCC Logistics", d: "Bonded warehousing in UAE & KSA. Customs-cleared into all 6 GCC countries." },
  { icon: Wrench, t: "Project Procurement Support", d: "Long-cycle procurement planning, allocation tracking, and milestone-aligned delivery for EPC contractors." },
];

const Services = () => (
  <>
    <PageHero
      eyebrow="SERVICES"
      title="Procurement built like an engineering function."
      subtitle="Eight integrated services covering everything from emergency response to multi-year megaproject delivery."
    />

    <Section>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border/60 border border-border">
        {SERVICES.map((s) => (
          <div key={s.t} className="group bg-card p-7 hover:bg-card/60 transition-colors relative">
            <div className="absolute top-0 left-0 w-0 h-px bg-primary transition-all duration-500 group-hover:w-full"/>
            <s.icon className="h-9 w-9 text-primary mb-5"/>
            <h3 className="font-display text-xl mb-2">{s.t}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.d}</p>
          </div>
        ))}
      </div>
    </Section>

    <section className="container pb-24">
      <div className="industrial-card p-10 bg-gradient-steel">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <div className="label-tag mb-4">SLA</div>
            <h2 className="font-display text-4xl md:text-5xl mb-4">Engineered Quotation in 72 Hours.</h2>
            <p className="text-muted-foreground text-lg">
              Submit your BOM. Our engineering desk validates part numbers, identifies obsolete lines,
              and returns an engineered quotation with availability — within 72 hours on emergency RFQs.
            </p>
          </div>
          <div className="flex lg:justify-end">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary-glow h-12 px-7">
              <Link to="/rfq">Submit Your RFQ →</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  </>
);
export default Services;
