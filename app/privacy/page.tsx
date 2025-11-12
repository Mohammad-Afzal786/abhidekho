"use client";

import React from "react";
import SEOHead from "../components/SEOHead";

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* SEO */}
      <SEOHead
        title="AbhiDekho - Privacy Policy"
        description="Learn how AbhiDekho collects, uses, and protects your personal information. Stay informed about our data privacy and security practices."
        url="https://abhidekho.online/privacy"
        image="https://abhidekho.online/og-image.jpg"
      />

      <div className="flex flex-col min-h-screen font-sans bg-gray-900 text-white">

        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center text-center px-6 py-20 relative overflow-hidden bg-gray-900">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight text-emerald-400 animate-fadeIn">
            AbhiDekho - Privacy Policy
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10 animate-fadeIn delay-200">
            Your privacy matters to us. Learn how <span className="text-emerald-400 font-semibold">AbhiDekho</span> collects, uses, and safeguards your personal data.
          </p>
        </section>

        {/* Content Section */}
        <section className="py-16 px-6 max-w-4xl mx-auto">
          <div className="space-y-10">
            {/* Information Collection */}
            <div>
              <h3 className="text-2xl font-bold mb-4 text-emerald-400">Information We Collect</h3>
              <p className="text-gray-300">
                We may collect personal details such as your name, phone number, travel preferences when you use our app to book rides or buses.
              </p>
            </div>

            {/* Use of Information */}
            <div>
              <h3 className="text-2xl font-bold mb-4 text-emerald-400">How We Use Information</h3>
              <p className="text-gray-300">
                We use your data to process bookings, provide customer support, send confirmations, improve our services, and ensure a smooth and secure booking experience.
              </p>
            </div>

            {/* Data Sharing */}
            <div>
              <h3 className="text-2xl font-bold mb-4 text-emerald-400">Data Sharing</h3>
              <p className="text-gray-300">
                We do not sell your personal data. Your information may be shared with trusted partners such as drivers,  only when required to complete your booking.
              </p>
            </div>

            {/* Security */}
            <div>
              <h3 className="text-2xl font-bold mb-4 text-emerald-400">Data Security</h3>
              <p className="text-gray-300">
                AbhiDekho uses industry-standard encryption and safety protocols to protect your data. However, please note that no system is entirely immune to security risks.
              </p>
            </div>

            {/* Your Rights */}
            <div>
              <h3 className="text-2xl font-bold mb-4 text-emerald-400">Your Rights</h3>
              <p className="text-gray-300">
                You can request to access, update, or delete your personal data by contacting our support team. You may also opt out of receiving promotional messages anytime.
              </p>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-2xl font-bold mb-4 text-emerald-400">Contact Us</h3>
              <p className="text-gray-300">
                For any questions about our privacy policy or data practices, please reach out to us at{" "}
                <a href="mailto:contact@abhidekho.online" className="text-emerald-400 underline">
                  contact@abhidekho.online
                </a>.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
