import Link from "next/link";
import { services } from "@/data/services";

export default function ServicesPage() {
  return (
    <>
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-6 py-24 text-center">
          <h1 className="text-5xl font-bold">
            Our Software Development Services
          </h1>
          <p className="mt-6 text-xl text-blue-100 max-w-3xl mx-auto">
            End-to-end IT services tailored for startups and businesses.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          {services.map((service) => (
            <div
              key={service.slug}
              className="border p-8 rounded-xl hover:shadow-lg transition"
            >
              <h2 className="text-2xl font-semibold">{service.title}</h2>
              <p className="mt-4 text-gray-600">{service.fullDescription}</p>

              <ul className="mt-6 space-y-2">
                {service.points.map((point, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-blue-600">✔</span>
                    {point}
                  </li>
                ))}
              </ul>

              <Link
                href={`/services/${service.slug}`}
                className="inline-block mt-6 text-blue-600 font-semibold"
              >
                View Details →
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
