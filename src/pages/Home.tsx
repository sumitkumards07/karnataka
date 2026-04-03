import React, { useState } from 'react';
import { Phone, MessageCircle, CheckCircle, MapPin, ShieldCheck } from 'lucide-react';
import { PHONE_NUMBER } from '../components/Layout';
import { BookingModal } from '../components/BookingModal';

export function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState('');

  const openBookingModal = (roomName: string) => {
    setSelectedRoom(roomName);
    setIsModalOpen(true);
  };

  const closeBookingModal = () => {
    setIsModalOpen(false);
    setSelectedRoom('');
  };

  const rooms = [
    {
      name: "Standard Non-AC Room",
      price: "₹800",
      image: "/images/standard-room.png",
      features: ["2 Guests", "1 Double Bed", "Attached Bath", "Fan"],
      description: "Clean and comfortable budget room ideal for short stays."
    },
    {
      name: "Standard AC Room",
      price: "₹1,200",
      image: "/images/ac-room.png",
      features: ["2 Guests", "1 Double Bed", "Air Conditioning", "TV"],
      description: "Comfortable air-conditioned room for a relaxing stay."
    },
    {
      name: "Family AC Room",
      price: "₹2,000",
      image: "/images/family-room.png",
      features: ["4 Guests", "2 Double Beds", "Air Conditioning", "TV"],
      description: "Spacious room perfect for families or groups of four."
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="relative bg-gray-900 h-[70vh] min-h-[500px] flex items-center justify-center">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="/images/hero.png"
            alt="Karnataka Pravasi Soudha Tirumala"
            className="w-full h-full object-cover opacity-70"
          />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 drop-shadow-2xl leading-tight">
            Karnataka Pravasi Soudha <span className="text-[#eab308]">Tirumala</span>
          </h1>
          <p className="text-xl text-white/90 mb-10 drop-shadow-md">Your peaceful sanctuary in the heart of the holy hills.</p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a href={`tel:+${PHONE_NUMBER}`} className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-full text-white bg-[#2e7d32] hover:bg-[#1b5e20] transition-all transform hover:scale-105 shadow-xl">
              <Phone className="mr-2 h-6 w-6" /> Call Now
            </a>
            <a href={`https://wa.me/${PHONE_NUMBER}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-full text-white bg-[#25D366] hover:bg-[#128C7E] transition-all transform hover:scale-105 shadow-xl">
              <MessageCircle className="mr-2 h-6 w-6" /> WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Room Booking Section */}
      <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#1e3a5f] mb-4">Our Accommodation Options</h2>
          <div className="w-24 h-1 bg-[#eab308] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">Choose from our range of comfortable and affordable rooms designed to make your stay in Tirumala pleasant and peaceful.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {rooms.map((room, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 flex flex-col transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="relative h-72">
                <img src={room.image} alt={room.name} className="w-full h-full object-cover" />
                <div className="absolute top-4 right-4 bg-[#eab308] text-[#1e3a5f] font-bold px-4 py-2 rounded-full shadow-lg text-lg">
                  {room.price} <span className="text-xs font-normal">/ night</span>
                </div>
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <h3 className="text-2xl font-bold text-[#1e3a5f] mb-3">{room.name}</h3>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed">{room.description}</p>
                
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {room.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
                
                <button 
                  onClick={() => openBookingModal(room.name)}
                  className="mt-auto w-full bg-[#1e3a5f] hover:bg-[#2a4d7c] text-white font-bold py-4 px-6 rounded-xl transition-all shadow-md active:scale-95"
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-[#f0f4f8] py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1e3a5f] mb-4">Experience True Hospitality</h2>
            <div className="w-24 h-1 bg-[#eab308] mx-auto mb-6"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <ul className="space-y-8">
                <li className="flex items-start bg-white p-6 rounded-2xl shadow-sm border-l-4 border-green-500 transition-all hover:shadow-md">
                  <CheckCircle className="text-green-600 mr-4 h-8 w-8 flex-shrink-0" />
                  <div>
                    <strong className="block text-xl text-[#1e3a5f] mb-1">Best Prices Guaranteed</strong>
                    <span className="text-gray-600">Enjoy the most affordable rooms without compromising on quality or service.</span>
                  </div>
                </li>
                <li className="flex items-start bg-white p-6 rounded-2xl shadow-sm border-l-4 border-[#eab308] transition-all hover:shadow-md">
                  <MapPin className="text-[#eab308] mr-4 h-8 w-8 flex-shrink-0" />
                  <div>
                    <strong className="block text-xl text-[#1e3a5f] mb-1">Prime Location</strong>
                    <span className="text-gray-600">Perfectly situated near the temple for easy access and a peaceful environment.</span>
                  </div>
                </li>
                <li className="flex items-start bg-white p-6 rounded-2xl shadow-sm border-l-4 border-blue-500 transition-all hover:shadow-md">
                  <ShieldCheck className="text-blue-500 mr-4 h-8 w-8 flex-shrink-0" />
                  <div>
                    <strong className="block text-xl text-[#1e3a5f] mb-1">Safe and Secure</strong>
                    <span className="text-gray-600">24/7 security and a peaceful atmosphere for a worry-free pilgrimage.</span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-tr from-[#1e3a5f] to-[#eab308] rounded-3xl blur-2xl opacity-20"></div>
                <img className="relative rounded-2xl shadow-2xl w-full object-cover h-[500px]" src="/images/hero.png" alt="Guest House Exterior" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Nearby Places Section */}
      <div className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-[#1e3a5f] mb-4 text-center">Tirumala Attractions</h2>
        <div className="w-24 h-1 bg-[#eab308] mx-auto mb-16"></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Place 1 */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden group">
            <div className="overflow-hidden h-48">
              <img src="https://images.unsplash.com/photo-1623062833633-899401768412?q=80&w=400&auto=format&fit=crop" alt="Sri Venkateswara Temple" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            </div>
            <div className="p-5">
              <h3 className="font-bold text-gray-900 mb-2 text-sm">Sri Venkateswara Temple</h3>
              <p className="text-xs text-gray-600 leading-relaxed">The main temple of Tirumala, a spiritual center for millions of devotees.</p>
            </div>
          </div>
          {/* Place 2 */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden group">
            <div className="overflow-hidden h-48">
              <img src="https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=400&auto=format&fit=crop" alt="Tirumala Museum" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            </div>
            <div className="p-5">
              <h3 className="font-bold text-gray-900 mb-2 text-sm">Tirumala Museum</h3>
              <p className="text-xs text-gray-600 leading-relaxed">Showcasing ancient artifacts and the rich cultural heritage of the temple.</p>
            </div>
          </div>
          {/* Place 3 */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden group">
            <div className="overflow-hidden h-48">
              <img src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=400&auto=format&fit=crop" alt="Natural Arch" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            </div>
            <div className="p-5">
              <h3 className="font-bold text-gray-900 mb-2 text-sm">Silathoranam (Natural Arch)</h3>
              <p className="text-xs text-gray-600 leading-relaxed">A geological marvel and a unique natural formation in the hills.</p>
            </div>
          </div>
          {/* Place 4 */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden group">
            <div className="overflow-hidden h-48">
              <img src="https://images.unsplash.com/photo-1433086966358-54859d0ed716?q=80&w=400&auto=format&fit=crop" alt="Chakra Theertham" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            </div>
            <div className="p-5">
              <h3 className="font-bold text-gray-900 mb-2 text-sm">Chakra Theertham</h3>
              <p className="text-xs text-gray-600 leading-relaxed">A serene water body with a beautiful waterfall and spiritual significance.</p>
            </div>
          </div>
          {/* Place 5 */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden group">
            <div className="overflow-hidden h-48">
              <img src="https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=400&auto=format&fit=crop" alt="Akasa Ganga" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            </div>
            <div className="p-5">
              <h3 className="font-bold text-gray-900 mb-2 text-sm">Akasa Ganga</h3>
              <p className="text-xs text-gray-600 leading-relaxed">A holy waterfall located just a short distance from the main temple.</p>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <BookingModal 
          roomName={selectedRoom} 
          onClose={closeBookingModal} 
          phoneNumber={PHONE_NUMBER}
        />
      )}
    </>
  );
}
