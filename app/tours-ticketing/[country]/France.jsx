'use client';
import React from 'react';
import Image from 'next/image';

const FranceTour = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 -mt-8 font-[Times_New_Roman]">
      <h1 className="text-lg sm:text-xl md:text-xl font-bold mb-6 text-center">
        France Tourist Visa Process with Affordable France Tour Packages – Travel to France with <span className="text-orange-500">VJC Overseas</span>
      </h1>

      <div className="flex flex-col md:flex-row items-start gap-6 mb-8">
        <div className="md:w-1/2 text-base text-justify leading-snug">
          <p>
            Planning to explore the timeless beauty, culture, and charm of France? Whether it’s the romantic city of Paris, the lavender fields of Provence, the vineyards of Bordeaux, or the stunning French Riviera, France offers a magical experience for every traveler. At <span className="text-orange-500">VJC Overseas</span>, we simplify the France tourist visa process and offer affordable tour packages designed to give you the best travel experience without exceeding your budget.
          </p>
          
        </div>
        <div className="md:w-1/2 w-full rounded-lg overflow-hidden">
          <Image
            src="/French-Riviera.jpg" // 🔄 replace with your actual image path
            alt="France Tour with VJC Overseas"
            width={600}
            height={350}
            className="w-full h-auto object-cover rounded-lg"
            priority
            unoptimized
          />
        </div>
      </div>
      <p >
            As a trusted immigration and travel consultancy, we guide you from the first step of visa application to your final travel itinerary, ensuring a smooth and memorable journey to France.
          </p>
      <p className="text-base text-justify leading-snug mb-6">
        As a trusted immigration and travel consultancy, we guide you from the first step of visa application to your final travel itinerary, ensuring a smooth and memorable journey to France.
      </p>

      <h2 className="text-xl font-bold mb-3 text-[#DC143C]">What is a France Tourist Visa?</h2>
      <p className="text-base text-justify leading-snug mb-6">
        France is part of the Schengen Area, which means Indian citizens need a Schengen Tourist Visa to visit the country. This visa allows you to travel not only within France but also across 26 other European countries for up to 90 days within a 180-day period.
      </p>

      <h2 className="text-xl font-bold mb-3 text-[#DC143C]">France Tourist Visa Requirements</h2>
      <ul className="list-disc list-inside mb-6 text-base text-justify space-y-1.5">
        <li>Valid passport (minimum 6-month validity)</li>
        <li>Recent passport-size photos (as per Schengen specifications)</li>
        <li>Visa application form duly filled and signed</li>
        <li>Cover letter explaining your purpose of visit</li>
        <li>Confirmed flight tickets and day-wise travel itinerary</li>
        <li>Proof of accommodation (hotel bookings or invitation letter)</li>
        <li>Travel insurance covering a minimum of €30,000</li>
        <li>Bank statements and proof of income (ITR, salary slips, etc.)</li>
        <li>Employment or business proof</li>
        <li>Proof of strong ties to your home country</li>
      </ul>
      <p className="mb-6 text-base text-justify leading-snug">
        At <span className="text-orange-500">VJC Overseas</span>, we offer complete support in gathering, reviewing, and organizing documents to ensure a high visa approval rate.
      </p>

      <h2 className="text-xl font-bold mb-3 text-[#DC143C]">Our Visa Assistance Process</h2>
      <ul className="list-disc list-inside mb-6 text-base text-justify space-y-1.5">
        <li>Initial Consultation – Understanding your travel needs</li>
        <li>Customized Document Checklist – Based on your travel profile</li>
        <li>Visa Application Support – Accurate form filling and appointment booking</li>
        <li>Interview Preparation (if required)</li>
        <li>Real-Time Tracking & Updates</li>
        <li>Post-Visa Travel Support</li>
      </ul>
      <p className="mb-6 text-base text-justify leading-snug">
        With our expert guidance, you can confidently apply for your France tourist visa without any confusion or delays.
      </p>

      <h2 className="text-xl font-bold mb-3 text-[#DC143C]">Affordable France Tour Packages</h2>
      <p className="mb-4 text-base text-justify leading-snug">
        Apart from visa processing, <span className="text-orange-500">VJC Overseas</span> offers affordable and customizable France travel packages. Our packages are designed to give you the best value for money and include:
      </p>
      <ul className="list-disc list-inside mb-6 text-base text-justify space-y-1.5">
        <li>International flight bookings</li>
        <li>3-star to luxury hotel stays</li>
        <li>Guided city tours and cultural experiences</li>
        <li>Transportation within France (train/bus/flight)</li>
        <li>Visits to iconic attractions like the Eiffel Tower, Louvre Museum, Château de Versailles, Mont Saint-Michel, and more</li>
        <li>Daily itinerary planning</li>
        <li>Travel insurance and foreign exchange assistance</li>
      </ul>
      <p className="mb-6 text-base text-justify leading-snug">
        Whether you want a romantic Paris getaway, a family holiday, or a solo backpacking trip, we help design a perfect package within your budget.
      </p>

      <h2 className="text-xl font-bold mb-3 text-[#DC143C]">Why Choose VJC Overseas?</h2>
      <ul className="list-disc list-inside mb-6 text-base text-justify space-y-1.5">
        <li>Trusted experience in visa and travel services</li>
        <li>End-to-end assistance: Visa + Tours + Travel insurance</li>
        <li>Affordable pricing with no hidden costs</li>
        <li>Personalized service and expert consultation</li>
        <li>High visa approval success rate</li>
      </ul>

      <h2 className="text-xl font-bold mb-3 text-[#DC143C]">Start Your French Adventure Today!</h2>
      <p className="mb-4 text-base text-justify leading-snug">
        Let <span className="text-orange-500">VJC Overseas</span> be your guide to a stress-free France travel experience. From getting your France tourist visa approved to exploring the beauty of France on a budget, we are here to support you every step of the way.
      </p>
      <p className="text-base font-semibold text-center md:text-left text-orange-600">
        Contact us today to begin your France visa process and get access to exclusive tour packages at unbeatable prices.
      </p>
    </div>
  );
};

export default FranceTour;
