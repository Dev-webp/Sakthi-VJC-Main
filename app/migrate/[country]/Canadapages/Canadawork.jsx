import React from "react";
import Image from "next/image";

const CanadaMigration = () => {
  return (
    <div
      style={{
        fontFamily: "Times New Roman, serif",
        
        fontSize: "1.1rem",
      }}  className="px-0 py-8 lg:p-[2rem]"
    >
      <h1 className="text-2xl text-center font-bold mb-6 text-orange-600">
        Migrate to Canada – Live, Work & Thrive in the Land of Opportunities
      </h1>

      <p className="mb-4 text-base">
        Looking for a new life in a country known for its quality of life,
        world-class healthcare, and inclusive culture?{" "}
        <span className="text-orange-600 font-bold">Canada</span> welcomes over
        400,000 immigrants each year through various immigration programs — and
        you could be next.
      </p>

      <p className="mb-4 text-base">
        Whether you're a skilled professional, a student, or a family planning a
        fresh start, migrating to Canada could be the life-changing decision
        you've been waiting for.
      </p>

      <div className="relative p-4 bg-gradient-to-r my-10 from-orange-100 to-sky-100 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out w-fit mx-auto">
                <Image
                  src="/migrate/migrate-canada.png"
                  alt="Migrate - Apply Now"
                  width={900}
                  height={630}
                  className="w-[22rem] lg:w-[31rem] h-[16rem] lg:h-[20rem] items-center rounded-xl"
                  priority
                  unoptimized
                />
              </div>

      <h2 className="text-1xl font-semibold mb-2 text-orange-500">
        Why Move to Canada?
      </h2>
      <ul className="list-disc mb-4 text-base">
        <li>
          <strong>High Demand for Skilled Workers –</strong> Canada’s booming
          industries are constantly hiring international talent.
        </li>
        <li>
          <strong>Free Public Healthcare –</strong> Access world-class medical
          services at no cost.
        </li>
        <li>
          <strong>Education Excellence –</strong> Affordable, globally
          recognized education for students and families.
        </li>
        <li>
          <strong>Safe & Welcoming Society –</strong> Ranked among the safest
          and most peaceful countries worldwide.
        </li>
        <li>
          <strong>Clear PR & Citizenship Pathway –</strong> Fast-track options
          for permanent residency through Express Entry and other programs.
        </li>
      </ul>

      <h2 className="text-1xl font-semibold mb-2 text-orange-500">
        Popular Canadian Immigration Pathways
      </h2>
      <ul className="list-disc mb-4 text-base">
        <li>
          <strong>Express Entry –</strong> Points-based system for skilled
          workers.
        </li>
        <li>
          <strong>Provincial Nominee Program (PNP) –</strong> Get nominated by a
          specific province or territory.
        </li>
        <li>
          <strong>Student Visa –</strong> Study in Canada and transition to PR
          after graduation.
        </li>
        <li>
          <strong>Work Permits & LMIA –</strong> Work legally with employer
          sponsorship.
        </li>
        <li>
          <strong>Family Sponsorship –</strong> Join your spouse, parents, or
          children already in Canada.
        </li>
        <li>
          <strong>Canada Start-Up Visa –</strong> For entrepreneurs with
          innovative business ideas.
        </li>
      </ul>

      <h2 className="text-1xl font-semibold mb-2 text-orange-500">
        Who Should Consider Migrating to Canada?
      </h2>
      <ul className="list-disc mb-4 text-base">
        <li>IT Professionals, Engineers, and Healthcare Workers</li>
        <li>Students & Graduates seeking international careers</li>
        <li>Families looking for a better future</li>
        <li>Entrepreneurs wanting global expansion</li>
        <li>Anyone with dreams of a better lifestyle in a stable country</li>
      </ul>

      <h2 className="text-1xl font-semibold mb-2 text-orange-500">
        How We Help
      </h2>
      <p className="mb-4 text-base">
        At <span className="text-orange-600 font-bold">VJC Overseas</span>, we
        don’t just file your application — we guide you through every step:
      </p>
      <ul className="list-disc mb-4 text-base">
        <li>Free Eligibility Check</li>
        <li>Personalized Visa Strategy</li>
        <li>End-to-End Application Support</li>
        <li>IELTS & Document Assistance</li>
        <li>Post-Landing & PR Guidance</li>
      </ul>

      <p className="text-base">
        We turn complex immigration processes into simple, stress-free steps for
        our clients worldwide.{" "}
        <span className="text-orange-600 font-bold">Canada is calling —</span>{" "}
        will you answer?
      </p>
    </div>
  );
};

export default CanadaMigration;
