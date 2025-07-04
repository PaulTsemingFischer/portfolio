import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Paul Fischer - Personal Website" },
    { name: "description", content: "Welcome to my personal website!" },
  ];
};

export default function Index() {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="mb-8">
            <img
              src="/images/id-photo.jpg"
              alt="Paul Fischer"
              className="w-32 h-32 rounded-full mx-auto object-cover shadow-lg"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Hi, I'm <span className="text-blue-600"><a href="/about">Paul Fischer</a></span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            A passionate developer creating amazing web experiences.
            Welcome to my digital space where I share my work and ideas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/projects"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              View My Work
            </a>
            <a
              href="/contact"
              className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      {/* Quick Skills Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What I Do</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            I specialize in creating modern, responsive web applications using the latest technologies.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-3xl mb-4">{skill.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{skill.title}</h3>
              <p className="text-gray-600">{skill.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

const skills = [
  {
    icon: "💻",
    title: "Frontend Development",
    description: "Creating responsive and interactive user interfaces with modern frameworks."
  },
  {
    icon: "🎨",
    title: "UI/UX Design",
    description: "Designing beautiful and intuitive user experiences that delight users."
  },
  {
    icon: "⚡",
    title: "Performance",
    description: "Building fast, optimized applications that provide excellent user experience."
  }
];
