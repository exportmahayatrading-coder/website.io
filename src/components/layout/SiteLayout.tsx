import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { WhatsAppFab } from "./WhatsAppFab";
import { EmergencyBanner } from "@/components/EmergencyBanner";

export const SiteLayout = () => (
  <div className="min-h-screen flex flex-col">
    <EmergencyBanner />
    <Header />
    <main className="flex-1">
      <Outlet />
    </main>
    <Footer />
    <WhatsAppFab />
  </div>
);
