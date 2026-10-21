export function Logo({ className = "h-10", variant = "full" }: { className?: string; variant?: "full" | "mark" }) {
  if (variant === "mark") {
    return <img src="/favicon.svg" alt="Innovative Office Co" className={className} width={64} height={64} />;
  }
  return <img src="/ioc-logo.svg" alt="Innovative Office Co" className={className} width={540} height={135} />;
}
