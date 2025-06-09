"use client";

import Image from "next/image";

export default function CanadaICT() {
  return (
    <div className="px-4 sm:px-4 py-8 max-w-6xl mx-auto text-justify text-base sm:text-[1rem] leading-6 text-gray-800">
       <p className="text-gray-800 text-2xl font-medium">
          <strong>
            Canada Intra-Company Transfer (ICT) Program – Expand Your Global Presence with{" "}
            <span className="text-orange-500">VJC Overseas</span>
          </strong>
          <br /> </p>
      <div className="flex flex-col lg:flex-row items-center gap-6 mt-4 mb-6">
        {/* Image Section */}
        <div className="relative group cursor-pointer w-full lg:w-[2200px] h-auto">
          <Image
            src="/Expand-Business-to-Canada-with-ICT.jpg"
            width={500}
            height={300}
            alt="Canada Intra-Company Transfer Program - VJC Overseas"
            title="Canada ICT Program"
            className=" transition-transform duration-300 group-hover:scale-105"
            priority
            unoptimized
          />
          <span className="absolute bottom-2 left-2 bg-black/60 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
            Canada ICT Program
          </span>
        </div>

        {/* Intro Text */}
       
          <p>
          <br />
          Canada is one of the world’s top destinations for international business expansion and global talent mobility. The Intra-Company Transfer (ICT) Program allows multinational companies to transfer key employees to their Canadian operations, without the need for a Labour Market Impact Assessment (LMIA). At{" "}
          <span className="text-orange-500 font-semibold">VJC Overseas</span>, we specialize in assisting businesses and professionals through the ICT program, offering expert guidance from start to finish.
        </p>
      </div>

      <div className="space-y-6">
        <section>
          <h2 className="text-xl sm:text-1xl font-bold text-black mb-2">What is the ICT Program?</h2>
          <p>
            The Canada Intra-Company Transfer Program is part of the International Mobility Program, designed to facilitate the movement of skilled workers within multinational companies. It enables foreign businesses to transfer eligible employees to a Canadian branch, subsidiary, or affiliate, helping them support business growth while contributing to the Canadian economy.
          </p>
          <p className="mt-2">
            This program is ideal for:
          </p>
          <ul className="list-disc list-inside ml-4">
            <li>Executives and senior managers</li>
            <li>Functional or specialized knowledge workers</li>
            <li>Entrepreneurs expanding their companies into Canada</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl sm:text-1xl font-bold text-black mb-2">Key Benefits of the ICT Program</h2>
          <ul className="list-disc list-inside ml-4">
            <li><strong>No LMIA Required</strong><br />One of the most significant advantages of the ICT program is that it does not require a Labour Market Impact Assessment, making the process faster and less complex than many work permit options.</li>
            <li><strong>Pathway to Permanent Residency</strong><br />Many ICT work permit holders can later apply for permanent residency through Express Entry under the Canadian Experience Class or the Federal Skilled Worker Program.</li>
            <li><strong>Business Expansion into Canada</strong><br />The ICT program is a strategic tool for international companies to establish or grow their presence in the Canadian market.</li>
            <li><strong>Family Sponsorship</strong><br />Work permit holders can bring their spouses and dependent children to Canada. Spouses may also qualify for open work permits.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl sm:text-1xl font-bold text-black mb-2">Eligibility Criteria</h2>
          <p>
            To qualify for the ICT program, both the employer and employee must meet certain requirements:
          </p>
          <ul className="list-disc list-inside ml-4 mt-2">
            <li>The foreign company and the Canadian entity must have a qualifying relationship (parent, branch, affiliate, or subsidiary).</li>
            <li>The employee must have worked full-time for at least one year in the past three years with the foreign company in a similar role.</li>
            <li>The position in Canada must be executive, managerial, or specialized in nature.</li>
            <li>For startups or new offices in Canada, a viable business plan must be presented.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl sm:text-1xl font-bold text-black mb-2">How <span className="text-orange-500">VJC Overseas</span> Helps You Succeed</h2>
          <p>
            At <span className="text-orange-500 font-semibold">VJC Overseas</span>, we offer a full range of services tailored to businesses and professionals using the ICT pathway:
          </p>
          <ul className="list-disc list-inside ml-4 mt-2">
            <li><strong>Eligibility and Documentation Review</strong><br />We carefully assess your company structure and employee qualifications to ensure compliance with Canadian immigration rules.</li>
            <li><strong>Business Plan Development</strong><br />For new Canadian branches, we help develop a compelling and professional business plan to strengthen your application.</li>
            <li><strong>Work Permit Application Support</strong><br />Our consultants manage the complete ICT work permit process — from gathering documents to submission and follow-up.</li>
            <li><strong>Post-Arrival Services</strong><br />We assist with business setup, tax registration, and long-term immigration planning, including transitioning to permanent residency.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl sm:text-1xl font-bold text-balck mb-2">Open the Doors to Canada with <span className="text-orange-500">VJC Overseas</span></h2>
          <p>
            The Intra-Company Transfer Program is a powerful opportunity for businesses to tap into the Canadian market and for skilled professionals to explore long-term career growth in Canada. Whether you’re a business owner, HR professional, or skilled employee,{" "}
            <span className="text-orange-500 font-semibold">VJC Overseas</span> is your trusted partner for navigating the ICT process smoothly and successfully.
          </p>
          <p className="mt-2 font-semibold">
            Contact us today to begin your Canadian business expansion or professional journey through the ICT Program — with confidence, expertise, and personalized support.
          </p>
        </section>
      </div>
    </div>
  );
}
