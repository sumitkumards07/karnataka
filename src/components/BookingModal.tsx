import React, { useState } from 'react';
import { X, MessageCircle, User, Phone, Users } from 'lucide-react';

export function BookingModal({ roomName, onClose, phoneNumber }: { roomName: string, onClose: () => void, phoneNumber: string }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    guests: '1',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `*New Booking Enquiry*\n\n*Room:* ${roomName}\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Guests:* ${formData.guests}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    setTimeout(() => {
      onClose();
    }, 500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md p-4 transition-all">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] flex flex-col overflow-hidden animate-in fade-in zoom-in duration-300">
        <div className="bg-gradient-to-r from-[#1e3a5f] to-[#2a4d7c] p-6 flex justify-between items-center text-white shrink-0 relative overflow-hidden">
          <div className="absolute inset-0 bg-white/5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '16px 16px' }}></div>
          <div className="relative z-10">
            <h3 className="text-xl font-bold">Enquire for {roomName}</h3>
            <p className="text-sm text-blue-100 mt-1">Fill out the details below to book</p>
          </div>
          <button type="button" onClick={onClose} className="text-white hover:bg-white/20 p-2 rounded-full transition relative z-10">
            <X size={24} />
          </button>
        </div>
        <div className="overflow-y-auto p-8 bg-gray-50">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="flex items-center text-sm font-semibold text-gray-700 mb-1.5">
                <User size={16} className="mr-2 text-[#1e3a5f]" /> Full Name
              </label>
              <input required type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full border border-gray-200 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#1e3a5f] focus:border-transparent transition-all bg-white hover:border-gray-300 shadow-sm" placeholder="John Doe" />
            </div>
            <div>
              <label htmlFor="phone" className="flex items-center text-sm font-semibold text-gray-700 mb-1.5">
                <Phone size={16} className="mr-2 text-[#1e3a5f]" /> Phone Number
              </label>
              <input required type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full border border-gray-200 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#1e3a5f] focus:border-transparent transition-all bg-white hover:border-gray-300 shadow-sm" placeholder="+91 9876543210" />
            </div>
            <div>
              <label htmlFor="guests" className="flex items-center text-sm font-semibold text-gray-700 mb-1.5">
                <Users size={16} className="mr-2 text-[#1e3a5f]" /> Number of Guests
              </label>
              <select id="guests" name="guests" value={formData.guests} onChange={handleChange} className="w-full border border-gray-200 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#1e3a5f] focus:border-transparent transition-all bg-white hover:border-gray-300 shadow-sm appearance-none cursor-pointer">
                <option value="1">1 Guest</option>
                <option value="2">2 Guests</option>
                <option value="3">3 Guests</option>
                <option value="4">4 Guests</option>
                <option value="5+">5+ Guests</option>
              </select>
            </div>
            <button type="submit" className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-4 px-4 rounded-xl shadow-[0_4px_14px_0_rgba(37,211,102,0.39)] hover:shadow-[0_6px_20px_rgba(37,211,102,0.23)] hover:-translate-y-0.5 transition-all flex justify-center items-center mt-8">
              <MessageCircle className="mr-2 h-6 w-6" /> Send Enquiry via WhatsApp
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
