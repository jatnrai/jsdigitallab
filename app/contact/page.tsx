"use client";

import { useState } from "react";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import CommonModal from "@/components/common/CommonModal";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thanks! Your message has been sent.");
    setFormData({ name: "", email: "", message: "" });
    setIsModalOpen(false); // close modal if open
  };

  return (
    <section className="bg-gray-50">
      {/* Top CTA Section */}
      <div className="py-20 bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-center rounded-b-3xl shadow-lg mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Get a Free Quotation from Our Experts
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl">
          Share your project idea with{" "}
          <span className="font-semibold">JSDigitalLab</span> and our experts
          will provide a detailed, free quotation. {"Let's"} turn your vision
          into reality!
        </p>
        <button
          onClick={() => setIsModalOpen(true)}
          className="mt-8 px-10 py-4 bg-white text-blue-600 font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition transform"
        >
          Request Now
        </button>
      </div>

      {/* Contact Form + Info */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-12 items-start">
        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-10 rounded-3xl shadow-2xl space-y-6"
        >
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            Send Us a Message
          </h2>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-5 py-3 border border-gray-300 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition shadow-sm"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-5 py-3 border border-gray-300 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition shadow-sm"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows={6}
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full px-5 py-3 border border-gray-300 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition shadow-sm"
          ></textarea>

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-xl shadow-lg hover:scale-105 transition transform"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info Cards */}
        <div className="space-y-6 my-auto">
          <div className="bg-white/40 backdrop-blur-xl p-6 rounded-3xl shadow-lg hover:shadow-2xl transition flex items-center gap-4">
            <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-tr from-blue-400 to-blue-600 text-white rounded-full shadow-lg text-2xl">
              <FaEnvelope />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Email</h3>
              <p className="text-gray-700">contact@jsdigitallab.com</p>
            </div>
          </div>

          <div className="bg-white/40 backdrop-blur-xl p-6 rounded-3xl shadow-lg hover:shadow-2xl transition flex items-center gap-4">
            <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-tr from-green-400 to-green-600 text-white rounded-full shadow-lg text-2xl">
              <FaPhone />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Phone</h3>
              <p className="text-gray-700">+91 8860483417</p>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && <CommonModal closeModal={() => setIsModalOpen(false)} />}
    </section>
  );
}
