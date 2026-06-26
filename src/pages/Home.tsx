import React from 'react';
import { PHONE_NUMBER } from '../components/Layout';
import { About } from './About';
import { Rooms } from './Rooms';
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
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="relative h-[75vh] min-h-[600px] w-full flex items-center justify-center overflow-hidden">
            <div 
              className="absolute inset-0 bg-cover bg-center transform scale-105" 
              style={{ backgroundImage: "url('/images/hero-new.jpg')" }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/80"></div>
            <div className="relative z-10 text-center max-w-4xl px-6 sm:px-12 flex flex-col items-center">
              <span className="text-[#eab308] font-semibold tracking-widest uppercase text-sm mb-4 block">Welcome to</span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
                Your Premium Stay <br/> in <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-[#eab308]">Tirumala</span>
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

          {/* Why Choose Us */}
          <section className="max-w-[1200px] mx-auto px-gutter py-xl">
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

          {/* Featured Rooms */}
          <section className="bg-surface-container-lowest py-xl border-t border-outline-variant/30">
            <div className="max-w-[1200px] mx-auto px-gutter">
              <div className="flex justify-between items-end mb-lg">
                <div>
                  <h2 className="text-headline-lg font-headline-lg text-on-surface mb-sm">Featured Rooms</h2>
                  <p className="text-body-md font-body-md text-on-surface-variant">Select the perfect accommodation for your stay.</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
                
                {/* Room Card 1 */}
                <div className="bento-card bg-surface-bright rounded-xl overflow-hidden border border-outline-variant flex flex-col h-full">
                  <div className="h-48 w-full bg-surface-container-high relative">
                    <img className="w-full h-full object-cover" src="/images/standard-room.png" alt="Deluxe Room" />
                    <div className="absolute top-sm right-sm bg-surface-container-lowest/90 px-sm py-xs rounded-full text-label-md font-label-md text-on-surface backdrop-blur-sm shadow-sm flex items-center gap-xs">
                      <Star className="w-4 h-4 text-secondary-container fill-secondary-container" /> 4.5
                    </div>
                  </div>
                  <div className="p-md flex flex-col flex-grow">
                    <h3 className="text-headline-md font-headline-md text-on-surface mb-xs">Deluxe Room</h3>
                    <div className="flex flex-wrap gap-xs mb-md mt-auto">
                      <span className="bg-surface-container py-xs px-sm rounded-md text-body-sm font-body-sm text-on-surface-variant flex items-center gap-xs"><Snowflake className="w-4 h-4"/> AC</span>
                      <span className="bg-surface-container py-xs px-sm rounded-md text-body-sm font-body-sm text-on-surface-variant flex items-center gap-xs"><Wifi className="w-4 h-4"/> WiFi</span>
                      <span className="bg-surface-container py-xs px-sm rounded-md text-body-sm font-body-sm text-on-surface-variant flex items-center gap-xs"><Monitor className="w-4 h-4"/> TV</span>
                    </div>
                    <div className="flex justify-between items-center mt-sm pt-sm border-t border-outline-variant/50">
                      <div>
                        <span className="text-price-display font-price-display text-on-surface">₹2,500</span>
                        <span className="text-body-sm font-body-sm text-on-surface-variant block">/ night</span>
                      </div>
                      <button onClick={() => handleBookRoom("Deluxe Room")} className="bg-secondary-container text-on-secondary font-label-md text-label-md px-md py-sm rounded-lg hover:bg-secondary transition-colors shadow-sm cursor-pointer">Book</button>
                    </div>
                  </div>
                </div>

                {/* Room Card 2 */}
                <div className="bento-card bg-surface-bright rounded-xl overflow-hidden border border-outline-variant flex flex-col h-full">
                  <div className="h-48 w-full bg-surface-container-high relative">
                    <img className="w-full h-full object-cover" src="/images/ac-room.png" alt="Executive Room" />
                    <div className="absolute top-sm right-sm bg-surface-container-lowest/90 px-sm py-xs rounded-full text-label-md font-label-md text-on-surface backdrop-blur-sm shadow-sm flex items-center gap-xs">
                      <Star className="w-4 h-4 text-secondary-container fill-secondary-container" /> 4.8
                    </div>
                    <div className="absolute top-sm left-sm bg-primary text-on-primary px-sm py-xs rounded-sm text-label-md font-label-md shadow-sm">
                        Popular
                    </div>
                  </div>
                  <div className="p-md flex flex-col flex-grow">
                    <h3 className="text-headline-md font-headline-md text-on-surface mb-xs">Executive Room</h3>
                    <div className="flex flex-wrap gap-xs mb-md mt-auto">
                      <span className="bg-surface-container py-xs px-sm rounded-md text-body-sm font-body-sm text-on-surface-variant flex items-center gap-xs"><Bed className="w-4 h-4"/> King Bed</span>
                      <span className="bg-surface-container py-xs px-sm rounded-md text-body-sm font-body-sm text-on-surface-variant flex items-center gap-xs"><Laptop className="w-4 h-4"/> Work Desk</span>
                    </div>
                    <div className="flex justify-between items-center mt-sm pt-sm border-t border-outline-variant/50">
                      <div>
                        <span className="text-price-display font-price-display text-on-surface">₹3,500</span>
                        <span className="text-body-sm font-body-sm text-on-surface-variant block">/ night</span>
                      </div>
                      <button onClick={() => handleBookRoom("Executive Room")} className="bg-secondary-container text-on-secondary font-label-md text-label-md px-md py-sm rounded-lg hover:bg-secondary transition-colors shadow-sm cursor-pointer">Book</button>
                    </div>
                  </div>
                </div>

                {/* Room Card 3 */}
                <div className="bento-card bg-surface-bright rounded-xl overflow-hidden border border-outline-variant flex flex-col h-full">
                  <div className="h-48 w-full bg-surface-container-high relative">
                    <img className="w-full h-full object-cover" src="/images/family-room.png" alt="Luxury Suite" />
                    <div className="absolute top-sm right-sm bg-surface-container-lowest/90 px-sm py-xs rounded-full text-label-md font-label-md text-on-surface backdrop-blur-sm shadow-sm flex items-center gap-xs">
                      <Star className="w-4 h-4 text-secondary-container fill-secondary-container" /> 5.0
                    </div>
                  </div>
                  <div className="p-md flex flex-col flex-grow">
                    <h3 className="text-headline-md font-headline-md text-on-surface mb-xs">Luxury Suite</h3>
                    <div className="flex flex-wrap gap-xs mb-md mt-auto">
                      <span className="bg-surface-container py-xs px-sm rounded-md text-body-sm font-body-sm text-on-surface-variant flex items-center gap-xs"><Sofa className="w-4 h-4"/> Living Area</span>
                      <span className="bg-surface-container py-xs px-sm rounded-md text-body-sm font-body-sm text-on-surface-variant flex items-center gap-xs"><Bath className="w-4 h-4"/> Bath Tub</span>
                    </div>
                    <div className="flex justify-between items-center mt-sm pt-sm border-t border-outline-variant/50">
                      <div>
                        <span className="text-price-display font-price-display text-on-surface">₹5,000</span>
                        <span className="text-body-sm font-body-sm text-on-surface-variant block">/ night</span>
                      </div>
                      <button onClick={() => handleBookRoom("Luxury Suite")} className="bg-secondary-container text-on-secondary font-label-md text-label-md px-md py-sm rounded-lg hover:bg-secondary transition-colors shadow-sm cursor-pointer">Book</button>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>

          <section id="about">
            <About />
          </section>
          
          <section id="rooms">
            <Rooms />
          </section>
          
          <section id="faq">
            <FAQ />
          </section>
          
          <section id="contact">
            <Contact />
          </section>
        </main>
      </div>
    </>
  );
}
