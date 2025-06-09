import React from "react";
import Image from "next/image";

const Denbusiness = () => {
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
          Migrate to Denmark –{" "}
          <span style={{ color: "rgb(220, 4, 4)" }}>VJC Overseas</span>
        </h3>
      </div>

      <p className="mb-6">
        Thinking of a better work-life balance, modern infrastructure, and a
        future full of opportunities? Migrating to Denmark gives you access to a
        high standard of living, strong social welfare, and a welcoming,
        inclusive society.
      </p>

      <p className="mb-6">
        Whether you're a skilled professional, entrepreneur, student, or someone
        looking for permanent settlement, Denmark’s immigration system is
        structured to attract global talent and innovation.
      </p>
      <div className="relative p-4 bg-gradient-to-r my-10 from-orange-100 to-sky-100 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out w-fit mx-auto">
        <Image
          src="/migrate/migrate-denmark.png"
          alt="Migrate - Apply Now"
          width={900}
          height={630}
          className="w-[22rem] lg:w-[31rem] h-[16rem] lg:h-[20rem] items-center rounded-xl"
          priority
          unoptimized
        />
      </div>
      <div className="flex mb-6 flex-col lg:flex-row items-start h-auto lg:space-x-6 space-y-4 lg:space-y-0">
        <div>
          <h4 className="mb-6 text-sky-700">Why Choose Denmark?</h4>

          <ul className="list-disc list-inside mb-6 text-[16px] text-black">
            <li>
              Ranked among the happiest and most livable countries in the world,
              Denmark offers a holistic lifestyle focused on family, career
              growth, and community.
            </li>
            <li>
              Thriving Job Market – Demand in IT, engineering, healthcare,
              education, and construction
            </li>
            <li>
              Work-Life Balance – 37-hour work week, generous holidays, and
              employee rights
            </li>
            <li>
              Free or Low-Cost Education – Especially for EU/EEA residents and
              PhD students
            </li>
            <li>
              Eco-Friendly Living – Green cities, cycling culture, and clean
              public transport
            </li>
            <li>
              Strong Welfare System – Quality healthcare, parental benefits, and
              social security
            </li>
            <li>
              Safe & Inclusive Society – Low crime rates and equal rights for
              all residents
            </li>
          </ul>
        </div>
      </div>

      <div className="mb-6">
        <h2 className="mb-6 text-sky-700">
          Popular Denmark Visa & Residence Permit Options
        </h2>

        <ul className="list-disc list-inside mb-6 text-[16px] text-black">
          <li>
            <b>Denmark Positive List Scheme:</b> For skilled professionals whose
            occupations are in shortage in Denmark (e.g., nurses, engineers, IT
            professionals)
          </li>
          <li>
            <b>The Pay Limit Scheme:</b> For high-income professionals with a
            job offer paying above the threshold (DKK 375,000+ per year)
          </li>
          <li>
            <b>Student Visa / Study Permit:</b> For international students
            accepted into full-time higher education programs
          </li>
          <li>
            <b>Family Reunification Visa:</b> For spouses, partners, and
            children of Danish citizens or legal residents
          </li>
          <li>
            <b>Startup Denmark Visa:</b> For entrepreneurs with innovative
            business ideas approved by the Danish Business Authority
          </li>
          <li>
            <b>Permanent Residency & Danish Citizenship:</b> Available after
            several years of continuous residence and integration
          </li>
        </ul>
      </div>

      <div className="mb-6">
        <h3 className="mb-6 text-sky-700">Who Can Migrate to Denmark?</h3>

        <ul className="list-disc list-inside mb-6 text-[16px] text-black">
          <li>Hold a job offer from a Danish employer</li>
          <li>Work in a profession listed under Denmark’s Positive List</li>
          <li>Are pursuing higher education in Denmark</li>
          <li>Want to establish or grow a business in Denmark</li>
          <li>Have close family members legally living in Denmark</li>
          <li>
            Meet language, income, and integration requirements (for PR or
            citizenship)
          </li>
        </ul>
      </div>

      <div className="mb-6">
        <h3 className="mb-6 text-sky-700">
          Denmark Migration Process – Step-by-Step
        </h3>

        <ol className="list-decimal list-inside mb-6 text-[16px] text-black">
          <li>Choose Your Visa Pathway (Work, Study, Family, Business)</li>
          <li>Secure a Job/Admission Offer or Prepare Business Plan</li>
          <li>Gather Documentation (ID, contracts, education proof, etc.)</li>
          <li>Apply Online via SIRI (Danish Immigration Service)</li>
          <li>Await Processing (usually 1–3 months)</li>
          <li>Receive Residence Permit and Move to Denmark</li>
          <li>
            Apply for Permanent Residency (after 8 years or earlier, if
            eligible)
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Denbusiness;
