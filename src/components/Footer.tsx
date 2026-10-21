import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, MessageCircle, Facebook, Instagram, Linkedin } from "lucide-react";
import { Logo } from "./Logo";
import { SITE, waLink, SERVICES } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-24 bg-brand-navy text-white">
      <div className="brand-bar !rounded-none !h-[4px]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 grid gap-10 lg:grid-cols-4">
        <div>
          <div className="bg-white rounded-xl p-3 inline-block">
            <Logo className="h-12 w-auto" />
          </div>
          <p className="mt-4 text-sm text-white/75 leading-relaxed">
            {SITE.sub}. South Africa's single-source procurement partner for office,
            ICT, security and steel infrastructure.
          </p>
          <p className="mt-4 font-display text-brand-yellow font-bold">"{SITE.tagline}"</p>
          <div className="flex items-center gap-3 mt-5">
            {[Facebook, Instagram, Linkedin].map((I, i) => (
              <a key={i} href="#" aria-label="social" className="h-9 w-9 inline-flex items-center justify-center rounded-full bg-white/10 hover:bg-brand-green transition">
                <I className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-bold mb-4 text-white">Quick Links</h4>
          <ul className="grid gap-2 text-sm text-white/75">
            {[["/", "Home"], ["/about", "About Us"], ["/services", "Services"], ["/industries", "Industries"], ["/gallery", "Gallery"], ["/faq", "FAQ"], ["/contact", "Contact"]].map(([to, l]) => (
              <li key={to}><Link to={to} className="hover:text-brand-yellow transition">{l}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4 text-white">Our Solutions</h4>
          <ul className="grid gap-2 text-sm text-white/75">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link to="/services" hash={s.slug} className="hover:text-brand-yellow transition">{s.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4 text-white">Get In Touch</h4>
          <ul className="grid gap-3 text-sm text-white/80">
            <li className="flex gap-3"><Phone className="h-4 w-4 mt-0.5 text-brand-yellow"/><a href={`tel:${SITE.phoneIntl}`}>{SITE.phone}</a></li>
            <li className="flex gap-3"><Mail className="h-4 w-4 mt-0.5 text-brand-yellow"/><a href={`mailto:${SITE.email}`} className="break-all">{SITE.email}</a></li>
            <li className="flex gap-3"><MapPin className="h-4 w-4 mt-0.5 text-brand-yellow"/><span>{SITE.address}</span></li>
          </ul>
          <a href={waLink()} target="_blank" rel="noreferrer"
             className="mt-4 inline-flex items-center gap-2 rounded-full bg-whatsapp text-white px-4 py-2 text-sm font-semibold hover:opacity-90 transition">
            <MessageCircle className="h-4 w-4" /> Quick WhatsApp
          </a>
          <div className="mt-5 rounded-xl overflow-hidden border border-white/10 aspect-video">
            <iframe
              title="IOC Location"
              src={SITE.mapsEmbed}
              className="w-full h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/70">
          <p>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
          <p>
            Website designed by{" "}
            <a href={SITE.credit.url} target="_blank" rel="noreferrer" className="text-brand-yellow font-semibold hover:underline">
              {SITE.credit.label}
            </a>{" "}
            <a href={`tel:${SITE.credit.phone}`} className="text-brand-yellow font-semibold hover:underline">{SITE.credit.phone}</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
