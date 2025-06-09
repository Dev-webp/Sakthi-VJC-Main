"use client";

import Image from "next/image";

export default function NovaScotiaPNP() {
  return (
    <div className="px-4 sm:px-4 py-10 max-w-6xl mx-auto text-justify text-base sm:text-[1.05rem] leading-6 text-gray-800">
      <p className="text-gray-800 text-2xl font-medium">
        <strong>
          Immigrate to Canada Through the Nova Scotia Provincial Nominee Program (NSPNP) – With{" "}
          <span className="text-orange-500">VJC Overseas</span>
        </strong>
      </p>

      {/* Image Section */}
      <div className="flex flex-col lg:flex-row items-center mt-4 gap-6 mb-6">
        <div className="relative group cursor-pointer w-full lg:w-[2500px] h-auto">
          <Image
            src="/Nova-Scotia-New.jpg"
            width={500}
            height={300}
            alt="Nova Scotia Immigration Canada"
            title="Nova Scotia PNP – VJC Overseas"
            className=" transition-transform duration-300 group-hover:scale-105"
            priority
            unoptimized
          />
          <span className="absolute bottom-2 left-2 bg-black/60 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
            Nova Scotia PNP
          </span>
        </div>
      

      {/* Intro */}
      <p>
        Nova Scotia, one of Canada's most picturesque and opportunity-rich provinces, offers an excellent pathway to permanent residence through the Nova Scotia Provincial Nominee Program (NSPNP). Designed to attract skilled workers, international graduates, and entrepreneurs, the NSPNP helps support the province’s economic growth by welcoming individuals who can fill labour market gaps and contribute to vibrant local communities.
      </p>
      </div>
      <p className="mt-2">
        If you're looking to settle in Canada, Nova Scotia's PNP offers multiple immigration streams that are efficient, targeted, and tailored to meet your unique profile.
      </p>

      {/* What is NSPNP */}
      <section className="mt-6">
        <h2 className="text-xl font-bold text-black mb-2">What is the Nova Scotia PNP (NSPNP)?</h2>
        <p>
          The Nova Scotia Nominee Program allows the province to nominate individuals for permanent residence who meet specific economic and demographic needs. Candidates who receive a provincial nomination can apply to Immigration, Refugees and Citizenship Canada (IRCC) for a Canadian PR visa.
        </p>
        <p className="mt-2">
          The NSPNP works through both Express Entry-aligned and non-Express Entry streams, giving flexibility to applicants with various backgrounds, skill levels, and qualifications.
        </p>
      </section>

      {/* Key Streams */}
      <section className="mt-6">
        <h2 className="text-xl font-bold text-black mb-2">Key Streams Under the NSPNP</h2>
        <ul className="list-disc list-inside ml-4 space-y-2">
          <li>
            <strong>Nova Scotia Labour Market Priorities Stream:</strong> Linked to the federal Express Entry system, this stream selects candidates directly from the Express Entry pool who meet specific provincial labour needs. No separate application is needed — candidates receive a Letter of Interest from the province.
          </li>
          <li>
            <strong>Skilled Worker Stream:</strong> Ideal for individuals who have received a full-time, permanent job offer from a Nova Scotia employer. This stream targets workers in high-demand sectors who can integrate quickly into the workforce.
          </li>
          <li>
            <strong>Occupation in Demand Stream:</strong> Focused on intermediate-skilled occupations in high demand in Nova Scotia, such as healthcare support workers and transport truck drivers. Applicants must have a job offer in one of the targeted occupations.
          </li>
          <li>
            <strong>International Graduates In-Demand Stream:</strong> For international students who have graduated from a recognized Nova Scotia institution and received a job offer in an in-demand occupation.
          </li>
          <li>
            <strong>Entrepreneur and International Graduate Entrepreneur Streams:</strong> Designed for individuals who want to establish or purchase a business in Nova Scotia and actively manage it. Candidates must have prior business management experience or have graduated from a Nova Scotia university.
          </li>
        </ul>
      </section>

      {/* Process */}
      <section className="mt-6">
        <h2 className="text-xl font-bold text-black mb-2">NSPNP Application Process</h2>
        <ol className="list-decimal list-inside ml-4 space-y-1">
          <li><strong>Determine Your Stream:</strong> Review the eligibility requirements for each stream. Factors such as work experience, education, language proficiency, and job offers are critical.</li>
          <li><strong>Submit an Expression of Interest (if applicable):</strong> Some streams, like the Entrepreneur Stream, require an EOI. Candidates are ranked based on a points system.</li>
          <li><strong>Receive an Invitation to Apply (ITA):</strong> If selected, you will receive an ITA to submit a full application to the province.</li>
          <li><strong>Provincial Nomination:</strong> Successful applicants receive a Nova Scotia Nomination Certificate, which boosts their profile in Express Entry by 600 CRS points (if applicable).</li>
          <li><strong>Apply for Permanent Residence:</strong> With the nomination, you can submit your application to IRCC for PR processing.</li>
        </ol>
      </section>

      {/* Why Nova Scotia */}
      <section className="mt-6">
        <h2 className="text-xl font-bold text-black mb-2">Why Choose Nova Scotia?</h2>
        <ul className="list-disc list-inside ml-4 space-y-1">
          <li>High demand for skilled workers and professionals</li>
          <li>Strong economy with growth in healthcare, tech, and logistics</li>
          <li>Coastal lifestyle with affordable living</li>
          <li>Friendly, multicultural communities</li>
        </ul>
      </section>

      {/* Final Thoughts */}
      <section className="mt-6">
        <h2 className="text-xl font-bold text-black mb-2">Final Thoughts</h2>
        <p>
          Nova Scotia’s PNP is a promising and efficient route for those seeking permanent residency in Canada. Whether you’re a skilled worker, graduate, or entrepreneur, the NSPNP opens the door to a high quality of life and long-term success in one of Canada’s most beautiful provinces.
        </p>
        <p className="mt-2">
          Take your first step with{" "}
          <span className="text-orange-500 font-semibold">VJC Overseas</span> — your trusted partner for Canadian immigration.
        </p>
      </section>
    </div>
  );
}
