"use client";

import React, { useState } from "react";
import {
  Heart,
  Users,
  BookOpen,
  Gift,
  DollarSign,
  Target,
  TrendingUp,
} from "lucide-react";
import Image from "next/image";

export const DonationHero = () => {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Section Label */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-0.5 bg-[#a8c499]"></div>
              <span className="text-sm font-medium text-gray-600 uppercase tracking-wider">
                Donate
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight">
              Making a donation for{" "}
              <span className="text-[#a097d1]">our families.</span>
            </h1>

            {/* Description */}
            <p className="text-lg text-gray-600 leading-relaxed">
              When you donate, you&lsquo;re supporting immigrant Black families
              in building stronger communities—an investment in preserving
              culture, fostering inclusion, and empowering the leaders of
              tomorrow.
            </p>

            {/* Secondary Description */}
            <p className="text-base text-gray-600 leading-relaxed">
              Your contribution helps fund family mentorship programs, cultural
              preservation initiatives, educational support, and mental health
              services that directly impact lives and strengthen communities.
            </p>

            {/* Donation CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-[#a8c499] to-[#a097d1] text-white px-10 py-4 rounded-lg font-bold text-lg hover:from-[#96b085] hover:to-[#8e83bd] transition-all duration-200 transform hover:scale-105 shadow-lg">
                Donate now
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-10 py-4 rounded-lg font-semibold hover:border-[#a8c499] hover:text-[#a8c499] transition-all duration-200">
                Learn more about our impact
              </button>
            </div>

            {/* Donation Impact Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#a8c499] mb-1">
                  $50
                </div>
                <div className="text-sm text-gray-600">
                  Supports one family workshop
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#a097d1] mb-1">
                  $150
                </div>
                <div className="text-sm text-gray-600">
                  Funds mentorship for 3 months
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#a8c499] mb-1">
                  $500
                </div>
                <div className="text-sm text-gray-600">
                  Supports cultural programming
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/hero3.jpg"
                alt="Person holding donation box"
                width={600}
                height={600}
                className="w-full h-full object-cover"
              />

              {/* Subtle overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>

              {/* Badge Overlay */}
              <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#a8c499]">100%</div>
                  <div className="text-xs text-gray-600 uppercase">
                    Transparency
                  </div>
                </div>
              </div>
            </div>

            {/* Floating donation amounts */}
            <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-2xl p-6 shadow-xl">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#a097d1] mb-2">
                  $25K+
                </div>
                <div className="text-sm text-gray-600">Raised this month</div>
              </div>
            </div>

            <div className="absolute -right-4 bottom-1/4 bg-white rounded-2xl p-4 shadow-xl">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#a8c499] mb-1">
                  150+
                </div>
                <div className="text-xs text-gray-600">Families helped</div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 pt-12 border-t border-gray-200">
          <div className="text-center mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Trusted by the community
            </h3>
            <p className="text-gray-600">
              Your donations are secure and directly support immigrant Black
              families
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
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
              </div>
              <span className="text-sm font-medium text-gray-700">
                CRA Registered Charity
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
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
              </div>
              <span className="text-sm font-medium text-gray-700">
                Secure Payment
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
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
              </div>
              <span className="text-sm font-medium text-gray-700">
                Full Transparency
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const DonationInfo = () => {
  const [activeTab, setActiveTab] = useState("Overview");

  const tabs = ["Overview", "Impact", "What You get"];

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
    switch (activeTab) {
      case "Overview":
        return (
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
        );
      case "Impact":
        return (
          <div className="space-y-4">
            <p className="text-gray-600 leading-relaxed">
              Your donations create lasting impact in immigrant Black
              communities. We measure our success through family stability,
              cultural connection, educational achievements, and community
              engagement.
            </p>
            <p className="text-gray-600 leading-relaxed">
              In the past year, we&lsquo;ve supported over 500 families,
              facilitated 200+ workshops, and preserved countless cultural
              traditions through our heritage programs.
            </p>
          </div>
        );
      case "What You get":
        return (
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
        );
      default:
        return null;
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* How You Can Contribute Section */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Content */}
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
                How you can contribute to{" "}
                <span className="text-[#a097d1]">caring for our families</span>
              </h2>

              <div className="space-y-6">
                {contributionMethods.map((method, index) => (
                  <div key={index} className="flex items-start space-x-4 group">
                    <div className="flex-shrink-0 w-12 h-12 bg-white rounded-lg shadow-md flex items-center justify-center text-[#a8c499] group-hover:bg-[#a8c499] group-hover:text-white transition-colors duration-300">
                      {method.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {method.title}
                      </h3>
                      <p className="text-gray-600">{method.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - Tabs */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              {/* Tab Navigation */}
              <div className="flex space-x-6 border-b border-gray-200 mb-6">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`pb-4 px-2 font-medium text-sm transition-colors duration-200 border-b-2 ${
                      activeTab === tab
                        ? "text-[#a8c499] border-[#a8c499]"
                        : "text-gray-500 border-transparent hover:text-gray-700"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              {renderTabContent()}
            </div>
          </div>
        </div>

        {/* How We Use Your Donation Section */}
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Heading */}
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                How we use your <span className="text-[#a097d1]">donation</span>
              </h2>
            </div>

            {/* Right Content - Usage Breakdown */}
            <div className="space-y-6">
              {usageBreakdown.map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-[#a8c499] rounded-lg flex items-center justify-center text-white">
                    {item.icon}
                  </div>
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
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
