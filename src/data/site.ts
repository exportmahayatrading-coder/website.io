export const COMPANY = {
  legalName: "Mahaya Amaal International FZC",
  shortName: "Mahaya Amaal",
  tagline: "GCC's Premier Technical Procurement Solution for Vision 2030 Mega-Projects",
  specialization: "Specialists in Schneider, Siemens, ABB, Eaton, Mitsubishi & Rockwell Products",
  address: "Office B28-086, Block B, SRTI Park, Free Zone Authority, PO Box 237614, Sharjah, UAE",
  addressShort: "SRTI Park, Sharjah, UAE",
  phone: "+971 58 546 3566",
  phoneHref: "tel:+971585463566",
  phoneLabel: "Emergency Hotline",
  whatsapp: "971585463566",
  whatsappHref: "https://wa.me/971585463566",
  emails: [
    { label: "Export", value: "export.mahayatrading@gmail.com" },
    { label: "Sales", value: "sales.mahaya@maiguae.com" },
  ],
  website: "www.maiguae.com",
  websiteHref: "https://www.maiguae.com",
};

export const BRANDS = [
  { slug: "schneider", name: "Schneider Electric", tagline: "Power management & automation", color: "#3DCD58", categories: ["PLC", "VFD", "Switchgear", "PowerLogic", "Modicon"] },
  { slug: "abb", name: "ABB", tagline: "Electrification & robotics", color: "#FF000F", categories: ["Drives", "Robotics", "Motors", "Breakers", "DCS"] },
  { slug: "siemens", name: "Siemens", tagline: "Digital industries", color: "#009999", categories: ["SIMATIC", "SINAMICS", "SIRIUS", "Sentron", "Energy"] },
  { slug: "eaton", name: "Eaton", tagline: "Intelligent power management", color: "#004B87", categories: ["UPS", "Breakers", "Hydraulics", "Aerospace"] },
  { slug: "mitsubishi", name: "Mitsubishi Electric", tagline: "Factory automation", color: "#DA0F1F", categories: ["MELSEC PLC", "Servo", "HMI", "Inverters"] },
  { slug: "rockwell", name: "Rockwell Automation", tagline: "Allen-Bradley & ControlLogix", color: "#CC0000", categories: ["ControlLogix", "PowerFlex", "Stratix", "Kinetix"] },
];

export const INDUSTRIES = [
  { icon: "⛽", name: "Oil & Gas", desc: "Upstream, midstream and downstream procurement for ADNOC, Aramco, KOC, QatarEnergy projects." },
  { icon: "⚡", name: "Power & Utilities", desc: "Generation, transmission & distribution components for SEC, DEWA, EWEC." },
  { icon: "💧", name: "Water & Desalination", desc: "RO plant, pump station and SCADA components for GCC mega-water projects." },
  { icon: "🏗️", name: "EPC & Construction", desc: "Bulk delivery for engineering contractors building Vision 2030 megaprojects." },
  { icon: "🏭", name: "Petrochemicals", desc: "Hazardous-area certified instrumentation, control & electrical." },
  { icon: "🚇", name: "Infrastructure & Metro", desc: "Rail, metro, airports and smart city electrification." },
  { icon: "🛢️", name: "Marine & Offshore", desc: "Offshore platform, FPSO and shipyard procurement." },
  { icon: "🏥", name: "Critical Facilities", desc: "Data centres, hospitals and defence-grade UPS & power." },
];

export const SHORTAGES = [
  { part: "Schneider TM221CE40R", status: "CRITICAL", lead: "32 wks", trend: "▲ 18%" },
  { part: "ABB ACS880-01-145A", status: "ALERT", lead: "26 wks", trend: "▲ 9%" },
  { part: "Siemens 6ES7515-2AM02", status: "CRITICAL", lead: "40 wks", trend: "▲ 22%" },
  { part: "Allen-Bradley 1756-L85E", status: "ALERT", lead: "22 wks", trend: "▲ 7%" },
  { part: "Eaton 9PXM UPS", status: "WATCH", lead: "14 wks", trend: "▲ 3%" },
  { part: "Mitsubishi FX5U-32MT", status: "ALERT", lead: "18 wks", trend: "▲ 6%" },
  { part: "Schneider ATV930C13N4", status: "CRITICAL", lead: "36 wks", trend: "▲ 14%" },
  { part: "ABB REF615 Relay", status: "WATCH", lead: "12 wks", trend: "▲ 2%" },
];

export const PROJECTS = [
  { name: "NEOM", country: "Saudi Arabia", value: "$500B", stage: "Active EPC", scope: "Linear city, OXAGON, Trojena" },
  { name: "Red Sea Global", country: "Saudi Arabia", value: "$28B", stage: "Phase II", scope: "Tourism megaproject electrification" },
  { name: "Qiddiya", country: "Saudi Arabia", value: "$8B", stage: "Construction", scope: "Entertainment city utilities" },
  { name: "Etihad Rail", country: "UAE", value: "$11B", stage: "Stage 2", scope: "National rail electrification" },
  { name: "Lusail Smart City", country: "Qatar", value: "$45B", stage: "Build-out", scope: "Smart infrastructure" },
  { name: "Duqm SEZ", country: "Oman", value: "$20B", stage: "Active", scope: "Refinery & port complex" },
  { name: "Diriyah Gate", country: "Saudi Arabia", value: "$50B", stage: "Phase I", scope: "Heritage megaproject" },
  { name: "Kuwait Vision 2035", country: "Kuwait", value: "$130B", stage: "Ongoing", scope: "Silk City & infrastructure" },
];

export const TESTIMONIALS = [
  { quote: "Mahaya Amaal sourced a discontinued Schneider PLC within 72 hours — saved us 14 days of plant downtime.", author: "Procurement Director", company: "Major GCC Refinery" },
  { quote: "Their intelligence reports on lead times have become essential to our quarterly planning cycle.", author: "Supply Chain Head", company: "Tier-1 EPC Contractor" },
  { quote: "Reliable, fast, and they actually understand industrial electrical. Rare combination.", author: "Engineering Manager", company: "Utility Operator, KSA" },
];

export const STATS = [
  { value: "72h", label: "Emergency response" },
  { value: "6", label: "GCC countries served" },
  { value: "12K+", label: "SKUs sourced" },
  { value: "98%", label: "Fill rate" },
];
