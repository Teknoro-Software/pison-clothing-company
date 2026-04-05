"use client";

import { motion } from "framer-motion";
import {
    Globe,
    Package,
    Truck,
    ShieldCheck,
    Leaf,
    Warehouse,
} from "lucide-react";

const services = [
    {
        title: "Textile Export",
        desc: "Exporting premium fabrics and garments to global markets including UAE, Europe, and USA.",
        icon: Globe,
    },
    {
        title: "Bulk Orders",
        desc: "Large-scale textile supply tailored for wholesalers, distributors, and retail chains.",
        icon: Package,
    },
    {
        title: "Global Shipping",
        desc: "Efficient logistics and international shipping ensuring timely delivery worldwide.",
        icon: Truck,
    },
];

export default function Services() {
    return (
        <div className="border-2 border-[#AC5B67]"> 
            <section className="px-6 md:px-20 py-20 bg-gradient-to-r from-[#E1A49A]/20 via-transparent to-[#92333C]/30">

            {/* TITLE */}
            <div className="mb-14">
                <h2 className="text-3xl md:text-4xl font-semibold text-[#4E0714]">
                    Our Services
                </h2>
                <p className="text-sm text-[#7A3F48] mt-2">
                    End-to-end textile export solutions for global businesses
                </p>
            </div>

            {/* GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

                {services.map((service, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.08 }}
                        viewport={{ once: true }}
                        className="group"
                    >

                        {/* CARD */}
                        <div className="bg-white border border-[#f1d6db] p-6 hover:border-[#781727] transition">

                            {/* ICON */}
                            <div className="mb-4 text-[#781727]">
                                <service.icon className="w-6 h-6" />
                            </div>

                            {/* TITLE */}
                            <h3 className="text-lg font-medium text-[#4E0714]">
                                {service.title}
                            </h3>

                            {/* DESC */}
                            <p className="text-sm text-[#7A3F48] mt-2 leading-relaxed">
                                {service.desc}
                            </p>

                            {/* CTA */}
                            <button className="mt-4 text-[#781727] text-sm font-medium">
                                Learn More →
                            </button>

                        </div>

                    </motion.div>
                ))}

            </div>
        </section>
        </div>
    );
}