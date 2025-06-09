import React from 'react';
import Image from 'next/image';

const MigrateToUK = () => {
  return (
    <div className="m-2 p-2" style={{
      fontFamily: "Times New Roman",
      backgroundColor: 'white',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <h2 className="text-2xl font-bold text-center mt-4 mb-6">Migrate to the United Kingdom – <span className="text-red-600">Your British Dream Starts Here</span></h2>

      <p className="mb-6 m-2">The United Kingdom remains one of the most attractive destinations for individuals seeking high-quality education, career advancement, healthcare access, and cultural richness. Whether you're a skilled worker, student, entrepreneur, or family – migrating to the UK opens doors to a prosperous future.</p>

      <p className="mb-6 m-2 font-semibold">Now is the ideal time to begin your journey toward building a new life in the UK.</p>

      <div className="relative p-4 bg-gradient-to-r my-10 from-orange-100 to-sky-100 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out w-fit mx-auto">
        <Image
          src="/migrate/migrate-uk.png"
          alt="Migrate to UK - Apply Now"
          width={900}
          height={630}
          className="w-[22rem] lg:w-[31rem] h-[16rem] lg:h-[20rem] items-center rounded-xl"
          priority
          unoptimized
        />
      </div>

      <h3 className='text-sky-800 italic mb-4 m-2'>Why Migrate to the UK?</h3>
      <ul className='mb-6 ml-8 list-disc'>
        <li><b>Robust Job Market:</b> High demand in sectors like healthcare, IT, finance, and engineering.</li>
        <li><b>Top-Tier Education:</b> Study at world-renowned institutions like Oxford and Cambridge.</li>
        <li><b>Clear PR Pathways:</b> Opportunities for permanent settlement via Skilled Worker and other routes.</li>
        <li><b>Universal Healthcare:</b> Access to the NHS, one of the best healthcare systems.</li>
        <li><b>Multicultural Lifestyle:</b> Live in a society known for diversity, history, and global influence.</li>
      </ul>

      <h3 className='text-sky-800 italic mb-4 m-2'>Popular UK Immigration Options</h3>

      <h4 className='font-bold mb-2 m-2'>Work-Based Visas</h4>
      <ul className='mb-6 ml-8 list-disc'>
        <li><b>Skilled Worker Visa:</b> For professionals with job offers from UK employers.</li>
        <li><b>Health and Care Worker Visa:</b> For medical professionals and caregivers.</li>
        <li><b>Global Talent Visa:</b> For leaders or potential leaders in academia, research, arts, and tech.</li>
      </ul>

      <h4 className='font-bold mb-2 m-2'>Student Visas</h4>
      <ul className='mb-6 ml-8 list-disc'>
        <li><b>Student Visa:</b> For academic studies in UK institutions.</li>
        <li><b>Short-term Study Visa:</b> For English language or short courses.</li>
      </ul>

      <h4 className='font-bold mb-2 m-2'>Family-Based Immigration</h4>
      <p className='mb-6 m-2'>Join family members who are UK citizens or settled residents through the Family Visa route.</p>

      <h4 className='font-bold mb-2 m-2'>Entrepreneur & Investor Routes</h4>
      <ul className='mb-6 ml-8 list-disc'>
        <li><b>Innovator Founder Visa:</b> For entrepreneurs with innovative business ideas.</li>
        <li><b>Global Business Mobility:</b> For overseas companies transferring employees to the UK.</li>
      </ul>

      <h4 className='font-bold mb-2 m-2'>Settlement & ILR (Indefinite Leave to Remain)</h4>
      <p className='mb-6 m-2'>Apply for permanent residency after a qualifying period under work, family, or other visa categories.</p>

      <h3 className='text-sky-800 italic mb-4 m-2'>Your UK Migration Process – Step by Step</h3>
      <ul className='mb-6 ml-8 list-decimal'>
        <li>Free Profile Evaluation – Check your eligibility for UK visas.</li>
        <li>Select the Best Visa Pathway – Tailored to your goals and qualifications.</li>
        <li>Document Compilation & Application – With professional support.</li>
        <li>Visa Interview Guidance – Prepare for success at the consulate.</li>
        <li>Visa Grant & Pre-Arrival Assistance – Step into your UK future.</li>
      </ul>

      <h3 className='text-sky-800 italic mb-4 m-2'>Who Can Apply?</h3>
      <ul className='mb-6 ml-8 list-disc'>
        <li>Healthcare Professionals and IT Specialists</li>
        <li>Engineers, Finance Experts, and Skilled Workers</li>
        <li>Students aspiring for higher education</li>
        <li>Start-up founders and entrepreneurs</li>
        <li>Families wishing to settle in the UK</li>
      </ul>

      <p className='mb-6 m-2 font-semibold'>If you are skilled, driven, and dream of a better life – the UK is ready to welcome you.</p>
    </div>
  );
};

export default MigrateToUK;
