"use client";

import Image from "next/image";

export default function CanadaInvestorVisa() {
  return (
    <div className="px-4 sm:px-4 py-10 max-w-6xl mx-auto text-justify text-base sm:text-[1.rem] leading-6 text-gray-800">
      <p className="text-gray-800 text-2xl font-medium">
          <strong>
            Canada Investor Visa Program – Invest in Your Future with{" "}
            <span className="text-orange-500">VJC Overseas</span>
          </strong>
          <br /></p>
      <div className="flex flex-col lg:flex-row items-center gap-6 mb-6">
        {/* Image Section */}
        <div className="relative group cursor-pointer w-full lg:w-[3600px] h-auto">
          <Image
            src="/invest-in-Canada.jpg"
            width={1200}
            height={800}
            alt="Canada Investor Visa Program - VJC Overseas"
            title="Canada Business Investor Immigration"
            className=" transition-transform duration-300 group-hover:scale-105"
            priority
            unoptimized
          />
          <span className="absolute bottom-2 left-2 bg-black/60 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
            Investor Visa Canada
          </span>
        </div>

        {/* Intro Section */}
        
          <p>
          <br />
          Canada is known not only for its breathtaking landscapes and high quality of life, but also for its stable economy and pro-business environment. For high-net-worth individuals and seasoned entrepreneurs, the Canada Investor Visa Program offers a unique opportunity to gain permanent residency by investing in Canada’s economic future. At{" "}
          <span className="text-orange-500 font-semibold">VJC Overseas</span>, we specialize in helping investors and entrepreneurs turn their business ambitions into a secure and prosperous life in Canada.
        </p>
      </div>

      <div className="space-y-6">
        <section>
          <h2 className="text-xl sm:text-1xl font-bold text-black mb-2">What is the Canada Investor Visa Program?</h2>
          <p>
            While Canada does not currently have a federal investor visa program, many provinces offer immigration pathways under their Provincial Nominee Programs (PNPs) tailored for investors, entrepreneurs, and business owners.
          </p>
          <p className="mt-2">
            These programs are designed to attract individuals who have the financial means and experience to start or invest in businesses that generate economic activity and create jobs for Canadians.
          </p>
          <p className="mt-2">Some popular options include:</p>
          <ul className="list-disc list-inside ml-4 mt-1">
            <li>Quebec Immigrant Investor Program (QIIP) (currently suspended but expected to reopen)</li>
            <li>Ontario Entrepreneur Stream</li>
            <li>British Columbia Entrepreneur Immigration</li>
            <li>Manitoba Business Investor Stream</li>
            <li>Alberta Rural Entrepreneur Stream</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl sm:text-1xl font-bold text-black mb-2">Key Features and Benefits</h2>
          <ul className="list-disc list-inside ml-4">
            <li><strong>Pathway to Permanent Residency:</strong> Includes spouse and dependent children with access to healthcare and education.</li>
            <li><strong>Business and Investment Opportunities:</strong> Invest in tech, real estate, agriculture, and other thriving industries.</li>
            <li><strong>Family-Friendly Immigration:</strong> One application for the entire family.</li>
            <li><strong>No Language Test in Some Streams:</strong> Certain provinces do not require IELTS/CELPIP, ideal for business professionals.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl sm:text-1xl font-bold text-black mb-2">General Eligibility Requirements</h2>
          <p>Though each province has its own rules, most investor programs require:</p>
          <ul className="list-disc list-inside ml-4 mt-2">
            <li>Personal net worth between CAD $600,000 and $1.5 million</li>
            <li>Minimum investment from CAD $150,000 to $500,000</li>
            <li>Experience in business ownership or senior management</li>
            <li>A detailed and viable business plan for Canadian operations</li>
            <li>Commitment to live and operate the business in the chosen province</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl sm:text-1xl font-bold text-black mb-2">How <span className="text-orange-500">VJC Overseas</span> Supports Your Investment Journey</h2>
          <p>
            Navigating the Investor Visa process involves complex documentation, business planning, and provincial coordination. At{" "}
            <span className="text-orange-500 font-semibold">VJC Overseas</span>, we provide end-to-end support:
          </p>
          <ul className="list-disc list-inside ml-4 mt-2">
            <li><strong>Personalized Program Matching:</strong> We match your profile with the best provincial stream.</li>
            <li><strong>Business Plan Development:</strong> We help you design a strong, compliant, and compelling business plan.</li>
            <li><strong>Application & Documentation Support:</strong> We ensure your paperwork is flawless and up-to-date with immigration standards.</li>
            <li><strong>Post-Landing Business Setup:</strong> We assist in company registration, licenses, and early-stage business operations.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl sm:text-1xl font-bold text-balck mb-2">Invest with Confidence. Immigrate with Clarity.</h2>
          <p>
            Canada’s Investor Visa pathways open the door to a stable and rewarding future in one of the world’s most business-friendly countries. Whether you're an entrepreneur or a seasoned investor,{" "}
            <span className="text-orange-500 font-semibold">VJC Overseas</span> is your trusted guide to making the right move.
          </p>
          <p className="mt-2 font-semibold">
            Contact us today to explore your options and begin your journey to Canadian permanent residency through investment.
          </p>
        </section>
      </div>
    </div>
  );
}
