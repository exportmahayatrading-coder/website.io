import { PageHero, Section } from "@/components/PageHero";
import { PROJECTS } from "@/data/site";

const Projects = () => (
  <>
    <PageHero
      eyebrow="GCC PROJECTS"
      title="Procurement intelligence for Vision 2030."
      subtitle="We map demand against the GCC's most ambitious megaprojects — positioning inventory and allocation ahead of build phase."
    />
    <Section>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {PROJECTS.map((p) => (
          <div key={p.name} className="industrial-card p-7 group cursor-pointer">
            <div className="flex items-center justify-between mb-4">
              <span className="mono text-[10px] tracking-widest text-primary">{p.country.toUpperCase()}</span>
              <span className="mono text-xs text-muted-foreground">{p.stage}</span>
            </div>
            <h3 className="font-display text-3xl leading-tight">{p.name}</h3>
            <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{p.scope}</p>
            <div className="mt-6 pt-4 border-t border-border flex items-center justify-between">
              <span className="mono text-[10px] text-muted-foreground tracking-widest">PROJECT VALUE</span>
              <span className="font-display text-2xl text-primary">{p.value}</span>
            </div>
          </div>
        ))}
      </div>
    </Section>
  </>
);
export default Projects;
