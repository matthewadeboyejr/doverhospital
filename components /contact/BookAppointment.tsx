"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  FaCalendarAlt,
  FaClock,
  FaUser,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const BookAppointment = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Appointment booked:", formData);
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      service: "",
      message: "",
    });
  };

  const services = [
    "IVF",
    "Orthopedic/Trauma",
    "Joint Replacement",
    "Obstetrics/Gynecology",
    "General Surgery",
    "Pediatrics",
    "Plastic Surgery",
    "ENT",
    "Cardiology",
  ];

  return (
    <section className="relative py-12 sm:py-16 lg:py-20 bg-white overflow-x-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-900 mb-4">
            Book an Appointment
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Schedule your visit with our medical experts. Fill out the form
            below and we'll get back to you to confirm your appointment.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-to-br from-blue-50 to-gray-50 rounded-3xl shadow-xl p-6 sm:p-8 lg:p-10"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name and Email Row */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="appt-name"
                  className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2"
                >
                  <FaUser className="text-blue-900" />
                  Full Name *
                </label>
                <input
                  type="text"
                  id="appt-name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent transition-all bg-white"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label
                  htmlFor="appt-email"
                  className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2"
                >
                  <FaEnvelope className="text-blue-900" />
                  Email Address *
                </label>
                <input
                  type="email"
                  id="appt-email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent transition-all bg-white"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            {/* Phone and Service Row */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="appt-phone"
                  className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2"
                >
                  <FaPhoneAlt className="text-blue-900" />
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="appt-phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent transition-all bg-white"
                  placeholder="+234 123 456 7890"
                />
              </div>

              <div>
                <label
                  htmlFor="appt-service"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Service Required *
                </label>
                <select
                  id="appt-service"
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent transition-all bg-white"
                >
                  <option value="">Select a service</option>
                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Date and Time Row */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="appt-date"
                  className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2"
                >
                  <FaCalendarAlt className="text-blue-900" />
                  Preferred Date *
                </label>
                <input
                  type="date"
                  id="appt-date"
                  name="date"
                  required
                  value={formData.date}
                  onChange={handleChange}
                  min={new Date().toISOString().split("T")[0]}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent transition-all bg-white"
                />
              </div>

              <div>
                <label
                  htmlFor="appt-time"
                  className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2"
                >
                  <FaClock className="text-blue-900" />
                  Preferred Time *
                </label>
                <select
                  id="appt-time"
                  name="time"
                  required
                  value={formData.time}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent transition-all bg-white"
                >
                  <option value="">Select time</option>
                  <option value="08:00">8:00 AM</option>
                  <option value="09:00">9:00 AM</option>
                  <option value="10:00">10:00 AM</option>
                  <option value="11:00">11:00 AM</option>
                  <option value="12:00">12:00 PM</option>
                  <option value="13:00">1:00 PM</option>
                  <option value="14:00">2:00 PM</option>
                  <option value="15:00">3:00 PM</option>
                  <option value="16:00">4:00 PM</option>
                  <option value="17:00">5:00 PM</option>
                </select>
              </div>
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="appt-message"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Additional Notes (Optional)
              </label>
              <textarea
                id="appt-message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent transition-all resize-none bg-white"
                placeholder="Tell us more about your appointment needs..."
              />
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-blue-900 text-white font-semibold px-8 py-4 rounded-lg hover:bg-blue-800 transition-colors duration-300 text-lg"
            >
              Book Appointment
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default BookAppointment;
