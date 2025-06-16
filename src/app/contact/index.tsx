"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
import { Facebook, Linkedin, Mail, Phone } from "lucide-react";
import { useState } from "react";

import { Gift, Handshake, Heart, Users } from "lucide-react";

import { AnimatePresence, motion } from "framer-motion";
import { Briefcase, Building, Globe, User, X } from "lucide-react";

export const ContactSection = () => {
  const [showVolunteerModal, setShowVolunteerModal] = useState(false);
  const [showAmbassadorModal, setShowAmbassadorModal] = useState(false);
  const [showPartnerModal, setShowPartnerModal] = useState(false);

  // Volunteer form state
  const [volunteerForm, setVolunteerForm] = useState<{
    name: string;
    email: string;
    phone: string;
    interests: string[];
    availability: string;
    experience: string;
    motivation: string;
  }>({
    name: "",
    email: "",
    phone: "",
    interests: [],
    availability: "",
    experience: "",
    motivation: "",
  });

  // Ambassador form state
  const [ambassadorForm, setAmbassadorForm] = useState<{
    name: string;
    email: string;
    phone: string;
    culturalBackground: string;
    languages: string[];
    experience: string;
    availability: string;
    communityConnections: string;
    motivation: string;
  }>({
    name: "",
    email: "",
    phone: "",
    culturalBackground: "",
    languages: [],
    experience: "",
    availability: "",
    communityConnections: "",
    motivation: "",
  });

  // Partner form state
  const [partnerForm, setPartnerForm] = useState<{
    organizationName: string;
    contactName: string;
    email: string;
    phone: string;
    organizationType: string;
    partnershipType: string[];
    description: string;
    resources: string;
    goals: string;
    timeline: string;
  }>({
    organizationName: "",
    contactName: "",
    email: "",
    phone: "",
    organizationType: "",
    partnershipType: [],
    description: "",
    resources: "",
    goals: "",
    timeline: "",
  });

  const volunteerInterests = [
    "Cultural Programming",
    "Childcare Support",
    "Educational Workshops",
    "Event Organization",
    "Translation Services",
    "Mentorship",
    "Administrative Support",
    "Social Media & Marketing",
  ];

  const languageOptions = [
    "Arabic",
    "Mandarin",
    "Spanish",
    "French",
    "Hindi",
    "Urdu",
    "Tagalog",
    "Vietnamese",
    "Korean",
    "Punjabi",
    "Portuguese",
    "Other",
  ];

  const partnershipTypes = [
    "Program Collaboration",
    "Resource Sharing",
    "Joint Events",
    "Training & Development",
    "Research Partnership",
    "Funding Partnership",
    "Community Outreach",
    "Policy Advocacy",
  ];

  const organizationTypes = [
    "Non-profit Organization",
    "Educational Institution",
    "Government Agency",
    "Healthcare Organization",
    "Community Center",
    "Religious Organization",
    "Business/Corporate",
    "Other",
  ];

  // Form handlers
  const handleVolunteerSubmit = () => {
    if (
      !volunteerForm.name ||
      !volunteerForm.email ||
      !volunteerForm.motivation
    ) {
      alert("Please fill in all required fields.");
      return;
    }
    console.log("Volunteer form submitted:", volunteerForm);
    setShowVolunteerModal(false);
    setVolunteerForm({
      name: "",
      email: "",
      phone: "",
      interests: [],
      availability: "",
      experience: "",
      motivation: "",
    });
  };

  const handleAmbassadorSubmit = () => {
    if (
      !ambassadorForm.name ||
      !ambassadorForm.email ||
      !ambassadorForm.culturalBackground ||
      !ambassadorForm.motivation
    ) {
      alert("Please fill in all required fields.");
      return;
    }
    console.log("Ambassador form submitted:", ambassadorForm);
    setShowAmbassadorModal(false);
    setAmbassadorForm({
      name: "",
      email: "",
      phone: "",
      culturalBackground: "",
      languages: [],
      experience: "",
      availability: "",
      communityConnections: "",
      motivation: "",
    });
  };

  const handlePartnerSubmit = () => {
    if (
      !partnerForm.organizationName ||
      !partnerForm.contactName ||
      !partnerForm.email ||
      !partnerForm.description
    ) {
      alert("Please fill in all required fields.");
      return;
    }
    console.log("Partner form submitted:", partnerForm);
    setShowPartnerModal(false);
    setPartnerForm({
      organizationName: "",
      contactName: "",
      email: "",
      phone: "",
      organizationType: "",
      partnershipType: [],
      description: "",
      resources: "",
      goals: "",
      timeline: "",
    });
  };

  const handleInterestToggle = (interest: string) => {
    setVolunteerForm((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest],
    }));
  };

  const handleLanguageToggle = (language: string) => {
    setAmbassadorForm((prev) => ({
      ...prev,
      languages: prev.languages.includes(language)
        ? prev.languages.filter((l) => l !== language)
        : [...prev.languages, language],
    }));
  };

  const handlePartnershipTypeToggle = (type: string) => {
    setPartnerForm((prev) => ({
      ...prev,
      partnershipType: prev.partnershipType.includes(type)
        ? prev.partnershipType.filter((t) => t !== type)
        : [...prev.partnershipType, type],
    }));
  };

  return (
    <>
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
                  <div
                    onClick={() => setShowVolunteerModal(true)}
                    className="group cursor-pointer"
                  >
                    <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200">
                      <div className="w-10 h-10 bg-[#a8c499] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Users className="w-5 h-5 text-white" />
                      </div>
                      <span className="font-medium text-gray-900 group-hover:text-[#a8c499] transition-colors">
                        Volunteer with us
                      </span>
                    </div>
                  </div>

                  <div
                    onClick={() => setShowAmbassadorModal(true)}
                    className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer group"
                  >
                    <div className="w-10 h-10 bg-[#a097d1] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Handshake className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-medium text-gray-900 group-hover:text-[#a097d1] transition-colors">
                      Become a cultural ambassador
                    </span>
                  </div>

                  <a href="/donate" className="group">
                    <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer">
                      <div className="w-10 h-10 bg-[#a8c499] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Heart className="w-5 h-5 text-white" />
                      </div>
                      <span className="font-medium text-gray-900 group-hover:text-[#a8c499] transition-colors">
                        Make a donation
                      </span>
                    </div>
                  </a>

                  <div
                    onClick={() => setShowPartnerModal(true)}
                    className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer group"
                  >
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

      {/* Volunteer Modal */}
      <AnimatePresence>
        {showVolunteerModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowVolunteerModal(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
              className="bg-white rounded-2xl max-w-2xl w-full mx-auto shadow-2xl max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-[#96b085] to-[#8e83bd] text-white p-6 rounded-t-2xl">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Users className="w-8 h-8" />
                    <div>
                      <h3 className="text-2xl font-bold">Join Our Team</h3>
                      <p className="text-white/90">
                        Become a volunteer and make a difference
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => setShowVolunteerModal(false)}
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
              </div>

              {/* Form */}
              <div className="p-6 space-y-6">
                {/* Personal Information */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-gray-900 flex items-center space-x-2">
                    <User className="w-5 h-5" />
                    <span>Personal Information</span>
                  </h4>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        value={volunteerForm.name}
                        onChange={(e) =>
                          setVolunteerForm((prev) => ({
                            ...prev,
                            name: e.target.value,
                          }))
                        }
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#a8c499] focus:border-transparent"
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={volunteerForm.email}
                        onChange={(e) =>
                          setVolunteerForm((prev) => ({
                            ...prev,
                            email: e.target.value,
                          }))
                        }
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#a8c499] focus:border-transparent"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={volunteerForm.phone}
                      onChange={(e) =>
                        setVolunteerForm((prev) => ({
                          ...prev,
                          phone: e.target.value,
                        }))
                      }
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#a8c499] focus:border-transparent"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

                {/* Interests */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-gray-900">
                    Areas of Interest
                  </h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {volunteerInterests.map((interest) => (
                      <label
                        key={interest}
                        className="flex items-center space-x-2 cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          checked={volunteerForm.interests.includes(interest)}
                          onChange={() => handleInterestToggle(interest)}
                          className="rounded border-gray-300 text-[#a8c499] focus:ring-[#a8c499]"
                        />
                        <span className="text-sm text-gray-700">
                          {interest}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Availability */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Availability
                  </label>
                  <select
                    value={volunteerForm.availability}
                    onChange={(e) =>
                      setVolunteerForm((prev) => ({
                        ...prev,
                        availability: e.target.value,
                      }))
                    }
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#a8c499] focus:border-transparent"
                  >
                    <option value="">Select your availability</option>
                    <option value="weekdays">Weekdays</option>
                    <option value="weekends">Weekends</option>
                    <option value="both">Both weekdays and weekends</option>
                    <option value="flexible">Flexible</option>
                  </select>
                </div>

                {/* Experience */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Relevant Experience
                  </label>
                  <textarea
                    value={volunteerForm.experience}
                    onChange={(e) =>
                      setVolunteerForm((prev) => ({
                        ...prev,
                        experience: e.target.value,
                      }))
                    }
                    rows={3}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#a8c499] focus:border-transparent"
                    placeholder="Tell us about any relevant experience you have..."
                  />
                </div>

                {/* Motivation */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Why do you want to volunteer with us? *
                  </label>
                  <textarea
                    value={volunteerForm.motivation}
                    onChange={(e) =>
                      setVolunteerForm((prev) => ({
                        ...prev,
                        motivation: e.target.value,
                      }))
                    }
                    rows={3}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#a8c499] focus:border-transparent"
                    placeholder="Share your motivation for volunteering with our organization..."
                  />
                </div>

                {/* Submit Button */}
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <button
                    onClick={handleVolunteerSubmit}
                    className="flex-1 bg-gradient-to-r from-[#96b085] to-[#8e83bd] text-white py-3 px-6 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                  >
                    Submit Application
                  </button>
                  <button
                    onClick={() => setShowVolunteerModal(false)}
                    className="flex-1 border border-gray-300 text-gray-700 py-3 px-6 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Cultural Ambassador Modal */}
      <AnimatePresence>
        {showAmbassadorModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowAmbassadorModal(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
              className="bg-white rounded-2xl max-w-2xl w-full mx-auto shadow-2xl max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-[#a097d1] to-[#8e83bd] text-white p-6 rounded-t-2xl">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Globe className="w-8 h-8" />
                    <div>
                      <h3 className="text-2xl font-bold">
                        Cultural Ambassador
                      </h3>
                      <p className="text-white/90">
                        Share your culture and bridge communities
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => setShowAmbassadorModal(false)}
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
              </div>

              {/* Form */}
              <div className="p-6 space-y-6">
                {/* Personal Information */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-gray-900 flex items-center space-x-2">
                    <User className="w-5 h-5" />
                    <span>Personal Information</span>
                  </h4>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        value={ambassadorForm.name}
                        onChange={(e) =>
                          setAmbassadorForm((prev) => ({
                            ...prev,
                            name: e.target.value,
                          }))
                        }
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#a8c499] focus:border-transparent"
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={ambassadorForm.email}
                        onChange={(e) =>
                          setAmbassadorForm((prev) => ({
                            ...prev,
                            email: e.target.value,
                          }))
                        }
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#a8c499] focus:border-transparent"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={ambassadorForm.phone}
                      onChange={(e) =>
                        setAmbassadorForm((prev) => ({
                          ...prev,
                          phone: e.target.value,
                        }))
                      }
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#a8c499] focus:border-transparent"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

                {/* Cultural Background */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Cultural Background *
                  </label>
                  <textarea
                    value={ambassadorForm.culturalBackground}
                    onChange={(e) =>
                      setAmbassadorForm((prev) => ({
                        ...prev,
                        culturalBackground: e.target.value,
                      }))
                    }
                    rows={3}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#a8c499] focus:border-transparent"
                    placeholder="Tell us about your cultural background and heritage..."
                  />
                </div>

                {/* Languages */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-gray-900">
                    Languages Spoken
                  </h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {languageOptions.map((language) => (
                      <label
                        key={language}
                        className="flex items-center space-x-2 cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          checked={ambassadorForm.languages.includes(language)}
                          onChange={() => handleLanguageToggle(language)}
                          className="rounded border-gray-300 text-[#a097d1] focus:ring-[#a097d1]"
                        />
                        <span className="text-sm text-gray-700">
                          {language}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Community Connections */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Community Connections
                  </label>
                  <textarea
                    value={ambassadorForm.communityConnections}
                    onChange={(e) =>
                      setAmbassadorForm((prev) => ({
                        ...prev,
                        communityConnections: e.target.value,
                      }))
                    }
                    rows={3}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#a8c499] focus:border-transparent"
                    placeholder="Describe your connections to cultural communities..."
                  />
                </div>

                {/* Experience */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Relevant Experience
                  </label>
                  <textarea
                    value={ambassadorForm.experience}
                    onChange={(e) =>
                      setAmbassadorForm((prev) => ({
                        ...prev,
                        experience: e.target.value,
                      }))
                    }
                    rows={3}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#a8c499] focus:border-transparent"
                    placeholder="Share experience in cultural education, community work, or outreach..."
                  />
                </div>

                {/* Availability */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Availability
                  </label>
                  <select
                    value={ambassadorForm.availability}
                    onChange={(e) =>
                      setAmbassadorForm((prev) => ({
                        ...prev,
                        availability: e.target.value,
                      }))
                    }
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#a8c499] focus:border-transparent"
                  >
                    <option value="">Select your availability</option>
                    <option value="weekdays">Weekdays</option>
                    <option value="weekends">Weekends</option>
                    <option value="both">Both weekdays and weekends</option>
                    <option value="flexible">Flexible</option>
                    <option value="events-only">Special events only</option>
                  </select>
                </div>

                {/* Motivation */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Why do you want to be a cultural ambassador? *
                  </label>
                  <textarea
                    value={ambassadorForm.motivation}
                    onChange={(e) =>
                      setAmbassadorForm((prev) => ({
                        ...prev,
                        motivation: e.target.value,
                      }))
                    }
                    rows={3}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#a8c499] focus:border-transparent"
                    placeholder="Share your motivation for becoming a cultural ambassador..."
                  />
                </div>

                {/* Submit Button */}
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <button
                    onClick={handleAmbassadorSubmit}
                    className="flex-1 bg-gradient-to-r from-[#a097d1] to-[#8e83bd] text-white py-3 px-6 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                  >
                    Submit Application
                  </button>
                  <button
                    onClick={() => setShowAmbassadorModal(false)}
                    className="flex-1 border border-gray-300 text-gray-700 py-3 px-6 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Partnership Modal */}
      <AnimatePresence>
        {showPartnerModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowPartnerModal(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
              className="bg-white rounded-2xl max-w-2xl w-full mx-auto shadow-2xl max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-[#a097d1] to-[#96b085] text-white p-6 rounded-t-2xl">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Briefcase className="w-8 h-8" />
                    <div>
                      <h3 className="text-2xl font-bold">Partner With Us</h3>
                      <p className="text-white/90">
                        Build meaningful collaborations for community impact
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => setShowPartnerModal(false)}
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
              </div>

              {/* Form */}
              <div className="p-6 space-y-6">
                {/* Organization Information */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-gray-900 flex items-center space-x-2">
                    <Building className="w-5 h-5" />
                    <span>Organization Information</span>
                  </h4>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Organization Name *
                    </label>
                    <input
                      type="text"
                      value={partnerForm.organizationName}
                      onChange={(e) =>
                        setPartnerForm((prev) => ({
                          ...prev,
                          organizationName: e.target.value,
                        }))
                      }
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#a8c499] focus:border-transparent"
                      placeholder="Enter your organization name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Organization Type
                    </label>
                    <select
                      value={partnerForm.organizationType}
                      onChange={(e) =>
                        setPartnerForm((prev) => ({
                          ...prev,
                          organizationType: e.target.value,
                        }))
                      }
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#a8c499] focus:border-transparent"
                    >
                      <option value="">Select organization type</option>
                      {organizationTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Contact Name *
                      </label>
                      <input
                        type="text"
                        value={partnerForm.contactName}
                        onChange={(e) =>
                          setPartnerForm((prev) => ({
                            ...prev,
                            contactName: e.target.value,
                          }))
                        }
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#a8c499] focus:border-transparent"
                        placeholder="Your full name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={partnerForm.email}
                        onChange={(e) =>
                          setPartnerForm((prev) => ({
                            ...prev,
                            email: e.target.value,
                          }))
                        }
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#a8c499] focus:border-transparent"
                        placeholder="Contact email"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={partnerForm.phone}
                      onChange={(e) =>
                        setPartnerForm((prev) => ({
                          ...prev,
                          phone: e.target.value,
                        }))
                      }
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#a8c499] focus:border-transparent"
                      placeholder="Contact phone number"
                    />
                  </div>
                </div>

                {/* Partnership Type */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-gray-900">
                    Partnership Interests
                  </h4>
                  <div className="grid grid-cols-2 md:grid-cols-2 gap-3">
                    {partnershipTypes.map((type) => (
                      <label
                        key={type}
                        className="flex items-center space-x-2 cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          checked={partnerForm.partnershipType.includes(type)}
                          onChange={() => handlePartnershipTypeToggle(type)}
                          className="rounded border-gray-300 text-[#a097d1] focus:ring-[#a097d1]"
                        />
                        <span className="text-sm text-gray-700">{type}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Organization Description */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Organization Description *
                  </label>
                  <textarea
                    value={partnerForm.description}
                    onChange={(e) =>
                      setPartnerForm((prev) => ({
                        ...prev,
                        description: e.target.value,
                      }))
                    }
                    rows={3}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#a8c499] focus:border-transparent"
                    placeholder="Describe your organization's mission and work..."
                  />
                </div>

                {/* Resources */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Resources You Can Offer
                  </label>
                  <textarea
                    value={partnerForm.resources}
                    onChange={(e) =>
                      setPartnerForm((prev) => ({
                        ...prev,
                        resources: e.target.value,
                      }))
                    }
                    rows={3}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#a8c499] focus:border-transparent"
                    placeholder="What resources, expertise, or services can you contribute..."
                  />
                </div>

                {/* Partnership Goals */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Partnership Goals
                  </label>
                  <textarea
                    value={partnerForm.goals}
                    onChange={(e) =>
                      setPartnerForm((prev) => ({
                        ...prev,
                        goals: e.target.value,
                      }))
                    }
                    rows={3}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#a8c499] focus:border-transparent"
                    placeholder="What do you hope to achieve through this partnership..."
                  />
                </div>

                {/* Timeline */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Proposed Timeline
                  </label>
                  <select
                    value={partnerForm.timeline}
                    onChange={(e) =>
                      setPartnerForm((prev) => ({
                        ...prev,
                        timeline: e.target.value,
                      }))
                    }
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#a8c499] focus:border-transparent"
                  >
                    <option value="">Select preferred timeline</option>
                    <option value="immediate">
                      Immediate (Within 1 month)
                    </option>
                    <option value="short-term">Short-term (1-3 months)</option>
                    <option value="medium-term">
                      Medium-term (3-6 months)
                    </option>
                    <option value="long-term">Long-term (6+ months)</option>
                    <option value="flexible">Flexible</option>
                  </select>
                </div>

                {/* Submit Button */}
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <button
                    onClick={handlePartnerSubmit}
                    className="flex-1 bg-gradient-to-r from-[#a097d1] to-[#96b085] text-white py-3 px-6 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                  >
                    Submit Partnership Proposal
                  </button>
                  <button
                    onClick={() => setShowPartnerModal(false)}
                    className="flex-1 border border-gray-300 text-gray-700 py-3 px-6 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleInputChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear any previous status messages when user starts typing
    if (submitStatus.type) {
      setSubmitStatus({ type: null, message: "" });
    }
  };

  const validateForm = () => {
    if (!formData.fullName.trim()) {
      setSubmitStatus({
        type: "error",
        message: "Please enter your full name.",
      });
      return false;
    }

    if (!formData.email.trim()) {
      setSubmitStatus({
        type: "error",
        message: "Please enter your email address.",
      });
      return false;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitStatus({
        type: "error",
        message: "Please enter a valid email address.",
      });
      return false;
    }

    if (!formData.message.trim()) {
      setSubmitStatus({ type: "error", message: "Please enter your message." });
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.status === 200) {
        setSubmitStatus({
          type: "success",
          message:
            "Thank you! Your message has been sent successfully. We'll get back to you soon.",
        });

        // Reset form after successful submission
        setFormData({
          fullName: "",
          email: "",
          message: "",
        });
      }
    } catch (error: any) {
      console.error("Error submitting form:", error);

      if (error.response) {
        // Server responded with error status
        setSubmitStatus({
          type: "error",
          message:
            error.response.data?.error ||
            `Server error: ${error.response.status}`,
        });
      } else if (error.request) {
        // Request was made but no response received
        setSubmitStatus({
          type: "error",
          message: "Network error. Please check your connection and try again.",
        });
      } else {
        // Something else happened
        setSubmitStatus({
          type: "error",
          message: "An unexpected error occurred. Please try again.",
        });
      }
    } finally {
      setIsLoading(false);
    }
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

          {/* Status Messages */}
          {submitStatus.type && (
            <div
              className={`mb-6 p-4 rounded-lg ${
                submitStatus.type === "success"
                  ? "bg-green-50 border border-green-200 text-green-800"
                  : "bg-red-50 border border-red-200 text-red-800"
              }`}
            >
              <div className="flex">
                <div className="flex-shrink-0">
                  {submitStatus.type === "success" ? (
                    <svg
                      className="h-5 w-5 text-green-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="h-5 w-5 text-red-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium">{submitStatus.message}</p>
                </div>
              </div>
            </div>
          )}

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
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
                disabled={isLoading}
                className="w-full px-4 py-3 border-b-2 border-gray-300 bg-transparent focus:border-[#a8c499] focus:outline-none transition-colors duration-200 text-gray-900 placeholder-gray-400 disabled:opacity-50 disabled:cursor-not-allowed"
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
                disabled={isLoading}
                className="w-full px-4 py-3 border-b-2 border-gray-300 bg-transparent focus:border-[#a8c499] focus:outline-none transition-colors duration-200 text-gray-900 placeholder-gray-400 disabled:opacity-50 disabled:cursor-not-allowed"
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
                disabled={isLoading}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg bg-transparent focus:border-[#a8c499] focus:outline-none transition-colors duration-200 text-gray-900 placeholder-gray-400 resize-vertical disabled:opacity-50 disabled:cursor-not-allowed"
              />
            </div>

            {/* Submit Button */}
            <div className="text-center pt-4">
              <button
                type="submit"
                disabled={isLoading}
                className="bg-gradient-to-r from-[#a8c499] to-[#a097d1] text-white px-12 py-3 rounded-lg font-semibold text-lg hover:from-[#96b085] hover:to-[#8e83bd] transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-md"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </div>
                ) : (
                  "Send Message"
                )}
              </button>
            </div>
          </form>

          {/* Additional Info */}
          <div className="mt-8 pt-6 border-t border-gray-200 text-center">
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
