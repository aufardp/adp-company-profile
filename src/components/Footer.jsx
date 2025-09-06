// File: src/components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">ADP Kreasi</h3>
            <p className="text-gray-400">
              Penyedia layanan IT consultant profesional untuk instalasi
              network, CCTV, PABX, dan pembuatan website.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Layanan</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Instalasi Jaringan</li>
              <li>Instalasi CCTV</li>
              <li>Instalasi PABX</li>
              <li>Pembuatan Website</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Tautan</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#home" className="hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white">
                  Tentang Kami
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white">
                  Layanan
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white">
                  Proyek
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white">
                  Kontak
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Kontak</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Jl. Contoh No. 123, Jakarta Selatan</li>
              <li>+62 21 1234 5678</li>
              <li>info@adpkreasi.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} ADP Kreasi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
