'use client';

import React from 'react';
import {
  FaPlaneDeparture,
  FaPassport,
  FaSuitcase,
  FaHeadset,
  FaGlobeEurope,
  FaConciergeBell,
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import requirementsAnimation from '../../public/models/manplane.json';

const services = [
  { icon: <FaPlaneDeparture />, title: 'Flight Booking', desc: 'Best fares for domestic & international destinations.' },
  { icon: <FaPassport />, title: 'Visa Assistance', desc: 'Guidance for required travel visas & transit documents.' },
  { icon: <FaSuitcase />, title: 'Baggage Options', desc: 'Extra baggage, special items & pre-paid services.' },
  { icon: <FaConciergeBell />, title: 'Travel Add-ons', desc: 'Meals, insurance, airport pickup & seat selection.' },
  { icon: <FaGlobeEurope />, title: 'Group Tours', desc: 'Discounted packages for families, corporates, and students.' },
  { icon: <FaHeadset />, title: '24/7 Support', desc: 'Real-time ticket updates, rescheduling & cancellation help.' },
];

export default function AirTicketingDetails() {
  return (
    <div className="px-6 md:px-20 pt-2 pb-10 bg-gray-50 text-gray-800">

      <h2 className="text-3xl font-bold text-center mb-10 text-blue-900">What We Offer in Air Ticketing</h2>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition"
          >
            <div className="text-3xl text-orange-500 mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Requirements Section */}
      <div className="mt-16 space-y-8">
        <h3 className="text-2xl font-semibold text-blue-800">Basic Requirements</h3>

        {/* First 3 points vertically */}
        <div className="bg-white p-6 rounded-xl shadow">
          <ul className="list-disc ml-6 text-gray-700 space-y-4 leading-relaxed">
            <li>
              <strong>Valid Passport:</strong> Ensure your passport has at least 6 months of validity remaining from your intended travel date.
            </li>
            <li>
              <strong>Visa Documentation:</strong> Depending on your destination, you'll need a valid visa. We assist in identifying and applying for the correct visa type.
            </li>
            <li>
              <strong>Government-Issued ID Proof:</strong> For all domestic flights, a valid photo ID such as Aadhar, PAN, Driving License, or Voter ID must be presented.
            </li>
          </ul>
        </div>

        {/* Next 3 points beside animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center bg-white p-6 rounded-xl shadow">
          {/* Left: Remaining 3 Points */}
          <div>
            <ul className="list-disc ml-6 text-gray-700 space-y-4 leading-relaxed">
              <li>
                <strong>Vaccination Certificates:</strong> Many countries now require travelers to show COVID-19 vaccination certificates or health documentation.
              </li>
              <li>
                <strong>Travel Insurance:</strong> Highly recommended to secure insurance that covers medical emergencies, baggage loss, delays, and cancellations.
              </li>
              <li>
                <strong>Confirmed Return or Onward Ticket:</strong> Immigration authorities may require proof of your return or further travel plans.
              </li>
            </ul>
          </div>

          {/* Right: Animation */}
          <div className="flex justify-center">
            <div className="w-full max-w-md h-[300px] flex items-center justify-center">
              <Lottie animationData={requirementsAnimation} loop={true} className="w-full h-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
