import React from 'react';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: "Ramesh Reddy",
    location: "Hyderabad",
    rating: 5,
    text: "An excellent stay for our family's Tirumala Darshan. The rooms were impeccably clean, and the staff was very accommodating. The proximity to the temple made our visit entirely stress-free.",
    date: "2 weeks ago"
  },
  {
    name: "Priya Sharma",
    location: "Bengaluru",
    rating: 5,
    text: "We booked the AC room for our parents. The 24/7 service and free WiFi were great additions. Most importantly, it felt safe and secure. Highly recommended for pilgrims!",
    date: "1 month ago"
  },
  {
    name: "Venkatesh Rao",
    location: "Chennai",
    rating: 5,
    text: "Very comfortable and affordable. The location opposite the Tirumala Museum is perfect. Getting around was easy, and the hospitality was truly traditional and welcoming.",
    date: "3 weeks ago"
  }
];

export function Reviews() {
  return (
    <div className="bg-surface-container-lowest py-24 px-4 sm:px-6 lg:px-8 border-t border-outline-variant/30">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a5f] mb-6">Guest Reviews</h2>
          <div className="h-1.5 w-24 bg-[#eab308] mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Hear what our guests have to say about their peaceful and comfortable stay during their pilgrimage.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white p-8 rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 relative group hover:-translate-y-2 transition-transform duration-300 flex flex-col h-full">
              <div className="absolute top-8 right-8 text-[#eab308]/20 group-hover:text-[#eab308]/40 transition-colors">
                <Quote className="w-12 h-12" />
              </div>
              <div className="flex gap-1 mb-6 relative z-10">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#eab308] text-[#eab308]" />
                ))}
              </div>
              <p className="text-gray-700 text-lg mb-8 relative z-10 leading-relaxed italic flex-grow">
                "{review.text}"
              </p>
              <div className="mt-auto border-t border-gray-100 pt-6 flex items-center justify-between relative z-10">
                <div>
                  <h4 className="font-bold text-[#1e3a5f] text-lg">{review.name}</h4>
                  <p className="text-sm text-gray-500">{review.location}</p>
                </div>
                <span className="text-xs text-gray-400 font-medium bg-gray-50 px-3 py-1 rounded-full">{review.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
