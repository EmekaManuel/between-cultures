"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
import { Facebook, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import { useState } from "react";

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
              Have any question in mind or want to enquire? Please feel free to
              contact us through the form or the following details.
            </p>

            {/* Contact Form */}
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
                  <span className="text-gray-700">+1 (647) 123-4567</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="w-5 h-5 text-[#a8c499]" />
                  <span className="text-gray-700">
                    hello@betweencultures.ca
                  </span>
                </div>
              </div>
            </div>

            {/* Head Office */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Head Office
              </h3>
              <div className="flex items-start space-x-4">
                <MapPin className="w-5 h-5 text-[#a8c499] mt-1" />
                <div className="text-gray-700">
                  <p>123 Diversity Lane, Toronto,</p>
                  <p>Ontario, Canada M5V 3A8</p>
                </div>
              </div>
            </div>

            {/* Branch Office */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Community Hub
              </h3>
              <div className="flex items-start space-x-4">
                <MapPin className="w-5 h-5 text-[#a8c499] mt-1" />
                <div className="text-gray-700">
                  <p>456 Heritage Way, Mississauga,</p>
                  <p>Ontario, Canada L5B 1C2</p>
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
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-[#a8c499] hover:text-white transition-colors duration-200"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Hours of Operation */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Hours of Operation
              </h3>
              <div className="space-y-2 text-gray-700">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
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
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
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
            {/* Name Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="John"
                  className="w-full px-4 py-3 border-b-2 border-gray-300 bg-transparent focus:border-[#a8c499] focus:outline-none transition-colors duration-200 text-gray-900 placeholder-gray-400"
                />
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder="Doe"
                  className="w-full px-4 py-3 border-b-2 border-gray-300 bg-transparent focus:border-[#a8c499] focus:outline-none transition-colors duration-200 text-gray-900 placeholder-gray-400"
                />
              </div>
            </div>

            {/* Email and Subject */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email Id
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
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="How can we help?"
                  className="w-full px-4 py-3 border-b-2 border-gray-300 bg-transparent focus:border-[#a8c499] focus:outline-none transition-colors duration-200 text-gray-900 placeholder-gray-400"
                />
              </div>
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
                rows={6}
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Type your Message"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg bg-transparent focus:border-[#a8c499] focus:outline-none transition-colors duration-200 text-gray-900 placeholder-gray-400 resize-vertical"
              />
            </div>

            {/* Submit Button */}
            <div className="text-center pt-4">
              <button
                onClick={handleSubmit}
                className="bg-gradient-to-r from-[#a8c499] to-[#a097d1] text-white px-12 py-3 rounded-lg font-semibold text-lg hover:from-[#96b085] hover:to-[#8e83bd] transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg"
              >
                Send message
              </button>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-12 pt-8 border-t border-gray-200 text-center">
            <p className="text-gray-600 mb-4">Or reach us directly at:</p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-sm">
              <a
                href="mailto:hello@betweencultures.ca"
                className="text-[#a8c499] hover:text-[#96b085] transition-colors duration-200"
              >
                hello@betweencultures.ca
              </a>
              <span className="hidden sm:inline text-gray-400">|</span>
              <a
                href="tel:+16471234567"
                className="text-[#a8c499] hover:text-[#96b085] transition-colors duration-200"
              >
                +1 (647) 123-4567
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
