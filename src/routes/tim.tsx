import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "./tentang";
import { team } from "@/lib/data";
import { Reveal } from "@/components/site/Reveal";
import { Mail, Linkedin } from "lucide-react";
import lawyer1 from "@/assets/lawyer-1.jpg";
import lawyer2 from "@/assets/lawyer-2.jpg";
import lawyer3 from "@/assets/lawyer-3.jpg";

const imgs = [lawyer1, lawyer2, lawyer3];

export const Route = createFileRoute("/tim")({
  head: () => ({
    meta: [
      { title: "Tim Pengacara — Eka Saputra & Associates" },
      { name: "description", content: "Profil pengacara berpengalaman dari Kantor Hukum Eka Saputra S.H & Associates." },
    ],
  }),
  component: TeamPage,
});

function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Tim Pengacara"
        title="Profesional Hukum di Balik Setiap Keberhasilan"
        description="Komposisi tim yang menggabungkan pengalaman, keahlian, dan dedikasi untuk klien."
      />
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((t, i) => (
            <Reveal key={t.name} delay={i * 100}>
              <div className="group">
                <div className="relative overflow-hidden rounded-2xl aspect-[3/4] glass">
                  <img src={imgs[i]} alt={t.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/30 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <p className="text-xs uppercase tracking-[0.3em] text-gold">{t.role}</p>
                    <h3 className="mt-2 font-display text-2xl">{t.name}</h3>
                  </div>
                  <div className="absolute inset-0 ring-1 ring-inset ring-gold/0 group-hover:ring-gold/40 rounded-2xl transition-all" />
                </div>
                <p className="mt-5 text-sm text-muted-foreground leading-relaxed">{t.bio}</p>
                <div className="mt-4 flex gap-3">
                  <a href="#" className="h-9 w-9 grid place-items-center rounded-full glass hover:bg-gradient-gold hover:text-primary-foreground transition-all"><Mail className="h-4 w-4" /></a>
                  <a href="#" className="h-9 w-9 grid place-items-center rounded-full glass hover:bg-gradient-gold hover:text-primary-foreground transition-all"><Linkedin className="h-4 w-4" /></a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
