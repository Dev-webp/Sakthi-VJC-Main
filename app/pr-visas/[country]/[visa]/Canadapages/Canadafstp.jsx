"use client";

import Image from "next/image";

export default function CanadaFSTP() {
  return (
    <div className="px-4 sm:px-4 py-10 max-w-6xl mx-auto text-justify text-base sm:text-[1.rem] leading-6 text-gray-800">
      <p className="text-gray-800 text-2xl font-medium">
          <strong>
            Federal Skilled Trades Program (FSTP) – Skilled Tradespeople, Your Future in Canada Starts with{" "}
            <span className="text-orange-500">VJC Overseas</span>
          </strong>
          <br /></p>
      <div className="flex flex-col lg:flex-row items-center gap-6 mb-6">
        {/* Image Section */}
        <div className="relative group cursor-pointer w-full lg:w-[1300px] h-auto">
          <Image
            src="/canadapr-fstp.webp"
            width={500}
            height={300}
            alt="Federal Skilled Trades Program - VJC Overseas"
            title="Federal Skilled Trades Program"
            className=" transition-transform duration-300 group-hover:scale-105"
            priority
            unoptimized
          />
          <span className="absolute bottom-2 left-2 bg-black/60 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
            FSTP Canada
          </span>
        </div>

        {/* Heading & Intro */}
        
          <p>
          <br />
          Canada continues to experience a growing demand for skilled trades professionals across various industries. The Federal Skilled Trades Program (FSTP) is a specialized immigration stream under Canada’s Express Entry system, designed to bring in qualified tradespeople from around the world to meet labor shortages. At{" "}
          <span className="text-orange-500 font-semibold">VJC Overseas</span>, we help skilled workers turn their trades experience into a permanent future in Canada.
        </p>
      </div>

      <div className="space-y-6">
        <section>
          <h2 className="text-xl sm:text-1xl font-bold text-black mb-2">What is the Federal Skilled Trades Program?</h2>
          <p>
            The FSTP is one of the three federal immigration programs managed through Express Entry, alongside the Federal Skilled Worker Program (FSWP) and the Canadian Experience Class (CEC). This program is uniquely tailored to skilled tradespeople who have hands-on experience in sectors like construction, maintenance, manufacturing, and industrial work.
          </p>
          <p className="mt-2">
            Unlike other programs that prioritize academic degrees, FSTP focuses on practical skills and trade certifications — making it an ideal pathway for workers who may not have formal university education but have valuable, in-demand expertise.
          </p>
        </section>

        <section>
          <h2 className="text-xl sm:text-1xl font-bold text-black mb-2">Occupations Eligible Under FSTP</h2>
          <p>The Federal Skilled Trades Program is open to individuals in NOC TEER 2 or 3 trade occupations, including but not limited to:</p>
          <ul className="list-disc list-inside ml-4 mt-2">
            <li>Electricians</li>
            <li>Plumbers</li>
            <li>Welders</li>
            <li>Carpenters</li>
            <li>HVAC technicians</li>
            <li>Mechanics</li>
            <li>Heavy-duty equipment operators</li>
            <li>Cooks and chefs</li>
            <li>Butchers and bakers</li>
          </ul>
          <p className="mt-2">
            If your occupation falls under these categories and you meet the basic requirements, FSTP may be your best route to permanent residency in Canada.
          </p>
        </section>

        <section>
          <h2 className="text-xl sm:text-1xl font-bold text-black mb-2">FSTP Eligibility Requirements</h2>
          <ul className="list-disc list-inside ml-4">
            <li><strong>Work Experience:</strong> At least 2 years of full-time work experience in a skilled trade within the last 5 years.</li>
            <li><strong>Job Offer or Certificate:</strong> Either a valid job offer for full-time employment in Canada (at least 1 year) OR a certificate of qualification in your trade issued by a Canadian provincial or territorial authority.</li>
            <li><strong>Language Proficiency:</strong> Minimum CLB 5 in speaking and listening, and CLB 4 in reading and writing (IELTS or CELPIP).</li>
            <li><strong>Admissibility:</strong> You must be legally admissible to Canada and intend to live outside Quebec.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl sm:text-1xl font-bold text-black mb-2">Why Choose <span className="text-orange-500">VJC Overseas</span> for Your FSTP Application?</h2>
          <p>
            At <span className="text-orange-500 font-semibold">VJC Overseas</span>, we take pride in helping tradespeople achieve their Canadian dream. Here’s how we make your journey smoother:
          </p>
          <ul className="list-disc list-inside ml-4 mt-2">
            <li><strong>Free Profile Assessment:</strong> We evaluate your background and trade experience to determine your eligibility for FSTP and other immigration pathways.</li>
            <li><strong>Trade Certification Guidance:</strong> If you need a trade certificate in Canada, we assist you in navigating the certification process with provincial regulatory bodies.</li>
            <li><strong>Express Entry Profile Creation:</strong> Our experts create a professional and competitive Express Entry profile to maximize your Comprehensive Ranking System (CRS) score.</li>
            <li><strong>End-to-End Application Support:</strong> From documentation to final submission, we manage every detail of your immigration application with care and accuracy.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl sm:text-1xl font-bold text-black mb-2">Build a Better Life in Canada – Let <span className="text-orange-500">VJC Overseas</span> Lead the Way</h2>
          <p>
            The Federal Skilled Trades Program is your chance to turn years of practical experience into a permanent and prosperous future in Canada. With tradespeople in high demand, now is the perfect time to apply. Let{" "}
            <span className="text-orange-500 font-semibold">VJC Overseas</span> be your trusted guide on the path to Canadian permanent residency.
          </p>
          <p className="mt-2 font-semibold">
            Contact us today for a free consultation and take the first step toward a better future through the Federal Skilled Trades Program.
          </p>
        </section>
      </div>
    </div>
  );
}
