// app/components/Hero.tsx
import { Link } from "@remix-run/react";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6">
            Build Amazing
            <span className="block text-yellow-400">Web Experiences</span>
          </h1>
          <p className="text-xl lg:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto">
            Create modern, fast, and beautiful websites with the power of Remix and Tailwind CSS.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/get-started"
              className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold py-4 px-8 rounded-lg text-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              Get Started Free
            </Link>
            <Link
              to="/demo"
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold py-4 px-8 rounded-lg text-lg transition-all duration-200"
            >
              View Demo
            </Link>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full h-12 lg:h-20">
          <path
            fill="white"
            d="M0,60 C480,120 960,0 1440,60 L1440,120 L0,120 Z"
          />
        </svg>
      </div>
    </section>
  );
}
