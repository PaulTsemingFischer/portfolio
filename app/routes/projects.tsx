import type { MetaFunction } from "@remix-run/node";
import ProjectCard from "~/components/ProjectCard";

export const meta: MetaFunction = () => {
  return [
    { title: "Projects - Your Name" },
    { name: "description", content: "Check out my latest projects and work." },
  ];
};

export default function Projects() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">My Projects</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Here are some of the projects I've worked on. Each one represents a learning
          journey and showcases different skills and technologies.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
}

const projects = [
  {
    title: "E-commerce Website",
    description: "A full-stack e-commerce solution with user authentication, shopping cart, and payment integration.",
    image: "/images/project1.jpg",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/project1"
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates and team collaboration features.",
    image: "/images/project2.jpg",
    technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/project2"
  },
  {
    title: "Weather Dashboard",
    description: "A responsive weather dashboard that displays current conditions and forecasts for multiple cities.",
    image: "/images/project3.jpg",
    technologies: ["HTML", "CSS", "JavaScript", "Weather API"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/project3"
  }
];
