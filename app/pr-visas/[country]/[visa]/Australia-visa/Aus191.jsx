"use client";

import Image from "next/image";

export default function Australia191Visa() {
  return (
    <div className="px-4 sm:px-4 py-10 max-w-6xl mx-auto text-justify text-base sm:text-[1.05rem] leading-6 text-gray-800">
      <p className="text-gray-800 text-2xl font-medium">
        <strong>
          Australia 191 Permanent Residence (Skilled Regional) Visa – Your Pathway to Permanent Residency in Regional Australia with{" "}
          <span className="text-orange-500">VJC Overseas</span>
        </strong>
      </p>

      {/* Image Section */}
      <div className="flex flex-col lg:flex-row items-center mt-4 gap-6 mb-6">
        <div className="relative group cursor-pointer w-full ml-24 lg:w-[1400px] h-auto">
          <Image
            src="/skillednominated191.jpg"
            width={500}
            height={300}
            alt="Australia 191 Skilled Regional Visa"
            title="Australia 191 Visa – VJC Overseas"
            className="rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105"
            priority
            unoptimized
          />
          <span className="absolute bottom-2 left-2 bg-black/60 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
            Subclass 191 Visa
          </span>
        </div>
      </div>

      {/* Introduction */}
      <p>
        If you're a skilled worker who has lived and worked in regional Australia on a temporary visa and are now looking to make Australia your permanent home, the Australia 191 Permanent Residence (Skilled Regional) Visa offers the perfect opportunity.
      </p>
      <p className="mt-2">
        At <span className="text-orange-500 font-semibold">VJC Overseas</span>, we specialize in helping skilled professionals navigate the complexities of this visa, ensuring a seamless transition to permanent residency in one of the most vibrant and diverse regions in the world.
      </p>

      {/* What is Subclass 191 */}
      <section className="mt-6">
        <h2 className="text-xl font-bold text-black mb-2">What is the Subclass 191 Permanent Residence (Skilled Regional) Visa?</h2>
        <p>
          The Subclass 191 Visa is a permanent residency visa for individuals who have lived and worked in designated regional areas of Australia on a provisional Skilled Regional visa (Subclass 489, 491, or 494).
        </p>
        <p className="mt-2">
          This visa supports regional development by retaining skilled workers in regional zones, granting them permanent residency after fulfilling certain residency and employment criteria.
        </p>
      </section>

      {/* Key Benefits */}
      <section className="mt-6">
        <h2 className="text-xl font-bold text-black mb-2">Key Benefits of the Subclass 191 Visa</h2>
        <ul className="list-disc list-inside ml-4 space-y-2">
          <li><strong>Permanent Residency:</strong> Live, work, and study in Australia with full permanent resident status.</li>
          <li><strong>Work and Study Rights:</strong> No limitations on where or how you work or study once you obtain PR.</li>
          <li><strong>Healthcare Access:</strong> Access to Medicare, Australia’s world-class public healthcare system.</li>
          <li><strong>Pathway to Citizenship:</strong> Eligible to apply for Australian citizenship after four years.</li>
          <li><strong>Family Inclusion:</strong> Include your spouse and dependent children in the same visa application.</li>
        </ul>
      </section>

      {/* Eligibility */}
      <section className="mt-6">
        <h2 className="text-xl font-bold text-black mb-2">Eligibility Requirements</h2>
        <ul className="list-disc list-inside ml-4 space-y-2">
          <li><strong>Temporary Visa:</strong> Must hold a valid Skilled Regional (Provisional) visa such as Subclass 489, 491, or 494.</li>
          <li><strong>Regional Residence:</strong> Must have lived in a designated regional area for a minimum of 3 years.</li>
          <li><strong>Work Experience:</strong> Must have worked full-time in a skilled occupation during the 3-year period.</li>
          <li><strong>Income Threshold:</strong> Must meet the minimum taxable income requirement as defined by the Australian government for at least 3 years.</li>
          <li><strong>Health & Character:</strong> Must pass medical checks and police clearance requirements.</li>
          <li><strong>Visa Compliance:</strong> Must have complied with all conditions of your provisional visa.</li>
        </ul>
      </section>

      {/* How VJC Helps */}
      <section className="mt-6">
        <h2 className="text-xl font-bold text-black mb-2">How VJC Overseas Can Help You</h2>
        <ul className="list-disc list-inside ml-4 space-y-2">
          <li><strong>Eligibility Check:</strong> We assess your provisional visa history and ensure you meet all 191 visa criteria.</li>
          <li><strong>Document Guidance:</strong> Help in compiling work history, income evidence, and regional residence proof.</li>
          <li><strong>Full Application Support:</strong> From start to finish, our team manages your 191 visa submission process.</li>
          <li><strong>Compliance Monitoring:</strong> We ensure all visa conditions were followed and well-documented.</li>
          <li><strong>Settlement Services:</strong> We provide post-visa assistance for accommodation, schools, jobs, and more.</li>
        </ul>
      </section>

      {/* CTA */}
      <section className="mt-6">
        <h2 className="text-xl font-bold text-black mb-2">Start Your Journey to Permanent Residency Today</h2>
        <p>
          The Subclass 191 Visa is your reward for contributing to regional Australia. If you’re ready to make your stay permanent, <span className="text-orange-500 font-semibold">VJC Overseas</span> is your trusted partner to make it happen.
        </p>
        <p className="mt-2">
          Contact us today to confirm your eligibility and begin your path to Australian permanent residency under the Subclass 191 visa.
        </p>
      </section>
    </div>
  );
}
