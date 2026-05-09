import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "./tentang";
import { articles } from "@/lib/data";
import { Reveal } from "@/components/site/Reveal";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/artikel")({
  head: () => ({
    meta: [
      { title: "Artikel Hukum — Eka Saputra & Asociates" },
      { name: "description", content: "Artikel dan wawasan hukum terkini dari tim Kantor Hukum Eka Saputra & Asociates." },
    ],
  }),
  component: ArticlesPage,
});

function ArticlesPage() {
  return (
    <>
      <PageHero
        eyebrow="Artikel Hukum"
        title="Wawasan Hukum untuk Masyarakat"
        description="Pemikiran, analisis, dan panduan hukum praktis dari para profesional kami."
      />
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-5 lg:px-8 grid gap-6 md:grid-cols-2">
          {articles.map((a, i) => (
            <Reveal key={a.title} delay={i * 80}>
              <article className="group glass rounded-2xl p-8 h-full flex flex-col hover:border-gold/40 hover:-translate-y-1 transition-all duration-500">
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="text-gold uppercase tracking-[0.2em]">{a.category}</span>
                  <span>•</span>
                  <span>{a.date}</span>
                </div>
                <h3 className="mt-4 font-display text-2xl leading-snug group-hover:text-gold transition-colors">
                  {a.title}
                </h3>
                <p className="mt-3 text-muted-foreground leading-relaxed flex-1">{a.excerpt}</p>
                <a href="#" className="mt-6 inline-flex items-center gap-2 text-sm text-gold">
                  Baca Selengkapnya <ArrowRight className="h-4 w-4" />
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
