import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "About - Your Name" },
    { name: "description", content: "Learn more about my background and experience." },
  ];
};

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="prose prose-lg mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">About Me</h1>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <img
              src="/images/about-photo.jpg"
              alt="About me"
              className="rounded-lg shadow-lg w-full"
            />
          </div>

          <div className="space-y-6">
            <p className="text-gray-600 text-lg">
              I&apos;m a passionate developer driven by the opportunity to create tools that address real challenges while exploring and mastering new technologies.
            </p>

            <p className="text-gray-600 text-lg">
              When I&apos;m not coding, you can find me practicing diabolo or exploring Hong Kong. I believe
              in continuous learning and am always looking for new ways to improve my craft.
            </p>

            <div className="p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Quick Facts</h3>
              <ul className="space-y-2 text-gray-600">
                <li>📍 Based in Massachusetts, USA</li>
                <li>🎓 Cornell University, &apos;27</li>
                {/* <li>💼 Student</li> */}
                <li>🌱 Currently studying abroad at HKUST</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
