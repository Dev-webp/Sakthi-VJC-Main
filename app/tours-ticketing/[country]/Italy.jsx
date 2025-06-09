'use client';
import React from 'react';
import Image from 'next/image';

const ItalyTour = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 -mt-8 font-[Times_New_Roman]">
      <h1 className="flex justify-center text-lg sm:text-xl md:text-xl font-bold mb-6 text-center">
        Italy Tourist Visa Process with Affordable Tour Packages – Discover Italy with <span className="text-orange-500">VJC Overseas</span>
      </h1>

      <div className="flex flex-col md:flex-row items-start gap-6 mb-8">
        <div className="md:w-1/2 text-base text-justify leading-snug">
          <p>
            Italy is a land of timeless art, architecture, and culinary delights. From the romantic canals of Venice to the historic Colosseum in Rome, the scenic Amalfi Coast, and the cultural charm of Florence, Italy promises an unforgettable travel experience. At <span className="text-orange-500">VJC Overseas</span>, we simplify the Italy tourist visa process and offer affordable Italy tour packages that help you explore this stunning country with ease and comfort.
          </p>
          <p className="mt-3">
            As a leading immigration consultancy, we assist travelers from India in obtaining their Schengen visa for Italy and provide end-to-end travel planning, all within your budget.
          </p>
        </div>

        <div className="md:w-1/2 w-full rounded-lg overflow-hidden">
          <Image
            src="/italy-rome-historic.webp"  // replace with your actual Italy image path
            alt="Italy Tourist Visa and Tour Packages with VJC Overseas"
            width={600}
            height={350}
            className="w-full h-auto object-cover rounded-lg"
            priority
            unoptimized
          />
        </div>
      </div>

      <h2 className="text-xl font-bold mb-3 text-[#00843D]">What is an Italy Tourist Visa?</h2>
      <p className="mb-6 text-base text-justify leading-snug">
        To visit Italy for tourism, Indian passport holders must apply for a Schengen Tourist Visa. This short-stay visa allows you to stay in Italy and other Schengen countries for up to 90 days within a 180-day period for leisure, sightseeing, or family visits.
      </p>

      <h2 className="text-xl font-bold mb-3 text-[#00843D]">Italy Tourist Visa Requirements:</h2>
      <ul className="list-disc list-inside mb-6 text-base text-justify space-y-1.5">
        <li>A valid passport with at least 6 months’ validity</li>
        <li>Duly filled Schengen visa application form</li>
        <li>Recent passport-size photographs as per Schengen standards</li>
        <li>A cover letter detailing your travel plan and purpose</li>
        <li>Proof of confirmed round-trip flight tickets</li>
        <li>Hotel bookings or an invitation letter from a host in Italy</li>
        <li>Day-wise travel itinerary</li>
        <li>Travel insurance covering at least €30,000 in medical expenses</li>
        <li>Proof of financial means (bank statements, ITRs, salary slips)</li>
        <li>Employment or business verification documents</li>
        <li>Proof of ties to your home country (job, property, family)</li>
      </ul>
      <p className="mb-6 text-base text-justify leading-snug">
        At <span className="text-orange-500">VJC Overseas</span>, our visa experts help you prepare and organize each document meticulously, reducing the risk of delays or rejections.
      </p>

      <h2 className="text-xl font-bold mb-3 text-[#00843D]">Step-by-Step Visa Support</h2>
      <ul className="list-disc list-inside mb-6 text-base text-justify space-y-1.5">
        <li>Initial Consultation – Understanding your travel purpose and profile</li>
        <li>Personalized Documentation Support – Tailored checklist based on your case</li>
        <li>Application Form Filling & Submission</li>
        <li>Appointment Booking and Biometrics Guidance</li>
        <li>Travel Insurance & Forex Assistance</li>
        <li>Ongoing Updates & Final Travel Briefing</li>
      </ul>
      <p className="mb-6 text-base text-justify leading-snug">
        With our professional guidance, your Italy visa process becomes simple, fast, and stress-free.
      </p>

      <h2 className="text-xl font-bold mb-3 text-[#00843D]">Affordable Italy Tour Packages by VJC Overseas</h2>
      <p className="mb-6 text-base text-justify leading-snug">
        We not only help you get your visa but also create unforgettable travel experiences through our affordable Italy tour packages. These are curated for families, honeymooners, solo travelers, and senior citizens.
      </p>
      <ul className="list-disc list-inside mb-6 text-base text-justify space-y-1.5">
        <li>International flight bookings</li>
        <li>Hotel stays from 3-star to luxury options</li>
        <li>City tours and attraction tickets (Rome, Venice, Florence, Milan, Naples)</li>
        <li>Guided visits to landmarks like the Vatican, Colosseum, Leaning Tower of Pisa</li>
        <li>Local transportation via high-speed trains or tour buses</li>
        <li>Daily itinerary planning and local support</li>
        <li>Travel insurance and currency exchange help</li>
      </ul>
      <p className="mb-6 text-base text-justify leading-snug">
        We focus on giving you a complete Italian experience at a price that fits your pocket.
      </p>

      <h2 className="text-xl font-bold mb-3 text-[#00843D]">Why Choose VJC Overseas?</h2>
      <ul className="list-disc list-inside mb-6 text-base text-justify space-y-1.5">
        <li>Expert guidance in Schengen visa filing</li>
        <li>High approval success rate</li>
        <li>Tailor-made, budget-friendly Italy packages</li>
        <li>Transparent, all-inclusive pricing</li>
        <li>Complete travel support from visa to return</li>
      </ul>

      <h2 className="text-xl font-bold mb-3 text-[#00843D]">Ready to Travel to Italy?</h2>
      <p className="mb-6 text-base text-justify leading-snug">
        Let <span className="text-orange-500">VJC Overseas</span> help you bring your Italian holiday dreams to life. With expert visa guidance and cost-effective tour packages, you’ll enjoy every step of the journey — stress-free and unforgettable.
      </p>
      <p className="text-base font-semibold text-center md:text-left text-orange-600">
        Contact us now to start your Italy tourist visa process and unlock the best Italy travel deals today!
      </p>
    </div>
  );
};

export default ItalyTour;
