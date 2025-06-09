import Image from "next/image";

export default function CanadaResumeMarketingPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 -mt-10 font-[Times_New_Roman]">
      <h1 className="text-center text-2xl sm:text-3xl font-bold mb-8">
        Canada Resume Marketing Services –{" "}
        <span className="text-orange-500">VJC Overseas</span>
      </h1>

      <p className="mb-4">
        Welcome to <span className="text-orange-500">VJC Overseas</span> – Your
        trusted partner for launching a successful career in Canada. Whether
        you're planning to move to Canada for work, education, or business, a
        professionally written resume is essential to grab the attention of
        Canadian employers and increase your job opportunities.
      </p>
      {/* 🔽 SMALL IMAGE INSERTED HERE */}
      <div className="relative lg:p-4 bg-gradient-to-r my-10 from-orange-100 to-sky-100 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out w-fit mx-auto">
             <Image
               src="/resume/resume1.png"
               alt="Migrate - Apply Now"
               width={900}
               height={630}
               className="w-[22rem] lg:w-[31rem] h-[16rem] lg:h-[20rem] items-center rounded-xl"
               priority
               unoptimized
             />
           </div>
      <p className="mb-4">
        Our Canada Resume Marketing Services are designed to align your
        professional profile with Canadian industry standards, improving your
        chances of securing interviews and employment in your target field.
      </p>

      <p className="mb-4">
        From recent graduates to experienced professionals and executives
        seeking career transitions, we provide end-to-end support tailored to
        your goals in the Canadian job market.
      </p>

      <h2 className="text-xl font-semibold text-blue-400 mt-6 mb-2">
        Why Choose <span className="text-orange-500">VJC Overseas</span> for
        Your Resume Marketing in Canada?
      </h2>
      <ul className="list-disc ml-6 mb-4">
        <li>
          Customized resume writing to match Canadian employer expectations.
        </li>
        <li>
          Optimized for Applicant Tracking Systems (ATS) to improve shortlisting
          chances.
        </li>
        <li>
          Professional cover letters and LinkedIn profile enhancements for a
          strong online presence.
        </li>
        <li>
          Personalized job search strategies and application guidance for
          targeted results.
        </li>
      </ul>

      <h2 className="text-xl font-semibold text-black mt-6 mb-2">
        Working in Canada: Salary Structure, Job Prospects, and Living Standards
      </h2>

      <h3 className="text-xl font-semibold text-blue-400 mt-4 mb-2">
        Canadian Salary Expectations
      </h3>
      <ul className="list-disc ml-6 mb-4">
        <li>Entry-Level Roles: CAD $35,000 – $50,000 annually</li>
        <li>Mid-Level Professionals: CAD $50,000 – $80,000 annually</li>
        <li>Senior Positions: CAD $80,000 – $120,000+ annually</li>
        <li>
          IT & Tech Sector: CAD $70,000 – $150,000 depending on experience
        </li>
      </ul>

      <h3 className="text-xl font-semibold text-blue-400 mt-4 mb-2">
        Top Industries Hiring in Canada
      </h3>
      <ul className="list-disc ml-6 mb-4">
        <li>Information Technology and Software Development</li>
        <li>Engineering and Architecture</li>
        <li>Healthcare and Medical Services</li>
        <li>Finance and Accounting</li>
        <li>Education and Training</li>
        <li>Hospitality and Tourism</li>
        <li>Skilled Trades (Carpentry, Plumbing, etc.)</li>
      </ul>

      <h3 className="text-xl font-semibold text-blue-400 mt-4 mb-2">
        Canadian Lifestyle and Work Culture
      </h3>
      <ul className="list-disc ml-6 mb-4">
        <li>Access to universal healthcare as a permanent resident</li>
        <li>Safe and inclusive society with diverse communities</li>
        <li>Excellent work-life balance and employee rights</li>
      </ul>

      <h3 className="text-xl font-semibold text-blue-400 mt-4 mb-2">
        Benefits of Working in Canada
      </h3>
      <ol className="list-decimal ml-6 mb-6">
        <li>Competitive salary packages and employee benefits</li>
        <li>Free or subsidized healthcare services</li>
        <li>Pension and retirement plans for long-term security</li>
        <li>Paid vacation, sick leave, and statutory holidays</li>
        <li>Career advancement and skill development opportunities</li>
      </ol>

      <h2 className="text-xl font-semibold text-blue-400 mt-6 mb-2">
        Why Trust <span className="text-orange-500">VJC Overseas</span> with
        Your Career in Canada?
      </h2>
      <p className="mb-4">
        At <span className="text-orange-500">VJC Overseas</span>, we do more
        than write resumes. We position you for success in the Canadian job
        market by understanding your goals and transforming your experience into
        compelling documents that attract employers and recruiters. We provide
        insights into market trends, employer preferences, and help you stay
        ahead in a competitive landscape.
      </p>

      <h2 className="text-xl font-semibold text-blue-400 mt-6 mb-2">
        Start Your Canadian Career Journey Today
      </h2>
      <p className="mb-4">
        Ready to take the first step toward your dream job in Canada? Contact{" "}
        <span className="text-orange-500">VJC Overseas</span> today for a free
        consultation. Let us help you create a powerful resume and marketing
        strategy that opens doors and accelerates your success.
      </p>

      <h2 className="text-xl font-semibold text-blue-400 mb-4">
        <span className="text-orange-500">VJC Overseas</span> – Your Partner in
        Global Career Success
      </h2>
    </div>
  );
}
