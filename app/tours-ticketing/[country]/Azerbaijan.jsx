'use client';
import React from 'react';
import Image from 'next/image';

const AzerbaijanTour = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 -mt-8 font-[Times_New_Roman]">
      <h1 className="flex justify-center text-lg sm:text-xl md:text-xl font-bold mb-6 text-center">
        Azerbaijan Tourist Visa Process with Affordable Tour Packages – Explore Azerbaijan with <span className="text-orange-500">&nbsp;VJC Overseas</span>
      </h1>

      <div className="flex flex-col md:flex-row items-start gap-6 mb-8">
        <div className="md:w-1/2 text-base text-justify leading-snug">
          <p>
            Nestled at the crossroads of Europe and Asia, Azerbaijan is a captivating destination known for its stunning landscapes, rich history, and vibrant culture. From the modern skyline of Baku to the ancient cave city of Gobustan, Azerbaijan offers a unique blend of tradition and modernity. If you’re planning a visit, <span className="text-orange-500">VJC Overseas</span> is your trusted partner to simplify the Azerbaijan tourist visa process and offer affordable and customizable tourist packages tailored to your interests and budget.
          </p>
          <p className="mt-0">
            As a reputable immigration consultancy, we streamline your visa application and travel arrangements, ensuring a hassle-free journey to this beautiful country.
          </p>
        </div>
        <div className="md:w-1/2 w-full rounded-lg overflow-hidden">
          <Image
            src="/city-baku-azerbaijan-tour-places.webp"
            alt="Azerbaijan Tour with VJC Overseas"
            width={600}
            height={350}
            className="w-full h-auto object-cover rounded-lg"
            priority
            unoptimized
          />
        </div>
      </div>

      <h2 className="text-xl font-bold mb-3 text-[#0D5BA8]">What is the Azerbaijan Tourist Visa?</h2>
      <p className="mb-5 text-base text-justify leading-snug">
        Indian nationals require a tourist visa to Azerbaijan before traveling. Fortunately, Azerbaijan offers an efficient e-visa system that allows travelers to apply online without visiting an embassy. The tourist visa is generally valid for 30 days and can be a single or multiple-entry visa depending on your travel plans.
      </p>
      <p className="mb-5 text-base text-justify leading-snug">
        At <span className="text-orange-500">VJC Overseas</span>, we assist you in navigating the e-visa application process to ensure a smooth and timely approval.
      </p>

      <h2 className="text-xl font-bold mb-3 text-[#0D5BA8]">Azerbaijan Tourist Visa Requirements</h2>
      <ul className="list-disc list-inside mb-5 text-base text-justify space-y-1.5">
        <li>A valid passport with at least six months validity from the date of entry</li>
        <li>A recent passport-sized photograph meeting embassy specifications</li>
        <li>Completed e-visa application form</li>
        <li>Confirmed flight bookings for entry and exit</li>
        <li>Proof of accommodation in Azerbaijan</li>
        <li>Proof of financial means to support your stay</li>
        <li>Payment of the visa fee online</li>
      </ul>
      <p className="mb-5 text-base text-justify leading-snug">
        Our team at <span className="text-orange-500">VJC Overseas</span> guides you step-by-step through the documentation and application process, minimizing errors and delays.
      </p>

      <h2 className="text-xl font-bold mb-3 text-[#0D5BA8]">How VJC Overseas Simplifies Your Azerbaijan Visa and Travel Process</h2>
      <ul className="list-disc list-inside mb-5 text-base text-justify space-y-1.5">
        <li>Personalized consultation to determine the best visa option for your trip</li>
        <li>Assistance with e-visa form filling and document verification</li>
        <li>Guidance on flight bookings and accommodation arrangements</li>
        <li>Support with travel insurance and currency exchange</li>
        <li>Regular updates on visa status and travel advisories</li>
      </ul>
      <p className="mb-5 text-base text-justify leading-snug">
        Our dedicated services ensure your Azerbaijan tourist visa process is hassle-free and efficient.
      </p>

      <h2 className="text-xl font-bold mb-3 text-[#0D5BA8]">Affordable Azerbaijan Tourist Packages</h2>
      <p className="mb-5 text-base text-justify leading-snug">
        Along with visa assistance, <span className="text-orange-500">VJC Overseas</span> offers affordable and customizable Azerbaijan tour packages that let you explore the country’s stunning landmarks and vibrant culture without breaking the bank.
      </p>
      <ul className="list-disc list-inside mb-5 text-base text-justify space-y-1.5">
        <li>Flight bookings and airport transfers</li>
        <li>Comfortable hotels in Baku and other popular destinations</li>
        <li>Guided tours of iconic sites such as the Flame Towers, Maiden Tower, Gobustan National Park, and the Caspian Sea coast</li>
        <li>Cultural experiences including local cuisine tasting, traditional performances, and market visits</li>
        <li>Custom itineraries tailored to your travel interests and budget</li>
        <li>Visa processing and travel insurance support</li>
      </ul>
      <p className="mb-5 text-base text-justify leading-snug">
        Whether you’re traveling solo, with family, or in a group, our Azerbaijan packages are designed to fit your unique travel needs.
      </p>

      <h2 className="text-xl font-bold mb-3 text-[#0D5BA8]">Why Choose <span className="text-orange-500">VJC Overseas</span>?</h2>
      <ul className="list-disc list-inside mb-5 text-base text-justify space-y-1.5">
        <li>Experienced immigration consultancy with high visa approval rates</li>
        <li>Transparent pricing with no hidden charges</li>
        <li>Comprehensive travel solutions from visa to vacation planning</li>
        <li>Customized packages for all traveler types and budgets</li>
        <li>Responsive customer support from start to finish</li>
      </ul>

      <h2 className="text-xl font-bold mb-3 text-[#0D5BA8]">Start Your Azerbaijan Journey Today</h2>
      <p className="mb-5 text-base text-justify leading-snug">
        With <span className="text-orange-500">VJC Overseas</span>, the Azerbaijan tourist visa process becomes straightforward, and your travel arrangements are expertly handled. Contact us now to start your visa application and explore our affordable Azerbaijan tourist packages crafted just for you.
      </p>
      <p className="text-base font-semibold text-center md:text-left text-orange-600">
        Get in touch today and embark on an unforgettable Azerbaijan adventure!
      </p>
    </div>
  );
};

export default AzerbaijanTour;
