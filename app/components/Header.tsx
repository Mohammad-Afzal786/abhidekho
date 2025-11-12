"use client";

import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white py-3 px-4 shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* ✅ Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="AbhiDekho - Book cars and bus seats instantly."
            width={100}
            height={40}
            className="rounded"
            priority
          />
        </Link>

        {/* ✅ Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link href="/" className="hover:text-emerald-400 transition">
            Home
          </Link>
          <Link href="/download" className="hover:text-emerald-400 transition">
            Download
          </Link>
          <Link href="/privacy" className="hover:text-emerald-400 transition">
            Privacy Policy
          </Link>
          <Link href="/contact" className="hover:text-emerald-400 transition">
            Contact
          </Link>

          <Link
            href="/api/download-apk"
            className="ml-2 px-4 py-2 bg-emerald-500 hover:bg-emerald-600 rounded-lg font-semibold text-gray-900 transition"
          >
            Download App
          </Link>
        </nav>

        {/* ✅ Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8"
          aria-label="Toggle Menu"
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              menuOpen ? "opacity-0" : "my-1"
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          />
        </button>
      </div>

      {/* ✅ Mobile Dropdown Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-96 mt-2" : "max-h-0"
        }`}
      >
        <nav className="bg-gray-800 rounded-lg shadow-lg p-4">
          <ul className="flex flex-col space-y-3 text-sm">
            {[
              { name: "Home", href: "/" },
              { name: "Download", href: "/download" },
              { name: "Privacy Policy", href: "/privacy" },
              { name: "Contact", href: "/contact" },
            ].map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-2 px-2 rounded-md hover:bg-gray-700 hover:text-emerald-400 transition"
                >
                  {item.name}
                </Link>
              </li>
            ))}

            <li>
              <Link
                href="/api/download-apk"
                onClick={() => setMenuOpen(false)}
                className="block text-center bg-emerald-500 hover:bg-emerald-600 text-gray-900 font-semibold py-2 rounded-md transition"
              >
                ⬇️ Download App
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
