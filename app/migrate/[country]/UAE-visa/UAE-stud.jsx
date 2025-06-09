import React from "react";
import Image from "next/image";

const UAEstud = () => {
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
      <div className="p-4 rounded-lg mb-10">
        <h2 className="text-2xl font-bold mb-4 text-center text-orange-600">
          Migrate to UAE – Your Gateway to Thriving Opportunities in the Middle
          East
        </h2>

        <p className="mb-4 text-gray-800">
          Looking to advance your career, grow a business, or enjoy a luxurious
          lifestyle? Migrating to the UAE offers unmatched economic growth,
          tax-free income, and a cosmopolitan living environment right at the
          crossroads of Asia, Europe, and Africa.
          </p>
        <p className="mb-4 text-gray-800">
          With booming industries, world-class infrastructure, and vibrant
          multicultural cities like Dubai and Abu Dhabi, the UAE attracts
          professionals, entrepreneurs, students, and families from all over the
          world.
        </p>

        <div className="relative p-4 bg-gradient-to-r my-10 from-orange-100 to-sky-100 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out w-fit mx-auto">
          <Image
            src="/migrate/migrate-uae.png"
            alt="Migrate - Apply Now"
            width={900}
            height={630}
            className="w-[22rem] lg:w-[31rem] h-[16rem] lg:h-[20rem] items-center rounded-xl"
            priority
            unoptimized
          />
        </div>

        <h3 className="text-lg font-bold text-sky-600 mt-6 mb-2">
          Why Migrate to the UAE?
        </h3>
        <ul className="list-disc ml-6 mb-4 text-gray-700">
          <li>
            <b>Rapid Economic Growth —</b> Leading sectors include finance, real
            estate, tourism, technology, and renewable energy
          </li>
          <li>
            <b>Modern Infrastructure —</b> Iconic skyscrapers, advanced
            transport, and smart city initiatives
          </li>
          <li>
            <b>Flexible Visa Options —</b> From work permits and golden visas to
            student and family residency visas
          </li>
          <li>
            <b>Tax-Free Income —</b> Personal income tax exemption enhances your
            earning potential
          </li>
          <li>
            <b>Diverse & Inclusive —</b> Expats make up over 80% of the
            population, creating a truly global community
          </li>
          <li>
            <b>Quality Education & Healthcare —</b> International schools and
            hospitals with world-class standards
          </li>
          <li>
            <b>Excellent Lifestyle —</b> Year-round sunshine, luxury shopping,
            beaches, and entertainment
          </li>
        </ul>

        <h3 className="text-lg font-bold text-orange-600 mt-6 mb-2">
          Popular UAE Visa Categories
        </h3>
        <ul className="list-disc ml-6 mb-4 text-gray-700">
          <li>
            <b>Employment Visa</b> – For skilled professionals with job offers
            in the UAE’s in-demand sectors
          </li>
          <li>
            <b>Student Visa</b> – For international students enrolled in UAE
            universities or colleges
          </li>
          <li>
            <b>Investor & Business Visa</b> – Long-term residence options under
            the UAE Golden Visa program
          </li>
          <li>
            <b>Family Visa</b> – For spouses, children, and dependents of UAE
            residents
          </li>
          <li>
            <b>Golden Visa</b> – 5- or 10-year renewable residency for
            exceptional talents, investors, entrepreneurs, and students
          </li>
        </ul>

        <h3 className="text-lg font-bold text-sky-600 mt-6 mb-2">
          Who Can Migrate to the UAE?
        </h3>
        <ul className="list-disc ml-6 mb-4 text-gray-700">
          <li>Have a valid job offer from a UAE-based employer</li>
          <li>
            Are an investor or entrepreneur ready to establish or grow a
            business
          </li>
          <li>Are pursuing higher education in the UAE</li>
          <li>Have close family members legally residing in the UAE</li>
          <li>
            Qualify for long-term Golden Visa programs based on talent or
            investment
          </li>
        </ul>

        <h3 className="text-lg font-bold text-orange-600 mt-6 mb-2">
          UAE Migration Process – How It Works
        </h3>
        <ul className="list-decimal ml-6 mb-4 text-gray-700">
          <li>Determine Your Visa Type</li>
          <li>
            Prepare Documentation (passport, job offer, financials, education
            certificates)
          </li>
          <li>Submit Application via UAE Immigration or Sponsor</li>
          <li>Undergo Medical Tests and Biometrics</li>
          <li>Receive Visa Approval & Entry Permit</li>
          <li>
            Complete Residency Formalities Upon Arrival (Emirates ID, Health
            Insurance)
          </li>
          <li>Enjoy Life and Work in the UAE</li>
        </ul>

        <h3 className="text-lg font-bold text-sky-600 mt-6 mb-2">
          Target SEO Keywords
        </h3>
        <ul className="list-disc ml-6 mb-4 text-gray-700">
          <li>Migrate to UAE from India / Philippines / Egypt</li>
          <li>UAE work visa requirements 2025</li>
          <li>How to get UAE Golden Visa</li>
          <li>UAE student visa process</li>
          <li>UAE residency visa for investors</li>
          <li>Family visa in UAE</li>
        </ul>

        <h3 className="text-lg font-bold text-orange-600 mt-6 mb-2">
          How We Support Your UAE Migration Journey
        </h3>
        <p className="mb-4 text-gray-800">
          At VJC Overseas, we specialize in simplifying your move to the UAE:
        </p>
        <ul className="list-disc ml-6 mb-4 text-gray-700">
          <li>Personalized visa eligibility assessments</li>
          <li>Professional visa application assistance</li>
          <li>Job search and sponsorship support</li>
          <li>Investor visa and Golden Visa advisory</li>
          <li>Pre-departure and post-arrival relocation services</li>
        </ul>

        <h3 className="text-lg font-bold text-sky-600 mt-6 mb-2">
          Ready to Start Your UAE Migration?
        </h3>
        <p className="mb-4 text-gray-800">
          The UAE is more than a destination — it’s your next chapter of success
          and adventure.
        </p>
        <ul className="list-disc ml-6 mb-4 text-gray-700">
          <li>Explore your best visa options</li>
          <li>Receive tailored advice from migration experts</li>
          <li>Begin your UAE journey with confidence</li>
        </ul>
        <p className="text-center font-semibold text-orange-600">
          Contact us today for a free consultation and take your first step
          toward thriving in the UAE!
        </p>
      </div>
    </div>
  );
};

export default UAEstud;
