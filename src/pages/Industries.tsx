import { PageHero, Section } from "@/components/PageHero";
import { INDUSTRIES } from "@/data/site";

const Industries = () => (
  <>
    <PageHero
      eyebrow="INDUSTRIES SERVED"
      title="Eight sectors. One procurement engine."
      subtitle="From upstream oil & gas to smart-city infrastructure, our engineering desk understands the spec stacks of the GCC's most critical industries."
    />
    <Section>
      <div className="grid md:grid-cols-2 gap-5">
        {INDUSTRIES.map((i) => (
          <div key={i.name} className="industrial-card p-8 group">
            <div className="flex items-start gap-5">
              <div className="text-5xl">{i.icon}</div>
              <div>
                <h2 className="font-display text-2xl mb-2">{i.name}</h2>
                <p className="text-muted-foreground leading-relaxed">{i.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  </>
);
export default Industries;
