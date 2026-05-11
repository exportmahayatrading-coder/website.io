import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { Mail, Phone, MapPin, MessageCircle, Clock } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [form, setForm] = useState({ name: "", company: "", email: "", message: "" });
  return (
    <>
      <PageHero
        eyebrow="CONTACT"
        title="Talk to a procurement engineer."
        subtitle="Headquartered in the UAE. Operating across the GCC. Online 24/7 for emergencies."
      />

      <section className="container pb-24">
        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3 industrial-card p-8">
            <div className="font-display text-2xl mb-6">Send an enquiry</div>
            <form onSubmit={(e) => { e.preventDefault(); toast.success("Enquiry received. We'll be in touch shortly."); }} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <Field label="Name" v={form.name} on={(v) => setForm({...form, name: v})} />
                <Field label="Company" v={form.company} on={(v) => setForm({...form, company: v})} />
              </div>
              <Field label="Work Email" v={form.email} on={(v) => setForm({...form, email: v})} />
              <div>
                <Label className="mono text-xs tracking-widest text-muted-foreground">MESSAGE</Label>
                <Textarea rows={6} className="mt-2 bg-muted/40 border-border" value={form.message} onChange={(e) => setForm({...form, message: e.target.value})}/>
              </div>
              <Button type="submit" size="lg" className="bg-primary hover:bg-primary-glow text-primary-foreground h-12 px-7">Send Enquiry →</Button>
            </form>
          </div>

          <div className="lg:col-span-2 space-y-4">
            {[
              { icon: MapPin, t: "Headquarters", v: "SAIF Zone, Sharjah, United Arab Emirates" },
              { icon: Phone, t: "Phone", v: "+971 (0) 6 000 0000" },
              { icon: Mail, t: "Email", v: "rfq@mahaya-amaal.com" },
              { icon: MessageCircle, t: "WhatsApp", v: "+971 50 000 0000 · 24/7" },
              { icon: Clock, t: "Emergency Desk", v: "72-hour engineered response, 365 days" },
            ].map((c) => (
              <div key={c.t} className="industrial-card p-5 flex items-start gap-4">
                <div className="h-10 w-10 grid place-items-center bg-primary/10 text-primary shrink-0"><c.icon className="h-5 w-5"/></div>
                <div>
                  <div className="mono text-[10px] tracking-widest text-muted-foreground">{c.t.toUpperCase()}</div>
                  <div className="font-semibold mt-1">{c.v}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

const Field = ({ label, v, on }: { label: string; v: string; on: (v: string) => void }) => (
  <div>
    <Label className="mono text-xs tracking-widest text-muted-foreground">{label.toUpperCase()}</Label>
    <Input className="mt-2 bg-muted/40 border-border" value={v} onChange={(e) => on(e.target.value)} required/>
  </div>
);

export default Contact;
