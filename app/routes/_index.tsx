import type { LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData, Link } from "@remix-run/react";
import { prisma } from "~/utils/db.server";

export const meta: MetaFunction = () => {
  return [
    { title: "Portfolio Manager" },
    { name: "description", content: "Manage your professional portfolio" },
  ];
};

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const url = new URL(request.url);
  const userId = url.searchParams.get("user") || "demo-user";

  const [projects, experiences, skills] = await Promise.all([
    prisma.project.findMany({
      where: { userId },
      include: { technologies: { include: { technology: true } } },
      orderBy: { createdAt: "desc" },
      take: 6,
    }),
    prisma.experience.findMany({
      where: { userId },
      orderBy: { startDate: "desc" },
      take: 3,
    }),
    prisma.userSkill.findMany({
      where: { userId },
      include: { technology: true },
      orderBy: { proficiency: "desc" },
      take: 10,
    }),
  ]);

  return json({ projects, experiences, skills });
};

export default function Index() {
  const { projects, experiences, skills } = useLoaderData<typeof loader>();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <h1 className="text-3xl font-bold text-gray-900">Portfolio Manager</h1>
            </div>
            <nav className="flex space-x-8">
              <Link to="/projects" className="text-gray-500 hover:text-gray-900 transition-colors">
                Projects
              </Link>
              <Link to="/experience" className="text-gray-500 hover:text-gray-900 transition-colors">
                Experience
              </Link>
              <Link to="/skills" className="text-gray-500 hover:text-gray-900 transition-colors">
                Skills
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Showcase Your Professional Journey
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            A modern portfolio management system built with Remix, Prisma, PostgreSQL, and Docker.
            Track your projects, experience, and skills in one place.
          </p>
          <div className="flex justify-center space-x-4">
            <Link
              to="/projects/new"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              Add Project
            </Link>
            <Link
              to="/dashboard"
              className="bg-white hover:bg-gray-50 text-gray-900 font-semibold py-3 px-6 rounded-lg border border-gray-300 transition-colors"
            >
              View Dashboard
            </Link>
          </div>
        </div>
      </section>

      {/* Recent Projects */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900">Recent Projects</h3>
            <Link to="/projects" className="text-blue-600 hover:text-blue-800 font-medium">
              View All →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div key={project.id} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-semibold text-gray-900">{project.title}</h4>
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                    project.status === 'COMPLETED' ? 'bg-green-100 text-green-800' :
                    project.status === 'IN_PROGRESS' ? 'bg-blue-100 text-blue-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {project.status.replace('_', ' ')}
                  </span>
                </div>
                <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech.technology.id}
                      className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded"
                    >
                      {tech.technology.name}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
                <div className="flex space-x-3">
                  <Link
                    to={`/projects/${project.id}`}
                    className="text-blue-600 hover:text-blue-800 font-medium text-sm"
                  >
                    View Details
                  </Link>
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 hover:text-green-800 font-medium text-sm"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900">Experience</h3>
            <Link to="/experience" className="text-blue-600 hover:text-blue-800 font-medium">
              View All →
            </Link>
          </div>
          <div className="space-y-6">
            {experiences.map((exp) => (
              <div key={exp.id} className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">{exp.position}</h4>
                    <p className="text-blue-600 font-medium">{exp.company}</p>
                    <p className="text-gray-500 text-sm">
                      {new Date(exp.startDate).toLocaleDateString()} -
                      {exp.endDate ? new Date(exp.endDate).toLocaleDateString() : 'Present'}
                    </p>
                  </div>
                  {exp.current && (
                    <span className="bg-green-100 text-green-800 px-2 py-1 text-xs font-medium rounded-full">
                      Current
                    </span>
                  )}
                </div>
                <p className="text-gray-600 mt-3">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900">Skills</h3>
            <Link to="/skills" className="text-blue-600 hover:text-blue-800 font-medium">
              Manage Skills →
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {skills.map((skill) => (
              <div key={skill.id} className="bg-gray-50 rounded-lg p-4 text-center">
                <h4 className="font-medium text-gray-900 mb-2">{skill.technology.name}</h4>
                <div className="flex items-center justify-center space-x-1">
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={i}
                      className={`w-2 h-2 rounded-full ${
                        i < ['BEGINNER', 'INTERMEDIATE', 'ADVANCED', 'EXPERT'].indexOf(skill.proficiency) + 1
                          ? 'bg-blue-500'
                          : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <p className="text-xs text-gray-500 mt-1 capitalize">
                  {skill.proficiency.toLowerCase()}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h4 className="text-xl font-semibold mb-4">Built with Modern Technologies</h4>
          <div className="flex justify-center space-x-8 text-gray-400">
            <span>Remix</span>
            <span>•</span>
            <span>Prisma</span>
            <span>•</span>
            <span>PostgreSQL</span>
            <span>•</span>
            <span>Docker</span>
            <span>•</span>
            <span>Tailwind CSS</span>
          </div>
          <p className="mt-6 text-gray-400">
            A full-stack portfolio management system demonstrating modern web development practices.
          </p>
        </div>
      </footer>
    </div>
  );
}
