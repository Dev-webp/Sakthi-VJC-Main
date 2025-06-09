
import Image from "next/image";
export default function DenmarkResumeMarketing() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 -mt-10 font-[Times_New_Roman]">
      <h1 className="flex justify-center text-xl sm:text-2xl md:text-2xl font-bold mb-8 text-center">
        Denmark Resume Marketing Services - <span className="text-orange-500">&nbsp;VJC Overseas</span>
      </h1>

      <p className="mb-4">
        Welcome to <span className="text-orange-500">VJC Overseas</span>, your trusted partner in securing your dream job in Denmark...
      </p>
      <div className="relative lg:p-4 bg-gradient-to-r my-10 from-orange-100 to-sky-100 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out w-fit mx-auto">
                   <Image
                     src="/resume/resume6.png"
                     alt="Migrate - Apply Now"
                     width={900}
                     height={630}
                     className="w-[22rem] lg:w-[31rem] h-[16rem] lg:h-[20rem] items-center rounded-xl"
                     priority
                     unoptimized
                   />
                 </div>

      <h2 className="text-xl font-semibold text-blue-400 mb-2 mt-4">
        Why Choose Denmark for Your Career?
      </h2>

      <h3 className="text-xl font-semibold text-black mb-2 mt-4">
        1. Salary Structure in Denmark
      </h3>
      <ul className="list-disc pl-6 mb-4">
        <li>Technology & IT: DKK 600,000 - DKK 900,000 annually</li>
        <li>Engineering: DKK 550,000 - DKK 850,000 annually</li>
        <li>Healthcare: DKK 500,000 - DKK 800,000 annually</li>
        <li>Education & Research: DKK 450,000 - DKK 750,000 annually</li>
        <li>Finance: DKK 600,000 - DKK 1,000,000 annually</li>
      </ul>

      <h3 className="text-xl font-semibold text-black mb-2 mt-4">
        2. Living in Denmark
      </h3>
      <ul className="list-disc pl-6 mb-4">
        <li>Housing: Rent in Copenhagen...</li>
        <li>Transportation: Public transport in Denmark is efficient...</li>
        <li>Healthcare: Denmark offers one of the best healthcare systems...</li>
      </ul>

      <h3 className="text-xl font-semibold text-black mb-2 mt-4">
        3. Work Opportunities & Job Market in Denmark
      </h3>
      <ul className="list-disc pl-6 mb-4">
        <li>Technology & IT</li>
        <li>Engineering</li>
        <li>Life Sciences</li>
        <li>Education & Research</li>
      </ul>

      <h3 className="text-xl font-semibold text-black mb-2 mt-4">
        4. Benefits of Working in Denmark
      </h3>
      <ul className="list-disc pl-6 mb-4">
        <li>Generous Paid Leave</li>
        <li>Work-Life Balance</li>
        <li>Social Benefits</li>
        <li>Job Security</li>
        <li>Workplace Culture</li>
      </ul>

      <h2 className="text-xl font-semibold text-blue-400 mb-2 mt-4">
        How <span className="text-orange-500">VJC Overseas</span> Can Help You
      </h2>
      <ul className="list-disc pl-6 mb-4">
        <li>Custom Resume Writing</li>
        <li>Tailored LinkedIn Profile Optimization</li>
        <li>Job Application Strategies</li>
        <li>Interview Coaching</li>
      </ul>

      <h2 className="text-2xl font-semibold text-black mb-2">
        Ready to Take the Next Step in Your Career?
      </h2>
      <p className="mb-4">
        If you're ready to unlock exciting career opportunities in Denmark, get in touch with <span className="text-orange-500">VJC Overseas</span> today...
      </p>
      <p className="mb-4">
        Contact <span className="text-orange-500">VJC Overseas</span> and take the first step toward a bright future in Denmark.
      </p>
    </div>
  );
}
