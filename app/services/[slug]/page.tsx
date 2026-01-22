import { notFound } from "next/navigation";
import { services } from "@/data/services";

type Props = {
  params: Promise<{ slug: string }>; // note: params is a Promise
};

// Optional: pre-generate slugs
export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export default async function ServiceDetailsPage({ params }: Props) {
  // Await params
  const { slug } = await params;

  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-5xl mx-auto px-6 py-24 text-center">
          <h1 className="text-5xl font-bold">{service.title}</h1>
          <p className="mt-6 text-xl text-blue-100">
            {service.shortDescription}
          </p>
        </div>
      </section>

      <section className="py-24 bg-white text-gray-900">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold">What we offer</h2>

          <p className="mt-6 text-gray-600 leading-relaxed">
            {service.fullDescription}
          </p>

          <ul className="mt-10 space-y-4">
            {service.points.map((point, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-blue-600 font-bold text-lg">✔</span>
                <span className="text-gray-700">{point}</span>
              </li>
            ))}
          </ul>

          <div className="mt-12 text-center">
            <a
              href="/contact"
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Get Started
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
