"use client";

import React from "react";
import { motion } from "framer-motion";

import Image from "next/image";
const points = [
  {
   
    title: "1. Tailored Career Pathways",
    description:
      "We understand that each individual’s career journey is unique. Our expert consultants work closely with you to understand your skills, experience, and aspirations, helping you find the perfect job abroad that matches your goals. Whether you're a healthcare professional, engineer, IT specialist, or tradesperson, we have the right opportunities waiting for you.We take the time to evaluate your professional profile in detail, ensuring that every recommendation we make is aligned with your long-term ambitions. With access to top-tier employers and global markets, we not only help you secure a job, but also empower you to build a meaningful and sustainable international career. Our personalized guidance ensures that you step into your new role with confidence and clarity.",
    showImage: true,
  },
  {
   
    title: "2. Global Network of Employers",
    description:
      "Our extensive network of trusted international employers spans across various industries and countries. From Canada and the Middle East to Australia and Europe, we collaborate with leading companies looking to hire qualified professionals from diverse fields. With VJC Overseas, you’ll have access to some of the best job offers available worldwide.",
    showImage: false,
  },
  {
    
    title: "3. Hassle-Free Immigration and Relocation Support",
    description:
      "We know that moving abroad can be overwhelming, which is why we provide end-to-end support, from visa and work permit assistance to relocation advice. Our dedicated team ensures you navigate the entire process smoothly, so you can focus on what truly matters – your career growth and new experiences.",
    showImage: false,
  },
  {
    
    title: "4. Long-Term Success",
    description:
      "Our commitment to your success doesn't end with securing a job. We are here for the long haul, offering guidance and support throughout your overseas employment, helping you adapt to your new workplace and environment, and ensuring you thrive in your international career.",
    showImage: false,
  },
];

const WbContent = () => {
  return (
    <div className="w-full bg-white py-12 px-6  lg:px-20">
      {/* OUTSIDE Heading */}
      <motion.h3
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-3xl lg:text-4xl font-bold mb-10 text-center text-gray-900"
      >
        Work Abroad with <span className="text-orange-500">VJC Overseas</span>
        <br />
        <span className="text-xl font-medium">Unlock Global Career Opportunities</span>
      </motion.h3>

      {/* Box */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
        className="relative z-10 max-w-7xl mx-auto text-gray-900 border-4 border-orange-500 rounded-3xl p-8"
      >
        {/* Intro Paragraph */}
        <motion.p
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="text-base lg:text-lg mb-6 text-center"
        >
          At <span className="text-orange-500 font-semibold">VJC Overseas</span>, we believe that the world is full of exciting career opportunities waiting for talented individuals like you. Whether you're looking to advance your career, experience new cultures, or seek better work-life balance, we specialize in connecting skilled professionals with top-tier employers worldwide.
        </motion.p>

        {/* Why Choose Title */}
        <motion.h4
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-2xl font-semibold mb-8 text-center"
        >
          Why Choose <span className="text-orange-500">VJC Overseas</span>?
        </motion.h4>

        {/* Points */}
        <div className="space-y-12">
          {points.map((point, index) => {
            const Icon = point.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="flex flex-col lg:flex-row items-start gap-6"
              >
                <div className="flex items-start gap-4 flex-1">
                 
                  <div>
                    <h5 className="text-lg font-semibold">{point.title}</h5>
                    <p className="text-gray-700 mt-2">{point.description}</p>
                  </div>
                </div>

              {point.showImage && (
  <div className="w-full lg:flex-1">
    <Image
      src="/Work-Abroad-for-a-Year.png"
      alt="Work Abroad"
      width={400} // You can adjust width and height as needed
      height={300}
      className="w-full h-auto max-w-md mx-auto rounded object-cover"
      unoptimized
    />
  </div>
)}

              </motion.div>
            );
          })}
        </div>

        {/* Final Paragraph */}
        <motion.p
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="mt-12 text-center text-base lg:text-lg"
        >
          Start your journey towards an exciting new career abroad today with{" "}
          <span className="text-orange-500 font-semibold">VJC Overseas</span>. Explore endless opportunities,
          enhance your professional skills, and embrace new horizons with us.
        </motion.p>
      </motion.div>
    </div>
    
  );
};

export default WbContent;
