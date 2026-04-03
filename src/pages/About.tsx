import React, { useState } from 'react';
import { CheckCircle, MapPin, ShieldCheck, Car, Wifi, Coffee } from 'lucide-react';
import { PHONE_NUMBER } from '../components/Layout';
import { BookingModal } from '../components/BookingModal';

export function About() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  return (
    <>
      <div className="bg-[#1e3a5f] text-white py-12 text-center">
        <h1 className="text-4xl font-bold">About Us</h1>
      </div>

      {/* About Section (SEO Optimized) */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-4">Affordable and Comfortable Rooms at Karnataka Pravasi Soudha</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Looking for budget-friendly rooms near <strong>Karnataka Pravasi Soudha Tirumala</strong>? We offer clean, comfortable, and affordable rooms for pilgrims, travelers, and families visiting Tirumala.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-[#1e3a5f] mb-4">Why Choose Karnataka Pravasi Soudha for Your Stay?</h3>
            <p className="text-gray-700 mb-6">Our goal is simple: provide the best rooms at the lowest prices without compromising on comfort, safety, or convenience.</p>
            <ul className="space-y-4">
              <li className="flex items-start"><CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" /><span><strong>Best Prices Guaranteed:</strong> Enjoy the most affordable rooms in Karnataka Pravasi Soudha.</span></li>
              <li className="flex items-start"><MapPin className="text-green-600 mr-3 mt-1 flex-shrink-0" /><span><strong>Prime Location:</strong> Stay close to the Tirumala Temple and major attractions.</span></li>
              <li className="flex items-start"><CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" /><span><strong>Clean and Comfortable Rooms:</strong> Well-maintained rooms with all essential amenities.</span></li>
              <li className="flex items-start"><ShieldCheck className="text-green-600 mr-3 mt-1 flex-shrink-0" /><span><strong>Safe and Peaceful Environment:</strong> Ideal for families, senior citizens, and solo travelers.</span></li>
              <li className="flex items-start"><CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" /><span><strong>Easy Booking:</strong> Quick and hassle-free room booking in Karnataka Pravasi Soudha.</span></li>
            </ul>
          </div>
          <div>
            <img className="rounded-lg shadow-xl w-full object-cover h-[400px]" src="https://images.unsplash.com/photo-1600080301383-29dc52101340?q=80&w=1000&auto=format&fit=crop" alt="Karnataka Pravasi Soudha Tirumala" referrerPolicy="no-referrer" />
          </div>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
          <h3 className="text-2xl font-bold text-[#1e3a5f] mb-4">Comfortable Rooms Near Karnataka Pravasi Soudha Tirumala</h3>
          <p className="text-gray-700 mb-6">Whether you are visiting for darshan, a spiritual trip, or sightseeing, our rooms are designed to make your stay stress-free and affordable.</p>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <div className="flex items-center p-4 bg-gray-50 rounded-lg"><CheckCircle className="text-[#eab308] mr-3" /> Neat and hygienic beds with fresh linens</div>
            <div className="flex items-center p-4 bg-gray-50 rounded-lg"><CheckCircle className="text-[#eab308] mr-3" /> Attached bathrooms with 24/7 hot & cold water</div>
            <div className="flex items-center p-4 bg-gray-50 rounded-lg"><CheckCircle className="text-[#eab308] mr-3" /> 24-hour electricity and safe environment</div>
            <div className="flex items-center p-4 bg-gray-50 rounded-lg"><CheckCircle className="text-[#eab308] mr-3" /> Peaceful surroundings to rest and relax</div>
          </div>
          <div className="text-center">
            <h4 className="text-xl font-bold text-gray-900 mb-2">Book Your Room at the Best Price</h4>
            <p className="text-gray-600 mb-6">Don’t overpay for accommodation in Tirumala. Karnataka Pravasi Soudha provides rooms at the best prices, ensuring a comfortable stay near all major attractions.</p>
            <p className="text-lg font-medium text-[#2e7d32] mb-6">👉 Book your room now at Karnataka Pravasi Soudha and enjoy a safe, affordable, and convenient stay.</p>
            <button onClick={() => setIsModalOpen(true)} className="bg-[#eab308] hover:bg-[#ca8a04] text-white font-bold py-3 px-8 rounded transition shadow-md">
              Know More
            </button>
          </div>
        </div>
      </div>

      {/* Booking Process Section */}
      <div className="bg-[#1e3a5f] text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Room Booking Process at Karnataka Pravasi Soudha Tirumala</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">Booking a room at Karnataka Pravasi Soudha Tirumala is simple, convenient, and designed for the comfort of every guest.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-[#eab308] mb-6">How to Book a Room</h3>
              <ul className="space-y-6">
                <li className="flex">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-[#eab308] text-[#1e3a5f] flex items-center justify-center font-bold text-lg mr-4">1</div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">Eligibility</h4>
                    <p className="text-gray-300">Every candidate must have a valid Aadhar card for identification. We also accept driving licenses as an alternative ID proof.</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-[#eab308] text-[#1e3a5f] flex items-center justify-center font-bold text-lg mr-4">2</div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">Booking</h4>
                    <p className="text-gray-300">Choose your room, select the dates, and complete the booking online or at the reception. Our team ensures a quick and hassle-free process.</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-[#eab308] text-[#1e3a5f] flex items-center justify-center font-bold text-lg mr-4">3</div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">Check-in</h4>
                    <p className="text-gray-300">Present your Aadhar card or driving license at check-in. Our staff will guide you to your room efficiently.</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-[#eab308] text-[#1e3a5f] flex items-center justify-center font-bold text-lg mr-4">4</div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">Check-out</h4>
                    <p className="text-gray-300">Safe and convenient check-out with no hidden charges.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-white text-gray-900 p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-[#1e3a5f] mb-6">Facilities Included</h3>
              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                <div className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-lg">
                  <Car className="h-10 w-10 text-[#2e7d32] mb-3" />
                  <h4 className="font-bold mb-2">Free Parking</h4>
                  <p className="text-sm text-gray-600">Hassle-free parking for all guests.</p>
                </div>
                <div className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-lg">
                  <Wifi className="h-10 w-10 text-[#2e7d32] mb-3" />
                  <h4 className="font-bold mb-2">Free Wi-Fi</h4>
                  <p className="text-sm text-gray-600">Stay connected during your visit.</p>
                </div>
                <div className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-lg">
                  <Coffee className="h-10 w-10 text-[#2e7d32] mb-3" />
                  <h4 className="font-bold mb-2">24×7 Room Service</h4>
                  <p className="text-sm text-gray-600">Enjoy meals, beverages, and essential services any time.</p>
                </div>
                <div className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-lg">
                  <CheckCircle className="h-10 w-10 text-[#2e7d32] mb-3" />
                  <h4 className="font-bold mb-2">Comfortable Rooms</h4>
                  <p className="text-sm text-gray-600">Well-maintained rooms with attached bathrooms.</p>
                </div>
              </div>
              <p className="text-center text-gray-700 mb-6">At Karnataka Pravasi Soudha, we aim to provide affordable rooms near Tirumala Temple with all modern facilities for a safe and convenient stay.</p>
              <button onClick={() => setIsModalOpen(true)} className="w-full bg-[#2e7d32] hover:bg-[#1b5e20] text-white font-bold py-3 px-4 rounded transition">
                Book Your Room Today
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Wikipedia Section */}
      <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-lg border border-gray-100">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-4">Wikipedia Of Sri Venkateswara Swamy Temple, Tirumala</h2>
            <div className="h-1 w-24 bg-[#eab308] mx-auto rounded"></div>
          </div>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="lead text-xl text-gray-800 font-medium mb-8">
              The Sri Venkateswara Swamy Temple, popularly known as Tirumala Temple or Tirupati Balaji Temple, is one of the most revered Hindu pilgrimage centres in the world. It is situated on the Tirumala Hills in Tirupati district of Andhra Pradesh, India. The temple is dedicated to Lord Venkateswara, a form of Lord Vishnu, believed to have manifested on earth during Kali Yuga to protect mankind from suffering. For this reason, the deity is worshipped as Kaliyuga Prathyaksha Daivam, and the sacred abode is referred to as Kaliyuga Vaikuntha.
            </p>

            <div className="my-10">
              <img src="https://images.unsplash.com/photo-1623062833633-899401768412?q=80&w=1200&auto=format&fit=crop" alt="Sri Venkateswara Swamy Temple" className="w-full h-80 object-cover rounded-xl shadow-md" referrerPolicy="no-referrer" />
            </div>

            <h3 className="text-2xl font-bold text-[#1e3a5f] mt-8 mb-4">Location and Geography</h3>
            <p>Tirumala Hills form a part of the Seshachalam Hills range, rising about 853 metres above sea level. The hills consist of seven peaks symbolising the seven hoods of Adisesha, the divine serpent of Lord Vishnu. The temple stands on the seventh hill, Venkatadri, on the southern banks of the holy Swami Pushkarini lake. Because of this sacred geography, Tirumala is also known as the Temple of Seven Hills.</p>

            <h3 className="text-2xl font-bold text-[#1e3a5f] mt-8 mb-4">Deity and Names</h3>
            <p>Lord Venkateswara is also known by various names such as Balaji, Srinivasa, Govinda, and Sapthagirisha. The presiding deity stands majestically in the sanctum sanctorum (Ananda Nilayam), facing east, adorned with divine ornaments and sacred symbols. The deity is believed to be Swayambhu (self-manifested) and eternal, destined to remain on Tirumala until the end of the present cosmic age (Kalpa).</p>

            <div className="grid md:grid-cols-2 gap-8 my-10">
              <div>
                <h3 className="text-2xl font-bold text-[#1e3a5f] mb-4">Temple Administration</h3>
                <p>The temple is managed by Tirumala Tirupati Devasthanams (TTD), a statutory body under the Government of Andhra Pradesh. The administration oversees daily rituals, crowd management, accommodation, annaprasadam (free meals), and various charitable activities funded by donations from devotees.</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#1e3a5f] mb-4">Historical Background</h3>
                <p>The origins of the temple date back to around 300 CE. It was originally constructed by the Thondaman rulers and later expanded and enriched by major South Indian dynasties such as the Pallavas, Cholas, Pandyas, Reddys, and Vijayanagara Empire. The temple reached its peak of architectural grandeur and wealth during the Vijayanagara period, especially under Emperor Sri Krishnadevaraya, who made extensive donations of gold and jewels.</p>
                <p className="mt-2">The temple is mentioned in ancient Tamil Sangam literature such as Silappathikaram, highlighting its antiquity and spiritual significance.</p>
              </div>
            </div>

            <div className="my-10">
              <img src="https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=1200&auto=format&fit=crop" alt="Tirumala Hills" className="w-full h-80 object-cover rounded-xl shadow-md" referrerPolicy="no-referrer" />
            </div>

            <h3 className="text-2xl font-bold text-[#1e3a5f] mt-8 mb-4">Legends Associated with Tirumala</h3>
            <p>According to sacred legends, Tirumala is considered Adivaraha Kshetra, where Lord Varaha, an incarnation of Vishnu, resided. One of the most popular legends narrates how Lord Vishnu incarnated as Srinivasa on Tirumala in search of Goddess Lakshmi. His divine marriage with Padmavati, an incarnation of Lakshmi, symbolises eternal compassion and grace towards devotees. Eventually, the Lord chose to reside permanently on Tirumala for the salvation of humanity in Kali Yuga.</p>

            <h3 className="text-2xl font-bold text-[#1e3a5f] mt-8 mb-4">Architecture</h3>
            <p>The temple follows classic Dravidian architectural style. The sanctum sanctorum, known as Ananda Nilayam, is crowned by a golden vimana. The temple has three main entrances:</p>
            <ul className="list-disc pl-6 mb-6">
              <li><strong>Mahadwaram (Padikavali)</strong> – the main outer entrance</li>
              <li><strong>Vendivakili (Silver Entrance)</strong> – inner entrance</li>
              <li><strong>Bangaruvakili (Golden Entrance)</strong> – entrance to the sanctum</li>
            </ul>
            <p>The temple complex includes multiple prakarams, mandapams, sub-shrines, kitchens, and administrative areas designed to manage millions of pilgrims efficiently.</p>

            <h3 className="text-2xl font-bold text-[#1e3a5f] mt-8 mb-4">Worship and Rituals</h3>
            <p>The temple strictly follows the Vaikhanasa Agama tradition of worship. Daily, weekly, and annual rituals are performed with utmost devotion and precision. Major daily sevas include Suprabhatam, Thomala Seva, Archana, Kalyanotsavam, and Ekanta Seva. The recitation of Naalayira Divya Prabandham is an integral part of worship.</p>

            <div className="bg-[#fdfbf4] p-6 rounded-lg border border-[#eab308] my-8">
              <h4 className="text-xl font-bold text-[#1e3a5f] mb-4">Pancha Berams (Five Forms of the Deity)</h4>
              <p className="mb-4">Lord Venkateswara is worshipped in five divine forms:</p>
              <ul className="grid sm:grid-cols-2 gap-3">
                <li className="flex items-center"><div className="h-2 w-2 bg-[#eab308] rounded-full mr-3"></div><strong>Moolavirat (Dhruva Beram)</strong></li>
                <li className="flex items-center"><div className="h-2 w-2 bg-[#eab308] rounded-full mr-3"></div><strong>Bhoga Srinivasa (Kautuka Beram)</strong></li>
                <li className="flex items-center"><div className="h-2 w-2 bg-[#eab308] rounded-full mr-3"></div><strong>Ugra Srinivasa (Snapana Beram)</strong></li>
                <li className="flex items-center"><div className="h-2 w-2 bg-[#eab308] rounded-full mr-3"></div><strong>Malayappa Swami (Utsava Beram)</strong></li>
                <li className="flex items-center"><div className="h-2 w-2 bg-[#eab308] rounded-full mr-3"></div><strong>Koluvu Srinivasa (Bali Beram)</strong></li>
              </ul>
            </div>

            <div className="grid md:grid-cols-2 gap-8 my-10">
              <div>
                <h3 className="text-2xl font-bold text-[#1e3a5f] mb-4">Darshan and Pilgrimage</h3>
                <p>The temple receives over 24 million devotees annually, making it one of the most visited religious sites globally. To manage crowds, TTD has established modern Vaikuntam Queue Complexes, special entry darshan, free darshan, and footpath pilgrim routes from Alipiri and Srivari Mettu.</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#1e3a5f] mb-4">Prasadam and Annadanam</h3>
                <p>The world-famous Tirupati Laddu, which holds a Geographical Indication (GI) tag, is offered as prasadam. The temple also serves free meals daily to thousands of pilgrims through the Tarigonda Vengamamba Annaprasadam Complex, reflecting the temple’s strong tradition of charity.</p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-[#1e3a5f] mt-8 mb-4">Festivals</h3>
            <p>More than 400 festivals are celebrated annually at Tirumala. The most prominent include:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>Sri Venkateswara Brahmotsavams</li>
              <li>Vaikunta Ekadasi</li>
              <li>Rathasapthami</li>
              <li>Janmashtami, Ugadi, Teppotsavam, and Vasanthotsavam</li>
            </ul>
            <p>These festivals attract massive crowds and are celebrated with grandeur and devotion.</p>

            <h3 className="text-2xl font-bold text-[#1e3a5f] mt-8 mb-4">Religious and Cultural Significance</h3>
            <p>Tirumala Venkateswara Temple is one of the 108 Divya Desams praised by the Alvars and one of the eight Swayambhu Kshetras of Lord Vishnu. Saints like Sri Ramanujacharya and Tallapaka Annamacharya played a vital role in shaping the temple’s rituals, philosophy, and devotional music.</p>

            <div className="bg-[#1e3a5f] text-white p-8 rounded-xl mt-10">
              <h3 className="text-2xl font-bold text-[#eab308] mb-4">Conclusion</h3>
              <p className="text-lg leading-relaxed">The Sri Venkateswara Swamy Temple stands as a timeless symbol of faith, devotion, and spiritual heritage. With its ancient traditions, sacred legends, magnificent architecture, and unmatched scale of worship, Tirumala continues to inspire millions of devotees across the world, offering hope, blessings, and divine grace in the age of Kali Yuga.</p>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <BookingModal 
          roomName="General Enquiry" 
          onClose={() => setIsModalOpen(false)} 
          phoneNumber={PHONE_NUMBER}
        />
      )}
    </>
  );
}
