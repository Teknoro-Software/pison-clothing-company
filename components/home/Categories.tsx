"use client";

import { motion } from "framer-motion";

const categories = [
    {
        name: "Cotton Fabrics",
        image: "/images/co1.jpg",
    },
    {
        name: "Silk Fabrics",
        image: "/images/s1.webp",
    },
    {
        name: "Denim Fabrics",
        image: "/images/d1.jpg",
    },
    {
        name: "Linen Fabrics",
        image: "/images/l1.webp",
    },
    {
        name: "Polyester",
        image: "/images/p1.jpg",
    },
    {
        name: "Bulk Export Orders",
        image: "/images/bulk.jpg",
    },
];

export default function Categories() {
    return (
        <section className="px-6 md:px-20 py-20 bg-gradient-to-r from-[#E1A49A]/50 via-transparent to-[#92333C]/20 -z-10">

            {/* TITLE */}
            <div className="mb-14">
                <h2 className="text-3xl md:text-4xl font-semibold text-[#4E0714]">
                    Textile Categories
                </h2>
                <p className="text-sm text-[#7A3F48] mt-2">
                    Export-quality fabrics tailored for global markets
                </p>
            </div>

            {/* GRID */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">

                {categories.map((cat, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.08 }}
                        viewport={{ once: true }}
                        className="group cursor-pointer"
                    >

                        {/* IMAGE */}
                        <div className="relative overflow-hidden rounded-md">

                            <img
                                src={cat.image}
                                className="w-full h-[220px] object-cover group-hover:scale-105 transition duration-500"
                            />

                            {/* OVERLAY */}
                            <div className="absolute inset-0 bg-[#4E0714]/50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-4">
                                <span className="text-white text-sm">
                                    View Products →
                                </span>
                            </div>

                        </div>

                        {/* TEXT */}
                        <h3 className="mt-3 text-[#4E0714] font-medium text-sm">
                            {cat.name}
                        </h3>

                    </motion.div>
                ))}

            </div>
        </section>
    );
}