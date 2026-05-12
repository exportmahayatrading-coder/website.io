import { MessageCircle } from "lucide-react";
import { COMPANY } from "@/data/site";

export const WhatsAppFab = () => (
  <a
    href={COMPANY.whatsappHref}
    target="_blank"
    rel="noreferrer"
    aria-label="WhatsApp procurement desk"
    className="fixed bottom-6 right-6 z-40 h-12 w-12 grid place-items-center rounded-full bg-primary text-primary-foreground shadow-elevated hover:scale-105 transition-transform"
  >
    <MessageCircle className="h-5 w-5" />
  </a>
);
