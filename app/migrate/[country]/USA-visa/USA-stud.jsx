import React from 'react';
import Image from 'next/image';

const MigrateToUSA = () => {
  return (
    <div className="m-2 p-2" style={{
      fontFamily: "Times New Roman",
      backgroundColor: 'white',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <h2 className="text-2xl font-bold text-center mt-4 mb-6">Migrate to the United States – <span className="text-red-600">Your American Dream Starts Here</span></h2>

      <p className="mb-6 m-2">The United States of America has long been the top destination for individuals seeking a better life, global career opportunities, world-class education, and long-term security. Whether you’re a skilled professional, student, entrepreneur, or family — migrating to the U.S. can open the door to a future full of possibilities.</p>

      <p className="mb-6 m-2 font-semibold">Now is the best time to take the leap and turn your American Dream into reality.</p>

 <div className="relative p-4 bg-gradient-to-r my-10 from-orange-100 to-sky-100 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out w-fit mx-auto">
                <Image
                  src="/migrate/migrate-usa.png"
                  alt="Migrate - Apply Now"
                  width={900}
                  height={630}
                  className="w-[22rem] lg:w-[31rem] h-[16rem] lg:h-[20rem] items-center rounded-xl"
                  priority
                  unoptimized
                />
              </div>
      <h3 className='text-sky-800 italic mb-4 m-2'>Why Migrate to the USA?</h3>
      <ul className='mb-6 ml-8 list-disc'>
        <li><b>Global Job Market:</b> High demand for talent in IT, healthcare, finance, engineering, and more.</li>
        <li><b>Top Universities & Research:</b> Study in Ivy League and globally ranked institutions.</li>
        <li><b>Path to Permanent Residency (Green Card):</b> Clear immigration routes for eligible candidates.</li>
        <li><b>Cultural Diversity & Freedom:</b> Thrive in a multicultural, democratic society.</li>
        <li><b>High Earning Potential:</b> Earn in USD with access to excellent career development.</li>
      </ul>

      <h3 className='text-sky-800 italic mb-4 m-2'>Popular U.S. Immigration Options</h3>
      <h4 className='font-bold mb-2 m-2'>Work-Based Visas</h4>
      <ul className='mb-6 ml-8 list-disc'>
        <li><b>H-1B Visa:</b> For skilled professionals (tech, finance, engineering, etc.).</li>
        <li><b>L-1 Visa:</b> Intra-company transfer for executives and managers.</li>
        <li><b>O-1 Visa:</b> For individuals with extraordinary ability in arts, science, education, or sports.</li>
      </ul>

      <h4 className='font-bold mb-2 m-2'>Student Visas</h4>
      <ul className='mb-6 ml-8 list-disc'>
        <li><b>F-1 Visa:</b> For academic studies at U.S. colleges and universities.</li>
        <li><b>M-1 Visa:</b> For vocational or non-academic programs.</li>
      </ul>

      <h4 className='font-bold mb-2 m-2'>Family-Based Immigration</h4>
      <p className='mb-6 m-2'>Sponsorship by U.S. citizen or permanent resident relatives.</p>

      <h4 className='font-bold mb-2 m-2'>Investor & Entrepreneur Pathways</h4>
      <ul className='mb-6 ml-8 list-disc'>
        <li><b>EB-5 Investor Visa:</b> For individuals investing in U.S.-based businesses.</li>
        <li><b>Start-Up Visa Programs:</b> Through partnerships and pilot programs.</li>
      </ul>

      <h4 className='font-bold mb-2 m-2'>Green Card Process</h4>
      <p className='mb-6 m-2'>Through employment, family sponsorship, asylum, or Diversity Visa Lottery.</p>

      <h3 className='text-sky-800 italic mb-4 m-2'>Your U.S. Migration Process – Step by Step</h3>
      <ul className='mb-6 ml-8 list-decimal'>
        <li>Free Profile Assessment – Know your eligibility.</li>
        <li>Select the Right Visa Category – Based on your profile and goals.</li>
        <li>Document Preparation & Filing – With full legal accuracy.</li>
        <li>Interview Preparation – Get ready for consulate or embassy interviews.</li>
        <li>Visa Approval & Pre-departure Guidance – Fly with confidence.</li>
      </ul>

      <h3 className='text-sky-800 italic mb-4 m-2'>Who Can Apply?</h3>
      <ul className='mb-6 ml-8 list-disc'>
        <li>IT Professionals, Healthcare Workers, and Engineers</li>
        <li>Entrepreneurs and Investors</li>
        <li>International Students</li>
        <li>Skilled Tradespeople and Artists</li>
        <li>Families looking for relocation</li>
      </ul>

      <p className='mb-6 m-2 font-semibold'>If you have talent, ambition, and a dream — the USA wants you.</p>
    </div>
  );
};

export default MigrateToUSA;