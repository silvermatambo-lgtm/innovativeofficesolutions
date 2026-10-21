import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Phone, Mail, MapPin, MessageCircle, CheckCircle2, Send, Loader2 } from "lucide-react";
import { SITE, SERVICES, waLink } from "@/lib/site";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: `Contact | ${SITE.name}` },
      { name: "description", content: `Contact ${SITE.name} — call ${SITE.phone}, email ${SITE.email}, or visit ${SITE.address}.` },
      { property: "og:title", content: `Contact ${SITE.name}` },
      { property: "og:description", content: "Get a tailored quote within 24 hours." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState<{ name: string; phone: string; email: string; service: string; message: string }>({ name: "", phone: "", email: "", service: SERVICES[0].title, message: "" });

  const submit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
      const text = `New Quote Request\nName: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nService: ${form.service}\nMessage: ${form.message}`;
      window.open(`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`, "_blank");
    }, 900);
  };

  return (
    <>
      <section className="bg-brand-navy text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-90"/>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs uppercase tracking-widest font-bold text-brand-yellow">Contact Us</p>
          <h1 className="mt-3 font-display text-4xl sm:text-5xl font-extrabold">Let's Talk Solutions</h1>
          <p className="mt-3 text-white/85 max-w-xl mx-auto">Send a quote request and our team will respond within 24 hours.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-5 gap-8">
          <Reveal className="lg:col-span-2">
            <div className="rounded-2xl bg-gradient-brand text-white p-7 shadow-soft">
              <h2 className="font-display text-2xl font-bold">Get in touch</h2>
              <p className="mt-2 text-white/85 text-sm">{SITE.contactPerson.name} • {SITE.contactPerson.title}</p>

              <ul className="mt-6 grid gap-4 text-sm">
                <li className="flex gap-3"><span className="h-9 w-9 rounded-lg bg-white/15 inline-flex items-center justify-center"><Phone className="h-4 w-4"/></span>
                  <div><p className="text-white/70 text-xs">Phone</p><a href={`tel:${SITE.phoneIntl}`} className="font-semibold">{SITE.phone}</a></div>
                </li>
                <li className="flex gap-3"><span className="h-9 w-9 rounded-lg bg-white/15 inline-flex items-center justify-center"><Mail className="h-4 w-4"/></span>
                  <div className="min-w-0"><p className="text-white/70 text-xs">Email</p><a href={`mailto:${SITE.email}`} className="font-semibold break-all">{SITE.email}</a></div>
                </li>
                <li className="flex gap-3"><span className="h-9 w-9 rounded-lg bg-white/15 inline-flex items-center justify-center"><MapPin className="h-4 w-4"/></span>
                  <div><p className="text-white/70 text-xs">Visit</p><p className="font-semibold">{SITE.address}</p></div>
                </li>
              </ul>

              <a href={waLink()} target="_blank" rel="noreferrer"
                 className="mt-6 inline-flex w-full justify-center items-center gap-2 rounded-full bg-whatsapp text-white py-3 font-semibold hover:opacity-90 transition">
                <MessageCircle className="h-4 w-4"/> Chat on WhatsApp
              </a>
            </div>
          </Reveal>

          <Reveal delay={150} className="lg:col-span-3">
            <form onSubmit={submit} className="rounded-2xl bg-card border p-7 shadow-soft">
              <h2 className="font-display text-2xl font-bold">Request a Quote</h2>
              <p className="text-sm text-muted-foreground mt-1">Fill in your details — we'll get back to you fast.</p>

              {sent ? (
                <div className="mt-8 text-center py-10">
                  <div className="mx-auto h-16 w-16 rounded-full bg-brand-green text-white flex items-center justify-center animate-fade-up">
                    <CheckCircle2 className="h-8 w-8"/>
                  </div>
                  <h3 className="mt-4 font-display text-xl font-bold">Thank you, {form.name || "friend"}!</h3>
                  <p className="mt-2 text-sm text-muted-foreground">Your request was forwarded to WhatsApp. Our team will reply shortly.</p>
                  <button type="button" onClick={() => { setSent(false); setForm({ name: "", phone: "", email: "", service: SERVICES[0].title, message: "" }); }}
                          className="mt-5 rounded-full bg-brand-green text-white px-5 py-2 font-semibold">
                    Send another
                  </button>
                </div>
              ) : (
                <div className="mt-6 grid gap-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field label="Full Name" value={form.name} onChange={(v)=>setForm({...form, name: v})} required/>
                    <Field label="Phone Number" type="tel" value={form.phone} onChange={(v)=>setForm({...form, phone: v})} required/>
                  </div>
                  <Field label="Email" type="email" value={form.email} onChange={(v)=>setForm({...form, email: v})} required/>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1.5">Service</label>
                    <select value={form.service} onChange={(e)=>setForm({...form, service: e.target.value})}
                            className="w-full rounded-xl border-2 border-input bg-background px-4 py-3 text-sm focus:border-brand-green outline-none transition">
                      {SERVICES.map((s) => <option key={s.slug}>{s.title}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1.5">Message</label>
                    <textarea rows={4} value={form.message} onChange={(e)=>setForm({...form, message: e.target.value})}
                              className="w-full rounded-xl border-2 border-input bg-background px-4 py-3 text-sm focus:border-brand-green outline-none transition"/>
                  </div>
                  <button disabled={loading} className="inline-flex justify-center items-center gap-2 rounded-xl bg-gradient-brand text-white py-3.5 font-semibold shadow-soft hover:opacity-95 transition disabled:opacity-60">
                    {loading ? <><Loader2 className="h-4 w-4 animate-spin"/> Sending…</> : <><Send className="h-4 w-4"/> Send Request</>}
                  </button>
                </div>
              )}
            </form>
          </Reveal>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="rounded-2xl overflow-hidden border shadow-soft aspect-[16/9]">
              <iframe
                title="IOC Office Location"
                src={SITE.mapsEmbed}
                className="w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <p className="mt-3 text-center text-sm text-muted-foreground">
              <a href={SITE.mapsLink} target="_blank" rel="noreferrer" className="text-brand-green font-semibold hover:underline">Open in Google Maps →</a>
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Field({ label, value, onChange, type = "text", required }: { label: string; value: string; onChange: (v: string) => void; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1.5">{label}</label>
      <input type={type} required={required} value={value} onChange={(e) => onChange(e.target.value)}
             className="w-full rounded-xl border-2 border-input bg-background px-4 py-3 text-sm focus:border-brand-green outline-none transition"/>
    </div>
  );
}
