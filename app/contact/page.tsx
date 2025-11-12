"use client";

import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import SEOHead from "../components/SEOHead";

export default function ContactPage() {
  return (
    <>
      {/* ✅ SEO Head + Schema.org for Google Rich Results */}
      <SEOHead
        title="AbhiDekho - Contact"
        description="Get in touch with AbhiDekho. Call, email for support, bookings, or partnership inquiries."
        url="https://abhidekho.online/contact"
        image="https://abhidekho.online/og-image.jpg"
      />

      {/* ✅ Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "AbhiDekho",
            url: "https://abhidekho.online",
            telephone: "+91 8588003437",
            email: "contact@abhidekho.online",
            address: {
              "@type": "PostalAddress",
              streetAddress: "AbhiDekho App",
              addressCountry: "IN",
            },
            sameAs: [
              "https://www.instagram.com/abhidekho",
             
            ],
          }),
        }}
      />

      {/* ✅ Page Layout */}
      <div className="flex flex-col min-h-screen font-sans bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white">

        

        {/* 📞 Contact Info Section */}
        <section className="relative py-20 sm:py-24 px-6 sm:px-8 md:px-12 text-center overflow-hidden">
          {/* Background glow */}
          <div className="absolute top-10 left-10 w-40 h-40 bg-emerald-600 rounded-full opacity-20 blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 bg-indigo-600 rounded-full opacity-20 blur-3xl animate-pulse-slow"></div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-12 relative z-10">
            AbhiDekho <span className="text-emerald-400">Contact</span>
          </h2>

          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto mb-16 relative z-10">
            Have questions or need help with your booking? We’re here for you — reach out anytime!
          </p>

          {/* Contact Cards */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 relative z-10">
            {/* Phone */}
            <div className="flex flex-col items-center text-center border border-emerald-400/30 hover:border-emerald-400/80 rounded-2xl p-8 bg-gray-800/40 backdrop-blur-md shadow-md hover:shadow-emerald-500/30 transition-all hover:-translate-y-2 duration-300">
              <div className="bg-gradient-to-br from-emerald-500 to-emerald-700 text-white w-16 h-16 flex items-center justify-center rounded-full mb-5 shadow-lg">
                <i className="fa fa-phone text-2xl"></i>
              </div>
              <p className="text-gray-400 text-sm mb-1">Need help booking?</p>
              <h4 className="text-lg font-semibold">
                <a href="tel:8588003434" className="hover:text-emerald-400 transition">
                  +91 8588003437
                </a>
              </h4>
            </div>

            {/* Email */}
            <div className="flex flex-col items-center text-center border border-emerald-400/30 hover:border-emerald-400/80 rounded-2xl p-8 bg-gray-800/40 backdrop-blur-md shadow-md hover:shadow-emerald-500/30 transition-all hover:-translate-y-2 duration-300">
              <div className="bg-gradient-to-br from-emerald-500 to-emerald-700 text-white w-16 h-16 flex items-center justify-center rounded-full mb-5 shadow-lg">
                <i className="fa fa-envelope text-2xl"></i>
              </div>
              <p className="text-gray-400 text-sm mb-1">Write to us</p>
              <h4 className="text-lg font-semibold">
                <a
                  href="mailto:contact@abhidekho.online"
                  className="hover:text-emerald-400 transition"
                >
                  contact@abhidekho.online
                </a>
              </h4>
            </div>

            {/* Website */}
            <div className="flex flex-col items-center text-center border border-emerald-400/30 hover:border-emerald-400/80 rounded-2xl p-8 bg-gray-800/40 backdrop-blur-md shadow-md hover:shadow-emerald-500/30 transition-all hover:-translate-y-2 duration-300">
              <div className="bg-gradient-to-br from-emerald-500 to-emerald-700 text-white w-16 h-16 flex items-center justify-center rounded-full mb-5 shadow-lg">
                <i className="fa fa-globe text-2xl"></i>
              </div>
              <p className="text-gray-400 text-sm mb-1">Visit our website</p>
              <h4 className="text-lg font-semibold">
                <a
                  href="https://abhidekho.online"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition"
                >
                  abhidekho.online
                </a>
              </h4>
            </div>
          </div>

          {/* 🕒 Business Hours */}
          <div className="text-center mt-16 text-gray-400 relative z-10">
            <h4 className="text-xl font-semibold text-white mb-3">Support Hours</h4>
            <p>Mon – Sat: 8:00 AM – 9:00 PM</p>
            <p>Sunday: 9:00 AM – 6:00 PM</p>
          </div>
        </section>
      </div>
    </>
  );
}
