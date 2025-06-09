"use client";

import Image from "next/image";

export default function ManitobaPNP() {
  return (
    <div className="px-4 sm:px-4 py-10 max-w-6xl mx-auto text-justify text-base sm:text-[1.05rem] leading-6 text-gray-800">
      <p className="text-gray-800 text-2xl font-medium">
        <strong>
          Immigrate to Canada Through the Manitoba Provincial Nominee Program (MPNP) – With{" "}
          <span className="text-orange-500">VJC Overseas</span>
        </strong>
      </p>

      {/* Image Section */}
      <div className="flex flex-col lg:flex-row items-center mt-4 gap-6 mb-6">
        <div className="relative group cursor-pointer w-full lg:w-[2500px] h-auto">
          <Image
            src="/manitoba-canada.jpg"
            width={500}
            height={300}
            alt="Manitoba Immigration Canada"
            title="Manitoba PNP – VJC Overseas"
            className="rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105"
            priority
            unoptimized
          />
          <span className="absolute bottom-2 left-2 bg-black/60 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
            Manitoba PNP
          </span>
        </div>
     

      {/* Intro */}
      <p>
        Manitoba, a welcoming and economically thriving province in central Canada, offers one of the most dynamic immigration pathways through the Manitoba Provincial Nominee Program (MPNP). This program is designed to attract skilled workers, graduates, and entrepreneurs who can contribute to the province's growing economy and integrate into local communities. If you’re looking to settle in Canada permanently, Manitoba could be your gateway.
      </p>
 </div>
      {/* What is MPNP */}
      <section className="mt-6">
        <h2 className="text-xl font-bold text-black mb-2">What is the Manitoba Provincial Nominee Program (MPNP)?</h2>
        <p>
          The MPNP allows Manitoba to nominate individuals who meet the province’s labour market needs and are committed to living and working in the region. Once nominated, applicants can apply for Canadian permanent residency through Immigration, Refugees and Citizenship Canada (IRCC).
        </p>
        <p className="mt-2">
          The program focuses on selecting candidates with the right skills, education, work experience, and strong ties to Manitoba, either through family, previous education, work, or a valid job offer.
        </p>
      </section>

      {/* Streams Under MPNP */}
      <section className="mt-6">
        <h2 className="text-xl font-bold text-black mb-2">Streams Under the MPNP</h2>
        <ul className="list-disc list-inside ml-4 space-y-2">
          <li>
            <strong>Skilled Worker in Manitoba Stream:</strong> For individuals currently working in Manitoba with a full-time job offer from a local employer. It emphasizes long-term employment and community connections.
          </li>
          <li>
            <strong>Skilled Worker Overseas Stream:</strong> Designed for skilled workers living outside Canada but who have a strong connection to Manitoba, such as family ties, past education, work experience in the province, or support from a Manitoba-based organization.
          </li>
          <li>
            <strong>International Education Stream:</strong> Exclusively for international graduates who studied in Manitoba and possess the skills and potential to stay and contribute to the province’s economy.
          </li>
          <li>
            <strong>Business Investor Stream:</strong> For experienced businesspeople or entrepreneurs planning to invest in a business in Manitoba and actively manage it.
          </li>
        </ul>
      </section>

      {/* MPNP Process */}
      <section className="mt-6">
        <h2 className="text-xl font-bold text-black mb-2">MPNP Application Process</h2>
        <p>Here’s a simplified step-by-step breakdown of the MPNP process:</p>
        <ol className="list-decimal list-inside ml-4 mt-2 space-y-1">
          <li><strong>Determine Your Eligibility:</strong> Review the criteria for the stream you wish to apply under. Language proficiency, work experience, education, and Manitoba connections play a major role.</li>
          <li><strong>Submit an Expression of Interest (EOI):</strong> Create an online EOI profile with your qualifications. You’ll be ranked using a points-based system, and top candidates are invited to apply.</li>
          <li><strong>Receive a Letter of Advice to Apply (LAA):</strong> If selected, you’ll receive an LAA, allowing you to submit a full MPNP application with supporting documents.</li>
          <li><strong>Nomination from Manitoba:</strong> If approved, Manitoba will issue you a nomination certificate.</li>
          <li><strong>Apply for Permanent Residence:</strong> With the provincial nomination, submit your PR application to IRCC. This can be done through the Express Entry system (if eligible) or a paper-based process.</li>
        </ol>
      </section>

      {/* Why Manitoba */}
      <section className="mt-6">
        <h2 className="text-xl font-bold text-black mb-2">Why Choose Manitoba?</h2>
        <ul className="list-disc list-inside ml-4 space-y-1">
          <li>Affordable cost of living and high quality of life</li>
          <li>Strong demand for skilled workers and entrepreneurs</li>
          <li>Faster provincial processing and high PR approval rates</li>
          <li>Supportive immigrant settlement programs</li>
        </ul>
      </section>

      {/* Final CTA */}
      <section className="mt-6">
        <h2 className="text-xl font-bold text-black mb-2">Final Thoughts</h2>
        <p>
          The Manitoba PNP offers a promising opportunity for individuals seeking permanent residence in Canada. With strong ties to the community, in-demand occupations, and simplified pathways, Manitoba provides a welcoming environment for immigrants looking to build a better future.
        </p>
        <p className="mt-2">
          Whether you're a skilled worker, graduate, or entrepreneur, the MPNP can help turn your Canadian dream into reality — and{" "}
          <span className="text-orange-500 font-semibold">VJC Overseas</span> is here to guide you every step of the way.
        </p>
      </section>
    </div>
  );
}
