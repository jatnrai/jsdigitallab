import webImg from "@/public/web_development .jpg";
import mobileImg from "@/public/mobile_app_dev.jpg";
import seoImg from "@/public/seo_dev.jpg";
import aiImg from "@/public/AI_dev.jpeg";
import marketingImg from "@/public/digital_marketing.avif";
import uiuxImg from "@/public/UI_UX_dev.avif";

import {
  FaGlobe,
  FaMobileAlt,
  FaPalette,
  FaSearch,
  FaRobot,
  FaBullhorn,
} from "react-icons/fa";

export const services = [
  {
    slug: "web-development",
    title: "Web Development",
    image: webImg,
    color: "text-blue-600",

    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 6h16M4 10h16M4 14h10"
        />
      </svg>
    ),

    iconComponent: FaGlobe,

    shortDescription:
      "Fast, scalable, and SEO-friendly websites using modern technologies.",
    fullDescription:
      "We build high-performance websites and web applications using Next.js, React, and modern stacks focused on speed, scalability, and SEO.",
    points: [
      "Next.js & React",
      "Custom web applications",
      "Landing pages & admin dashboards",
      "SEO & performance optimization",
    ],
  },

  {
    slug: "mobile-app-development",
    title: "Mobile Application Development",
    image: mobileImg,
    color: "text-green-600",

    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <rect x="7" y="2" width="10" height="20" rx="2" />
      </svg>
    ),

    iconComponent: FaMobileAlt,

    shortDescription: "Cross-platform mobile apps for Android and iOS.",
    fullDescription:
      "We develop smooth, high-quality mobile applications using React Native and Flutter with full backend and API integration.",
    points: [
      "React Native & Flutter",
      "Android & iOS apps",
      "API & backend integration",
      "Play Store & App Store deployment",
    ],
  },

  {
    slug: "ui-ux-design",
    title: "UI / UX Design",
    image: uiuxImg,
    color: "text-purple-600",

    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
      </svg>
    ),

    iconComponent: FaPalette,

    shortDescription:
      "User-centered designs focused on usability and conversions.",
    fullDescription:
      "We design intuitive, modern, and conversion-focused UI/UX experiences that improve user engagement and product success.",
    points: [
      "User research & analysis",
      "Wireframes & prototypes",
      "Modern UI design systems",
      "Mobile-first & responsive design",
    ],
  },

  {
    slug: "seo",
    title: "SEO Optimization",
    image: seoImg,
    color: "text-orange-600",

    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <circle cx="11" cy="11" r="8" />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-4.35-4.35"
        />
      </svg>
    ),

    iconComponent: FaSearch,

    shortDescription: "Rank higher on Google and drive organic traffic.",
    fullDescription:
      "Our SEO strategies help your business grow with better visibility, higher rankings, and increased organic traffic.",
    points: [
      "On-page & off-page SEO",
      "Technical SEO",
      "Keyword research",
      "Website performance optimization",
    ],
  },

  {
    slug: "ai-development",
    title: "AI Development",
    image: aiImg,
    color: "text-indigo-600",

    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 9h6v6H9z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 12h5m6 0h5" />
      </svg>
    ),

    iconComponent: FaRobot,

    shortDescription: "AI-powered solutions for automation and growth.",
    fullDescription:
      "We build intelligent AI solutions including chatbots, automation systems, and AI-powered applications tailored to your business.",
    points: [
      "AI integrations",
      "Chatbots & virtual assistants",
      "Automation workflows",
      "Data-driven AI solutions",
    ],
  },

  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    image: marketingImg,
    color: "text-pink-600",

    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 12l18-6v12L3 12z"
        />
      </svg>
    ),

    iconComponent: FaBullhorn,

    shortDescription:
      "Grow your brand with result-driven marketing strategies.",
    fullDescription:
      "We help businesses grow online through targeted digital marketing strategies that convert visitors into customers.",
    points: [
      "Social media marketing",
      "Google & Meta ads",
      "Content marketing",
      "Brand growth & analytics",
    ],
  },
];
