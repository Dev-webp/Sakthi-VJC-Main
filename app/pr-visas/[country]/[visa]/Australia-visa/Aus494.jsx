"use client";

import Image from "next/image";

export default function Australia494Visa() {
  return (
    <div className="px-4 sm:px-4 py-10 max-w-6xl mx-auto text-justify text-base sm:text-[1.05rem] leading-6 text-gray-800">
      <p className="text-gray-800 text-2xl font-medium">
        <strong>
          Australia 494 Skilled Employer Sponsored Regional (Provisional) Visa – Your Pathway to Regional Employment with{" "}
          <span className="text-orange-500">VJC Overseas</span>
        </strong>
      </p>

      {/* Image */}
      <div className="flex flex-col lg:flex-row items-center mt-4 gap-6 mb-6">
        <div className="relative group cursor-pointer w-full ml-24 lg:w-[1400px] h-auto">
          <Image
            src="/494-skilled-visa.jpg"
            width={500}
            height={300}
            alt="Australia 494 Skilled Regional Visa"
            title="Australia 494 Visa – VJC Overseas"
            className="rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105"
            priority
            unoptimized
          />
          <span className="absolute bottom-2 left-2 bg-black/60 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
            Subclass 494 Visa
          </span>
        </div>
      </div>

      {/* Intro */}
      <p>
        If you are a skilled worker looking for employment in regional Australia, the Subclass 494 Visa offers a solid path to permanent residency. It enables regional employers to fill skill shortages with overseas talent, while you gain career opportunities and long-term settlement options.
      </p>
      <p className="mt-2">
        At <span className="text-orange-500 font-semibold">VJC Overseas</span>, our expert consultants will walk you through each step of the 494 visa application, connecting you with employers and ensuring a smooth migration process.
      </p>

      {/* What is Subclass 494 */}
      <section className="mt-6">
        <h2 className="text-xl font-bold text-black mb-2">What is the Subclass 494 Skilled Employer Sponsored Regional (Provisional) Visa?</h2>
        <p>
          The 494 visa allows skilled workers nominated by regional employers to live and work in designated regional areas of Australia for up to five years. It's designed to address labor shortages in rural and regional communities.
        </p>
        <p className="mt-2">
          After holding the visa for three years and fulfilling specific requirements, applicants may apply for the Subclass 191 Permanent Residence (Skilled Regional) Visa.
        </p>
      </section>

      {/* Key Benefits */}
      <section className="mt-6">
        <h2 className="text-xl font-bold text-black mb-2">Key Benefits of the Subclass 494 Visa</h2>
        <ul className="list-disc list-inside ml-4 space-y-2">
          <li><strong>Work in Regional Australia:</strong> Build your career in thriving regional areas with lower living costs and a better lifestyle.</li>
          <li><strong>Employer Sponsorship:</strong> Get support from an Australian regional employer for a skilled occupation.</li>
          <li><strong>Permanent Residency Pathway:</strong> Eligible for the Subclass 191 visa after three years, leading to PR.</li>
          <li><strong>Access to Medicare:</strong> Visa holders and their families enjoy Australia's public healthcare system.</li>
          <li><strong>Family Inclusion:</strong> Include your spouse, children, and eligible dependents in your visa application.</li>
        </ul>
      </section>

      {/* Eligibility */}
      <section className="mt-6">
        <h2 className="text-xl font-bold text-black mb-2">Eligibility Requirements for the Subclass 494 Visa</h2>
        <ul className="list-disc list-inside ml-4 space-y-2">
          <li><strong>Employer Nomination:</strong> You must have a job offer and be nominated by an approved employer in a designated regional area.</li>
          <li><strong>Skilled Occupation:</strong> Your role must be listed on the Skilled Occupation List, and you must have qualifications and experience relevant to the job.</li>
          <li><strong>Age Limit:</strong> You must be under 45 years old when invited to apply.</li>
          <li><strong>English Language Proficiency:</strong> Meet required levels through IELTS, PTE, TOEFL, or similar recognized exams.</li>
          <li><strong>Health and Character Checks:</strong> Undergo medical and police clearances to satisfy immigration criteria.</li>
          <li><strong>Work Experience:</strong> At least three years of relevant experience or a skills assessment may be required.</li>
        </ul>
      </section>

      {/* VJC Services */}
      <section className="mt-6">
        <h2 className="text-xl font-bold text-black mb-2">How VJC Overseas Can Help You</h2>
        <ul className="list-disc list-inside ml-4 space-y-2">
          <li><strong>Eligibility Assessment:</strong> We thoroughly evaluate your profile and determine visa suitability.</li>
          <li><strong>Employer Sponsorship Guidance:</strong> Our team connects you with trusted regional employers and helps fulfill all sponsorship criteria.</li>
          <li><strong>Application Preparation:</strong> We manage your documentation and lodge the visa application with precision and care.</li>
          <li><strong>Pathway to PR:</strong> Once eligible, we support you in transitioning to the Subclass 191 visa and securing permanent residency.</li>
        </ul>
      </section>

      {/* CTA */}
      <section className="mt-6">
        <h2 className="text-xl font-bold text-black mb-2">Start Your Regional Journey Today</h2>
        <p>
          The Subclass 494 Skilled Employer Sponsored Regional Visa is a smart choice for professionals ready to seize job opportunities in Australia's dynamic regional economy.
        </p>
        <p className="mt-2">
          Get in touch with <span className="text-orange-500 font-semibold">VJC Overseas</span> to check your eligibility, connect with employers, and begin your path to regional employment and permanent residency in Australia.
        </p>
      </section>
    </div>
  );
}
