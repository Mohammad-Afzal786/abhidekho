"use client";

import React from "react";
import SEOHead from "../components/SEOHead";
import Link from "next/link";
import Image from "next/image";

export default function DownloadPage() {
  return (
    <>
      <SEOHead
        title="AbhiDekho - Download App"
        description="AbhiDekho — Book car and bus seats with real-time seat selection, dynamic pricing, and instant confirmation. Download the official AbhiDekho app today!"
        url="https://abhidekho.online/download"
        image="https://abhidekho.online/og-image.jpg"
      />

      <main className="flex flex-col min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black text-white font-sans">
        {/* 🌟 Hero Section */}
        <section className="relative flex flex-col items-center justify-center text-center py-20 px-6 overflow-hidden">
          {/* glowing background */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,197,94,0.15),transparent_50%),radial-gradient(circle_at_80%_80%,rgba(79,70,229,0.15),transparent_50%)] blur-3xl"></div>

        

          <h1 className="z-10 text-5xl sm:text-6xl font-extrabold mb-4 text-emerald-400 animate-fadeIn">
            AbhiDekho
          </h1>
          <h2 className="z-10 text-3xl sm:text-4xl font-bold mb-6 text-gray-200 animate-fadeIn delay-100">
            Download Official App
          </h2>
          <p className="z-10 text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-8 animate-fadeIn delay-200">
            AbhiDekho — Book car and bus seats with real-time seat selection, Choose your seat, compare fares, and get instant confirmation — fast, simple, and secure.
          </p>

          <Link
            href="/api/download-apk"
            className="z-10 px-10 py-4 bg-emerald-400 text-gray-900 font-semibold rounded-full shadow-lg hover:scale-105 transition-transform hover:bg-emerald-500"
          >
            ⬇️ Download APK
          </Link>

          <p className="z-10 mt-4 text-sm text-gray-500">
            Android Only • Version 1.0.0
          </p>
        </section>

        {/* ✨ Features */}
        <section id="features" className="py-20 px-6 text-center relative">
          <h2 className="text-4xl font-bold text-white mb-12">
            Why <span className="text-emerald-400">AbhiDekho?</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {[
              { icon: "🪑", title: "Pick Your Seat", desc: "Interactive seat map — window, aisle, or front row." },
              { icon: "⚡", title: "Instant Booking", desc: "Real-time seat availability & instant e-ticket." },
              { icon: "💳", title: "Flexible Payment", desc: "Pay securely after your ride — simple & safe." },
              { icon: "🕒", title: "24×7 Support", desc: "Get help anytime with our fast customer support team." },
              { icon: "🚗", title: "Car & Bus Options", desc: "Choose from multiple travel modes easily." },
              { icon: "🛡️", title: "Secure & Reliable", desc: "Trusted by thousands of riders across India." },
            ].map((f, i) => (
              <div
                key={i}
                className="p-8 bg-gray-800/60 backdrop-blur-lg rounded-3xl shadow-xl hover:shadow-emerald-500/20 transition hover:-translate-y-2 duration-300"
              >
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-gradient-to-r from-emerald-400 to-indigo-500 text-white text-3xl shadow-lg">
                  {f.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{f.title}</h3>
                <p className="text-gray-300 text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 📱 CTA Section */}
        <section className="py-20 text-center bg-gray-900/80 backdrop-blur-xl border-t border-gray-800 relative">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to start your journey?
            </h2>
            <p className="text-gray-400 mb-10 text-lg">
              Download <span className="text-emerald-400 font-semibold">AbhiDekho</span> and experience fast, safe, and simple travel booking.
            </p>
            <Link
              href="/api/download-apk"
              className="px-10 py-4 bg-emerald-400 text-gray-900 font-bold rounded-full shadow-lg hover:bg-emerald-500 hover:scale-105 transition-transform"
            >
              📲 Download App (Android)
            </Link>
          </div>
        </section>

        
      </main>
    </>
  );
}
