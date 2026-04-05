"use client";

import { motion } from "framer-motion";

export default function About() {
    return (
        <section className="px-6 md:px-20 py-20 bg-gradient-to-r from-[#E1A49A]/50 via-transparent to-[#92333C]/20 border-b-2 border-[#AC5B67]">

            <div className="grid md:grid-cols-2 gap-16 items-center">

                {/* IMAGE */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="relative"
                >
                    <img
                        src="/images/about.jpg"
                        className="w-full h-[420px] object-cover rounded-md"
                    />

                    {/* FLOAT CARD */}
                    <div className="absolute bottom-6 left-6 bg-white px-5 py-3 shadow text-sm">
                        Trusted Textile Export Partner
                    </div>
                </motion.div>

                {/* CONTENT */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >

                    {/* BADGE */}
                    <p className="text-xs tracking-widest text-[#781727] mb-4">
                        ABOUT US
                    </p>

                    {/* TITLE */}
                    <h2 className="text-3xl md:text-4xl font-semibold text-[#4E0714] leading-snug">
                        Connecting Global Markets <br />
                        With Premium Textiles
                    </h2>

                    {/* TEXT */}
                    <p className="mt-5 text-[#7A3F48] text-sm md:text-base leading-relaxed max-w-md">
                        Pison Clothing Company specializes in importing and exporting
                        high-quality fabrics and garments across international markets.
                        We work closely with trusted manufacturers and global partners
                        to ensure consistent quality, competitive pricing, and reliable delivery.
                    </p>

                    {/* FEATURES */}
                    <div className="mt-6 space-y-3 text-sm text-[#4E0714]">
                        <div>✔ Premium fabric sourcing</div>
                        <div>✔ Global export network</div>
                        <div>✔ Reliable logistics & delivery</div>
                    </div>

                    {/* STATS */}
                    <div className="grid grid-cols-3 gap-6 mt-10">

                        <div className="text-center">
                            <h3 className="text-xl font-semibold text-[#781727]">50+</h3>
                            <p className="text-xs text-[#7A3F48]">Clients</p>
                        </div>

                        <div className="text-center">
                            <h3 className="text-xl font-semibold text-[#781727]">20+</h3>
                            <p className="text-xs text-[#7A3F48]">Countries</p>
                        </div>

                        <div className="text-center">
                            <h3 className="text-xl font-semibold text-[#781727]">100%</h3>
                            <p className="text-xs text-[#7A3F48]">Quality</p>
                        </div>

                    </div>

                    {/* CTA */}
                    <button className="mt-8 bg-[#781727] text-white px-6 py-3 text-sm hover:bg-[#4E0714] transition">
                        Learn More
                    </button>

                </motion.div>
            </div>
        </section>
    );
}