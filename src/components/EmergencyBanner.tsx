import { AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";

export const EmergencyBanner = () => (
  <div className="relative overflow-hidden bg-gradient-alert border-b border-destructive/40">
    <div className="container py-2.5 flex items-center justify-center gap-3 text-xs sm:text-sm">
      <span className="relative flex h-2 w-2 shrink-0">
        <span className="absolute inset-0 rounded-full bg-destructive animate-ping"/>
        <span className="relative h-2 w-2 rounded-full bg-destructive"/>
      </span>
      <AlertTriangle className="h-4 w-4 text-destructive shrink-0"/>
      <span className="font-semibold tracking-wide">EMERGENCY PROCUREMENT ACTIVE</span>
      <span className="hidden sm:inline text-muted-foreground">— 72hr response on critical-path shortages</span>
      <Link to="/rfq" className="ml-2 text-primary hover:text-primary-glow font-semibold uppercase tracking-wider mono text-[11px]">
        Escalate →
      </Link>
    </div>
  </div>
);
