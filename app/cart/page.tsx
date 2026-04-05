"use client";

import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function CartPage() {
  const { cart, removeItem, updateQty } = useCart();
  const router = useRouter();

  const total = cart.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  return (
    <div className="bg-gradient-to-r from-[#E1A49A]/50 via-transparent to-[#92333C]/30 px-6 md:px-24 pt-28 pb-20">

      {/* HEADER */}
      <div className="mb-12 flex justify-between items-end">
        <h1 className="text-3xl md:text-4xl font-semibold text-[#30303A]">
          Your Materials
        </h1>

        <p className="text-sm text-[#676061]">
          {cart.length} items
        </p>
      </div>

      {/* EMPTY */}
      {cart.length === 0 ? (
        <div className="text-center mt-40">
          <p className="text-[#676061] mb-6">
            No materials added yet
          </p>

          <button
            onClick={() => router.push("/shop")}
            className="px-6 py-3 bg-[#526FAE] text-white text-sm hover:opacity-90 transition"
          >
            Browse Materials
          </button>
        </div>
      ) : (
        <div className="grid md:grid-cols-3 gap-16">

          {/* LEFT */}
          <div className="md:col-span-2 space-y-8">

            {cart.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.04 }}
                className="flex gap-6 items-center border-b border-gray-200 pb-6"
              >

                {/* IMAGE */}
                <img
                  src={item.image || "/images/fallback.jpg"}
                  onError={(e) => {
                    e.currentTarget.src = "/images/fallback.jpg";
                  }}
                  className="w-24 h-28 object-cover"
                />

                {/* DETAILS */}
                <div className="flex-1">

                  <h3 className="text-sm text-[#30303A] font-medium">
                    {item.name}
                  </h3>

                  <p className="text-[11px] text-[#676061] mt-1 uppercase">
                    Construction Material
                  </p>

                  <p className="text-sm mt-2">
                    ₹{item.price.toLocaleString()}
                  </p>

                  {/* QTY */}
                  <div className="flex items-center gap-4 mt-4">

                    <div className="flex items-center border border-gray-300">

                      <button
                        onClick={() => updateQty(item.id, "dec")}
                        className="px-3 py-1 hover:bg-gray-100"
                      >
                        −
                      </button>

                      <span className="px-4 text-sm">
                        {item.qty}
                      </span>

                      <button
                        onClick={() => updateQty(item.id, "inc")}
                        className="px-3 py-1 hover:bg-gray-100"
                      >
                        +
                      </button>

                    </div>

                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-xs text-[#676061] hover:text-black"
                    >
                      Remove
                    </button>

                  </div>

                </div>

                {/* PRICE */}
                <div className="text-sm font-medium text-[#30303A]">
                  ₹{(item.price * item.qty).toLocaleString()}
                </div>

              </motion.div>
            ))}

          </div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white border border-gray-200 p-8 h-fit"
          >

            <h3 className="text-sm tracking-wide mb-8 text-[#30303A]">
              Order Summary
            </h3>

            <div className="flex justify-between text-sm mb-4">
              <span className="text-[#676061]">Subtotal</span>
              <span>₹{total.toLocaleString()}</span>
            </div>

            <div className="flex justify-between text-sm mb-6">
              <span className="text-[#676061]">Delivery</span>
              <span>Free</span>
            </div>

            <div className="border-t border-gray-200 pt-4 flex justify-between text-sm mb-8">
              <span>Total</span>
              <span className="font-medium">
                ₹{total.toLocaleString()}
              </span>
            </div>

            <button
              onClick={() => router.push("/checkout")}
              className="w-full bg-[#30303A] text-white py-3 text-sm hover:bg-black transition"
            >
              Proceed to Checkout
            </button>

          </motion.div>

        </div>
      )}
    </div>
  );
}