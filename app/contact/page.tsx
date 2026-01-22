"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

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
  };

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-gray-900 text-center mb-6">
          Contact Us
        </h1>
        <p className="text-center text-gray-800 mb-12">
          Have a project in mind? Reach out and we’ll help you bring it to life.
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-xl shadow-md space-y-6"
        >
          <div>
            <label
              htmlFor="name"
              className="block font-medium mb-2 text-gray-900"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block font-medium mb-2 text-gray-900"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block font-medium mb-2 text-gray-900"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition w-full"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
