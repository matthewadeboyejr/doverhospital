"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaChevronLeft,
  FaChevronRight,
  FaPlay,
  FaWhatsapp,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

interface Slide {
  id: number;
  headline: string;
  description: string;
  image: string;
  buttonText: string;
  tagline?: string;
}

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides: Slide[] = [
    {
      id: 1,
      headline: "Emerge to incredible possibilities.",
      description:
        "We are committed to maintaining a culture of moral rectitude, respect, and adherence to the law, ensuring that our officers and stakeholders can serve with confidence and security.",
      image: "/heroimg.JPG",
      buttonText: "Make Appointment",
      tagline: "Look Better. Breathe Better. Sleep Better.",
    },
    {
      id: 2,
      headline: "Advanced medical technology. Expert care.",
      description:
        "A step closer to your dream career in the Nigeria Police Force.",
      image: "/heroimg1.JPG",
      buttonText: "Make Appointment",
      tagline: "Advanced Care. Expert Team. Better Health.",
    },
    {
      id: 3,
      headline: "Your health. Our priority. Always.",
      description:
        "Just a few clicks away from your dream career in the Nigeria Police Force.",
      image: "/heroimg2.JPG",
      buttonText: "Make Appointment",
      tagline: "Compassionate Care. Modern Facilities.",
    },
    {
      id: 4,
      headline: "Trusted healthcare. Compassionate service.",
      description:
        "Trust and integrity are at the core of our operations, built on a foundation of professionalism and ethical practices that guide our interactions with all stakeholders.",
      image: "/heroimg3.JPG",
      buttonText: "Make Appointment",
      tagline: "Excellence in Healthcare. Always.",
    },
  ];

  // Auto-play slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const currentSlideData = slides[currentSlide];

  return (
    <section className="relative bg-white min-h-screen flex flex-col lg:flex-row overflow-x-hidden">
      {/* Left Content Panel */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 sm:py-12 md:py-16 lg:py-20 relative min-h-[60vh] lg:min-h-screen">
        {/* Slide Number - Large and Subtle */}
        <div className="absolute top-4 sm:top-6 lg:top-8 left-4 sm:left-6 lg:left-12 text-blue-300 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold opacity-30 -z-10">
          {String(currentSlide + 1).padStart(2, "0")}
        </div>

        {/* Main Content */}
        <div className="relative z-10 space-y-4 sm:space-y-6 md:space-y-8 mt-8 sm:mt-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-blue-900 leading-tight">
                {currentSlideData.headline}
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed max-w-2xl mt-4 sm:mt-6">
                {currentSlideData.description}
              </p>
              <div className="flex justify-center lg:justify-start pt-2 sm:pt-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/contact"
                    className="inline-block bg-linear-to-r from-blue-400 to-blue-500 text-white font-semibold text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:from-blue-500 hover:to-blue-600 transition-all duration-300 shadow-lg"
                  >
                    {currentSlideData.buttonText}
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Right Image Panel */}
      <div className="hidden lg:block w-1/2 relative bg-blue-100 min-h-screen overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6 }}
            className="relative w-full h-full"
          >
            <Image
              src={currentSlideData.image}
              alt={currentSlideData.headline}
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </AnimatePresence>

        {/* Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-16 h-16 xl:w-20 xl:h-20 rounded-full bg-white/90 hover:bg-white transition-colors flex items-center justify-center shadow-xl pointer-events-auto"
          >
            <FaPlay className="text-blue-500 text-xl xl:text-2xl ml-1" />
          </motion.button>
        </div>

        {/* Bottom Slider Overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-sm">
          <div className="flex items-center justify-between px-4 xl:px-6 py-3 xl:py-4">
            <button
              onClick={prevSlide}
              className="text-white hover:text-blue-400 transition-colors p-1"
              aria-label="Previous slide"
            >
              <FaChevronLeft className="w-4 xl:w-5 h-4 xl:h-5" />
            </button>

            <div className="flex-1 px-4 xl:px-6 text-center">
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentSlide}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-white text-xs xl:text-sm font-medium"
                >
                  {currentSlideData.tagline || "Quality Healthcare Services"}
                </motion.p>
              </AnimatePresence>
            </div>

            <div className="flex items-center gap-3 xl:gap-4">
              <span className="text-white text-2xl xl:text-3xl font-bold">
                {String(currentSlide + 1).padStart(2, "0")}
              </span>
              <button
                onClick={nextSlide}
                className="text-white hover:text-blue-400 transition-colors p-1"
                aria-label="Next slide"
              >
                <FaChevronRight className="w-4 xl:w-5 h-4 xl:h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile/Tablet Image */}
      <div className="lg:hidden w-full h-[40vh] sm:h-[50vh] md:h-[60vh] relative bg-blue-100 order-first">
        <Image
          src={currentSlideData.image}
          alt={currentSlideData.headline}
          fill
          className="object-cover"
          priority
        />

        {/* Play Button Overlay - Mobile */}
        <div className="absolute inset-0 flex items-center justify-center">
          <button className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/90 hover:bg-white transition-colors flex items-center justify-center shadow-xl">
            <FaPlay className="text-blue-500 text-xl ml-1" />
          </button>
        </div>

        {/* Mobile Slider Controls */}
        <div className="absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-sm">
          <div className="flex items-center justify-between px-4 py-3">
            <button
              onClick={prevSlide}
              className="text-white hover:text-blue-400 transition-colors p-1"
              aria-label="Previous slide"
            >
              <FaChevronLeft className="w-4 h-4" />
            </button>
            <div className="flex-1 px-4 text-center">
              <p className="text-white text-xs font-medium truncate">
                {currentSlideData.tagline || "Quality Healthcare Services"}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-white text-xl font-bold">
                {String(currentSlide + 1).padStart(2, "0")}
              </span>
              <button
                onClick={nextSlide}
                className="text-white hover:text-blue-400 transition-colors p-1"
                aria-label="Next slide"
              >
                <FaChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Right Sidebar - Social Media (Desktop Only) */}
      <div className="hidden xl:flex fixed right-0 top-1/2 -translate-y-1/2 z-30">
        <div className="flex flex-col items-center justify-center gap-10 bg-[#23CE63] backdrop-blur-sm px-4 py-12 rounded-l-lg shadow-lg">
          <Link
            href="#"
            className=" flex items-center gap-2 text-white hover:text-blue-400 transition-colors text-[11px] font-semibold tracking-wider"
            style={{
              writingMode: "vertical-rl",
              textOrientation: "mixed",
              transform: "rotate(180deg)",
            }}
          >
            <FaWhatsapp className="text-white text-xl" />
            WHATSAPP
          </Link>
          {/*   <Link
            href="#"
            className="text-gray-400 hover:text-blue-400 transition-colors text-[11px] font-semibold tracking-wider"
            style={{
              writingMode: "vertical-rl",
              textOrientation: "mixed",
              transform: "rotate(180deg)",
            }}
          >
            INSTAGRAM
          </Link> */}
          {/*  <Link
            href="#"
            className="text-gray-400 hover:text-blue-400 transition-colors text-[11px] font-semibold tracking-wider"
            style={{
              writingMode: "vertical-rl",
              textOrientation: "mixed",
              transform: "rotate(180deg)",
            }}
          >
            FACEBOOK
          </Link> */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
