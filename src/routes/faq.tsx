import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Plus } from "lucide-react";
import { SITE } from "@/lib/site";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: `FAQ | ${SITE.name}` },
      { name: "description", content: `Frequently asked questions about Innovative Office Co — delivery, quotes, payment, installation and more.` },
      { property: "og:title", content: `FAQ | ${SITE.name}` },
      { property: "og:description", content: "Answers to common questions." },
    ],
  }),
  component: FAQ,
});

const QA = [
  { q: "What areas do you supply?", a: "We supply nationwide across all 9 provinces of South Africa. Delivery times depend on location and product availability." },
  { q: "How do I get a quote?", a: "Use the contact form, WhatsApp us on 078 207 2929, or email sales@innovativeoffice.co.za. Quotes are typically returned within 24 hours." },
  { q: "Do you offer installation?", a: "Yes — for furniture, ICT, security systems and steel infrastructure, we provide professional installation services." },
  { q: "Can you do custom steel fabrication?", a: "Absolutely. We manufacture custom CCTV poles, brackets, pedestals, equipment cabinets and reader housings to your specification." },
  { q: "Do you supply schools and government?", a: "Yes — we service schools, government departments, NGOs, healthcare and corporates with vetted procurement processes." },
  { q: "What payment terms do you offer?", a: "Standard EFT, business credit terms (subject to approval) and project-based milestone billing for larger contracts." },
  { q: "Do you provide ongoing support?", a: "Yes — we offer technical support, maintenance plans and managed services for ICT, security and printing." },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <>
      <section className="bg-brand-navy text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-90"/>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs uppercase tracking-widest font-bold text-brand-yellow">FAQ</p>
          <h1 className="mt-3 font-display text-4xl sm:text-5xl font-extrabold">Frequently Asked Questions</h1>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 grid gap-3">
          {QA.map((item, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={i} delay={i * 50}>
                <div className="rounded-2xl border bg-card overflow-hidden shadow-soft">
                  <button onClick={() => setOpen(isOpen ? null : i)} className="w-full flex items-center justify-between gap-4 p-5 text-left">
                    <span className="font-display font-bold">{item.q}</span>
                    <span className={`h-8 w-8 rounded-full bg-brand-green/10 text-brand-green flex items-center justify-center transition-transform ${isOpen ? "rotate-45" : ""}`}>
                      <Plus className="h-4 w-4"/>
                    </span>
                  </button>
                  <div className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 text-muted-foreground text-sm leading-relaxed">{item.a}</p>
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
