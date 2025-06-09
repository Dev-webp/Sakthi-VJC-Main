import Head from 'next/head';
import Image from 'next/image';

export default function Next() {
  return (
    <>
      <Head>
        <title>Express Entry - Canada PR | VJC Overseas</title>
        <meta name="description" content="Get Canada PR through Express Entry with VJC Overseas. Expert guidance, CRS boosting strategies, and full support." />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Express Entry - Canada PR | VJC Overseas" />
        <meta property="og:description" content="Fast-track your Canadian immigration through Express Entry with expert help from VJC Overseas." />
        <meta property="og:image" content="/canadapr-express-entry.png" />
        <meta property="og:url" content="https://vjcoverseas.com/pr-visas/canadapr/canada-express-entry" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Express Entry Canada PR | VJC Overseas" />
        <meta name="twitter:description" content="Migrate to Canada via Express Entry - Trusted Guidance from VJC Overseas." />
        <meta name="twitter:image" content="/images/express-entry-canada.jpg" />
      </Head>

      <div className="max-w-8xl mx-auto  py-8 bg-white">
      <h1 className="text-3xl font-bold text-black mb-4">
              Express Entry – Your Fast Track to Canadian Immigration
            </h1>
        <div className="flex flex-col lg:flex-row gap-10 items-center">
        
          <div className="lg:w-1/2 w-full overflow-hidden rounded-xl">
  <Image
    src="/canadapr-express-entry.png"
    alt="Express Entry Canada Immigration - VJC Overseas"
    title="Express Entry Canada Immigration - VJC Overseas"
    width={600}
    height={400}
    className="w-full object-cover transform transition duration-500 hover:scale-105"
    unoptimized
  />
</div>


          <div className="lg:w-1/2 w-full">
            
            <p className="text-gray-700 mb-4 leading-relaxed">
              Canada is one of the most welcoming countries for immigrants, offering a high standard of living, excellent healthcare, and world-class education. Among the various immigration pathways, Express Entry stands out as the most efficient and streamlined process for skilled workers seeking permanent residency in Canada. At VJC Overseas, we specialize in guiding clients through every step of the Express Entry system to make their Canadian dream a reality.
            </p>
          </div>
        </div>

        <div className="mt-10 space-y-6 text-gray-800 text-lg leading-relaxed">
          <h2 className="text-2xl font-semibold text-orange-700">What is Express Entry?</h2>
          <p>
            Express Entry is an online immigration application system introduced by the Government of Canada to manage applications for permanent residence under three federal economic immigration programs:
          </p>
          <ul className="list-disc pl-6">
            <li>Federal Skilled Worker Program (FSWP)</li>
            <li>Federal Skilled Trades Program (FSTP)</li>
            <li>Canadian Experience Class (CEC)</li>
          </ul>
          <p>
            Each of these programs targets skilled individuals who can contribute to the Canadian economy. Express Entry uses a points-based system, known as the Comprehensive Ranking System (CRS), to evaluate and rank candidates based on age, education, language proficiency, work experience, and other key factors.
          </p>

          <h2 className="text-2xl font-semibold text-orange-700">How Express Entry Works</h2>
          <ol className="list-decimal pl-6">
            <li>
              <strong>Creating an Online Profile:</strong> Applicants submit an online profile detailing their qualifications, work history, language test results (IELTS or CELPIP), and educational credentials. Profiles are entered into the Express Entry pool.
            </li>
            <li>
              <strong>Receiving an Invitation to Apply (ITA):</strong> Candidates with the highest CRS scores are issued Invitations to Apply for permanent residence in regular draws conducted by Immigration, Refugees and Citizenship Canada (IRCC).
            </li>
          </ol>
          <p>
            Once invited, applicants have 60 days to submit a complete PR application with supporting documents.
          </p>

          <h2 className="text-2xl font-semibold text-orange-700">Boosting Your CRS Score</h2>
          <p>
            A strong CRS score increases your chances of receiving an ITA. Our expert consultants help you maximize your score through various strategies, including:
          </p>
          <ul className="list-disc pl-6">
            <li>Improving your language test results</li>
            <li>Getting Educational Credential Assessments (ECA) for additional degrees</li>
            <li>Securing a valid job offer from a Canadian employer</li>
            <li>Applying with your spouse to take advantage of additional points</li>
          </ul>

          <h2 className="text-2xl font-semibold text-orange-700">Why Choose Us?</h2>
          <ul className="list-disc pl-6">
            <li><strong>Free Eligibility Assessment:</strong> Discover your chances of success before committing.</li>
            <li><strong>Personalized Immigration Strategy:</strong> Every applicant is unique. We design a plan tailored to your profile.</li>
            <li><strong>Document Preparation and Review:</strong> We ensure your application is accurate, complete, and submitted on time.</li>
            <li><strong>Ongoing Support:</strong> From profile creation to post-landing services, we’re with you at every step.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-orange-700">Start Your Journey Today</h2>
          <p>
            The Express Entry system is dynamic, and CRS cut-off scores can change frequently. Acting early and smartly can make all the difference. Let us help you build a future in Canada — a land of opportunities, diversity, and stability.
          </p>
        </div>
      </div>
    </>
  );
}
