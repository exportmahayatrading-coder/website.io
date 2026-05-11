import { MessageCircle } from "lucide-react";

export const WhatsAppFab = () => (
  <a
    href="https://wa.me/971600000000?text=Hello%20Mahaya%20Amaal%2C%20I%20have%20a%20procurement%20enquiry"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="WhatsApp"
    className="fixed bottom-6 right-6 z-40 group"
  >
    <span className="absolute inset-0 rounded-full bg-success/50 animate-ping" />
    <span className="relative flex items-center gap-2 bg-success text-primary-foreground px-4 py-3 rounded-full shadow-glow font-semibold text-sm">
      <MessageCircle className="h-5 w-5" />
      <span className="hidden sm:inline">WhatsApp RFQ</span>
    </span>
  </a>
);
