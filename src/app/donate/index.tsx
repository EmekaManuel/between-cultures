"use client";

import React, { useState } from "react";

import Image from "next/image";

import { motion } from "framer-motion";
import {
  DollarSign,
  Heart,
  Users,
  Gift,
  BookOpen,
  Target,
  TrendingUp,
} from "lucide-react";

export const DonationHero = () => {
  const donationStats = [
    {
      amount: "$50",
      description: "Supports one family workshop",
      color: "text-[#a8c499]",
    },
    {
      amount: "$150",
      description: "Funds mentorship for 3 months",
      color: "text-[#a097d1]",
    },
    {
      amount: "$500",
      description: "Supports cultural programming",
      color: "text-[#a8c499]",
    },
  ];

  const trustIndicators = [
    {
      icon: (
        <svg
          className="w-5 h-5 text-green-600"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          />
        </svg>
      ),
      bgColor: "bg-green-100",
      text: "CRA Registered Charity",
    },
    {
      icon: (
        <svg
          className="w-5 h-5 text-blue-600"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          />
        </svg>
      ),
      bgColor: "bg-blue-100",
      text: "Secure Payment",
    },
    {
      icon: (
        <svg
          className="w-5 h-5 text-purple-600"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      ),
      bgColor: "bg-purple-100",
      text: "Full Transparency",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Section Label - ANIMATE FROM LEFT */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex items-center space-x-3"
            >
              <div className="w-12 h-0.5 bg-[#a8c499]"></div>
              <span className="text-sm font-medium text-gray-600 uppercase tracking-wider">
                Donate
              </span>
            </motion.div>

            {/* Main Heading - ANIMATE FROM TOP */}
            <motion.h1
              initial={{ opacity: 0, y: -80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight"
            >
              Making a donation for{" "}
              <span className="text-[#a097d1]">our families.</span>
            </motion.h1>

            {/* Primary Description - ANIMATE FROM LEFT */}
            <motion.p
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-lg text-gray-600 leading-relaxed"
            >
              When you donate, you&lsquo;re supporting immigrant Black families
              in building stronger communities—an investment in preserving
              culture, fostering inclusion, and empowering the leaders of
              tomorrow.
            </motion.p>

            {/* Secondary Description - ANIMATE FROM LEFT */}
            <motion.p
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
              className="text-base text-gray-600 leading-relaxed"
            >
              Your contribution helps fund family mentorship programs, cultural
              preservation initiatives, educational support, and mental health
              services that directly impact lives and strengthen communities.
            </motion.p>

            {/* Donation CTA - ANIMATE FROM BOTTOM */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button className="bg-gradient-to-r from-[#a8c499] to-[#a097d1] text-white px-10 py-4 rounded-lg font-bold text-lg hover:from-[#96b085] hover:to-[#8e83bd] transition-all duration-200 transform hover:scale-105 shadow-lg">
                Donate now
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-10 py-4 rounded-lg font-semibold hover:border-[#a8c499] hover:text-[#a8c499] transition-all duration-200">
                Learn more about our impact
              </button>
            </motion.div>

            {/* Donation Impact Stats - STAGGERED FROM BOTTOM */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              viewport={{ once: true }}
              className="grid grid-cols-3 gap-6 pt-8"
            >
              {donationStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: 1.3 + index * 0.1,
                  }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{
                      duration: 0.5,
                      delay: 1.4 + index * 0.1,
                      type: "spring",
                      stiffness: 200,
                    }}
                    viewport={{ once: true }}
                    className={`text-2xl font-bold ${stat.color} mb-1`}
                  >
                    {stat.amount}
                  </motion.div>
                  <div className="text-sm text-gray-600">
                    {stat.description}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Image - ANIMATE FROM RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/hero3.jpg"
                alt="Person holding donation box"
                width={600}
                height={600}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>

              {/* Badge Overlay - ANIMATE WITH SCALE */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.6,
                  delay: 1.0,
                  type: "spring",
                  stiffness: 200,
                }}
                viewport={{ once: true }}
                className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#a8c499]">100%</div>
                  <div className="text-xs text-gray-600 uppercase">
                    Transparency
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Floating donation amounts - ANIMATE WITH DELAYS */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              viewport={{ once: true }}
              className="absolute -left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-2xl p-6 shadow-xl"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-[#a097d1] mb-2">
                  $25K+
                </div>
                <div className="text-sm text-gray-600">Raised this month</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              viewport={{ once: true }}
              className="absolute -right-4 bottom-1/4 bg-white rounded-2xl p-4 shadow-xl"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-[#a8c499] mb-1">
                  150+
                </div>
                <div className="text-xs text-gray-600">Families helped</div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Trust Indicators - ANIMATE FROM BOTTOM */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 pt-12 border-t border-gray-200"
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Trusted by the community
            </h3>
            <p className="text-gray-600">
              Your donations are secure and directly support immigrant Black
              families
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {trustIndicators.map((indicator, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 0.6, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.7 + index * 0.1,
                }}
                viewport={{ once: true }}
                className="flex items-center space-x-2"
              >
                <div
                  className={`w-8 h-8 ${indicator.bgColor} rounded-full flex items-center justify-center`}
                >
                  {indicator.icon}
                </div>
                <span className="text-sm font-medium text-gray-700">
                  {indicator.text}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export const DonationInfo = () => {
  const tabs = ["Overview", "Impact", "What You get"] as const;
  type TabType = (typeof tabs)[number];
  const [activeTab, setActiveTab] = useState<TabType>("Overview");

  const contributionMethods = [
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "One-time Donation",
      description:
        "Make a single contribution to support our programs and services for immigrant Black families.",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Monthly Giving",
      description:
        "Become a sustaining supporter with automatic monthly donations that provide consistent support.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Corporate Partnership",
      description:
        "Partner with us as a corporation to sponsor programs and support community initiatives.",
    },
    {
      icon: <Gift className="w-8 h-8" />,
      title: "In-Kind Donations",
      description:
        "Donate goods, services, or professional expertise to directly support our families and programs.",
    },
  ];

  const usageBreakdown = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Family Empowerment Programs",
      percentage: "40%",
      description:
        "Family mentorship, parenting workshops, advocacy services, and community support programs.",
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Cultural Preservation",
      percentage: "25%",
      description:
        "Heritage exchange programs, storytelling initiatives, cultural arts, and intergenerational connections.",
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Education & Training",
      percentage: "20%",
      description:
        "Adult education programs, youth leadership development, and educational advocacy support.",
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Mental Health Services",
      percentage: "10%",
      description:
        "Counseling services, wellness sessions, peer support groups, and emotional resilience programs.",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Administrative Costs",
      percentage: "5%",
      description:
        "Operational expenses, staff support, and organizational management to ensure program effectiveness.",
    },
  ];

  const renderTabContent = () => {
    const contentMap = {
      Overview: (
        <div className="space-y-4">
          <p className="text-gray-600 leading-relaxed">
            Between Cultures Foundation is dedicated to empowering immigrant
            Black families through comprehensive support programs. Your
            contribution helps us provide culturally responsive services that
            strengthen families and build inclusive communities.
          </p>
          <p className="text-gray-600 leading-relaxed">
            We focus on family mentorship, cultural preservation, educational
            support, and mental health services to ensure families thrive with
            dignity and cultural pride in their new communities.
          </p>
        </div>
      ),
      Impact: (
        <div className="space-y-4">
          <p className="text-gray-600 leading-relaxed">
            Your donations create lasting impact in immigrant Black communities.
            We measure our success through family stability, cultural
            connection, educational achievements, and community engagement.
          </p>
          <p className="text-gray-600 leading-relaxed">
            In the past year, we&lsquo;ve supported over 500 families,
            facilitated 200+ workshops, and preserved countless cultural
            traditions through our heritage programs.
          </p>
        </div>
      ),
      "What You get": (
        <div className="space-y-4">
          <p className="text-gray-600 leading-relaxed">
            As a donor, you receive regular updates on program impact,
            invitation to community events, access to our Stories Between
            Cultures content, and annual impact reports showing how your
            contribution makes a difference.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Tax receipts are provided for all donations. Major donors receive
            personalized impact reports and opportunities for deeper community
            engagement.
          </p>
        </div>
      ),
    };

    return contentMap[activeTab];
  };

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* How You Can Contribute Section */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Content - ANIMATE FROM LEFT */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
                How you can contribute to{" "}
                <span className="text-[#a097d1]">caring for our families</span>
              </h2>

              <div className="space-y-6">
                {contributionMethods.map((method, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.7,
                      delay: 0.4 + index * 0.15,
                    }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4 group"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{
                        duration: 0.5,
                        delay: 0.6 + index * 0.15,
                        type: "spring",
                        stiffness: 200,
                      }}
                      viewport={{ once: true }}
                      className="flex-shrink-0 w-12 h-12 bg-white rounded-lg shadow-md flex items-center justify-center text-[#a8c499] group-hover:bg-[#a8c499] group-hover:text-white transition-colors duration-300"
                    >
                      {method.icon}
                    </motion.div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {method.title}
                      </h3>
                      <p className="text-gray-600">{method.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Content - Tabs - ANIMATE FROM RIGHT */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg p-8"
            >
              {/* Tab Navigation */}
              <div className="flex space-x-6 border-b border-gray-200 mb-6">
                {tabs.map((tab, index) => (
                  <motion.button
                    key={tab}
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.5 + index * 0.1,
                    }}
                    viewport={{ once: true }}
                    onClick={() => setActiveTab(tab)}
                    className={`pb-4 px-2 font-medium text-sm transition-colors duration-200 border-b-2 ${
                      activeTab === tab
                        ? "text-[#a8c499] border-[#a8c499]"
                        : "text-gray-500 border-transparent hover:text-gray-700"
                    }`}
                  >
                    {tab}
                  </motion.button>
                ))}
              </div>

              {/* Tab Content */}
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                {renderTabContent()}
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* How We Use Your Donation Section */}
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Heading - ANIMATE FROM LEFT */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                How we use your <span className="text-[#a097d1]">donation</span>
              </h2>
            </motion.div>

            {/* Right Content - Usage Breakdown - STAGGERED FROM RIGHT */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {usageBreakdown.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.7,
                    delay: 0.4 + index * 0.1,
                  }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.6 + index * 0.1,
                      type: "spring",
                      stiffness: 200,
                    }}
                    viewport={{ once: true }}
                    className="flex-shrink-0 w-10 h-10 bg-[#a8c499] rounded-lg flex items-center justify-center text-white"
                  >
                    {item.icon}
                  </motion.div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {item.title}
                      </h3>
                      <span className="text-lg font-bold text-[#a097d1]">
                        {item.percentage}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
