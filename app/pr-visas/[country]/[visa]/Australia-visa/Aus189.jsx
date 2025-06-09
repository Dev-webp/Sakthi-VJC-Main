"use client";

import Image from "next/image";

export default function Australia189Visa() {
  return (
    <div className="px-4 sm:px-4 py-10 max-w-6xl mx-auto text-justify text-base sm:text-[1.05rem] leading-6 text-gray-800">
      <p className="text-gray-800 text-2xl mb-2 font-medium">
        <strong>
          Australia 189 Subclass Skilled Independent Visa – Your Path to Permanent Residency with{" "}
          <span className="text-orange-500">VJC Overseas</span>
        </strong>
      </p>

      {/* Image Section */}
      

      {/* Intro */}
      <p>
        If you're a skilled professional looking to live and work in Australia permanently, the Australia 189 Subclass Skilled Independent Visa is an excellent pathway. This visa is designed for individuals with the right skills and experience who are not sponsored by an employer, family member, or state/territory government.
      </p>
      <p className="mt-2">
        At <span className="text-orange-500 font-semibold">VJC Overseas</span>, we specialize in helping skilled workers navigate the complexities of the Australian immigration system, ensuring that your journey to permanent residency is as smooth and successful as possible.
      </p>
      <div className="flex flex-col lg:flex-row items-center mt-4 ml-24 gap-6 mb-6">
        <div className="relative group cursor-pointer w-full lg:w-[3400px] h-auto">
          <Image
            src="/189-visa-step-by-step-process.jpg"
            width={500}
            height={300}
            alt="Australia Skilled Independent Visa"
            title="Australia 189 Visa – VJC Overseas"
            className=" transition-transform duration-300 group-hover:scale-105"
            priority
            unoptimized
          />
          <span className="absolute bottom-2 left-2 bg-black/60 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
            Subclass 189 Visa
          </span>
        </div>
      </div>
      {/* What is Subclass 189 */}
      <section className="mt-6">
        <h2 className="text-xl font-bold text-black mb-2">What is the Subclass 189 Skilled Independent Visa?</h2>
        <p>
          The Subclass 189 Skilled Independent Visa is a points-based permanent residency visa for individuals who have skills and qualifications that are in demand in Australia. This visa allows you to live, work, and study anywhere in Australia without needing sponsorship.
        </p>
        <p className="mt-2">
          Once granted, you gain permanent residency, which includes access to Australia’s healthcare system, social services, and the eligibility to apply for Australian citizenship after fulfilling residency requirements.
        </p>
      </section>

      {/* Key Benefits */}
      <section className="mt-6">
        <h2 className="text-xl font-bold text-black mb-2">Key Benefits of the Subclass 189 Visa</h2>
        <ul className="list-disc list-inside ml-4 space-y-2">
          <li><strong>Permanent Residency:</strong> Grants you and your family the right to live and work in Australia indefinitely.</li>
          <li><strong>Work and Study Anywhere:</strong> Freedom to live and work anywhere in Australia with no sponsorship requirement.</li>
          <li><strong>Access to Healthcare:</strong> Enjoy subsidized medical services through Australia’s Medicare system.</li>
          <li><strong>Pathway to Citizenship:</strong> After four years of residency, you may be eligible for Australian citizenship.</li>
          <li><strong>Bring Your Family:</strong> Include your spouse, children, and dependents in your application.</li>
        </ul>
      </section>

      {/* Eligibility Requirements */}
      <section className="mt-6">
        <h2 className="text-xl font-bold text-black mb-2">Eligibility Requirements</h2>
        <ul className="list-disc list-inside ml-4 space-y-2">
          <li><strong>Skilled Occupation:</strong> Your occupation must be on the Skilled Occupation List (SOL).</li>
          <li><strong>Points Test:</strong> You must score a minimum of 65 points based on age, English skills, education, and experience.</li>
          <li><strong>Age:</strong> Must be under 45 years old at the time of invitation.</li>
          <li><strong>English Proficiency:</strong> Show competence through IELTS, PTE, or TOEFL tests.</li>
          <li><strong>Skills Assessment:</strong> Must pass a skills assessment from a recognized authority in your profession.</li>
          <li><strong>Health & Character:</strong> Meet required health and police clearance criteria.</li>
        </ul>
      </section>

      {/* VJC Overseas Services */}
      <section className="mt-6">
        <h2 className="text-xl font-bold text-black mb-2">How VJC Overseas Can Help You</h2>
        <ul className="list-disc list-inside ml-4 space-y-2">
          <li><strong>Eligibility Assessment:</strong> We evaluate your profile against the 189 visa requirements.</li>
          <li><strong>Points Calculation:</strong> Accurate calculation of your score and advice to improve if needed.</li>
          <li><strong>Skills Assessment Guidance:</strong> Full support for your skills recognition process.</li>
          <li><strong>End-to-End Processing:</strong> From document preparation to submitting your Expression of Interest (EOI) and final visa application.</li>
          <li><strong>Post-Visa Assistance:</strong> Help with relocation, housing, healthcare, and settling in Australia.</li>
        </ul>
      </section>

      {/* Final Call to Action */}
      <section className="mt-6">
        <h2 className="text-xl font-bold text-black mb-2">Start Your Journey to Australia Today</h2>
        <p>
          The Subclass 189 Skilled Independent Visa offers a fantastic opportunity for skilled professionals to begin a new chapter in Australia. Whether you're aiming for better job prospects, higher living standards, or a secure future for your family, this visa can make your goals a reality.
        </p>
        <p className="mt-2">
          Contact <span className="text-orange-500 font-semibold">VJC Overseas</span> today to start your application process. Let our experienced team make your Australian dream come true!
        </p>
      </section>
    </div>
  );
}
