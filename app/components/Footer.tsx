"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function AbhiDekhoFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-10 border-t border-gray-700">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-6">
        {/* 🚌 Brand Section */}
        <div className="flex flex-col gap-4">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.png"
               alt="AbhiDekho - Book cars and bus seats instantly."
              width={120}
              height={120}
              className="rounded-lg object-contain"
              priority
            />
          </Link>
          <p className="text-base leading-relaxed text-gray-400">
            Book your bus tickets easily with AbhiDekho — trusted by thousands of
            travelers , reliable, and comfortable journeys.
          </p>
          {/* Social Links */}
          <div className="flex gap-3 mt-2">
            {[
             
              { icon: "instagram", link: "https://instagram.com/abhidekhoindia" },
             
            ].map((s) => (
              <a
                key={s.icon}
                href={s.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.icon}
                className="bg-gray-700 hover:bg-red-600 text-white p-2.5 rounded-full transition-colors duration-300"
              >
                <i className={`fab fa-${s.icon}`}></i>
              </a>
            ))}
          </div>
        </div>

        {/* 🚍 Quick Links */}
        <div>
          <h3 className="font-semibold text-xl mb-4 text-white">Quick Links</h3>
          <ul className="space-y-2">
            {[
              { name: "Home", href: "/" },
              { name: "Download App", href: "/download" },
              { name: "Privacy Policy", href: "/privacy" },
              { name: "Contact Us", href: "/contact" },
            
            ].map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="hover:text-red-400 transition-colors duration-200"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* 🗺️ Popular Routes */}
        <div>
          <h3 className="font-semibold text-xl mb-4 text-white">Popular Routes</h3>
          <ul className="space-y-2">
            {[
              "Delhi → kakrala",
              "kakrala → Delhi",
             
            ].map((route) => (
              <li key={route}>
                <span className="hover:text-red-400 cursor-pointer transition">
                  {route}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* 📞 Support & Contact */}
        <div>
          <h3 className="font-semibold text-xl mb-4 text-white">Support</h3>
          <p>📍 Kakrala, India</p>
          <p className="mt-2">📞 +91 8588003437</p>
          <p className="mt-1">📧 abhidekhoindia@gmail.com</p>
          <div className="mt-4">
            <Link
              href="/contact"
              className="inline-block bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* 🔻 Bottom Bar */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-400">
        <p>
          © {year} AbhiDekho — All Rights Reserved |{" "}
          <Link href="/privacy" className="hover:text-red-400">
            Privacy Policy
          </Link>{" "}
          |{" "}
          <Link href="/terms" className="hover:text-red-400">
            Terms & Conditions
          </Link>
        </p>
      </div>
    </footer>
  );
}
