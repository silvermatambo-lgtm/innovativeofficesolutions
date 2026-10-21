import { useEffect, useState } from "react";
import { Download, X } from "lucide-react";
import { Logo } from "./Logo";

type BIPE = Event & { prompt: () => Promise<void>; userChoice: Promise<{ outcome: string }> };

export function PWAInstall() {
  const [deferred, setDeferred] = useState<BIPE | null>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const h = (e: Event) => {
      e.preventDefault();
      setDeferred(e as BIPE);
      setTimeout(() => {
        if (!sessionStorage.getItem("ioc-pwa-dismissed")) setShow(true);
      }, 8000);
    };
    window.addEventListener("beforeinstallprompt", h);
    return () => window.removeEventListener("beforeinstallprompt", h);
  }, []);

  if (!show) return null;
  const close = () => { setShow(false); sessionStorage.setItem("ioc-pwa-dismissed", "1"); };
  const install = async () => {
    if (!deferred) return close();
    await deferred.prompt();
    await deferred.userChoice;
    close();
  };

  return (
    <div className="fixed inset-x-3 bottom-24 lg:bottom-6 lg:left-auto lg:right-6 lg:max-w-sm z-50 animate-fade-up">
      <div className="rounded-2xl bg-background border shadow-2xl p-4 flex gap-3 items-center">
        <div className="bg-white rounded-xl p-1.5 border">
          <Logo className="h-10 w-auto" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-bold text-sm">Install IOC App</p>
          <p className="text-xs text-muted-foreground">Get fast, app-like access on your device.</p>
        </div>
        <button onClick={install} className="inline-flex items-center gap-1 rounded-full bg-brand-green text-white px-3 py-2 text-xs font-semibold">
          <Download className="h-4 w-4"/> Install
        </button>
        <button onClick={close} aria-label="Dismiss" className="text-muted-foreground"><X className="h-4 w-4"/></button>
      </div>
    </div>
  );
}
