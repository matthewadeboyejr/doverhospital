"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

interface Service {
  id: number;
  name: string;
  image: string;
  description?: string;
}

const OurServices = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  const services: Service[] = [
    {
      id: 1,
      name: "IVF",
      image: "/ivf.jpg",
      description: "Advanced fertility treatments",
    },
    {
      id: 2,
      name: "Orthopedic/Trauma",
      image: "/orthopedics.jpg",
      description: "Expert bone and joint care",
    },
    {
      id: 3,
      name: "Joint Replacement",
      image: "/joint-replacementj.jpg",
      description: "Comprehensive joint solutions",
    },
    {
      id: 4,
      name: "Obstetrics/Gynecology",
      image: "/gynecology.jpg",
      description: "Women's health care",
    },
    {
      id: 5,
      name: "General Surgery",
      image: "/general-surgery.jpg",
      description: "Complete surgical services",
    },
    {
      id: 6,
      name: "Pediatrics",
      image: "/pediatrician.jpg",
      description: "Pediatrician",
    },
    {
      id: 7,
      name: "Plastic Surgery",
      image: "/platic-surgery.jpg",
      description: "Plastic Surgeon",
    },
    {
      id: 8,
      name: "ENT",
      image: "/ent.jpeg",
      description: "ENT Specialist",
    },
    {
      id: 9,
      name: "Cardiology",
      image: "/cardiology.jpg",
      description: "Cardiologist",
    },
  ];

  return (
    <section className="relative py-12 sm:py-16 lg:py-20 bg-white overflow-x-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900 mb-4">
            Our Medical Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive healthcare services delivered with excellence and
            compassion
          </p>
        </motion.div>

        {/* Asymmetric Masonry Layout */}
        <div className="space-y-8 sm:space-y-12">
          {services.map((service, index) => {
            const isEven = index % 2 === 0;
            const isLarge = index % 3 === 0;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
                className={`relative group ${
                  isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                } flex flex-col lg:flex items-center gap-6 sm:gap-8 lg:gap-12`}
              >
                {/* Image Section - Alternating Sides with Different Sizes */}
                <motion.div
                  className={`relative ${
                    isLarge ? "lg:w-[55%]" : "lg:w-[45%]"
                  } w-full`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div
                    className={`relative ${
                      isLarge
                        ? "h-[350px] sm:h-[450px] lg:h-[550px]"
                        : "h-[300px] sm:h-[400px] lg:h-[450px]"
                    } rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl`}
                  >
                    <Image
                      src={service.image}
                      alt={service.name}
                      fill
                      className={`object-cover transition-transform duration-700 ${
                        hoveredService === service.id
                          ? "scale-110"
                          : "scale-100"
                      }`}
                      sizes="(max-width: 1024px) 100vw, 45vw"
                    />

                    {/* Dynamic Gradient Overlay */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent"></div>

                    {/* Floating Number Badge */}
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                      className="absolute top-6 left-6 z-20"
                    >
                      <div className="bg-white/95 backdrop-blur-sm w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center shadow-xl">
                        <span className="text-xl sm:text-2xl font-bold text-blue-900">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>
                    </motion.div>

                    {/* Animated Corner Accent */}
                    <motion.div
                      className={`absolute ${
                        isEven ? "top-0 right-0" : "bottom-0 left-0"
                      } w-32 h-32 bg-blue-900/20 rounded-bl-full ${
                        isEven ? "rounded-bl-full" : "rounded-tr-full"
                      }`}
                      animate={{
                        scale: hoveredService === service.id ? 1.2 : 1,
                        opacity: hoveredService === service.id ? 0.4 : 0.2,
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </motion.div>

                {/* Content Section - Alternating Alignment */}
                <motion.div
                  className={`relative ${
                    isLarge ? "lg:w-[45%]" : "lg:w-[55%]"
                  } w-full`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                >
                  <div
                    className={`space-y-4 sm:space-y-6 ${
                      isEven ? "lg:text-left" : "lg:text-right"
                    } text-center lg:text-left`}
                  >
                    {/* Service Name with Animated Underline */}
                    <div>
                      <motion.h3
                        className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-900 mb-3"
                        whileHover={{ x: isEven ? 10 : -10 }}
                        transition={{ duration: 0.3 }}
                      >
                        {service.name}
                      </motion.h3>
                      <motion.div
                        className={`h-1 bg-blue-900 rounded-full ${
                          isEven ? "lg:ml-0" : "lg:mr-0 lg:ml-auto"
                        }`}
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: index * 0.1 + 0.4 }}
                        style={{ maxWidth: "80px" }}
                      />
                    </div>

                    {/* Description */}
                    {service.description && (
                      <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                        {service.description}
                      </p>
                    )}

                    {/* CTA Button with Animation */}
                    <motion.button
                      whileHover={{ x: isEven ? 10 : -10 }}
                      whileTap={{ scale: 0.95 }}
                      className={`group/btn inline-flex items-center gap-3 bg-blue-900 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 ${
                        isEven ? "" : "lg:ml-auto"
                      }`}
                    >
                      <span>Learn More</span>
                      <motion.div
                        animate={{
                          x: hoveredService === service.id ? 5 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <FaArrowRight />
                      </motion.div>
                    </motion.button>
                  </div>

                  {/* Floating Decorative Element */}
                  <motion.div
                    className={`absolute ${
                      isEven ? "-left-6 -bottom-6" : "-right-6 -top-6"
                    } w-24 h-24 bg-blue-900/10 rounded-full blur-2xl -z-10`}
                    animate={{
                      scale: hoveredService === service.id ? 1.5 : 1,
                      opacity: hoveredService === service.id ? 0.5 : 0.3,
                    }}
                    transition={{ duration: 0.5 }}
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
