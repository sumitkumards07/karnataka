import React, { useState } from 'react';
import { CheckCircle, MapPin, ShieldCheck, Car, Wifi, Coffee } from 'lucide-react';
import { PHONE_NUMBER } from '../components/Layout';
import { BookingModal } from '../components/BookingModal';

export function About() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  return (
    <>
      <div className="bg-[#1e3a5f] text-white py-12 text-center">
        <h1 className="text-4xl font-bold">About Us</h1>
      </div>

      {/* About Section (SEO Optimized) */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-4">Affordable and Comfortable Rooms at Karnataka Pravasi Soudha</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Looking for budget-friendly rooms near <strong>Karnataka Pravasi Soudha Tirumala</strong>? We offer clean, comfortable, and affordable rooms for pilgrims, travelers, and families visiting Tirumala.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-[#1e3a5f] mb-4">Why Choose Karnataka Pravasi Soudha for Your Stay?</h3>
            <p className="text-gray-700 mb-6">Our goal is simple: provide the best rooms at the lowest prices without compromising on comfort, safety, or convenience.</p>
            <ul className="space-y-4">
              <li className="flex items-start"><CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" /><span><strong>Best Prices Guaranteed:</strong> Enjoy the most affordable rooms in Karnataka Pravasi Soudha.</span></li>
              <li className="flex items-start"><MapPin className="text-green-600 mr-3 mt-1 flex-shrink-0" /><span><strong>Prime Location:</strong> Stay close to the Tirumala Temple and major attractions.</span></li>
              <li className="flex items-start"><CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" /><span><strong>Clean and Comfortable Rooms:</strong> Well-maintained rooms with all essential amenities.</span></li>
              <li className="flex items-start"><ShieldCheck className="text-green-600 mr-3 mt-1 flex-shrink-0" /><span><strong>Safe and Peaceful Environment:</strong> Ideal for families, senior citizens, and solo travelers.</span></li>
              <li className="flex items-start"><CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" /><span><strong>Easy Booking:</strong> Quick and hassle-free room booking in Karnataka Pravasi Soudha.</span></li>
            </ul>
          </div>
          <div>
            <img className="rounded-2xl shadow-2xl w-full object-cover h-[450px]" src="/images/hero.png" alt="Karnataka Pravasi Soudha Tirumala Exterior" />
          </div>
        </div>

        <div className="bg-white p-10 rounded-2xl shadow-xl border border-gray-100 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-2 h-full bg-[#eab308]"></div>
          <h3 className="text-3xl font-bold text-[#1e3a5f] mb-6">Comfortable Rooms Near Tirumala Temple</h3>
          <p className="text-gray-700 mb-8 text-lg">Whether you are visiting for darshan, a spiritual trip, or sightseeing, our rooms are designed to make your stay stress-free and affordable.</p>
          <div className="grid sm:grid-cols-2 gap-6 mb-10">
            <div className="flex items-center p-5 bg-gray-50 rounded-xl border border-gray-100 transition-all hover:shadow-md"><CheckCircle className="text-[#eab308] mr-4 h-6 w-6" /> <span className="font-medium">Neat and hygienic beds with fresh linens</span></div>
            <div className="flex items-center p-5 bg-gray-50 rounded-xl border border-gray-100 transition-all hover:shadow-md"><CheckCircle className="text-[#eab308] mr-4 h-6 w-6" /> <span className="font-medium">Attached bathrooms with 24/7 hot & cold water</span></div>
            <div className="flex items-center p-5 bg-gray-50 rounded-xl border border-gray-100 transition-all hover:shadow-md"><CheckCircle className="text-[#eab308] mr-4 h-6 w-6" /> <span className="font-medium">24-hour electricity and safe environment</span></div>
            <div className="flex items-center p-5 bg-gray-50 rounded-xl border border-gray-100 transition-all hover:shadow-md"><CheckCircle className="text-[#eab308] mr-4 h-6 w-6" /> <span className="font-medium">Peaceful surroundings to rest and relax</span></div>
          </div>
          <div className="text-center bg-[#fdfbf4] p-8 rounded-2xl border border-[#eab308]/30">
            <h4 className="text-2xl font-bold text-gray-900 mb-3">Book Your Room at the Best Price</h4>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">Don’t overpay for accommodation in Tirumala. Karnataka Pravasi Soudha provides rooms at the best prices, ensuring a comfortable stay near all major attractions.</p>
            <p className="text-xl font-semibold text-[#2e7d32] mb-8">✨ Secure your peaceful stay today</p>
            <button onClick={() => setIsModalOpen(true)} className="bg-[#1e3a5f] hover:bg-[#2a4d7c] text-white font-bold py-4 px-10 rounded-full transition-all shadow-lg transform hover:scale-105 active:scale-95">
              Enquire Now
            </button>
          </div>
        </div>
      </div>




      {isModalOpen && (
        <BookingModal 
          roomName="General Enquiry" 
          onClose={() => setIsModalOpen(false)} 
          phoneNumber={PHONE_NUMBER}
        />
      )}
    </>
  );
}
