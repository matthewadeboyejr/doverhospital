"use client";

import Image from "next/image";
import Link from "next/link";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { SlBadge } from "react-icons/sl";
import { TbHealthRecognition } from "react-icons/tb";
import { FaArrowRight } from "react-icons/fa";

const Offer = () => {
  const features = [
    {
      id: 1,
      icon: MdOutlineHealthAndSafety,
      title: "HIP/KNEE Replacement",
    },
    {
      id: 2,
      icon: SlBadge,
      title: "Discounted Price",
    },
    {
      id: 3,
      icon: TbHealthRecognition,
      title: "Free Consultation",
    },
  ];

  return (
    <section className="relative py-12 sm:py-16 lg:py-20 xl:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Left Side - Image */}
            <div className="relative order-2 lg:order-1 h-64 sm:h-80 lg:h-full min-h-[400px]">
              <div className="absolute inset-0 bg-linear-to-t from-black/40 via-black/10 to-transparent z-10"></div>
              <Image
                src="/banner2.jpg"
                alt="HIP/KNEE Replacement Offer"
                fill
                className="object-cover"
                priority
              />

              {/* Discount Badge */}
              <div className="absolute top-6 left-6 z-20">
                <div className="bg-blue-900 text-white px-4 py-2 rounded-lg shadow-lg">
                  <div className="text-2xl font-bold">30%</div>
                  <div className="text-xs uppercase tracking-wider">
                    Discount
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-16 order-1 lg:order-2">
              {/* Badge */}
              <div className="mb-6">
                <span className="inline-block bg-blue-50 text-blue-900 text-xs font-semibold py-2 px-4 rounded-full uppercase tracking-wider">
                  Special Offer
                </span>
              </div>

              {/* Heading */}
              <div className="mb-8">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                  HIP/KNEE Replacement
                  <span className="block text-blue-900">Special Pricing</span>
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Take advantage of our limited-time offer on advanced
                  orthopedic procedures.
                </p>
              </div>

              {/* Features List */}
              <div className="space-y-4 mb-10">
                {features.map((feature) => {
                  const Icon = feature.icon;
                  return (
                    <div
                      key={feature.id}
                      className="flex items-center gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors duration-200"
                    >
                      <div className="shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Icon className="text-blue-900 text-xl" />
                      </div>
                      <span className="text-gray-900 font-medium text-lg">
                        {feature.title}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* CTA Button */}
              <Link
                href="/appointment"
                className="group inline-flex items-center justify-center gap-3 bg-blue-900 text-white font-semibold px-8 py-4 rounded-lg hover:bg-blue-800 transition-colors duration-200 w-full sm:w-auto"
              >
                <span>Book Consultation</span>
                <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;
