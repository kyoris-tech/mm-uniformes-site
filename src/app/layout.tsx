import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import { Footer } from "@/components/composite/Footer";
import { Navbar } from "@/components/composite/Navbar";
import { WhatsAppButton } from "@/components/composite/WhatsAppButton";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

// TODO: substituir pela URL real do domínio da MM Uniformes assim que estiver definida.
const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.mmuniformes.com.br";

const SITE_TITLE =
  "MM Uniformes | Fábrica de Uniformes Profissionais Sob Medida em Santos/SP";
const SITE_DESCRIPTION =
  "MM Uniformes é uma fábrica de uniformes profissionais sob medida em Santos/SP, com silk screen, bordado computadorizado e atendimento direto — atendendo empresas de Santos, São Paulo e de todo o Brasil.";

// Mistura termos locais (Santos/Baixada Santista/SP) com termos nacionais,
// já que a MM Uniformes atende clientes fora da região via WhatsApp e envio
// para todo o Brasil — sem se limitar ao SEO apenas local.
const SITE_KEYWORDS = [
  "uniformes profissionais",
  "uniformes sob medida",
  "confecção de uniformes",
  "fábrica de uniformes",
  "fábrica de uniformes Santos SP",
  "uniformes Santos SP",
  "uniformes Baixada Santista",
  "fábrica de uniformes em São Paulo",
  "uniformes profissionais para empresas Brasil",
  "envio de uniformes para todo o Brasil",
  "silk screen para uniformes",
  "bordado computadorizado",
  "uniforme personalizado com logotipo",
  "camisa polo uniforme empresa",
  "jaleco personalizado",
  "uniforme operacional",
  "uniformes para construção civil",
  "uniformes para indústria",
];

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  keywords: SITE_KEYWORDS,
  authors: [{ name: "MM Uniformes" }],
  alternates: {
    canonical: BASE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/images/logo.jpg",
  },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: BASE_URL,
    siteName: "MM Uniformes",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/images/logo.jpg",
        width: 700,
        height: 311,
        alt: "MM Uniformes",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/images/logo.jpg"],
  },
  other: {
    "geo.placename": "Santos, SP",
    "geo.region": "BR-SP",
  },
};

// Dados estruturados: a cidade-base (Santos/SP) é declarada para ranquear bem
// nas buscas locais e no Google Maps, mas areaServed é propositalmente mais
// amplo (Baixada Santista, São Paulo e Brasil) porque a MM Uniformes atende
// pedidos fora da região via WhatsApp e envio — o SEO não fica limitado ao
// alcance local. Continuamos sem inventar telefone, endereço completo,
// fundador ou data de fundação: são dados que o cliente ainda vai confirmar.
const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "MM Uniformes",
  description: SITE_DESCRIPTION,
  url: BASE_URL,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Santos",
    addressRegion: "SP",
    addressCountry: "BR",
  },
  areaServed: [
    { "@type": "City", name: "Santos" },
    { "@type": "AdministrativeArea", name: "Baixada Santista" },
    { "@type": "State", name: "São Paulo" },
    { "@type": "Country", name: "Brasil" },
  ],
  makesOffer: [
    {
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: "Confecção de uniformes sob medida" },
    },
    {
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: "Silk screen" },
    },
    {
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: "Bordado computadorizado" },
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${manrope.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <Navbar />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
