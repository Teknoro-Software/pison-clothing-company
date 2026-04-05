"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useRouter } from "next/navigation";

export default function Hero() {
    const router = useRouter();
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, -120]);

    return (
        <section ref={ref} className="relative h-screen overflow-hidden">

            {/* PARALLAX BG */}
            <motion.img
                style={{ y }}
                src="https://images.unsplash.com/photo-1603252109303-2751441dd157?q=80&w=1600&auto=format&fit=crop"
                className="absolute inset-0 w-full h-[120%] object-cover"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-[#4E0714]/70 to-black/90" />

            {/* CONTENT */}
            <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">

                {/* BRAND */}
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-xs tracking-[0.35em] text-[#E2B3C2] mb-4"
                >
                    PISON CLOTHING COMPANY
                </motion.p>

                {/* TITLE */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-6xl lg:text-7xl font-semibold text-white leading-tight max-w-4xl"
                >
                    Global Textile <br />
                    Import & Export
                </motion.h1>

                {/* TEXT */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-6 text-gray-300 max-w-xl text-sm md:text-base leading-relaxed"
                >
                    Supplying premium fabrics and garments to international markets
                    with reliable sourcing, quality assurance, and seamless logistics.
                </motion.p>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-10 flex flex-col sm:flex-row gap-4"
                >
                    <button
                        onClick={() => router.push("/shop")}
                        className="bg-[#781727] px-8 py-3 text-white text-sm hover:scale-[1.03] active:scale-[0.97] transition"
                    >
                        View Products
                    </button>

                    <button
                        onClick={() => router.push("/contact")}
                        className="border border-white px-8 py-3 text-white text-sm hover:bg-white hover:text-black transition"
                    >
                        Request Quote
                    </button>
                </motion.div>

            </div>

            {/* STATS BAR */}
            <div className="absolute bottom-0 left-0 w-full bg-black/40 backdrop-blur-md border-t border-white/10">

                <div className="grid grid-cols-3 text-center py-6 text-white">

                    <div>
                        <p className="text-2xl font-semibold">50+</p>
                        <p className="text-xs text-gray-300 mt-1">Global Clients</p>
                    </div>

                    <div>
                        <p className="text-2xl font-semibold">20+</p>
                        <p className="text-xs text-gray-300 mt-1">Countries Served</p>
                    </div>

                    <div>
                        <p className="text-2xl font-semibold">100%</p>
                        <p className="text-xs text-gray-300 mt-1">Quality Assurance</p>
                    </div>

                </div>

            </div>

        </section>
    );
}