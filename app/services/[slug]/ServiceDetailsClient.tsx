"use client";
import { useState } from "react";
import CommonModal from "@/components/common/CommonModal";
export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  points: string[];
  image?: string; // optional
  color?: string; // optional if you use for cards
}

type Props = {
  service: Service;
};

export default function ServiceDetailsClient({ service }: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-24 text-center">
        <h1 className="text-5xl font-bold">{service.title}</h1>
        <p className="mt-4 text-xl text-blue-100">{service.shortDescription}</p>
        <button
          onClick={() => setIsModalOpen(true)}
          className="mt-6 px-6 py-3 bg-white text-blue-700 rounded-full shadow hover:bg-gray-100 transition"
        >
          {"Let's Connect"}
        </button>

        {isModalOpen && (
          <CommonModal closeModal={() => setIsModalOpen(false)} />
        )}
      </section>

      {/* Full Description */}
      <section className="py-24 bg-gray-50 text-gray-900 max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6">What We Offer</h2>
        <p className="text-gray-700 leading-relaxed">
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
      </section>
    </div>
  );
}
