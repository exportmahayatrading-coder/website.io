import { PageHero, Section } from "@/components/PageHero";
import { Link } from "react-router-dom";
import { BRANDS } from "@/data/site";
import { ArrowRight } from "lucide-react";

const Brands = () => (
  <>
    <PageHero
      eyebrow="BRAND PORTFOLIO"
      title="Multi-brand sourcing across six industrial giants."
      subtitle="Authorised channel access and independent stockist relationships for Schneider, ABB, Siemens, Eaton, Mitsubishi and Rockwell Automation."
    />
    <Section>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {BRANDS.map((b) => (
          <Link key={b.slug} to={`/brands/${b.slug}`} className="industrial-card p-7 group block">
            <div className="h-1.5 w-12 mb-5 transition-all group-hover:w-24" style={{ background: b.color }}/>
            <h2 className="font-display text-3xl mb-1.5">{b.name}</h2>
            <p className="text-sm text-muted-foreground mb-5">{b.tagline}</p>
            <div className="flex flex-wrap gap-1.5 mb-6">
              {b.categories.map((c) => (
                <span key={c} className="mono text-[10px] px-2 py-1 bg-muted/60 border border-border text-muted-foreground">{c}</span>
              ))}
            </div>
            <div className="flex items-center text-primary text-sm font-semibold">
              View capability <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform"/>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-12 industrial-card p-6 md:p-7 border-l-2 border-l-primary/60">
        <div className="mono text-[10px] tracking-[0.22em] uppercase text-primary mb-2">Independent Trader Notice</div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Mahaya Amaal International FZC is an independent B2B trader and is not an authorised distributor for any of the brands listed above.
          All brand names and trademarks remain the property of their respective owners. Products sourced may include new, NOS (New Old Stock),
          and surplus inventory from authorised channels. Serial number verification and condition reports provided on request.
        </p>
      </div>
    </Section>
  </>
);
export default Brands;
