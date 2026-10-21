import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowRight, Phone, MessageCircle, FileText, CheckCircle2, Briefcase, Cpu, Printer, SprayCan, ShieldCheck, HardHat, Star, Quote } from "lucide-react";
import heroImg from "@/assets/hero-office.jpg";
import catOffice from "@/assets/cat-office.jpg";
import catIct from "@/assets/cat-ict.jpg";
import catPrint from "@/assets/cat-print.jpg";
import catClean from "@/assets/cat-clean.jpg";
import catSecurity from "@/assets/cat-security.jpg";
import catSteel from "@/assets/cat-steel.jpg";
import { SITE, SERVICES, waLink } from "@/lib/site";
import { Reveal } from "@/components/Reveal";

const ICONS = { Briefcase, Cpu, Printer, SprayCan, ShieldCheck, HardHat } as const;
const SERVICE_IMAGES: Record<string, string> = {
  office: catOffice, ict: catIct, print: catPrint, clean: catClean, security: catSecurity, steel: catSteel,
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${SITE.name} | ${SITE.tagline}` },
      { name: "description", content: `South Africa's one-stop supplier for office furniture, ICT, printing, cleaning, security and steel infrastructure. ${SITE.tagline}.` },
      { property: "og:title", content: `${SITE.name} | ${SITE.tagline}` },
      { property: "og:description", content: `${SITE.sub} — ${SITE.tagline}.` },
    ],
  }),
  component: Home,
});

const SLIDES = [
  { image: heroImg, eyebrow: "Innovative Office Co", title: "One Source.", title2: "Every Solution.",
    text: "Office, ICT, security, printing, hygiene and steel infrastructure — all under one trusted South African brand." },
  { image: catSecurity, eyebrow: "Security Solutions", title: "Smart Security,", title2: "Built to Protect.",
    text: "CCTV, biometric access control and surveillance infrastructure engineered for SA businesses." },
  { image: catSteel, eyebrow: "Steel Works", title: "Engineered Steel.", title2: "Real Infrastructure.",
    text: "Custom CCTV poles, brackets and galvanised steel fabrication for security & telecoms." },
];

const TYPING = ["Office Furniture", "ICT Equipment", "CCTV & Access Control", "Steel Fabrication", "Cleaning Supplies"];

