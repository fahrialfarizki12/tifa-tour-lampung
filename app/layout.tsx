import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tifatourlampung.com"),

  title: {
    default: "Tifa Tour Lampung | Travel Umroh & Haji Terpercaya",
    template: "%s | Tifa Tour Lampung",
  },

  description:
    "Tifa Tour Lampung merupakan travel umroh dan haji terpercaya di Lampung dengan pelayanan amanah, fasilitas nyaman, hotel dekat Masjidil Haram, serta pembimbing ibadah berpengalaman.",

  keywords: [
    "travel umroh lampung",
    "umroh lampung",
    "travel haji lampung",
    "paket umroh lampung",
    "tifa tour lampung",
    "travel umroh terpercaya",
    "umroh murah lampung",
    "travel haji terpercaya",
    "paket haji lampung",
    "travel umroh metro lampung",
  ],

  authors: [
    {
      name: "Fahri Alfa Rizki",
    },
  ],

  creator: "Fahri Alfa Rizki",
  publisher: "Tifa Tour Lampung",

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: "https://tifatourlampung.com",
  },

  icons: {
    icon: [
      {
        url: "/logo.jpeg",
        type: "image/jpeg",
      },
    ],
    apple: "/logo.jpeg",
  },

  openGraph: {
    title: "Tifa Tour Lampung | Travel Umroh & Haji Terpercaya",

    description:
      "Wujudkan perjalanan ibadah terbaik bersama Tifa Tour Lampung. Travel umroh dan haji terpercaya dengan pelayanan profesional dan amanah.",

    url: "https://tifatourlampung.com",

    siteName: "Tifa Tour Lampung",

    locale: "id_ID",

    type: "website",

    images: [
      {
        url: "/hero-1-bg.jpg",
        width: 1200,
        height: 630,
        alt: "Tifa Tour Lampung",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Tifa Tour Lampung | Travel Umroh & Haji Terpercaya",

    description:
      "Travel umroh dan haji terpercaya di Lampung dengan pelayanan nyaman dan amanah.",

    images: ["/hero-1-bg.jpg"],
  },

  category: "travel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        {/* SEO Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",

              "@type": "TravelAgency",

              name: "Tifa Tour Lampung",

              image: "https://tifatourlampung.com/hero-1-bg.jpg",

              url: "https://tifatourlampung.com",

              telephone: "+6285273497925",

              priceRange: "$$",

              description:
                "Travel Umroh dan Haji terpercaya di Lampung dengan pelayanan amanah dan profesional.",

              address: {
                "@type": "PostalAddress",

                streetAddress:
                  "Jl. Bridgen Katamso No.21 Ganjarasri Metro Barat",

                addressLocality: "Metro",

                addressRegion: "Lampung",

                postalCode: "34125",

                addressCountry: "ID",
              },

              areaServed: {
                "@type": "State",
                name: "Lampung",
              },

              sameAs: ["https://instagram.com/", "https://facebook.com/"],
            }),
          }}
        />
      </head>

      <body className={inter.className}>
        <header>
          <Navbar />
        </header>

        <main className="mt-10">{children}</main>

        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
