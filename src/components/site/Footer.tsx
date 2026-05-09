import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin } from "lucide-react";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="relative bg-gradient-navy border-t border-border mt-24">
      <div className="absolute inset-x-0 -top-px gold-divider" />
      <div className="mx-auto max-w-7xl px-5 lg:px-8 py-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <img src={logo} alt="Logo" className="h-12 w-12" width={48} height={48} loading="lazy" />
            <div>
              <p className="font-display text-lg text-gold-gradient">Eka Saputra</p>
              <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                S.H & Asociates
              </p>
            </div>
          </div>
          <p className="mt-5 text-sm text-muted-foreground leading-relaxed">
            Firma hukum berdedikasi tinggi dengan komitmen memberikan pelayanan hukum
            yang berintegritas, profesional, dan terpercaya.
          </p>
          <div className="flex items-center gap-3 mt-6">
            {[Facebook, Instagram, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="h-9 w-9 grid place-items-center rounded-full glass hover:bg-gradient-gold hover:text-primary-foreground transition-all"
                aria-label="social"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display text-lg text-gold mb-4">Navigasi</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {[
              ["/", "Beranda"],
              ["/tentang", "Tentang Kami"],
              ["/tim", "Tim Pengacara"],
              ["/layanan", "Layanan Hukum"],
              ["/artikel", "Artikel Hukum"],
              ["/kontak", "Kontak"],
            ].map(([to, label]) => (
              <li key={to}>
                <Link to={to} className="hover:text-gold transition-colors">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg text-gold mb-4">Kontak</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-3">
              <MapPin className="h-4 w-4 text-gold shrink-0 mt-0.5" />
              <span>
                Jorong Batang Lingkin, Nagari Aia Gadang Barat, Kecamatan Pasaman,
                Kabupaten Pasaman Barat
              </span>
            </li>
            <li className="flex gap-3">
              <Phone className="h-4 w-4 text-gold shrink-0 mt-0.5" />
              <div className="space-y-1">
                <a href="https://wa.me/6282289775235" className="block hover:text-gold">
                  Eka Saputra, S.H. — 0822-8977-5235
                </a>
                <a href="https://wa.me/6283174938353" className="block hover:text-gold">
                  Dersal — 0831-7493-8353
                </a>
              </div>
            </li>
            <li className="flex gap-3">
              <Mail className="h-4 w-4 text-gold shrink-0 mt-0.5" />
              <a href="mailto:info@ekasaputra-law.id" className="hover:text-gold">
                info@ekasaputra-law.id
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg text-gold mb-4">Jam Operasional</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-3">
              <Clock className="h-4 w-4 text-gold shrink-0 mt-0.5" />
              <div>
                <p>Senin – Jumat</p>
                <p className="text-foreground/80">08.00 – 17.00 WIB</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Clock className="h-4 w-4 text-gold shrink-0 mt-0.5" />
              <div>
                <p>Sabtu</p>
                <p className="text-foreground/80">09.00 – 14.00 WIB</p>
              </div>
            </li>
            <li className="text-xs text-muted-foreground/80 pt-2">
              Konsultasi darurat tersedia 24/7 melalui WhatsApp.
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border/60">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Kantor Hukum Eka Saputra S.H & Asociates. All rights reserved.</p>
          <p className="tracking-widest uppercase">Integritas · Profesionalisme · Keadilan</p>
        </div>
      </div>
    </footer>
  );
}
