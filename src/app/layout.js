import Footer from "@/components/footer/footer";
import "./globals.css";

export const metadata = {
  title: 'MKM Agency - Desarrollo Web y Marketing Digital en Argentina',
  description: 'Agencia digital especializada en desarrollo web, diseño, SEO y marketing digital. Creamos sitios modernos y optimizados para personas y empresas en Argentina y Latinoamerica.',
  keywords: 'desarrollo web, diseño web, SEO, marketing digital, agencia digital argentina, sitios web profesionales',
  openGraph: {
    title: 'MKM Agency - Experiencias Digitales Únicas',
    description: 'Para empresas y personas que quieren crecer, digitalizarse y optimizar su negocio',
    url: 'https://mkm-agency.com',
    siteName: 'MKM Agency',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'MKM Agency',
    description: 'Agencia digital especializada en desarrollo web y marketing digital',
    url: 'https://mkm-agency.com',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'AR'
    },
  };

  return (
    <html lang="es">
      <body className="flex flex-col min-h-screen">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <main className="flex-grow">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
