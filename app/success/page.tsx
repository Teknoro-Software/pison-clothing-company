"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useState } from "react";
import { Check } from "lucide-react";

export default function SuccessPage() {
    const router = useRouter();

    // ✅ Safe ID generation
    const [requestId] = useState(() =>
        Math.floor(100000 + Math.random() * 900000)
    );

    return (
        <div className="bg-gradient-to-r from-[#E1A49A]/50 via-transparent to-[#92333C]/30 min-h-screen flex items-center justify-center px-6">

            <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="text-center max-w-md w-full bg-gradient-to-r from-[#E1A49A]/50 via-transparent to-[#92333C]/30 border border-gray-200 p-10"
            >

                {/* ICON */}
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring" }}
                    className="w-16 h-16 mx-auto mb-8 rounded-full bg-[#526FAE]/30 flex items-center justify-center"
                >
                    <Check className="w-7 h-7 text-[#526FAE]" />
                </motion.div>

                {/* TITLE */}
                <h1 className="text-2xl font-semibold text-[#30303A]">
                    Request Submitted
                </h1>

                {/* SUBTEXT */}
                <p className="text-sm text-[#676061] mt-3 leading-relaxed">
                    Your material request has been received.
                    Our team will contact you shortly with pricing and delivery details.
                </p>

                {/* REQUEST ID */}
                <div className="mt-8 text-sm text-[#676061]">
                    Request ID:
                    <span className="ml-2 text-[#30303A] font-medium">
                        #{requestId}
                    </span>
                </div>

                {/* DIVIDER */}
                <div className="h-px bg-gray-200 my-10"></div>

                {/* ACTIONS */}
                <div className="space-y-3">

                    <button
                        onClick={() => router.push("/shop")}
                        className="w-full bg-[#30303A] text-white py-3 text-sm hover:bg-black transition"
                    >
                        Browse More Materials
                    </button>

                    <button
                        onClick={() => router.push("/")}
                        className="w-full text-sm text-[#676061] hover:text-[#30303A] transition"
                    >
                        Back to Home
                    </button>

                </div>

            </motion.div>
        </div>
    );
}