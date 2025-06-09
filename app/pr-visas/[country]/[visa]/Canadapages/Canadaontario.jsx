"use client";

import Image from "next/image";

export default function OntarioPNP() {
  return (
    <div className="px-4 sm:px-4 py-10 max-w-6xl mx-auto text-justify text-base sm:text-[1.05rem] leading-6 text-gray-800">
      <p className="text-gray-800 text-2xl font-medium">
        <strong>
          Settle in Ontario, Canada Through the Ontario PNP – Powered by{" "}
          <span className="text-orange-500">VJC Overseas</span>
        </strong>
      </p>

      {/* Image Section */}
      <div className="flex flex-col lg:flex-row items-center mt-4 gap-6 mb-6">
        <div className="relative group cursor-pointer w-full lg:w-[800px] ml-28 h-auto">
          <Image
            src="/Ontario-Immigrant-Nominee-Programbanner.jpg"
            width={500}
            height={300}
            alt="Ontario PNP Canada Immigration"
            title="Ontario Immigrant Nominee Program – VJC Overseas"
            className="rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105"
            priority
            unoptimized
          />
          <span className="absolute bottom-2 left-2 bg-black/60 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
            Ontario PNP Canada
          </span>
        </div>
      </div>

      {/* Introduction */}
      <p>
        Ontario, Canada’s most populous and economically dynamic province, offers exciting immigration opportunities through the Ontario Immigrant Nominee Program (OINP). If you're dreaming of a new life in Canada — whether you're a skilled worker, international graduate, or entrepreneur — Ontario could be your ideal destination. At{" "}
        <span className="text-orange-500 font-semibold">VJC Overseas</span>, we specialize in helping applicants navigate the OINP process with expert guidance and personalized support from start to finish.
      </p>

      {/* Why Ontario */}
      <section className="mt-6">
        <h2 className="text-xl sm:text-1xl font-bold text-black mb-2">Why Choose Ontario?</h2>
        <p>
          Ontario is home to major cities like Toronto and Ottawa, top-ranked universities, and one of North America’s strongest job markets. The province offers excellent healthcare, education, and infrastructure, making it a top choice for immigrants worldwide. Ontario continues to attract global talent to support its growing economy and fill labor shortages across key sectors such as healthcare, IT, engineering, finance, and skilled trades.
        </p>
      </section>

      {/* What is OINP */}
      <section className="mt-6">
        <h2 className="text-xl sm:text-1xl font-bold text-black mb-2">What is the Ontario Immigrant Nominee Program (OINP)?</h2>
        <p>
          The OINP is Ontario’s official immigration pathway under Canada’s Provincial Nominee Program (PNP). It allows the provincial government to nominate eligible foreign nationals for permanent residence based on Ontario’s labor market and economic needs.
        </p>
        <p className="mt-2">There are several streams under the OINP:</p>

        <ul className="list-disc list-inside ml-4 mt-2 space-y-2">
          <li>
            <strong>Human Capital Category</strong>
            <ul className="list-disc ml-6 mt-1 space-y-1">
              <li><strong>Express Entry – Human Capital Priorities Stream:</strong> For candidates in the federal Express Entry system with the required skills and experience.</li>
              <li><strong>Skilled Trades Stream:</strong> For workers in eligible trades occupations in Ontario.</li>
              <li><strong>French-Speaking Skilled Worker Stream:</strong> For French-speaking candidates with strong English abilities.</li>
            </ul>
          </li>
          <li>
            <strong>Employer Job Offer Category</strong>
            <ul className="list-disc ml-6 mt-1 space-y-1">
              <li><strong>Foreign Worker Stream:</strong> For workers with a job offer in a skilled occupation.</li>
              <li><strong>International Student Stream:</strong> For recent graduates with a job offer from an Ontario employer.</li>
              <li><strong>In-Demand Skills Stream:</strong> For workers in high-demand occupations such as agriculture, construction, and personal support work.</li>
            </ul>
          </li>
          <li>
            <strong>Business Category</strong>
            <ul className="list-disc ml-6 mt-1">
              <li><strong>Entrepreneur Stream:</strong> For individuals looking to start or buy a business in Ontario.</li>
            </ul>
          </li>
        </ul>
      </section>

      {/* Why VJC Overseas */}
      <section className="mt-6">
        <h2 className="text-xl sm:text-1xl font-bold text-black mb-2">Why Apply Through <span className="text-orange-500">VJC Overseas</span>?</h2>
        <p>
          At VJC Overseas, we believe immigration is not just about moving to another country — it’s about transforming your future. Our experienced consultants are well-versed in the OINP’s latest requirements and selection criteria.
        </p>
        <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
          <li>We assess your profile and recommend the right stream.</li>
          <li>Assist with accurate documentation and step-by-step submission.</li>
          <li>Guide you throughout the process to maximize success chances.</li>
          <li>Keep you informed with the latest OINP changes and policies.</li>
        </ul>
      </section>

      {/* Final Call */}
      <section className="mt-6">
        <h2 className="text-xl sm:text-1xl font-bold text-black mb-2">Take the First Step Toward a Brighter Future</h2>
        <p>
          Ontario’s vibrant job market, world-class education, and high quality of life make it one of the most attractive provinces in Canada for newcomers. With the OINP and the expert guidance of{" "}
          <span className="text-orange-500 font-semibold">VJC Overseas</span>, your path to Canadian permanent residency is clearer than ever.
        </p>
        <p className="mt-2 font-semibold">
          Contact VJC Overseas today for a free consultation and start your journey to Ontario, Canada — where opportunities await, and your dreams can take root.
        </p>
      </section>
    </div>
  );
}
