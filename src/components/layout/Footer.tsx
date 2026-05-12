import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";

export const Footer = () => (
  <footer className="hairline-t mt-24 bg-surface">
    <div className="container py-16 grid gap-12 lg:grid-cols-12">
      <div className="lg:col-span-4">
        <div className="flex items-center gap-3 mb-5">
          <div className="h-9 w-9 grid place-items-center rounded-md bg-primary/10 border border-primary/30 text-primary font-display font-bold">M</div>
          <div className="leading-tight">
            <div className="font-display font-semibold">Mahaya Amaal</div>
            <div className="text-[10px] text-muted-foreground tracking-[0.18em] uppercase">International FZC</div>
          </div>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
          Strategic industrial procurement and supply chain support for the GCC's most demanding
          infrastructure, energy and manufacturing operations.
        </p>
        <div className="mt-6 space-y-2.5 text-sm">
          <div className="flex items-start gap-2.5"><MapPin className="h-4 w-4 text-primary mt-0.5 shrink-0"/><span><span className="text-foreground">Sharjah HQ</span> · SAIF Zone, UAE</span></div>
          <div className="flex items-start gap-2.5"><MapPin className="h-4 w-4 text-primary mt-0.5 shrink-0"/><span><span className="text-foreground">Dubai Office</span> · Business Bay, UAE</span></div>
          <div className="flex items-center gap-2.5"><Phone className="h-4 w-4 text-primary shrink-0"/><a href="tel:+971600000000" className="text-muted-foreground hover:text-foreground">+971 6 000 0000</a></div>
          <div className="flex items-center gap-2.5"><Mail className="h-4 w-4 text-primary shrink-0"/><a href="mailto:rfq@mahaya-amaal.com" className="text-muted-foreground hover:text-foreground">rfq@mahaya-amaal.com</a></div>
          <div className="flex items-center gap-2.5"><MessageCircle className="h-4 w-4 text-primary shrink-0"/><a href="https://wa.me/971600000000" className="text-muted-foreground hover:text-foreground">WhatsApp Procurement Desk</a></div>
        </div>
      </div>

      <FooterCol title="Company" links={[["About","/about"],["Services","/services"],["Partner Program","/partner"],["Contact","/contact"]]} />
      <FooterCol title="Services" links={[["Emergency Procurement","/services"],["Obsolete & Legacy","/services"],["Multi-Brand Sourcing","/brands"],["Vision 2030 Support","/projects"]]} />
      <FooterCol title="Industries" links={[["Oil & Gas","/industries"],["EPC & Construction","/industries"],["Utilities & Energy","/industries"],["Data Centers","/industries"]]} />
    </div>

    <div className="hairline-t">
      <div className="container py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
        <div>© {new Date().getFullYear()} Mahaya Amaal International FZC. All rights reserved.</div>
        <div className="flex items-center gap-5">
          <a href="#" className="hover:text-foreground">Privacy</a>
          <a href="#" className="hover:text-foreground">Terms</a>
          <a href="#" className="hover:text-foreground">Compliance</a>
        </div>
      </div>
    </div>
  </footer>
);

const FooterCol = ({ title, links }: { title: string; links: [string, string][] }) => (
  <div className="lg:col-span-2">
    <div className="text-[11px] font-semibold tracking-[0.2em] uppercase text-foreground mb-4">{title}</div>
    <ul className="space-y-2.5">
      {links.map(([l, h]) => (
        <li key={l}><Link to={h} className="text-sm text-muted-foreground hover:text-primary transition-colors">{l}</Link></li>
      ))}
    </ul>
  </div>
);
