"use client";

import Image from "next/image";

export default function CanadaFSWP() {
  return (
    <div className="px-4 sm:px-4 py-10 max-w-6xl mx-auto text-justify text-base sm:text-[1.rem] leading-6 text-gray-800">
     {/* Intro Section */}
        <p className="text-gray-800 text-2xl font-medium">
          <strong>
            Federal Skilled Worker Program (FSWP) – Unlock Your Future in Canada with{" "}
            <span className="text-orange-500">VJC Overseas</span>
          </strong>
          <br /></p>
     <div className="flex flex-col lg:flex-row items-center gap-6 mt-2 mb-6">
        {/* Image Section */}
        <div className="relative group cursor-pointer w-full lg:w-[1200px] h-auto">
          <Image
            src="/canadapr--fswp.jpg"
            width={500}
            height={300}
            alt="Federal Skilled Worker Program - VJC Overseas"
            title="Federal Skilled Worker Program Canada"
            className=" transition-transform duration-300 group-hover:scale-105"
            priority
            unoptimized
          />
          <span className="absolute bottom-2 left-2 bg-black/60 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
            FSWP Canada
          </span>
        </div>

       
          <p>
          <br />
          Are you a skilled professional dreaming of a better life in Canada? The Federal Skilled Worker Program (FSWP) is one of the most popular and trusted pathways to Canadian permanent residency. At{" "}
          <span className="text-orange-500 font-semibold">VJC Overseas</span>, we specialize in helping qualified professionals navigate the FSWP process with confidence, precision, and success.
        </p>
      </div>

      <div className="space-y-6">
        <section>
          <h2 className="text-xl sm:text-1xl font-bold text-black mb-2">What is the Federal Skilled Worker Program?</h2>
          <p>
            The Federal Skilled Worker Program is one of three main immigration streams managed under Canada’s Express Entry system, alongside the Federal Skilled Trades Program (FSTP) and Canadian Experience Class (CEC).
          </p>
          <p className="mt-2">
            The FSWP is designed for skilled individuals with foreign work experience who meet criteria in areas such as education, language ability, and occupation. It's a points-based system where applicants are assessed on various factors to determine their eligibility and ranking.
          </p>
        </section>

        <section>
          <h2 className="text-xl sm:text-1xl font-bold text-black mb-2">Why Choose FSWP?</h2>
          <p>The FSWP is ideal for individuals who:</p>
          <ul className="list-disc list-inside ml-4 mt-2">
            <li>Have foreign skilled work experience</li>
            <li>Possess a recognized educational qualification</li>
            <li>Can communicate effectively in English or French</li>
            <li>Wish to live and work anywhere in Canada (except Quebec)</li>
          </ul>
          <p className="mt-2">
            This program offers a direct route to permanent residency, and successful applicants can bring their spouse and children with them, making it a perfect option for individuals and families alike.
          </p>
        </section>

        <section>
          <h2 className="text-xl sm:text-1xl font-bold text-black mb-2">FSWP Eligibility Criteria</h2>
          <ul className="list-disc list-inside ml-4">
            <li>
              <strong>Skilled Work Experience:</strong> At least one year of continuous full-time or equivalent part-time paid work experience in the past 10 years in a National Occupation Classification (NOC) TEER 0, 1, 2, or 3 role.
            </li>
            <li>
              <strong>Language Ability:</strong> You must take a language test (IELTS or CELPIP) and achieve a minimum of CLB 7 in all four abilities – reading, writing, speaking, and listening.
            </li>
            <li>
              <strong>Education:</strong> A secondary or post-secondary diploma/degree is required. Foreign education must be verified by an Educational Credential Assessment (ECA).
            </li>
            <li>
              <strong>Proof of Funds:</strong> You must demonstrate that you have enough financial resources to support yourself and your family upon arrival (unless you have a valid job offer or are already working in Canada).
            </li>
            <li>
              <strong>Minimum 67 Points:</strong> On Canada’s six-factor selection grid (age, education, experience, language, adaptability, and job offer), you must score at least 67 out of 100.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl sm:text-1xl font-bold text-black mb-2">How <span className="text-orange-500">VJC Overseas</span> Helps You Succeed</h2>
          <p>
            At <span className="text-orange-500 font-semibold">VJC Overseas</span>, we understand that immigration is a life-changing decision. Our team of certified immigration experts offers complete support throughout your journey:
          </p>
          <ul className="list-disc list-inside ml-4 mt-2">
            <li><strong>Free Eligibility Check:</strong> We assess your profile and determine your eligibility for FSWP and other suitable programs.</li>
            <li><strong>Express Entry Profile Creation:</strong> We craft and submit a compelling Express Entry profile to boost your chances of receiving an Invitation to Apply (ITA).</li>
            <li><strong>Documentation & Application Support:</strong> From ECA to language testing and document submission, we manage every step of the process.</li>
            <li><strong>Post-ITA Guidance:</strong> Once you receive an ITA, we help you prepare a strong and complete PR application.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl sm:text-1xl font-bold text-black mb-2">Your Canadian Dream Starts Here</h2>
          <p>
            The Federal Skilled Worker Program is your gateway to a new life in one of the most progressive, diverse, and opportunity-rich countries in the world. Let{" "}
            <span className="text-orange-500 font-semibold">VJC Overseas</span> be your trusted partner in achieving Canadian permanent residency through the FSWP.
          </p>
          <p className="mt-2 font-semibold">
            Contact us today for a personalized consultation and begin your journey to Canada with experts you can trust.
          </p>
        </section>
      </div>
    </div>
  );
}
