import { PageHero, Section } from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Handshake, Globe, Percent, Award } from "lucide-react";

const Partner = () => (
  <>
    <PageHero
      eyebrow="PARTNER PROGRAM"
      title="Procurement partnerships that close the GCC gap."
      subtitle="For EPC contractors, OEMs, sub-distributors and end-user procurement teams operating across the Gulf."
    />

    <Section eyebrow="TRACKS" title="Three Ways to Partner.">
      <div className="grid md:grid-cols-3 gap-5">
        {[
          { icon: Handshake, t: "EPC Procurement Partner", d: "Long-cycle BOM execution for EPC contractors on Vision 2030 projects. Milestone-aligned pricing and delivery." },
          { icon: Globe, t: "GCC Channel Partner", d: "For regional sub-distributors needing supplemental access to obsolete and hard-to-find Tier-1 stock." },
          { icon: Award, t: "OEM Strategic Channel", d: "Manufacturers seeking GCC market presence in industrial verticals beyond traditional distribution." },
        ].map((p) => (
          <div key={p.t} className="industrial-card p-7">
            <p.icon className="h-10 w-10 text-primary mb-5"/>
            <h3 className="font-display text-2xl mb-2">{p.t}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{p.d}</p>
          </div>
        ))}
      </div>
    </Section>

    <section className="relative py-24 border-y border-border bg-card/30">
      <div className="absolute inset-0 grid-bg-fine opacity-20"/>
      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="label-tag mb-4"><Percent className="h-3.5 w-3.5"/>PARTNER BENEFITS</div>
            <h2 className="font-display text-4xl md:text-5xl mb-5">What partners unlock.</h2>
            <div className="space-y-3">
              {[
                "Preferential pricing on bulk and repeat tonnage",
                "Priority access to allocated and constrained SKUs",
                "Quarterly intelligence briefings and lead-time matrices",
                "Dedicated engineering desk and named account manager",
                "Bonded inventory positioning for project milestones",
                "Co-branded RFQ response capability",
              ].map((b) => (
                <div key={b} className="flex items-start gap-3">
                  <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0"/>
                  <span>{b}</span>
                </div>
              ))}
            </div>
            <Button asChild className="mt-8 bg-primary text-primary-foreground hover:bg-primary-glow">
              <Link to="/contact">Apply to Partner →</Link>
            </Button>
          </div>
          <div className="industrial-card p-8">
            <div className="mono text-[10px] tracking-widest text-primary mb-3">PARTNER ELIGIBILITY</div>
            <div className="font-display text-2xl mb-5">Who we work with.</div>
            <div className="space-y-4 text-sm">
              {[
                ["EPC Contractors", "Tier-1 GCC contractors on active megaprojects"],
                ["Industrial End-Users", "Refineries, utilities, petrochem, water"],
                ["Sub-Distributors", "Regional electrical & automation channels"],
                ["OEMs", "Manufacturers entering GCC verticals"],
              ].map(([k,v]) => (
                <div key={k} className="flex items-center justify-between border-b border-border/40 pb-3">
                  <span className="font-semibold">{k}</span>
                  <span className="text-muted-foreground text-xs">{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);
export default Partner;
