"use client";

import Image from "next/image";

export default function CanadaFamilySponsorship() {
  return (
    <div className="px-4  py-10 max-w-6xl mx-auto text-justify text-base sm:text-[1rem] leading-6 text-gray-800">
      <p className="text-gray-800 text-2xl font-medium">
          <strong>
            Canada Family Sponsorship Visa – Reunite with Your Loved Ones Through{" "}
            <span className="text-orange-500">VJC Overseas</span>
          </strong>
          <br /></p>
      <div className="flex flex-col lg:flex-row items-center gap-6 mb-6">

        {/* Image with hover effect and metadata */}
        <div className="relative group cursor-pointer w-full lg:w-[1800px] h-auto">
          <Image
            src="/canadapr-family-sponsership-visa.jpg"
            width={500}
            height={300}
            alt="Canada Family Sponsorship Visa - VJC Overseas"
            title="Canada Family Sponsorship Visa"
            className="transition-transform duration-300 group-hover:scale-105"
            priority
            unoptimized
          />
          <span className="absolute bottom-2 left-2 bg-black/60 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
            Canada Family Sponsorship Visa
          </span>
        </div>

        {/* First paragraph content */}
        
          <p>
          <br />
          Canada values family unity as a cornerstone of its immigration policy. Through the Family Sponsorship Visa Program, Canadian citizens and permanent residents can sponsor their close family members to join them in Canada and become permanent residents. At{" "}
          <span className="text-orange-500 font-semibold">VJC Overseas</span>, we understand the emotional importance of family reunification and offer expert guidance to make the process as smooth and stress-free as possible.
        </p>
      </div>

      {/* Rest of the content */}
      <div className="space-y-6">
        <section>
          <h2 className="text-xl sm:text-1xl font-bold text-black mb-2">What is the Family Sponsorship Program?</h2>
          <p>
            Canada’s Family Class Sponsorship program is a dedicated immigration stream that allows Canadian citizens and permanent residents to bring their family members to Canada. Sponsored individuals receive permanent resident status, enabling them to live, work, and study in Canada.
          </p>
          <p className="mt-2">Family sponsorship is available for:</p>
          <ul className="list-disc list-inside ml-4">
            <li>Spouse, common-law or conjugal partner</li>
            <li>Dependent children (biological or adopted)</li>
            <li>Parents and grandparents</li>
            <li>In some special cases, orphaned siblings, nieces, nephews, or grandchildren, and other relatives</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl sm:text-1xl font-bold text-black mb-2">Who Can Be a Sponsor?</h2>
          <p>To sponsor a family member to Canada, you must:</p>
          <ul className="list-disc list-inside ml-4">
            <li>Be a Canadian citizen or permanent resident</li>
            <li>Be 18 years of age or older</li>
            <li>Reside in Canada (or plan to return once your sponsored family member arrives, if you are a citizen living abroad)</li>
            <li>
              Sign a financial agreement to support the sponsored person for a specific period:
              <ul className="list-disc list-inside ml-6">
                <li>3 years for a spouse or partner</li>
                <li>10 years for parents and grandparents</li>
                <li>10 years or until age 25 for dependent children</li>
              </ul>
            </li>
            <li>You must also meet income requirements, especially when sponsoring parents or grandparents, and cannot be bankrupt, in prison, or in default of a previous sponsorship agreement.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl sm:text-1xl font-bold text-balck mb-2">Benefits of the Family Sponsorship Program</h2>
          <ul className="list-disc list-inside ml-4">
            <li>
              <strong>Permanent Residency:</strong> Your sponsored family member becomes a permanent resident, with access to healthcare, education, and employment.
            </li>
            <li>
              <strong>No Language or Education Requirements:</strong> The sponsored person doesn’t need to meet language or academic criteria (except in certain situations).
            </li>
            <li>
              <strong>Faster Processing for Spouses and Children:</strong> Spousal and dependent sponsorship applications are usually processed within 12 months.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl sm:text-1xl font-bold text-balck mb-2">How <span className="text-orange-500">VJC Overseas</span> Supports You</h2>
          <p>
            Navigating the family sponsorship process can be overwhelming without professional guidance. At{" "}
            <span className="text-orange-500 font-semibold">VJC Overseas</span>, we bring years of immigration expertise to help you reunite with your loved ones efficiently and successfully. Our services include:
          </p>
          <ul className="list-disc list-inside ml-4 mt-2">
            <li><strong>Free Eligibility Assessment:</strong> We assess your situation to ensure you meet all sponsorship requirements before starting the process.</li>
            <li><strong>Application Preparation:</strong> We help prepare and submit complete and accurate applications with all required documents.</li>
            <li><strong>Follow-Up and Communication:</strong> We manage communication with Immigration, Refugees and Citizenship Canada (IRCC) and provide updates throughout the application process.</li>
            <li><strong>Appeals and Refusals:</strong> If your application has been refused, we provide expert support with appeals or re-application strategies.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl sm:text-1xl font-bold text-balck mb-2">Start Your Family’s Canadian Journey Today</h2>
          <p>
            At <span className="text-orange-500 font-semibold">VJC Overseas</span>, we believe in bringing families together. Whether you're sponsoring a spouse, child, or parent, we are here to guide you every step of the way. Our personalized approach and commitment to client satisfaction make us a trusted partner in your immigration journey.
          </p>
          <p className="mt-2">
            <strong>Contact us today for a consultation and take the first step toward reuniting your family in Canada through the Family Sponsorship Visa Program.</strong>
          </p>
        </section>
      </div>
    </div>
  );
}
