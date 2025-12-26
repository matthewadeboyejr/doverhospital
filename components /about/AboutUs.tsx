import Image from "next/image";
import React from "react";
import { RiHospitalFill } from "react-icons/ri";

const AboutUs = () => {
  return (
    <section className="my-8 sm:my-12 lg:my-16 xl:my-20 mx-4 sm:mx-6 lg:mx-8 xl:mx-20 rounded-2xl sm:rounded-3xl lg:rounded-4xl flex flex-col-reverse lg:flex-row justify-between gap-6 sm:gap-8 lg:gap-12 p-6 sm:p-12 lg:p-16 xl:p-24 about-overlay">
      {/* Text Content - Now takes 60% width on large screens */}
      <div className="flex items-center w-full lg:w-[55%]">
        <div className="space-y-4 sm:space-y-6 w-full">
          <div className="flex md:block justify-center ">
            <p className=" bg-[#EDEEF1] flex justify-center text-[#0E31AC]  text-sm py-2 px-4 rounded-full w-fit">
              Dover Hospital
            </p>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-center md:text-left leading-tight">
            Our Service And Work Efficiency Are The Reasons For Success
          </h2>
          <p className="text-sm sm:text-base leading-relaxed">
            The hospital has well dedicated and highly motivated team who are
            committed to patient health care through quality service delivery. A
            team of consultants both in-house and visiting, medical officers,
            nurses, and laboratory scientists play key roles in the care of the
            patients. They are assisted by administrative personnel, cleaners,
            and round-the-clock security outfits to provide a safe and
            hospitable environment.
          </p>
        </div>
      </div>

      {/* Cards Grid - Now takes 40% width on large screens */}
      <div className="w-full lg:w-[45%] grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
        {/* Card 1 */}
        <div className="flex flex-col gap-3 sm:gap-4">
          <div className="h-[300px] sm:h-[350px] md:h-[400px] relative w-full aspect-square max-w-full overflow-hidden rounded-xl sm:rounded-2xl">
            <Image
              src="/about1.jpg"
              alt="doctor-male"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="rounded-xl sm:rounded-2xl bg-[#0B95C7]/10 p-3 sm:p-4">
            <div className="flex flex-col gap-2 sm:gap-3">
              <span className="text-[#0E31AC] bg-white p-2 rounded-full w-fit">
                <RiHospitalFill size={20} />
              </span>
              <h3 className="text-base sm:text-lg md:text-xl font-semibold">
                Premium Services
              </h3>
              <p className="text-xs sm:text-sm text-[#595959]">
                It has deployed cutting-edge technology to provide affordable
                and quality health services to its teeming clients.
              </p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col gap-3 sm:gap-4">
          <div className="rounded-xl sm:rounded-2xl bg-[#0B95C7]/10 p-3 sm:p-4 order-2 sm:order-1">
            <div className="flex flex-col gap-2 sm:gap-3">
              <span className="text-[#0E31AC] bg-white p-2 rounded-full w-fit">
                <RiHospitalFill size={20} />
              </span>
              <h3 className="text-base sm:text-lg md:text-xl font-semibold">
                Convenient Location
              </h3>
              <p className="text-xs sm:text-sm text-[#595959]">
                It is situated in a serene environment at Wuse Zone 6 in the
                heart of Abuja, about a 4-minute drive from the popular Berger
                roundabout
              </p>
            </div>
          </div>
          <div className="h-[300px] sm:h-[350px] md:h-[400px] relative w-full aspect-square max-w-full overflow-hidden rounded-xl sm:rounded-2xl order-1 sm:order-2">
            <Image
              src="/about2.jpg"
              alt="doctor-female"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
