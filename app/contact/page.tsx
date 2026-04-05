"use client";

import { motion } from "framer-motion";
import { MapPin, Mail, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="bg-[#F5F5F5] px-6 md:px-24 pt-24 pb-20">

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-medium text-[#30303A] leading-tight">
          Let’s Discuss Your{" "}
          <span className="text-[#AC5B67]">Construction Needs</span>
        </h1>

        <p className="mt-6 text-[#676061] text-base">
          Need M-Sand, tiles, gravel, marble, or bricks?
          Contact us for bulk supply and reliable delivery.
        </p>
      </motion.div>

      {/* MAIN */}
      <div className="grid md:grid-cols-2 gap-16 items-start">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-10"
        >

          {/* LOCATION */}
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-md bg-[#AC5B67]/10 flex items-center justify-center">
              <MapPin className="w-5 h-5 text-[#AC5B67]" />
            </div>
            <div>
              <h4 className="font-medium text-[#30303A]">
                Location
              </h4>
              <p className="text-[#676061] text-sm mt-1">
                Kerala, India
              </p>
            </div>
          </div>

          {/* EMAIL */}
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-md bg-[#AC5B67]/10 flex items-center justify-center">
              <Mail className="w-5 h-5 text-[#AC5B67]" />
            </div>
            <div>
              <h4 className="font-medium text-[#30303A]">
                Email
              </h4>
              <p className="text-[#676061] text-sm mt-1">
                support@globaltraders.com
              </p>
            </div>
          </div>

          {/* PHONE */}
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-md bg-[#AC5B67]/10 flex items-center justify-center">
              <Phone className="w-5 h-5 text-[#AC5B67]" />
            </div>
            <div>
              <h4 className="font-medium text-[#30303A]">
                Phone
              </h4>
              <p className="text-[#676061] text-sm mt-1">
                +91 9544250000
              </p>
            </div>
          </div>

          {/* INFO BOX */}
          <div className="bg-white p-6 border border-gray-200">
            <p className="text-sm text-[#676061]">
              We respond quickly to all construction material inquiries and bulk orders.
            </p>
          </div>

        </motion.div>

        {/* RIGHT - FORM */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white p-8 border border-gray-200"
        >

          <h2 className="text-xl font-medium text-[#30303A] mb-6">
            Request a Quote
          </h2>

          <form className="space-y-5">

            {/* NAME */}
            <div className="grid grid-cols-2 gap-4">
              <input className="input4" placeholder="First Name" />
              <input className="input4" placeholder="Last Name" />
            </div>

            {/* EMAIL + PHONE */}
            <div className="grid grid-cols-2 gap-4">
              <input className="input4" placeholder="Email" />
              <input className="input4" placeholder="Phone" />
            </div>

            {/* MESSAGE */}
            <textarea
              rows={5}
              className="input4 resize-none"
              placeholder="Enter required materials and quantity..."
            />

            {/* BUTTON */}
            <button className="w-full bg-[#30303A] text-white py-3 text-sm hover:bg-black transition">
              Send Request
            </button>

          </form>

        </motion.div>

      </div>
    </div>
  );
}