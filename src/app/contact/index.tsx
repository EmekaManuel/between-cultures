"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
import { Facebook, Linkedin, Mail, Phone } from "lucide-react";
import { useState } from "react";

import { Gift, Handshake, Heart, Users } from "lucide-react";
import Link from "next/link";

export const ContactSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Section Label */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-0.5 bg-[#a8c499]"></div>
              <span className="text-sm font-medium text-gray-600 uppercase tracking-wider">
                Contact Us
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight">
              We&rsquo;d love to hear
              <br />
              from you
            </h1>

            {/* Description */}
            <p className="text-lg text-gray-600 leading-relaxed">
              Whether you&#39;re a parent, educator, ally, or donor, your
              support makes a difference. Join us in creating childcare spaces
              where all cultures are honored and every child feels at home
            </p>
          </div>

          {/* Right Content */}
          <div className="space-y-8">
            {/* Let's Talk Section */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                Let&rsquo;s talk!
              </h2>

              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Phone className="w-5 h-5 text-[#a8c499]" />
                  <a
                    href="tel:+14036186672"
                    className="text-gray-700 hover:text-[#a8c499] transition-colors"
                  >
                    (403) 618-6672
                  </a>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="w-5 h-5 text-[#a8c499]" />
                  <a
                    href="mailto:info@betweencultures.ca"
                    className="text-gray-700 hover:text-[#a8c499] transition-colors"
                  >
                    info@betweencultures.ca
                  </a>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Follow Us
              </h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-[#a8c499] hover:text-white transition-colors duration-200"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-[#a8c499] hover:text-white transition-colors duration-200"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
            {/* Ways to Help Section */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-50 rounded-2xl p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                Ways to Help
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Link href="/volunteer" className="group">
                  <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer">
                    <div className="w-10 h-10 bg-[#a8c499] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Users className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-medium text-gray-900 group-hover:text-[#a8c499] transition-colors">
                      Volunteer with us
                    </span>
                  </div>
                </Link>

                <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer group">
                  <div className="w-10 h-10 bg-[#a097d1] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Handshake className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-medium text-gray-900 group-hover:text-[#a097d1] transition-colors">
                    Become a cultural ambassador
                  </span>
                </div>

                <Link href="/donate" className="group">
                  <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer">
                    <div className="w-10 h-10 bg-[#a8c499] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Heart className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-medium text-gray-900 group-hover:text-[#a8c499] transition-colors">
                      Make a donation
                    </span>
                  </div>
                </Link>

                <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer group">
                  <div className="w-10 h-10 bg-[#a097d1] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Gift className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-medium text-gray-900 group-hover:text-[#a097d1] transition-colors">
                    Partner with us
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission logic here
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#a097d1] to-[#a8c499] py-16 lg:py-24">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
          {/* Form Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Get in Touch
            </h1>
            <p className="text-gray-600 text-lg">
              We&rsquo;d love to hear from you. Send us a message and
              we&rsquo;ll respond as soon as possible.
            </p>
          </div>

          {/* Contact Form */}
          <div className="space-y-6">
            {/* Full Name */}
            <div>
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="John Doe"
                className="w-full px-4 py-3 border-b-2 border-gray-300 bg-transparent focus:border-[#a8c499] focus:outline-none transition-colors duration-200 text-gray-900 placeholder-gray-400"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="johndoe@gmail.com"
                className="w-full px-4 py-3 border-b-2 border-gray-300 bg-transparent focus:border-[#a8c499] focus:outline-none transition-colors duration-200 text-gray-900 placeholder-gray-400"
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={8}
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Type your message here..."
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg bg-transparent focus:border-[#a8c499] focus:outline-none transition-colors duration-200 text-gray-900 placeholder-gray-400 resize-vertical"
              />
            </div>

            {/* Submit Button */}
            <div className="text-center pt-4">
              <button
                onClick={handleSubmit}
                className="bg-gradient-to-r from-[#a8c499] to-[#a097d1] text-white px-12 py-3 rounded-lg font-semibold text-lg hover:from-[#96b085] hover:to-[#8e83bd] transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg"
              >
                Send Message
              </button>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-5 pt-2 border-t border-gray-200 text-center">
            <p className="text-gray-600 mb-4">Or reach us directly at:</p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-sm">
              <a
                href="mailto:info@betweencultures.ca"
                className="text-[#a8c499] hover:text-[#96b085] transition-colors duration-200"
              >
                info@betweencultures.ca
              </a>
              <span className="hidden sm:inline text-gray-400">|</span>
              <a
                href="tel:+14036186672"
                className="text-[#a8c499] hover:text-[#96b085] transition-colors duration-200"
              >
                (403) 618-6672
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
