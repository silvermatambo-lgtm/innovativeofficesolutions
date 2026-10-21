import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { Logo } from "./Logo";
import { SITE, waLink } from "@/lib/site";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/industries", label: "Industries" },
  { to: "/gallery", label: "Gallery" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled || open ? "bg-background/90 backdrop-blur-md shadow-soft" : "bg-transparent"
      }`}
    >
      <div className="brand-bar !rounded-none !h-[3px]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 lg:h-20">
        <Link to="/" className="flex items-center gap-2">
          <Logo className="h-10 lg:h-12 w-auto" />
        </Link>
        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((n) => {
            const active = pathname === n.to;
            return (
              <Link
                key={n.to}
                to={n.to}
                className={`px-3 py-2 rounded-md text-sm font-semibold transition-colors ${
                  active ? "text-brand-green" : "text-foreground/80 hover:text-brand-green"
                }`}
              >
                {n.label}
              </Link>
            );
          })}
        </nav>
        <div className="hidden lg:flex items-center gap-2">
          <a href={`tel:${SITE.phoneIntl}`} className="inline-flex items-center gap-2 rounded-full border px-3 py-2 text-sm font-semibold hover:bg-secondary transition">
            <Phone className="h-4 w-4" /> {SITE.phone}
          </a>
          <a href={waLink()} target="_blank" rel="noreferrer"
             className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-white bg-whatsapp hover:opacity-90 shadow-soft transition">
            <MessageCircle className="h-4 w-4" /> WhatsApp
          </a>
        </div>
        <button onClick={() => setOpen((v) => !v)} aria-label="Toggle menu"
                className="lg:hidden inline-flex items-center justify-center h-10 w-10 rounded-md bg-background/80 border">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile slide-in menu */}
      <div className={`lg:hidden fixed inset-0 z-40 transition ${open ? "pointer-events-auto" : "pointer-events-none"}`}>
        <div className={`absolute inset-0 bg-brand-navy/60 transition-opacity ${open ? "opacity-100" : "opacity-0"}`}
             onClick={() => setOpen(false)} />
        <aside className={`absolute right-0 top-0 h-full w-[82%] max-w-sm bg-background shadow-2xl transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"}`}>
          <div className="brand-bar !rounded-none !h-[3px]" />
          <div className="flex items-center justify-between p-4 border-b">
            <Logo className="h-9 w-auto" />
            <button onClick={() => setOpen(false)} aria-label="Close" className="h-9 w-9 inline-flex items-center justify-center rounded-md border">
              <X className="h-4 w-4" />
            </button>
          </div>
          <nav className="p-4 grid gap-1">
            {NAV.map((n) => (
              <Link key={n.to} to={n.to}
                    className="px-4 py-3 rounded-lg text-base font-semibold hover:bg-secondary [&.active]:bg-secondary [&.active]:text-brand-green"
                    activeProps={{ className: "active" }}>
                {n.label}
              </Link>
            ))}
          </nav>
          <div className="p-4 grid gap-2 border-t mt-2">
            <a href={`tel:${SITE.phoneIntl}`} className="inline-flex justify-center items-center gap-2 rounded-full bg-brand-green text-white py-3 font-semibold">
              <Phone className="h-4 w-4" /> Call {SITE.phone}
            </a>
            <a href={waLink()} target="_blank" rel="noreferrer"
               className="inline-flex justify-center items-center gap-2 rounded-full bg-whatsapp text-white py-3 font-semibold">
              <MessageCircle className="h-4 w-4" /> WhatsApp Us
            </a>
          </div>
        </aside>
      </div>
    </header>
  );
}
