import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { PHONE_NUMBER } from '../components/Layout';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `*New Contact Enquiry*%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Phone:* ${formData.phone}%0A*Message:* ${formData.message}`;
    const whatsappUrl = `https://wa.me/${PHONE_NUMBER}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      <div className="bg-[#1e3a5f] text-white py-12 text-center">
        <h1 className="text-4xl font-bold">Contact Us</h1>
      </div>

      <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold text-[#1e3a5f] mb-6">Get in Touch</h2>
            <p className="text-gray-600 mb-8">
              Have questions about room availability, group bookings, or special requirements? 
              Contact us using the details below or fill out the form, and our team will get back to you promptly.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-[#eab308] p-3 rounded-full text-[#1e3a5f] mr-4 flex-shrink-0">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900">Our Address</h3>
                  <p className="text-gray-600 mt-1">123 Karnataka Pravasi Soudha<br />Tirumala, Andhra Pradesh 797821<br />India</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-[#eab308] p-3 rounded-full text-[#1e3a5f] mr-4 flex-shrink-0">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900">Phone Number</h3>
                  <p className="text-gray-600 mt-1">
                    <a href={`tel:+${PHONE_NUMBER}`} className="hover:text-[#1e3a5f] transition">+91 7547872715</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-[#eab308] p-3 rounded-full text-[#1e3a5f] mr-4 flex-shrink-0">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900">Email Address</h3>
                  <p className="text-gray-600 mt-1">
                    <a href="mailto:info@karnatakapravasisoudha.com" className="hover:text-[#1e3a5f] transition">info@karnatakapravasisoudha.com</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-[#eab308] p-3 rounded-full text-[#1e3a5f] mr-4 flex-shrink-0">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900">Working Hours</h3>
                  <p className="text-gray-600 mt-1">24/7 Reception & Support</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-[#1e3a5f] mb-6">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input required type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#1e3a5f]" placeholder="Your Name" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input required type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#1e3a5f]" placeholder="your@email.com" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input required type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#1e3a5f]" placeholder="+91 9876543210" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea required id="message" name="message" value={formData.message} onChange={handleChange} rows={4} className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#1e3a5f]" placeholder="How can we help you?"></textarea>
              </div>
              <button type="submit" className="w-full bg-[#1e3a5f] hover:bg-[#2a4d7c] text-white font-bold py-3 px-4 rounded-md transition flex justify-center items-center mt-4">
                <Send className="mr-2 h-5 w-5" /> Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
