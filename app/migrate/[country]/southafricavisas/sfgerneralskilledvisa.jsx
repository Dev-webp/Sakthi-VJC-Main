import React from 'react'
import Image from 'next/image'

const Newzebusiness = () => {
  return (
    <div>  {/* Added a root div here */}
      {/* New South Africa Migration Content */}
      <div className="mt-12 pt-4 px-0 md:px-4 text-black bg-white">
        <h2 className="text-2xl font-bold mb-6 text-center text-orange-600">
          Migrate to South Africa – Live Where Culture, Opportunity, and Nature Meet
        </h2>
        <p className="mb-6 leading-relaxed text-lg text-black">
          Looking for a life filled with sunshine, cultural richness, career opportunities, and world-class landscapes? Migrating to South Africa offers a vibrant lifestyle and an exciting gateway to the African continent.
        </p>
        <p className="mb-6 leading-relaxed text-lg text-black">
          Whether you're seeking new career paths, entrepreneurial opportunities, or a peaceful retirement, South Africa welcomes skilled professionals, investors, families, and students from around the world.
        </p>
        <div className="relative p-4 bg-gradient-to-r my-10 from-orange-100 to-sky-100 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out w-fit mx-auto">
                <Image
                  src="/migrate/migrate-southafrica.png"
                  alt="Migrate - Apply Now"
                  width={900}
                  height={630}
                  className="w-[22rem] lg:w-[31rem] h-[16rem] lg:h-[20rem] items-center rounded-xl"
                  priority
                  unoptimized
                />
              </div>

        <h3 className="text-xl font-semibold mb-4 text-orange-600">Why Migrate to South Africa?</h3>
        <ul className="list-disc list-inside mb-6 space-y-2 text-gray-700">
          <li><strong>Booming Sectors:</strong> Demand in IT, engineering, healthcare, finance, and mining</li>
          <li><strong>Breathtaking Scenery:</strong> Safaris, beaches, vineyards, and mountains</li>
          <li><strong>Affordable Living:</strong> Lower cost of living compared to many Western countries</li>
          <li><strong>Cultural Diversity:</strong> 11 official languages and a welcoming population</li>
          <li><strong>Path to Long-Term Residency:</strong> Options for work, business, and permanent residency</li>
        </ul>

        <h3 className="text-xl font-semibold mb-4 text-orange-600">Popular South African Visa Categories</h3>
        <ul className="list-disc list-inside mb-6 space-y-2 text-gray-700">
          <li><strong>Critical Skills Work Visa:</strong> For professionals with expertise listed on South Africa’s Critical Skills List (e.g., ICT, engineering, medical, teaching)</li>
          <li><strong>General Work Visa:</strong> For those with a confirmed job offer and labor market approval</li>
          <li><strong>Business Visa:</strong> Ideal for investors or entrepreneurs planning to start or buy a business in South Africa</li>
          <li><strong>Study Visa:</strong> For international students enrolled at a South African institution</li>
          <li><strong>Relative’s & Spousal Visa:</strong> For partners, spouses, or dependents of South African citizens or permanent residents</li>
          <li><strong>Permanent Residency Permit:</strong> Available for individuals who qualify via work, investment, or long-term stay</li>
        </ul>

        <h3 className="text-xl font-semibold mb-4 text-orange-600">Who Is Eligible to Migrate?</h3>
        <ul className="list-disc list-inside mb-6 space-y-2 text-gray-700">
          <li>Are a skilled professional with qualifications in demand</li>
          <li>Have a job offer or intention to establish a business</li>
          <li>Meet financial or investment thresholds (for business visa)</li>
          <li>Have family ties in South Africa</li>
          <li>Meet health and character requirements</li>
        </ul>

        <h3 className="text-xl font-semibold mb-4 text-orange-600">South Africa Migration Process – Step-by-Step</h3>
        <ol className="list-decimal list-inside mb-6 space-y-2 text-gray-700">
          <li>Choose Your Visa Type</li>
          <li>Gather Required Documentation</li>
          <li>Apply via VFS or South African Mission</li>
          <li>Attend Biometrics Appointment</li>
          <li>Wait for Visa Processing</li>
          <li>Receive Visa and Prepare for Relocation</li>
          <li>Apply for PR (If eligible after temporary stay)</li>
        </ol>

        <h3 className="text-xl font-semibold mb-4 text-orange-600">Key Documents Often Required:</h3>
        <ul className="list-disc list-inside mb-6 space-y-2 text-gray-700">
          <li>Valid passport</li>
          <li>Qualifications and experience proof</li>
          <li>Police clearance</li>
          <li>Health certificate</li>
          <li>Job offer or business plan (if applicable)</li>
          <li>Proof of funds</li>
        </ul>
      </div>
    </div>
  )
}

export default Newzebusiness
