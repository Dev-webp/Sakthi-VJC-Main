"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import ModalFormWithPopup from "../Popup/Popup"; // Adjust path if needed
import ServicesImageContent from '../Popup/ServicesImageContent'; // Import your custom content
import {
  FaPassport,
  FaPlane,
  FaMoneyBillWave,
  FaClipboardCheck,
  FaUserGraduate,
} from "react-icons/fa";
import Link from "next/link";

const bgImages = [
  "/passportservices.png",
  "/airteckeingservices.png",
  "/forexservies.png",
  "/freeassement.png",
  "/freecouselling.png",
];

const services = [
  {
    icon: FaPassport,
    label: "Passport Services",
    link: "/services/passport-services",
    image: "/passportservices.png",
  },
  {
    icon: FaPlane,
    label: "Air Ticketing",
    link: "/services/air-ticketing",
    image: "/airteckeingservices.png",
  },
  {
    icon: FaMoneyBillWave,
    label: "Forex Services",
    link: "/services/forex-services",
    image: "/forexservies.png",
  },
  {
    icon: FaClipboardCheck,
    label: "Free Assessment",
    link: "/services/free-assessment",
    image: "/freeassement.png",
  },
  {
    icon: FaUserGraduate,
    label: "Free Counselling",
    link: "/services/free-counselling",
    image: "/freecouselling.png",
  },
];

export default function ServicesPage() {
  const [bgIndex, setBgIndex] = useState(0);
   const [isOpen, setIsOpen] = useState(false);
  

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % bgImages.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full overflow-hidden bg-white text-gray-900">
      {/* Background Image */}
      <motion.div
        key={bgIndex}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute top-0 left-0 right-0 bg-cover bg-center z-0 h-[380px] sm:h-[420px] md:h-[500px]"
        style={{ backgroundImage: `url(${bgImages[bgIndex]})` }}
      />
      <div
        className="absolute top-0 left-0 right-0 bg-black bg-opacity-60 z-0 h-[380px] sm:h-[420px] md:h-[500px]"
      />

      {/* Hero Header */}
     <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pt-28 sm:pt-28 pb-10 text-white text-center">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-5xl font-extrabold mb-4"
        >
          Our Services
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="max-w-2xl mx-auto text-lg text-gray-200"
        >
          Empowering your journey with expert services in travel, documentation, and education.
        </motion.p>
       <button
  onClick={() => setIsOpen(true)}
  className="mt-6 px-6 py-3 bg-orange-600 hover:bg-blue-400 text-white rounded-lg shadow-lg font-semibold transition duration-300"
>
  Apply Now
</button>

      </div>

      {/* Services Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="relative z-10 w-full py-12 px-4 sm:px-6 lg:px-12"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-white  mb-8 mt-4 sm:mt-0">
          What We Offer
        </h2>

        <div className="flex flex-wrap justify-center gap-6">
          {services.map((service, index) => {
            const isBgMatch = service.image === bgImages[bgIndex];
            return (
              <Link key={index} href={service.link}>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  className={`flex flex-col items-center justify-start ${
                    isBgMatch ? "bg-blue-300 border-blue-500" : "bg-white border-transparent"
                  } border-blue-300 hover:bg-blue-50 text-gray-800 rounded-2xl px-6 py-5 w-[160px] sm:w-[180px] shadow-md transition-all duration-300 cursor-pointer border-2`}
                >
                 <Image
  src={service.image}
  alt={service.label}
  width={64}
  height={64}
  className="w-16 h-16 object-cover rounded-full mb-1 -mt-4 border-2 border-white"
  unoptimized
/>

                  <service.icon className="text-blue-600 text-2xl mb-2 mt-1" />
                  <span className="text-1sm font-semibold text-center">{service.label}</span>
                </motion.a>
              </Link>
            );
          })}
        </div>
      </motion.section>
      <ModalFormWithPopup
  isOpen={isOpen}
  setIsOpen={setIsOpen}
  customContent={<ServicesImageContent />}
/>

    </div>
    
  );
}
