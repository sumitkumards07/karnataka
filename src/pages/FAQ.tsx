import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How can I book a room in Karnataka Pravasi Soudha Tirumala?",
      answer: "You can book a room easily by clicking the 'Book Now' button on our website, which will open a WhatsApp chat with our booking team. Alternatively, you can call us directly at +91 9117274186."
    },
    {
      question: "Are the rooms near Karnataka Pravasi Soudha Tirumala affordable?",
      answer: "Yes, we pride ourselves on offering some of the most budget-friendly and affordable accommodation options in Tirumala without compromising on cleanliness and comfort."
    },
    {
      question: "Is Karnataka Pravasi Soudha located close to Tirumala Temple?",
      answer: "Yes, our location is very convenient for pilgrims, situated close to the main Tirumala Temple and other major attractions."
    },
    {
      question: "What facilities are available in the rooms?",
      answer: "Our rooms come with neat and hygienic beds, fresh linens, attached bathrooms with 24/7 hot and cold water, 24-hour electricity, and room service. We also offer free parking and Wi-Fi."
    },
    {
      question: "Is Karnataka Pravasi Soudha suitable for families and senior citizens?",
      answer: "Absolutely. We provide a safe, peaceful, and comfortable environment that is ideal for families and senior citizens."
    },
    {
      question: "Are there nearby places to visit from Karnataka Pravasi Soudha Tirumala?",
      answer: "Yes, you can easily visit the main Sri Venkateswara Temple, Tirumala Museum, Natural Arch, Chakra Theertham, and Akasa Ganga from our location."
    },
    {
      question: "Do you offer advance room booking at Karnataka Pravasi Soudha?",
      answer: "Yes, we highly recommend advance booking, especially during peak seasons and festival times, to ensure you get a room."
    },
    {
      question: "Are there any hidden charges in the room booking?",
      answer: "No, we believe in transparent pricing. The price quoted during booking is the final price, with no hidden charges."
    },
    {
      question: "Why should I choose your service for room booking in Karnataka Pravasi Soudha?",
      answer: "We offer the best prices guaranteed, a prime location, clean and comfortable rooms, a safe environment, and an easy, hassle-free booking process."
    },
    {
      question: "Is the location safe for overnight stay?",
      answer: "Yes, our premises are completely safe and secure for overnight stays, with staff available 24/7 to assist you."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <div className="bg-[#1e3a5f] text-white py-12 text-center">
        <h1 className="text-4xl font-bold">Frequently Asked Questions</h1>
      </div>

      <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#1e3a5f] mb-4">Karnataka Pravasi Soudha Tirumala FAQ's</h2>
          <p className="text-lg text-gray-600">Find answers to common questions about booking and staying with us.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg bg-white overflow-hidden shadow-sm">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none hover:bg-gray-50 transition"
                onClick={() => toggleFaq(index)}
              >
                <span className="font-bold text-[#1e3a5f] pr-4">{index + 1}. {faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 text-gray-700">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
