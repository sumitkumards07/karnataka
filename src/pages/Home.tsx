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
      image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=800&auto=format&fit=crop",
      features: ["2 Guests", "1 Double Bed", "Attached Bath", "Fan"],
      description: "Clean and comfortable budget room ideal for short stays."
    },
    {
      name: "Standard AC Room",
      price: "₹1,200",
      image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=800&auto=format&fit=crop",
      features: ["2 Guests", "1 Double Bed", "Air Conditioning", "TV"],
      description: "Comfortable air-conditioned room for a relaxing stay."
    },
    {
      name: "Family AC Room",
      price: "₹2,000",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800&auto=format&fit=crop",
      features: ["4 Guests", "2 Double Beds", "Air Conditioning", "TV"],
      description: "Spacious room perfect for families or groups of four."
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="relative bg-gray-900 h-[60vh] min-h-[400px] flex items-center justify-center">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=2070&auto=format&fit=crop"
            alt="Tirumala Temple Night"
            className="w-full h-full object-cover opacity-60"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-8 drop-shadow-lg">
            Welcome to Karnataka Pravasi Soudha Tirumala
          </h1>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a href={`tel:+${PHONE_NUMBER}`} className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#2e7d32] hover:bg-[#1b5e20] transition shadow-lg">
              <Phone className="mr-2 h-5 w-5" /> Call Now
            </a>
            <a href={`https://wa.me/${PHONE_NUMBER}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#25D366] hover:bg-[#128C7E] transition shadow-lg">
              <MessageCircle className="mr-2 h-5 w-5" /> WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Room Booking Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#1e3a5f] mb-4">Our Accommodation Options</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">Choose from our range of comfortable and affordable rooms designed to make your stay in Tirumala pleasant and peaceful.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 flex flex-col transition hover:shadow-xl">
              <div className="relative h-64">
                <img src={room.image} alt={room.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                <div className="absolute top-4 right-4 bg-[#eab308] text-[#1e3a5f] font-bold px-3 py-1 rounded-full shadow-md">
                  {room.price} <span className="text-xs font-normal">/ night</span>
                </div>
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold text-[#1e3a5f] mb-2">{room.name}</h3>
                <p className="text-gray-600 mb-4 text-sm">{room.description}</p>
                
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {room.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
                
                <button 
                  onClick={() => openBookingModal(room.name)}
                  className="mt-auto w-full bg-[#1e3a5f] hover:bg-[#2a4d7c] text-white font-bold py-3 px-4 rounded transition"
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-4">Why Choose Karnataka Pravasi Soudha for Your Stay?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our goal is simple: provide the best rooms at the lowest prices without compromising on comfort, safety, or convenience.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <ul className="space-y-6">
                <li className="flex items-start bg-white p-4 rounded-lg shadow-sm">
                  <CheckCircle className="text-green-600 mr-4 mt-1 flex-shrink-0 h-6 w-6" />
                  <div>
                    <strong className="block text-lg text-[#1e3a5f]">Best Prices Guaranteed</strong>
                    <span className="text-gray-600">Enjoy the most affordable rooms in Karnataka Pravasi Soudha.</span>
                  </div>
                </li>
                <li className="flex items-start bg-white p-4 rounded-lg shadow-sm">
                  <MapPin className="text-green-600 mr-4 mt-1 flex-shrink-0 h-6 w-6" />
                  <div>
                    <strong className="block text-lg text-[#1e3a5f]">Prime Location</strong>
                    <span className="text-gray-600">Stay close to the Tirumala Temple and major attractions.</span>
                  </div>
                </li>
                <li className="flex items-start bg-white p-4 rounded-lg shadow-sm">
                  <CheckCircle className="text-green-600 mr-4 mt-1 flex-shrink-0 h-6 w-6" />
                  <div>
                    <strong className="block text-lg text-[#1e3a5f]">Clean and Comfortable Rooms</strong>
                    <span className="text-gray-600">Well-maintained rooms with all essential amenities.</span>
                  </div>
                </li>
                <li className="flex items-start bg-white p-4 rounded-lg shadow-sm">
                  <ShieldCheck className="text-green-600 mr-4 mt-1 flex-shrink-0 h-6 w-6" />
                  <div>
                    <strong className="block text-lg text-[#1e3a5f]">Safe and Peaceful Environment</strong>
                    <span className="text-gray-600">Ideal for families, senior citizens, and solo travelers.</span>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <img className="rounded-xl shadow-2xl w-full object-cover h-[500px]" src="https://images.unsplash.com/photo-1600080301383-29dc52101340?q=80&w=1000&auto=format&fit=crop" alt="Karnataka Pravasi Soudha Tirumala" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
      </div>

      {/* Nearby Places Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-[#1e3a5f] mb-10 text-center">Nearby Places to Visit</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {/* Place 1 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src="https://images.unsplash.com/photo-1623062833633-899401768412?q=80&w=400&auto=format&fit=crop" alt="Sri Venkateswara Temple" className="w-full h-40 object-cover" referrerPolicy="no-referrer" />
            <div className="p-4">
              <h3 className="font-bold text-gray-900 mb-2 text-sm">1. Sri Venkateswara Temple, Tirumala</h3>
              <p className="text-xs text-gray-600">This is the main deity of budget Venkateswara in the world and it will be right in Tirumala is sitors.</p>
            </div>
          </div>
          {/* Place 2 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src="https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=400&auto=format&fit=crop" alt="Tirumala Museum" className="w-full h-40 object-cover" referrerPolicy="no-referrer" />
            <div className="p-4">
              <h3 className="font-bold text-gray-900 mb-2 text-sm">2. Tirumala Museum</h3>
              <p className="text-xs text-gray-600">Right the place in Sri Venkateswara Pravasi Soudha. Tirumala museum is ancient artifacts, temple and central for S Tirumala culture.</p>
            </div>
          </div>
          {/* Place 3 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=400&auto=format&fit=crop" alt="Natural Arch" className="w-full h-40 object-cover" referrerPolicy="no-referrer" />
            <div className="p-4">
              <h3 className="font-bold text-gray-900 mb-2 text-sm">3. Natural Arch</h3>
              <p className="text-xs text-gray-600">A rare geological Natural Arch from has a natural arch in its and sing-oear seir of page Padaki.</p>
            </div>
          </div>
          {/* Place 4 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src="https://images.unsplash.com/photo-1433086966358-54859d0ed716?q=80&w=400&auto=format&fit=crop" alt="Chakra Theerthan" className="w-full h-40 object-cover" referrerPolicy="no-referrer" />
            <div className="p-4">
              <h3 className="font-bold text-gray-900 mb-2 text-sm">4. Chakra Theerthan</h3>
              <p className="text-xs text-gray-600">A peaceful setting in the Seshachalam hills is Tirumala the site is an appeal series references in the scripts.</p>
            </div>
          </div>
          {/* Place 5 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src="https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=400&auto=format&fit=crop" alt="Akasa Ganga" className="w-full h-40 object-cover" referrerPolicy="no-referrer" />
            <div className="p-4">
              <h3 className="font-bold text-gray-900 mb-2 text-sm">5. Akasa Ganga</h3>
              <p className="text-xs text-gray-600">A reverend them literally holistically collected w-wans for temple, is short share some ample about half bell same in the visit.</p>
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
