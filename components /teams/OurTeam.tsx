"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FiLinkedin, FiTwitter, FiMail } from "react-icons/fi";

const OurTeam = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const doctors = [
    {
      id: 1,
      name: "Dr. Bolarinwa Akinola",
      title: "Visiting Consultant Orthopaedic and Arthroplasty Surgeon",
      qualifications: "FRCS (Orth/Trauma), MPH, MBSBS",
      image: "/profilePlaceholder.jpg", // Placeholder
    },
    {
      id: 2,
      name: "Dr. Oikeh Ojeamen",
      title: "Visiting Consultant Plastic Surgeon",
      qualifications: "FWACS, MBBS",
      image: "/profilePlaceholder.jpg", // Placeholder
    },
    {
      id: 3,
      name: "Dr. Dades Obed",
      title: "Visiting General and Laparoscopic Surgeon",
      qualifications: "MBBS, FMCS, FMAS, FICS",
      image: "/profilePlaceholder.jpg", // Placeholder
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section className="relative py-16 lg:py-24 bg-linear-to-b from-gray-50 to-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-50/20 rounded-full blur-3xl"></div>
      </div>

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        ></motion.div>

        {/* Doctors Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
        >
          {doctors.map((doctor, index) => (
            <motion.div
              key={doctor.id}
              variants={cardVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="group relative"
            >
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 h-full flex flex-col">
                {/* Image Section */}
                <div className="relative w-full h-80 overflow-hidden bg-linear-to-br from-blue-50 to-blue-100">
                  <motion.div
                    initial={{ scale: 1.1 }}
                    whileHover={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="relative w-full h-full"
                  >
                    <Image
                      src={doctor.image}
                      alt={doctor.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </motion.div>

                  {/* Animated overlay on hover */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute bottom-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 z-10"
                  >
                    <div className="flex gap-3">
                      <motion.a
                        href="#"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-3 bg-white rounded-full shadow-lg hover:bg-blue-600 transition-colors"
                        aria-label="LinkedIn"
                      >
                        <FiLinkedin className="w-5 h-5 text-gray-700 group-hover:text-white" />
                      </motion.a>
                      <motion.a
                        href="#"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-3 bg-white rounded-full shadow-lg hover:bg-blue-400 transition-colors"
                        aria-label="Twitter"
                      >
                        <FiTwitter className="w-5 h-5 text-gray-700 group-hover:text-white" />
                      </motion.a>
                      <motion.a
                        href="#"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-3 bg-white rounded-full shadow-lg hover:bg-blue-500 transition-colors"
                        aria-label="Email"
                      >
                        <FiMail className="w-5 h-5 text-gray-700 group-hover:text-white" />
                      </motion.a>
                    </div>
                  </motion.div>
                </div>

                {/* Content Section */}
                <div className="relative p-6 sm:p-8 flex-1 flex flex-col">
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.4 + index * 0.15 }}
                    className="flex-1 space-y-4"
                  >
                    {/* Name */}
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {doctor.name}
                      </h3>
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        transition={{
                          delay: 0.5 + index * 0.15,
                          duration: 0.5,
                        }}
                        className="h-0.5 bg-linear-to-r from-blue-600 to-blue-400 rounded-full"
                      ></motion.div>
                    </div>

                    {/* Title */}
                    <p className="text-base text-blue-600 font-semibold leading-relaxed">
                      {doctor.title}
                    </p>

                    {/* Qualifications */}
                    <div className="pt-2">
                      <p className="text-sm text-gray-600 leading-relaxed">
                        <span className="font-semibold text-gray-700">
                          Qualifications:
                        </span>{" "}
                        {doctor.qualifications}
                      </p>
                    </div>
                  </motion.div>

                  {/* Bottom decoration */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ delay: 0.6 + index * 0.15, duration: 0.5 }}
                    className="mt-6 h-1 bg-linear-to-r from-transparent via-blue-200 to-transparent rounded-full"
                  ></motion.div>
                </div>
              </div>

              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl bg-linear-to-r from-blue-400 to-blue-600 opacity-0 group-hover:opacity-10 blur-xl -z-10 transition-opacity duration-500"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom decorative element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={
            isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
          }
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 text-center"
        ></motion.div>
      </div>
    </section>
  );
};

export default OurTeam;
