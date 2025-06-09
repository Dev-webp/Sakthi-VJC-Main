"use client";

import Image from "next/image";

export default function Australia190Visa() {
  return (
    <div className="px-4 sm:px-4 py-10 max-w-6xl mb-2 mx-auto text-justify text-base sm:text-[1.05rem] leading-6 text-gray-800">
      <p className="text-gray-800 text-2xl font-medium">
        <strong>
          Australia 190 Skilled Nominated Visa – Your Pathway to Australian Permanent Residency with{" "}
          <span className="text-orange-500">VJC Overseas</span>
        </strong>
      </p>
      <p>
        Are you a skilled worker looking to make Australia your permanent home? The Australia 190 Skilled Nominated Visa offers a pathway to permanent residency for professionals with skills required by Australian employers and who are nominated by a state or territory.
      </p>
      {/* Image Section */}
      <div className="flex flex-col lg:flex-row items-center mt-4 gap-6 mb-6">
        <div className="relative group cursor-pointer w-full lg:w-[2400px] h-auto">
          <Image
            src="/skilled-nominated-work-visa.jpeg"
            width={500}
            height={300}
            alt="Australia Skilled Nominated Visa"
            title="Australia 190 Visa – VJC Overseas"
            className=" transition-transform duration-300 group-hover:scale-105"
            priority
            unoptimized
          />
          <span className="absolute bottom-2 left-2 bg-black/60 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
            Subclass 190 Visa
          </span>
        </div>
        <p className="mt-2">
        At <span className="text-orange-500 font-semibold">VJC Overseas</span>, we specialize in guiding skilled professionals through the Subclass 190 visa application process, helping you secure your future in one of the world’s most desirable countries.
      </p>
      </div>

      {/* Introduction */}
     
      

      {/* What is Subclass 190 */}
      <section className="mt-6">
        <h2 className="text-xl font-bold text-black mb-2">What is the Subclass 190 Skilled Nominated Visa?</h2>
        <p>
          The Australia 190 Skilled Nominated Visa is a permanent residency visa for skilled workers nominated by an Australian state or territory. It allows you to live and work anywhere in Australia, although you’re initially expected to settle in the nominating region.
        </p>
        <p className="mt-2">
          Applicants must meet eligibility requirements, submit an Expression of Interest (EOI) via SkillSelect, and receive an invitation to apply. It's a great option for professionals on the Skilled Occupation List who meet the qualification and language criteria.
        </p>
      </section>

      {/* Key Benefits */}
      <section className="mt-6">
        <h2 className="text-xl font-bold text-black mb-2">Key Benefits of the Subclass 190 Visa</h2>
        <ul className="list-disc list-inside ml-4 space-y-2">
          <li><strong>Permanent Residency:</strong> Grants full residency rights to live, work, and study in Australia.</li>
          <li><strong>Work Rights:</strong> Freedom to work for any employer across Australia.</li>
          <li><strong>Healthcare Access:</strong> Enjoy Australia's Medicare healthcare benefits as a permanent resident.</li>
          <li><strong>Pathway to Citizenship:</strong> Eligible for citizenship after four years of residency.</li>
          <li><strong>Family Inclusion:</strong> Include your spouse, children, and dependents with equal rights.</li>
        </ul>
      </section>

      {/* Eligibility Requirements */}
      <section className="mt-6">
        <h2 className="text-xl font-bold text-black mb-2">Eligibility Requirements for the Subclass 190 Visa</h2>
        <ul className="list-disc list-inside ml-4 space-y-2">
          <li><strong>Skills & Occupation:</strong> Your occupation must be listed on the Skilled Occupation List and match your qualifications and experience.</li>
          <li><strong>State Nomination:</strong> Must be nominated by a state or territory and meet their specific nomination criteria.</li>
          <li><strong>Points-Based System:</strong> Minimum 65 points required based on age, experience, education, and nomination.</li>
          <li><strong>Expression of Interest (EOI):</strong> Must submit an EOI through SkillSelect and wait for an invitation.</li>
          <li><strong>English Language Proficiency:</strong> Must demonstrate language skills through IELTS, PTE, etc.</li>
          <li><strong>Health & Character Requirements:</strong> Fulfill medical and police clearance requirements.</li>
        </ul>
      </section>

      {/* VJC Assistance */}
      <section className="mt-6">
        <h2 className="text-xl font-bold text-black mb-2">How VJC Overseas Can Assist You</h2>
        <ul className="list-disc list-inside ml-4 space-y-2">
          <li><strong>Eligibility Assessment:</strong> We review your qualifications and suggest the most suitable state or territory for nomination.</li>
          <li><strong>Points Calculation:</strong> We calculate your points and help improve your score if necessary.</li>
          <li><strong>State Nomination Assistance:</strong> Full support in applying for nomination and understanding regional criteria.</li>
          <li><strong>EOI & Application Management:</strong> We handle your EOI submission and ensure a compliant visa application.</li>
          <li><strong>Post-Visa Support:</strong> Help with accommodation, settlement, and integration in Australia post-approval.</li>
        </ul>
      </section>

      {/* Final Call to Action */}
      <section className="mt-6">
        <h2 className="text-xl font-bold text-black mb-2">Begin Your Australian Journey Today</h2>
        <p>
          The Subclass 190 Skilled Nominated Visa is your opportunity to turn your Australian dream into reality. With access to top-tier education, healthcare, and job opportunities, Australia is the ideal place for skilled workers to thrive.
        </p>
        <p className="mt-2">
          Get in touch with <span className="text-orange-500 font-semibold">VJC Overseas</span> today to assess your eligibility and start your Subclass 190 visa journey. Let us be your trusted partner in achieving permanent residency in Australia!
        </p>
      </section>
    </div>
  );
}
