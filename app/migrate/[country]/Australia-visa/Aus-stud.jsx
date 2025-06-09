import React from "react";
import Image from "next/image";

const Ausstud = () => {
  return (
    <div
      className="m-2 p-2"
      style={{
        fontFamily: "Times New Roman",
        backgroundColor: "white",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ marginBottom: "5%" }}>
        <h3 className="text-2xl mt-4 font-semibold text-black text-center">
          Migrate to Australia with -{" "}
          <span className="text-orange-600">VJC Overseas:</span> Start Your New
          Life in One of the World's Safest & Most Livable Countries
        </h3>
      </div>

      <p className="m-2 text-gray-800">
        Australia has become one of the top choices for skilled professionals,
        families, and students seeking a better quality of life, strong job
        market, and vibrant multicultural environment. With multiple immigration
        pathways and a transparent points-based system, migrating to Australia
        has never been more accessible. At{" "}
        <b className="text-sky-600">VJC Overseas</b>, we help you understand the
        best visa options suited to your profile and guide you through every
        step of your migration journey.
      </p>

      <div className="relative p-4 bg-gradient-to-r my-10 from-orange-100 to-sky-100 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out w-fit mx-auto">
        <Image
          src="/migrate/migrate-australia.png"
          alt="Migrate - Apply Now"
          width={900}
          height={630}
          className="w-[22rem] lg:w-[31rem] h-[16rem] lg:h-[20rem] items-center rounded-xl"
          priority
          unoptimized
        />
      </div>

      <div className="px-4 lg:px-0">
        <h3 className="text-sky-600 font-semibold mb-2 text-md sm:text-lg">
          Why Migrate to Australia?
        </h3>
        <ul className="list-disc pl-4 mb-6 text-gray-800">
          <li>
            <b className="text-orange-600">High Quality of Life:</b> Australia
            ranks high for safety, healthcare, education, and work-life balance.
          </li>
          <li>
            <b className="text-orange-600">Thriving Job Market:</b> Great
            opportunities in healthcare, IT, engineering, and more.
          </li>
          <li>
            <b className="text-orange-600">Permanent Residency Pathways:</b>{" "}
            Pathways like Subclass 189, 190, and 491 visas lead to PR.
          </li>
          <li>
            <b className="text-orange-600">Multicultural Society:</b> A
            welcoming, diverse, and inclusive community.
          </li>
          <li>
            <b className="text-orange-600">Free Education and Healthcare:</b> PR
            holders enjoy subsidized services.
          </li>
        </ul>

        <h4 className="mb-2 text-sky-600 font-semibold">
          Popular Australian Skilled Migration Visas
        </h4>
        <ul className="list-disc ml-8 mb-6 text-gray-800">
          <li>
            <b>Subclass 189:</b> Skilled Independent Visa – no sponsorship
            required.
          </li>
          <li>
            <b>Subclass 190:</b> Skilled Nominated Visa – state/territory
            nomination.
          </li>
          <li>
            <b>Subclass 491:</b> Regional Visa – for regional work and
            residence.
          </li>
        </ul>

        <h4 className="mb-2 text-sky-600 font-semibold">
          Australia PR Eligibility Checklist
        </h4>
        <ol className="ml-8 mb-6 text-gray-800 list-decimal">
          <li>
            <b>Age:</b> Under 45 years at invitation.
          </li>
          <li>
            <b>Occupation:</b> Listed on Skilled Occupation List (SOL).
          </li>
          <li>
            <b>Points Score:</b> Minimum of 65 points.
          </li>
          <li>
            <b>English Language:</b> IELTS, PTE, TOEFL, etc.
          </li>
          <li>
            <b>Skill Assessment:</b> From authorized authority.
          </li>
          <li>
            <b>Health & Character:</b> Clearance required.
          </li>
        </ol>

        <h4 className="mb-2 text-sky-600 font-semibold">
          Step-by-Step Process to Migrate
        </h4>
        <ol className="ml-8 mb-6 text-gray-800 list-decimal">
          <li>Check Eligibility – points calculator.</li>
          <li>Skill Assessment – verify qualifications.</li>
          <li>English Test – meet language requirements.</li>
          <li>Submit EOI – via SkillSelect.</li>
          <li>Receive ITA – Invitation to Apply.</li>
          <li>Apply for PR Visa – with documents.</li>
          <li>Visa Decision – 4 to 8 months wait.</li>
        </ol>

        <h4 className="mb-2 text-sky-600 font-semibold">
          How VJC Overseas Supports You
        </h4>
        <p className="mb-4 text-gray-800">
          With <b className="text-orange-600">over a decade of expertise</b>,
          our certified consultants provide:
        </p>
        <ul className="list-disc ml-8 mb-6 text-gray-800">
          <li>Free eligibility check & consultation</li>
          <li>Skill assessment & EOI guidance</li>
          <li>Tailored documentation support</li>
          <li>Job search and relocation help</li>
        </ul>

        <h4 className="mb-2 text-sky-600 font-semibold">
          Start Your Journey Today!
        </h4>
        <p className="mb-6 text-gray-800">
          Ready for a new life in Australia?{" "}
          <span className="text-orange-600 font-semibold">
            Contact VJC Overseas
          </span>{" "}
          now to get your profile evaluated and begin your migration journey
          with expert guidance.
        </p>
      </div>
    </div>
  );
};

export default Ausstud;
