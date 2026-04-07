import React, { useState, useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Youtube, Menu, X, MessageCircle } from 'lucide-react';

export const PHONE_NUMBER = "919117274186";

export function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-[#fdfbf4] font-sans text-gray-800 flex flex-col">


      {/* Navbar */}
      <nav className="bg-white shadow-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex items-center">
              <Link to="/" className="flex-shrink-0 flex items-center">
                <img className="h-16 w-auto" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Seal_of_Karnataka.svg/1200px-Seal_of_Karnataka.svg.png" alt="Logo" referrerPolicy="no-referrer" />
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className={`px-3 py-2 rounded-md text-sm font-medium ${isActive('/') ? 'text-[#1e3a5f] border-b-2 border-[#1e3a5f]' : 'text-gray-600 hover:text-[#1e3a5f]'}`}>Home</Link>
              <Link to="/about" className={`px-3 py-2 rounded-md text-sm font-medium ${isActive('/about') ? 'text-[#1e3a5f] border-b-2 border-[#1e3a5f]' : 'text-gray-600 hover:text-[#1e3a5f]'}`}>About</Link>
              <Link to="/rooms" className={`px-3 py-2 rounded-md text-sm font-medium ${isActive('/rooms') ? 'text-[#1e3a5f] border-b-2 border-[#1e3a5f]' : 'text-gray-600 hover:text-[#1e3a5f]'}`}>Room Booking</Link>
              <Link to="/faq" className={`px-3 py-2 rounded-md text-sm font-medium ${isActive('/faq') ? 'text-[#1e3a5f] border-b-2 border-[#1e3a5f]' : 'text-gray-600 hover:text-[#1e3a5f]'}`}>FAQ</Link>
              <Link to="/contact" className={`px-3 py-2 rounded-md text-sm font-medium ${isActive('/contact') ? 'text-[#1e3a5f] border-b-2 border-[#1e3a5f]' : 'text-gray-600 hover:text-[#1e3a5f]'}`}>Contact</Link>
            </div>
            <div className="-mr-2 flex items-center md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#1e3a5f]">
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link to="/" onClick={() => setIsMenuOpen(false)} className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/') ? 'text-gray-900 bg-gray-50' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'}`}>Home</Link>
              <Link to="/about" onClick={() => setIsMenuOpen(false)} className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/about') ? 'text-gray-900 bg-gray-50' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'}`}>About</Link>
              <Link to="/rooms" onClick={() => setIsMenuOpen(false)} className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/rooms') ? 'text-gray-900 bg-gray-50' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'}`}>Room Booking</Link>
              <Link to="/faq" onClick={() => setIsMenuOpen(false)} className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/faq') ? 'text-gray-900 bg-gray-50' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'}`}>FAQ</Link>
              <Link to="/contact" onClick={() => setIsMenuOpen(false)} className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/contact') ? 'text-gray-900 bg-gray-50' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'}`}>Contact</Link>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-[#1e3a5f] text-white pt-16 pb-8 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* About Us */}
            <div>
              <h3 className="text-xl font-bold mb-6">About Us</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                <strong>Karnataka Pravasi Soudha</strong> is the best in class service of budget accommodation in Tirupati, offering for prices options, for seniors pilgrims, clean and accessible amenities out by a various amenities.
              </p>
            </div>
            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-6">Quick Links</h3>
              <ul className="space-y-3 text-sm text-gray-300">
                <li><Link to="/privacy-policy" className="hover:text-white transition">Privacy Policy</Link></li>
                <li><Link to="/terms-conditions" className="hover:text-white transition">Terms & Conditions</Link></li>
                <li><Link to="/disclaimer" className="hover:text-white transition">Disclaimer</Link></li>
                <li><Link to="/faq" className="hover:text-white transition">FAQ</Link></li>
              </ul>
            </div>
            {/* Work Hours */}
            <div>
              <h3 className="text-xl font-bold mb-6">Work Hours</h3>
              <p className="text-sm text-gray-300 mb-6 font-medium">
                Mon-Sun 24x7
              </p>
              <Link to="/rooms" className="inline-block bg-[#eab308] hover:bg-[#ca8a04] text-[#1e3a5f] font-bold py-3 px-4 rounded transition text-sm text-center shadow-md">
                Click here to Book Your Desirable Stay Today !
              </Link>
            </div>
            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-bold mb-6">Contact Info</h3>
              <ul className="space-y-4 text-sm text-gray-300">
                <li className="flex items-start">
                  <MapPin className="mr-3 h-5 w-5 flex-shrink-0 text-[#eab308]" />
                  <span>123 Karnataka Pravasi Soudha<br />Tirumala 797821</span>
                </li>
                <li className="flex items-center">
                  <Phone className="mr-3 h-5 w-5 flex-shrink-0 text-[#eab308]" />
                  <a href={`tel:+${PHONE_NUMBER}`} className="hover:text-white transition">+91 9117274186</a>
                </li>
                <li className="flex items-center">
                  <Mail className="mr-3 h-5 w-5 flex-shrink-0 text-[#eab308]" />
                  <a href="mailto:info@karnatakapravasisoudha.com" className="hover:text-white transition">info@karnatakapravasisoudha.com</a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-4 mb-4 md:mb-0">
              <a href="#" className="bg-blue-600 p-2 rounded-full hover:bg-blue-700 transition"><Facebook size={18} /></a>
              <a href="#" className="bg-blue-400 p-2 rounded-full hover:bg-blue-500 transition"><Twitter size={18} /></a>
              <a href="#" className="bg-pink-600 p-2 rounded-full hover:bg-pink-700 transition"><Instagram size={18} /></a>
              <a href="#" className="bg-red-600 p-2 rounded-full hover:bg-red-700 transition"><Youtube size={18} /></a>
            </div>
            <p className="text-sm text-gray-400 text-center md:text-right">
              © 1975 all Rights reserved to Karnataka Pravasi Soudha Tirumala
            </p>
          </div>
        </div>
      </footer>

      {/* Floating Action Buttons */}
      <a
        href={`tel:+${PHONE_NUMBER}`}
        className="fixed bottom-6 left-6 bg-[#2e7d32] text-white p-4 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 hover:-translate-y-1 z-50 flex items-center justify-center"
        aria-label="Call Us"
      >
        <Phone className="h-6 w-6" />
      </a>

      <a
        href={`https://wa.me/${PHONE_NUMBER}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 hover:-translate-y-1 z-50 flex items-center justify-center"
        aria-label="WhatsApp Us"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </div>
  );
}
