// app/services/[slug]/page.tsx
import { notFound } from "next/navigation";
import Image from "next/image";
import { services } from "@/data/services";
import { FaClock, FaHeadset, FaRocket, FaUsers } from "react-icons/fa";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export default async function ServiceDetailsPage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) notFound();

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative py-32">
        <div className="absolute inset-0 -z-10">
          <Image
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
            fill
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative max-w-5xl mx-auto px-6">
          <div className="bg-white/20 backdrop-blur-xl rounded-3xl p-12 md:p-16 text-center shadow-2xl border border-white/20 transform hover:-translate-y-2 transition-all duration-500">
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 drop-shadow-lg">
              {service.title}
            </h1>
            <p className="text-lg md:text-2xl mt-6 text-gray-800 max-w-3xl mx-auto leading-relaxed">
              {service.shortDescription}
            </p>

            <a
              href="/contact"
              className="inline-block mt-10 px-10 py-4 font-semibold rounded-full text-white bg-gradient-to-r from-blue-500 to-indigo-600 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-24 bg-gray-50 text-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900">
              What We Offer
            </h2>
            <p className="mt-4 text-gray-700 text-base sm:text-lg md:text-xl max-w-2xl mx-auto">
              {service.fullDescription}
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {service.points.map((point, i) => (
              <div
                key={i}
                className={`group relative flex flex-col p-8 bg-white/50 backdrop-blur-md rounded-3xl shadow-xl border border-gray-200 hover:scale-105 transition-all duration-300 overflow-hidden ${
                  i % 2 === 1 ? "md:mt-10" : ""
                }`}
              >
                {/* Accent bar */}
                <div className="absolute left-0 top-0 bottom-0 w-2 rounded-l-3xl bg-gradient-to-b from-blue-500 to-indigo-600"></div>

                {/* Number */}
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-blue-500 text-white font-bold text-lg mb-4">
                  {i + 1}
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition">
                    {point}
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                    We provide expert solutions and cutting-edge approaches for{" "}
                    <span className="font-medium">{point.toLowerCase()}</span>{" "}
                    to maximize performance and efficiency.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 text-center mb-16">
            Why Choose Us
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10">
            {/* Card 1 */}
            <div className="group relative bg-white/30 backdrop-blur-xl rounded-3xl p-6 sm:p-8 flex flex-col items-center text-center shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-white/20">
              <div className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-tr from-blue-400 to-blue-600 text-white mb-4 text-2xl shadow-lg group-hover:scale-110 transition-transform">
                <FaClock />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-2">
                On-Time Delivery
              </h3>
              <p className="text-gray-700 text-sm sm:text-base md:text-base leading-relaxed">
                We deliver projects punctually. Your deadlines are our priority.
              </p>
            </div>

            {/* Card 2 */}
            <div className="group relative bg-white/30 backdrop-blur-xl rounded-3xl p-6 sm:p-8 flex flex-col items-center text-center shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-white/20">
              <div className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-tr from-indigo-400 to-indigo-600 text-white mb-4 text-2xl shadow-lg group-hover:scale-110 transition-transform">
                <FaHeadset />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-2">
                24/7 Support
              </h3>
              <p className="text-gray-700 text-sm sm:text-base md:text-base leading-relaxed">
                Our team is always available to assist you.
              </p>
            </div>

            {/* Card 3 */}
            <div className="group relative bg-white/30 backdrop-blur-xl rounded-3xl p-6 sm:p-8 flex flex-col items-center text-center shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-white/20">
              <div className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-tr from-green-400 to-green-600 text-white mb-4 text-2xl shadow-lg group-hover:scale-110 transition-transform">
                <FaUsers />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-2">
                Expert Developers
              </h3>
              <p className="text-gray-700 text-sm sm:text-base md:text-base leading-relaxed">
                Senior developers with real-world experience work on your
                projects.
              </p>
            </div>

            {/* Card 4 */}
            <div className="group relative bg-white/30 backdrop-blur-xl rounded-3xl p-6 sm:p-8 flex flex-col items-center text-center shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-white/20">
              <div className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-tr from-pink-400 to-pink-600 text-white mb-4 text-2xl shadow-lg group-hover:scale-110 transition-transform">
                <FaRocket />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-2">
                Fast & Scalable
              </h3>
              <p className="text-gray-700 text-sm sm:text-base md:text-base leading-relaxed">
                Rapid development cycles with scalable, production-ready
                solutions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
