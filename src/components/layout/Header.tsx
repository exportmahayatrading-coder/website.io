import { NavLink, Link } from "react-router-dom";
import { Menu, X, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/brands", label: "Brands" },
  { to: "/industries", label: "Industries" },
  { to: "/projects", label: "Projects" },
  { to: "/intelligence", label: "Intelligence" },
  { to: "/rfq", label: "RFQ" },
  { to: "/contact", label: "Contact" },
];

export const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      {/* Top utility bar */}
      <div className="hidden md:block hairline-b bg-background/80 backdrop-blur">
        <div className="container flex h-9 items-center justify-between text-[11px] text-muted-foreground">
          <div className="flex items-center gap-6">
            <span>Sharjah Free Zone, UAE</span>
            <span className="hairline border-l pl-6">GCC Supply Coverage</span>
            <span className="hairline border-l pl-6 flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              24/7 Emergency Procurement
            </span>
          </div>
          <div className="flex items-center gap-5">
            <a href="mailto:rfq@mahaya-amaal.com" className="hover:text-foreground transition-colors">rfq@mahaya-amaal.com</a>
            <span className="hairline border-l pl-5">+971 6 000 0000</span>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className={`transition-all duration-300 ${scrolled ? "bg-background/95 backdrop-blur-xl hairline-b" : "bg-background/60 backdrop-blur"}`}>
        <div className="container flex h-16 items-center justify-between gap-6">
          <Link to="/" className="flex items-center gap-3 shrink-0">
            <div className="h-9 w-9 grid place-items-center rounded-md bg-primary/10 border border-primary/30 text-primary font-display font-bold">
              M
            </div>
            <div className="leading-tight">
              <div className="font-display font-semibold text-[15px] tracking-tight">Mahaya Amaal</div>
              <div className="text-[10px] text-muted-foreground tracking-[0.18em] uppercase">International FZC</div>
            </div>
          </Link>

          <nav className="hidden xl:flex items-center gap-1">
            {NAV.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                end={n.to === "/"}
                className={({ isActive }) =>
                  `relative px-3 py-2 text-[13px] font-medium transition-colors ${
                    isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {n.label}
                    {isActive && <span className="absolute left-3 right-3 -bottom-0.5 h-px bg-primary" />}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <a
              href="https://wa.me/971600000000"
              target="_blank" rel="noreferrer"
              className="btn-ghost h-9 px-4 text-[13px]"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
            <Link to="/rfq" className="btn-primary h-9 px-4 text-[13px]">Request Quote</Link>
          </div>

          <button className="xl:hidden p-2 text-foreground" onClick={() => setOpen(!open)} aria-label="menu">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="xl:hidden hairline-b bg-background/98 backdrop-blur-xl">
          <nav className="container py-4 flex flex-col">
            {NAV.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                end={n.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `py-3 text-sm font-medium hairline-b ${isActive ? "text-primary" : "text-foreground"}`
                }
              >
                {n.label}
              </NavLink>
            ))}
            <div className="flex gap-2 mt-4">
              <a href="https://wa.me/971600000000" target="_blank" rel="noreferrer" className="btn-ghost flex-1">WhatsApp</a>
              <Link to="/rfq" onClick={() => setOpen(false)} className="btn-primary flex-1">Request Quote</Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
