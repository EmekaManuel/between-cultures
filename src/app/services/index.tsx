import Image from "next/image";

export const WhatWeDoSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Section Label */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-0.5 bg-[#a8c499]"></div>
              <span className="text-sm font-medium text-gray-600 uppercase tracking-wider">
                What We Do
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight">
              We are empowering immigrant Black families across communities
            </h1>

            {/* Description */}
            <p className="text-lg text-gray-600 leading-relaxed">
              Through comprehensive programs that build strength, knowledge, and
              connection, we work to increase access to culturally responsive
              support while advancing cross-cultural understanding through
              community dialogues, education, and celebrations.
            </p>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/happy-black.jpg"
                alt="Happy immigrant Black families celebrating together"
                width={600}
                height={400}
                className="w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-8 lg:p-12">
          <div className="mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-4">
              What we do for immigrant Black families and communities
            </h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto">
              Our comprehensive services are designed to empower individuals,
              strengthen families, and build inclusive communities where
              everyone can thrive.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Family Empowerment */}
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-[#a8c499] rounded-lg flex items-center justify-center mb-4">
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
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Family Empowerment
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Family mentorship programs, community action and policy
                advocacy, and culturally relevant parenting workshops that
                support child development and family wellness.
              </p>
            </div>

            {/* Mental Health Support */}
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-[#a097d1] rounded-lg flex items-center justify-center mb-4">
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
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Mental Health & Wellness
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Emotional resilience support through counseling, wellness
                sessions, and peer support groups designed to strengthen mental
                health within our communities.
              </p>
            </div>

            {/* Education & Training */}
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-[#a8c499] rounded-lg flex items-center justify-center mb-4">
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
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Education & Training
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Adult education programs for parents and educators, improving
                academic outcomes and leadership skills for youth while
                fostering cultural pride.
              </p>
            </div>

            {/* Child Development */}
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-[#a097d1] rounded-lg flex items-center justify-center mb-4">
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
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Child Development Centers
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Establishing Between Cultures childcare centers that provide
                culturally responsive early childhood education with
                opportunities for franchise expansion.
              </p>
            </div>

            {/* Cultural Expression */}
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-[#a8c499] rounded-lg flex items-center justify-center mb-4">
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
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Cultural Expression
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Arts initiatives, traditional cooking classes, and
                intergenerational programs that bridge gaps between elders and
                youth for cultural preservation.
              </p>
            </div>

            {/* Community Outreach */}
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-[#a097d1] rounded-lg flex items-center justify-center mb-4">
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
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Community Outreach
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Storytelling initiatives, podcast creation, and cultural
                exchange programs that amplify Black voices and preserve
                cultural legacies through research and oral histories.
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-12 text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-[#a8c499] to-[#a097d1] text-white px-8 py-3 rounded-lg font-semibold hover:from-[#96b085] hover:to-[#8e83bd] transition-all duration-200 transform hover:scale-105 shadow-md">
                Explore Our Programs
              </button>
              <button className="border-2 border-[#a8c499] text-[#a8c499] px-8 py-3 rounded-lg font-semibold hover:bg-[#a8c499] hover:text-white transition-all duration-200">
                Get Involved
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
