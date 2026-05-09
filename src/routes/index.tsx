import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Phone, ShieldCheck, Award, Users, Scale } from "lucide-react";
import heroImg from "@/assets/hero-law.jpg";
import { services, team, articles, testimonials } from "@/lib/data";
import { SectionHeader } from "@/components/site/SectionHeader";
import { Reveal } from "@/components/site/Reveal";
import lawyer1 from "@/assets/lawyer-1.jpg";
import lawyer2 from "@/assets/lawyer-2.jpg";
import lawyer3 from "@/assets/lawyer-3.jpg";
import aboutImg from "@/assets/about.jpg";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Beranda — Kantor Hukum Eka Saputra S.H & Associates" },
      {
        name: "description",
        content:
          "Firma hukum profesional di Pasaman Barat — pendampingan litigasi, perdata, pidana, sengketa tanah, dan waris.",
      },
    ],
  }),
  component: HomePage,
});

const lawyerImgs = [lawyer1, lawyer2, lawyer3];

function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <ServicesPreview />
      <AboutPreview />
      <TeamPreview />
      <TestimonialsSlider />
      <ArticlesPreview />
      <CTABanner />
    </>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img
          src={heroImg}
          alt="Suasana kantor hukum premium"
          className="h-full w-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-[image:var(--gradient-hero)]" />
        <div className="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-gold/15 blur-[120px] animate-float" />
        <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-navy/40 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-5 lg:px-8 py-32 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-8">
          <p className="animate-fade-up text-[11px] uppercase tracking-[0.4em] text-gold mb-6">
            Kantor Hukum Eka Saputra S.H & Associates
          </p>
          <h1 className="animate-fade-up delay-100 font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-foreground">
            Menegakkan{" "}
            <span className="text-gold-gradient italic">Keadilan</span>{" "}
            Dengan Integritas dan Profesionalisme
          </h1>
          <p className="animate-fade-up delay-200 mt-6 max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed">
            Kami hadir memberikan pendampingan hukum yang tegas, terpercaya, dan
            berpengalaman — dari ruang konsultasi hingga ruang sidang.
          </p>
          <div className="animate-fade-up delay-300 mt-9 flex flex-wrap gap-4">
            <Link
              to="/kontak"
              className="group inline-flex items-center gap-2 bg-gradient-gold text-primary-foreground px-7 py-3.5 rounded-full font-semibold tracking-wide shadow-gold hover:scale-[1.03] transition-transform"
            >
              Konsultasi Gratis
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href="https://wa.me/6281234567890"
              className="inline-flex items-center gap-2 glass px-7 py-3.5 rounded-full font-semibold tracking-wide text-foreground hover:border-gold/50 transition-all"
            >
              <Phone className="h-4 w-4 text-gold" />
              Hubungi Kami
            </a>
          </div>
        </div>

        <div className="lg:col-span-4 hidden lg:block">
          <div className="relative animate-fade-in delay-500">
            <div className="glass-strong rounded-2xl p-8 shadow-soft">
              <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Komitmen Kami</p>
              <p className="font-display text-2xl leading-snug">
                "Kepercayaan klien adalah amanah terbesar yang kami jaga dengan dedikasi penuh."
              </p>
              <div className="mt-6 h-px bg-gradient-gold" />
              <p className="mt-4 text-sm text-muted-foreground">
                — Eka Saputra, S.H. <br />
                <span className="text-foreground/70">Founding Partner</span>
              </p>
            </div>
            <div className="absolute -inset-4 -z-10 bg-gold/10 blur-2xl rounded-3xl" />
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.4em] text-muted-foreground/70 animate-fade-in delay-500">
        Scroll
      </div>
    </section>
  );
}

