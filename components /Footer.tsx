"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaArrowUp,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-white border-t border-gray-200 text-gray-700 relative overflow-x-hidden">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Column 1: Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-14 h-14">
                <Image
                  src="/logo.png"
                  alt="Dover Hospital Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-blue-900">
                  Dover Hospital
                </h3>
              </div>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Committed to providing exceptional healthcare services with
              compassion and excellence.
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4 className="text-blue-900 font-semibold mb-4 text-sm uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-gray-600 hover:text-blue-900 transition-colors text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-600 hover:text-blue-900 transition-colors text-sm"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="text-gray-600 hover:text-blue-900 transition-colors text-sm"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-600 hover:text-blue-900 transition-colors text-sm"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="text-blue-900 font-semibold mb-4 text-sm uppercase tracking-wider">
              Services
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/services"
                  className="text-gray-600 hover:text-blue-900 transition-colors text-sm"
                >
                  IVF
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-600 hover:text-blue-900 transition-colors text-sm"
                >
                  Orthopedics
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-600 hover:text-blue-900 transition-colors text-sm"
                >
                  Cardiology
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-600 hover:text-blue-900 transition-colors text-sm"
                >
                  Pediatrics
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="text-blue-900 font-semibold mb-4 text-sm uppercase tracking-wider">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-blue-900 mt-0.5 shrink-0" />
                <span className="text-gray-600 text-sm">
                  8 Bouake Street, off Sudan Street, Wuse Zone 6, FCT, Abuja
                </span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhoneAlt className="text-blue-900 shrink-0" />
                <div className="flex flex-col">
                  <a
                    href="tel:+2348184369904"
                    className="text-gray-600 hover:text-blue-900 transition-colors text-sm"
                  >
                    +2348184369904
                  </a>
                  <a
                    href="tel:+2348134354283"
                    className="text-gray-600 hover:text-blue-900 transition-colors text-sm"
                  >
                    +23408134354283
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-blue-900 shrink-0" />
                <a
                  href="mailto:info@doverhospital.com"
                  className="text-gray-600 hover:text-blue-900 transition-colors text-sm"
                >
                  info@doverhospital.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="flex flex-col items-center md:items-start gap-2">
              <p className="text-gray-500 text-sm">
                © {currentYear} Dover Hospital. All rights reserved.
              </p>
              <p className="text-gray-400 text-xs">
                Powered by{" "}
                <a
                  href="https://www.jubileesys.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-900 hover:text-blue-700 transition-colors font-medium"
                >
                  Jubilee Systems Ltd
                </a>
              </p>
            </div>

            {/* Social Media */}
            <div className="flex items-center gap-4">
              {/* <Link
                href="#"
                className="text-gray-400 hover:text-blue-900 transition-colors"
                aria-label="Facebook"
              >
                <FaFacebookF className="text-xl" />
              </Link> */}
              <Link
                href="#"
                className="text-gray-400 hover:text-blue-900 transition-colors"
                aria-label="Twitter"
              >
                <FaWhatsapp className=" text-xl" />
              </Link>
              {/* <Link
                href="#"
                className="text-gray-400 hover:text-blue-900 transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram className="text-xl" />
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-blue-900 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn className="text-xl" />
              </Link> */}
            </div>
          </div>
        </div>
      </div>

      {/* Floating Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-blue-900 hover:bg-blue-800 text-white flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
        aria-label="Scroll to top"
      >
        <FaArrowUp className="text-lg" />
      </button>
    </footer>
  );
};

export default Footer;
