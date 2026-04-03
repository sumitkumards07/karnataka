import React, { useState } from 'react';
import { X, MessageCircle } from 'lucide-react';

export function BookingModal({ roomName, onClose, phoneNumber }: { roomName: string, onClose: () => void, phoneNumber: string }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    guests: '1',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `*New Booking Enquiry*%0A%0A*Room:* ${roomName}%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Check-in:* ${formData.checkIn}%0A*Check-out:* ${formData.checkOut}%0A*Guests:* ${formData.guests}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in duration-200">
        <div className="bg-[#1e3a5f] p-4 flex justify-between items-center text-white">
          <h3 className="text-lg font-bold">Enquire for {roomName}</h3>
          <button onClick={onClose} className="text-white hover:text-gray-300 transition">
            <X size={24} />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input required type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#1e3a5f]" placeholder="John Doe" />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
            <input required type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#1e3a5f]" placeholder="+91 9876543210" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="checkIn" className="block text-sm font-medium text-gray-700 mb-1">Check-in Date</label>
              <input required type="date" id="checkIn" name="checkIn" value={formData.checkIn} onChange={handleChange} className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#1e3a5f]" />
            </div>
            <div>
              <label htmlFor="checkOut" className="block text-sm font-medium text-gray-700 mb-1">Check-out Date</label>
              <input required type="date" id="checkOut" name="checkOut" value={formData.checkOut} onChange={handleChange} className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#1e3a5f]" />
            </div>
          </div>
          <div>
            <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-1">Number of Guests</label>
            <select id="guests" name="guests" value={formData.guests} onChange={handleChange} className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#1e3a5f]">
              <option value="1">1 Guest</option>
              <option value="2">2 Guests</option>
              <option value="3">3 Guests</option>
              <option value="4">4 Guests</option>
              <option value="5+">5+ Guests</option>
            </select>
          </div>
          <button type="submit" className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-3 px-4 rounded-md transition flex justify-center items-center mt-6">
            <MessageCircle className="mr-2 h-5 w-5" /> Send via WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
}
