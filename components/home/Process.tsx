"use client";

import { motion } from "framer-motion";
import { Leaf, ShieldCheck, Truck } from "lucide-react";

const steps = [
    {
        title: "Fabric Sourcing",
        desc: "We source premium-quality fabrics directly from trusted manufacturers and mills.",
        icon: Leaf,
    },
    {
        title: "Quality Inspection",
        desc: "Each batch undergoes strict quality checks to meet international export standards.",
        icon: ShieldCheck,
    },
    {
        title: "Global Delivery",
        desc: "Efficient logistics and documentation ensure smooth delivery to global destinations.",
        icon: Truck,
    },
];

export default function Process() {
    return (
        <section className="px-6 md:px-20 py-20 bg-gradient-to-r from-[#E1A49A]/20 via-transparent to-[#92333C]/30 border-b-2 border-[#AC5B67]">

            {/* TITLE */}
            <div className="mb-16">
                <h2 className="text-3xl md:text-4xl font-semibold text-[#4E0714]">
                    Our Process
                </h2>
                <p className="text-sm text-[#7A3F48] mt-2">
                    From sourcing to global delivery with precision and quality
                </p>
            </div>

            {/* STEPS */}
            <div className="grid md:grid-cols-3 gap-10">

                {steps.map((step, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        viewport={{ once: true }}
                        className="relative"
                    >

                        {/* STEP NUMBER */}
                        <div className="text-xs text-[#781727] mb-3 tracking-widest">
                            STEP {i + 1}
                        </div>

                        {/* CARD */}
                        <div className="bg-white border border-[#f1d6db] p-6 hover:border-[#781727] transition">

                            {/* ICON */}
                            <div className="mb-4 text-[#781727]">
                                <step.icon className="w-6 h-6" />
                            </div>

                            {/* TITLE */}
                            <h3 className="text-lg font-medium text-[#4E0714]">
                                {step.title}
                            </h3>

                            {/* DESC */}
                            <p className="text-sm text-[#7A3F48] mt-2">
                                {step.desc}
                            </p>

                        </div>

                    </motion.div>
                ))}

            </div>
        </section>
    );
}