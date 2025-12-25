"use client";

import React from "react";
import SEOHead from "../components/SEOHead";
import Link from "next/link";
import Image from "next/image";

export default function PartnerDownloadPage() {
    return (
        <>
            <SEOHead
                title="AbhiDekho Partner - Download App"
                description="AbhiDekho Partner App — Manage trips, accept bookings, track earnings, and grow your business. Download the official AbhiDekho Partner app today."
                url="https://abhidekho.online/partner"
                image="https://abhidekho.online/og-partner.jpg"
            />

            <main className="flex flex-col min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black text-white font-sans">
                {/* 🌟 Hero Section */}
                <section className="relative flex flex-col items-center justify-center text-center py-20 px-6 overflow-hidden">
                    {/* glowing background */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,197,94,0.15),transparent_50%),radial-gradient(circle_at_80%_80%,rgba(79,70,229,0.15),transparent_50%)] blur-3xl"></div>


                    <h2 className="z-10 text-3xl sm:text-4xl font-bold mb-6 text-gray-200 animate-fadeIn delay-100">
                        Partner App Download
                    </h2>
                    <p className="z-10 text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-8 animate-fadeIn delay-200">
                        Join AbhiDekho as a Partner. Accept bookings, manage trips, track earnings,
                        and grow your car or bus business — all from one powerful app.
                    </p>

                    <Link
                        href="/partnerapi/download-apk"
                        className="z-10 px-10 py-4 bg-emerald-400 text-gray-900 font-semibold rounded-full shadow-lg hover:scale-105 transition-transform hover:bg-emerald-500"
                    >
                        ⬇️ Download Partner APK
                    </Link>

                    <p className="z-10 mt-4 text-sm text-gray-500">
                        Android Only • Version 1.0.0
                    </p>
                </section>

                {/* ✨ Features */}
                <section id="features" className="py-20 px-6 text-center relative">
                    <h2 className="text-4xl font-bold text-white mb-12">
                        Why become an <span className="text-emerald-400">AbhiDekho Partner?</span>
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
                        {[
                            {
                                icon: "📋",
                                title: "Manage Bookings",
                                desc: "View and manage customer bookings in real time.",
                            },
                            {
                                icon: "💰",
                                title: "Track Earnings",
                                desc: "Transparent earnings dashboard with trip-wise income.",
                            },
                            {
                                icon: "🚌",
                                title: "Car & Bus Support",
                                desc: "Operate cars, buses, or both from one partner app.",
                            },
                            {
                                icon: "🔔",
                                title: "Instant Notifications",
                                desc: "Get real-time alerts for new bookings, trip updates & payments.",
                            }, ,
                             
                        ].map((f, i) => (
                            <div
                                key={i}
                                className="p-8 bg-gray-800/60 backdrop-blur-lg rounded-3xl shadow-xl hover:shadow-emerald-500/20 transition hover:-translate-y-2 duration-300"
                            >
                                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-gradient-to-r from-emerald-400 to-indigo-500 text-white text-3xl shadow-lg">
                                    {f.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-2">
                                    {f.title}
                                </h3>
                                <p className="text-gray-300 text-sm">{f.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 📱 CTA Section */}
                <section className="py-20 text-center bg-gray-900/80 backdrop-blur-xl border-t border-gray-800 relative">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-4xl font-bold text-white mb-6">
                            Start earning with AbhiDekho
                        </h2>
                        <p className="text-gray-400 mb-10 text-lg">
                            Download the <span className="text-emerald-400 font-semibold">AbhiDekho Partner</span> app
                            and grow your transport business today.
                        </p>
                        <Link
                            href="/partnerapi/download-apk"
                            className="px-10 py-4 bg-emerald-400 text-gray-900 font-bold rounded-full shadow-lg hover:bg-emerald-500 hover:scale-105 transition-transform"
                        >
                            🚀 Download Partner App
                        </Link>
                    </div>
                </section>
            </main>
        </>
    );
}
