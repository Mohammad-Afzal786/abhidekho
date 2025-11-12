import "../globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "@fortawesome/fontawesome-free/css/all.min.css";
import React from "react";

// ✅ SEO-friendly Metadata (Next.js App Router compatible)
export const metadata = {
  title: "AbhiDekho - Book car and bus seats instantly",
  
  description:
    "AbhiDekho — Book car and bus seats instantly with real-time seat selection, dynamic pricing, and instant confirmation.",

  openGraph: {
    title: "AbhiDekho - Book car and bus seats instantly",
    description:
      "Travel smart with AbhiDekho — your one-stop platform for booking cars and bus and private rides across India.",
    url: "https://abhidhekho.online/",
    siteName: "AbhiDekho",
    images: [
      {
        url: "https://abhidhekho.in/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AbhiDekho - Book car and bus seats instantly",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "AbhiDekho - Book car and bus seats instantly",
    description:
      "Instant booking, flexible payment, and verified rides — only on AbhiDekho.",
    images: ["https://abhidhekho.online/og-image.jpg"],
  },

  metadataBase: new URL("https://abhidhekho.online"),
  alternates: {
    canonical: "https://abhidhekho.online",
  },
};

// ✅ Root Layout
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Basic Meta */}
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#f97316" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>

      <body className="flex flex-col min-h-screen bg-gray-50 text-gray-900 antialiased">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
