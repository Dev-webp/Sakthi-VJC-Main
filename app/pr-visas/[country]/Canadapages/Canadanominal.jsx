"use client";

import Image from "next/image";

export default function NextPNP() {
  return (
    <div className="bg-gradient-to-br from-white to-orange-50 py-10">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center text-gray-800 leading-snug">
          Canada Provincial Nominee Program (PNP) – A Pathway to Permanent Residency
        </h1>

        {/* Intro Section with Image */}
        <div className="flex flex-col lg:flex-row items-start gap-8 mb-12">
          {/* Text Block */}
          <div className="lg:w-1/2 text-base text-gray-700 leading-relaxed">
            <p>
              Canada’s Provincial Nominee Program (PNP) offers a valuable opportunity for individuals who wish to immigrate to Canada and settle in a specific province or territory. If you have the skills, work experience, or qualifications that meet a particular province’s economic and labor market needs, PNP could be your most strategic route to Canadian permanent residence.
            </p>
            <p className="mt-4">
              At <span className="text-orange-500 font-semibold">VJC Overseas</span>, we specialize in helping candidates navigate the complexities of the PNP process efficiently and successfully.
            </p>
          </div>

          {/* Image Block */}
          <div className="lg:w-1/2 w-full overflow-hidden rounded shadow group transition-transform duration-300 hover:scale-105">
            <Image
              src="/canadapr-Provincial-Nominee-Programs.jpg"
              alt="Canada PNP Immigration - VJC Overseas"
              title="Canada PNP Immigration - VJC Overseas"
              width={600}
              height={400}
              className="w-full h-auto object-cover rounded"
              priority
              unoptimized
            />
          </div>
        </div>

        {/* Content Sections */}
        <div className="text-base text-gray-700 leading-relaxed space-y-8">
          {/* What is PNP */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-black mb-2">
              What is the Provincial Nominee Program?
            </h2>
            <p>
              The PNP allows Canadian provinces and territories to nominate individuals who wish to immigrate to Canada and settle in a particular region. Each province and territory operates its own PNP with specific eligibility criteria and application procedures, designed to meet local labor market demands and demographic goals.
            </p>
            <p className="mt-2">
              <strong>Participating Regions:</strong> Alberta, British Columbia, Manitoba, New Brunswick, Newfoundland and Labrador, Nova Scotia, Ontario, Prince Edward Island, Saskatchewan, Northwest Territories, Yukon. Quebec has its own separate selection process for skilled workers.
            </p>
          </section>

          {/* How PNP Works */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-black mb-2">How the PNP Works</h2>
            <p>
              There are two main ways to apply for a provincial nomination:
            </p>
            <ul className="list-disc list-inside pl-4 mt-2 space-y-2">
              <li>
                <strong>Express Entry-Linked PNP:</strong> Aligned with Canada’s Express Entry system. A nomination here boosts your CRS score by 600 points, almost guaranteeing an Invitation to Apply (ITA).
              </li>
              <li>
                <strong>Non-Express Entry (Paper-Based):</strong> Apply directly to a province. After nomination, apply to IRCC for permanent residency.
              </li>
            </ul>
          </section>

          {/* Why Choose PNP */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-black mb-2">Why Choose PNP?</h2>
            <ul className="list-disc list-inside pl-4 space-y-2">
              <li><strong>More Opportunities:</strong> Some PNPs target in-demand occupations, ideal for those not eligible under Express Entry.</li>
              <li><strong>Targeted Immigration:</strong> Each PNP is designed around local economic needs.</li>
              <li><strong>Faster Processing:</strong> Many PNP streams process applications quicker than federal options.</li>
              <li><strong>Path for Semi-Skilled Workers:</strong> Some streams accept semi-skilled/intermediate workers not eligible elsewhere.</li>
            </ul>
          </section>

          {/* How VJC Helps */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-black mb-2">How We Help</h2>
            <p>
              At <span className="text-orange-500 font-semibold">VJC Overseas</span>, we offer end-to-end support through your entire PNP process:
            </p>
            <ul className="list-disc list-inside pl-4 mt-2 space-y-2">
              <li><strong>Initial Assessment:</strong> Matching your profile to suitable provinces and territories.</li>
              <li><strong>PNP Selection Strategy:</strong> Identifying best-fit PNP streams based on job roles, demand, and goals.</li>
              <li><strong>Document Preparation:</strong> Ensuring your documents are precise and ready for submission.</li>
              <li><strong>Ongoing Monitoring:</strong> Keeping your file competitive with latest updates in provincial streams.</li>
            </ul>
          </section>

          {/* Final Call to Action */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-black mb-2">Begin Your Journey with Confidence</h2>
            <p>
              The Provincial Nominee Program is one of Canada’s most flexible immigration paths. Whether you're a skilled worker, tradesperson, entrepreneur, or graduate, there’s a PNP stream for you.
            </p>
            <p className="mt-2">
              Let our trusted experts at <span className="text-orange-500 font-semibold">VJC Overseas</span> walk with you through every step of the process — from planning to PR.
            </p>
            <p className="mt-2 font-semibold">
              Contact us today for a personalized consultation and explore how PNP can turn your Canadian dream into reality.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
