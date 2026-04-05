/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useState } from "react";

export default function CheckoutPage() {
    const { cart } = useCart();
    const router = useRouter();

    const total = cart.reduce(
        (acc, item) => acc + item.price * item.qty,
        0
    );

    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        address: "",
        city: "",
        state: "",
        pin: "",
        phone: "",
        email: "",
    });

    const [errors, setErrors] = useState<any>({});

    const handleChange = (e: any) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const validate = () => {
        const newErrors: any = {};

        Object.keys(form).forEach((key) => {
            if (!form[key as keyof typeof form]) {
                newErrors[key] = "Required";
            }
        });

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = () => {
        if (!validate()) return;

        localStorage.setItem("quoteRequest", JSON.stringify({ cart, form }));
        localStorage.removeItem("cart");

        router.push("/success");
    };

    return (
        <div className="bg-gradient-to-r from-[#E1A49A]/20 via-transparent to-[#92333C]/30 px-6 md:px-24 pt-28 pb-20">

            {/* HEADER */}
            <div className="mb-10">
                <h1 className="text-3xl font-semibold text-[#30303A]">
                    Request a Quote
                </h1>
            </div>

            {cart.length === 0 ? (
                <div className="text-center mt-40">
                    <p className="text-[#676061] mb-4">
                        No materials selected
                    </p>

                    <button
                        onClick={() => router.push("/shop")}
                        className="bg-[#526FAE] text-white px-6 py-3 text-sm"
                    >
                        Browse Materials
                    </button>
                </div>
            ) : (
                <div className="grid md:grid-cols-2 gap-16">

                    {/* LEFT */}
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>

                        <h2 className="text-sm mb-6 text-[#676061]">
                            Delivery Details
                        </h2>

                        <form className="space-y-4 bg-white border border-gray-200 p-6">

                            {/* NAME */}
                            <div className="grid grid-cols-2 gap-4">
                                {["firstName", "lastName"].map((field) => (
                                    <div key={field}>
                                        <input
                                            name={field}
                                            value={form[field as keyof typeof form]}
                                            onChange={handleChange}
                                            placeholder={
                                                field === "firstName" ? "First Name" : "Last Name"
                                            }
                                            className={`input4 ${errors[field] && "border-red-500"}`}
                                        />
                                        {errors[field] && (
                                            <p className="text-xs text-red-500 mt-1">
                                                {errors[field]}
                                            </p>
                                        )}
                                    </div>
                                ))}
                            </div>

                            {/* ADDRESS */}
                            <input
                                name="address"
                                value={form.address}
                                onChange={handleChange}
                                placeholder="Project Location"
                                className={`input4 ${errors.address && "border-red-500"}`}
                            />

                            {/* CITY */}
                            <div className="grid grid-cols-3 gap-4">
                                {["city", "state", "pin"].map((field) => (
                                    <div key={field}>
                                        <input
                                            name={field}
                                            value={form[field as keyof typeof form]}
                                            onChange={handleChange}
                                            placeholder={
                                                field === "pin"
                                                    ? "PIN Code"
                                                    : field.charAt(0).toUpperCase() + field.slice(1)
                                            }
                                            className={`input4 ${errors[field] && "border-red-500"}`}
                                        />
                                        {errors[field] && (
                                            <p className="text-xs text-red-500 mt-1">
                                                {errors[field]}
                                            </p>
                                        )}
                                    </div>
                                ))}
                            </div>

                            {/* PHONE */}
                            <input
                                name="phone"
                                value={form.phone}
                                onChange={handleChange}
                                placeholder="Phone"
                                className={`input4 ${errors.phone && "border-red-500"}`}
                            />

                            {/* EMAIL */}
                            <input
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                placeholder="Email"
                                className={`input4 ${errors.email && "border-red-500"}`}
                            />

                            <textarea
                                rows={4}
                                placeholder="Additional requirements (optional)"
                                className="input4"
                            />

                        </form>
                    </motion.div>

                    {/* RIGHT */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="bg-white border border-gray-200 p-8 h-fit"
                    >

                        <h2 className="text-sm mb-6 text-[#30303A]">
                            Selected Materials
                        </h2>

                        {/* ITEMS */}
                        <div className="space-y-3 mb-6">
                            {cart.map((item) => (
                                <div key={item.id} className="flex justify-between text-sm">
                                    <span className="text-[#676061]">
                                        {item.name} × {item.qty}
                                    </span>
                                    <span>
                                        ₹{(item.price * item.qty).toLocaleString()}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* TOTAL */}
                        <div className="flex justify-between border-t pt-4 mb-8 text-sm">
                            <span>Total Estimate</span>
                            <span className="font-medium">
                                ₹{total.toLocaleString()}
                            </span>
                        </div>

                        {/* BUTTON */}
                        <button
                            onClick={handleSubmit}
                            className="w-full bg-[#30303A] text-white py-3 text-sm hover:bg-black transition"
                        >
                            Submit Request
                        </button>

                    </motion.div>

                </div>
            )}
        </div>
    );
}