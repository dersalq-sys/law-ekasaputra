import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "./tentang";
import { Reveal } from "@/components/site/Reveal";
import { MapPin, Phone, Mail, Send, MessageCircle } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/kontak")({
  head: () => ({
    meta: [
      { title: "Kontak — Eka Saputra & Associates" },
      { name: "description", content: "Hubungi Kantor Hukum Eka Saputra S.H & Associates di Pasaman Barat untuk konsultasi hukum." },
    ],
  }),
  component: KontakPage,
});

function KontakPage() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <PageHero
        eyebrow="Kontak"
        title="Mari Diskusikan Masalah Hukum Anda"
        description="Tim kami siap memberikan pendampingan dan konsultasi sesuai kebutuhan Anda."
      />

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 grid lg:grid-cols-5 gap-10">
          <Reveal className="lg:col-span-2">
            <div className="space-y-5">
              <ContactItem icon={MapPin} title="Alamat Kantor" text="Jorong Batang Lingkin, Nagari Aia Gadang Barat, Kecamatan Pasaman, Kabupaten Pasaman Barat" />
              <ContactItem icon={Phone} title="Eka Saputra, S.H." text="0822-8977-5235" href="https://wa.me/6282289775235" />
              <ContactItem icon={Phone} title="Dersal (Paralegal)" text="0831-7493-8353" href="https://wa.me/6283174938353" />
              <ContactItem icon={Mail} title="Email" text="info@ekasaputra-law.id" href="mailto:info@ekasaputra-law.id" />
              <a
                href="https://wa.me/6282289775235"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-gold text-primary-foreground px-6 py-3 rounded-full font-semibold shadow-gold hover:scale-[1.03] transition-transform"
              >
                <MessageCircle className="h-4 w-4" /> Chat WhatsApp
              </a>
            </div>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-3">
            <form
              onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              className="glass-strong rounded-2xl p-7 md:p-9 shadow-soft"
            >
              <h3 className="font-display text-2xl">Form Konsultasi Online</h3>
              <p className="text-sm text-muted-foreground mt-1">Isi data berikut, tim kami akan menghubungi Anda dalam 1×24 jam.</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <Field label="Nama Lengkap" name="name" />
                <Field label="No. WhatsApp" name="phone" />
                <Field label="Email" name="email" type="email" className="sm:col-span-2" />
                <Field label="Topik Konsultasi" name="topic" className="sm:col-span-2" />
                <div className="sm:col-span-2">
                  <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Pesan</label>
                  <textarea required rows={5} className="mt-2 w-full rounded-xl bg-background/40 border border-border px-4 py-3 text-sm focus:outline-none focus:border-gold/60 transition" />
                </div>
              </div>
              <button
                type="submit"
                className="mt-6 inline-flex items-center gap-2 bg-gradient-gold text-primary-foreground px-7 py-3 rounded-full font-semibold shadow-gold hover:scale-[1.03] transition-transform"
              >
                <Send className="h-4 w-4" /> Kirim Konsultasi
              </button>
              {sent && (
                <p className="mt-4 text-sm text-gold animate-fade-in">
                  Terima kasih, pesan Anda telah kami terima.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="rounded-2xl overflow-hidden border border-border shadow-soft glass">
            <iframe
              title="Lokasi Kantor"
              src="https://www.google.com/maps?q=Pasaman+Barat&output=embed"
              className="w-full h-[420px] grayscale-[30%] contrast-110"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </>
  );
}

function ContactItem({ icon: Icon, title, text, href }: { icon: any; title: string; text: string; href?: string }) {
  const Body = (
    <div className="glass rounded-2xl p-6 flex gap-4 hover:border-gold/40 transition-all">
      <div className="grid place-items-center h-11 w-11 rounded-xl bg-gradient-gold text-primary-foreground shrink-0">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <p className="text-xs uppercase tracking-[0.25em] text-gold">{title}</p>
        <p className="mt-1 text-sm text-foreground/90 leading-relaxed">{text}</p>
      </div>
    </div>
  );
  return href ? <a href={href}>{Body}</a> : Body;
}

function Field({ label, name, type = "text", className = "" }: { label: string; name: string; type?: string; className?: string }) {
  return (
    <div className={className}>
      <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{label}</label>
      <input
        required
        name={name}
        type={type}
        className="mt-2 w-full rounded-xl bg-background/40 border border-border px-4 py-3 text-sm focus:outline-none focus:border-gold/60 transition"
      />
    </div>
  );
}
