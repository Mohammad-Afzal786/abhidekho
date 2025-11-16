"use client";

import React from "react";
import Head from "next/head";

interface SEOHeadProps {
  title: string;
  description: string;
  image?: string;
  url?: string; // optional custom canonical URL
}

export default function SEOHead({ title, description, image, url }: SEOHeadProps) {
  // canonicalUrl uses provided `url` or defaults to your main domain
  const canonicalUrl = url || "https://abhidekho.online";
  const siteName = "AbhiDekho";
  const ogImage = image || "https://abhidekho.online/og-image.jpg";

  return (
    <Head>
      {/* 🧭 Basic Meta */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      <meta name="robots" content="index, follow" />

      {/* 🌐 Open Graph (for Facebook, WhatsApp, LinkedIn) */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta name="google-site-verification" content="9nVf7-QbhIjbzQewS8hVRqPXzIjg_N_Nb-yhztWEpzE" />
      <meta property="og:site_name" content={siteName} />
      {image && <meta property="og:image" content={image} />}

      {/* 🐦 Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:domain" content="abhidekho.online" />
      <meta name="twitter:creator" content="@abhidekhoindia" />

      {/* 🧩 Favicon */}
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />

      {/* ✨ WEBSITE SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: siteName,
            url: "https://abhidekho.online",
            potentialAction: {
              "@type": "SearchAction",
              target: "https://abhidekho.online/?search={search_term_string}",
              "query-input": "required name=search_term_string",
            },
          }),
        }}
      />
      {/* 🏢 ORGANIZATION SCHEMA — Best for Google Knowledge Graph */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "AbhiDekho",
            url: "https://abhidekho.online",
            logo: "https://abhidekho.online/logo.png",
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
                contactType: "customer service",
                areaServed: "IN",
                availableLanguage: ["en", "hi"],
              },
            ],
          }),
        }}
      />


      {/* 📄 Structured Data (JSON-LD Schema.org) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: title,
            url: canonicalUrl,
            description,
            publisher: {
              "@type": "Organization",
              name: siteName,
              logo: {
                "@type": "ImageObject",
                url: "https://abhidekho.online/og-image.jpg",
              },
            },
          }),
        }}
      />
    </Head>
  );
}
