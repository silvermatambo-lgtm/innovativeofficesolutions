import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { X } from "lucide-react";
import catOffice from "@/assets/cat-office.jpg";
import catIct from "@/assets/cat-ict.jpg";
import catPrint from "@/assets/cat-print.jpg";
import catClean from "@/assets/cat-clean.jpg";
import catSecurity from "@/assets/cat-security.jpg";
import catSteel from "@/assets/cat-steel.jpg";
import heroImg from "@/assets/hero-office.jpg";
import { SITE } from "@/lib/site";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: `Gallery | ${SITE.name}` },
      { name: "description", content: "Product gallery: office furniture, ICT equipment, printers, cleaning products, CCTV and steel fabrication by Innovative Office Co." },
      { property: "og:title", content: `Gallery | ${SITE.name}` },
      { property: "og:description", content: "Browse our product range." },
    ],
  }),
  component: Gallery,
});

type Item = { src: string; cat: string; title: string };
const CATS = ["All", "Office", "ICT", "Printing", "Cleaning", "Security", "Steel"] as const;

const ITEMS: Item[] = [
  { src: catOffice, cat: "Office", title: "Executive Desks & Chairs" },
  { src: heroImg, cat: "Office", title: "Complete Workspace Setup" },
  { src: catIct, cat: "ICT", title: "Computers & Networking" },
  { src: catPrint, cat: "Printing", title: "Multifunction Printers" },
  { src: catClean, cat: "Cleaning", title: "Hygiene & Sanitation" },
  { src: catSecurity, cat: "Security", title: "CCTV & Access Control" },
  { src: catSteel, cat: "Steel", title: "Camera Poles & Brackets" },
  { src: catOffice, cat: "Office", title: "Modern Office Furniture" },
  { src: catSteel, cat: "Steel", title: "Custom Steel Fabrication" },
];

function Gallery() {
  const [filter, setFilter] = useState<(typeof CATS)[number]>("All");
  const [lightbox, setLightbox] = useState<Item | null>(null);
  const items = filter === "All" ? ITEMS : ITEMS.filter((i) => i.cat === filter);

  return (
    <>
      <section className="bg-brand-navy text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-90"/>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs uppercase tracking-widest font-bold text-brand-yellow">Gallery</p>
          <h1 className="mt-3 font-display text-4xl sm:text-5xl font-extrabold">Our Product Range</h1>
          <div className="brand-bar mt-4 max-w-[140px] mx-auto"/>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {CATS.map((c) => (
              <button key={c} onClick={() => setFilter(c)}
                      className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                        filter === c ? "bg-brand-green text-white shadow-soft" : "bg-secondary hover:bg-brand-green/10"
                      }`}>
                {c}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {items.map((it, i) => (
              <Reveal key={i} delay={i * 50}>
                <button onClick={() => setLightbox(it)} className="group block w-full rounded-2xl overflow-hidden bg-card border shadow-soft hover:shadow-glow transition-all">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={it.src} alt={it.title} loading="lazy" width={800} height={600} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"/>
                  </div>
                  <div className="p-4 flex justify-between items-center">
                    <p className="font-semibold text-sm">{it.title}</p>
                    <span className="text-xs rounded-full bg-brand-green/10 text-brand-green px-2.5 py-1 font-semibold">{it.cat}</span>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {lightbox && (
        <div className="fixed inset-0 z-[100] bg-black/85 flex items-center justify-center p-4 animate-fade-up" onClick={() => setLightbox(null)}>
          <button className="absolute top-4 right-4 h-10 w-10 rounded-full bg-white/10 text-white flex items-center justify-center" aria-label="Close">
            <X className="h-5 w-5"/>
          </button>
          <img src={lightbox.src} alt={lightbox.title} className="max-h-[85vh] max-w-full rounded-2xl shadow-2xl"/>
        </div>
      )}
    </>
  );
}
