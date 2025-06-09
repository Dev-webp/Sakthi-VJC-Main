'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Form from '../components/Form';
import Image from 'next/image';
import { FaCheckCircle } from 'react-icons/fa';
import Link from 'next/link';

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.8,
      ease: 'easeOut',
    },
  }),
};

const VJCCompetentSection = () => {
  return (
    <div
      className="bg-gradient-to-br from-blue-50 via-white to-orange-100 py-10 lg:py-20 text-gray-800"
      style={{ fontFamily: 'Times New Roman, serif' }}
    >
      <div className="max-w-7xl mx-auto space-y-16">

        {/* Top Section */}
        <motion.div
          className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 items-start bg-black/80 overflow-hidden shadow-lg"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          {/* Background Image */}
          <div className="absolute inset-0 w-full h-full z-0">
            <Image
              src="/study-sycess.jpg"
              alt="Top Section Background"
              fill
              quality={100}
              className="object-cover opacity-40"
              priority
            />
          </div>

          {/* Left Text Content */}
          <motion.div
            className="relative z-0 p-6 mt-36 lg:pl-20 lg:pr-12 space-y-6"
            custom={0.1}
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-extrabold text-white drop-shadow-md">
              VJC Overseas: Achieving a High Rate of Success in Immigration and Student Visa Processes
            </h2>
            <p className="text-lg text-white">
              When it comes to fulfilling your dreams of studying or settling abroad, success is not just about desire—it’s about choosing the right partner to guide you through the process.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/assessment" passHref>
                <motion.button
                  className="bg-orange-500 text-white px-6 py-2 rounded-full shadow hover:bg-blue-500 transition"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Free Assessment
                </motion.button>
              </Link>
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.div
            className="relative z-10 p-6 lg:p-10"
            custom={0.2}
            variants={fadeInUp}
          >
            <Form />
          </motion.div>
        </motion.div>

        {/* Paragraph with Image */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-24 ml-6 md:ml-24 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div
            className="space-y-6 text-lg leading-8 text-justify text-gray-700"
            variants={fadeInUp}
          >
            <p>
              VJC Overseas is proud to be recognized for its high rate of success in immigration and student visa processes, helping thousands of clients turn their global aspirations into reality.
              With years of industry experience, VJC Overseas has become a trusted name in the field of global education and immigration consulting. Our consistently high visa approval rates are the result of expert knowledge, detailed documentation, personalized counseling, and unwavering commitment to client success.
            </p>
            <h2 className='font-bold text-2xl'>Why Our Success Rate Stands Out</h2>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <Image
              src="/study-abroad-vjcoversaes.png"
              alt="VJC Support Team"
              width={300}
              height={150}
            />
          </motion.div>
        </motion.div>

        {/* Additional Paragraph */}
        <p className="text-lg text-justify px-6  md:px-24 text-gray-700">
          At VJC Overseas, we understand that each visa application is unique and requires a customized approach.
          We go beyond basic application support by offering strategic guidance and detailed documentation support tailored to your specific profile. Our process starts with a deep assessment of your educational background, work experience, and long-term goals to match you with the right country, program, or immigration stream.
          Whether it’s a student visa, work visa, PR (permanent residency), or dependent visa, our team of certified consultants ensures that every application is error-free, well-documented, and aligned with the latest immigration policies.
          Our high success rate reflects not only our expertise but also our meticulous approach to visa filing and preparation.
        </p>

        {/* Highlight Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            {
              title: 'Success in Student Visas',
              desc: 'For students, securing a visa is the most critical step after receiving an admission offer. VJC Overseas specializes in handling student visa applications for top destinations such as Canada, the UK, USA, Australia, Germany, and New Zealand. Our team guides students through the entire visa journey, including financial documentation, SOP preparation, interview guidance, and visa lodgment.',
              color: 'orange-500',
              textColor: 'blue-800',
            },
            {
              title: 'Trusted by Thousands, Driven by Results',
              desc: 'What makes VJC Overseas a top choice for visa aspirants is not just our knowledge but our client-centric approach. We believe that your success is our success, and every team member is dedicated to ensuring the best possible outcome. This attitude has earned us the trust of thousands of clients, many of whom refer friends and family after experiencing our services.',
              color: 'blue-500',
              textColor: 'orange-700',
            },
            {
              title: 'Transparent & Client-Centric',
              desc: 'By keeping a close watch on visa requirements and embassy updates, we ensure that our students submit strong and compliant applications. This diligence has helped us maintain an impressive track record of student visa approvals, even in complex or time-sensitive cases. We don’t take shortcuts or offer false promises. Instead, we offer honest advice, realistic timelines, and full transparency throughout the process. Our commitment to ethical practices and client satisfaction continues to drive our outstanding results.',
              color: 'green-500',
              textColor: 'green-700',
            },
          ].map((card, idx) => (
            <motion.div
              key={idx}
              className={`bg-white/70 backdrop-blur-lg rounded-xl shadow-lg p-6 border-l-4 border-${card.color} hover:scale-105 transition`}
              custom={idx}
              variants={fadeInUp}
            >
              <h3 className={`text-xl font-bold mb-2 text-${card.textColor}`}>
                {card.title}
              </h3>
              <p className="text-gray-700">{card.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Why Choose Section */}
        <motion.div
          className="space-y-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4 text-orange-600">
              Why Choose VJC Overseas?
            </h2>
            <p className="text-lg text-gray-800">
              Our values and expertise put your success first.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center ml-6 lg:ml-24 gap-24">
            <motion.div className="lg:w-1/3 w-full" variants={fadeInUp}>
              <img
                src="/studyinuk/uksteps.png"
                alt="Why VJC"
                className="w-full"
              />
            </motion.div>
            <motion.div
              className="lg:w-2/3 w-full space-y-6 text-black"
              variants={fadeInUp}
            >
              {[
                "Over a decade of visa consulting excellence.",
                "High approval rate in both immigration and student visa categories.",
                "Country-specific experts for customized guidance.",
                "End-to-end support including application, documentation, and post-visa services.",
                "Transparent processes with no hidden fees.",
              ].map((point, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-4"
                  custom={index}
                  variants={fadeInUp}
                >
                  <FaCheckCircle className="text-orange-500 text-2xl mt-1" />
                  <p className="text-lg">{point}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          className="text-center mt-16 space-y-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h4 className="text-2xl font-bold text-blue-600">
            At VJC Overseas, we don’t just aim for approvals—
          </h4>
          <p className="text-lg text-gray-700">
            we aim for success with integrity. Partner with us and experience why we’re known for having one of the highest success rates in immigration and student visa processing.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default VJCCompetentSection;
