import { NavLink, Link } from "react-router-dom";
import { Menu, X, Zap } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/brands", label: "Brands" },
  { to: "/industries", label: "Industries" },
  { to: "/intelligence", label: "Intelligence" },
  { to: "/projects", label: "Projects" },
  { to: "/partner", label: "Partner" },
  { to: "/contact", label: "Contact" },
];

export const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-2.5 shrink-0">
          <div className="relative h-9 w-9 grid place-items-center bg-gradient-primary text-primary-foreground font-display font-black text-lg">
            M
            <span className="absolute -top-1 -right-1 h-2 w-2 bg-warning rounded-full animate-pulse" />
          </div>
          <div className="leading-none">
            <div className="font-display font-bold text-sm tracking-wider">MAHAYA AMAAL</div>
            <div className="text-[10px] text-muted-foreground tracking-[0.2em] mono">INTERNATIONAL FZC</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              end={n.to === "/"}
              className={({ isActive }) =>
                `px-3 py-2 text-xs font-semibold uppercase tracking-wider transition-colors ${
                  isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
                }`
              }
            >
              {n.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-2">
          <Button asChild variant="outline" size="sm" className="border-primary/40 hover:bg-primary hover:text-primary-foreground">
            <Link to="/rfq"><Zap className="h-3.5 w-3.5 mr-1.5" />Submit RFQ</Link>
          </Button>
        </div>

        <button className="lg:hidden p-2" onClick={() => setOpen(!open)} aria-label="menu">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-card/95 backdrop-blur-xl">
          <nav className="container py-4 flex flex-col">
            {NAV.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                end={n.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `py-3 text-sm font-semibold uppercase tracking-wider border-b border-border/40 ${
                    isActive ? "text-primary" : "text-foreground"
                  }`
                }
              >
                {n.label}
              </NavLink>
            ))}
            <Button asChild className="mt-4 bg-primary text-primary-foreground" onClick={() => setOpen(false)}>
              <Link to="/rfq">Submit RFQ</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};
