'use client';
import React from 'react';
import Image from 'next/image';

const GreeceTour = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 -mt-8 font-[Times_New_Roman]">
      <h1 className="flex justify-center text-lg sm:text-xl md:text-xl font-bold mb-6 text-center">
        Greece Tourist Visa Process with Affordable Tour Packages – Discover Greece with <span className="text-orange-500">&nbsp;VJC Overseas</span>
      </h1>

      <div className="flex flex-col md:flex-row items-start gap-6 mb-2">
        <div className="md:w-1/2 text-base text-justify leading-snug">
          <p>
            Greece, the land of ancient myths, stunning islands, and rich cultural heritage, attracts millions of tourists every year. From the iconic Acropolis in Athens to the pristine beaches of Santorini and Mykonos, Greece offers a magical experience for travelers. If you’re planning a trip to this beautiful Mediterranean country, <span className="text-orange-500">VJC Overseas</span> is here to assist you with the Greece tourist visa process and provide affordable and customized tourist packages tailored to your preferences.
          </p>
         
        </div>
        <div className="md:w-1/2 w-full rounded-lg overflow-hidden">
          <Image
            src="/Acropolis-in-Athens-to-the-pristine-beaches.jpg"
            alt="Explore Greece - Travel with VJC Overseas"
            width={600}
            height={350}
            className="w-full h-auto object-cover rounded-lg"
            priority
            unoptimized
          />
        </div>
      </div>
        <p className="mb-3">
            As a reliable immigration consultancy, we simplify your visa application and travel planning so you can focus on enjoying your Greek adventure.
          </p>
      <h2 className="text-xl font-bold mb-3 text-[#0D5BA8]">What is a Greece Tourist Visa?</h2>
      <p className="mb-5 text-base text-justify leading-snug">
        For Indian citizens, a Greece Tourist Visa is a Schengen visa allowing entry into Greece and other Schengen countries for up to 90 days within a 180-day period. It is mandatory for tourism and leisure purposes.
      </p>
      <p className="mb-5 text-base text-justify leading-snug">
        At <span className="text-orange-500">VJC Overseas</span>, we help you understand the visa categories, guide you through document preparation, and manage the entire application process to ensure smooth and timely visa approval.
      </p>

      <h2 className="text-xl font-bold mb-3 text-[#0D5BA8]">Greece Tourist Visa Requirements</h2>
      <ul className="list-disc list-inside mb-5 text-base text-justify space-y-1.5">
        <li>A valid passport with at least 6 months validity beyond your planned stay</li>
        <li>Completed Schengen visa application form</li>
        <li>Recent passport-sized photographs according to specifications</li>
        <li>Confirmed round-trip flight tickets</li>
        <li>Proof of accommodation in Greece (hotel bookings or invitation letter)</li>
        <li>Travel medical insurance with minimum coverage of €30,000</li>
        <li>Proof of sufficient financial means (bank statements, salary slips)</li>
        <li>Detailed travel itinerary</li>
        <li>Additional documents such as employment proof, no-objection certificates, or invitation letters if applicable</li>
      </ul>
      <p className="mb-5 text-base text-justify leading-snug">
        Our experts at <span className="text-orange-500">VJC Overseas</span> assist you in gathering, verifying, and submitting these documents accurately to maximize your visa approval chances.
      </p>

      <h2 className="text-xl font-bold mb-3 text-[#0D5BA8]">How VJC Overseas Helps You with the Greece Visa Process</h2>
      <ul className="list-disc list-inside mb-5 text-base text-justify space-y-1.5">
        <li>Free initial consultation to assess your eligibility and travel plans</li>
        <li>Personalized checklist of required documents</li>
        <li>Accurate filling and submission of your visa application</li>
        <li>Appointment scheduling at the visa application center</li>
        <li>Continuous tracking and updates on your visa status</li>
        <li>Support with travel insurance and currency exchange</li>
      </ul>
      <p className="mb-5 text-base text-justify leading-snug">
        Our comprehensive assistance eliminates confusion and delays, ensuring a hassle-free experience.
      </p>

      <h2 className="text-xl font-bold mb-3 text-[#0D5BA8]">Affordable Greece Tourist Packages</h2>
      <p className="mb-5 text-base text-justify leading-snug">
        Alongside visa support, <span className="text-orange-500">VJC Overseas</span> offers competitively priced and fully customizable Greece tour packages that let you explore the country’s highlights without breaking the bank.
      </p>
      <ul className="list-disc list-inside mb-5 text-base text-justify space-y-1.5">
        <li>Flight bookings and airport transfers</li>
        <li>Comfortable hotel accommodations across Athens, Santorini, Mykonos, and other popular destinations</li>
        <li>Guided tours to historic sites, islands, and cultural attractions</li>
        <li>Unique experiences like sunset cruises, ancient ruins exploration, and local cuisine tasting</li>
        <li>Local transportation and inter-island transfers</li>
        <li>Detailed day-wise itineraries for a smooth travel experience</li>
        <li>Visa and travel insurance assistance included</li>
      </ul>
      <p className="mb-5 text-base text-justify leading-snug">
        Whether you’re traveling solo, with family, or in a group, we tailor packages to your needs and budget.
      </p>

      <h2 className="text-xl font-bold mb-3 text-[#0D5BA8]">Why Choose <span className="text-orange-500">VJC Overseas</span>?</h2>
      <ul className="list-disc list-inside mb-5 text-base text-justify space-y-1.5">
        <li>Experienced and trustworthy immigration consultancy</li>
        <li>High success rate in Schengen visa approvals</li>
        <li>Transparent pricing with no hidden costs</li>
        <li>Customized travel solutions for every budget</li>
        <li>Dedicated support from visa application to trip completion</li>
      </ul>

      <h2 className="text-xl font-bold mb-3 text-[#0D5BA8]">Begin Your Greek Odyssey Today</h2>
      <p className="mb-5 text-base text-justify leading-snug">
        With <span className="text-orange-500">VJC Overseas</span>, the Greece tourist visa process is simple, and your travel arrangements are perfectly planned. Contact us today to start your visa application and discover exclusive Greece tour packages designed just for you.
      </p>
      <p className="text-base font-semibold text-center md:text-left text-orange-600">
        Get in touch now and take the first step towards your dream vacation in Greece!
      </p>
    </div>
  );
};

export default GreeceTour;
