import { MessageCircle } from "lucide-react";

export function WhatsAppFab() {
  return (
    <a
      href="https://wa.me/6282289775235?text=Halo%20saya%20ingin%20konsultasi%20hukum"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-40 group"
      aria-label="WhatsApp"
    >
      <span className="absolute inset-0 rounded-full bg-gold/40 animate-ping" />
      <span className="relative grid place-items-center h-14 w-14 rounded-full bg-gradient-gold text-primary-foreground shadow-gold transition-transform group-hover:scale-110">
        <MessageCircle className="h-6 w-6" />
      </span>
    </a>
  );
}
