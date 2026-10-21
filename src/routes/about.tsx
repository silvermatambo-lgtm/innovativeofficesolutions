import { createFileRoute, Link } from "@tanstack/react-router";
import { Target, Eye, Award, Users, Truck, HeadphonesIcon } from "lucide-react";
import heroImg from "@/assets/hero-office.jpg";
import { SITE, INDUSTRIES } from "@/lib/site";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: `About Us | ${SITE.name}` },
      { name: "description", content: `${SITE.name} is a South African supplier of comprehensive office, ICT, security and steel infrastructure solutions. Our mission, vision and the industries we serve.` },
      { property: "og:title", content: `About ${SITE.name}` },
      { property: "og:description", content: "South Africa's single-source procurement partner." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <section className="relative -mt-16 lg:-mt-20 h-[55vh] min-h-[420px] flex items-end">
        <img src={heroImg} alt="" className="absolute inset-0 w-full h-full object-cover" loading="eager"/>
        <div className="absolute inset-0 bg-gradient-hero"/>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16 text-white">
          <p className="text-xs uppercase tracking-widest font-bold text-brand-yellow">About IOC</p>
          <h1 className="mt-3 font-display text-4xl sm:text-6xl font-extrabold">One Source.<br/><span className="text-brand-yellow">Every Solution.</span></h1>
          <p className="mt-4 max-w-2xl text-white/85">South Africa's trusted procurement partner for office, ICT, security and steel infrastructure.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-10">
          <Reveal className="lg:col-span-2">
            <p className="text-sm font-bold uppercase tracking-widest text-brand-green">Company Overview</p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-extrabold">A single-source procurement partner.</h2>
            <div className="brand-bar mt-4 max-w-[140px]"/>
            <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
              <p><span className="text-foreground font-semibold">IOC Innovative Office Co</span> is a South African-based supplier of comprehensive office, technology, security, and steel infrastructure solutions. We deliver high-quality products, reliable service, and cost-effective solutions to businesses, schools, contractors, property managers, security companies, and organisations across South Africa.</p>
              <p>With a customer-focused approach and a commitment to excellence, IOC serves as a single-source procurement partner, providing a wide range of products and services designed to support efficient business operations and infrastructure development.</p>
              <p className="font-display text-xl text-brand-green font-bold">"One Source. Every Solution."</p>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="rounded-2xl border bg-card p-6 shadow-soft">
              <h3 className="font-display font-bold text-lg">Speak to our team</h3>
              <p className="text-sm text-muted-foreground mt-1">{SITE.contactPerson.name} — {SITE.contactPerson.title}</p>
              <ul className="mt-4 text-sm grid gap-2">
                <li><span className="font-semibold">Phone:</span> <a href={`tel:${SITE.phoneIntl}`} className="text-brand-green">{SITE.phone}</a></li>
                <li className="break-all"><span className="font-semibold">Email:</span> <a href={`mailto:${SITE.email}`} className="text-brand-green">{SITE.email}</a></li>
                <li><span className="font-semibold">Address:</span> {SITE.address}</li>
              </ul>
              <Link to="/contact" className="mt-5 inline-flex w-full justify-center rounded-full bg-brand-green text-white py-2.5 font-semibold">Get In Touch</Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16 bg-secondary/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-6">
          {[
            { I: Target, t: "Our Mission", d: "To provide innovative, reliable, and cost-effective office, technology, security, and infrastructure solutions that help our clients operate efficiently and achieve their business objectives." },
            { I: Eye, t: "Our Vision", d: "To become a leading provider of integrated business and infrastructure solutions throughout South Africa, recognised for quality, service excellence, and customer satisfaction." },
          ].map(({ I, t, d }, i) => (
            <Reveal key={t} delay={i * 100}>
              <div className="h-full rounded-2xl bg-card border p-7 shadow-soft">
                <span className="h-12 w-12 rounded-xl bg-brand-green/10 text-brand-green inline-flex items-center justify-center"><I className="h-6 w-6"/></span>
                <h3 className="mt-4 font-display text-2xl font-bold">{t}</h3>
                <p className="mt-3 text-muted-foreground">{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center max-w-2xl mx-auto">
            <p className="text-sm font-bold uppercase tracking-widest text-brand-green">What Sets Us Apart</p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-extrabold">Why partner with IOC?</h2>
          </Reveal>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { I: Award, t: "Quality Products", d: "Sourced from trusted local & global manufacturers." },
              { I: Users, t: "Customer-First", d: "Customised solutions for your unique business needs." },
              { I: Truck, t: "Nationwide", d: "Fast and reliable supply across all 9 provinces." },
              { I: HeadphonesIcon, t: "Pro Support", d: "Professional after-sales service & technical support." },
            ].map(({ I, t, d }, i) => (
              <Reveal key={t} delay={i * 80}>
                <div className="h-full rounded-2xl bg-card border p-6 hover:border-brand-green hover:shadow-soft transition">
                  <I className="h-7 w-7 text-brand-green"/>
                  <h3 className="mt-3 font-bold">{t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand-navy text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center max-w-2xl mx-auto">
            <p className="text-sm font-bold uppercase tracking-widest text-brand-yellow">Industries</p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-extrabold">Industries We Serve</h2>
          </Reveal>
          <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {INDUSTRIES.map((ind, i) => (
              <Reveal key={ind} delay={i * 40}>
                <div className="rounded-xl bg-white/5 border border-white/10 p-4 text-center text-sm font-medium hover:bg-brand-green hover:border-brand-green transition">{ind}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
