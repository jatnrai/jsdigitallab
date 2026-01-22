"use client";
import { useState } from "react";

export default function CTA() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative py-28 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Background glow */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-indigo-300/20 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-semibold text-sm mb-6">
          Start Your Project
        </span>

        {/* Heading */}
        <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
          Build Digital Products
          <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            That Scale With You
          </span>
        </h2>

        {/* Description */}
        <p className="mt-6 text-gray-600 text-lg md:text-xl max-w-3xl mx-auto">
          JSDigitalLab helps startups and businesses build fast, scalable, and
          production-ready web, mobile, and AI solutions.
        </p>

        {/* Feature Cards */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {/* Card 1 */}
          <div className="rounded-2xl bg-white/70 backdrop-blur-xl border border-white shadow-lg p-6 hover:shadow-2xl transition">
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-100 text-blue-600 mb-4 mx-auto">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900">
              Fast Execution
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              Rapid development cycles with production-ready quality.
            </p>
          </div>

          {/* Card 2 */}
          <div className="rounded-2xl bg-white/70 backdrop-blur-xl border border-white shadow-lg p-6 hover:shadow-2xl transition">
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-indigo-100 text-indigo-600 mb-4 mx-auto">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900">
              Custom Solutions
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              Tailored products aligned with your business goals.
            </p>
          </div>

          {/* Card 3 */}
          <div className="rounded-2xl bg-white/70 backdrop-blur-xl border border-white shadow-lg p-6 hover:shadow-2xl transition">
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-purple-100 text-purple-600 mb-4 mx-auto">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 7a4 4 0 01-8 0M12 14v7m-6 0h12"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Expert Team</h3>
            <p className="mt-2 text-sm text-gray-600">
              Senior developers with real-world project experience.
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="mt-16 inline-flex items-center gap-3
                     bg-gradient-to-r from-blue-600 to-indigo-600
                     text-white font-semibold px-14 py-4 rounded-2xl
                     shadow-xl hover:shadow-2xl hover:scale-105
                     transition-all"
        >
          Let’s Connect
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13 7l5 5-5 5M6 12h12"
            />
          </svg>
        </button>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white rounded-3xl w-full max-w-md p-8 relative shadow-2xl">
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-300 hover:text-white text-xl"
            >
              ✕
            </button>

            {/* Logo + Title */}
            <div className="flex items-center gap-3 mb-6">
              <h2 className="text-2xl font-bold">Contact Us</h2>
            </div>

            <p className="text-gray-300 mb-6">
              Fill out the form and we will get back to you shortly.
            </p>

            {/* Form */}
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
