import React, { useState } from 'react';
import { BookingModal } from '../components/BookingModal';
import { PHONE_NUMBER } from '../components/Layout';
import { Calendar, Users, ChevronDown, Search, MapPin, Wifi, HeadphonesIcon, Bed, Monitor, Bath, Laptop, Star, Snowflake, Coffee, Sofa, Image } from 'lucide-react';

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

  return (
    <>
      <div className="bg-background text-on-background font-body-md flex flex-col">
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="relative h-[600px] w-full bg-surface-container-high flex items-center justify-center">
            <div 
              className="absolute inset-0 bg-cover bg-center" 
              style={{ backgroundImage: "url('/images/hero.png')" }}
            ></div>
            <div className="absolute inset-0 hero-overlay"></div>
            <div className="relative z-10 text-center max-w-[800px] px-gutter">
              <h1 className="text-display-lg font-display-lg text-on-primary mb-md">Find Peace & Comfort in Tirumala</h1>
              <p className="text-body-lg font-body-lg text-on-primary/90 mb-lg">Experience premium hospitality just steps away from divine blessings.</p>
            </div>
          </section>

          {/* Booking Widget (Overlapping Hero) */}
          <section className="max-w-[1200px] mx-auto px-gutter relative -mt-xl z-20 mb-xl">
            <div className="bg-surface-container-lowest rounded-xl shadow-[0px_8px_32px_rgba(0,0,0,0.12)] p-md flex flex-col md:flex-row gap-md items-end border border-outline-variant">
              <div className="w-full md:w-1/4">
                <label className="block text-label-md font-label-md text-on-surface-variant mb-xs">Check-in</label>
                <div className="relative">
                  <Calendar className="absolute left-sm top-1/2 -translate-y-1/2 text-outline w-5 h-5" />
                  <input className="w-full pl-xl pr-sm py-sm border border-outline-variant rounded-lg focus:border-primary focus:ring-1 focus:ring-primary outline-none text-body-md font-body-md bg-surface-bright text-on-surface" type="date" />
                </div>
              </div>
              <div className="w-full md:w-1/4">
                <label className="block text-label-md font-label-md text-on-surface-variant mb-xs">Check-out</label>
                <div className="relative">
                  <Calendar className="absolute left-sm top-1/2 -translate-y-1/2 text-outline w-5 h-5" />
                  <input className="w-full pl-xl pr-sm py-sm border border-outline-variant rounded-lg focus:border-primary focus:ring-1 focus:ring-primary outline-none text-body-md font-body-md bg-surface-bright text-on-surface" type="date" />
                </div>
              </div>
              <div className="w-full md:w-1/4">
                <label className="block text-label-md font-label-md text-on-surface-variant mb-xs">Rooms & Guests</label>
                <div className="relative">
                  <Users className="absolute left-sm top-1/2 -translate-y-1/2 text-outline w-5 h-5" />
                  <select className="w-full pl-xl pr-sm py-sm border border-outline-variant rounded-lg focus:border-primary focus:ring-1 focus:ring-primary outline-none text-body-md font-body-md bg-surface-bright text-on-surface appearance-none">
                    <option>1 Room, 2 Guests</option>
                    <option>1 Room, 3 Guests</option>
                    <option>2 Rooms, 4 Guests</option>
                  </select>
                  <ChevronDown className="absolute right-sm top-1/2 -translate-y-1/2 text-outline pointer-events-none w-5 h-5" />
                </div>
              </div>
              <div className="w-full md:w-1/4">
                <button className="w-full bg-secondary-container text-on-secondary font-headline-md text-headline-md py-sm rounded-lg hover:bg-secondary transition-colors shadow-sm flex items-center justify-center gap-xs cursor-pointer">
                  <Search className="w-5 h-5" /> Search Availability
                </button>
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
                      <button onClick={() => openBookingModal("Deluxe Room")} className="bg-secondary-container text-on-secondary font-label-md text-label-md px-md py-sm rounded-lg hover:bg-secondary transition-colors shadow-sm cursor-pointer">Book</button>
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
                      <button onClick={() => openBookingModal("Executive Room")} className="bg-secondary-container text-on-secondary font-label-md text-label-md px-md py-sm rounded-lg hover:bg-secondary transition-colors shadow-sm cursor-pointer">Book</button>
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
                      <button onClick={() => openBookingModal("Luxury Suite")} className="bg-secondary-container text-on-secondary font-label-md text-label-md px-md py-sm rounded-lg hover:bg-secondary transition-colors shadow-sm cursor-pointer">Book</button>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>
        </main>
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
