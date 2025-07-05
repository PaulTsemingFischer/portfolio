import { Link } from "@remix-run/react";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <div className="flex items-center">
            
            <Link to="/" className="text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors">
              <img src="/images/PF.svg" alt="Paul Fischer" className="w-12 h-12 inline mr-2" />
            </Link>
          </div>
          <Navigation />
        </div>
      </div>
    </header>
  );
}
