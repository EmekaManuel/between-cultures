"use client";
import Image from "next/image";

import { motion } from "framer-motion";

export const WhatWeDoSection = () => {
  const services = [
    {
      icon: (
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      title: "Family Empowerment",
      description:
        "Family mentorship programs, community action and policy advocacy, and culturally relevant parenting workshops that support child development and family wellness.",
      bgColor: "bg-[#a8c499]",
    },
    {
      icon: (
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      ),
      title: "Mental Health & Wellness",
      description:
        "Emotional resilience support through counseling, wellness sessions, and peer support groups designed to strengthen mental health within our communities.",
      bgColor: "bg-[#a097d1]",
    },
    {
      icon: (
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      ),
      title: "Education & Training",
      description:
        "Adult education programs for parents and educators, improving academic outcomes and leadership skills for youth while fostering cultural pride.",
      bgColor: "bg-[#a8c499]",
    },
    {
      icon: (
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      ),
      title: "Child Development Centers",
      description:
        "Establishing Between Cultures childcare centers that provide culturally responsive early childhood education with opportunities for franchise expansion.",
      bgColor: "bg-[#a097d1]",
    },
    {
      icon: (
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
          />
        </svg>
      ),
      title: "Cultural Expression",
      description:
        "Arts initiatives, traditional cooking classes, and intergenerational programs that bridge gaps between elders and youth for cultural preservation.",
      bgColor: "bg-[#a8c499]",
    },
    {
      icon: (
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
          />
        </svg>
      ),
      title: "Community Outreach",
      description:
        "Storytelling initiatives, podcast creation, and cultural exchange programs that amplify Black voices and preserve cultural legacies through research and oral histories.",
      bgColor: "bg-[#a097d1]",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
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
                What We Do
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
              We are empowering immigrant Black families across communities
            </motion.h1>

            {/* Description - ANIMATE FROM LEFT */}
            <motion.p
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-lg text-gray-600 leading-relaxed"
            >
              Through comprehensive programs that build strength, knowledge, and
              connection, we work to increase access to culturally responsive
              support while advancing cross-cultural understanding through
              community dialogues, education, and celebrations.
            </motion.p>
          </div>

          {/* Right Content - Image - ANIMATE FROM RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/happy-black.jpg"
                alt="Happy immigrant Black families celebrating together"
                width={600}
                height={400}
                className="w-full h-80 object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* Services Section - ANIMATE CONTAINER FROM BOTTOM */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-8 lg:p-12"
        >
          {/* Services Header - ANIMATE FROM TOP */}
          <motion.div
            initial={{ opacity: 0, y: -60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-4">
              What we do for immigrant Black families and communities
            </h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto">
              Our comprehensive services are designed to empower individuals,
              strengthen families, and build inclusive communities where
              everyone can thrive.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              // Create a flowing pattern for 3x2 grid
              const getAnimationDirection = (index: number) => {
                const patterns = [
                  { x: -100, y: 0 }, // 0: from left
                  { x: 0, y: -100 }, // 1: from top
                  { x: 100, y: 0 }, // 2: from right
                  { x: 100, y: 0 }, // 3: from right
                  { x: 0, y: 100 }, // 4: from bottom
                  { x: -100, y: 0 }, // 5: from left
                ];
                return patterns[index % 6];
              };

              return (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    ...getAnimationDirection(index),
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.7,
                    delay: 0.6 + index * 0.15,
                  }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300"
                >
                  {/* Icon - ANIMATE WITH SCALE */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.8 + index * 0.15,
                      type: "spring",
                      stiffness: 200,
                    }}
                    viewport={{ once: true }}
                    className={`w-12 h-12 ${service.bgColor} rounded-lg flex items-center justify-center mb-4`}
                  >
                    {service.icon}
                  </motion.div>

                  {/* Title - ANIMATE WITH DELAY */}
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: 0.9 + index * 0.15,
                    }}
                    viewport={{ once: true }}
                    className="text-xl font-semibold text-gray-900 mb-3"
                  >
                    {service.title}
                  </motion.h3>

                  {/* Description - ANIMATE WITH DELAY */}
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: 1.0 + index * 0.15,
                    }}
                    viewport={{ once: true }}
                    className="text-gray-600 leading-relaxed"
                  >
                    {service.description}
                  </motion.p>
                </motion.div>
              );
            })}
          </div>

          {/* Call to Action - ANIMATE FROM BOTTOM */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-[#a8c499] to-[#a097d1] text-white px-8 py-3 rounded-lg font-semibold hover:from-[#96b085] hover:to-[#8e83bd] transition-all duration-200 transform hover:scale-105 shadow-md">
                Explore Our Programs
              </button>
              <button className="border-2 border-[#a8c499] text-[#a8c499] px-8 py-3 rounded-lg font-semibold hover:bg-[#a8c499] hover:text-white transition-all duration-200">
                Get Involved
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
