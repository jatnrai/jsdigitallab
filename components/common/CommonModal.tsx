"use client";

interface CommonModalProps {
  closeModal: () => void;
  title?: string;
  subtitle?: string;
}

export default function CommonModal({
  closeModal,
  title = "Contact Us",
  subtitle = "Fill out the form and we will get back to you shortly.",
}: CommonModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white rounded-3xl w-full max-w-md p-8 relative shadow-2xl">
        {/* Close Button */}
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 text-gray-300 hover:text-white text-xl"
        >
          ✕
        </button>

        {/* Logo + Title */}
        <div className="flex items-center gap-3 mb-6">
          <h2 className="text-2xl font-bold">{title}</h2>
        </div>

        <p className="text-gray-300 mb-6">{subtitle}</p>

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
  );
}
