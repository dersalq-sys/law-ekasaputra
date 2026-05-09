import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl text-gold-gradient">404</h1>
        <h2 className="mt-4 font-display text-2xl">Halaman tidak ditemukan</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Halaman yang Anda cari tidak tersedia atau telah dipindahkan.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-gradient-gold text-primary-foreground px-6 py-2.5 text-sm font-semibold shadow-gold"
          >
            Kembali ke Beranda
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-2xl">Terjadi kesalahan</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Mohon maaf, terjadi kendala. Silakan coba kembali.
        </p>
        <div className="mt-6 flex justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="rounded-full bg-gradient-gold text-primary-foreground px-5 py-2 text-sm font-semibold"
          >
            Coba lagi
          </button>
          <a href="/" className="rounded-full border border-border px-5 py-2 text-sm">Beranda</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Kantor Hukum Eka Saputra S.H & Associates" },
      {
        name: "description",
        content:
          "Firma hukum profesional di Pasaman Barat. Pendampingan hukum perdata, pidana, sengketa tanah, waris, dan mediasi dengan integritas tinggi.",
      },
      { property: "og:title", content: "Kantor Hukum Eka Saputra S.H & Associates" },
      { property: "og:description", content: "Eka Saputra Legal is a professional website for a law firm, offering legal services and firm information." },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: "Kantor Hukum Eka Saputra S.H & Associates" },
      { name: "description", content: "Eka Saputra Legal is a professional website for a law firm, offering legal services and firm information." },
      { name: "twitter:description", content: "Eka Saputra Legal is a professional website for a law firm, offering legal services and firm information." },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/uRSsJZ4joFfoBFANhBddArSPuLw1/social-images/social-1778286010273-foto_eka_dersa_mitra.webp" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/uRSsJZ4joFfoBFANhBddArSPuLw1/social-images/social-1778286010273-foto_eka_dersa_mitra.webp" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800&family=Poppins:wght@300;400;500;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <main className="pt-20">
          <Outlet />
        </main>
        <Footer />
        <WhatsAppFab />
      </div>
    </QueryClientProvider>
  );
}
