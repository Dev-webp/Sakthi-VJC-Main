'use client';
import React from 'react';
import Image from 'next/image';

const SwitzerlandTour = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 -mt-8 font-[Times_New_Roman]">
      <h1 className="flex justify-center text-lg sm:text-xl md:text-xl font-bold mb-6 text-center">
        Switzerland Tourist Visa Process with Affordable Tour Packages – Explore Switzerland with <span className="text-orange-500">VJC Overseas</span>
      </h1>

      <div className="flex flex-col md:flex-row items-start gap-6 mb-8">
        <div className="md:w-1/2 text-base text-justify leading-snug">
          <p>
            Dreaming of snow-capped mountains, crystal-clear lakes, and charming Alpine villages? Switzerland is a breathtaking travel destination known for its scenic landscapes, luxury experiences, and rich culture. Whether you want to visit the iconic Matterhorn, enjoy a train ride on the Glacier Express, or explore cities like Zurich, Geneva, and Lucerne — <span className="text-orange-500">VJC Overseas</span> is your trusted partner in making it happen.
          </p>
          <p className="mt-3">
            We offer complete assistance with the Switzerland tourist visa process and provide affordable, customized Switzerland tour packages tailored to your budget and preferences.
          </p>
        </div>
        <div className="md:w-1/2 w-full rounded-lg overflow-hidden">
          <Image
            src="/Zurich-Geneva-and-Lucerne.jpg" // replace this with your actual Switzerland image path
            alt="Switzerland Tourist Visa and Tour Packages with VJC Overseas"
            width={600}
            height={350}
            className="w-full h-auto object-cover rounded-lg"
            priority
            unoptimized
          />
        </div>
      </div>

      <h2 className="text-xl font-bold mb-3 text-[#00843D]">What is a Switzerland Tourist Visa?</h2>
      <p className="mb-6 text-base text-justify leading-snug">
        Switzerland is part of the Schengen Zone, and Indian citizens require a Schengen Visa to visit Switzerland for tourism or leisure. This short-stay visa allows travelers to stay in Switzerland and other Schengen countries for up to 90 days within a 180-day period. At <span className="text-orange-500">VJC Overseas</span>, we simplify the process and help you submit a strong application for a higher approval rate.
      </p>

      <h2 className="text-xl font-bold mb-3 text-[#00843D]">Switzerland Tourist Visa Requirements</h2>
      <ul className="list-disc list-inside mb-6 text-base text-justify space-y-1.5">
        <li>A valid passport (at least 6 months validity beyond your stay)</li>
        <li>Completed Schengen visa application form</li>
        <li>Two recent passport-sized photographs</li>
        <li>Cover letter with details of your trip (purpose, duration, itinerary)</li>
        <li>Confirmed round-trip flight tickets</li>
        <li>Proof of accommodation (hotel bookings or invitation letter)</li>
        <li>Day-wise travel itinerary</li>
        <li>Proof of financial means (bank statements, ITRs, salary slips)</li>
        <li>Travel insurance covering a minimum of €30,000</li>
        <li>Proof of employment, business, or student status</li>
        <li>Evidence of ties to your home country (employment letter, property documents)</li>
      </ul>
      <p className="mb-6 text-base text-justify leading-snug">
        Our visa consultants at <span className="text-orange-500">VJC Overseas</span> will help you collect, verify, and organize these documents for a seamless application experience.
      </p>

      <h2 className="text-xl font-bold mb-3 text-[#00843D]">Step-by-Step Visa Assistance</h2>
      <ul className="list-disc list-inside mb-6 text-base text-justify space-y-1.5">
        <li>Free Initial Consultation</li>
        <li>Customized Document Checklist</li>
        <li>Form Filling and Application Review</li>
        <li>Visa Appointment Booking & Biometrics Support</li>
        <li>Travel Insurance & Forex Assistance</li>
        <li>Real-time Updates on Application Status</li>
      </ul>
      <p className="mb-6 text-base text-justify leading-snug">
        With <span className="text-orange-500">VJC Overseas</span>, your visa process becomes hassle-free, timely, and highly professional.
      </p>

      <h2 className="text-xl font-bold mb-3 text-[#00843D]">Affordable Switzerland Tour Packages</h2>
      <p className="mb-6 text-base text-justify leading-snug">
        Apart from visa services, we offer budget-friendly and customizable Switzerland travel packages perfect for families, solo travelers, couples, and groups.
      </p>
      <ul className="list-disc list-inside mb-6 text-base text-justify space-y-1.5">
        <li>Return air tickets</li>
        <li>Hotel stays (3-star, 4-star, or premium)</li>
        <li>City tours in Zurich, Lucerne, Interlaken, Geneva, and Bern</li>
        <li>Day trips to Jungfraujoch, Mount Titlis, Rhine Falls, and more</li>
        <li>Glacier Express or Golden Pass scenic train rides</li>
        <li>Swiss Travel Pass options for easy intercity travel</li>
        <li>Local guides and multilingual tour support</li>
        <li>Visa, insurance, and foreign exchange services</li>
      </ul>
      <p className="mb-6 text-base text-justify leading-snug">
        We help you enjoy Switzerland to the fullest, without breaking the bank.
      </p>

      <h2 className="text-xl font-bold mb-3 text-[#00843D]">Why Choose VJC Overseas?</h2>
      <ul className="list-disc list-inside mb-6 text-base text-justify space-y-1.5">
        <li>10+ years of visa consultancy expertise</li>
        <li>High visa success rate for Schengen countries</li>
        <li>Affordable and fully customizable tour packages</li>
        <li>End-to-end support from visa to return travel</li>
        <li>Transparent pricing and no hidden charges</li>
      </ul>

      <h2 className="text-xl font-bold mb-3 text-[#00843D]">Begin Your Swiss Journey Today</h2>
      <p className="mb-6 text-base text-justify leading-snug">
        From the visa application to exploring the majestic beauty of Switzerland, <span className="text-orange-500">VJC Overseas</span> is here to guide you every step of the way. Trust our expert team to deliver a smooth visa experience and unforgettable travel memories — all within your budget.
      </p>
      <p className="text-base font-semibold text-center md:text-left text-orange-600">
        Contact us now to begin your Switzerland tourist visa process and get exclusive travel deals to explore the heart of Europe!
      </p>
    </div>
  );
};

export default SwitzerlandTour;
