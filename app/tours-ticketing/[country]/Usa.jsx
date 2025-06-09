'use client';
import React from 'react';
import Image from "next/image";

const USATour = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 -mt-10 font-[Times_New_Roman]">
      <h1 className="flex justify-center text-xl sm:text-2xl md:text-2xl font-bold mb-8 text-center">
        USA Tourist Visa Process with Affordable USA Tour Packages
      </h1>
      <p className="text-lg md:text-xl font-medium text-center mb-6">
        Your Trusted Travel Partner – <span className="text-orange-500">VJC Overseas</span>
      </p>

      {/* Image + Text side by side */}
      <div className="flex flex-col md:flex-row items-center gap-6 mb-4">
        <div className="md:w-1/2 w-full group overflow-hidden rounded-lg">
          <Image
            src="/usa-toursit-places.jpg"
            alt="Explore USA with VJC Overseas - Visa and Travel Experts"
            width={700}
            height={300}
            className="w-full h-full object-cover rounded-lg transform transition-transform duration-500 group-hover:scale-105"
            priority
            unoptimized
          />
        </div>
        <div className="md:w-1/2 text-justify">
          <p>
            Planning to visit the United States for a vacation, family trip, or an adventure of a lifetime? The USA is home to some of the world’s most iconic destinations – from New York’s towering skyline to the natural beauty of the Grand Canyon, the magic of Disney World, and the charm of San Francisco. At <span className="text-orange-500">VJC Overseas</span>, we simplify the USA tourist visa process and offer affordable USA tour packages to make your journey memorable and stress-free.
          </p>
          <p>
            As a trusted immigration consultancy, we specialize in helping individuals and families obtain their B-2 tourist
          </p>
        </div>
      </div>
      <p> visa for the USA while providing budget-friendly travel solutions that include flights, accommodation, and sightseeing itineraries.</p>
      <h2 className="text-xl mt-4 font-semibold text-[#B22234]">
        Understanding the USA Tourist Visa (B-2 Visa)
      </h2>
      <p>
        The B-2 visa is issued for tourism, family visits, medical treatment, or participating in social events in the United States. This visa allows you to stay in the U.S. temporarily, typically up to 6 months.
      </p>

      <h2 className="text-xl mt-4 font-semibold text-[#B22234]">
        USA Tourist Visa Requirements
      </h2>
      <ul className="list-disc list-inside space-y-1">
        <li>A valid passport with minimum 6-month validity</li>
        <li>Recent passport-size photographs as per US visa norms</li>
        <li>Completed DS-160 visa application form</li>
        <li>Visa fee payment receipt</li>
        <li>Proof of financial stability (bank statements, income proof)</li>
        <li>Purpose of visit and itinerary</li>
        <li>Strong ties to home country (job, business, family)</li>
        <li>Invitation letter (if visiting family/friends)</li>
      </ul>
      <p>
        At <span className="text-orange-500">VJC Overseas</span>, we provide complete support in preparing all documents, filling forms accurately, and getting ready for the visa interview.
      </p>

      <h2 className="text-xl mt-4 font-semibold text-[#B22234]">
        Our Step-by-Step USA Visa Process
      </h2>
      <ul className="list-disc list-inside space-y-1">
        <li>Free Initial Consultation – Understanding your travel goals</li>
        <li>Form DS-160 Assistance – Error-free and complete submission</li>
        <li>Visa Fee & Appointment Scheduling – We guide you through the payment and booking</li>
        <li>Document Checklist – Personalized list as per your profile</li>
        <li>Mock Interview Training – Confidence-building sessions for your US Consulate interview</li>
        <li>Status Tracking & Final Updates – Stay informed at every step</li>
      </ul>
      <p>
        With years of expertise, we ensure a high success rate for B-2 visa applications.
      </p>

      <h2 className="text-xl mt-4 font-semibold text-[#B22234]">
        Affordable USA Tour Packages – Tailored for Your Budget
      </h2>
      <p>We don’t just help you get your visa; we plan your trip too! Our affordable USA tour packages are designed to match your budget and travel preferences.</p>
      <ul className="list-disc list-inside space-y-1">
        <li>Round-trip flights and airport transfers</li>
        <li>3-star and 4-star hotel bookings</li>
        <li>Sightseeing tours in cities like New York, Las Vegas, Los Angeles, Washington DC</li>
        <li>Theme park entries (Disneyland, Universal Studios, etc.)</li>
        <li>Customized itinerary planning</li>
        <li>Travel insurance and forex assistance</li>
      </ul>
      <p>
        Whether you’re traveling solo, with family, or in a group, we ensure your US travel experience is smooth, comfortable, and cost-effective.
      </p>

      <h2 className="text-xl mt-4 font-semibold text-[#B22234]">
        Why Choose <span className="text-orange-500">VJC Overseas</span>?
      </h2>
      <ul className="list-disc list-inside space-y-1">
        <li>Expert USA visa consultants with high approval rates</li>
        <li>Affordable, transparent tour packages</li>
        <li>End-to-end support: Visa + Flights + Hotels + Tours</li>
        <li>Personalized service for every traveler</li>
        <li>Proven track record with happy clients across India</li>
      </ul>

      <h2 className="text-xl mt-4 font-semibold text-[#B22234]">
        Ready to Explore America?
      </h2>
      <p>
        Make your dream of visiting the USA a reality with <span className="text-orange-500">VJC Overseas</span>. From guiding you through the USA tourist visa process to curating budget-friendly USA travel packages, we are your trusted partner for a successful and joyful journey.
      </p>
      <p className="font-medium text-orange-600">
        Contact us today to start your USA travel plan with expert guidance and great savings!
      </p>
    </div>
  );
};

export default USATour;
