// app/components/Navigation.tsx
import { Link } from "@remix-run/react";

export default function Navigation() {
  return (
    <nav className="bg-white shadow-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          {/* <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg"></div>
            <span className="text-xl font-bold text-gray-900">MyApp</span>
          </Link> */}

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium transition-colors"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium transition-colors"
            >
              About Me
            </Link>
            <Link
              to="/about-you"
              className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium transition-colors"
            >
              About You
            </Link>
            <Link
              to="/projects"
              className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium transition-colors"
            >
              Projects
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium transition-colors"
            >
              Contact
            </Link>
            {/* <Link
              to="/blog"
              className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Blog
            </Link> */}
          </div>

          {/* CTA Button */}
          {/* <div className="flex items-center space-x-4">
            <Link
              to="/login"
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              Sign In
            </Link>
            <Link
              to="/signup"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
            >
              Sign Up
            </Link>
          </div> */}

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-gray-700 hover:text-blue-600 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
