import React from "react";
import Image from "next/image";
import { Facebook, Linkedin, Twitter } from "lucide-react";

export const AboutUsSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-20">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Section Label */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-0.5 bg-[#a8c499]"></div>
              <span className="text-sm font-medium text-gray-600 uppercase tracking-wider">
                Know About Us
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight">
              We are a non-governmental organization
            </h1>

            {/* Organization Description */}
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                Between Cultures Foundation is dedicated to empowering immigrant
                Black families and promoting inclusive communities through
                programs that build strength, knowledge, and connection across
                cultures.
              </p>

              <p className="text-gray-600 leading-relaxed">
                Through our comprehensive programs, we work to increase access
                to culturally responsive parenting, financial, legal, and mental
                health support for immigrant Black families. We believe in
                building bridges between communities while celebrating and
                preserving cultural heritage.
              </p>

              <p className="text-gray-600 leading-relaxed">
                Our work extends beyond individual support to community
                transformation. We advance cross-cultural understanding through
                community dialogues, education, and celebrations while
                strengthening civic engagement and advocacy among immigrant
                families to influence equity-driven policies.
              </p>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-6">
            <p className="text-gray-600 leading-relaxed">
              We focus on improving academic outcomes and leadership skills for
              youth while fostering cultural pride and connection to their
              heritage. Our intergenerational programs bridge gaps between
              elders and youth for cultural preservation and leadership
              development.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Through research, oral histories, and storytelling, we amplify
              Black voices and preserve cultural legacies to shape a more just
              and connected society. We create inclusive spaces where families
              thrive and traditions are honored across generations.
            </p>
          </div>
        </div>

        {/* Video/Image Section */}
        <div className="mb-20">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/abous-us.jpg"
              alt="Between Cultures Foundation team celebrating together"
              width={1200}
              height={600}
              className="w-full h-64 md:h-96 object-cover"
            />

            {/* Video Play Button Overlay */}
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center group hover:bg-black/30 transition-colors duration-300">
              <button className="w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300 shadow-lg">
                <div className="w-0 h-0 border-l-[16px] border-l-gray-700 border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ml-1"></div>
              </button>
            </div>

            {/* Decorative border */}
            <div className="absolute inset-0 rounded-2xl border-4 border-[#a8c499]/30"></div>
          </div>
        </div>

        {/* Mission and Vision Section */}
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Our Mission */}
            <div className="space-y-6">
              <div>
                <span className="text-sm font-medium text-gray-600 uppercase tracking-wider">
                  Our Mission
                </span>
              </div>

              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
                We make sure to provide inclusive care for{" "}
                <span className="text-[#a097d1]">immigrant Black families</span>
              </h2>

              <p className="text-gray-600 leading-relaxed">
                Between Cultures Foundation is dedicated to uplifting immigrant
                Black populations and fostering diversity. Through education,
                advocacy, and community programs, we empower individuals,
                celebrate cultural heritage, and build inclusive spaces where
                families thrive and traditions are honored. Our mission is to
                bridge cultures, strengthen communities, and create lasting
                opportunities for growth and connection.
              </p>
            </div>

            {/* Our Vision */}
            <div className="space-y-6">
              <div>
                <span className="text-sm font-medium text-gray-600 uppercase tracking-wider">
                  Our Vision
                </span>
              </div>

              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
                Fostering communities where{" "}
                <span className="text-[#a8c499]">
                  immigrant Black Canadians thrive
                </span>
              </h2>

              <p className="text-gray-600 leading-relaxed">
                To foster communities where immigrant Black Canadians feel
                valued, connected, and empowered—where diversity strengthens
                communities, families thrive with support, and lifelong learning
                stimulates opportunity and inclusion for all.
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-12 text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-[#a8c499] to-[#a097d1] text-white px-8 py-3 rounded-lg font-semibold hover:from-[#96b085] hover:to-[#8e83bd] transition-all duration-200 transform hover:scale-105 shadow-md">
                Join Our Mission
              </button>
              <button className="border-2 border-[#a8c499] text-[#a8c499] px-8 py-3 rounded-lg font-semibold hover:bg-[#a8c499] hover:text-white transition-all duration-200">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-[#a8c499] mb-2">
                500+
              </div>
              <div className="text-gray-600 font-medium">
                Families Supported
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-[#a097d1] mb-2">
                15
              </div>
              <div className="text-gray-600 font-medium">Programs Active</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-[#a8c499] mb-2">
                25+
              </div>
              <div className="text-gray-600 font-medium">Cultural Events</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-[#a097d1] mb-2">
                10+
              </div>
              <div className="text-gray-600 font-medium">Years of Impact</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const TeamSection = () => {
  const teamMembers = [
    {
      name: "Amara Okafor",
      role: "Executive Director",
      image: "/team-1.jpg",
      social: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
      },
    },
    {
      name: "Marcus Thompson",
      role: "Program Coordinator",
      image: "/team-1.jpg",
      social: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
      },
    },
    {
      name: "Fatima Al-Hassan",
      role: "Head of Advocacy",
      image: "/team-1.jpg",
      social: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
      },
    },
    {
      name: "James Mitchell",
      role: "Community Outreach",
      image: "/team-1.jpg",
      social: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
      },
    },
    {
      name: "Kofi Asante",
      role: "Cultural Programs",
      image: "/team-1.jpg",
      social: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
      },
    },
    {
      name: "Sarah Mukamana",
      role: "Associate Director",
      image: "/team-1.jpg",
      social: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
      },
    },
    {
      name: "David Chen",
      role: "Finance Lead",
      image: "/team-1.jpg",
      social: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
      },
    },
    {
      name: "Rachel Williams",
      role: "Volunteer Coordinator",
      image: "/team-1.jpg",
      social: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
      },
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-6">
            Meet our team
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Our diverse team brings together expertise in community development,
            cultural advocacy, and family support to empower immigrant Black
            families.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                {/* Profile Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Member Info */}
                <div className="p-6 text-center">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{member.role}</p>

                  {/* Social Links */}
                  <div className="flex justify-center space-x-3">
                    <a
                      href={member.social.facebook}
                      className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-[#a8c499] hover:text-white transition-colors duration-200"
                    >
                      <Facebook className="w-4 h-4" />
                    </a>
                    <a
                      href={member.social.twitter}
                      className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-[#a8c499] hover:text-white transition-colors duration-200"
                    >
                      <Twitter className="w-4 h-4" />
                    </a>
                    <a
                      href={member.social.linkedin}
                      className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-[#a097d1] hover:text-white transition-colors duration-200"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Join Our Team Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-[#a8c499]/10 to-[#a097d1]/10 rounded-3xl p-8 lg:p-12 max-w-4xl mx-auto">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Want to join our mission?
            </h2>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              We&lsquo;re always looking for passionate individuals who share
              our commitment to empowering immigrant Black families and building
              inclusive communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-[#a8c499] to-[#a097d1] text-white px-8 py-3 rounded-lg font-semibold hover:from-[#96b085] hover:to-[#8e83bd] transition-all duration-200 transform hover:scale-105 shadow-md">
                View Open Positions
              </button>
              <button className="border-2 border-[#a8c499] text-[#a8c499] px-8 py-3 rounded-lg font-semibold hover:bg-[#a8c499] hover:text-white transition-all duration-200">
                Volunteer With Us
              </button>
            </div>
          </div>
        </div>

        {/* Team Values */}
        <div className="mt-20">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 text-center mb-12">
            Our Team Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#a8c499] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">C</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Cultural Respect
              </h3>
              <p className="text-gray-600">
                We honor and celebrate the diverse backgrounds and traditions of
                the families we serve.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#a097d1] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">I</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Inclusive Excellence
              </h3>
              <p className="text-gray-600">
                We strive for excellence while ensuring everyone feels welcomed
                and valued.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#a8c499] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">E</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Empowerment Focus
              </h3>
              <p className="text-gray-600">
                We believe in building capacity and supporting families to
                achieve their goals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
