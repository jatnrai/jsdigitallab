import Image from "next/image";
import logo from "@/public/logo.png"; // replace with your actual logo path

export default function AboutPage() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Logo */}
        <div className="mb-6 flex justify-center">
          <Image
            src={logo}
            alt="JSDigitalLab Logo"
            width={180} // adjust width as needed
            height={60} // adjust height as needed
            className="object-contain"
          />
        </div>

        {/* Page Description */}
        <p className="text-gray-800 text-lg md:text-xl mb-12 leading-relaxed">
          JSDigitalLab is a full-service software development company with over{" "}
          <span className="font-semibold">5 years of experience</span> in
          delivering high-quality web, mobile, and AI solutions. We specialize
          in Next.js, React, React Native, Node.js, and modern technologies to
          build{" "}
          <span className="font-semibold">
            scalable, robust, and fast applications
          </span>
          . Over the years, we have successfully completed{" "}
          <span className="font-semibold">50+ projects</span> for clients across
          diverse industries.
        </p>

        {/* Highlight Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="p-6 border rounded-2xl hover:shadow-lg transition bg-gray-50">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">
              Our Mission
            </h2>
            <p className="text-gray-700 leading-relaxed">
              To empower businesses with cutting-edge technology, delivering
              innovative and high-performing software solutions that drive
              growth and efficiency.
            </p>
          </div>

          <div className="p-6 border rounded-2xl hover:shadow-lg transition bg-gray-50">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">
              Our Vision
            </h2>
            <p className="text-gray-700 leading-relaxed">
              To be recognized as a trusted technology partner, consistently
              delivering excellence, innovation, and speed in every project we
              undertake.
            </p>
          </div>

          <div className="p-6 border rounded-2xl hover:shadow-lg transition bg-gray-50">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">
              Our Values
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Quality, transparency, innovation, and client satisfaction are at
              the core of our work. We prioritize clear communication and timely
              delivery.
            </p>
          </div>
        </div>

        {/* Our Journey */}
        <div className="mb-16 text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center md:text-left">
            Our Journey
          </h2>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
            JSDigitalLab started with a simple vision: to provide businesses
            with technology solutions that are not only functional but also
            scalable and future-ready. In our 5+ years of journey, we have grown
            from a small team of passionate developers to a full-fledged
            software company delivering services across web, mobile, AI, and
            digital solutions.
          </p>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
            Our focus on{" "}
            <span className="font-semibold">
              speed, quality, and innovation
            </span>{" "}
            has allowed us to complete over 50+ projects successfully. From
            startups to established businesses, we have helped clients bring
            their ideas to life with cutting-edge technologies.
          </p>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            At JSDigitalLab, we believe in continuous improvement, adopting the
            latest technologies, and always staying ahead of the curve to
            provide the{" "}
            <span className="font-semibold">
              fastest, most reliable services
            </span>{" "}
            to our clients.
          </p>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <a
            href="/contact"
            className="inline-block px-10 py-4 font-semibold rounded-full text-white bg-gradient-to-r from-blue-500 to-indigo-600 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Work With Us
          </a>
        </div>
      </div>
    </section>
  );
}
