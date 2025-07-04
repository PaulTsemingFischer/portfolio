import type { MetaFunction } from "@remix-run/node";
import ProjectCard from "~/components/ProjectCard";

export const meta: MetaFunction = () => {
  return [
    { title: "Projects - Paul Fischer" },
    { name: "description", content: "Check out my latest projects and work." },
  ];
};

export default function Projects() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">My Projects</h1>
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
    title: "Comtech Internship - 911 Call Routing Utility",
    image: "images/comtech-logo.jpg",
    description: "A command-line Python utility for custom interfacing with backend SQL servers used for 911 call-routing systems.",
    technologies: ["Python", "SQL"],
  },
  {
    title: "Graph Algorithms and Visualization",
    description: "An interactive interface for graphs including algorithms such as Dijkstra's, Karger's, and a physics simulation for the vertex interface.",
    image: "images/graphs-demo2.png",
    technologies: ["Kotlin", "JavaFX"],
    githubUrl: "https://github.com/FischerAbruzese/Graphs-Algorithms-Visualization"
  },
  {
    title: "Critter Simulation",
    description: "A parser and pretty-printer for a small custom Turing-complete language to simulate an interactive, real-time updating world of critters.",
    image: "images/critter-world-demo.png",
    technologies: ["Java", "JavaFX"],
  }
];
