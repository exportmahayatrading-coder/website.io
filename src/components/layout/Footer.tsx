import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => (
  <footer className="relative mt-32 border-t border-border bg-card/40">
    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
    <div className="container py-16 grid gap-12 lg:grid-cols-5">
      <div className="lg:col-span-2">
        <div className="flex items-center gap-2.5 mb-4">
          <div className="h-9 w-9 grid place-items-center bg-gradient-primary text-primary-foreground font-display font-black">M</div>
          <div className="font-display font-bold tracking-wider">MAHAYA AMAAL INTERNATIONAL FZC</div>
        </div>
        <p className="text-sm text-muted-foreground max-w-md leading-relaxed">
          GCC industrial procurement & supply chain intelligence. Emergency sourcing across
          Schneider, ABB, Siemens, Eaton, Mitsubishi and Rockwell — built for Vision 2030 megaprojects.
        </p>
        <div className="mt-6 space-y-2 text-sm">
          <div className="flex items-center gap-2 text-muted-foreground"><MapPin className="h-4 w-4 text-primary"/>SAIF Zone, Sharjah, United Arab Emirates</div>
          <div className="flex items-center gap-2 text-muted-foreground"><Phone className="h-4 w-4 text-primary"/>+971 (0) 6 000 0000</div>
          <div className="flex items-center gap-2 text-muted-foreground"><Mail className="h-4 w-4 text-primary"/>rfq@mahaya-amaal.com</div>
        </div>
      </div>

      <FooterCol title="Company" links={[["About","/about"],["Services","/services"],["Partner Program","/partner"],["Contact","/contact"]]} />
      <FooterCol title="Capability" links={[["Brands","/brands"],["Industries","/industries"],["GCC Projects","/projects"],["RFQ Portal","/rfq"]]} />
      <FooterCol title="Intelligence" links={[["Shortage Dashboard","/intelligence"],["Lead Time Matrix","/intelligence"],["Price Tracker","/intelligence"],["Reports","/intelligence"]]} />
    </div>

    <div className="border-t border-border/60">
      <div className="container py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
        <div className="mono">© {new Date().getFullYear()} MAHAYA AMAAL INTERNATIONAL FZC · ALL RIGHTS RESERVED</div>
        <div className="flex items-center gap-2 mono uppercase tracking-widest">
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse"/>
          GCC Procurement Operations · Live
        </div>
      </div>
    </div>
  </footer>
);

const FooterCol = ({ title, links }: { title: string; links: [string, string][] }) => (
  <div>
    <div className="text-xs font-display tracking-widest text-primary mb-4">{title.toUpperCase()}</div>
    <ul className="space-y-2.5">
      {links.map(([l, h]) => (
        <li key={l}><Link to={h} className="text-sm text-muted-foreground hover:text-primary transition-colors">{l}</Link></li>
      ))}
    </ul>
  </div>
);
