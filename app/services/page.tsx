"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { services } from "@/data/services";
import { motion, Variants } from "framer-motion";
import CommonModal from "@/components/common/CommonModal";

// Card animation
const cardVariants: Variants = {
  hidden: { y: 40, opacity: 0 },
  visible: (custom: number | undefined = 0) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: (custom || 0) * 0.15,
      duration: 0.6,
      type: "spring",
      stiffness: 120,
    },
  }),
};

// Hero animation
const heroVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function ServicesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="w-full">
      <section className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white overflow-hidden py-32">
        {/* Background shapes */}
        <motion.div
          className="absolute top-0 left-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 right-1/3 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        {/* Hero content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={heroVariants}
          className="relative z-10 max-w-7xl mx-auto px-6 text-center"
        >
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            className="text-5xl md:text-6xl font-extrabold leading-tight"
          >
            Our Software Development Services
          </motion.h1>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-6 text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto"
          >
            End-to-end IT services tailored for startups and businesses.
          </motion.p>

          {/* CTA Button */}
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 10px 20px rgba(255,255,255,0.4)",
            }}
            onClick={() => setIsModalOpen(true)}
            className="mt-10 px-10 py-4 bg-white text-blue-700 font-semibold rounded-full shadow-lg transition"
          >
            {" Let's Connect"}
          </motion.button>

          {/* Modal */}
          {isModalOpen && (
            <CommonModal closeModal={() => setIsModalOpen(false)} />
          )}
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => {
            const Icon = service.iconComponent;

            return (
              <motion.div
                key={service.slug}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={cardVariants}
                className="relative group rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-transform duration-300 hover:-translate-y-2 bg-white border border-gray-200 flex flex-col"
              >
                {/* Image */}
                <div className="relative h-60 w-full">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Icon className="w-12 h-12 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-3 rounded-lg ${service.color} bg-opacity-20 flex items-center justify-center`}
                    >
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <h2 className="text-2xl font-semibold text-gray-900">
                      {service.title}
                    </h2>
                  </div>

                  <p className="mt-4 text-gray-600 flex-1">
                    {service.shortDescription}
                  </p>

                  {service.points && service.points.length > 0 && (
                    <ul className="mt-4 space-y-2 text-gray-700">
                      {service.points.map((point, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-blue-600 mt-1">✔</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  )}

                  <Link
                    href={`/services/${service.slug}`}
                    className="mt-6 inline-block text-blue-600 font-semibold hover:underline hover:translate-x-1 transition"
                  >
                    Learn More →
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
