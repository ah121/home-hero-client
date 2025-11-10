import React from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const Testimonial = () => {
  const testimonialsData = [
    {
      id: 1,
      quote:
        "The plumber arrived within 30 minutes for an emergency leak! Fast, professional, and the price was fair. Highly recommend this platform.",
      name: "Sarah K.",
      rating: 5,
    },
    {
      id: 2,
      quote:
        "Booking a deep cleaning service was seamless. The house was spotless. It's great to have all these reliable services in one place.",
      name: "David L.",
      rating: 5,
    },
    {
      id: 3,
      quote:
        "I used them for an electrical inspection before buying a house. The certified electrician was thorough and provided a detailed report immediately.",
      name: "Jessica M.",
      rating: 5,
    },
  ];
  return (
    <section className="container mx-auto px-4 py-16 bg-gray-50 rounded-xl shadow-inner my-10">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-indigo-700 mb-2">
          What Our Customers Say 💬
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Don't just take our word for it—read reviews from verified users who
          found their perfect service provider.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonialsData.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-white p-6 rounded-xl shadow-xl hover:shadow-2xl transition duration-300 border-l-4 border-l-indigo-500 flex flex-col justify-between h-full"
          >
            <div>
              <FaQuoteLeft className="text-3xl text-indigo-400 mb-4" />
              <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
            </div>

            <div className="pt-4 border-t border-gray-100 mt-4">
              <span className="text-xl font-semibold mr-2 text-gray-800">
                {testimonial.name}
              </span>
              <div className="flex text-yellow-500 mt-1">
                {Array(testimonial.rating)
                  .fill(0)
                  .map((_, i) => (
                    <FaStar key={i} />
                  ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
