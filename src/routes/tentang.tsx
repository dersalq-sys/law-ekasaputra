import { createFileRoute } from "@tanstack/react-router";
import { SectionHeader } from "@/components/site/SectionHeader";
import { Reveal } from "@/components/site/Reveal";
import aboutImg from "@/assets/about.jpg";
import { Target, Eye, HeartHandshake } from "lucide-react";

export const Route = createFileRoute("/tentang")({
  head: () => ({
    meta: [
      { title: "Tentang Kami — Eka Saputra & Asociates" },
      { name: "description", content: "Mengenal lebih dekat firma hukum Eka Saputra S.H & Asociates — visi, misi, dan komitmen kami." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Tentang Kami"
        title="Mendedikasikan Diri pada Keadilan & Kepercayaan"
        description="Lebih dari sekadar firma hukum — kami adalah mitra strategis yang menjaga hak dan kepentingan klien."
      />

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 grid lg:grid-cols-2 gap-14 items-center">
          <Reveal>
            <img src={aboutImg} alt="Tentang firma" className="rounded-2xl shadow-soft w-full aspect-[4/3] object-cover" loading="lazy" />
          </Reveal>
          <Reveal delay={120}>
            <h2 className="font-display text-3xl md:text-4xl">Sejarah Singkat</h2>
            <div className="mt-3 h-px w-20 bg-gradient-gold" />
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Kantor Hukum Eka Saputra S.H & Asociates didirikan dengan landasan
              komitmen untuk memberikan pelayanan hukum yang berkualitas tinggi
              kepada masyarakat. Berbasis di Pasaman Barat, kami melayani klien
              dari berbagai daerah dengan jangkauan praktik nasional.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Selama lebih dari satu dekade, kami berhasil membangun reputasi
              sebagai firma hukum yang dapat dipercaya — menjunjung tinggi etika
              profesi serta selalu mengutamakan kepentingan terbaik klien.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-gradient-navy border-y border-border">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeader eyebrow="Filosofi Kami" title="Visi, Misi, & Nilai" />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              { icon: Eye, title: "Visi", text: "Menjadi firma hukum terdepan yang dipercaya masyarakat dengan standar layanan kelas internasional." },
              { icon: Target, title: "Misi", text: "Memberikan solusi hukum strategis, transparan, dan berorientasi hasil bagi setiap klien." },
              { icon: HeartHandshake, title: "Nilai", text: "Integritas, profesionalisme, empati, dan keberpihakan pada keadilan." },
            ].map((c, i) => (
              <Reveal key={c.title} delay={i * 100}>
                <div className="glass rounded-2xl p-8 h-full hover:border-gold/40 transition-all">
                  <div className="inline-grid place-items-center h-14 w-14 rounded-xl bg-gradient-gold text-primary-foreground shadow-gold">
                    <c.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-display text-2xl">{c.title}</h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed">{c.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export function PageHero({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden border-b border-border bg-gradient-navy">
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-gold/10 blur-[120px]" />
      <div className="mx-auto max-w-4xl px-5 lg:px-8 text-center relative">
        <p className="text-[11px] uppercase tracking-[0.4em] text-gold mb-5 animate-fade-up">{eyebrow}</p>
        <h1 className="animate-fade-up delay-100 font-display text-4xl md:text-6xl leading-tight">{title}</h1>
        {description && (
          <p className="animate-fade-up delay-200 mt-6 text-muted-foreground text-lg">{description}</p>
        )}
        <div className="animate-fade-up delay-300 mt-8 mx-auto h-px w-24 bg-gradient-gold" />
      </div>
    </section>
  );
}
