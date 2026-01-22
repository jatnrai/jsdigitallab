export default function AboutPage() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h1 className="text-4xl font-bold mb-6 text-gray-900">
          About JSDigitalLab
        </h1>
        <p className="text-gray-800 mb-12">
          JSDigitalLab is a full-service software development company with over
          5 years of experience delivering high-quality web, mobile, and AI
          solutions. We specialize in Next.js, React, React Native, Node.js, and
          other modern technologies to build scalable and robust applications.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 border rounded-xl hover:shadow-lg transition bg-gray-50">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">
              Our Mission
            </h2>
            <p className="text-gray-700">
              To empower businesses with cutting-edge technology and innovative
              solutions.
            </p>
          </div>

          <div className="p-6 border rounded-xl hover:shadow-lg transition bg-gray-50">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">
              Our Vision
            </h2>
            <p className="text-gray-700">
              To be the leading software development partner, delivering
              excellence in every project.
            </p>
          </div>

          <div className="p-6 border rounded-xl hover:shadow-lg transition bg-gray-50">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">
              Our Values
            </h2>
            <p className="text-gray-700">
              Quality, transparency, innovation, and client satisfaction are at
              the heart of everything we do.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
