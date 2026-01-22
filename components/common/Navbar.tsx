"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import logo from "@/public/logo.png";

export default function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white shadow">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src={logo}
              alt="JSDigitalLab Logo"
              width={180}
              height={100}
              className="rounded-lg"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6 font-medium">
            <Link
              href="/services"
              className="text-gray-800 hover:text-blue-600 transition"
            >
              Services
            </Link>
            <Link
              href="/portfolio"
              className="text-gray-800 hover:text-blue-600 transition"
            >
              Portfolio
            </Link>
            <Link
              href="/about"
              className="text-gray-800 hover:text-blue-600 transition"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-gray-800 hover:text-blue-600 transition"
            >
              Contact
            </Link>
            <button
              onClick={() => setIsModalOpen(true)}
              className="ml-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              {"Let's Connect"}
            </button>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-900 focus:outline-none"
            >
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
                  d={
                    isMobileMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white shadow-lg border-t border-gray-200">
            <div className="flex flex-col px-6 py-4 space-y-4">
              <Link
                href="/services"
                className="text-gray-700 hover:text-blue-600 font-medium transition"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/portfolio"
                className="text-gray-700 hover:text-blue-600 font-medium transition"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Portfolio
              </Link>
              <Link
                href="/about"
                className="text-gray-700 hover:text-blue-600 font-medium transition"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-gray-700 hover:text-blue-600 font-medium transition"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>

              {/* Mobile Connect Button */}
              <button
                onClick={() => {
                  setIsModalOpen(true);
                  setIsMobileMenuOpen(false);
                }}
                className="mt-2 w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                {"Let's Connect"}
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Contact Modal */}
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
              <Image
                src={logo}
                alt="JSDigitalLab Logo"
                width={40}
                height={40}
              />
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
    </>
  );
}
