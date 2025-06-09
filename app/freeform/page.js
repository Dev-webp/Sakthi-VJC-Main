'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const FreeConsultationModal = () => {
  return (
    <div className="relative min-h-screen bg-blue-400 flex items-center justify-center px-4">
      {/* 3D Character */}
      <motion.div
        className="absolute bottom-0 left-0 w-40 md:w-52"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Image
          src="/3d-character.png" // Replace this with your character image
          alt="3D Person"
          width={300}
          height={300}
          className="w-full h-auto"
        />
      </motion.div>

      {/* Modal */}
      <motion.div
        className="bg-[#0c1a3c] text-white p-8 md:p-10 rounded-2xl shadow-xl max-w-md w-full z-10"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Book Free Consultation</h1>
          <button className="text-white text-xl hover:text-red-500">×</button>
        </div>
        <p className="mb-6 text-base">
          Need assistance or information? Send us a message to our team now.
        </p>
        <button className="bg-purple-500 w-full py-3 rounded-lg font-semibold hover:bg-purple-600 transition">
          Start
        </button>
        <p className="text-xs mt-4 text-right text-gray-400">
          Powered by Visme Forms
        </p>
      </motion.div>
    </div>
  );
};

export default FreeConsultationModal;