function Stats() {
  const stats = [
    { icon: Award, value: "15+", label: "Tahun Pengalaman" },
    { icon: Users, value: "500+", label: "Klien Terlayani" },
    { icon: Scale, value: "350+", label: "Perkara Dimenangkan" },
    { icon: ShieldCheck, value: "98%", label: "Tingkat Kepuasan" },
  ];
  return (
    <section className="relative py-16 border-y border-border bg-gradient-navy">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 80}>
            <div className="text-center">
              <s.icon className="mx-auto h-7 w-7 text-gold mb-3" />
              <p className="font-display text-4xl text-gold-gradient">{s.value}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.25em] text-muted-foreground">
                {s.label}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function ServicesPreview() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader
          eyebrow="Layanan Kami"
          title="Solusi Hukum Lengkap & Terpercaya"
          description="Pendekatan menyeluruh untuk setiap kebutuhan hukum klien dengan strategi yang terukur."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 70}>
              <div className="group relative h-full glass rounded-2xl p-7 hover:border-gold/40 transition-all duration-500 hover:-translate-y-1 hover:shadow-gold">
                <div className="relative inline-grid place-items-center h-14 w-14 rounded-xl bg-gradient-gold text-primary-foreground shadow-gold">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-xl text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                <div className="mt-5 h-px w-12 bg-gradient-gold transition-all duration-500 group-hover:w-24" />
              </div>
            </Reveal>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            to="/layanan"
            className="inline-flex items-center gap-2 text-gold hover:gap-3 transition-all"
          >
            Lihat Semua Layanan <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function AboutPreview() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute -left-40 top-1/3 h-[400px] w-[400px] rounded-full bg-gold/10 blur-[100px]" />
      <div className="mx-auto max-w-7xl px-5 lg:px-8 grid lg:grid-cols-2 gap-14 items-center">
        <Reveal>
          <div className="relative">
            <img
              src={aboutImg}
              alt="Tentang firma"
              className="rounded-2xl shadow-soft object-cover w-full aspect-[4/3]"
              loading="lazy"
              width={1280}
              height={960}
            />
            <div className="absolute -bottom-6 -right-6 glass-strong rounded-2xl p-6 max-w-[220px] shadow-gold hidden md:block">
              <p className="font-display text-3xl text-gold-gradient">15+</p>
              <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mt-1">
                Tahun Mengabdi
              </p>
            </div>
          </div>
        </Reveal>
        <Reveal delay={150}>
          <p className="text-[11px] uppercase tracking-[0.35em] text-gold mb-4">Tentang Kami</p>
          <h2 className="font-display text-3xl md:text-5xl leading-tight">
            Firma Hukum yang Berakar pada{" "}
            <span className="text-gold-gradient italic">Integritas</span>
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Kantor Hukum Eka Saputra S.H & Associates didirikan dengan semangat
            menghadirkan layanan hukum berkualitas tinggi yang berlandaskan
            integritas, profesionalisme, dan keberpihakan pada keadilan.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Dengan pengalaman lebih dari satu dekade, kami telah dipercaya
            menangani ratusan perkara dari klien individu, korporasi, hingga
            instansi pemerintahan di seluruh wilayah Sumatera Barat dan nasional.
          </p>
          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            {[
              "Strategi hukum berbasis riset mendalam",
              "Komunikasi transparan setiap tahap",
              "Tim pengacara berpengalaman",
              "Pendekatan personal & profesional",
            ].map((p) => (
              <div key={p} className="flex items-start gap-3">
                <ShieldCheck className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                <span className="text-sm">{p}</span>
              </div>
            ))}
          </div>
          <Link
            to="/tentang"
            className="mt-8 inline-flex items-center gap-2 text-gold font-medium hover:gap-3 transition-all"
          >
            Pelajari Lebih Lanjut <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

