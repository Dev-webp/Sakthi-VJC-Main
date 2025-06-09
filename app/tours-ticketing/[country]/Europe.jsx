'use client';
import React from 'react';
import Image from "next/image";

const EuropeTour = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 -mt-10 font-[Times_New_Roman]">
      <h1 className="flex justify-center text-xl sm:text-2xl md:text-2xl font-bold mb-8 text-center">
        Europe Tourist Visa Process with Affordable Europe Tour Packages
      </h1>
      <p className="text-lg md:text-xl font-medium text-center mb-6">
        Travel Made Easy with <span className="text-orange-500">VJC Overseas</span>
      </p>

      {/* Image and text side by side */}
      <div className="flex flex-col md:flex-row md:items-start gap-6 mb-6">
        {/* Image Box with hover overlay */}
        <div className="md:w-1/2 w-full relative group overflow-hidden rounded-lg shadow-lg">
          <Image
            src="/europe-tour-ticketing.jpg"
            alt="Europe Tour Visa Guidance by VJC Overseas"
            title="Europe Tourist Visa Support by VJC Overseas"
            width={700}
            height={300}
            className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-105"
            priority
            unoptimized
          />
          <div className="absolute inset-0  flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <p className="text-white text-lg font-semibold">Europe Tour by VJC Overseas</p>
          </div>
        </div>

        {/* Text Content */}
        <div className="md:w-1/2 text-justify">
          <p>
            Dreaming of a European getaway filled with iconic cities, charming villages, scenic landscapes, and rich cultural experiences? At <span className="text-orange-500">VJC Overseas</span>, we offer more than just tourist visa assistance — we provide complete travel support with affordable Europe tour packages tailored to your budget, preferences, and travel goals.
          </p>
          <p className="mt-4">
            Whether it’s the Eiffel Tower in Paris, gondola rides in Venice, or the snow-covered Alps in Switzerland, Europe offers unforgettable experiences for every traveler. Our experienced visa consultants and travel advisors make the Europe tourist visa process easy, smooth, and budget-friendly for individuals, couples, and families.
          </p>
        </div>
      </div>

      {/* Remaining Section (unchanged but formatted) */}
      <h2 className="text-xl mt-4 font-semibold text-orange-700">Your Gateway to Europe: Tourist Visa Assistance</h2>
      <p>
        To travel across Europe legally, most Indian travelers require a <strong>Schengen Visa</strong>, which allows entry to 27 countries in the Schengen Zone with a single visa. Our expert team guides you through the visa process from start to finish:
      </p>
      <ul className="list-disc list-inside space-y-1 mt-2">
        <li>Valid passport (at least 6 months validity)</li>
        <li>Passport-size photographs as per embassy specs</li>
        <li>Confirmed flight tickets and hotel bookings</li>
        <li>Travel itinerary covering each country of visit</li>
        <li>Proof of financial stability (bank statements)</li>
        <li>Employment proof or business registration</li>
        <li>Travel insurance with €30,000 coverage</li>
        <li>Visa application form and cover letter</li>
      </ul>
      <p className="mt-2">
        At <span className="text-orange-500">VJC Overseas</span>, we ensure your documents are well-prepared, error-free, and compliant with embassy guidelines to maximize approval chances.
      </p>

      <h2 className="text-xl mt-4 font-semibold text-orange-700">Step-by-Step Visa Process with <span className="text-orange-500">VJC Overseas</span></h2>
      <ul className="list-disc list-inside space-y-1 mt-2">
        <li>Free Travel & Visa Consultation</li>
        <li>Customized Document Checklist</li>
        <li>Filling and Reviewing Your Application</li>
        <li>Booking Visa Appointment</li>
        <li>Mock Interview Support (if required)</li>
        <li>Visa Tracking & Real-time Updates</li>
      </ul>
      <p className="mt-2">
        Our consultants have in-depth knowledge of embassy protocols and timelines. With our hands-on guidance, you can be confident your visa application is in safe hands.
      </p>

      <h2 className="text-xl mt-4 font-semibold text-orange-700">Affordable Europe Tour Packages – Customized & Cost-Effective</h2>
      <p className="mt-2">Along with visa support, we offer exclusive and affordable Europe tour packages that include:</p>
      <ul className="list-disc list-inside space-y-1 mt-2">
        <li>Round-trip airfare options</li>
        <li>3-star to 5-star hotel bookings</li>
        <li>Local transportation & inter-country transfers</li>
        <li>Sightseeing tours and city passes</li>
        <li>Travel insurance and currency exchange support</li>
        <li>Itinerary planning based on your interests</li>
      </ul>
      <p className="mt-2">
        Whether you're planning a 7-day trip to Italy and France, or a 10-day multi-country Europe adventure, we offer budget-friendly and flexible packages that cover all essentials without compromising on experience.
      </p>

      <h2 className="text-xl mt-4 font-semibold text-orange-700">Why Choose <span className="text-orange-500">VJC Overseas</span>?</h2>
      <ul className="list-disc list-inside space-y-1 mt-2">
        <li>Visa + Travel Package in One Place</li>
        <li>High Visa Approval Rate</li>
        <li>Custom Tour Packages at Best Prices</li>
        <li>End-to-End Support from Experts</li>
        <li>Personalized Guidance for Every Traveler</li>
      </ul>
      <p className="mt-2">
        Our goal is not just to get your visa approved, but to help you experience Europe stress-free with no surprises or hidden costs. We believe that world travel should be accessible to everyone — and we work hard to make that happen.
      </p>

      <h2 className="text-xl mt-4 font-semibold text-orange-700">Start Your European Journey Today</h2>
      <p className="mt-2">
        Europe is calling — and your adventure starts here. Let <span className="text-orange-500">VJC Overseas</span> handle the paperwork and planning, while you enjoy the journey of a lifetime.
      </p>
      <p className="font-medium text-orange-600 mt-4">
        Reach out today to get your Europe tourist visa and explore our affordable tour packages. The world is waiting for you!
      </p>
    </div>
  );
};

export default EuropeTour;
