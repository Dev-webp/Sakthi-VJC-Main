"use client";

import Image from "next/image";

export default function AlbertaPNP() {
  return (
    <div className="px-4 sm:px-4 py-10 max-w-6xl mx-auto text-justify text-base sm:text-[1.05rem] leading-6 text-gray-800">
      <p className="text-gray-800 text-2xl font-medium">
        <strong>
          Immigrate to Canada Through the Alberta Advantage Immigration Program (AAIP) – With{" "}
          <span className="text-orange-500">VJC Overseas</span>
        </strong>
      </p>

      {/* Image Section */}
      <div className="flex flex-col lg:flex-row items-center mt-4 gap-6 mb-6">
        <div className="relative group cursor-pointer w-full lg:w-[2900px] h-auto">
          <Image
            src="/Alberta-PNP.jpg"
            width={500}
            height={300}
            alt="Alberta Immigration Canada"
            title="Alberta AAIP – VJC Overseas"
            className="rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105"
            priority
            unoptimized
          />
          <span className="absolute bottom-2 left-2 bg-black/60 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
            Alberta AAIP
          </span>
        </div>
      

      {/* Intro */}
      <p>
        If you’re looking to build a successful life in Canada, Alberta offers one of the most promising pathways through its Alberta Advantage Immigration Program (AAIP), formerly known as the Alberta Immigrant Nominee Program (AINP). Alberta is not only a hub of economic opportunity but also a province that actively welcomes skilled workers, entrepreneurs, and international graduates. At{" "}
        <span className="text-orange-500 font-semibold">VJC Overseas</span>, we are here to help you navigate this process from start to finish with expert care and support.
      </p>
</div>
      {/* Why Alberta */}
      <section className="mt-6">
        <h2 className="text-xl font-bold text-black mb-2">Why Choose Alberta?</h2>
        <p>
          Alberta is one of Canada’s most prosperous provinces, known for its booming industries, high employment rate, and beautiful natural landscapes, including the famous Rocky Mountains. With major cities like Calgary and Edmonton, Alberta offers both urban opportunities and a peaceful lifestyle.
        </p>
        <p className="mt-2">
          The province has a strong demand for professionals in sectors like engineering, healthcare, construction, information technology, agriculture, and trades.
        </p>
        <p className="mt-2">
          What makes Alberta particularly attractive to immigrants is its high standard of living, low taxes, and affordable cost of living. For families and individuals alike, Alberta provides an ideal environment to grow both professionally and personally.
        </p>
      </section>

      {/* What is AAIP */}
      <section className="mt-6">
        <h2 className="text-xl font-bold text-black mb-2">What is the Alberta Advantage Immigration Program (AAIP)?</h2>
        <p>
          The AAIP is Alberta’s Provincial Nominee Program (PNP), designed to nominate individuals for Canadian permanent residency based on the province's economic and labor market needs. The program offers several immigration streams, each catering to different profiles:
        </p>

        <ul className="list-disc list-inside ml-4 mt-2 space-y-2">
          <li>
            <strong>Alberta Express Entry Stream</strong>
            <ul className="list-disc ml-6 mt-1 space-y-1">
              <li>For candidates already in the federal Express Entry pool.</li>
              <li>Alberta selects candidates with strong ties to the province or those who support economic development.</li>
              <li>A provincial nomination adds 600 CRS points, boosting your chances of receiving an ITA.</li>
            </ul>
          </li>

          <li>
            <strong>Alberta Opportunity Stream</strong>
            <p className="ml-6 mt-1">For foreign nationals already working in Alberta with a valid work permit. Ideal for temporary foreign workers in eligible occupations.</p>
          </li>

          <li>
            <strong>Rural Renewal Stream</strong>
            <p className="ml-6 mt-1">Encourages newcomers to settle in rural Alberta communities. Requires a job offer from an approved rural employer.</p>
          </li>

          <li>
            <strong>Graduate Entrepreneur Stream</strong>
            <p className="ml-6 mt-1">For international graduates from Alberta post-secondary institutions who want to start or buy a business.</p>
          </li>

          <li>
            <strong>Foreign Graduate Entrepreneur Stream</strong>
            <p className="ml-6 mt-1">For foreign-educated entrepreneurs with a viable business plan and intent to launch a business in Alberta.</p>
          </li>

          <li>
            <strong>Farm Stream</strong>
            <p className="ml-6 mt-1">For experienced farmers planning to purchase or develop a farming business in Alberta.</p>
          </li>
        </ul>
      </section>

      {/* Why VJC Overseas */}
      <section className="mt-6">
        <h2 className="text-xl font-bold text-black mb-2">Why Choose <span className="text-orange-500">VJC Overseas</span>?</h2>
        <p>
          At <span className="text-orange-500 font-semibold">VJC Overseas</span>, we have in-depth knowledge of Canadian immigration programs and a successful track record of helping clients achieve their PR goals. Our team of qualified consultants provides end-to-end assistance — from eligibility assessment and document preparation to application submission and post-landing support.
        </p>
        <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
          <li>Custom plans based on your skills, goals, and situation.</li>
          <li>Complete guidance through every step of the AAIP process.</li>
          <li>Stress-free, transparent, and personalized service.</li>
        </ul>
      </section>

      {/* Call to Action */}
      <section className="mt-6">
        <h2 className="text-xl font-bold text-black mb-2">Start Your Alberta Immigration Journey Today</h2>
        <p>
          Canada is calling, and Alberta could be your gateway to a brighter future. Whether you're a skilled worker, entrepreneur, or graduate, the AAIP offers real opportunities — and{" "}
          <span className="text-orange-500 font-semibold">VJC Overseas</span> is here to help you seize them.
        </p>
        <p className="mt-2 font-semibold">
          Contact us today for a free consultation and take the first step toward living and working in Alberta, Canada.
        </p>
      </section>
    </div>
  );
}
