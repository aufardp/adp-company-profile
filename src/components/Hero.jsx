// File: src/components/Hero.jsx
import React from "react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section
      id="home"
      className="pt-20 bg-gradient-to-r from-blue-50 to-indigo-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Solusi IT Terpercaya untuk Bisnis Anda
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              ADP Kreasi menyediakan layanan IT consultant profesional meliputi
              instalasi network, CCTV, PABX, dan pembuatan website untuk
              mendukung kesuksesan bisnis Anda.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-blue-600 hover:bg-blue-700 px-6 py-3">
                Mulai Konsultasi
              </Button>
              <Button
                variant="outline"
                className="px-6 py-3 border-blue-600 text-blue-600 hover:bg-blue-50"
              >
                Lihat Layanan
              </Button>
            </div>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1563207153-f403bf289096?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="IT Consultant"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
