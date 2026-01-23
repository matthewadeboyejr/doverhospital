"use client";

import Image from "next/image";
import { FiLinkedin, FiTwitter } from "react-icons/fi";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const OurDoctors = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const doctors = [
    {
      id: 1,
      name: "Executive Director",
      image: "/md.JPG",
      description: "Consultant Orthopaedic Surgeon",
      whatsapp: "https://api.whatsapp.com/send?phone=2348037987419",
     
    },
    {
      id: 2,
      name: "Medical Director",
      image: "/ed.JPG",
      description: "Consultant Obsterician/Gynaecologist",
     whatsapp: "https://api.whatsapp.com/send?phone=2348035871438",
    
    },
  ];

  return (
    <section className="  relative py-16 lg:py-24 mb-24 overflow-hidden bg-blue-900">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-0 w-96 h-96 bg-blue-900/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4">
            Meet Our Experts
          </h2>
          <p className="text-base sm:text-lg text-white max-w-2xl mx-auto px-4">
            Leading medical professionals dedicated to excellence in healthcare
          </p>
        </motion.div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {doctors.map((doctor, index) => (
            <motion.div
              key={doctor.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative"
              onMouseEnter={() => setHoveredCard(doctor.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Main Card */}
              <div className="relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                {/* Image Section - Full Width */}
                <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px]">
                  <div className="absolute inset-0 bg-linear-to-t from-black/30 via-black/10 to-transparent z-10"></div>
                  <Image
                    src={doctor.image}
                    alt={doctor.name}
                    fill
                    className={`object-cover transition-transform duration-500 ${
                      hoveredCard === doctor.id ? "scale-105" : "scale-100"
                    }`}
                    priority={index === 0}
                  />

                 
                </div>

                {/* Content Section */}
                <div className="relative p-6 sm:p-8 lg:p-10 bg-white">
                  <div className="space-y-6">
                    {/* Title */}
                    <div className="space-y-3">
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-900 leading-tight">
                        {doctor.name}
                      </h3>
                      <div className="w-16 h-1 bg-blue-900 rounded-full"></div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                      {doctor.description}
                    </p>

                    {/* Social Links */}
                    <div className="flex items-center gap-4 pt-2">
                      {doctor.whatsapp && (
                        <a
                          href={doctor.whatsapp}
                          className="p-3 rounded-full bg-blue-900 hover:bg-blue-900 transition-all duration-300"
                          aria-label="Whatsapp Profile"
                        >
                         <FaWhatsapp className="w-5 h-5 text-white hover:text-indigo-300" />
                        </a>
                      )}
                  
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurDoctors;
