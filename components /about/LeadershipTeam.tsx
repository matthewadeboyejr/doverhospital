"use client";

import { motion, AnimatePresence, useInView } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { FiLinkedin, FiTwitter, FiArrowUpRight, FiX } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

interface Leader {
  id: number;
  name: string;
  role: string;
  tagline: string;
  highlight: string;
  img: string;
  accentColor: string;
  social: {
    whatsapp: string;
  };
  fullBio: string[];
}

const LeadershipTeam = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [selectedLeader, setSelectedLeader] = useState<Leader | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const leaders: Leader[] = [
    {
      id: 1,
      name: "DR. KENECHUKWU SAMUEL OJI, MBBS, FWACS, FMCOG",
      role: "CONSULTANT OBSTERICIAN AND GYNAECOLOGIST.",
      tagline: "He has a passion for caring for women",
      highlight: "Consultant Obstetrician and Gynaecologist",
      img: "/ed.JPG",
      accentColor: "rgba(99, 102, 241, 0.3)",
      social: {
        whatsapp: "https://api.whatsapp.com/send?phone=2348035871438",
      },
      fullBio: [
        "Dr Oji Kenechukwu Samuel is a co-founder and Medical Director of Dover Hospital Abuja. He is an Obstetrician/Gynaecologist a fellow of both West African College of Surgeons and National College of Gynaecologists.",
        "He is an IVF specialist. He was the Head of both Obs/Gynae Dept and IVF Dept of NISA Garki Hospital for several years.",
        "He is at the verge of completing MBA at South Wales University. He has attended several local and international conferences in IVF and Minimal Access Surgery. He has a passion for caring for women.",
      ],
    },
    {
      id: 2,
      name: "DR. VALENTINE OGOCHUKWU OGBU, MBBS, FWACS, FMCOrth",
      role: "CONSULTANT ORTHOPAEDIC SURGEON.",
      tagline: "Proficient in the operative management ",
      highlight: "Consultant Orthopaedic Surgeon",
      img: "/md.JPG",
      accentColor: "rgba(236, 72, 153, 0.3)",
      social: {
      whatsapp: "https://api.whatsapp.com/send?phone=2348037987419",
     
      },
      fullBio: [
        "Dr. Valentine Ogochukwu Ogbu is a Consultant Orthopaedic Surgeon with extensive experience in musculoskeletal disorders.",
        "He is a fellow of both West African College of Surgeons (FWACS) and has specialized training in Orthopaedic surgery (FMCOrth).",
        "With years of clinical practice, he has attained proficiency in the operative management of limb fractures, paediatric fractures, and deformity corrections.",
        "He is committed to providing comprehensive orthopaedic care and advancing surgical techniques for better patient outcomes.",
      ],
    },
  ];

  const openModal = (leader: Leader) => {
    setSelectedLeader(leader);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedLeader(null);
    document.body.style.overflow = "auto";
  };

  // Clean up on unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <section className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-[#0a0a0a] overflow-x-hidden">
      <div ref={ref} className="mb-16 text-center mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4">
          Meet Our Experts
        </h2>
        <p className="text-base sm:text-lg text-white max-w-2xl mx-auto px-4">
          Leading medical professionals dedicated to excellence in healthcare
        </p>
      </div>
      {/* Background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-linear-to-br from-blue-900/10 via-purple-900/10 to-pink-900/10"></div>
      </div>

      <div className=" mx-auto relative z-10">
        {/* Leader cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {leaders.map((leader) => (
            <motion.div
              key={leader.id}
              initial={{ opacity: 0, x: leader.id % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: leader.id * 0.2 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div
                className="rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 backdrop-blur-lg"
                style={{
                  background: `linear-gradient(135deg, rgba(255,255,255,0.05) 0%, ${leader.accentColor} 100%)`,
                  boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.36)",
                }}
              >
                <div className="flex flex-col md:flex-row h-full">
                  <div className="relative w-full md:w-2/5 h-64 sm:h-80 md:h-auto">
                    <Image
                      src={leader.img}
                      alt={leader.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 40vw"
                    />
                    <div
                      className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent"
                      style={{ mixBlendMode: "multiply" }}
                    />
                    <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6">
                      <span className="inline-block px-3 py-1 text-xs font-medium text-white bg-black/50 rounded-full backdrop-blur-sm">
                        {leader.highlight}
                      </span>
                    </div>
                  </div>

                  <div className="w-full md:w-3/5 p-6 sm:p-8 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 leading-tight">
                        {leader.name}
                      </h3>
                      <p className="text-indigo-300 font-medium mb-2 sm:mb-3 text-sm sm:text-base">
                        {leader.role}
                      </p>
                      <p className="text-white/80 mb-4 sm:mb-6 text-sm sm:text-base">
                        {leader.tagline}
                      </p>

                      <button
                        onClick={() => openModal(leader)}
                        className="flex items-center text-pink-300 group-hover:text-white transition-colors text-sm sm:text-base"
                      >
                        <span className="mr-2">Full profile</span>
                        <FiArrowUpRight className="transition-transform group-hover:rotate-45" />
                      </button>
                    </div>

                    <div className="flex space-x-4 mt-6 sm:mt-8">
                      <a
                        href={leader.social.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
                        aria-label="LinkedIn Profile"
                      >
                        <FaWhatsapp className="w-5 h-5 text-white/80 hover:text-indigo-300" />
                      </a>
                      
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="absolute -z-10 w-48 sm:w-64 h-48 sm:h-64 rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity"
                style={{
                  backgroundColor: leader.accentColor.replace("0.3", "1"),
                  top: "50%",
                  left: "30%",
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {isModalOpen && selectedLeader && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              onClick={closeModal}
            >
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              />

              {/* Modal content */}
              <motion.div
                initial={{ scale: 0.9, y: 50 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 50 }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-7xl max-h-[90vh] overflow-y-auto rounded-2xl border border-white/10"
                style={{
                  background: `linear-gradient(135deg, rgba(255,255,255,0.05) 0%, ${selectedLeader.accentColor} 100%)`,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
                }}
              >
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
                  aria-label="Close modal"
                >
                  <FiX className="w-5 h-5 text-white" />
                </button>

                <div className="flex flex-col lg:flex-row">
                  <div className="relative w-full lg:w-1/2 h-64 sm:h-80 lg:h-auto">
                    <Image
                      src={selectedLeader.img}
                      alt={selectedLeader.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent" />
                    <div className="absolute bottom-6 sm:bottom-8 left-6 sm:left-8">
                      <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
                        {selectedLeader.name}
                      </h3>
                      <p className="text-indigo-300 font-medium text-sm sm:text-base">
                        {selectedLeader.role}
                      </p>
                      <p className="text-white/80 mt-2 text-sm sm:text-base">
                        {selectedLeader.tagline}
                      </p>
                    </div>
                  </div>

                  <div className="w-full lg:w-3/5 p-6 sm:p-8 lg:p-12">
                    <div className="prose prose-invert max-w-none">
                      {selectedLeader.fullBio.map((paragraph, index) => (
                        <p
                          key={index}
                          className="mb-4 text-white/90 text-sm sm:text-base leading-relaxed"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>

                    <div className="mt-8 sm:mt-12 flex flex-wrap gap-4">
                      <a
                        href={`https://wa.me/2348184369904`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors text-sm sm:text-base text-white"
                      >
                        <FaWhatsapp className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                        <span>Message</span>
                      </a>
                      {/*  <a
                        href={selectedLeader.social.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors text-sm sm:text-base text-white"
                      >
                        <FiTwitter className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                        <span>Follow</span>
                      </a> */}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* CTA */}
        {/*  <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12 sm:mt-16 lg:mt-20"
        >
          <button className="px-6 sm:px-8 py-3 sm:py-4 bg-linear-to-r from-indigo-500 to-pink-500 text-white font-medium rounded-full shadow-xl hover:shadow-indigo-500/30 transition-all hover:scale-[1.02] text-sm sm:text-base">
            Explore Our Culture
          </button>
        </motion.div> */}
      </div>
    </section>
  );
};

export default LeadershipTeam;
