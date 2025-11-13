"use client";

import React from "react";
import SEOHead from "./components/SEOHead";

export default function HomePage() {
  return (
    <>
      <SEOHead
        title="AbhiDekho – India’s Fastest Seat Booking App"
        description="AbhiDekho — Book car and bus seats with real-time seat selection, dynamic pricing, and instant confirmation."
        url="https://abhidekho.online/"
        image="https://abhidekho.app/og-image.jpg"
      />

      {/* ✅ SEO Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "AbhiDekho",
            url: "https://abhidekho.online",
            logo: "https://abhidekho.online/logo.png",
            sameAs: ["https://instagram.com/abhidekhoindia"],
            contactPoint: [
              {
                "@type": "ContactPoint",
                telephone: "+91-8588003437",
                contactType: "Customer Service",
                areaServed: "IN",
                availableLanguage: ["English", "Hindi"],
              },
            ],
          }),
        }}
      />

      {/* 🌈 Background */}
      <div className="relative flex flex-col min-h-screen font-sans text-gray-900 overflow-hidden bg-gray-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,197,94,0.15),transparent_50%),radial-gradient(circle_at_80%_80%,rgba(79,70,229,0.15),transparent_50%)] animate-[pulse_10s_ease-in-out_infinite] blur-3xl"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-black opacity-95"></div>

        {/* 🏠 Hero Section */}
        <section className="relative z-10 flex flex-col items-center justify-center text-center px-4 py-16 md:py-24">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight text-white">
            <span  className="text-emerald-400">AbhiDekho</span> — Book car and bus seats with real-time seat selection
          </h1>
          <p className="text-base md:text-lg text-gray-300 max-w-md mx-auto mb-6">
            Choose seats, compare fares, and confirm in seconds — fast, simple & secure.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 items-center justify-center">
            <a
              href="/api/download-apk"
              className="px-6 py-3 text-base font-semibold text-gray-900 bg-emerald-400 rounded-full shadow-lg hover:bg-emerald-500 transition"
            >
              ⬇️ Download App
            </a>
            <a
              href="#features"
              className="px-5 py-2.5 text-base font-medium text-emerald-400 border border-emerald-400 rounded-full hover:bg-emerald-400/10 transition"
            >
              Learn More
            </a>
          </div>
          <p className="mt-3 text-xs text-gray-500">Available for Android • v1.0.0</p>
        </section>

        {/* ✨ Features */}
        <section id="features" className="py-12 px-4 text-center relative z-10">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Why AbhiDekho?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { icon: "🪑", title: "Pick Your Seat", text: "Interactive seat maps for your ride." },
              { icon: "⚡", title: "Instant Confirmation", text: "Real-time availability, instant e-ticket." },
              { icon: "💳", title: "Pay After Service", text: "Book first, pay after your trip." },
            ].map((f, i) => (
              <div
                key={i}
                className="p-5 bg-gray-800/60 rounded-2xl shadow-lg hover:shadow-xl transition"
              >
                <div className="text-2xl mb-2">{f.icon}</div>
                <h3 className="text-lg font-semibold text-white">{f.title}</h3>
                <p className="text-gray-400 text-sm mt-1">{f.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ⚙️ How It Works */}
        <section id="how" className="py-12 px-4 text-center bg-gray-900/70 relative z-10">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { icon: "🔎", title: "Search Route", text: "Enter pickup, drop & date." },
              { icon: "🪑", title: "Choose Seat", text: "Select your preferred seat live." },
              { icon: "🎟️", title: "Book & Confirm", text: "Instant e-ticket on payment." },
            ].map((s, i) => (
              <div key={i} className="p-5 bg-gray-800/60 rounded-2xl shadow-lg hover:shadow-xl">
                <div className="text-3xl mb-2">{s.icon}</div>
                <h3 className="text-lg font-semibold text-emerald-400">{s.title}</h3>
                <p className="text-gray-400 text-sm">{s.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 📊 Stats */}
        <section id="stats" className="py-12 px-4 text-center relative z-10">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Trusted by Riders</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {[
              { value: "500K+", label: "Seats booked" },
              { value: "Kakrala ⇄ Delhi", label: "Top route" },
              { value: "60 sec", label: "Fastest booking" },
            ].map((stat, i) => (
              <div key={i} className="p-6 bg-gray-800/60 rounded-2xl shadow-lg">
                <p className="text-2xl font-bold text-white">{stat.value}</p>
                <p className="text-sm text-gray-400 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 💬 Testimonials */}
        <section id="testimonials" className="py-12 px-4 text-center bg-gray-900/70 relative z-10">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What Riders Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { text: "“Super easy booking and instant ticket!”", name: "Anjali" },
              { text: "“Booked 4 window seats together. Loved it!”", name: "Rohit" },
              { text: "“Fast and clean UI, perfect for daily travel.”", name: "Sana" },
            ].map((t, i) => (
              <div key={i} className="p-5 bg-gray-800/60 rounded-2xl shadow-lg">
                <p className="text-gray-400 text-sm mb-2">{t.text}</p>
                <h4 className="text-white text-sm font-semibold">{t.name}</h4>
              </div>
            ))}
          </div>
        </section>

        {/* 📱 CTA */}
        <section id="download" className="py-12 px-4 text-center relative z-10">
          <div className="max-w-md mx-auto bg-gray-800/70 border border-emerald-400/20 text-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-3">Ready to book?</h3>
            <p className="text-gray-400 text-sm mb-5">
              Download <b>AbhiDekho</b> and start booking cars & buses instantly.
            </p>
            <a
              href="/api/download-apk"
              className="inline-block px-8 py-3 font-semibold bg-emerald-400 text-gray-900 rounded-full shadow-md hover:scale-105 transition"
            >
              ⬇️ Download App
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
