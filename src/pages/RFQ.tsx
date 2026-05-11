import { useState } from "react";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Upload, Zap, FileSpreadsheet, Search, AlertTriangle } from "lucide-react";
import { toast } from "sonner";

const RFQ = () => {
  const [emergency, setEmergency] = useState({ name: "", company: "", part: "", details: "" });
  const [standard, setStandard] = useState({ name: "", company: "", email: "", details: "" });
  const [track, setTrack] = useState("");

  const submit = (e: React.FormEvent, type: string) => {
    e.preventDefault();
    toast.success(`${type} RFQ received. Our desk will respond within 72 hours.`);
  };

  return (
    <>
      <PageHero
        eyebrow="RFQ PORTAL · 24/7"
        title="Send a part. Get an engineered quote."
        subtitle="Emergency, standard or full BOM — submit through the channel that matches your urgency."
      />

      <section className="container pb-24">
        <Tabs defaultValue="emergency" className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 h-auto bg-card border border-border p-1 gap-1">
            <TabsTrigger value="emergency" className="data-[state=active]:bg-destructive data-[state=active]:text-destructive-foreground py-3">
              <AlertTriangle className="h-4 w-4 mr-2"/>Emergency
            </TabsTrigger>
            <TabsTrigger value="standard" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-3">
              <Zap className="h-4 w-4 mr-2"/>Standard
            </TabsTrigger>
            <TabsTrigger value="bom" className="data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground py-3">
              <FileSpreadsheet className="h-4 w-4 mr-2"/>BOM Upload
            </TabsTrigger>
            <TabsTrigger value="track" className="data-[state=active]:bg-warning data-[state=active]:text-warning-foreground py-3">
              <Search className="h-4 w-4 mr-2"/>Track
            </TabsTrigger>
          </TabsList>

          {/* EMERGENCY */}
          <TabsContent value="emergency" className="mt-6">
            <div className="industrial-card p-8 border-destructive/30">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 grid place-items-center bg-destructive/15 text-destructive">
                  <AlertTriangle className="h-5 w-5"/>
                </div>
                <div>
                  <div className="font-display text-2xl">Emergency RFQ</div>
                  <div className="text-sm text-muted-foreground">72-hour engineered response · critical-path priority</div>
                </div>
              </div>
              <form onSubmit={(e) => submit(e, "Emergency")} className="grid md:grid-cols-2 gap-5">
                <Field label="Full Name" v={emergency.name} on={(v) => setEmergency({...emergency, name: v})} required />
                <Field label="Company" v={emergency.company} on={(v) => setEmergency({...emergency, company: v})} required />
                <div className="md:col-span-2"><Field label="Part Number / Manufacturer Code" v={emergency.part} on={(v) => setEmergency({...emergency, part: v})} required mono /></div>
                <div className="md:col-span-2">
                  <Label className="mono text-xs tracking-widest text-muted-foreground">PLANT / APPLICATION CONTEXT</Label>
                  <Textarea value={emergency.details} onChange={(e) => setEmergency({...emergency, details: e.target.value})} className="mt-2 bg-muted/40 border-border" rows={4} placeholder="Plant down? Critical line? Tell us the timeline..." required/>
                </div>
                <Button type="submit" size="lg" className="md:col-span-2 bg-destructive hover:bg-destructive/90 text-destructive-foreground h-12">Escalate Emergency RFQ →</Button>
              </form>
            </div>
          </TabsContent>

          {/* STANDARD */}
          <TabsContent value="standard" className="mt-6">
            <div className="industrial-card p-8">
              <div className="font-display text-2xl mb-2">Standard RFQ</div>
              <div className="text-sm text-muted-foreground mb-6">Engineered quotation within 3–5 business days.</div>
              <form onSubmit={(e) => submit(e, "Standard")} className="grid md:grid-cols-2 gap-5">
                <Field label="Full Name" v={standard.name} on={(v) => setStandard({...standard, name: v})} required />
                <Field label="Company" v={standard.company} on={(v) => setStandard({...standard, company: v})} required />
                <div className="md:col-span-2"><Field label="Work Email" v={standard.email} on={(v) => setStandard({...standard, email: v})} required /></div>
                <div className="md:col-span-2">
                  <Label className="mono text-xs tracking-widest text-muted-foreground">REQUIREMENT DETAILS</Label>
                  <Textarea value={standard.details} onChange={(e) => setStandard({...standard, details: e.target.value})} className="mt-2 bg-muted/40 border-border" rows={6} placeholder="Brand, part numbers, quantities, target delivery..." required/>
                </div>
                <Button type="submit" size="lg" className="md:col-span-2 bg-primary hover:bg-primary-glow text-primary-foreground h-12">Submit RFQ →</Button>
              </form>
            </div>
          </TabsContent>

          {/* BOM */}
          <TabsContent value="bom" className="mt-6">
            <div className="industrial-card p-8">
              <div className="font-display text-2xl mb-2">BOM Upload</div>
              <div className="text-sm text-muted-foreground mb-6">Upload Excel / CSV / PDF — engineer-reviewed line by line.</div>
              <label className="block border-2 border-dashed border-border hover:border-primary/60 transition-colors p-12 text-center cursor-pointer bg-muted/20">
                <Upload className="h-10 w-10 text-primary mx-auto mb-4"/>
                <div className="font-display text-xl mb-1">Drop your BOM file here</div>
                <div className="text-sm text-muted-foreground">XLSX · CSV · PDF · up to 20MB</div>
                <input type="file" className="hidden" onChange={() => toast.success("BOM received. Our engineering desk will reach out within 24h.")}/>
              </label>
              <div className="mt-6 grid sm:grid-cols-3 gap-4 text-sm">
                {["Cross-reference & equivalents","Lead-time & price commit","Compliance & certificate scope"].map((p) => (
                  <div key={p} className="flex items-center gap-2 text-muted-foreground">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary"/>{p}
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* TRACK */}
          <TabsContent value="track" className="mt-6">
            <div className="industrial-card p-8">
              <div className="font-display text-2xl mb-2">Quote Tracker</div>
              <div className="text-sm text-muted-foreground mb-6">Enter your RFQ reference to view live status.</div>
              <div className="flex gap-3 max-w-xl">
                <Input className="bg-muted/40 border-border mono" placeholder="MA-RFQ-XXXX" value={track} onChange={(e) => setTrack(e.target.value)}/>
                <Button onClick={() => toast.info(track ? `RFQ ${track}: Engineering Review` : "Enter a reference")} className="bg-warning text-warning-foreground hover:bg-warning/90">Track →</Button>
              </div>
              <div className="mt-8 grid sm:grid-cols-4 gap-2">
                {["Received","Engineering Review","Quotation Issued","Delivered"].map((s, i) => (
                  <div key={s} className="industrial-card p-4">
                    <div className="mono text-[10px] text-muted-foreground">STAGE {i+1}</div>
                    <div className="font-display text-base mt-1">{s}</div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </section>
    </>
  );
};

const Field = ({ label, v, on, required, mono }: { label: string; v: string; on: (v: string) => void; required?: boolean; mono?: boolean }) => (
  <div>
    <Label className="mono text-xs tracking-widest text-muted-foreground">{label.toUpperCase()}</Label>
    <Input className={`mt-2 bg-muted/40 border-border ${mono ? "mono" : ""}`} value={v} onChange={(e) => on(e.target.value)} required={required}/>
  </div>
);

export default RFQ;
