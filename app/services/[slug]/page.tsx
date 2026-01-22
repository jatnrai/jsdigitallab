import { notFound } from "next/navigation";
import { services } from "@/data/services";
import Image from "next/image";
import { FaClock, FaHeadset, FaRocket, FaUsers } from "react-icons/fa";

type Props = {
  params: Promise<{ slug: string }>;
};

// Pre-generate slugs for static generation
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
      <section className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-32 overflow-hidden">
        {/* Hero Image */}
        <div className="absolute inset-0 opacity-10">
          <Image
            src={service.image}
            alt={service.title}
            className="object-cover w-full h-full"
            priority
          />
        </div>

        <div className="relative max-w-5xl mx-auto px-6 text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-extrabold drop-shadow-lg">
            {service.title}
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            {service.shortDescription}
          </p>
          <a
            href="/contact"
            className="inline-block mt-8 px-8 py-4 bg-white text-blue-700 font-semibold rounded-full shadow-lg hover:bg-gray-100 transition"
          >
            Get in Touch
          </a>
        </div>
      </section>

      <section className="py-24 bg-gray-50 text-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900">What We Offer</h2>
            <p className="mt-4 text-gray-700 text-lg md:text-xl max-w-2xl mx-auto">
              {service.fullDescription}
            </p>
          </div>

          {/* Feature Grid */}
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {service.points.map((point, i) => (
              <div
                key={i}
                className="relative flex flex-col items-center text-center p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
              >
                {/* Floating icon */}
                <div
                  className={`absolute -top-8 w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-tr from-white/10 to-white/20 shadow-xl`}
                >
                  {/* Icon color uses service.color */}
                  {service.iconComponent && (
                    <service.iconComponent
                      className={`w-8 h-8 ${service.color}`}
                    />
                  )}
                </div>

                {/* Card Content */}
                <div className="mt-12">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {point}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center">
            <a
              href="/contact"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold px-14 py-4 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
            >
              {"Let's Connect"}
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
            </a>
          </div>
        </div>
      </section>
      {/* What We Offer Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
            What We Offer
          </h2>

          <div className="flex flex-col md:flex-row items-center justify-center gap-12">
            {/* Item 1 */}
            <div className="flex flex-col items-center gap-3">
              <FaClock className="text-blue-600 w-12 h-12" />
              <h3 className="text-xl font-semibold text-gray-900">
                On-Time Delivery
              </h3>
              <p className="text-gray-600 text-center max-w-xs">
                We deliver projects punctually, every time — your deadlines are
                our priority.
              </p>
            </div>

            {/* Item 2 */}
            <div className="flex flex-col items-center gap-3">
              <FaHeadset className="text-indigo-600 w-12 h-12" />
              <h3 className="text-xl font-semibold text-gray-900">
                24/7 Support
              </h3>
              <p className="text-gray-600 text-center max-w-xs">
                Our team is always available to assist you, day or night.
              </p>
            </div>

            {/* Item 3 */}
            <div className="flex flex-col items-center gap-3">
              <FaUsers className="text-green-600 w-12 h-12" />
              <h3 className="text-xl font-semibold text-gray-900">
                Expert Developers
              </h3>
              <p className="text-gray-600 text-center max-w-xs">
                Senior developers with real-world experience work on your
                projects.
              </p>
            </div>

            {/* Optional Item 4 */}
            <div className="flex flex-col items-center gap-3">
              <FaRocket className="text-pink-600 w-12 h-12" />
              <h3 className="text-xl font-semibold text-gray-900">
                Fast & Scalable
              </h3>
              <p className="text-gray-600 text-center max-w-xs">
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
