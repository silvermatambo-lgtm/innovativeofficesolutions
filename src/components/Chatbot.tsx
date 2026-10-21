import { useEffect, useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { SITE, SERVICES, waLink } from "@/lib/site";

export function Chatbot() {
  const [open, setOpen] = useState(false);
  const [popup, setPopup] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState<string>(SERVICES[0].title);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    const t = setTimeout(() => setPopup(true), 6000);
    return () => clearTimeout(t);
  }, []);

  const send = () => {
    const text = `Hi IOC! 👋\nName: ${name}\nPhone: ${phone}\nService: ${service}\nMessage: ${msg}`;
    window.open(`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <>
      {/* welcome popup */}
      {popup && !open && (
        <div className="fixed bottom-24 lg:bottom-28 right-4 z-40 max-w-xs animate-fade-up">
          <div className="bg-background border shadow-soft rounded-2xl p-4">
            <div className="flex justify-between items-start gap-3">
              <div>
                <p className="font-bold text-sm">👋 Hi from IOC!</p>
                <p className="text-xs text-muted-foreground mt-1">Need a quote? Chat with our team on WhatsApp.</p>
              </div>
              <button onClick={() => setPopup(false)} className="text-muted-foreground"><X className="h-4 w-4"/></button>
            </div>
            <button onClick={() => { setOpen(true); setPopup(false); }}
                    className="mt-3 w-full rounded-full bg-whatsapp text-white py-2 text-sm font-semibold">
              Start Chat
            </button>
          </div>
        </div>
      )}

      {/* floating button */}
      <button onClick={() => setOpen((v) => !v)} aria-label="Chat"
              className="fixed bottom-20 lg:bottom-6 right-4 z-50 h-14 w-14 rounded-full bg-whatsapp text-white shadow-glow flex items-center justify-center hover:scale-105 transition animate-float">
        {open ? <X className="h-6 w-6"/> : <MessageCircle className="h-6 w-6"/>}
      </button>

      {open && (
        <div className="fixed bottom-36 lg:bottom-24 right-4 z-50 w-[92vw] max-w-sm bg-background border rounded-2xl shadow-2xl overflow-hidden animate-fade-up">
          <div className="bg-gradient-brand text-white p-4">
            <p className="font-display font-bold">IOC Assistant</p>
            <p className="text-xs text-white/80">We typically reply in minutes</p>
          </div>
          <div className="p-4 grid gap-2">
            <input value={name} onChange={(e)=>setName(e.target.value)} placeholder="Your name"
                   className="w-full rounded-lg border px-3 py-2 text-sm" />
            <input value={phone} onChange={(e)=>setPhone(e.target.value)} placeholder="Phone number"
                   className="w-full rounded-lg border px-3 py-2 text-sm" />
            <select value={service} onChange={(e)=>setService(e.target.value)}
                    className="w-full rounded-lg border px-3 py-2 text-sm bg-background">
              {SERVICES.map((s) => <option key={s.slug}>{s.title}</option>)}
            </select>
            <textarea value={msg} onChange={(e)=>setMsg(e.target.value)} placeholder="How can we help?" rows={2}
                      className="w-full rounded-lg border px-3 py-2 text-sm" />
            <div className="flex flex-wrap gap-1.5 my-1">
              {["Request a quote","Book a visit","Pricing info"].map((q) => (
                <button key={q} onClick={()=>setMsg(q)} className="text-xs rounded-full bg-secondary px-3 py-1 hover:bg-brand-green hover:text-white transition">{q}</button>
              ))}
            </div>
            <button onClick={send} disabled={!name || !phone}
                    className="inline-flex justify-center items-center gap-2 rounded-full bg-whatsapp text-white py-2.5 font-semibold disabled:opacity-50">
              <Send className="h-4 w-4"/> Send via WhatsApp
            </button>
            <a href={waLink()} target="_blank" rel="noreferrer" className="text-center text-xs text-muted-foreground hover:underline">or open WhatsApp directly</a>
          </div>
        </div>
      )}
    </>
  );
}
