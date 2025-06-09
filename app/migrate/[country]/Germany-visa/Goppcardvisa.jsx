import React from "react";
import Image from "next/image";

const Content = () => {
  return (
    <div
      style={{
        position: "relative",
        padding: "50px",
        boxSizing: "border-box",
        backgroundColor: "white",
        fontFamily: "Times New Roman",
        overflow: "hidden",
      }}
    >
      <div style={{ marginBottom: "40px" }}>
        <h3 className="text-2xl font-semibold text-orange-600 text-center">
          Migrate to Germany – Your Gateway to a Brighter Future
        </h3>
      </div>

      <p style={{ marginBottom: "20px" }}>
        Dreaming of a fresh start in one of Europe’s strongest economies?{" "}
        <span className="text-sky-600 font-medium">Germany</span> offers a
        wealth of opportunities for skilled professionals, students,
        entrepreneurs, and families. Whether you're seeking world-class
        education, high-paying jobs, or a stable lifestyle — migrating to
        Germany could be your smartest move yet.
      </p>

      <h3 className="text-orange-600 font-bold mb-2">Why Choose Germany?</h3>
      <ul className="mb-5 list-disc pl-5 text-gray-800">
        <li>
          <strong className="text-sky-600">Thriving Job Market:</strong> Germany
          is actively seeking international talent in IT, engineering,
          healthcare, and more.
        </li>
        <li>
          <strong className="text-sky-600">Free or Low-Cost Education:</strong>{" "}
          Study at prestigious public universities without heavy tuition fees.
        </li>
        <li>
          <strong className="text-sky-600">
            Stable Economy & High Living Standards:
          </strong>{" "}
          Enjoy a safe, efficient, and high-quality lifestyle.
        </li>
        <li>
          <strong className="text-sky-600">Path to Permanent Residency:</strong>{" "}
          Germany offers clear routes to PR and citizenship.
        </li>
      </ul>

      <div className="relative lg:p-4 bg-gradient-to-r my-10 from-orange-100 to-sky-100 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out w-fit mx-auto">
        <Image
          src="/migrate/migrate-germany.png"
          alt="Migrate - Apply Now"
          width={900}
          height={630}
          className="w-[22rem] lg:w-[31rem] h-[16rem] lg:h-[20rem] items-center rounded-xl"
          priority
          unoptimized
        />
      </div>

      <h3 className="text-orange-600 font-bold mb-2">
        Popular German Visa Options
      </h3>
      <ul className="mb-5 list-disc pl-5 text-gray-800">
        <li>
          <strong className="text-sky-600">Skilled Worker Visa:</strong> For
          professionals with recognized qualifications.
        </li>
        <li>
          <strong className="text-sky-600">Germany Opportunity Card:</strong> A
          points-based pathway to live and work in Germany.
        </li>
        <li>
          <strong className="text-sky-600">Student Visa:</strong> Study in
          top-ranked universities with global recognition.
        </li>
        <li>
          <strong className="text-sky-600">Job Seeker Visa:</strong> Stay in
          Germany for up to 6 months while finding employment.
        </li>
        <li>
          <strong className="text-sky-600">Family Reunion Visa:</strong> Join
          your spouse or family already living in Germany.
        </li>
      </ul>

      <h3 className="text-orange-600 font-bold mb-2">
        Your Migration Journey, Simplified
      </h3>
      <p className="mb-5">
        At <strong className="text-sky-600">VJC Overseas</strong>, we make your
        dream of migrating to Germany a reality:
      </p>
      <ul className="mb-5 list-disc pl-5 text-gray-800">
        <li>Free Eligibility Assessment</li>
        <li>Document Verification & Application Guidance</li>
        <li>Visa Filing & Interview Prep</li>
        <li>Pre-Departure and Settlement Support</li>
      </ul>

      <p className="mb-5">
        Our dedicated experts help you every step of the way — from choosing the
        right visa to settling in your new home.
      </p>

      <h3 className="text-orange-600 font-bold mb-2">Who Can Apply?</h3>
      <ul className="mb-10 list-disc pl-5 text-gray-800">
        <li>Professionals with degrees/diplomas</li>
        <li>Students who want international education</li>
        <li>Entrepreneurs and freelancers</li>
        <li>Recent graduates looking for global careers</li>
      </ul>
    </div>
  );
};

export default Content;
