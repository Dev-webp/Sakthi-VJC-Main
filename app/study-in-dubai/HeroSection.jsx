'use client';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Form from './ui/Form';

export default function Hero({ setIsOpen }) {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(false);
          void sectionRef.current?.offsetWidth;
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
  ref={sectionRef}
  className="relative min-h-screen pt-36 pb-8 px-4 md:px-6 lg:px-14 lg:-mt-14 overflow-hidden flex items-center justify-center"
>
  {/* Background Image */}
  <div 
    className={`absolute inset-0 w-full h-full transition-all duration-[1500ms] ease-out transform ${
      isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
    }`}
  >
    <Image
      src="studyindubai/bg.jpg" // Replace with your image path
      alt="Background"
      fill
      className="object-cover"
      unoptimized={true}
    />
  </div>

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/50 z-0 pointer-events-none" />
  
  

      {/* Content */}
      <div className="relative z-8 w-full max-w-[1440px] md:ml-4 flex flex-col lg:flex-row items-center justify-center gap-10">
        {/* Left Side */}
        <div className="flex flex-col items-center lg:items-start w-full lg:w-1/2 space-y-4">
          <Image
            src="/1.gif"
            alt="Study in Sweden"
            width={900}
            height={500}
            className="w-full max-w-[700px] mx-auto"
            priority
          />
          <Image
            src="/award-vjc.png"
            alt="VJC Award"
            width={600}
            height={300}
            className="w-full max-w-[500px] mx-auto"
            priority
          />
          <h1 className="text-white text-3xl sm:text-[2.5rem] lg:text-[3rem] lg:ml-16 font-bold leading-tight text-center lg:text-left uppercase">
            <span style={{ fontFamily: 'Times New Roman, Times, serif' }}>
  Study in{' '}
  <span className="bg-gradient-to-r from-blue-700 via-white to-red-600 bg-clip-text text-transparent font-extrabold">
    DUBAI
  </span>{' '}
  with <span className="text-saffron">VJC OVERSEAS</span>
</span>

          </h1>
          <p className="text-white text-sm sm:text-base text-center lg:ml-4 lg:text-left max-w-xl">
            Begin your academic journey in one of the world's most innovative and student-friendly nations.
            With expert guidance from <span className="font-semibold text-saffron">VJC Overseas</span>, you’re one step closer to studying in Dubai.
          </p>
          <div className="w-full flex justify-center lg:justify-center mt-2">
            <button
              onClick={() => setIsOpen(true)}
              className="bg-saffron text-white py-2 px-6 rounded-lg hover:bg-sky-500 transition"
            >
              Apply Now
            </button>
          </div>
        </div>

        {/* Right Side Form */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="w-full max-w-lg">
            <Form />
          </div>
        </div>
      </div>
    </section>
  );
}
