"use client";

import { motion } from "framer-motion";
import { Facebook, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import React, { useRef, useState } from "react";

export const AboutUsSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleVideoPlay = () => {
    setIsPlaying(true);
  };

  const handleVideoPause = () => {
    setIsPlaying(false);
  };

  const handleVideoEnded = () => {
    setIsPlaying(false);
  };

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex items-center justify-center space-x-3 mb-6"
          >
            <div className="w-12 h-0.5 bg-[#a8c499]"></div>
            <span className="text-sm font-medium text-gray-600 uppercase tracking-wider">
              Our Story
            </span>
            <div className="w-12 h-0.5 bg-[#a8c499]"></div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: -80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight mb-6"
          >
            From Personal Experience to Purpose: The Story Behind
            <span className="text-[#a8c499]"> Between Cultures</span>
          </motion.h1>
        </div>

        {/* Founder Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-20">
          {/* Left Content - Founder Image */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/team/anaka-amadike.jpeg"
                alt="Amaka Amadike, Founder and Executive Director"
                className="w-full h-96 object-cover"
              />
            </div>
            <div className="absolute inset-0 rounded-3xl border-4 border-[#a8c499]/30 pointer-events-none"></div>
          </motion.div>

          {/* Right Content - Founder Bio */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-gradient-to-br from-green-50 to-green-50 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Meet Our Founder
                </h3>
                <p className="text-gray-700 font-medium">
                  <span className="text-[#a8c499] font-bold">
                    Amaka Amadike
                  </span>{" "}
                  is the founder and Executive Director of Between Cultures
                  Foundation. She has lived and worked in four different
                  countries across three continents.
                </p>
              </div>

              <div className="space-y-4">
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  viewport={{ once: true }}
                  className="text-gray-600 leading-relaxed"
                >
                  Amaka&#39;s journey into advocacy for culturally inclusive
                  childcare began in 1999 while living in Ireland with her young
                  family. After finishing class one afternoon, she arrived at
                  the childcare centre to pick up her toddler son and found him
                  strapped into a highchair with yogurt smeared across his face.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.0 }}
                  viewport={{ once: true }}
                  className="text-gray-600 leading-relaxed"
                >
                  As she waited for the educator to clean him up, a staff member
                  approached with a comment that would leave a lasting mark:
                  they were struggling to communicate with her son because, in
                  her words,{" "}
                  <em>&#34;he doesn&#39;t understand English.&#34;</em>
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                  viewport={{ once: true }}
                  className="text-gray-600 leading-relaxed"
                >
                  Amaka and her husband had made the intentional decision to
                  speak their native language, Igbo, at home to their child.
                  They wanted their children to remain connected to their
                  cultural roots while growing up in a different country.
                </motion.p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* The Turning Point */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-purple-50 to-green-50 rounded-3xl p-8 lg:p-12 mb-20"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
              The Moment That Changed Everything
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              What concerned Amaka most was that this educator—someone who
              should have understood child development and the importance of
              home language—seemed unaware of the value of linguistic and
              cultural identity in a young child&#39;s life.
            </p>
            <blockquote className="text-xl font-medium text-[#a8c499] italic">
              &#34;How was her son&#39;s sense of belonging being nurtured? Was
              he truly seen and supported in that environment?&#34;
            </blockquote>
          </div>
        </motion.div>

        {/* Journey Continues */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-20">
          {/* Left Content */}
          <div className="space-y-8">
            <motion.h3
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-2xl lg:text-3xl font-bold text-gray-900"
            >
              From Experience to Action
            </motion.h3>

            <div className="space-y-6">
              <motion.p
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-gray-600 leading-relaxed"
              >
                Years later, after relocating to Calgary, Canada, Amaka started
                a day home so she could stay close to her children while earning
                an income. As she re-entered the early childhood education
                sector, she began to witness patterns—subtle and overt—that
                reminded her of her earlier experience.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                className="text-gray-600 leading-relaxed"
              >
                Immigrant children, she noticed, were still being misunderstood,
                mislabelled, or treated as &#34;less than&#34; in spaces meant
                to nurture their growth. Her career progressed from frontline
                educator to leadership roles, but her mission never changed: to
                ensure that every child—regardless of their skin colour or
                cultural background—has their culture valued, respected, and
                reflected in their learning environment.
              </motion.p>
            </div>
          </div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-gray-600 leading-relaxed">
              Amaka&#39;s commitment deepened when she began teaching Indigenous
              Early Childhood Education. Immersing herself in teachings like the
              Medicine Wheel reaffirmed her belief that a child&#39;s holistic
              development must include cultural and spiritual identity.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Throughout her teaching journey at various post-secondary
              institutions, Amaka listened to story after story from her
              immigrant students about the discrimination their children faced
              in Alberta&#39;s childcare system. These recurring experiences
              stirred something in her. She knew it was time to take action.
            </p>

            <div className="bg-[#a8c499]/10 border-l-4 border-[#a8c499] pl-6 py-4">
              <p className="text-gray-700 font-medium italic">
                &#34;This led to the founding of Between Cultures—a bold step
                toward advocating for culturally safe, respectful, and inclusive
                early learning spaces.&#34;
              </p>
            </div>
          </motion.div>
        </div>

        {/* Video Section */}
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <video
              ref={videoRef}
              className="w-full h-64 md:h-[500px] object-cover"
              controls
              poster="/about/thumbnail.png"
              preload="metadata"
              onPlay={handleVideoPlay}
              onPause={handleVideoPause}
              onEnded={handleVideoEnded}
            >
              <source src="/about/about-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Custom Play Button Overlay */}
            {!isPlaying && (
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center group hover:bg-black/30 transition-colors duration-300">
                <motion.button
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  transition={{
                    duration: 0.2,
                    delay: 0.1,
                    type: "spring",
                    stiffness: 200,
                  }}
                  onClick={handlePlayVideo}
                  className="w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300 shadow-lg focus:outline-none focus:ring-4 focus:ring-white/50"
                  aria-label="Play video"
                >
                  <div className="w-0 h-0 border-l-[16px] border-l-gray-700 border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ml-1"></div>
                </motion.button>
              </div>
            )}

            <div className="absolute inset-0 rounded-2xl border-4 border-[#a8c499]/30 pointer-events-none"></div>
          </div>
        </motion.div>

        {/* Mission and Vision Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-green-50 to-green-50 rounded-3xl p-8 lg:p-12"
          >
            <div className="space-y-6">
              <div>
                <span className="text-2xl lg:text-3xl font-bold text-gray-900">
                  Our Mission
                </span>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To empower immigrant and racialized children in childcare by
                bridging cultural understanding between their heritage and
                Western practices. We collaborate with caregivers, educators,
                and communities to create inclusive early learning environments
                that celebrate and reflect diverse cultural identities, ensuring
                every child feels seen, valued, and supported.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-purple-50 to-purple-50 rounded-3xl p-8 lg:p-12"
          >
            <div className="space-y-6">
              <div>
                <span className="text-2xl lg:text-3xl font-bold text-gray-900">
                  Our Vision
                </span>
              </div>
              <p className="text-gray-600 leading-relaxed">
                A society where all children, regardless of cultural background,
                thrive in early learning spaces that honor their heritage,
                foster mutual understanding, and embrace the rich tapestry of
                global traditions through culturally responsive care and
                education.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Closing Statement */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="bg-gradient-to-br from-[#a8c499]/10 to-[#a097d1]/10 rounded-3xl p-8 lg:p-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
              A Movement Born from Purpose
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
              What began as a painful experience in Ireland has now become a
              powerful movement in Alberta. For Amaka, this is more than work—it
              is a life&#39;s mission to ensure that every child is seen, heard,
              and embraced for who they are, including the culture they come
              from.
            </p>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: "500+",
                label: "Families Supported",
                color: "text-[#a8c499]",
              },
              {
                number: "15",
                label: "Programs Active",
                color: "text-[#a097d1]",
              },
              {
                number: "25+",
                label: "Cultural Events",
                color: "text-[#a8c499]",
              },
              {
                number: "10+",
                label: "Years of Impact",
                color: "text-[#a097d1]",
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.4 + index * 0.1,
                }}
                viewport={{ once: true }}
                className="text-center"
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
                  className={`text-3xl lg:text-4xl font-bold ${stat.color} mb-2`}
                >
                  {stat.number}
                </motion.div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export const TeamSection = () => {
  const executiveTeam = [
    {
      name: "Amaka Amadike",
      role: "Executive Director",
      image: "/team/anaka-amadike.jpeg",
      social: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
      },
    },
  ];

  const boardMembers = [
    {
      name: "Daisy Iyeh",
      role: "Board Member",
      image: "/team/daisy-iyeh.jpeg",
      social: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
      },
    },
    {
      name: "Amaka Amadike",
      role: "Board Member",
      image: "/team/anaka-amadike.jpeg",
      social: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
      },
    },
    {
      name: "Carlton Osakwe",
      role: "Board Member",
      image: "/",
      social: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
      },
    },
  ];

  const renderTeamMember = (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    member: { name: any; role: any; image: any; social: any },
    index: React.Key | null | undefined
  ) => (
    <div key={index} className="group">
      <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
        {/* Profile Image */}
        <div className="relative h-64 overflow-hidden">
          <Image
            src={member.image}
            fill
            alt={member.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
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
  );

  return (
    <>
      {/* Header Section with Contrasted Background */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-[#a8c499] to-[#8e83bd] relative overflow-hidden">
        {/* Background Pattern/Overlay */}
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#a8c499]/10 to-[#a097d1]/10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-6">
              Meet our team
            </h1>
            <p className="text-lg lg:text-xl text-gray-200 max-w-3xl mx-auto">
              Our dedicated team of professionals working to empower immigrant
              families and create inclusive childcare environments for every
              child.
            </p>
          </div>
        </div>
      </section>

      {/* Main Team Content */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto flex items-center flex-col px-4 sm:px-6 lg:px-8">
          {/* Executive Leadership */}
          <div className="mb-16">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 text-center mb-8">
              Executive Leadership
            </h2>
            <div className="flex justify-center">
              <div className="w-full max-w-sm">
                {renderTeamMember(executiveTeam[0], 0)}
              </div>
            </div>
          </div>

          {/* Board of Directors */}
          <div className="mb-16">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 text-center mb-8">
              Board of Directors
            </h2>
            <div className="flex justify-center">
              <div className="flex flex-wrap justify-center gap-6 max-w-5xl">
                {boardMembers.map((member, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 w-full sm:w-64 md:w-72"
                  >
                    {renderTeamMember(member, index)}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Advisory Committee */}
          <div className="mb-16">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 text-center mb-8">
              Advisory Committee
            </h2>
            <div className="text-center">
              <div className="bg-white rounded-2xl p-8 shadow-md max-w-md mx-auto">
                <div className="w-16 h-16 bg-gradient-to-r from-[#a8c499] to-[#a097d1] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">?</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Coming Soon
                </h3>
                <p className="text-gray-600 text-sm">
                  We are currently building our advisory committee to bring
                  additional expertise and guidance to our mission.
                </p>
              </div>
            </div>
          </div>

          {/* Join Our Team Section */}
          <div className="mt-20 text-center">
            <div className="bg-gradient-to-r from-[#a8c499]/10 to-[#a097d1]/10 rounded-3xl p-8 lg:p-12 max-w-4xl mx-auto">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                Want to join our mission?
              </h2>
              <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
                We are continually seeking passionate individuals who share our
                dedication to empowering immigrant families and their children
                through education, support, and culturally responsive programs
                that help overcome cultural challenges in childcare.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
                  Collaboration and Community:{" "}
                </h3>
                <p className="text-gray-600">
                  We believe in the power of partnerships—with families,
                  childcare providers, and community organizations—to create
                  inclusive, sustainable impact.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#a097d1] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">I</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Cultural Respect and Inclusion:{" "}
                </h3>
                <p className="text-gray-600">
                  We honor and celebrate the diverse cultural backgrounds of the
                  families and communities we serve, recognizing culture as a
                  strength in early learning.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#a8c499] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">E</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Equity and Justice:
                </h3>
                <p className="text-gray-600">
                  We advocate for fair and inclusive systems where all children,
                  regardless of cultural background or immigration status, are
                  viewed as citizens with rights, have access to quality,
                  respectful childcare.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
