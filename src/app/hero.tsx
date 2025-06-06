"use client";
import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play } from "lucide-react";
import Image from "next/image";
import { Users, Heart, BookOpen, MessageCircle } from "lucide-react";
import AppLogo from "@/components/appLogo";

export const HeroSection = () => {
  // Background images array - you can add more images here
  const backgroundImages = useMemo(
    () => ["/new-hero-4.jpg", "/new-hero-3.jpeg", "/new-hero-5.jpg"],
    []
  );

  // Welcome messages in African languages only
  const welcomeMessages = useMemo(
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

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [nextImageIndex, setNextImageIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const [windowSize, setWindowSize] = useState({ width: 1200, height: 800 });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const updateSize = () => {
        setWindowSize({ width: window.innerWidth, height: window.innerHeight });
      };

      updateSize(); // Set initial size
      window.addEventListener("resize", updateSize);
      return () => window.removeEventListener("resize", updateSize);
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const imagePromises = backgroundImages.map((src) => {
      return new Promise((resolve, reject) => {
        // @ts-expect-error next/image does not have a global window.Image type
        const img = new Image();
        img.onload = resolve;
        img.onerror = reject;
        img.src = src;
      });
    });

    Promise.all(imagePromises)
      .then(() => setImagesLoaded(true))
      .catch((error) => {
        console.warn("Some images failed to load:", error);
        setImagesLoaded(true);
      });
  }, [backgroundImages]);

  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (!imagesLoaded) return;

    const imageInterval = setInterval(() => {
      setIsTransitioning(true);

      setTimeout(() => {
        setCurrentImageIndex(nextImageIndex);
        setNextImageIndex((nextImageIndex + 1) % backgroundImages.length);
        setIsTransitioning(false);
      }, 1000);
    }, 6000);

    return () => clearInterval(imageInterval);
  }, [nextImageIndex, backgroundImages.length, imagesLoaded]);

  // Typing animation effect
  useEffect(() => {
    const currentMessage = welcomeMessages[currentMessageIndex];
    let timeoutId: string | number | NodeJS.Timeout | undefined;

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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images with Seamless Transitions */}
      <div className="absolute inset-0 bg-gray-900">
        {imagesLoaded && (
          <>
            {/* Base background image (always visible) */}
            <div className="absolute inset-0">
              <Image
                src={backgroundImages[currentImageIndex]}
                fill
                alt="Community background"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Transitioning image overlay */}
            <AnimatePresence>
              {isTransitioning && (
                <motion.div
                  key={nextImageIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    duration: 1,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0"
                >
                  <Image
                    src={backgroundImages[nextImageIndex]}
                    fill
                    alt="Community background"
                    className="w-full h-full object-cover"
                    style={{
                      filter: "brightness(0.7) contrast(1.1)",
                    }}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </>
        )}

        {/* Dynamic gradient overlay that changes with images */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/5 via-black/5 to-black/5"></div>
        {/* Animated particles overlay */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-gradient-to-r from-[#a8c499] to-[#a097d1] rounded-full"
              animate={{
                x: [0, Math.random() * windowSize.width],
                y: [0, Math.random() * windowSize.height],
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 8 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "easeInOut",
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Project Name - BetweenCultures - ANIMATE FROM TOP */}
        <motion.div
          initial={{ opacity: 0, y: -80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-8 mt-8"
        >
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-wider mb-4"
            animate={{
              textShadow: [
                "0 0 20px rgba(168,196,153,0.5)",
                "0 0 40px rgba(160,151,209,0.5)",
                "0 0 20px rgba(168,196,153,0.5)",
              ],
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white drop-shadow-2xl">
              Between
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white drop-shadow-2xl italic">
              Cultures
            </span>
          </motion.h1>
          <motion.div
            className="w-32 h-1 bg-gradient-to-r from-white to-white mx-auto rounded-full"
            animate={{
              width: ["128px", "200px", "128px"],
              opacity: [1, 0.7, 1],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </motion.div>

        {/* Animated Welcome Message - ANIMATE FROM LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-12"
        >
          <div className="text-3xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-white mb-4">
            <span className="inline-block min-w-[250px]">
              {displayedText}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{
                  duration: 0.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                className="inline-block w-1 h-12 bg-white ml-2"
              />
            </span>
          </div>
          <div className="text-lg text-white/80 font-mono tracking-wide">
            {welcomeMessages[currentMessageIndex]?.language}
          </div>
        </motion.div>

        {/* Main Tagline - ANIMATE FROM RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white drop-shadow-2xl">
              Guiding Immigrant Families to Childcare Success
            </span>
          </h2>
          <p className="text-lg md:text-xl capitalize text-white/90 leading-relaxed max-w-4xl mx-auto font-light">
            Empowering immigrant children in childcare and their families
            through education, support, and culturally responsive programs that
            foster connection and inclusivity in childcare spaces.
          </p>
        </motion.div>

        {/* CTA Buttons - ANIMATE FROM BOTTOM */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
        >
          <motion.button
            className="bg-gradient-to-r from-[#a8c499] to-[#a097d1] text-white px-10 py-4 rounded-lg font-bold text-lg shadow-xl"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(168,196,153,0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Discover Our Programs
          </motion.button>
          <motion.button
            className="flex items-center justify-center text-white border-2 border-white px-10 py-4 rounded-lg font-bold text-lg"
            whileHover={{
              scale: 1.05,
              backgroundColor: "rgba(255,255,255,0.1)",
              borderColor: "rgba(168,196,153,1)",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Play className="w-6 h-6 mr-3" />
            Watch Our Story
          </motion.button>
        </motion.div>

        {/* Statistics - ANIMATE EACH FROM DIFFERENT DIRECTIONS */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          {stats.map((stat, index) => {
            const animationDirections = [
              { x: -100, y: 0 },
              { x: 0, y: -100 },
              { x: 100, y: 0 },
            ];

            return (
              <motion.div
                key={stat.label}
                initial={{
                  opacity: 0,
                  ...animationDirections[index],
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                  y: 0,
                }}
                transition={{ duration: 0.6, delay: 1.6 + index * 0.2 }}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(255,255,255,0.15)",
                }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 cursor-pointer"
              >
                <motion.div
                  className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-white mb-2"
                  animate={{
                    backgroundPosition: ["0%", "100%", "0%"],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-white/90 text-lg font-medium uppercase tracking-wide">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Enhanced Decorative Elements */}
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 border-2 border-[#a8c499]/30 rounded-full"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.7, 0.3],
          rotate: [0, 180, 360],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-16 h-16 border-2 border-[#a097d1]/30 rounded-full"
        animate={{
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div
        className="absolute top-1/2 left-5 w-2 h-2 bg-[#a8c499] rounded-full"
        animate={{
          scale: [0, 1, 0],
          opacity: [0, 1, 0],
        }}
        transition={{ duration: 2, repeat: Infinity, delay: 0 }}
      />
      <motion.div
        className="absolute top-1/3 right-5 w-2 h-2 bg-[#a097d1] rounded-full"
        animate={{
          scale: [0, 1, 0],
          opacity: [0, 1, 0],
        }}
        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
      />

      {/* Image transition indicator dots */}
      {imagesLoaded && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {backgroundImages.map((_, index) => (
            <motion.button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentImageIndex
                  ? "bg-gradient-to-r from-[#a8c499] to-[#a097d1]"
                  : "bg-white/30"
              }`}
              whileHover={{ scale: 1.2 }}
              onClick={() => {
                if (index !== currentImageIndex && !isTransitioning) {
                  setNextImageIndex(index);
                  setIsTransitioning(true);
                  setTimeout(() => {
                    setCurrentImageIndex(index);
                    setNextImageIndex((index + 1) % backgroundImages.length);
                    setIsTransitioning(false);
                  }, 1000);
                }
              }}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export const AboutUsSection = () => {
  return (
    <section className="py-16 lg:py-24 min-h-screen overflow-hidden items-center flex bg-gradient-to-br from-[#a097d1] to-[#a8c499]">
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
              <div className="w-12 h-0.5 bg-gray-600"></div>
              <span className="text-sm font-medium text-gray-600 uppercase tracking-wider">
                Know About Us
              </span>
            </motion.div>

            {/* Main Heading - ANIMATE FROM TOP */}
            <motion.h2
              initial={{ opacity: 0, y: -80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight"
            >
              We provide a place for{" "}
              <span className="text-white">empowering immigrant families</span>
            </motion.h2>

            {/* First Description Paragraph - ANIMATE FROM LEFT */}
            <motion.p
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-base text-gray-600 leading-relaxed"
            >
              We support immigrant and racialized children and their families in
              navigating childcare systems in Canada while honoring and
              integrating their cultural identities. We work collaboratively
              with families, educators, and early learning institutions to build
              bridges between cultures — ensuring children grow and thrive in
              environments that reflect who they are.
            </motion.p>

            {/* CTA Button - ANIMATE FROM BOTTOM */}
            <motion.button
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:from-[#96b085] hover:to-[#8e83bd] transition-all duration-200 transform hover:scale-105 shadow-md"
            >
              Learn More
            </motion.button>
          </div>

          {/* Right Image - ANIMATE FROM RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/about-us-hero1.jpg"
                alt="Children and families participating in community activities"
                width={600}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export const WhatWeDoSection = () => {
  const services = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Cultural Orientation for Families",
      description:
        "We offer workshops and personalized support to help families understand Western cultural norms, childcare systems, and early learning philosophies—while recognizing and respecting their own traditions.",
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Inclusive Childcare Support",
      description:
        "We work directly with childcare providers to integrate culturally diverse practices into daily routines, classroom activities, storytelling, food, and family engagement.",
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Educator Training & Resources",
      description:
        "We provide training, toolkits, and one-on-one mentoring for early childhood educators to promote equity, inclusion, and cultural humility in their teaching.",
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Storytelling Circles",
      description:
        "Safe spaces for families and educators to share experiences, ask questions, and build cross-cultural understanding in a welcoming and judgment-free environment. Pod cast creation and other initiatives that amplify voices rarely heard.",
    },
  ];

  return (
    <section className="py-16 lg:py-24 min-h-screen overflow-hidden items-center flex bg-gradient-to-br from-amber-50 to-orange-50">
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
                What We Do
              </span>
            </motion.div>

            {/* Main Heading - ANIMATE FROM TOP */}
            <motion.h2
              initial={{ opacity: 0, y: -80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight"
            >
              Some services we provide{" "}
              <span className="text-[#8e83bd]">for our families</span>
            </motion.h2>

            {/* Description - ANIMATE FROM LEFT */}
            <motion.p
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-[16px] text-gray-600 leading-relaxed"
            >
              Our programs support immigrant and racialized children and
              families in navigating childcare in Alberta and Canada. We
              collaborate with childcare providers and institutions to create
              culturally responsive environments that meet the needs of
              immigrant children.
            </motion.p>

            {/* Services List - STAGGERED ANIMATIONS FROM ALTERNATING SIDES */}
            <div className="space-y-6">
              {services.map((service, index) => {
                // Alternate animation directions for each service
                const isEven = index % 2 === 0;
                return (
                  <motion.div
                    key={index}
                    initial={{
                      opacity: 0,
                      x: isEven ? -100 : 100, // Even indices from left, odd from right
                    }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.7,
                      delay: 0.8 + index * 0.2, // Staggered delays
                    }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4 group"
                  >
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
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right Image - ANIMATE FROM RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 120 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="relative"
          >
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

              {/* Optional decorative element - ANIMATE WITH SCALE */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.6,
                  delay: 1.5,
                  type: "spring",
                  stiffness: 200,
                }}
                viewport={{ once: true }}
                className="absolute top-6 right-6 w-16 h-16 bg-white/90 rounded-full flex items-center justify-center"
              >
                <div className="w-8 h-8 bg-[#a8c499] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">BCF</span>
                </div>
              </motion.div>
            </div>

            {/* Background decorative shapes - ANIMATE WITH DIFFERENT DELAYS */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 1.8 }}
              viewport={{ once: true }}
              className="absolute -top-4 -right-4 w-20 h-20 bg-[#a097d1]/20 rounded-full blur-xl"
            ></motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 2.0 }}
              viewport={{ once: true }}
              className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#a8c499]/20 rounded-full blur-xl"
            ></motion.div>
          </motion.div>
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
        "A podcast and video series featuring personal stories of  and Caribbean immigrants, sharing cultural identity and integration experiences.",
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
    <section className="py-16 lg:py-24 min-h-screen overflow-hidden bg-gradient-to-br from-[#a097d1] to-[#a8c499]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          {/* Section Label - ANIMATE FROM LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex items-center justify-center space-x-3 mb-6"
          >
            <div className="w-12 h-0.5 bg-[#a8c499]"></div>
            <span className="text-sm font-medium text-gray-600 uppercase tracking-wider">
              Projects We Have Done
            </span>
          </motion.div>

          {/* Main Heading - ANIMATE FROM TOP */}
          <motion.h2
            initial={{ opacity: 0, y: -80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight"
          >
            We are creating welcoming, <br />
            inclusive childcare spaces for immigrant children and families
            <br />
            <span className="text-white"> to thrive.</span>
          </motion.h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            // Different animation directions based on grid position
            const getAnimationDirection = (index: number) => {
              const patterns = [
                { x: -100, y: 0 },
                { x: 0, y: -100 },
                { x: 100, y: 0 },
                { x: 100, y: 0 },
                { x: 0, y: 100 },
                { x: -100, y: 0 },
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
                  duration: 0.8,
                  delay: 0.6 + index * 0.15, // Staggered delays
                }}
                viewport={{ once: true }}
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
                    {/* Subtitle - ANIMATE WITH DELAY */}
                    <motion.span
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 0.9, y: 0 }}
                      transition={{
                        duration: 0.6,
                        delay: 0.8 + index * 0.15,
                      }}
                      viewport={{ once: true }}
                      className="text-sm font-medium mb-2"
                    >
                      {project.subtitle}
                    </motion.span>

                    {/* Title - ANIMATE WITH DELAY */}
                    <motion.h3
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.6,
                        delay: 0.9 + index * 0.15,
                      }}
                      viewport={{ once: true }}
                      className="text-xl font-bold mb-3"
                    >
                      {project.title}
                    </motion.h3>

                    {/* Description - ANIMATE WITH DELAY */}
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 0.9, y: 0 }}
                      transition={{
                        duration: 0.6,
                        delay: 1.0 + index * 0.15,
                      }}
                      viewport={{ once: true }}
                      className="text-sm leading-relaxed mb-4"
                    >
                      {project.description}
                    </motion.p>

                    {/* CTA Button - ANIMATE WITH SCALE */}
                    <motion.button
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.5,
                        delay: 1.1 + index * 0.15,
                        type: "spring",
                        stiffness: 200,
                      }}
                      viewport={{ once: true }}
                      className="self-start bg-white text-gray-900 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 transform hover:scale-105"
                    >
                      {project.buttonText}
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
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
      { name: "Volunteer", href: "/volunteer" },
    ],
    More: [
      { name: "Programs", href: "/programs" },
      { name: "Events", href: "/events" },
      { name: "Testimonials", href: "/testimonials" },
      { name: "Blog", href: "/blog" },
    ],
    Connect: [
      { name: "Facebook", href: "#" },
      { name: "Instagram", href: "#" },
      { name: "Whatsapp", href: "#" },
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
      <section className="py-16 lg:py-24 bg-white">
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
                    immigrant children in childcare!
                  </span>
                </h2>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-gradient-to-r from-[#96b085] to-[#8e83bd] text-white px-8 py-3 rounded-lg font-semibold hover:from-[#96b085] hover:to-[#8e83bd] transition-all duration-200 transform hover:scale-105 shadow-lg">
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
                className="bg-[#96b085] rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-gray-100">
                        {event.date}
                      </div>
                      <div className="text-sm text-gray-100 uppercase">
                        {event.month}
                      </div>
                    </div>
                    <div className="flex-1">
                      <span className="text-xs text-gray-100 uppercase tracking-wide font-medium">
                        {event.label}
                      </span>
                      <h3 className="text-xl font-semibold text-gray-100 mt-1 mb-2">
                        {event.title}
                      </h3>
                      <p className="text-gray-100 text-sm leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                  </div>
                  <a
                    href={event.link}
                    className="flex-shrink-0 w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors duration-200"
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
      <footer className="bg-gradient-to-br from-amber-50 to-orange-50 text-gray-900 py-16 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Links Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
              {/* Logo */}
              <div className="col-span-2 md:col-span-1">
                <div className="text-md font-bold mb-6">
                  <AppLogo />
                </div>
              </div>

              {/* Footer Links */}
              {Object.entries(footerLinks).map(([category, links]) => (
                <div key={category}>
                  <h4 className="font-semibold mb-4 text-gray-900">
                    {category}
                  </h4>
                  <ul className="space-y-2">
                    {links.map((link, index) => (
                      <li key={index}>
                        <a
                          href={link.href}
                          className="text-gray-600 hover:text-[#a8c499] transition-colors duration-200 text-sm"
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
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                Subscribe to get our latest updates
              </h3>
              <div className="flex gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg bg-gray-50 text-gray-900 placeholder-gray-500 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#a8c499] focus:border-transparent"
                />
                <button
                  onClick={handleSubscribe}
                  className="bg-[#a8c499] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#96b085] transition-colors duration-200"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Border */}
          <div className="border-t border-gray-200 mt-12 pt-8 text-center">
            <p className="text-gray-600 text-sm">
              © 2025 Between Cultures Foundation. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};
