'use client';
import React from 'react';
import Image from 'next/image';

const CanadaTour = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 -mt-8 font-[Times_New_Roman]">
      <h1 className="flex justify-center text-lg sm:text-xl md:text-xl font-bold mb-6 text-center">
        Canada Tourist Visa Process with Affordable Tour Packages – Discover Canada with <span className="text-orange-500">&nbsp;VJC Overseas</span>
      </h1>

      {/* Top section with intro and first image */}
      <div className="flex flex-col md:flex-row items-start gap-6 mb-8">
        <div className="md:w-1/2 text-base text-justify leading-snug">
          <p>
            Canada is one of the most beautiful countries in the world — a land of stunning natural landscapes, multicultural cities, and warm hospitality. Whether you want to explore Niagara Falls, visit the Rocky Mountains, enjoy Quebec’s charm, or discover Toronto and Vancouver, <span className="text-orange-500">VJC Overseas</span> is here to make your trip real.
          </p>
          <p className="mt-3">
            We assist with the complete Canada tourist visa process and offer affordable tour packages tailored to your needs — from documentation to bookings and sightseeing.
          </p>
        </div>
        <div className="md:w-1/2 w-full rounded-lg overflow-hidden">
          <Image
            src="/nayagra-falls.jpg"
            alt="Canada Tour with VJC Overseas"
            width={600}
            height={350}
            className="w-full h-auto object-cover rounded-lg"
            priority
            unoptimized
          />
        </div>
      </div>

      {/* Visa Details */}
      <h2 className="text-xl font-bold mb-3 text-[#DC143C]">What is a Canada Tourist Visa?</h2>
      <p className="mb-5 text-base text-justify leading-snug">
        A Canada Visitor Visa (Temporary Resident Visa – TRV) allows tourists to visit Canada for leisure, family visits, or events. It’s valid up to 6 months and can be single- or multiple-entry based on your profile.
      </p>

      <h2 className="text-xl font-bold mb-3 text-[#DC143C]">Who Can Apply?</h2>
      <p className="mb-5 text-base text-justify leading-snug">
        Anyone with a genuine reason to travel and strong home country ties can apply. Our experts guide you through each step for better visa success.
      </p>

      <h2 className="text-xl font-bold mb-3 text-[#DC143C]">Documents Required:</h2>
      <ul className="list-disc list-inside mb-5 text-base text-justify space-y-1.5">
        <li>Valid passport (6+ months)</li>
        <li>Recent passport-size photographs</li>
        <li>Completed forms (IMM 5257 etc.)</li>
        <li>Travel itinerary & return flights</li>
        <li>Hotel bookings / invitation letter</li>
        <li>Bank statements & ITRs</li>
        <li>Employment or business proof</li>
        <li>Travel insurance (recommended)</li>
        <li>Cover letter for visit purpose</li>
        <li>Proof of ties (job, property, family)</li>
      </ul>
      <p className="mb-5 text-base text-justify leading-snug">
        <span className="text-orange-500">VJC Overseas</span> ensures your file matches all IRCC (Canada immigration) standards.
      </p>

      <h2 className="text-xl font-bold mb-3 text-[#DC143C]">Step-by-Step Visa Help</h2>
      <ul className="list-disc list-inside mb-5 text-base text-justify space-y-1.5">
        <li>Free Consultation & Eligibility Check</li>
        <li>Custom Document Checklist</li>
        <li>Form Filling & Review</li>
        <li>Biometrics Appointment Setup</li>
        <li>Submission & Follow-up</li>
        <li>Status Updates & Continuous Support</li>
      </ul>

      {/* Affordable Tour Package section with second image beside text */}
      <div className="flex flex-col md:flex-row items-start gap-6 mb-8">
        <div className="md:w-1/2 text-base text-justify leading-snug">
          <h2 className="text-xl font-bold mb-3 text-[#DC143C]">Affordable Tour Packages</h2>
          <p className="mb-5">
            In addition to visa help, we offer cost-effective Canada tours for families, solo travelers, honeymooners, and seniors.
          </p>
          <ul className="list-disc list-inside mb-5 space-y-1.5">
            <li>International flight bookings</li>
            <li>3★–5★ hotel accommodation</li>
            <li>City sightseeing & guided tours</li>
            <li>Airport transfers & transport</li>
            <li>Attractions: Niagara, Banff, CN Tower, Whistler & more</li>
            <li>Travel insurance & forex support</li>
            <li>Multilingual guides (on request)</li>
          </ul>

          <h2 className="text-xl font-bold mb-3 text-[#DC143C]">Why VJC Overseas?</h2>
          <ul className="list-disc list-inside mb-5 space-y-1.5">
            <li>Years of experience with Canadian visas</li>
            <li>High approval success rate</li>
            <li>Complete support – visa to tour</li>
            <li>Clear pricing – no hidden fees</li>
            <li>Tailored plans for every traveler</li>
          </ul>
        </div>
        <div className="md:w-1/2 w-full rounded-lg overflow-hidden">
          <Image
            src="/CN-Tower-canada.jpg"
            alt="Canada Tour Packages"
            width={500}
            height={350}
            className="w-full h-auto object-cover "
            priority
            unoptimized
          />
        </div>
      </div>

      {/* Final CTA */}
      <h2 className="text-xl font-bold mb-3 text-[#DC143C]">Start Your Canada Journey Today</h2>
      <p className="mb-5 text-base text-justify leading-snug">
        From visa to itinerary, <span className="text-orange-500">VJC Overseas</span> handles it all — so you travel confidently and stress-free.
      </p>
      <p className="text-base font-semibold text-center md:text-left text-orange-600">
        Contact us today to apply for your Canada tourist visa and book your perfect Canada tour package!
      </p>
    </div>
  );
};

export default CanadaTour;
