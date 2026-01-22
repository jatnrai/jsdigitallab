"use client";

import Link from "next/link";
import { useState } from "react";
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

const tech = [
  { name: "React", icon: FaReact, color: "text-cyan-400" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
  { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
  { name: "Python", icon: FaPython, color: "text-yellow-400" },
  { name: "AWS", icon: FaAws, color: "text-orange-400" },
  { name: "Docker", icon: FaDocker, color: "text-blue-400" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "text-sky-500" },
  { name: "Java", icon: FaJava, color: "text-red-500" },
  { name: "MongoDB", icon: SiMongodb, color: "text-green-400" },
];

export default function TechStack() {
  const displayedTech = tech.slice(0, 8); // only show 8 on homepage

  return (
    <section className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-4 text-white">
          Technology We Excel In
        </h2>

        <p className="text-gray-300 max-w-2xl mx-auto mb-12">
          At JSDigitalLab, we build cutting-edge apps using the world’s most
          powerful and scalable technologies.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">
          {displayedTech.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.name}
                className="w-full bg-gray-800 rounded-2xl p-6
                           hover:scale-105 hover:shadow-xl
                           transition-all duration-300 flex flex-col items-center"
              >
                <Icon className={`text-6xl ${item.color}`} />
                <span className="mt-4 text-white font-semibold text-lg">
                  {item.name}
                </span>
              </div>
            );
          })}
        </div>

        {/* View More Link */}
        <div className="mt-10">
          <Link
            href="/TechStack"
            className="inline-flex items-center gap-2 text-lg font-semibold text-blue-500 hover:text-blue-400 transition-all group"
          >
            View All Technologies
            <span className="transform transition-transform group-hover:translate-x-2">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
