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
              I'm a passionate web developer with a love for creating digital experiences
              that make a difference. My journey in tech started [your story here], and
              I've been hooked ever since.
            </p>

            <p className="text-gray-600 text-lg">
              When I'm not coding, you can find me [your hobbies/interests]. I believe
              in continuous learning and am always exploring new technologies and
              methodologies to improve my craft.
            </p>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Quick Facts</h3>
              <ul className="space-y-2 text-gray-600">
                <li>📍 Based in [Your Location]</li>
                <li>🎓 [Your Education/Background]</li>
                <li>💼 [Current Role/Status]</li>
                <li>🌱 Currently learning [Technology/Skill]</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
