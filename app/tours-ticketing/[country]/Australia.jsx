'use client';
import React from 'react';
import Image from 'next/image';

const AustraliaTour = () => {
  return (
     <div className="max-w-6xl mx-auto px-4 py-8 -mt-8 font-[Times_New_Roman]">
      <h1 className="flex justify-center text-lg sm:text-xl md:text-xl font-bold mb-6 text-center">
        Australia Tourist Visa Process with Affordable Tour Packages – Explore the Land Down Under with <span className="text-orange-500">VJC Overseas</span>
      </h1>

      <div className="flex flex-col md:flex-row items-start gap-6 mb-8">
        <div className="md:w-1/2 text-base text-justify leading-snug">
          <p>
            Planning an unforgettable trip to Australia? From the iconic Sydney Opera House to the Great Barrier Reef, pristine beaches, vibrant cities, and unique wildlife, Australia is a dream destination for tourists across the world. At <span className="text-orange-500">VJC Overseas</span>, we provide expert assistance in obtaining an Australia tourist visa and also offer affordable tour packages tailored to your travel goals and budget.
          </p>
          <p className="mt-3">
            Whether you're traveling solo, as a couple, or with family, we make your journey to Australia easy, enjoyable, and budget-friendly.
          </p>
        </div>
        <div className="md:w-1/2 w-full rounded-lg overflow-hidden">
          <Image
            src="/Sydney-Opera-House.jpg"
            alt="Sydney Opera House - Australia Travel with VJC Overseas"
            width={600}
            height={350}
            className="w-full h-auto object-cover rounded-lg"
            priority
            unoptimized
          />
        </div>
      </div>

      <h2 className="text-xl font-bold mb-3 text-[#00843D]">What is an Australia Tourist Visa?</h2>
      <p className="mb-5 text-base text-justify leading-snug">
        An Australia Visitor Visa (Subclass 600) allows tourists to visit the country for leisure, sightseeing, visiting friends or family, or attending events. It is typically granted for up to 3, 6, or 12 months depending on your travel plan.
      </p>

      <h2 className="text-xl font-bold mb-3 text-[#00843D]">Eligibility & Documents Required:</h2>
      <ul className="list-disc list-inside mb-5 text-base text-justify space-y-1.5">
        <li>Hold a valid passport</li>
        <li>Submit recent passport-sized photographs</li>
        <li>Provide a detailed travel itinerary and confirmed return tickets</li>
        <li>Show proof of accommodation (hotel bookings or invitation letter)</li>
        <li>Provide bank statements to prove financial capability</li>
        <li>Employment/business proof to show strong ties to your home country</li>
        <li>Travel insurance (recommended)</li>
        <li>Cover letter explaining the purpose of your visit</li>
      </ul>
      <p className="mb-5 text-base text-justify leading-snug">
        Our visa consultants at <span className="text-orange-500">VJC Overseas</span> guide you through every step, ensuring your documents are accurate, complete, and meet Australian immigration standards.
      </p>

      <h2 className="text-xl font-bold mb-3 text-[#00843D]">Step-by-Step Visa Process with VJC Overseas</h2>
      <ul className="list-disc list-inside mb-5 text-base text-justify space-y-1.5">
        <li>Free Consultation – Understand your travel plan and visa needs</li>
        <li>Document Checklist & Preparation – Tailored to your profile</li>
        <li>Visa Application Form Filing – Accurate and professional support</li>
        <li>Health & Character Requirements – Guidance for medical checks if required</li>
        <li>Visa Submission & Tracking – Real-time updates until visa decision</li>
        <li>Pre-Departure Support – From travel tips to packing suggestions</li>
      </ul>

      <h2 className="text-xl font-bold mb-3 text-[#00843D]">Affordable Australia Tour Packages</h2>
      <p className="mb-5 text-base text-justify leading-snug">
        In addition to visa assistance, we offer customized and cost-effective tour packages to Australia that include everything you need for a comfortable journey.
      </p>
      <ul className="list-disc list-inside mb-5 text-base text-justify space-y-1.5">
        <li>Economy or premium-class flight bookings</li>
        <li>Hotel stays (3-star to luxury options)</li>
        <li>Daily breakfast and intercity transport</li>
        <li>Guided tours to places like Gold Coast, Melbourne, Sydney, and Cairns</li>
        <li>Tickets to top attractions like the Sydney Harbour Cruise, Great Ocean Road, Blue Mountains, and more</li>
        <li>Travel insurance and foreign exchange support</li>
      </ul>
      <p className="mb-5 text-base text-justify leading-snug">
        Whether you’re looking for a relaxing holiday or a full adventure experience, we can tailor a package to meet your expectations and budget.
      </p>

      <h2 className="text-xl font-bold mb-3 text-[#00843D]">Why Choose <span className="text-orange-500">VJC Overseas</span>?</h2>
      <ul className="list-disc list-inside mb-5 text-base text-justify space-y-1.5">
        <li>High visa approval success rate</li>
        <li>End-to-end visa and travel planning</li>
        <li>Affordable, transparent pricing</li>
        <li>Personalized customer support</li>
        <li>10+ years of trusted experience in visa consultancy</li>
      </ul>

      <h2 className="text-xl font-bold mb-3 text-[#00843D]">Begin Your Australia Journey Today</h2>
      <p className="mb-5 text-base text-justify leading-snug">
        Australia is waiting to be explored — and your journey begins with the right visa and a well-planned itinerary. Let <span className="text-orange-500">VJC Overseas</span> take care of the visa process and tour planning, so you can focus on enjoying every moment.
      </p>
      <p className="text-base font-semibold text-center md:text-left text-orange-600">
        Get in touch today to apply for your Australia tourist visa and explore our latest affordable Australia tour packages designed just for you.
      </p>
    </div>
  );
};

export default AustraliaTour;
