import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "./tentang";
import { services } from "@/lib/data";
import { Reveal } from "@/components/site/Reveal";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/layanan")({
  head: () => ({
    meta: [
      { title: "Layanan Hukum — Eka Saputra & Associates" },
      { name: "description", content: "Layanan hukum lengkap: perdata, pidana, sengketa tanah, waris, mediasi, litigasi, dan konsultasi." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Layanan Hukum"
        title="Layanan Hukum Komprehensif untuk Setiap Kebutuhan"
        description="Setiap layanan dirancang dengan pendekatan strategis dan personal untuk hasil optimal."
      />
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 70}>
              <div className="group h-full glass rounded-2xl p-8 hover:border-gold/40 hover:-translate-y-1 hover:shadow-gold transition-all duration-500">
                <div className="inline-grid place-items-center h-14 w-14 rounded-xl bg-gradient-gold text-primary-foreground shadow-gold">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 font-display text-2xl">{s.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                <Link to="/kontak" className="mt-6 inline-flex items-center gap-2 text-gold text-sm">
                  Konsultasi Layanan <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
