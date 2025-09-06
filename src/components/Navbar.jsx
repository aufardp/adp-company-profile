// File: src/components/Navbar.jsx
import React, { useState } from "react";
import { Button } from "./ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-xl font-bold text-blue-600">ADP Kreasi</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-600">
              Home
            </a>
            <a href="#about" className="text-gray-700 hover:text-blue-600">
              Tentang Kami
            </a>
            <a href="#services" className="text-gray-700 hover:text-blue-600">
              Layanan
            </a>
            <a href="#projects" className="text-gray-700 hover:text-blue-600">
              Proyek
            </a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600">
              Kontak
            </a>
            <Button className="bg-blue-600 hover:bg-blue-700">
              Konsultasi Gratis
            </Button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#home"
              className="block px-3 py-2 text-gray-700 hover:text-blue-600"
            >
              Home
            </a>
            <a
              href="#about"
              className="block px-3 py-2 text-gray-700 hover:text-blue-600"
            >
              Tentang Kami
            </a>
            <a
              href="#services"
              className="block px-3 py-2 text-gray-700 hover:text-blue-600"
            >
              Layanan
            </a>
            <a
              href="#projects"
              className="block px-3 py-2 text-gray-700 hover:text-blue-600"
            >
              Proyek
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 text-gray-700 hover:text-blue-600"
            >
              Kontak
            </a>
            <Button className="w-full mt-2 bg-blue-600 hover:bg-blue-700">
              Konsultasi Gratis
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
