"use client";

import Image from "next/image";

export default function QuebecSkilledWorker() {
  return (
    <div className="px-4 sm:px-6 py-10 max-w-6xl mx-auto text-justify text-base sm:text-[1.05rem] leading-7 text-gray-800">
      <p className="text-gray-800 text-2xl font-medium">
          <strong>
            Quebec Selected Skilled Workers Program – Settle in the Heart of French Canada with{" "}
            <span className="text-orange-500">VJC Overseas</span>
          </strong>
          <br /></p>
      <div className="flex flex-col lg:flex-row items-center gap-6 mb-6">
        {/* Image Section */}
        <div className="relative group cursor-pointer w-full lg:w-[3000px] h-auto">
          <Image
            src="/Quebec-Immigration-Skilled-Worker-Programme-1.jpg"
            width={500}
            height={300}
            alt="Quebec Skilled Worker Program - VJC Overseas"
            title="Quebec Skilled Worker Program"
            className=" transition-transform duration-300 group-hover:scale-105"
            priority
            unoptimized
          />
          <span className="absolute bottom-2 left-2 bg-black/60 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
            Quebec Skilled Worker Program
          </span>
        </div>

        {/* Introduction */}
        

    <p>          <br />
          If you're dreaming of building a life in one of Canada’s most culturally rich and economically vibrant provinces, the Quebec Selected Skilled Workers Program (QSWP) may be your perfect immigration pathway. As a recognized leader in immigration consultancy,{" "}
          <span className="text-orange-500 font-semibold">VJC Overseas</span> is here to guide you through every step of this unique program.
        </p>
      </div>

      {/* Remaining Content */}
      <div className="space-y-6">
        <section>
          <h2 className="text-xl sm:text-1xl font-bold text-black mb-2">What is the Quebec Skilled Worker Program?</h2>
          <p>
            The Quebec Selected Skilled Workers Program (QSWP) is an immigration program managed by the province of Quebec. Unlike other provinces, Quebec has its own selection process and criteria for skilled workers, independent from the federal Express Entry system.
          </p>
          <p className="mt-2">
            The QSWP is designed to attract skilled individuals who can contribute to Quebec’s labour market and integrate into its society. The program evaluates candidates based on a points-based selection grid, taking into account factors like education, work experience, age, language skills (primarily French), and other personal characteristics.
          </p>
        </section>

        <section>
          <h2 className="text-xl sm:text-1xl font-bold text-black mb-2">Why Choose the Quebec Skilled Worker Program?</h2>
          <ul className="list-disc list-inside ml-4">
            <li><strong>No Job Offer Required:</strong> Unlike many Provincial Nominee Programs (PNPs), QSWP does not require a valid job offer, making it ideal for individuals seeking to move to Canada without prior employment.</li>
            <li><strong>Pathway to Permanent Residency:</strong> Once selected by Quebec, you receive a Certificat de sélection du Québec (CSQ). With this, you can apply to the federal government for Canadian permanent residence.</li>
            <li><strong>Opportunities in a Strong Economy:</strong> Quebec has a growing demand for skilled workers across various sectors like information technology, healthcare, engineering, construction, and education.</li>
            <li><strong>Unique French-Canadian Lifestyle:</strong> Quebec offers a distinctive cultural experience, with a strong emphasis on arts, history, and community living, especially in cities like Montreal, Quebec City, and Laval.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl sm:text-1xl font-bold text-orange-600 mb-2">Eligibility Criteria</h2>
          <p>The QSWP uses a selection grid with factors including:</p>
          <ul className="list-disc list-inside ml-4 mt-2">
            <li>Education and qualifications</li>
            <li>Relevant work experience</li>
            <li>Age</li>
            <li>Proficiency in French and/or English</li>
            <li>Adaptability</li>
            <li>Accompanying spouse’s qualifications</li>
            <li>Number of dependent children</li>
          </ul>
          <p className="mt-2">Candidates must score above a set threshold to be eligible for selection.</p>
        </section>

        <section>
          <h2 className="text-xl sm:text-1xl font-bold text-orange-600 mb-2">How <span className="text-orange-500">VJC Overseas</span> Supports Your Quebec Dream</h2>
          <p>
            At <span className="text-orange-500 font-semibold">VJC Overseas</span>, we understand the intricacies of Quebec's immigration system and the importance of precision and timing. Here’s how we help:
          </p>
          <ul className="list-disc list-inside ml-4 mt-2">
            <li><strong>Comprehensive Profile Assessment:</strong> We evaluate your profile against Quebec’s selection criteria to ensure eligibility.</li>
            <li><strong>Language Preparation Support:</strong> We guide you on taking and improving your TEF (Test d'Évaluation de Français) scores if needed.</li>
            <li><strong>Accurate Document Handling:</strong> Our experts assist in gathering, reviewing, and submitting the necessary documents to ensure a smooth application process.</li>
            <li><strong>Application to CSQ and PR:</strong> We assist you through both the Quebec and federal stages of your application — from obtaining your CSQ to applying for permanent residency.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl sm:text-1xl font-bold text-orange-600 mb-2">Start Your Quebec Journey with Confidence</h2>
          <p>
            The Quebec Skilled Worker Program is an excellent choice for professionals who want to live and work in a dynamic, multicultural, and bilingual province. With the right guidance, this pathway can lead you to permanent residency and a successful future in Canada.
          </p>
          <p className="mt-2 font-semibold">
            Contact <span className="text-orange-500">VJC Overseas</span> today for a personalized consultation and begin your immigration journey to Quebec — with confidence, clarity, and expert support.
          </p>
        </section>
      </div>
    </div>
  );
}
