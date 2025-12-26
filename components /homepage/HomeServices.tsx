import React from "react";
import {
  FaBaby,
  FaBone,
  FaUserMd,
  FaFemale,
  FaStethoscope,
  FaChild,
  FaHeartbeat,
  FaHospitalAlt,
  FaHeart,
} from "react-icons/fa";

const HomeServices = () => {
  const services = [
    {
      name: "IVF",
      icon: FaBaby,
    },
    {
      name: "Orthopedic/Trauma",
      icon: FaBone,
    },
    {
      name: "Joint Replacement",
      icon: FaUserMd,
    },
    {
      name: "Obstetrics/Gynecology",
      icon: FaFemale,
    },
    {
      name: "General Surgery",
      icon: FaStethoscope,
    },
    {
      name: "Pediatrics",
      icon: FaChild,
    },
    {
      name: "Plastic Surgery",
      icon: FaHospitalAlt,
    },
    {
      name: "ENT",
      icon: FaHeartbeat,
    },
    {
      name: "Cardiology",
      icon: FaHeart,
    },
  ];

  return (
    <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-6 sm:p-12 lg:p-16 xl:p-24 service-overlay rounded-b-3xl sm:rounded-b-4xl">
      <div className="rounded-lg p-4 sm:p-6 lg:p-7 gap-2 md:col-span-3 col-span-2 flex items-center">
        <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
          Explore Our Caring & Premium Medical Services
        </span>
      </div>
      {services.map((service, index) => {
        const Icon = service.icon;
        return (
          <div
            key={index}
            className="rounded-lg hover:bg-blue-500 transition-all duration-300 bg-blue-900 text-white p-4 sm:p-5 lg:p-7 flex flex-col items-center justify-center gap-2 sm:gap-3 min-h-[120px] sm:min-h-[140px]"
          >
            <span className="text-3xl sm:text-4xl lg:text-5xl">
              <Icon />
            </span>
            <span className="text-sm sm:text-base lg:text-xl font-semibold text-center">
              {service.name}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default HomeServices;
