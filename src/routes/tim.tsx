import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "./tentang";
import { team, paralegals } from "@/lib/data";
import { Reveal } from "@/components/site/Reveal";
import { Mail, Linkedin } from "lucide-react";
import lawyer1 from "@/assets/lawyer-1.jpg";
import lawyer2 from "@/assets/lawyer-2.jpg";
import dersalImg from "@/assets/paralegal-dersal.jpg";

const lawyerImgs = [lawyer1, lawyer2];
const paralegalImgs = [dersalImg];

export const Route = createFileRoute("/tim")({
  head: () => ({
    meta: [
      { title: "Tim Pengacara — Eka Saputra & Associates" },
      { name: "description", content: "Profil pengacara dan paralegal Kantor Hukum Eka Saputra S.H & Associates." },
    ],
  }),
  component: TeamPage,
});

type Member = { name: string; role: string; bio: string };

function MemberCard({ m, img, i }: { m: Member; img: string; i: number }) {
  return (
    <Reveal delay={i * 100}>
      <div className="group">
        <div className="relative overflow-hidden rounded-2xl aspect-[3/4] glass">
          <img src={img} alt={m.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/30 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-6">
            <p className="text-xs uppercase tracking-[0.3em] text-gold">{m.role}</p>
            <h3 className="mt-2 font-display text-2xl">{m.name}</h3>
          </div>
          <div className="absolute inset-0 ring-1 ring-inset ring-gold/0 group-hover:ring-gold/40 rounded-2xl transition-all" />
        </div>
        <p className="mt-5 text-sm text-muted-foreground leading-relaxed">{m.bio}</p>
        <div className="mt-4 flex gap-3">
          <a href="#" className="h-9 w-9 grid place-items-center rounded-full glass hover:bg-gradient-gold hover:text-primary-foreground transition-all"><Mail className="h-4 w-4" /></a>
          <a href="#" className="h-9 w-9 grid place-items-center rounded-full glass hover:bg-gradient-gold hover:text-primary-foreground transition-all"><Linkedin className="h-4 w-4" /></a>
        </div>
      </div>
    </Reveal>
  );
}

function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Tim Kami"
        title="Profesional Hukum di Balik Setiap Keberhasilan"
        description="Komposisi tim yang menggabungkan pengalaman, keahlian, dan dedikasi untuk klien."
      />
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <div className="mb-12 text-center">
              <p className="text-xs uppercase tracking-[0.4em] text-gold">Tim Pengacara</p>
              <h2 className="mt-3 font-display text-3xl lg:text-4xl">Advokat Kami</h2>
            </div>
          </Reveal>
          <div className="grid gap-10 sm:grid-cols-2 max-w-4xl mx-auto">
            {team.map((t, i) => (
              <MemberCard key={t.name} m={t} img={lawyerImgs[i]} i={i} />
            ))}
          </div>
        </div>
      </section>
      <section className="pb-24 lg:pb-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <div className="mb-12 text-center">
              <p className="text-xs uppercase tracking-[0.4em] text-gold">Tim Paralegal</p>
              <h2 className="mt-3 font-display text-3xl lg:text-4xl">Paralegal Kami</h2>
            </div>
          </Reveal>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-2xl mx-auto">
            {paralegals.map((p, i) => (
              <MemberCard key={p.name} m={p} img={paralegalImgs[i]} i={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
