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
      <meta name="google-site-verification" content="9nVf7-QbhIjbzQewS8hVRqPXzIjg_N_Nb-yhztWEpzE"/>
      <meta property="og:site_name" content={siteName} />
      {image && <meta property="og:image" content={image} />}

      {/* 🐦 Twitter Card */}
      <meta
        name="twitter:card"
        content={image ? "summary_large_image" : "summary"}
      />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}

      {/* 🧩 Favicon */}
      <link rel="icon" href="/favicon.ico" />

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
