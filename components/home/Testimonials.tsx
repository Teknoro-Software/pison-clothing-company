"use client";

import { motion } from "framer-motion";

const testimonials = [
    {
        name: "Ahmed Khan",
        role: "Importer – UAE",
        text: "Consistent fabric quality and reliable shipments. A trusted partner for our textile imports.",
    },
    {
        name: "Sophia Müller",
        role: "Distributor – Germany",
        text: "Professional service and excellent export handling. Their fabrics meet high European standards.",
    },
    {
        name: "John Williams",
        role: "Retail Buyer – USA",
        text: "Premium quality textiles with smooth logistics and timely delivery every time.",
    },
    {
        name: "David Lee",
        role: "Wholesale Buyer – Singapore",
        text: "Great pricing, consistent supply, and strong communication throughout the process.",
    },
];

export default function Testimonials() {
    return (
        <section className="py-20 bg-gradient-to-r from-[#E1A49A]/50 via-transparent to-[#92333C]/20 overflow-hidden">

            {/* TITLE */}
            <div className="px-6 md:px-20 mb-12 text-center">
                <h2 className="text-3xl md:text-4xl font-semibold text-[#4E0714]">
                    Client Testimonials
                </h2>
                <p className="text-sm text-[#7A3F48] mt-2">
                    Trusted by global importers and distributors
                </p>
            </div>

            {/* SCROLL ROW */}
            <div className="relative">

                <motion.div
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        duration: 22,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="flex gap-6 w-max"
                >

                    {[...testimonials, ...testimonials].map((t, i) => (
                        <div
                            key={i}
                            className="min-w-[300px] bg-white border border-[#f1d6db] p-6 hover:border-[#781727] transition"
                        >

                            {/* TEXT */}
                            <p className="text-sm text-[#4E0714] leading-relaxed">
                                “{t.text}”
                            </p>

                            {/* USER */}
                            <div className="mt-5">
                                <h4 className="text-sm font-medium text-[#4E0714]">
                                    {t.name}
                                </h4>
                                <p className="text-xs text-[#7A3F48]">
                                    {t.role}
                                </p>
                            </div>

                        </div>
                    ))}

                </motion.div>

            </div>
        </section>
    );
}