function Home() {
  const [slide, setSlide] = useState(0);
  const [typed, setTyped] = useState("");
  const [tIdx, setTIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setSlide((s) => (s + 1) % SLIDES.length), 6000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const word = TYPING[tIdx];
    let i = 0;
    setTyped("");
    const typing = setInterval(() => {
      i++;
      setTyped(word.slice(0, i));
      if (i >= word.length) {
        clearInterval(typing);
        setTimeout(() => setTIdx((p) => (p + 1) % TYPING.length), 1800);
      }
    }, 70);
    return () => clearInterval(typing);
  }, [tIdx]);

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[88vh] lg:min-h-[92vh] -mt-16 lg:-mt-20 overflow-hidden">
        {SLIDES.map((s, i) => (
          <div key={i} className={`absolute inset-0 transition-opacity duration-1000 ${i === slide ? "opacity-100" : "opacity-0"}`}>
            <img src={s.image} alt="" className="absolute inset-0 w-full h-full object-cover" loading={i === 0 ? "eager" : "lazy"} />
            <div className="absolute inset-0 bg-gradient-hero" />
          </div>
        ))}

        {/* floating blobs */}
        <div className="absolute top-24 right-10 h-24 w-24 rounded-full bg-brand-yellow/30 blur-2xl animate-float hidden sm:block"/>
        <div className="absolute bottom-32 left-10 h-32 w-32 rounded-full bg-brand-green/30 blur-2xl animate-float hidden sm:block" style={{animationDelay:"2s"}}/>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 lg:pt-44 pb-20 text-white">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-4 py-1.5 text-xs font-semibold tracking-wider uppercase animate-fade-up">
              <span className="h-2 w-2 rounded-full bg-brand-yellow animate-pulse"/>
              {SLIDES[slide].eyebrow}
            </p>
            <h1 className="mt-5 font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] text-balance animate-fade-up">
              {SLIDES[slide].title}<br/>
              <span className="text-brand-yellow">{SLIDES[slide].title2}</span>
            </h1>
            <p className="mt-5 text-base sm:text-lg text-white/85 max-w-2xl animate-fade-up">{SLIDES[slide].text}</p>
            <p className="mt-4 text-lg font-semibold text-white/90">
              We supply <span className="text-brand-yellow font-bold cursor-blink">{typed}</span>
            </p>

            <div className="mt-7 flex flex-wrap gap-3 animate-fade-up">
              <a href={`tel:${SITE.phoneIntl}`} className="inline-flex items-center gap-2 rounded-full bg-brand-green text-white px-5 py-3 font-semibold shadow-glow hover:scale-105 transition">
                <Phone className="h-4 w-4"/> Call Now
              </a>
              <a href={waLink()} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-whatsapp text-white px-5 py-3 font-semibold hover:scale-105 transition">
                <MessageCircle className="h-4 w-4"/> WhatsApp
              </a>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-white text-brand-navy px-5 py-3 font-semibold hover:bg-brand-yellow transition">
                <FileText className="h-4 w-4"/> Request Quote
              </Link>
            </div>
          </div>

          {/* slide dots */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
            {SLIDES.map((_, i) => (
              <button key={i} onClick={() => setSlide(i)} aria-label={`Slide ${i+1}`}
                className={`h-2 rounded-full transition-all ${i === slide ? "bg-brand-yellow w-8" : "bg-white/40 w-2"}`}/>
            ))}
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="bg-gradient-brand text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {[["6+", "Solution Categories"], ["1000+", "Products Supplied"], ["9", "Provinces Served"], ["100%", "Quality Guaranteed"]].map(([n, l]) => (
            <div key={l}>
              <p className="font-display text-2xl sm:text-3xl font-extrabold text-brand-yellow">{n}</p>
              <p className="text-xs sm:text-sm text-white/85 mt-0.5">{l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES GRID */}
      <section id="services" className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center max-w-2xl mx-auto">
            <p className="text-sm font-bold uppercase tracking-widest text-brand-green">What We Do</p>
            <h2 className="mt-3 font-display text-3xl sm:text-5xl font-extrabold text-balance">Six Solutions. One Trusted Partner.</h2>
            <div className="brand-bar mt-5 max-w-xs mx-auto"/>
            <p className="mt-5 text-muted-foreground">From boardroom furniture to galvanised CCTV poles — we deliver, install and support across South Africa.</p>
          </Reveal>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s, i) => {
              const Icon = ICONS[s.icon as keyof typeof ICONS];
              return (
                <Reveal key={s.slug} delay={i * 80}>
                  <Link to="/services" hash={s.slug} className="group block rounded-2xl overflow-hidden bg-card border shadow-soft hover:shadow-glow transition-all hover:-translate-y-1">
                    <div className="aspect-[5/3] overflow-hidden bg-secondary">
                      <img src={SERVICE_IMAGES[s.slug]} alt={s.title} loading="lazy" width={800} height={480}
                           className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3">
                        <span className="h-11 w-11 rounded-xl bg-brand-green/10 text-brand-green inline-flex items-center justify-center group-hover:bg-brand-green group-hover:text-white transition">
                          <Icon className="h-5 w-5"/>
                        </span>
                        <h3 className="font-display text-lg font-bold">{s.title}</h3>
                      </div>
                      <p className="mt-3 text-sm text-muted-foreground">{s.blurb}</p>
                      <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-green group-hover:gap-2 transition-all">
                        Explore <ArrowRight className="h-4 w-4"/>
                      </span>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-20 bg-secondary/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <img src={heroImg} alt="Modern office workspace" loading="lazy" width={1600} height={900}
                 className="rounded-2xl shadow-soft w-full h-auto object-cover aspect-[4/3]"/>
          </Reveal>
          <Reveal delay={150}>
            <p className="text-sm font-bold uppercase tracking-widest text-brand-green">Why Choose IOC</p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-extrabold">A trusted single-source partner for South African businesses.</h2>
            <p className="mt-4 text-muted-foreground">We simplify procurement by combining quality products, competitive pricing and reliable nationwide service — so you can focus on running your business.</p>
            <ul className="mt-6 grid sm:grid-cols-2 gap-3">
              {["One supplier, multiple needs", "Competitive pricing", "Trusted manufacturers", "Fast nationwide delivery", "Custom solutions", "Professional support"].map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm font-medium">
                  <CheckCircle2 className="h-5 w-5 text-brand-green shrink-0 mt-0.5"/> {f}
                </li>
              ))}
            </ul>
            <div className="mt-7 flex gap-3">
              <Link to="/about" className="inline-flex items-center gap-2 rounded-full bg-brand-navy text-white px-5 py-3 font-semibold hover:bg-brand-green transition">About Us <ArrowRight className="h-4 w-4"/></Link>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border-2 border-brand-navy px-5 py-3 font-semibold hover:bg-brand-navy hover:text-white transition">Get Quote</Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center max-w-2xl mx-auto">
            <p className="text-sm font-bold uppercase tracking-widest text-brand-green">Client Voices</p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-extrabold">Trusted Across South Africa</h2>
          </Reveal>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[
              { n: "Thandi M.", r: "Procurement Manager, JHB", t: "IOC consolidated five suppliers into one. Our office refurbish came in on budget and ahead of schedule." },
              { n: "Sipho K.", r: "Security Director", t: "Their custom CCTV poles and brackets are exceptional quality. Installation was clean and professional." },
              { n: "Naledi P.", r: "School Principal", t: "From desks to textbooks, IOC delivered everything we needed for our new classrooms in record time." },
            ].map((t, i) => (
              <Reveal key={t.n} delay={i * 100}>
                <article className="h-full rounded-2xl bg-card border p-6 shadow-soft hover:shadow-glow transition">
                  <Quote className="h-7 w-7 text-brand-yellow"/>
                  <p className="mt-3 text-sm leading-relaxed">"{t.t}"</p>
                  <div className="mt-5 flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-sm">{t.n}</p>
                      <p className="text-xs text-muted-foreground">{t.r}</p>
                    </div>
                    <div className="flex gap-0.5 text-brand-yellow">
                      {Array.from({ length: 5 }).map((_, j) => <Star key={j} className="h-4 w-4 fill-current"/>)}
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-brand"/>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 20% 20%, white 1px, transparent 1px)", backgroundSize: "32px 32px" }}/>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20 text-center text-white">
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold">Let's build your next workspace.</h2>
          <p className="mt-4 text-white/85 max-w-xl mx-auto">Tell us what you need — we'll send a tailored quote within 24 hours.</p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <a href={`tel:${SITE.phoneIntl}`} className="inline-flex items-center gap-2 rounded-full bg-white text-brand-navy px-6 py-3 font-bold hover:bg-brand-yellow transition">
              <Phone className="h-4 w-4"/> {SITE.phone}
            </a>
            <a href={waLink()} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-brand-yellow text-brand-navy px-6 py-3 font-bold hover:bg-white transition">
              <MessageCircle className="h-4 w-4"/> Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
