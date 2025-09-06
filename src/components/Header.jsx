// File: src/components/Header.jsx
import React, { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed w-full z-10">
      <div className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-xl font-bold text-blue-600">ADP Kreasi</span>
          </div>

          <nav className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-600 hover:text-blue-600">
              Tentang
            </a>
            <a href="#services" className="text-gray-600 hover:text-blue-600">
              Layanan
            </a>
            <a href="#projects" className="text-gray-600 hover:text-blue-600">
              Proyek
            </a>
            <a
              href="#testimonials"
              className="text-gray-600 hover:text-blue-600"
            >
              Testimoni
            </a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600">
              Kontak
            </a>
          </nav>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4">
            <a
              href="#about"
              className="block py-2 text-gray-600 hover:text-blue-600"
            >
              Tentang
            </a>
            <a
              href="#services"
              className="block py-2 text-gray-600 hover:text-blue-600"
            >
              Layanan
            </a>
            <a
              href="#projects"
              className="block py-2 text-gray-600 hover:text-blue-600"
            >
              Proyek
            </a>
            <a
              href="#testimonials"
              className="block py-2 text-gray-600 hover:text-blue-600"
            >
              Testimoni
            </a>
            <a
              href="#contact"
              className="block py-2 text-gray-600 hover:text-blue-600"
            >
              Kontak
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