function TeamPreview() {
  return (
    <section className="py-24 lg:py-32 bg-gradient-navy border-y border-border">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader
          eyebrow="Tim Pengacara"
          title="Profesional Hukum Berpengalaman"
          description="Tim kami terdiri dari pengacara dengan latar belakang dan keahlian yang saling melengkapi."
        />
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((t, i) => (
            <Reveal key={t.name} delay={i * 100}>
              <div className="group relative">
                <div className="relative overflow-hidden rounded-2xl aspect-[3/4] glass">
                  <img
                    src={lawyerImgs[i]}
                    alt={t.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                    width={768}
                    height={1024}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/40 to-transparent opacity-90" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <p className="text-xs uppercase tracking-[0.3em] text-gold mb-2">{t.role}</p>
                    <h3 className="font-display text-2xl text-foreground">{t.name}</h3>
                    <p className="mt-3 text-sm text-muted-foreground opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 leading-relaxed">
                      {t.bio}
                    </p>
                  </div>
                  <div className="absolute inset-0 ring-1 ring-inset ring-gold/0 group-hover:ring-gold/40 transition-all duration-500 rounded-2xl" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsSlider() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % testimonials.length), 5500);
    return () => clearInterval(id);
  }, []);
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-5xl px-5 lg:px-8">
        <SectionHeader
          eyebrow="Testimoni Klien"
          title="Kepercayaan yang Kami Bangun"
        />
        <div className="mt-14 relative">
          <div className="glass-strong rounded-3xl p-10 md:p-14 text-center min-h-[280px] shadow-soft relative overflow-hidden">
            <div className="absolute -top-20 -left-20 h-60 w-60 rounded-full bg-gold/10 blur-[80px]" />
            <p className="font-display text-6xl text-gold leading-none">"</p>
            <p key={i} className="animate-fade-up font-display text-xl md:text-2xl leading-relaxed text-foreground">
              {testimonials[i].quote}
            </p>
            <div className="mt-8">
              <p className="text-gold font-medium">{testimonials[i].name}</p>
              <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mt-1">
                {testimonials[i].role}
              </p>
            </div>
          </div>
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setI(idx)}
                className={`h-1.5 rounded-full transition-all ${
                  idx === i ? "w-10 bg-gradient-gold" : "w-4 bg-border"
                }`}
                aria-label={`Testimoni ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ArticlesPreview() {
  return (
    <section className="py-24 lg:py-32 bg-gradient-navy border-y border-border">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-12">
          <div>
            <p className="text-[11px] uppercase tracking-[0.35em] text-gold mb-4">Artikel Hukum</p>
            <h2 className="font-display text-3xl md:text-5xl">Wawasan Hukum Terkini</h2>
          </div>
          <Link to="/artikel" className="inline-flex items-center gap-2 text-gold hover:gap-3 transition-all">
            Semua Artikel <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {articles.map((a, i) => (
            <Reveal key={a.title} delay={i * 80}>
              <article className="group glass rounded-2xl p-7 h-full flex flex-col hover:border-gold/40 hover:-translate-y-1 transition-all duration-500">
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="text-gold uppercase tracking-[0.2em]">{a.category}</span>
                  <span>•</span>
                  <span>{a.date}</span>
                </div>
                <h3 className="mt-4 font-display text-xl leading-snug group-hover:text-gold transition-colors">
                  {a.title}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">{a.excerpt}</p>
                <Link to="/artikel" className="mt-5 inline-flex items-center gap-2 text-sm text-gold">
                  Baca Selengkapnya <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTABanner() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="relative gold-glow glass-strong rounded-3xl px-8 py-14 md:px-16 md:py-20 text-center overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,oklch(0.78_0.13_85/0.15),transparent_60%)]" />
          <p className="text-[11px] uppercase tracking-[0.35em] text-gold mb-4">Konsultasi</p>
          <h2 className="font-display text-3xl md:text-5xl leading-tight">
            Diskusikan Masalah Hukum Anda <br className="hidden md:block" />
            <span className="text-gold-gradient italic">Hari Ini Juga</span>
          </h2>
          <p className="mt-5 max-w-xl mx-auto text-muted-foreground">
            Jadwalkan sesi konsultasi pertama Anda secara gratis bersama tim hukum berpengalaman kami.
          </p>
          <div className="mt-9 flex justify-center gap-4 flex-wrap">
            <Link to="/kontak" className="bg-gradient-gold text-primary-foreground px-7 py-3.5 rounded-full font-semibold shadow-gold hover:scale-[1.03] transition-transform">
              Konsultasi Sekarang
            </Link>
            <a href="https://wa.me/6281234567890" className="glass px-7 py-3.5 rounded-full font-semibold hover:border-gold/50 transition-all">
              Chat WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
