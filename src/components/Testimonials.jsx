// File: src/components/Testimonials.jsx
import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Budi Santoso",
      company: "PT. Maju Jaya",
      comment:
        "ADP Kreasi membantu perusahaan kami dalam membangun infrastruktur IT yang handal. Pelayanan mereka sangat profesional.",
      avatar: "https://placehold.co/60x60/2563EB/FFFFFF/png?text=B",
    },
    {
      name: "Sari Dewi",
      company: "Toko Serba Ada",
      comment:
        "Pemasangan CCTV oleh tim ADP Kreasi sangat rapi dan hasilnya memuaskan. Sistemnya mudah digunakan.",
      avatar: "https://placehold.co/60x60/10B981/FFFFFF/png?text=S",
    },
    {
      name: "Anton Wijaya",
      company: "Hotel Grand",
      comment:
        "Website yang dikembangkan ADP Kreasi membantu kami meningkatkan pemesanan online secara signifikan.",
      avatar: "https://placehold.co/60x60/4B5563/FFFFFF/png?text=A",
    },
  ];

  return (
    <section id="testimonials" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">
            Apa Kata Klien Kami
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Kepuasan klien adalah prioritas utama kami. Berikut testimoni dari
            beberapa klien yang telah bekerja sama dengan kami.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold text-gray-800">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gray-600">{testimonial.company}</p>
                </div>
              </div>
              <p className="text-gray-600 italic">"{testimonial.comment}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
