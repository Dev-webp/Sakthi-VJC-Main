"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Form from "./Form";
import Content from "./Content";
import ModalFormWithPopup from "../Popup/Popup"; // adjust path if needed
import MigrateImageContent from "../Popup/MigrateImageContent"
import Link from "next/link";
const textContainerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const titleVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6 },
  },
};

const descriptionVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, delay: 0.2 },
  },
};

const countriesData = [
  { name: "Migrate to Germany", path: "/migrate/germany" },
  { name: "Migrate to Canada", path: "/migrate/canada" },
  { name: "Migrate to United States", path: "/migrate/united-states" },
  { name: "Migrate to Australia", path: "/migrate/australia" },
  { name: "Migrate to United Kingdom", path: "/migrate/united-kingdom" },
  { name: "Migrate to New Zealand", path: "/migrate/new-zealand" },
  { name: "Migrate to South Africa", path: "/migrate/south-africa" },
  { name: "Migrate to Hong Kong", path: "/migrate/hong-kong" },
  { name: "Migrate to Denmark", path: "/migrate/denmark" },
  { name: "Migrate to UAE", path: "/migrate/uae" },
];

const Migrate = () => {
   const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const [background, setBackground] = useState("/migratepageimg.avif");

  const handleCountryClick = (path, image) => {
    setBackground(image || "/migratepageimg.avif");
    router.push(path);
  };

  return (
    <>
      {/* 🔷 Hero Section with Background Image */}
      <section
        className="bg-cover bg-center lg:h-[740px] transition-all duration-500 pt-10 pb-24"
        style={{
          backgroundImage: `url(${background})`,
        }}
      >
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="relative flex flex-col lg:flex-row items-center justify-between p-10 gap-10">
            {/* Text Section */}
            <motion.div
              className="w-full lg:w-1/2 lg:ml-16"
              style={{ marginTop: "-2rem" }}
              variants={textContainerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.h1
                className="font-semibold uppercase leading-tight text-teal-950 text-3xl sm:text-4xl md:text-5xl lg:text-[3.50rem] mt-20 sm:mt-0"
                style={{ fontFamily: "Times New Roman, serif" }}
                variants={titleVariants}
              >
                Migrate to Your Dream Country
              </motion.h1>

              <motion.p
                className="flex text-black tracking-tight text-left md:font-medium max-w-xl lg:max-w-lg mt-2"
                style={{
                  fontWeight: "bolder",
                  fontFamily: "Times New Roman, serif",
                }}
                variants={descriptionVariants}
              >
                Discover endless opportunities with our expert immigration
                services. Whether you're looking to study or work abroad, we
                help make your dreams a reality.
              </motion.p>
            </motion.div>

            {/* Form Section */}
            <div className="w-full lg:w-1/2 mt-10 lg:mt-0 flex justify-center lg:justify-end">
              <Form />
            </div>
          </div>
        </div>
      </section>

      {/* 🔶 Content Section with White Background */}
      <section className="bg-white py-16">
        <div className="max-w-screen-xl mx-auto px-4">
          {/* Title */}
          <div className="flex flex-col items-center lg:items-start text-center mb-8">
           <div className="flex justify-center flex-col items-center">
            <h2 className="text-3xl  font-bold text-gray-800 bg-gradient-to-r from-orange-500 to-black bg-clip-text text-transparent text-center md:text-left mb-4">
              <span className="block ">Migrate to Your Dream Country</span>
              <span className="block"></span>
            </h2>

            {/* Apply Now Button directly below heading */}
          
             <button
              type="button"
              className="relative overflow-hidden bg-gradient-to-r from-sky-400 to-orange-500 text-white font-semibold py-2 px-6 rounded-full shadow-md hover:shadow-2xl hover:scale-105 transition-transform duration-300 ease-in-out"
              onClick={() => setIsOpen(true)}
            >
              <span className="relative z-10">Apply Now</span>
              <span className="absolute top-0 left-[-100%] w-full h-full bg-white/30 animate-shine pointer-events-none" />
            </button>
           </div>
          </div>

          {/* Buttons + Content */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
            {/* Country Buttons */}
            <div className="w-full md:w-1/3">
              {countriesData.map(({ name, path, image }) => (
                <div key={path} className="mb-4 w-full flex justify-center">
                  <Link
  href={path}
  className="w-[350px] flex items-center justify-between text-lg font-semibold bg-white text-black border border-orange-500 px-6 py-4 rounded-xl transition duration-300 
    shadow-lg shadow-orange-200 hover:shadow-2xl hover:shadow-orange-400 
    hover:bg-orange-500 hover:text-white transform hover:scale-105"
>
  {name}
  <ArrowRight className="w-6 h-6 transition duration-300" />
</Link>

                </div>
              ))}
            </div>

            {/* Dynamic Content */}
            <div className="w-full md:w-2/3 overflow-y-auto max-h-[900px] bg-white p-6 rounded-xl shadow-md border mt-4 lg:-mt-32 border-gray-200">
              <Content />
            </div>
          </div>
        </div>
      </section>
       <ModalFormWithPopup isOpen={isOpen} setIsOpen={setIsOpen} customContent={<MigrateImageContent />}/>
    </>
  );
};

export default Migrate;
