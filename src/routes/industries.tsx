import { createFileRoute, Link } from "@tanstack/react-router";
import { Building2, GraduationCap, ShieldAlert, HardHat, Building, Store, Factory, Briefcase, Heart, HandHeart } from "lucide-react";
import { SITE } from "@/lib/site";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: `Industries | ${SITE.name}` },
      { name: "description", content: "IOC serves corporates, schools, security firms, contractors, property managers, retail, industrial, SMEs, healthcare and non-profits across South Africa." },
      { property: "og:title", content: `Industries | ${SITE.name}` },
      { property: "og:description", content: "Sectors we serve across South Africa." },
    ],
  }),
  component: Industries,
});

const ITEMS = [
  { I: Building2, t: "Corporate Offices", d: "Furniture, ICT and branding for corporate workspaces." },
  { I: GraduationCap, t: "Schools & Education", d: "Desks, chairs, textbooks and educational supplies." },
  { I: ShieldAlert, t: "Security Companies", d: "CCTV, access control and steel infrastructure." },
  { I: HardHat, t: "Construction & Engineering", d: "Site equipment, fabrication and installations." },
  { I: Building, t: "Property Managers", d: "Hygiene, cleaning, security and maintenance supplies." },
  { I: Store, t: "Retail Businesses", d: "Surveillance, signage and operational equipment." },
  { I: Factory, t: "Industrial Facilities", d: "Heavy-duty cleaning, security and steel works." },
  { I: Briefcase, t: "Small & Medium Enterprises", d: "Affordable end-to-end office and ICT solutions." },
  { I: Heart, t: "Healthcare Facilities", d: "Hygiene-grade cleaning, IT and access control." },
  { I: HandHeart, t: "Non-Profit Organisations", d: "Cost-effective office, IT and supplies procurement." },
];

function Industries() {
  return (
    <>
      <section className="bg-brand-navy text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-90"/>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs uppercase tracking-widest font-bold text-brand-yellow">Industries</p>
          <h1 className="mt-3 font-display text-4xl sm:text-5xl font-extrabold">Sectors We Serve</h1>
          <p className="mt-3 text-white/85 max-w-xl mx-auto">A trusted procurement partner for organisations across South Africa.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {ITEMS.map(({ I, t, d }, i) => (
              <Reveal key={t} delay={i * 60}>
                <div className="h-full rounded-2xl bg-card border p-6 shadow-soft hover:shadow-glow hover:-translate-y-1 transition">
                  <span className="h-12 w-12 rounded-xl bg-brand-green/10 text-brand-green inline-flex items-center justify-center">
                    <I className="h-6 w-6"/>
                  </span>
                  <h3 className="mt-4 font-display text-lg font-bold">{t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{d}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/contact" className="inline-flex rounded-full bg-brand-green text-white px-6 py-3 font-semibold hover:bg-brand-navy transition">Discuss Your Project</Link>
          </div>
        </div>
      </section>
    </>
  );
}
