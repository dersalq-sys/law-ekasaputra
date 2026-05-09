import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "./tentang";
import { testimonials } from "@/lib/data";
import { Reveal } from "@/components/site/Reveal";
import { Quote, Star } from "lucide-react";

export const Route = createFileRoute("/testimoni")({
  head: () => ({
    meta: [
      { title: "Testimoni — Eka Saputra & Asociates" },
      { name: "description", content: "Testimoni klien yang telah mempercayakan permasalahan hukum kepada kami." },
    ],
  }),
  component: TestimoniPage,
});

function TestimoniPage() {
  return (
    <>
      <PageHero
        eyebrow="Testimoni Klien"
        title="Cerita di Balik Setiap Kepercayaan"
        description="Suara nyata dari klien kami mengenai pengalaman bekerja sama dengan tim hukum kami."
      />
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-5 lg:px-8 grid gap-6 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 80}>
              <div className="glass rounded-2xl p-8 h-full flex flex-col hover:border-gold/40 transition-all">
                <Quote className="h-8 w-8 text-gold" />
                <div className="flex gap-1 mt-3">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <Star key={k} className="h-4 w-4 fill-gold text-gold" />
                  ))}
                </div>
                <p className="mt-5 font-display text-xl leading-relaxed text-foreground/90">"{t.quote}"</p>
                <div className="mt-6 pt-6 border-t border-border">
                  <p className="text-gold font-medium">{t.name}</p>
                  <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mt-1">{t.role}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
