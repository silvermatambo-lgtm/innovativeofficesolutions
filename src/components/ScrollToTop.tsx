import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function ScrollToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  if (!show) return null;
  return (
    <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
      className="fixed bottom-36 lg:bottom-24 left-4 z-40 h-11 w-11 rounded-full bg-brand-navy text-white shadow-soft flex items-center justify-center hover:bg-brand-green transition">
      <ArrowUp className="h-5 w-5"/>
    </button>
  );
}
