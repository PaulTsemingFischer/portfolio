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
    description: " Python utility that creates and inserts custom 911 call-routing policies into SQL databases that determine hardware and call center routing of Massachusetts 911 calls.",
    technologies: ["Python", "SQL"],
  },
  {
    title: "Graph Algorithms and Visualization",
    description: "Interactive GUI for graph visualization including algorithms such as Dijkstra's, Karger's, and a physics simulation for the vertex interface.",
    image: "images/graphs-demo2.png",
    technologies: ["Kotlin", "JavaFX", "SceneBuilder"],
    githubUrl: "https://github.com/FischerAbruzese/Graphs-Algorithms-Visualization"
  },
  {
    title: "Critter Simulation",
    description: "Implemented a parser and pretty-printer for a custom Turing-complete language to simulate an interactive, real-time updating world of mutating critters.",
    image: "images/critter-world-demo.png",
    technologies: ["Java", "JavaFX"],
  },
  {
    title: "Function Dungeon",
    description: "Retro-style, dungeon-crawler with game mechanics inspired by functional programming and procedurally-generated maps.",
    image: "images/function-dungeon.png",
    technologies: ["OCaml", "OUnit", "Bisect"],
    githubUrl: "https://github.com/PaulTsemingFischer/FunctionDungeon"
  },
  {
    title: "Scrabble",
    description: "Command line multi-player scrabble game with AI opponents.",
    image: "images/scrabble.png",
    technologies: ["Kotlin", "Ktor", "Kotlinx coroutines"],
    githubUrl: "https://github.com/FischerAbruzese/Scrabble"
  },
  {
    title: "Portfolio Website",
    description: "This website!",
    image: "images/website-demo.png",
    technologies: ["Typescript", "React", "Remix", "TailwindCSS"],
    githubUrl: "https://github.com/PaulTsemingFischer/portfolio"
  }
];
