import { Link, useRouterState } from "@tanstack/react-router";
import { Home, Wrench, Images, Phone } from "lucide-react";

const ITEMS = [
  { to: "/", label: "Home", Icon: Home },
  { to: "/services", label: "Services", Icon: Wrench },
  { to: "/gallery", label: "Gallery", Icon: Images },
  { to: "/contact", label: "Contact", Icon: Phone },
] as const;

export function MobileBottomNav() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return (
    <nav className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-background/95 backdrop-blur border-t shadow-[0_-8px_24px_-12px_rgba(0,0,0,.15)] pb-[env(safe-area-inset-bottom)]">
      <ul className="grid grid-cols-4">
        {ITEMS.map(({ to, label, Icon }) => {
          const active = pathname === to;
          return (
            <li key={to}>
              <Link to={to} className={`flex flex-col items-center justify-center gap-1 py-2.5 text-[11px] font-semibold transition-colors ${
                active ? "text-brand-green" : "text-muted-foreground"
              }`}>
                <span className={`h-9 w-9 inline-flex items-center justify-center rounded-full transition ${
                  active ? "bg-brand-green/10" : ""
                }`}>
                  <Icon className="h-5 w-5" />
                </span>
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
