"use client";

import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaAws,
  FaDocker,
  FaJava,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiPostgresql,
  SiMongodb,
} from "react-icons/si";

const techStack = [
  {
    name: "React",
    icon: FaReact,
    color: "text-cyan-400",
    description:
      "A powerful JavaScript library for building responsive and dynamic user interfaces. React helps us create reusable UI components and ensures high performance.",
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    color: "text-white",
    description:
      "A React framework that enables server-side rendering and static site generation for fast, SEO-friendly web applications.",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    color: "text-blue-500",
    description:
      "A typed superset of JavaScript that improves code reliability and maintainability, making large-scale applications more robust.",
  },
  {
    name: "Node.js",
    icon: FaNodeJs,
    color: "text-green-500",
    description:
      "A runtime environment that allows us to build scalable backend applications using JavaScript, perfect for APIs and real-time apps.",
  },
  {
    name: "Python",
    icon: FaPython,
    color: "text-yellow-400",
    description:
      "A versatile programming language used for backend development, automation, and AI/ML projects due to its simplicity and extensive libraries.",
  },
  {
    name: "AWS",
    icon: FaAws,
    color: "text-orange-400",
    description:
      "Cloud computing platform for hosting, storage, and deployment, enabling scalable and reliable applications with global infrastructure.",
  },
  {
    name: "Docker",
    icon: FaDocker,
    color: "text-blue-400",
    description:
      "Containerization platform that allows us to package applications with all dependencies for consistent deployments across environments.",
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    color: "text-sky-500",
    description:
      "A powerful open-source relational database that ensures data integrity, complex queries, and reliability for large-scale applications.",
  },
  {
    name: "Java",
    icon: FaJava,
    color: "text-red-500",
    description:
      "A robust, object-oriented programming language used for backend systems, large-scale applications, and cross-platform solutions.",
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    color: "text-green-400",
    description:
      "A NoSQL database for flexible, JSON-like document storage, ideal for handling dynamic data and rapid development cycles.",
  },
];

export default function TechStackPage() {
  return (
    <section className="py-24 bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
          Our Technology Stack
        </h1>
        <p className="text-gray-300 max-w-3xl mx-auto text-lg md:text-xl mb-12">
          We use the latest technologies and frameworks to build scalable,
          secure, and high-performance digital products — web, mobile, and AI
          solutions.
        </p>

        {/* Tech Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {techStack.map((tech) => {
            const Icon = tech.icon;
            return (
              <div
                key={tech.name}
                className="bg-gray-900/70 backdrop-blur-xl rounded-2xl p-6 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >
                {/* Icon */}
                <div
                  className={`w-16 h-16 flex items-center justify-center rounded-xl mb-4 ${tech.color} bg-gray-700`}
                >
                  <Icon className="w-8 h-8" />
                </div>

                {/* Name */}
                <h3 className="text-xl font-semibold mb-2">{tech.name}</h3>

                {/* Description */}
                <p className="text-gray-300 text-sm leading-relaxed">
                  {tech.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
