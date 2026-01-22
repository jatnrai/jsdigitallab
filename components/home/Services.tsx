import Link from "next/link";
import { services } from "@/data/services";
import Image from "next/image";

export default function Services() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-900">Our Services</h2>

        <div className="mt-16 grid justify-items-center gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.slug}
              className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col justify-between group max-w-sm w-full"
            >
              {/* Image Section */}
              <div className="h-44 w-full overflow-hidden">
                <Image
                  src={service.image} // ensure your service object has 'image' property
                  alt={service.title}
                  width={400}
                  height={176}
                  className="object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-105"
                />
              </div>

              {/* Content Section */}
              <div className="p-8 flex flex-col justify-between h-[calc(65%-1.5rem)] text-left">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-gray-700 text-sm md:text-base">
                    {service.shortDescription}
                  </p>
                </div>

                <Link
                  href={`/services/${service.slug}`}
                  className="mt-6 inline-block text-blue-600 font-semibold hover:text-blue-700 transition"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
