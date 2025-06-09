"use client";

import Image from "next/image";

export default function PEIPNP() {
  return (
    <div className="px-4 sm:px-4 py-10 max-w-6xl mx-auto text-justify text-base sm:text-[1.rem] leading-6 text-gray-800">
      <p className="text-gray-800 text-2xl font-medium">
          <strong>
            Immigrate to Canada through Prince Edward Island PNP – With{" "}
            <span className="text-orange-500">VJC Overseas</span>
          </strong>
          <br /></p>
      <div className="flex flex-col lg:flex-row items-center mt-2 gap-6 mb-6">
        {/* Image Section */}
        <div className="relative group cursor-pointer w-full lg:w-[1400px] h-auto">
          <Image
            src="/Canada-prince-island.webp"
            width={500}
            height={300}
            alt="Prince Edward Island PNP Canada Immigration"
            title="PEI Provincial Nominee Program – VJC Overseas"
            className="rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105"
            priority
            unoptimized
          />
          <span className="absolute bottom-2 left-2 bg-black/60 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
            PEI PNP Canada
          </span>
        </div>

        {/* Introduction */}
       
          <p>
          <br />
          Prince Edward Island (PEI), one of Canada's most picturesque provinces, offers a unique pathway for skilled professionals, entrepreneurs, and graduates. At{" "}
          <span className="text-orange-500 font-semibold">VJC Overseas</span>, we guide applicants through every step of the PEI PNP process with expert support and personalized attention.
          <h2 className="text-xl sm:text-1xl mt-3 font-bold text-black mb-2">Why Choose Prince Edward Island?</h2>
          <p>
            Despite being Canada’s smallest province, PEI boasts high quality of life, scenic beauty, a low cost of living, and a supportive 
          </p>
        </p>
      </div>
      <p className="mb-2 -mt-3">
           government actively encouraging immigration to fill labor shortages and fuel economic development.
          </p>
      <div className="space-y-6">
       
         
        

        {/* What is PEI PNP */}
        <section>
          <h2 className="text-xl sm:text-1xl font-bold text-black mb-2">What is the PEI PNP?</h2>
          <p>
            The PEI Provincial Nominee Program enables the province to nominate qualified candidates for Canadian permanent residency based on their ability to meet local labor market needs and successfully settle in the province.
          </p>
          <p className="mt-2">There are three main PEI PNP pathways:</p>
          <ul className="list-disc list-inside ml-4 mt-1">
            <li>
              <strong>PEI Express Entry Stream:</strong> For candidates in the federal Express Entry pool. A provincial nomination boosts CRS scores by 600 points.
            </li>
            <li>
              <strong>Labour Impact Category:</strong> For individuals with valid job offers in PEI. Includes:
              <ul className="list-disc ml-6 mt-1">
                <li>Skilled Worker Stream</li>
                <li>Critical Worker Stream</li>
                <li>International Graduate Stream</li>
              </ul>
            </li>
            <li>
              <strong>Business Impact Category:</strong> For entrepreneurs investing in and actively managing a business in PEI. Requires net worth, business plan, and management experience.
            </li>
          </ul>
        </section>

        {/* Why VJC */}
        <section>
          <h2 className="text-xl sm:text-1xl font-bold text-black mb-2">Why Apply Through <span className="text-orange-500">VJC Overseas</span>?</h2>
          <p>
            Immigration is a life-changing decision, and <span className="text-orange-500 font-semibold">VJC Overseas</span> is here to support you every step of the way. Our certified consultants offer:
          </p>
          <ul className="list-disc list-inside ml-4 mt-2">
            <li><strong>Complete Eligibility Assessment</strong> tailored to your background and goals.</li>
            <li><strong>Streamlined Application Support</strong> with accurate documentation and submission.</li>
            <li><strong>Personalized Strategy</strong> to match you with the right PEI PNP pathway.</li>
            <li><strong>Post-Landing Assistance</strong> to help you settle, find housing, and begin working or launching a business.</li>
          </ul>
        </section>

        {/* Final Call */}
        <section>
          <h2 className="text-xl sm:text-1xl font-bold text-black mb-2">Start Your Journey Today</h2>
          <p>
            Whether you're a skilled professional, graduate, or entrepreneur, PEI offers a welcoming gateway to Canadian permanent residency. Let{" "}
            <span className="text-orange-500 font-semibold">VJC Overseas</span> guide you through the PEI PNP process and help make your dream a reality.
          </p>
          <p className="mt-2 font-semibold">
            Contact us today to schedule your free consultation and start your Canadian immigration journey with confidence.
          </p>
        </section>
      </div>
    </div>
  );
}
