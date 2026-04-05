"use client";

import { useCart } from "@/context/CartContext";
import { motion } from "framer-motion";
import { useState } from "react";

const products = [
  {
    id: 1,
    name: "Cotton Fabric Roll",
    price: "₹52,500 / roll",
    category: "Cotton",
    image: "/images/c1.webp",
  },
  {
    id: 2,
    name: "Silk Fabric",
    price: "₹45,200 / roll",
    category: "Silk",
    image: "/images/s1.webp",
  },
  {
    id: 3,
    name: "Denim Fabric",
    price: "₹63,100 / roll",
    category: "Denim",
    image: "/images/d1.jpg",
  },
  {
    id: 4,
    name: "Linen Fabric",
    price: "₹52,800 / roll",
    category: "Linen",
    image: "/images/l1.webp",
  },
  {
    id: 5,
    name: "Polyester Fabric",
    price: "₹61,900 / roll",
    category: "Polyester",
    image: "/images/p1.jpg",
  },
  
];

export default function ShopPage() {
  const { addToCart } = useCart();
  const [activeCategory, setActiveCategory] = useState("ALL");

  const categories = [
    "ALL",
    "Cotton",
    "Silk",
    "Denim",
    "Linen",
    "Polyester",
  ];

  const filteredProducts =
    activeCategory === "ALL"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <div className="bg-gradient-to-r from-[#E1A49A]/50 via-transparent to-[#92333C]/30 min-h-screen px-6 md:px-20 py-24">

      {/* HEADER */}
      <div className="mb-16">
        <h1 className="text-3xl md:text-4xl font-semibold text-[#4E0714]">
          Products
        </h1>
        <p className="text-xs text-[#7A3F48] mt-1">
          {filteredProducts.length} Items
        </p>
      </div>

      {/* FILTER */}
      <div className="flex gap-3 flex-wrap mb-12">
        {categories.map((item, i) => (
          <button
            key={i}
            onClick={() => setActiveCategory(item)}
            className={`px-4 py-2 text-sm border transition ${activeCategory === item
                ? "bg-[#781727] text-white border-[#781727]"
                : "border-[#e5c2c8] text-[#4E0714] hover:border-[#781727]"
              }`}
          >
            {item}
          </button>
        ))}
      </div>

      {/* GRID */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

        {filteredProducts.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.04 }}
            className="group"
          >

            {/* IMAGE */}
            <div className="bg-white border border-[#f1d6db] overflow-hidden">
              <img
                src={product.image}
                className="w-full h-[200px] object-cover group-hover:scale-105 transition duration-500"
              />
            </div>

            {/* TEXT */}
            <div className="mt-3">
              <p className="text-[10px] text-[#781727] uppercase">
                {product.category}
              </p>

              <h3 className="text-sm text-[#4E0714]">
                {product.name}
              </h3>

              <p className="text-sm text-[#4E0714] mt-1">
                {product.price}
              </p>
            </div>

            {/* BUTTON */}
            <button
              onClick={() =>
                addToCart({
                  id: product.id,
                  name: product.name,
                  price: Number(product.price.replace(/[^0-9]/g, "")),
                  image: product.image,
                })
              }
              className="mt-3 w-full bg-[#781727] text-white text-sm py-2 hover:bg-[#4E0714] transition"
            >
              Add to Inquiry
            </button>

          </motion.div>
        ))}

      </div>
    </div>
  );
}