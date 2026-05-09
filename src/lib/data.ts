import { Scale, Gavel, Landmark, BookOpen, Handshake, ShieldCheck, MessageSquareText } from "lucide-react";

export const services = [
  {
    icon: Scale,
    title: "Hukum Perdata",
    desc: "Pendampingan sengketa kontrak, perjanjian, ganti rugi, dan hubungan keperdataan lainnya secara komprehensif.",
  },
  {
    icon: Gavel,
    title: "Hukum Pidana",
    desc: "Pembelaan profesional pada tahap penyidikan, penuntutan, hingga persidangan untuk klien individu maupun korporasi.",
  },
  {
    icon: Landmark,
    title: "Sengketa Tanah",
    desc: "Penyelesaian sengketa pertanahan, sertifikat ganda, batas tanah, dan eksekusi putusan pertanahan.",
  },
  {
    icon: BookOpen,
    title: "Waris",
    desc: "Pembagian harta waris sesuai hukum yang berlaku, mediasi keluarga, dan pengurusan dokumen waris.",
  },
  {
    icon: Handshake,
    title: "Mediasi",
    desc: "Mediasi non-litigasi untuk penyelesaian sengketa dengan jalan musyawarah dan kekeluargaan.",
  },
  {
    icon: ShieldCheck,
    title: "Pendampingan Litigasi",
    desc: "Pendampingan menyeluruh di pengadilan negeri, agama, tata usaha negara hingga Mahkamah Agung.",
  },
  {
    icon: MessageSquareText,
    title: "Konsultasi Hukum",
    desc: "Konsultasi hukum personal maupun korporasi dengan pendekatan strategis dan solusi terukur.",
  },
] as const;

export const team = [
  {
    name: "Eka Saputra, S.H.",
    role: "Founding Partner",
    bio: "Lebih dari 15 tahun pengalaman menangani perkara perdata, pidana, dan sengketa pertanahan di berbagai tingkat peradilan.",
  },
  {
    name: "Rahma Putri, S.H., M.H.",
    role: "Senior Associate",
    bio: "Spesialis hukum keluarga, waris, dan mediasi dengan track record penyelesaian sengketa yang humanis.",
  },
  {
    name: "Bayu Pratama, S.H.",
    role: "Litigation Counsel",
    bio: "Berpengalaman dalam strategi litigasi korporasi dan pendampingan hukum klien institusi.",
  },
] as const;

export const articles = [
  {
    title: "Memahami Prosedur Gugatan Perdata di Pengadilan Negeri",
    date: "12 Mei 2026",
    category: "Hukum Perdata",
    excerpt: "Panduan lengkap alur gugatan perdata, syarat formil, hingga upaya hukum yang dapat ditempuh.",
  },
  {
    title: "Hak dan Kewajiban Ahli Waris Menurut Hukum Indonesia",
    date: "28 April 2026",
    category: "Waris",
    excerpt: "Penjelasan praktis mengenai pembagian harta waris berdasarkan KUHPerdata, hukum Islam, dan adat.",
  },
  {
    title: "Strategi Penyelesaian Sengketa Tanah Tanpa Litigasi",
    date: "10 April 2026",
    category: "Pertanahan",
    excerpt: "Mengapa mediasi sering menjadi pilihan terbaik untuk menyelesaikan sengketa pertanahan modern.",
  },
] as const;

export const testimonials = [
  {
    name: "Hendra W.",
    role: "Direktur Perusahaan",
    quote:
      "Tim Eka Saputra & Associates menangani perkara kami dengan sangat profesional. Komunikasi jelas dan strategi hukum yang tajam.",
  },
  {
    name: "Ibu Sari",
    role: "Klien Pribadi",
    quote:
      "Saya sangat terbantu dalam proses pembagian waris keluarga. Pendekatannya humanis namun tetap tegas pada aspek hukum.",
  },
  {
    name: "Andi Rahman",
    role: "Pengusaha",
    quote:
      "Konsultasi yang diberikan benar-benar mencerahkan. Mereka memahami kebutuhan klien dan memberikan solusi terbaik.",
  },
  {
    name: "Linda P.",
    role: "Notaris Mitra",
    quote:
      "Kerja sama profesional yang luar biasa. Integritas dan dedikasi tim ini patut dijadikan teladan firma hukum modern.",
  },
] as const;
