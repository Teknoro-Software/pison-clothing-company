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
    image: "/images/export.jpg",
  },
  {
    title: "Bulk Orders",
    desc: "Large-scale textile supply for wholesalers, distributors, and retail chains.",
    icon: Package,
    image: "/images/bulk.jpg",
  },
  {
    title: "Global Shipping",
    desc: "Reliable international logistics ensuring timely and secure deliveries worldwide.",
    icon: Truck,
    image: "/images/shipping.jpg",
  },
  {
    title: "Quality Assurance",
    desc: "Strict quality checks to meet international textile standards.",
    icon: ShieldCheck,
    image: "/images/quality.jpg",
  },
  {
    title: "Direct Sourcing",
    desc: "Sourcing fabrics directly from trusted manufacturers for consistent quality.",
    icon: Leaf,
    image: "/images/fabric.jpg",
  },
  {
    title: "Storage & Distribution",
    desc: "Efficient warehousing and distribution systems for smooth operations.",
    icon: Warehouse,
    image: "/images/warehouse.png",
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-gradient-to-r from-[#E1A49A]/50 via-transparent to-[#92333C]/30 text-[#4E0714]">

      {/* 🔥 HERO */}
      <section className="relative h-[55vh] flex items-center px-6 md:px-20 text-white">

        <img
          src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=1400&auto=format&fit=crop"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative">
          <p className="text-sm text-white/70">Home / Services</p>
          <h1 className="text-4xl md:text-5xl font-semibold mt-2">
            Our Services
          </h1>
        </div>

      </section>

      {/* 💎 SERVICES GRID */}
      <section className="px-6 md:px-20 py-20">

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">

          {services.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              viewport={{ once: true }}
              className="bg-white border border-[#f1d6db] overflow-hidden hover:border-[#781727] transition"
            >

              {/* IMAGE */}
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  className="w-full h-40 object-cover hover:scale-105 transition duration-500"
                />
              </div>

              {/* CONTENT */}
              <div className="p-5">

                <div className="mb-3 text-[#781727]">
                  <item.icon className="w-5 h-5" />
                </div>

                <h3 className="text-lg font-medium text-[#4E0714]">
                  {item.title}
                </h3>

                <p className="text-sm text-[#7A3F48] mt-2">
                  {item.desc}
                </p>

                <button className="mt-4 text-[#781727] text-sm">
                  Learn More →
                </button>

              </div>

            </motion.div>
          ))}

        </div>
      </section>

      {/* 🌍 FEATURE SECTION */}
      <section className="px-6 md:px-20 pb-20 grid md:grid-cols-2 gap-12 items-center">

        <img
          src="/images/about.jpg"
          className="w-full h-[400px] object-cover rounded-md"
        />

        <div>
          <h2 className="text-3xl font-semibold text-[#4E0714]">
            Reliable Textile Supply for Global Markets
          </h2>

          <p className="mt-4 text-[#7A3F48] text-sm leading-relaxed">
            Pison Clothing Company provides premium fabrics and garments
            with reliable sourcing, strict quality control, and efficient
            global logistics. We partner with businesses worldwide to deliver
            consistent and high-quality textile solutions.
          </p>

          <button className="mt-6 bg-[#781727] text-white px-6 py-3 text-sm hover:bg-[#4E0714] transition">
            Contact Us
          </button>
        </div>

      </section>

      {/* 💼 TRUST STRIP */}
      <section className="px-6 md:px-20 pb-20 grid md:grid-cols-3 gap-6">

        {[
          "Premium Quality Fabrics",
          "Global Export Network",
          "Trusted by International Clients",
        ].map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.03 }}
            className={`p-8 text-center border ${i === 1
                ? "bg-[#781727] text-white"
                : "bg-white border-[#f1d6db]"
              }`}
          >
            <h3 className="font-medium">{item}</h3>
          </motion.div>
        ))}

      </section>

    </div>
  );
}