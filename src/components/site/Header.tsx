import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

const nav = [
  { to: "/", label: "Beranda" },
  { to: "/tentang", label: "Tentang Kami" },
  { to: "/tim", label: "Tim Pengacara" },
  { to: "/layanan", label: "Layanan Hukum" },
  { to: "/artikel", label: "Artikel Hukum" },
  { to: "/testimoni", label: "Testimoni" },
  { to: "/kontak", label: "Kontak" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-strong shadow-soft" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8 flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src={logo}
            alt="Eka Saputra & Asociates"
            className="h-12 w-12 object-contain drop-shadow-[0_0_20px_oklch(0.78_0.13_85/0.4)] transition-transform group-hover:scale-105"
            width={48}
            height={48}
          />
          <div className="hidden sm:flex flex-col leading-tight">
            <span className="font-display text-base tracking-wide text-gold-gradient">
              Eka Saputra
            </span>
            <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              S.H & Asociates
            </span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              activeProps={{ className: "text-gold" }}
              className="text-sm font-medium tracking-wide text-foreground/80 hover:text-gold transition-colors relative after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-gold hover:after:w-full after:transition-all after:duration-300"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/kontak"
            className="hidden md:inline-flex items-center gap-2 bg-gradient-gold text-primary-foreground px-5 py-2.5 rounded-full text-sm font-semibold tracking-wide shadow-gold hover:scale-[1.03] transition-transform"
          >
            <Phone className="h-4 w-4" />
            Konsultasi Sekarang
          </Link>
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 text-foreground"
            aria-label="Menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden glass-strong border-t border-border animate-fade-in">
          <div className="px-5 py-6 flex flex-col gap-4">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                activeProps={{ className: "text-gold" }}
                className="text-base text-foreground/90 hover:text-gold"
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/kontak"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 bg-gradient-gold text-primary-foreground px-5 py-3 rounded-full text-sm font-semibold"
            >
              <Phone className="h-4 w-4" /> Konsultasi Sekarang
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
