"use client";

import Image from "next/image";

export default function SaskatchewanPNP() {
  return (
    <div className="px-4 sm:px-4 py-10 max-w-6xl mx-auto text-justify text-base sm:text-[1.05rem] leading-6 text-gray-800">
      <p className="text-gray-800 text-2xl font-medium">
        <strong>
          Move to Canada Through the Saskatchewan Immigration Nominee Program (SINP) – With{" "}
          <span className="text-orange-500">VJC Overseas</span>
        </strong>
      </p>

      {/* Image Section */}
      <div className="flex flex-col lg:flex-row items-center mt-4 gap-6 mb-6">
        <div className="relative group cursor-pointer w-full lg:w-[1400px] h-auto">
          <Image
            src="/Overview-of-the-Saskatchewan-Provincial-Nominee-Program.jpg"
            width={500}
            height={300}
            alt="Saskatchewan Immigration Canada"
            title="Saskatchewan PNP – VJC Overseas"
            className="rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105"
            priority
            unoptimized
          />
          <span className="absolute bottom-2 left-2 bg-black/60 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
            SINP Canada
          </span>
        </div>
     

      {/* Intro */}
      <p>
        Looking for a smooth and affordable pathway to settle in Canada? Saskatchewan, one of the fastest-growing provinces in Canada, offers a reliable immigration route through the Saskatchewan Immigrant Nominee Program (SINP). Whether you're a skilled worker, entrepreneur, or international graduate, Saskatchewan provides excellent opportunities to build a stable future — and{" "}
        <span className="text-orange-500 font-semibold">VJC Overseas</span> is here to guide you every step of the way.
      </p>
 </div>
      {/* Why Saskatchewan */}
      <section className="mt-6">
        <h2 className="text-xl sm:text-1xl font-bold text-black mb-2">Why Choose Saskatchewan?</h2>
        <p>
          Located in western Canada, Saskatchewan is known for its strong economy, abundant natural resources, and growing industries such as agriculture, mining, healthcare, and information technology. With a low cost of living, affordable housing, and high quality of life, Saskatchewan is a great choice for individuals and families looking to settle in Canada for the long term.
        </p>
        <p className="mt-2">
          The province is actively welcoming newcomers to support its economic development and fill labor shortages. Immigration plays a crucial role in Saskatchewan's growth, and the SINP is a direct and efficient route for skilled individuals who want to live and work in the province.
        </p>
      </section>

      {/* What is SINP */}
      <section className="mt-6">
        <h2 className="text-xl sm:text-1xl font-bold text-black mb-2">What is the Saskatchewan Immigrant Nominee Program (SINP)?</h2>
        <p>
          The SINP allows Saskatchewan to nominate individuals for permanent residency based on the province’s economic and labor market needs. Compared to other Canadian immigration streams, SINP offers faster processing times and clearer eligibility requirements.
        </p>
        <p className="mt-2">The program includes several categories:</p>

        <ul className="list-disc list-inside ml-4 mt-2 space-y-2">
          <li>
            <strong>International Skilled Worker Category</strong>
            <ul className="list-disc ml-6 mt-1 space-y-1">
              <li><strong>Express Entry:</strong> For candidates in the federal Express Entry pool.</li>
              <li><strong>Occupation In-Demand:</strong> For workers with skills in demand but not necessarily in the Express Entry pool.</li>
              <li><strong>Employment Offer:</strong> For individuals with a job offer from a Saskatchewan employer.</li>
            </ul>
          </li>
          <li>
            <strong>Saskatchewan Experience Category</strong>
            <p className="ml-6 mt-1">For foreign nationals already working and living in Saskatchewan, including students, work permit holders, and healthcare professionals.</p>
          </li>
          <li>
            <strong>Entrepreneur and Farm Category</strong>
            <p className="ml-6 mt-1">For experienced business owners or farmers who wish to establish, purchase, or partner in a business or farm in Saskatchewan.</p>
          </li>
        </ul>
      </section>

      {/* Why VJC Overseas */}
      <section className="mt-6">
        <h2 className="text-xl sm:text-1xl font-bold text-black mb-2">Why Choose <span className="text-orange-500">VJC Overseas</span>?</h2>
        <p>
          At <span className="text-orange-500 font-semibold">VJC Overseas</span>, we specialize in Canadian immigration pathways like SINP and understand the nuances of Saskatchewan's provincial nomination system. Our team offers end-to-end support, from profile assessment and document preparation to application submission and interview guidance.
        </p>
        <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
          <li>Tailored immigration plans based on your background and goals.</li>
          <li>Complete support from eligibility check to final submission.</li>
          <li>Accurate and updated knowledge of SINP rules and requirements.</li>
          <li>Help you avoid mistakes and improve your success rate.</li>
        </ul>
      </section>

      {/* Final Call */}
      <section className="mt-6">
        <h2 className="text-xl sm:text-1xl font-bold text-black mb-2">Begin Your Journey with <span className="text-orange-500">VJC Overseas</span></h2>
        <p>
          Saskatchewan is welcoming skilled workers and entrepreneurs who are ready to contribute to its economy and become part of its growing community. With <span className="text-orange-500 font-semibold">VJC Overseas</span>, you get a trusted partner who understands your dream of moving to Canada and works tirelessly to make it a reality.
        </p>
        <p className="mt-2 font-semibold">
          Contact us today to schedule your free consultation and let’s take the first step toward your future in Saskatchewan, Canada.
        </p>
      </section>
    </div>
  );
}
