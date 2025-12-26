"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaClock, FaUser } from "react-icons/fa";

const MissionVision = () => {
  const missionVision = [
    {
      id: 1,
      title: "Our Team",
      description:
        "The hospital has well dedicated and highly motivated team who are committed to patient health care through quality service delivery. A team of consultants both in-house and visiting, medical officers, nurses, and laboratory scientists play key roles in the care of the patients. They are assisted by administrative personnel, cleaners, and round-the-clock security outfits to provide a safe and hospitable environment.",
    },
    {
      id: 2,
      title: "Vision",
      description: "To make excellent health care a tradition.",
    },
    {
      id: 3,
      title: "Our Values",
      description: "Service, Empathy, Quality, Teamwork, Integrity",
    },
  ];

  return (
    <section className="shadow-lg overflow-hidden py-8 sm:py-12 lg:py-16 px-4 sm:px-6  my-8 sm:my-10 lg:my-12">
      <div className=" ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {missionVision.map((article) => (
            <div
              key={article.id}
              className="h-full space-y-4  bg-blue-500  group text-white p-6 sm:p-8 lg:p-10 hover:bg-white hover:text-black transition-all duration-300 hover:shadow-xl"
            >
              {/* Article Image */}
              <div className="relative w-full   rounded-lg overflow-hidden">
                <h2 className="text-lg sm:text-xl lg:text-2xl font-bold leading-tight">
                  {article.title}
                </h2>
              </div>

              <div className="flex flex-col gap-4 justify-between">
                <p className=" text-sm sm:text-base leading-relaxed">
                  {article.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
