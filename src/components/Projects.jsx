// File: src/components/Projects.jsx
import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "Jaringan Kantor PT. XYZ",
      category: "Networking",
      image: "https://placehold.co/400x300/2563EB/FFFFFF/png?text=Networking",
    },
    {
      title: "Sistem CCTV Retail Modern",
      category: "CCTV",
      image: "https://placehold.co/400x300/10B981/FFFFFF/png?text=CCTV",
    },
    {
      title: "Website Perusahaan ABC",
      category: "Web Development",
      image: "https://placehold.co/400x300/4B5563/FFFFFF/png?text=Website",
    },
    {
      title: "PABX Hotel Grand",
      category: "PABX",
      image: "https://placehold.co/400x300/2563EB/FFFFFF/png?text=PABX",
    },
  ];

  return (
    <section id="projects" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">Proyek Terbaru</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Beberapa proyek yang telah kami selesaikan untuk klien-klien kami.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-gray-800">{project.title}</h3>
                <p className="text-sm text-blue-600">{project.category}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="#contact"
            className="px-6 py-3 bg-blue-600 text-white font-medium rounded-md shadow-md hover:bg-blue-700 transition"
          >
            Lihat Lebih Banyak
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
