import { createFileRoute, Link } from "@tanstack/react-router";
import { Briefcase, Cpu, Printer, SprayCan, ShieldCheck, HardHat, CheckCircle2, MessageCircle } from "lucide-react";
import catOffice from "@/assets/cat-office.jpg";
import catIct from "@/assets/cat-ict.jpg";
import catPrint from "@/assets/cat-print.jpg";
import catClean from "@/assets/cat-clean.jpg";
import catSecurity from "@/assets/cat-security.jpg";
import catSteel from "@/assets/cat-steel.jpg";
import { SITE, SERVICES, waLink } from "@/lib/site";
import { Reveal } from "@/components/Reveal";

const ICONS = { Briefcase, Cpu, Printer, SprayCan, ShieldCheck, HardHat } as const;
const IMAGES: Record<string, string> = {
  office: catOffice, ict: catIct, print: catPrint, clean: catClean, security: catSecurity, steel: catSteel,
};

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: `Services | ${SITE.name}` },
      { name: "description", content: "Office furniture, ICT, printing & branding, cleaning & hygiene, security and steel infrastructure — full procurement solutions across South Africa." },
      { property: "og:title", content: `Our Services | ${SITE.name}` },
      { property: "og:description", content: "Six solution categories, one trusted supplier." },
    ],
  }),
  component: Services,
});

function Services() {
  return (
    <>
      <section className="relative bg-brand-navy text-white py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-90"/>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs uppercase tracking-widest font-bold text-brand-yellow">Products & Services</p>
          <h1 className="mt-3 font-display text-4xl sm:text-6xl font-extrabold text-balance">Everything your business needs — under one roof.</h1>
          <div className="brand-bar mt-5 max-w-xs mx-auto"/>
          <p className="mt-5 max-w-2xl mx-auto text-white/85">From boardroom furniture to galvanised CCTV poles, IOC delivers six complete solution categories with quality, speed and care.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-20">
          {SERVICES.map((s, i) => {
            const Icon = ICONS[s.icon as keyof typeof ICONS];
            const reverse = i % 2 === 1;
            return (
              <Reveal key={s.slug}>
                <div id={s.slug} className={`scroll-mt-28 grid lg:grid-cols-2 gap-10 items-center ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}>
                  <div className="rounded-2xl overflow-hidden shadow-soft aspect-[4/3]">
                    <img src={IMAGES[s.slug]} alt={s.title} loading="lazy" width={800} height={600} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"/>
                  </div>
                  <div>
                    <span className="inline-flex items-center gap-2 text-brand-green font-semibold text-sm">
                      <span className="h-10 w-10 rounded-xl bg-brand-green/10 inline-flex items-center justify-center"><Icon className="h-5 w-5"/></span>
                      0{i+1} — Category
                    </span>
                    <h2 className="mt-3 font-display text-3xl sm:text-4xl font-extrabold">{s.title}</h2>
                    <p className="mt-3 text-muted-foreground">{s.blurb}</p>
                    <ul className="mt-5 grid sm:grid-cols-2 gap-2">
                      {s.items.map((it) => (
                        <li key={it} className="flex items-start gap-2 text-sm font-medium">
                          <CheckCircle2 className="h-4.5 w-4.5 text-brand-green shrink-0 mt-0.5"/> {it}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 flex flex-wrap gap-3">
                      <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-brand-green text-white px-5 py-2.5 font-semibold hover:bg-brand-navy transition">Request Quote</Link>
                      <a href={waLink(`Hi IOC, I'd like a quote for ${s.title}.`)} target="_blank" rel="noreferrer"
                         className="inline-flex items-center gap-2 rounded-full border-2 border-brand-green text-brand-green px-5 py-2.5 font-semibold hover:bg-brand-green hover:text-white transition">
                        <MessageCircle className="h-4 w-4"/> Quick WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>
    </>
  );
}
