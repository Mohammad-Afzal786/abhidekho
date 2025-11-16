import "../globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "@fortawesome/fontawesome-free/css/all.min.css";
import React from "react";

// 🌐 SEO Meta
export const metadata = {
  title: "AbhiDekho – India’s Fastest Seat Booking App",
  description:"AbhiDekho — Book car and bus seats with real-time seat selection, dynamic pricing, and instant confirmation.",
  metadataBase: new URL("https://abhidekho.online"),

  alternates: {
    canonical: "https://abhidekho.online",
  },

  openGraph: {
    title: "AbhiDekho – India’s Fastest Seat Booking App",
    description:
    "AbhiDekho — Book car and bus seats with real-time seat selection, dynamic pricing, and instant confirmation.",
    url: "https://abhidekho.online",
    siteName: "AbhiDekho",
    type: "website",
    images: [
      {
        url: "https://abhidekho.online/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AbhiDekho – Seat Booking App",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "AbhiDekho – India’s Fastest Seat Booking App",
    description:
     "AbhiDekho — Book car and bus seats with real-time seat selection, dynamic pricing, and instant confirmation.",
    images: ["https://abhidekho.online/og-image.jpg"],
  },
};

// =========================
// 🌟 Root Layout
// =========================
export default function RootLayout({ children }: { children: React.ReactNode }) {
  // ----- STRUCTURED DATA ------
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "AbhiDekho",
    url: "https://abhidekho.online",
    logo: "https://abhidekho.online/logo.png",

    // 🔗 All Social Profiles Here
    sameAs: [
      "https://instagram.com/abhidekhoindia",
      "https://www.linkedin.com/company/abhidekho",
      "https://abhidekho.online",
      "https://www.abhidekho.online/download",
      "https://www.abhidekho.online/contact",
      "https://www.abhidekho.online/privacy"
      
    ],

    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+91-8588003437",
        contactType: "customer support",
        areaServed: "IN",
        availableLanguage: ["English", "Hindi"],
      },
    ],
  };

  // 🔍 Website Schema (helps in Google Sitelinks Search)
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "AbhiDekho",
    url: "https://abhidekho.online",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://abhidekho.online/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />

        {/* Mobile Viewport */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />

  
        {/* SEO JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />

        {/* Website Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
      </head>

      <body className="flex flex-col min-h-screen bg-white text-gray-900 antialiased">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
