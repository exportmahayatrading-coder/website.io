import { useParams, Link, Navigate } from "react-router-dom";
import { BRANDS } from "@/data/site";
import { PageHero, Section } from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { CheckCircle2, AlertTriangle } from "lucide-react";

const BrandDetail = () => {
  const { slug } = useParams();
  const brand = BRANDS.find((b) => b.slug === slug);
  if (!brand) return <Navigate to="/brands" replace />;

  return (
    <>
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 grid-bg opacity-40"/>
        <div className="absolute inset-0 radial-glow"/>
        <div className="container relative py-20 lg:py-28">
          <Link to="/brands" className="text-xs mono tracking-widest text-muted-foreground hover:text-primary">← BRANDS</Link>
          <div className="h-1.5 w-16 my-6" style={{ background: brand.color }}/>
          <h1 className="font-display text-5xl md:text-7xl leading-[0.95]">{brand.name}</h1>
          <p className="mt-4 text-xl text-muted-foreground">{brand.tagline}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {brand.categories.map((c) => (
              <span key={c} className="mono text-xs px-3 py-1.5 bg-card border border-border">{c}</span>
            ))}
          </div>
          <div className="mt-8 flex gap-3">
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary-glow">
              <Link to="/rfq">Quote {brand.name} Parts →</Link>
            </Button>
            <Button asChild variant="outline"><Link to="/contact">Talk to Specialist</Link></Button>
          </div>
        </div>
      </section>

      <Section eyebrow="CAPABILITY" title={`What we source from ${brand.name}.`}>
        <div className="grid md:grid-cols-2 gap-5">
          {brand.categories.map((c) => (
            <div key={c} className="industrial-card p-6">
              <CheckCircle2 className="h-6 w-6 text-primary mb-3"/>
              <div className="font-display text-xl">{c}</div>
              <div className="text-sm text-muted-foreground mt-2">
                Active, obsolete and hard-to-find SKUs across the {c} family. OEM-authenticated where available;
                certified independent channels for end-of-life lines.
              </div>
            </div>
          ))}
        </div>
      </Section>

      <section className="container pb-24">
        <div className="industrial-card p-8 border-warning/30">
          <div className="flex items-start gap-4">
            <AlertTriangle className="h-7 w-7 text-warning shrink-0 mt-1"/>
            <div>
              <div className="font-display text-2xl">Lead-Time Watch · {brand.name}</div>
              <p className="text-muted-foreground mt-2 max-w-2xl">
                Several {brand.name} product families are currently subject to extended OEM lead times.
                Submit an RFQ to access our active stock and grey-market network for accelerated delivery.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default BrandDetail;
