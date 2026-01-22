"use client";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/dark-logo.png";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 relative z-10">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About */}
        <div>
          <Link href="/" className="flex items-center mb-4">
            <Image
              src={logo}
              alt="JSDigitalLab Logo"
              width={150}
              height={100}
            />
          </Link>
          <p className="text-gray-400 text-sm">
            We build modern, scalable, and innovative digital products. Web,
            mobile, and AI solutions for startups and enterprises.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/services" className="hover:text-white transition">
                Services
              </Link>
            </li>
            <li>
              <Link href="/portfolio" className="hover:text-white transition">
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-white transition">
                About
              </Link>
            </li>
            <li>
              <Link href="/TechStack" className="hover:text-white transition">
                Tech Stack
              </Link>
            </li>

            <li>
              <Link href="/contact" className="hover:text-white transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contact Us</h3>
          <p className="text-gray-400 text-sm">
            Email:{" "}
            <a href="mailto:raijatin62@gmail.com" className="hover:text-white">
              raijatin62@gmail.com
            </a>
          </p>
          <p className="text-gray-400 text-sm mt-2">
            Phone:{" "}
            <a href="tel:+918860483417" className="hover:text-white">
              +91 88604 83417
            </a>
          </p>
          <p className="text-gray-400 text-sm mt-2">
            Address: 123 Digital Lane, India
          </p>
        </div>

        {/* Social & Newsletter */}
        <div>
          <h3 className="text-white font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4 mb-6">
            <a href="#" className="hover:text-white transition">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-white transition">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-white transition">
              <FaLinkedinIn />
            </a>
            <a href="#" className="hover:text-white transition">
              <FaInstagram />
            </a>
          </div>

          <h3 className="text-white font-semibold mb-2">Subscribe</h3>
          <p className="text-gray-400 text-sm mb-2">
            Get the latest updates and offers.
          </p>
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 rounded-lg border border-gray-700 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-800 py-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} JSDigitalLab. All rights reserved.
      </div>
    </footer>
  );
}
