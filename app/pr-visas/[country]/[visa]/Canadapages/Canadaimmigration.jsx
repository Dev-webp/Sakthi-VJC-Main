"use client";

import Image from "next/image";

export default function CanadaAIPP() {
  return (
    <div className="px-4 sm:px-4 py-10 max-w-6xl mx-auto text-justify text-base sm:text-[1.rem] leading-6 text-gray-800">
      <p className="text-gray-800 text-2xl font-medium">
          <strong>
            Canada Atlantic Immigration Pilot Program – Your Pathway to a Bright Future in Atlantic Canada with{" "}
            <span className="text-orange-500">VJC Overseas</span>
          </strong>
          <br /></p>
      <div className="flex flex-col lg:flex-row items-center gap-6 mt-2 ml-24 mb-2">
        {/* Image Section */}
        <div className="relative group cursor-pointer w-full lg:w-[6200px] h-auto">
          <Image
            src="/canadapr-aipp.png"
            width={500}
            height={300}
            alt="Atlantic Immigration Pilot Program Canada"
            title="Atlantic Immigration Program – VJC Overseas"
            className="rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105"
            priority
            unoptimized
          />
          <span className="absolute bottom-2 left-2 bg-black/60 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
            AIPP Canada
          </span>
        </div>
</div>
        {/* Intro Section */}
        
          <p className="mb-2">
          <br />
          Canada’s Atlantic provinces — Nova Scotia, Newfoundland and Labrador, New Brunswick, and Prince Edward Island — offer a unique opportunity for immigrants to build a prosperous life in a growing, vibrant part of the country. The Atlantic Immigration Pilot Program (AIPP) helps skilled workers and international graduates achieve Canadian permanent residency. At{" "}
          <span className="text-orange-500 font-semibold">VJC Overseas</span>, we guide you through every step of the AIPP process with professionalism and precision.
        </p>
      

      <div className="space-y-6">
        <section>
          <h2 className="text-xl sm:text-1xl font-bold text-black mb-2">What is the Atlantic Immigration Pilot Program?</h2>
          <p>
            The Atlantic Immigration Pilot Program (AIPP) is an employer-driven immigration pathway aimed at attracting skilled workers and international graduates to the Atlantic provinces. Employers in the region can hire foreign nationals to fill labor gaps without requiring an LMIA.
          </p>
          <p className="mt-2">The AIPP has three streams:</p>
          <ul className="list-disc list-inside ml-4 mt-1">
            <li><strong>Atlantic High-Skilled Program (AHSP):</strong> For skilled workers with job offers.</li>
            <li><strong>Atlantic Intermediate-Skilled Program (AISP):</strong> For semi-skilled or entry-level workers.</li>
            <li><strong>Atlantic International Graduate Program (AIGP):</strong> For international graduates from recognized Atlantic institutions.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl sm:text-1xl font-bold text-black mb-2">Key Benefits of the AIPP</h2>
          <ul className="list-disc list-inside ml-4">
            <li><strong>Permanent Residency:</strong> Includes spouse and dependent children.</li>
            <li><strong>Faster Processing:</strong> Typically within 6 months.</li>
            <li><strong>No LMIA Required:</strong> Employers can hire without the usual LMIA process.</li>
            <li><strong>Family Support:</strong> Spouse can apply for an open work permit; children can attend Canadian schools.</li>
            <li><strong>Guaranteed Job Offer:</strong> A job offer from a designated Atlantic employer strengthens your application.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl sm:text-1xl font-bold text-black mb-2">Eligibility Requirements</h2>
          <ul className="list-disc list-inside ml-4">
            <li><strong>Job Offer:</strong> Must be from a designated employer in an Atlantic province.</li>
            <li><strong>Work Experience:</strong> At least 1 year of experience for skilled streams; not required for international graduates.</li>
            <li><strong>Language Proficiency:</strong> Minimum CLB 4–5 depending on the stream and job level.</li>
            <li><strong>Education:</strong> A diploma/degree (Canadian or ECA equivalent); international grads must be from an Atlantic school.</li>
            <li><strong>Settlement Plan:</strong> A plan outlining your integration and community engagement in the Atlantic region.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl sm:text-1xl font-bold text-black mb-2">How <span className="text-orange-500">VJC Overseas</span> Can Assist You</h2>
          <p>
            At <span className="text-orange-500 font-semibold">VJC Overseas</span>, we offer end-to-end support for your AIPP journey:
          </p>
          <ul className="list-disc list-inside ml-4 mt-2">
            <li><strong>Eligibility Assessment:</strong> We match you with the right AIPP stream.</li>
            <li><strong>Job Offer Support:</strong> Assistance in connecting with designated Atlantic employers.</li>
            <li><strong>Complete Application Help:</strong> We handle document collection, accuracy checks, and submission.</li>
            <li><strong>Post-Approval Settlement:</strong> Guidance on housing, education, healthcare, and more after landing.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl sm:text-1xl font-bold text-black mb-2">Start Your New Life in Atlantic Canada Today</h2>
          <p>
            The Atlantic Immigration Pilot Program is your opportunity to thrive in one of Canada’s most beautiful and welcoming regions. Let{" "}
            <span className="text-orange-500 font-semibold">VJC Overseas</span> be your trusted partner in navigating the AIPP process with confidence and success.
          </p>
          <p className="mt-2 font-semibold">
            Contact us today for a personalized consultation and take the first step toward Canadian permanent residency through the AIPP.
          </p>
        </section>
      </div>
    </div>
  );
}
