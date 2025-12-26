import Link from "next/link";
import React from "react";
import { BiMessageSquareDetail } from "react-icons/bi";
import { IoCallOutline, IoLocationOutline } from "react-icons/io5";
import { RiSearch2Line } from "react-icons/ri";

const QuickLinks = () => {
  return (
    <div className="w-full grid grid-cols-2 md:grid-cols-4">
      <div className="bg-blue-900 text-white p-4 sm:p-6 lg:p-7 flex flex-col items-center justify-center gap-2 sm:gap-3 hover:bg-blue-800 transition-colors duration-300 min-h-[120px] sm:min-h-[140px]">
        <span className="text-3xl sm:text-4xl lg:text-5xl">
          <BiMessageSquareDetail />
        </span>
        <span className="text-base sm:text-lg lg:text-xl font-semibold text-center">
          Appointment
        </span>
      </div>
      <div className="bg-blue-400 text-white p-4 sm:p-6 lg:p-7 flex flex-col items-center justify-center gap-2 sm:gap-3 hover:bg-blue-500 transition-colors duration-300 min-h-[120px] sm:min-h-[140px]">
        <span className="text-3xl sm:text-4xl lg:text-5xl">
          <IoLocationOutline />
        </span>
        <span className="text-base sm:text-lg lg:text-xl font-semibold text-center">
          Locations
        </span>
      </div>
      <div className="bg-green-600 text-white p-4 sm:p-6 lg:p-7 flex flex-col items-center justify-center gap-2 sm:gap-3 hover:bg-green-700 transition-colors duration-300 min-h-[120px] sm:min-h-[140px]">
        <span className="text-3xl sm:text-4xl lg:text-5xl">
          <RiSearch2Line />
        </span>
        <span className="text-base sm:text-lg lg:text-xl font-semibold text-center">
          Services
        </span>
      </div>
      <div className="bg-red-600 text-white p-4 sm:p-6 lg:p-7 flex flex-col items-center justify-center gap-2 sm:gap-3 hover:bg-red-700 transition-colors duration-300 min-h-[120px] sm:min-h-[140px]">
        <span className="text-3xl sm:text-4xl lg:text-5xl">
          <IoCallOutline />
        </span>
        <span className="text-base sm:text-lg lg:text-xl font-semibold text-center">
          Emergency
        </span>
      </div>
    </div>
  );
};

export default QuickLinks;
