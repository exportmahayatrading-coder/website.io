import { PageHero, Section } from "@/components/PageHero";
import { Award, Building2, Globe, Target } from "lucide-react";

const About = () => (
  <>
    <PageHero
      eyebrow="ABOUT MAHAYA AMAAL"
      title="Built for the GCC's most demanding procurement teams."
      subtitle="A UAE Free-Zone enterprise specialising in emergency industrial sourcing, supply-chain intelligence, and Vision 2030 megaproject support across the GCC."
    />

    <Section eyebrow="MANDATE" title="We Source the Impossible.">
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <div className="space-y-5 text-muted-foreground leading-relaxed text-lg">
          <p>
            Mahaya Amaal International FZC was established in the United Arab Emirates to solve a
            specific problem: critical industrial parts going obsolete, lead times stretching past
            economic viability, and OEM allocation policies failing the GCC's most ambitious projects.
          </p>
          <p>
            We operate as a hybrid: an authorised partner across Tier-1 brands, an independent
            stockist for obsolete equipment, and a strategic intelligence partner for procurement teams
            planning 12–24 months out.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {[
            { icon: Building2, k: "HQ", v: "SAIF Zone, Sharjah · UAE" },
            { icon: Globe, k: "Reach", v: "All 6 GCC countries" },
            { icon: Award, k: "Channels", v: "Authorised + Independent" },
            { icon: Target, k: "Focus", v: "Emergency & obsolete" },
          ].map((s) => (
            <div key={s.k} className="industrial-card p-5">
              <s.icon className="h-6 w-6 text-primary mb-3"/>
              <div className="mono text-[10px] tracking-widest text-muted-foreground">{s.k.toUpperCase()}</div>
              <div className="font-display text-lg mt-1">{s.v}</div>
            </div>
          ))}
        </div>
      </div>
    </Section>

    <section className="relative py-24 border-y border-border bg-card/30">
      <div className="absolute inset-0 grid-bg-fine opacity-20"/>
      <div className="container relative grid md:grid-cols-3 gap-6">
        {[
          { t: "Mission", d: "Eliminate downtime for the GCC's industrial base through fast, certified, intelligence-led procurement." },
          { t: "Vision", d: "Become the procurement intelligence backbone for Vision 2030 megaprojects across the GCC." },
          { t: "Values", d: "Authenticity. Speed. Engineering rigour. Transparent pricing. Long-horizon partnership." },
        ].map((v) => (
          <div key={v.t} className="industrial-card p-7">
            <div className="label-tag mb-4">{v.t.toUpperCase()}</div>
            <p className="text-muted-foreground leading-relaxed">{v.d}</p>
          </div>
        ))}
      </div>
    </section>

    <Section eyebrow="OUR EDGE" title="What Makes Us Different.">
      <div className="grid md:grid-cols-2 gap-4">
        {[
          ["Engineer-led desk", "Every RFQ is reviewed by an applications engineer — not a generalist trader. Cross-references, equivalents and BOM corrections come standard."],
          ["72-hour critical-path SLA", "For declared emergencies, we commit to engineered quotation within 72 hours, frequently delivering air-freight inside 7 days."],
          ["Obsolete & EOL specialism", "Active global sweep of grey-market and surplus inventory for parts your OEM has discontinued."],
          ["Intelligence as a service", "Quarterly briefings, lead-time matrices and project-level demand forecasts available to enterprise clients."],
        ].map(([t,d]) => (
          <div key={t} className="industrial-card p-7">
            <div className="font-display text-2xl mb-2">{t}</div>
            <p className="text-muted-foreground">{d}</p>
          </div>
        ))}
      </div>
    </Section>
  </>
);
export default About;
