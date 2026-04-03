import React, { useState } from 'react';
import { Users, Bed, Wifi, Coffee, CheckCircle } from 'lucide-react';
import { PHONE_NUMBER } from '../components/Layout';
import { BookingModal } from '../components/BookingModal';

export function Rooms() {
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
      <div className="bg-[#1e3a5f] text-white py-12 text-center">
        <h1 className="text-4xl font-bold">Room Booking</h1>
      </div>

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
