import React from 'react';
import { PHONE_NUMBER } from '../components/Layout';
import { About } from './About';
import { Rooms } from './Rooms';
import { Reviews } from './Reviews';
import { Heritage } from './Heritage';
import { FAQ } from './FAQ';
import { Contact } from './Contact';
import { Calendar, Users, ChevronDown, Search, MapPin, Wifi, HeadphonesIcon, Bed, Monitor, Bath, Laptop, Star, Snowflake, Coffee, Sofa, Image, Phone } from 'lucide-react';

export function Home() {
  const handleBookRoom = (roomName: string) => {
    const message = `Hello, I am interested in booking the *${roomName}* at Karnataka Pravasi Soudha. Please provide more details.`;
    const whatsappUrl = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      <div className="bg-background text-on-background font-body-md flex flex-col">
        <main className="flex-grow flex flex-col">
          {/* Hero Section */}
          <section className="relative h-[75vh] min-h-[600px] w-full flex items-center justify-center overflow-hidden order-1">
            <div 
              className="absolute inset-0 bg-cover bg-center transform scale-105" 
              style={{ backgroundImage: "url('/images/hero-new.jpg')" }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/80"></div>
            <div className="relative z-10 text-center max-w-4xl px-6 sm:px-12 flex flex-col items-center">
              <span className="text-[#eab308] font-semibold tracking-widest uppercase text-sm mb-4 block">Welcome to</span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
                Karnataka Pravasi Soudha <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-[#eab308]">Guest House</span>
              </h1>

              <div className="flex flex-col sm:flex-row justify-center gap-5 w-full sm:w-auto">
                <button 
                  onClick={() => handleBookRoom('Deluxe Room')} 
                  className="bg-white text-[#1e3a5f] hover:bg-gray-100 font-bold py-4 px-10 rounded-full transition-all duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-2xl transform hover:-translate-y-1 text-lg flex items-center justify-center"
                >
                  Book Your Stay
                </button>
                <a 
                  href={`tel:+${PHONE_NUMBER}`} 
                  className="bg-black/20 backdrop-blur-sm border-2 border-white/80 text-white hover:bg-white hover:text-[#1e3a5f] font-bold py-4 px-10 rounded-full transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 text-lg flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" /> Speak to Us
                </a>
              </div>
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="order-2 md:order-3">
            <About />
          </section>
          
          {/* Rooms Section */}
          <section id="rooms" className="order-3 md:order-2">
            <Rooms />
          </section>

          {/* Why Choose Us */}
          <section className="max-w-[1200px] mx-auto px-gutter py-xl order-4 md:order-5">
            <div className="text-center mb-lg">
              <h2 className="text-headline-lg font-headline-lg text-on-surface mb-sm">Why Choose Us</h2>
              <p className="text-body-md font-body-md text-on-surface-variant">Designed for your comfort and convenience during your pilgrimage.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
              <div className="bg-surface-container-low p-md rounded-xl text-center border border-outline-variant/50">
                <div className="w-16 h-16 bg-primary-fixed rounded-full flex items-center justify-center mx-auto mb-sm">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-headline-md font-headline-md text-on-surface mb-xs">Close to Temple</h3>
                <p className="text-body-sm font-body-sm text-on-surface-variant">Prime location ensuring quick and easy access for Darshan.</p>
              </div>
              <div className="bg-surface-container-low p-md rounded-xl text-center border border-outline-variant/50">
                <div className="w-16 h-16 bg-primary-fixed rounded-full flex items-center justify-center mx-auto mb-sm">
                  <Wifi className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-headline-md font-headline-md text-on-surface mb-xs">Free WiFi</h3>
                <p className="text-body-sm font-body-sm text-on-surface-variant">Stay connected with high-speed internet throughout the property.</p>
              </div>
              <div className="bg-surface-container-low p-md rounded-xl text-center border border-outline-variant/50">
                <div className="w-16 h-16 bg-primary-fixed rounded-full flex items-center justify-center mx-auto mb-sm">
                  <HeadphonesIcon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-headline-md font-headline-md text-on-surface mb-xs">24/7 Service</h3>
                <p className="text-body-sm font-body-sm text-on-surface-variant">Our dedicated staff is available round-the-clock to assist you.</p>
              </div>
            </div>
          </section>

          <section id="reviews" className="order-5 md:order-6">
            <Reviews />
          </section>

          <section id="faq" className="order-6 md:order-7">
            <FAQ />
          </section>
          
          <section id="contact" className="order-7 md:order-8">
            <Contact />
          </section>

          <section id="heritage" className="order-last md:order-4">
            <Heritage />
          </section>
        </main>
      </div>
    </>
  );
}
