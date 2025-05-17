"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import Image from "next/image";
import { Users, Heart, BookOpen, MessageCircle } from "lucide-react";

export const HeroSection = () => {
  // Welcome messages in African languages only
  const welcomeMessages = React.useMemo(
    () => [
      { text: "Karibu", language: "Swahili (Kenya/Tanzania)" },
      { text: "Akwaaba", language: "Twi (Ghana)" },
      { text: "Sannu da zuwa", language: "Hausa (Nigeria/Niger)" },
      { text: "Nnọọ", language: "Igbo (Nigeria)" },
      { text: "Ẹ káàbọ̀", language: "Yoruba (Nigeria)" },
      { text: "Siyakwamukela", language: "Zulu (South Africa)" },
      { text: "Re a go amogela", language: "Tswana (Botswana)" },
      { text: "Welkom", language: "Afrikaans (South Africa)" },
      { text: "Bienvenue", language: "French (Congo/Senegal)" },
      { text: "Bem-vindo", language: "Portuguese (Angola/Mozambique)" },
      { text: "أهلا وسهلا", language: "Arabic (Egypt/Sudan)" },
      { text: "Murakaza neza", language: "Kinyarwanda (Rwanda)" },
      { text: "Waakye", language: "Ga (Ghana)" },
      { text: "Ndeewo", language: "Ndebele (Zimbabwe)" },
      { text: "Salama", language: "Malagasy (Madagascar)" },
      { text: "Bwanji", language: "Chichewa (Malawi)" },
      { text: "Habari", language: "Swahili (Tanzania)" },
      { text: "Sawubona", language: "Zulu (South Africa)" },
      { text: "Dumela", language: "Tswana (South Africa)" },
      { text: "Mhoro", language: "Shona (Zimbabwe)" },
    ],
    []
  );

  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  // Typing animation effect
  useEffect(() => {
    const currentMessage = welcomeMessages[currentMessageIndex];
    let timeoutId: ReturnType<typeof setTimeout>;

    if (isTyping) {
      // Typing effect
      if (displayedText.length < currentMessage.text.length) {
        timeoutId = setTimeout(() => {
          setDisplayedText(
            currentMessage.text.slice(0, displayedText.length + 1)
          );
        }, 100);
      } else {
        // Pause before erasing
        timeoutId = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
      }
    } else {
      // Erasing effect
      if (displayedText.length > 0) {
        timeoutId = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, 50);
      } else {
        // Move to next message
        setCurrentMessageIndex((prev) => (prev + 1) % welcomeMessages.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeoutId);
  }, [displayedText, isTyping, currentMessageIndex, welcomeMessages]);

  const stats = [
    { number: "500+", label: "Families Empowered" },
    { number: "15", label: "Cultural Languages Supported" },
    { number: "12", label: "Community Programs Active" },
  ];

  return (
    <section className="relative min-h-screen lg:pt-[150px] flex py-[30px]  overflow-hidden">
      <div className="absolute inset-0">
        <Image
          fill
          src="/hero7.jpg"
          alt="Children playing together"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/80"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-[30px] px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          {/* Animated Welcome Message */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-14"
          >
            <div className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-purple-400 mb-3">
              <span className="inline-block min-w-[300px]">
                {displayedText}
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{
                    duration: 0.5,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                  className="inline-block w-1 h-16 bg-green-400 ml-2"
                />
              </span>
            </div>
            <div className="text-lg text-green-300 font-mono tracking-wide">
              {welcomeMessages[currentMessageIndex]?.language}
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-3xl md:text-4xl lg:text-6xl font-black text-white leading-tight mb-8 tracking-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Empowering Immigrant
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-purple-400">
              Black Families
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xl md:text-2xl text-gray-200 leading-relaxed mb-10 max-w-3xl font-light"
          >
            Building strength, knowledge, and connection through culturally
            responsive programs that promote inclusive communities and foster
            cross-cultural understanding.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 mb-20"
          >
            <button className="bg-gradient-to-r from-green-500 to-purple-500 text-white px-10 py-4 rounded-lg font-bold text-lg hover:from-green-600 hover:to-purple-600 transition-all duration-200 transform hover:scale-105 shadow-lg">
              Discover Our Programs
            </button>
            <button className="flex items-center text-white border-2 border-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-gray-900 transition-all duration-200 transform hover:scale-105">
              <Play className="w-6 h-6 mr-3" />
              Watch Our Story
            </button>
          </motion.div>

          {/* Statistics */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col md:flex-row gap-12 items-start"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.2 }}
                className="flex-1"
              >
                <div className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-purple-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 text-lg font-medium uppercase tracking-wide">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
        >
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export const AboutUsSection = () => {
  return (
    <section className="py-16 lg:py-24 min-h-screen overflow-hidden items-center flex bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Section Label */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-0.5 bg-green-400"></div>
              <span className="text-sm font-medium text-gray-600 uppercase tracking-wider">
                Know About Us
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight">
              We provide a place for{" "}
              <span className="text-purple-400">
                empowering immigrant Black families
              </span>
            </h2>

            {/* Description */}
            <p className="text-base text-gray-600 leading-relaxed">
              Our foundation offers comprehensive programs supporting immigrant
              Black families with culturally responsive services in education,
              advocacy, mental health, and community building to ensure families
              thrive with dignity and cultural pride.
            </p>

            <p className="text-base text-gray-600 leading-relaxed">
              Our diverse programs address practical needs through family
              mentorship, parenting workshops, educational support, and
              community engagement while fostering cross-cultural understanding
              and preserving African heritage through arts, storytelling, and
              intergenerational connections.
            </p>

            {/* CTA Button */}
            <button className="bg-gradient-to-r from-green-400 to-purple-400 text-white px-8 py-3 rounded-lg font-semibold hover:from-[#96b085] hover:to-[#8e83bd] transition-all duration-200 transform hover:scale-105 shadow-md">
              Learn More
            </button>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/about-us-hero1.jpg"
                alt="Children and families participating in community activities"
                width={600}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const WhatWeDoSection = () => {
  const services = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Family Empowerment",
      description:
        "Comprehensive family mentorship programs providing culturally responsive parenting support, financial guidance, and legal assistance to strengthen immigrant Black families.",
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Mental Health & Wellness",
      description:
        "Culturally sensitive counseling services, wellness sessions, and peer support groups focused on emotional resilience and community healing.",
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Education & Training",
      description:
        "Adult education programs, leadership development for youth, and training workshops for parents and educators to improve academic outcomes and cultural pride.",
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Cultural Storytelling",
      description:
        "Stories Between Cultures podcast and community spaces for sharing traditions, heritage, and lived experiences while preserving cultural legacies.",
    },
  ];

  return (
    <section className="py-16 lg:py-24 min-h-screen overflow-hidden items-center flex bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
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
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight">
              Some services we provide{" "}
              <span className="text-purple-400">for our families</span>
            </h2>

            {/* Description */}
            <p className="text-lg text-gray-600 leading-relaxed">
              Through comprehensive programs and culturally responsive services,
              we empower immigrant Black families to thrive while celebrating
              their heritage and building bridges across communities.
            </p>

            {/* Services List */}
            <div className="space-y-6">
              {services.map((service, index) => (
                <div key={index} className="flex items-start space-x-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center text-white group-hover:bg-[#a8c499] transition-colors duration-300">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/about-us-hero2.jpg"
                alt="Family participating in cultural activities"
                width={600}
                height={800}
                className="w-full h-full object-cover"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

              {/* Optional decorative element */}
              <div className="absolute top-6 right-6 w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                <div className="w-8 h-8 bg-[#a8c499] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">BCF</span>
                </div>
              </div>
            </div>

            {/* Background decorative shapes */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#a097d1]/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#a8c499]/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const ProjectsSection = () => {
  const projects = [
    {
      title: "Stories Between Cultures",
      subtitle: "Cultural Storytelling",
      description:
        "A podcast and video series featuring personal stories of Black and Caribbean immigrants, sharing cultural identity and integration experiences.",
      image: "/projects-hero-1.jpg",
      buttonText: "Learn more",
    },
    {
      title: "Heritage Exchange",
      subtitle: "Intergenerational Program",
      description:
        "Connecting elders with youth for cultural preservation and leadership development, bridging generational gaps through tradition.",
      image: "/projects-hero-2.jpg",
      buttonText: "Learn more",
    },
    {
      title: "Community Dialogues",
      subtitle: "Cross-Cultural Understanding",
      description:
        "Monthly forums fostering dialogue, education, and celebration to advance cross-cultural understanding and community unity.",
      image: "/projects-hero-3.jpg",
      buttonText: "Learn more",
    },
    {
      title: "Cultural Cooking Classes",
      subtitle: "Community Engagement & Cultural Expression",
      description: "Traditional dish workshops for cultural appreciation.",
      image: "/projects-hero-4.jpg",
      buttonText: "Learn more",
    },
    {
      title: "Between Cultures Childcare",
      subtitle: "Child Development Centers",
      description: "Culturally responsive early childhood education.",
      image: "/projects-hero-6.jpg",
      buttonText: "Learn more",
    },
    {
      title: "Family Mentorship Network",
      subtitle: "Family Empowerment & Advocacy",
      description: "Experienced immigrant families mentor newcomers.",
      image: "/project-hero-5.jpg",

      buttonText: "Learn more",
    },
  ];

  return (
    <section className="py-16 lg:py-24 min-h-screen overflow-hidden bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          {/* Section Label */}
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-12 h-0.5 bg-[#a8c499]"></div>
            <span className="text-sm font-medium text-gray-600 uppercase tracking-wider">
              Projects We Have Done
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight">
            We are creating a place
            <br />
            where immigrant families
            <br />
            <span className="text-[#a097d1]">can thrive</span>
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Project Image */}
              <div className="relative h-[420px] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300"></div>

                {/* Content Overlay */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                  <span className="text-sm font-medium opacity-90 mb-2">
                    {project.subtitle}
                  </span>
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-sm opacity-90 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* CTA Button */}
                  <button className="self-start bg-white text-gray-900 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 transform hover:scale-105">
                    {project.buttonText}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Optional: View All Projects Button */}
        {/* <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-[#a8c499] to-[#a097d1] text-white px-8 py-3 rounded-lg font-semibold hover:from-[#96b085] hover:to-[#8e83bd] transition-all duration-200 transform hover:scale-105 shadow-md">
            View All Projects
          </button>
        </div> */}
      </div>
    </section>
  );
};

export const DonationBreakdownSection = () => {
  const donationData = [
    {
      category: "Family Empowerment Programs",
      percentage: 40,
      color: "#a8c499",
      description: "Mentorship, parenting workshops, and advocacy services",
    },
    {
      category: "Cultural Preservation",
      percentage: 25,
      color: "#a097d1",
      description: "Heritage exchange, storytelling, and arts programs",
    },
    {
      category: "Education & Training",
      percentage: 20,
      color: "#f4d03f",
      description: "Adult education, youth leadership development",
    },
    {
      category: "Mental Health Services",
      percentage: 10,
      color: "#f8c471",
      description: "Counseling, wellness sessions, peer support",
    },
    {
      category: "Administrative Costs",
      percentage: 5,
      color: "#f1948a",
      description: "Operations, staff, and organizational management",
    },
  ];

  // Calculate the donut chart segments
  const radius = 120;
  const strokeWidth = 60;
  const normalizedRadius = radius - strokeWidth * 0.5;
  const circumference = normalizedRadius * 2 * Math.PI;

  let cumulativePercentage = 0;

  return (
    <section className="py-16 lg:py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
              How we spend your donations and where it goes
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed">
              We understand that when you make a donation, you want to know
              exactly where your money is going and we pledge to be transparent.
            </p>

            {/* Legend */}
            <div className="space-y-4">
              {donationData.map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div
                    className="w-4 h-4 rounded-sm mt-1 flex-shrink-0"
                    style={{ backgroundColor: item.color }}
                  ></div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-medium text-white">
                        {item.percentage}% {item.category}
                      </span>
                    </div>
                    <p className="text-sm text-gray-400">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Chart */}
          <div className="flex justify-center">
            <div className="relative">
              <svg
                height={radius * 2}
                width={radius * 2}
                className="transform -rotate-90"
              >
                {/* Background circle */}
                <circle
                  stroke="#374151"
                  fill="transparent"
                  strokeWidth={strokeWidth}
                  r={normalizedRadius}
                  cx={radius}
                  cy={radius}
                />

                {/* Chart segments */}
                {donationData.map((item, index) => {
                  const strokeDasharray = `${
                    (item.percentage / 100) * circumference
                  } ${circumference}`;
                  const strokeDashoffset =
                    (-cumulativePercentage * circumference) / 100;

                  cumulativePercentage += item.percentage;

                  return (
                    <circle
                      key={index}
                      stroke={item.color}
                      fill="transparent"
                      strokeWidth={strokeWidth}
                      strokeDasharray={strokeDasharray}
                      strokeDashoffset={strokeDashoffset}
                      r={normalizedRadius}
                      cx={radius}
                      cy={radius}
                      className="transition-all duration-500 hover:opacity-80"
                      style={{
                        strokeLinecap: "round",
                      }}
                    />
                  );
                })}
              </svg>

              {/* Center content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">100%</div>
                  <div className="text-sm text-gray-400">Transparency</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <button className="bg-gradient-to-r from-green-400 to-purple-400 text-white px-8 py-3 rounded-lg font-semibold hover:from-[#96b085] hover:to-[#8e83bd] transition-all duration-200 transform hover:scale-105 shadow-lg">
              Make a Donation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export const EventsNewsletterSection = () => {
  const [email, setEmail] = useState("");

  const events = [
    {
      date: "13",
      month: "Feb",
      label: "NEXT EVENTS",
      title: "Cultural Heritage Festival",
      description:
        "Celebrating African traditions with music, dance, and storytelling from our community elders and youth.",
      link: "#",
    },
    {
      date: "25",
      month: "Feb",
      label: "NEXT EVENTS",
      title: "Parent Empowerment Workshop",
      description:
        "Culturally responsive parenting strategies and educational advocacy for immigrant families.",
      link: "#",
    },
  ];

  const footerLinks = {
    Home: [
      { name: "About us", href: "/about" },
      { name: "Vision", href: "/vision" },
      { name: "What we do", href: "/services" },
      { name: "Careers", href: "/careers" },
    ],
    More: [
      { name: "Programs", href: "/programs" },
      { name: "Events", href: "/events" },
      { name: "Stories", href: "/stories" },
      { name: "Blog", href: "/blog" },
    ],
    Connect: [
      { name: "Facebook", href: "#" },
      { name: "Instagram", href: "#" },
      { name: "Twitter", href: "#" },
      { name: "LinkedIn", href: "#" },
    ],
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Subscribing email:", email);
    setEmail("");
  };
  return (
    <div className="bg-white">
      {/* CTA Banner */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/footer.jpg"
              alt="Families engaging in cultural activities"
              width={1200}
              height={400}
              className="w-full h-64 md:h-80 object-cover"
            />
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
              <div className="text-center text-white px-6">
                <h2 className="text-2xl md:text-4xl font-bold mb-6">
                  You can contribute to support
                  <br />
                  <span className="text-[#a8c499]">
                    immigrant Black families!
                  </span>
                </h2>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-gradient-to-r from-green-400 to-purple-400 text-white px-8 py-3 rounded-lg font-semibold hover:from-[#96b085] hover:to-[#8e83bd] transition-all duration-200 transform hover:scale-105 shadow-lg">
                    Join as a volunteer
                  </button>
                  <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-200">
                    Donate
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Events</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {events.map((event, index) => (
              <div
                key={index}
                className="bg-yellow-100 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-gray-900">
                        {event.date}
                      </div>
                      <div className="text-sm text-gray-600 uppercase">
                        {event.month}
                      </div>
                    </div>
                    <div className="flex-1">
                      <span className="text-xs text-gray-500 uppercase tracking-wide font-medium">
                        {event.label}
                      </span>
                      <h3 className="text-xl font-semibold text-gray-900 mt-1 mb-2">
                        {event.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                  </div>
                  <a
                    href={event.link}
                    className="flex-shrink-0 w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors duration-200"
                  >
                    <svg
                      className="w-4 h-4 text-gray-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Links Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
              {/* Logo */}
              <div className="col-span-2 md:col-span-1">
                <div className="text-md font-bold mb-6">
                  <span className="text-[#a8c499]">Between</span>
                  <span className="text-white">Cultures</span>
                </div>
              </div>

              {/* Footer Links */}
              {Object.entries(footerLinks).map(([category, links]) => (
                <div key={category}>
                  <h4 className="font-semibold mb-4 text-white">{category}</h4>
                  <ul className="space-y-2">
                    {links.map((link, index) => (
                      <li key={index}>
                        <a
                          href={link.href}
                          className="text-gray-400 hover:text-[#a8c499] transition-colors duration-200 text-sm"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Newsletter Section */}
            <div>
              <h3 className="text-xl font-semibold mb-4">
                Subscribe to get latest updates
              </h3>
              <div className="flex gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#a8c499] focus:border-transparent"
                />
                <button
                  onClick={handleSubscribe}
                  className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Border */}
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2025 Between Cultures Foundation. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default EventsNewsletterSection;
