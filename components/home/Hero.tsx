"use client";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white min-h-[60vh] lg:min-h-[60vh]">
      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-20 flex flex-col-reverse lg:flex-row items-start gap-12 h-full">
        {/* Left Text Content */}
        <div className="lg:w-1/2 text-center lg:text-left flex flex-col justify-center my-auto h-full">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            Building Scalable Digital Products
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-6 max-w-lg">
            JSDigitalLab delivers high-quality web, mobile, and AI solutions for
            startups and businesses. Innovative, reliable, and tailored to help
            your business grow.
          </p>
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mt-4">
            <a
              href="/contact"
              className="bg-gray-100 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
            >
              Get Free Consultation
            </a>
            <a
              href="/portfolio"
              className="border border-gray-100 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 hover:text-gray-900 transition"
            >
              View Our Work
            </a>
          </div>
        </div>

        {/* Right Form */}
        <div className="lg:w-1/2 w-full max-w-md h-full">
          <div className="bg-gray-900 rounded-3xl p-8 lg:p-10 shadow-2xl flex flex-col justify-between h-[calc(100%-2rem)]">
            {/* Logo and Title */}
            <div className="flex items-center gap-3 mb-6">
              <h2 className="text-2xl font-bold">Start Your Project</h2>
            </div>

            <p className="text-gray-400 mb-6">
              Fill out the form and we will get back to you shortly.
            </p>

            <form className="space-y-4 flex-1 flex flex-col justify-between">
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700"
                />
                <input
                  type="text"
                  placeholder="Project Type / Requirement"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700"
                />
              </div>
              <button
                type="submit"
                className="w-full mt-4 bg-gradient-to-r from-gray-800 via-blue-800 to-indigo-800 text-white px-4 py-3 rounded-lg font-semibold hover:scale-105 transform transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Optional subtle gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-blue-950 to-indigo-950 opacity-40 -z-10 rounded-3xl"></div>
    </section>
  );
}
