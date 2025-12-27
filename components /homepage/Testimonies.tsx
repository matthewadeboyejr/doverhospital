"use client";

import React, { useState, useEffect } from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

interface Testimony {
  id: number;
  name: string;
  text: string;
  rating: number;
}

const Testimonies = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonies: Testimony[] = [
    {
      id: 1,
      name: "Mrs Aguele Ngozi",
      text: "I am very excited to review the experience I have had with the Dover Hospital IVF Team mostly because my baby and I are in my home today after 10 years of trying for a baby.",
      rating: 5,
    },
    {
      id: 2,
      name: "Mrs Aguele Ngozi",
      text: "From our very first consultation with Dr Orji, we felt totally at ease with any questions we had answered in details. There was so much uncertain with my progress but I am so grateful for how Dr Orji gave us a possible path through the uncertainty. This made me rest assured and I made up my mind that it was worth quitting my job in the UK to embank on the journey which I now understood.",
      rating: 5,
    },
    {
      id: 3,
      name: "Mrs Aguele Ngozi",
      text: "What was a daunting and nerve-racking journey turned out to be a successful one, thanks to the professionalism and genuine care we received alongside our prayers. . Dr Orji treated me with the incredible expertise. He’s years of experience in fertility was evident because this is the second successful IVF treatment I have had from his wealth of experience.",
      rating: 5,
    },
    {
      id: 4,
      name: "Mrs Aguele Ngozi",
      text: "Having had two successful IVF treatments with Dr Orji, we knew that monitoring during IVF is key and he was on top of the motoring process and has been very forthcoming, no question of mine was a bad one. He was patient with answering all my questions and available to reach both in his office and on a call.",
      rating: 5,
    },
    {
      id: 4,
      name: "Mr. Emeka Onyemenam",
      text: "My dad is 87. He fell off his bed 6 months ago, and it was one week before we realised he may have suffered serious injury. Panic ensued. An x-ray revealed a cracked femur (broken hip), and we were referred to Dover Hospital. Dr. Valentine Ogbu and Dr. Kenechukwu Oji and their team gave us a very warm and calming welcome, and after very candid consultations we settled on a course of treatment. Surgery was quickly scheduled for partial hip replacement. Went brilliantly with no complications. Post-op issues with ulceration of his heel and other ankle were the only glitch, and the doctors guided us through the care for these. I just hope they are around when I get into my 80s too.",
      rating: 5,
    },
    {
      id: 4,
      name: "Mrs Duru P.",
      text: "From the first consultation I had with Dr Oji, I felt so much relieved and I knew deep down in me that God will answer my prayer through him. (Now proudly mummy twins). Coming to Dover Hospital, his team of doctors, matron, nurses, scientists are all wonderful. Dr Oji's humility, calmness and care for women will make you forget your pain. He doesn't compromise with any of his services, he gives the best and also follows up after IVF procedure until the results are achieved.... this is the reason why his success rate is high. Thank you for ensuring that many homes are not broken! God bles",
      rating: 5,
    },
  ];

  // Auto-play slider
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonies.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonies.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonies.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonies.length) % testimonies.length
    );
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-linear-to-br from-blue-50 via-white to-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block mb-4">
            <div className="h-1 w-16 bg-linear-to-r from-blue-900 to-cyan-500 rounded-full mx-auto"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Testimonies
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Hear from our patients about their experiences at Dover Hospital
          </p>
        </div>

        {/* Testimonies Carousel */}
        <div className="relative">
          {/* Main Testimony Card */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden max-w-5xl mx-auto">
            <div className="relative">
              {/* Quote Icon */}
              <div className="absolute top-6 left-6 sm:top-8 sm:left-8 z-10">
                <div className="bg-blue-900/10 rounded-full p-4">
                  <FaQuoteLeft className="text-blue-900 text-2xl sm:text-3xl" />
                </div>
              </div>

              {/* Content */}
              <div className="pt-16 sm:pt-20 pb-8 sm:pb-12 px-6 sm:px-12 lg:px-16">
                {/* Stars */}
                <div className="flex items-center gap-1 mb-6 sm:mb-8 justify-center">
                  {[...Array(testimonies[currentIndex].rating)].map((_, i) => (
                    <FaStar
                      key={i}
                      className="text-yellow-400 text-lg sm:text-xl"
                    />
                  ))}
                </div>

                {/* Testimony Text */}
                <div className="relative">
                  <p className="text-gray-700 text-base sm:text-lg lg:text-xl leading-relaxed text-center italic mb-8 sm:mb-10 min-h-[120px] sm:min-h-[150px] flex items-center">
                    "{testimonies[currentIndex].text}"
                  </p>
                </div>

                {/* Author */}
                <div className="text-center border-t border-gray-100 pt-6 sm:pt-8">
                  <p className="text-gray-900 font-bold text-lg sm:text-xl">
                    {testimonies[currentIndex].name}
                  </p>
                  <p className="text-gray-500 text-sm sm:text-base mt-1">
                    Patient
                  </p>
                </div>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 bg-white hover:bg-blue-900 text-blue-900 hover:text-white rounded-full p-3 sm:p-4 shadow-lg transition-all duration-300 hover:scale-110 z-20"
                aria-label="Previous testimony"
              >
                <IoChevronBack className="text-xl sm:text-2xl" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 bg-white hover:bg-blue-900 text-blue-900 hover:text-white rounded-full p-3 sm:p-4 shadow-lg transition-all duration-300 hover:scale-110 z-20"
                aria-label="Next testimony"
              >
                <IoChevronForward className="text-xl sm:text-2xl" />
              </button>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center items-center gap-3 mt-8 sm:mt-10">
            {testimonies.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? "bg-blue-900 w-10 h-3"
                    : "bg-gray-300 w-3 h-3 hover:bg-gray-400"
                }`}
                aria-label={`Go to testimony ${index + 1}`}
              />
            ))}
          </div>

          {/* Additional Testimonies Grid (Desktop) */}
          <div className="hidden lg:grid grid-cols-2 gap-6 mt-12 max-w-5xl mx-auto">
            {testimonies
              .filter((_, index) => index !== currentIndex)
              .slice(0, 2)
              .map((testimony, idx) => (
                <div
                  key={testimony.id}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100 hover:border-blue-200"
                  onClick={() =>
                    goToSlide(
                      testimonies.findIndex((t) => t.id === testimony.id)
                    )
                  }
                >
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimony.rating)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400 text-sm" />
                    ))}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-4">
                    "{testimony.text.substring(0, 150)}..."
                  </p>
                  <p className="text-gray-900 font-semibold text-sm">
                    {testimony.name}
                  </p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonies;
