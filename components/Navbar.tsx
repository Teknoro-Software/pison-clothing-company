"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { ShoppingCart, Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Products", href: "/shop" },
    { name: "Contact", href: "/contact" },
];

export default function Navbar() {
    const pathname = usePathname();
    const router = useRouter();
    const { cart } = useCart();
    const [open, setOpen] = useState(false);

    return (
        <nav className="fixed top-0 w-full z-50 bg-[#4E0714]/90 backdrop-blur-md border-b border-white/10">

            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

                {/* LOGO */}
                <h1 className="text-lg md:text-xl font-semibold text-white tracking-wide">
                    Pison Clothing
                </h1>

                {/* DESKTOP MENU */}
                <div className="hidden md:flex gap-10 text-sm text-[#E2B3C2]">

                    {links.map((link) => {
                        const active = pathname === link.href;

                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`relative transition ${active
                                        ? "text-white"
                                        : "hover:text-white"
                                    }`}
                            >
                                {link.name}

                                {/* UNDERLINE */}
                                {active && (
                                    <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-[#E2B3C2]" />
                                )}
                            </Link>
                        );
                    })}

                </div>

                {/* RIGHT */}
                <div className="flex items-center gap-5">

                    {/* CART */}
                    <div
                        onClick={() => router.push("/cart")}
                        className="relative cursor-pointer"
                    >
                        <ShoppingCart className="w-5 h-5 text-white" />

                        {cart.length > 0 && (
                            <span className="absolute -top-2 -right-2 bg-[#781727] text-white text-xs px-1.5 rounded-full">
                                {cart.length}
                            </span>
                        )}
                    </div>

                    {/* CTA */}
                    <button
                        onClick={() => router.push("/contact")}
                        className="hidden md:block bg-[#781727] text-white px-4 py-2 text-sm hover:bg-[#4E0714] transition"
                    >
                        Request Quote
                    </button>

                    {/* MOBILE BUTTON */}
                    <button onClick={() => setOpen(!open)} className="md:hidden">
                        {open ? (
                            <X className="text-white" />
                        ) : (
                            <Menu className="text-white" />
                        )}
                    </button>

                </div>
            </div>

            {/* MOBILE MENU */}
            {open && (
                <div className="md:hidden bg-[#4E0714] border-t border-white/10 p-6 flex flex-col gap-6 text-sm text-[#E2B3C2]">

                    {links.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={() => setOpen(false)}
                            className="hover:text-white"
                        >
                            {link.name}
                        </Link>
                    ))}

                    {/* MOBILE CTA */}
                    <button
                        onClick={() => {
                            router.push("/contact");
                            setOpen(false);
                        }}
                        className="mt-4 bg-[#781727] text-white py-3"
                    >
                        Request Quote
                    </button>

                </div>
            )}
        </nav>
    );
}