"use client";

import Image from "next/image";
import { FaRocket, FaBriefcase, FaCode, FaClock } from "react-icons/fa";
import logo from "@/public/logo.png";
import { motion, Variants } from "framer-motion";

const points = [
  {
    title: "5+ Years Experience",
    desc: "We bring years of hands-on experience delivering real-world software products.",
    icon: FaBriefcase,
  },
  {
    title: "30+ Projects Delivered",
    desc: "From startups to enterprises, we’ve successfully completed 30+ projects.",
    icon: FaRocket,
  },
  {
    title: "Modern Tech Stack",
    desc: "We use Next.js, React, React Native, Node.js, AI, and cloud platforms.",
    icon: FaCode,
  },
  {
    title: "On-Time Delivery",
    desc: "We respect deadlines and deliver projects within committed timelines.",
    icon: FaClock,
  },
];

// Keep only y-axis slide animation
const cardVariants: Variants = {
  hidden: { y: 30 },
  visible: (custom: number) => ({
    y: 0,
    transition: {
      delay: custom * 0.15,
      duration: 0.4,
      type: "spring",
      stiffness: 100,
    },
  }),
};

export default function WhyUs() {
  return (
    <section className="relative py-16 sm:py-24 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* background glow */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-300/20 blur-3xl rounded-full" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-indigo-300/20 blur-3xl rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* heading */}
        <div className="flex flex-col md:flex-row items-center md:justify-center text-center md:text-center gap-4">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Why Choose
          </h2>

          <span className="inline-flex items-center">
            <Image
              src={logo}
              alt="JSDigitalLab"
              width={250}
              height={100}
              className="object-contain"
              priority
            />
          </span>
        </div>

        <p className="mt-6 max-w-2xl mx-auto text-center text-gray-600 text-lg">
          We combine experience, execution, and modern technology to build
          products that scale with your business.
        </p>

        {/* cards */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {points.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={cardVariants}
                className="group relative p-8 rounded-2xl bg-white/70 backdrop-blur-xl border border-white shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >
                {/* icon */}
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-blue-100 text-blue-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="text-xl font-semibold text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
