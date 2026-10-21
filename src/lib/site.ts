export const SITE = {
  name: "Innovative Office Co",
  short: "IOC",
  tagline: "One Source, Every Solution",
  sub: "Office & Equipment Solutions",
  phone: "078 207 2929",
  phoneIntl: "+27782072929",
  whatsapp: "27782072949",
  email: "sales@innovativeoffice.co.za",
  emailAlt: "info@innovativeofficeco.co.za",
  website: "www.innovativeoffice.co.za",
  address: "Fancourt Office Park, c/o Northumberland & Felstead Road, Boundary Park, Northriding",
  mapsEmbed:
    "https://www.google.com/maps?q=Fancourt+Office+Park+Northumberland+Felstead+Northriding&output=embed",
  mapsLink:
    "https://www.google.com/maps/search/?api=1&query=Fancourt+Office+Park+Northumberland+Felstead+Northriding",
  contactPerson: { name: "Martin Baloyi", title: "Sales Director" },
  credit: { label: "www.webdevpro.co.za", url: "https://www.webdevpro.co.za", phone: "+27812159792" },
};

export const SERVICES = [
  { slug: "office", title: "Office Solutions", icon: "Briefcase",
    blurb: "Executive desks, ergonomic chairs, school desks, complete workspace setup and supply.",
    items: ["Office Furniture", "Executive Desks", "Office & School Chairs", "Stationery & Consumables", "Filing & Accessories", "Textbooks"] },
  { slug: "ict", title: "ICT & Technology", icon: "Cpu",
    blurb: "Desktops, laptops, networking, UPS and full business technology support.",
    items: ["Desktop Computers", "Laptops & Monitors", "Networking Equipment", "UPS & Backup Power", "Printers & Scanners", "Software Solutions"] },
  { slug: "print", title: "Printing & Branding", icon: "Printer",
    blurb: "Office printers, managed print and full corporate branding solutions.",
    items: ["MFP Printers", "Print Solutions", "Corporate Branding", "Signage", "Promo Products", "Stationery Design"] },
  { slug: "clean", title: "Cleaning & Hygiene", icon: "SprayCan",
    blurb: "Chemicals, consumables and equipment for a clean, hygienic workplace.",
    items: ["Cleaning Chemicals", "Hygiene Consumables", "Washroom Supplies", "Sanitation Products", "Cleaning Equipment", "Janitorial Tools"] },
  { slug: "security", title: "Security Solutions", icon: "ShieldCheck",
    blurb: "CCTV, access control, biometrics and full surveillance infrastructure.",
    items: ["CCTV Cameras", "Access Control", "Biometric Systems", "Monitoring Equipment", "Security Hardware", "Surveillance Infra"] },
  { slug: "steel", title: "Steel Works & Infrastructure", icon: "HardHat",
    blurb: "Custom steel fabrication for security, telecoms and infrastructure.",
    items: ["CCTV Camera Poles", "Camera Brackets", "PTZ Candy Sticks", "Solar Mounting Brackets", "Equipment Cabinets", "Custom Fabrication"] },
] as const;

export const INDUSTRIES = [
  "Corporate Offices", "Schools & Education", "Security Companies",
  "Construction & Engineering", "Property Managers", "Retail Businesses",
  "Industrial Facilities", "SMEs", "Healthcare Facilities", "Non-Profits",
];

export const waLink = (msg = "Hi IOC, I'd like a quote.") =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg)}`;
