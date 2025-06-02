"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Building,
  Flame,
  Heart,
  Music,
  Users,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export const WhatWeDoSection = () => {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      icon: <Users className="w-6 h-6 text-white" />,
      title: "Family Empowerment",
      description:
        "Family mentorship programs, community action and policy advocacy, and culturally relevant parenting workshops that support child development and family wellness.",
      bgColor: "bg-[#a8c499]",
      modalContent: {
        image: "/hero1.jpg",
        fullDescription:
          "Our Family Empowerment program is designed to strengthen immigrant  families through comprehensive support systems that honor cultural heritage while building resilience for the future.",
        keyFeatures: [
          "One-on-one family mentorship with culturally matched advisors",
          "Bi-weekly parenting workshops focusing on child development",
          "Community advocacy training for policy engagement",
          "Financial literacy and resource navigation support",
          "Intergenerational healing circles and trauma-informed care",
        ],
        impact: {
          families: "250+",
          workshops: "48",
          advocates: "75",
        },
        testimonial: {
          quote:
            "This program helped us navigate the school system while keeping our cultural values strong. Our children are thriving and proud of who they are.",
          author: "Amara K., Program Participant",
        },
        nextSteps:
          "Join our monthly orientation sessions held every first Saturday of the month.",
        contact: "families@betweencultures.org",
      },
    },
    {
      icon: <Heart className="w-6 h-6 text-white" />,
      title: "Mental Health & Wellness",
      description:
        "Emotional resilience support through counseling, wellness sessions, and peer support groups designed to strengthen mental health within our communities.",
      bgColor: "bg-[#a097d1]",
      modalContent: {
        image: "/black-therapy.jpg",
        fullDescription:
          "We provide culturally responsive mental health support that addresses the unique challenges faced by immigrant  families, combining traditional healing practices with modern therapeutic approaches.",
        keyFeatures: [
          "Individual and family therapy with licensed culturally competent therapists",
          "Weekly peer support circles for adults and teens",
          "Mindfulness and meditation workshops rooted in African traditions",
          "Crisis intervention and emergency mental health support",
          "Wellness retreats and healing ceremonies",
        ],
        impact: {
          clients: "180+",
          sessions: "1,200+",
          groups: "12",
        },
        testimonial: {
          quote:
            "Finding therapists who understand our cultural background made all the difference. I finally feel heard and supported in my healing journey.",
          author: "David M., Community Member",
        },
        nextSteps:
          "Schedule a confidential intake appointment to discuss your needs.",
        contact: "wellness@betweencultures.org",
      },
    },
    {
      icon: <BookOpen className="w-6 h-6 text-white" />,
      title: "Education & Training",
      description:
        "Adult education programs for parents and educators, improving academic outcomes and leadership skills for youth while fostering cultural pride.",
      bgColor: "bg-[#a8c499]",
      modalContent: {
        image: "/black-education-2.jpg",
        fullDescription:
          "Our education initiatives bridge cultural gaps in learning while empowering families with the tools and knowledge needed to advocate for educational equity and excellence.",
        keyFeatures: [
          "Adult education classes including ESL, GED prep, and digital literacy",
          "Youth leadership development and academic tutoring",
          "Parent advocacy training for school engagement",
          "Cultural competency workshops for educators",
          "Scholarship programs and college preparation support",
        ],
        impact: {
          graduates: "120+",
          students: "300+",
          educators: "85",
        },
        testimonial: {
          quote:
            "The leadership program gave me the confidence to speak up at school board meetings. Now I'm helping other parents do the same.",
          author: "Grace O., Parent Leader",
        },
        nextSteps:
          "Attend our education fair every third Saturday for program enrollment.",
        contact: "education@betweencultures.org",
      },
    },
    {
      icon: <Building className="w-6 h-6 text-white" />,
      title: "Child Development Centers",
      description:
        "Establishing Between Cultures childcare centers that provide culturally responsive early childhood education with opportunities for franchise expansion.",
      bgColor: "bg-[#a097d1]",
      modalContent: {
        image: "/black-education.jpg",
        fullDescription:
          "Our childcare centers provide high-quality early childhood education that celebrates African and Caribbean cultures while preparing children for academic success in diverse environments.",
        keyFeatures: [
          "Culturally responsive curriculum incorporating multiple languages",
          "Qualified early childhood educators from diverse backgrounds",
          "Nutritious meals featuring traditional and healthy foods",
          "Parent engagement programs and family events",
          "Franchise opportunities for community entrepreneurs",
        ],
        impact: {
          children: "150+",
          centers: "3",
          families: "120+",
        },
        testimonial: {
          quote:
            "My daughter speaks three languages and is so proud of her heritage. She's academically ahead and culturally grounded.",
          author: "Fatou S., Parent",
        },
        nextSteps: "Visit our centers during open house events held monthly.",
        contact: "childcare@betweencultures.org",
      },
    },
    {
      icon: <Music className="w-6 h-6 text-white" />,
      title: "Cultural Expression",
      description:
        "Arts initiatives, traditional cooking classes, and intergenerational programs that bridge gaps between elders and youth for cultural preservation.",
      bgColor: "bg-[#a8c499]",
      modalContent: {
        image: "/hero2.jpg",
        fullDescription:
          "Through arts, music, dance, and culinary traditions, we create spaces for cultural celebration and preservation while fostering connections across generations.",
        keyFeatures: [
          "Traditional dance and music classes for all ages",
          "Cooking workshops featuring African and Caribbean cuisine",
          "Storytelling circles with community elders",
          "Cultural arts festivals and community celebrations",
          "Youth arts mentorship with professional artists",
        ],
        impact: {
          participants: "400+",
          events: "24",
          artists: "30+",
        },
        testimonial: {
          quote:
            "My grandmother's recipes are now being taught to dozens of young people. Our traditions are alive and thriving.",
          author: "Kofi A., Cultural Instructor",
        },
        nextSteps: "Join our weekly cultural circles every Wednesday evening.",
        contact: "culture@betweencultures.org",
      },
    },
    {
      icon: <Flame className="w-6 h-6 text-white" />,
      title: "Community Outreach",
      description:
        "Storytelling initiatives, podcast creation, and cultural exchange programs that amplify  voices and preserve cultural legacies through research and oral histories.",
      bgColor: "bg-[#a097d1]",
      modalContent: {
        image: "/black-community.jpg",
        fullDescription:
          "We amplify  immigrant voices through digital storytelling, research initiatives, and community partnerships that create lasting change and preserve our collective stories.",
        keyFeatures: [
          "Digital storytelling workshops and podcast production",
          "Oral history collection and archival projects",
          "Community research on immigrant experiences",
          "Cultural exchange programs with other communities",
          "Advocacy campaigns and policy research",
        ],
        impact: {
          stories: "200+",
          podcasts: "36",
          partnerships: "25+",
        },
        testimonial: {
          quote:
            "Sharing my immigration story through the podcast helped me heal and inspired others. Our voices matter and are being heard.",
          author: "Blessing N., Storyteller",
        },
        nextSteps: "Attend our monthly community storytelling events.",
        contact: "outreach@betweencultures.org",
      },
    },
  ];

  //@ts-expect-error noidea
  const ServiceModal = ({ service, isOpen, onClose }) => {
    if (!service) return null;

    // CSS for hiding scrollbar
    const scrollbarHiddenStyle = {
      scrollbarWidth: "none", // Firefox
      msOverflowStyle: "none", // IE and Edge
      WebkitScrollbar: { display: "none" }, // Chrome, Safari, Opera
    };

    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="overflow-hidden w-full max-w-[60rem] max-h-[90vh]">
          {/* Header with close button */}
          <div className="relative">
            <div className="relative h-64 md:h-80">
              <Image
                src={service.modalContent.image}
                alt={service.title}
                width={1200}
                height={400}
                className="w-full h-full object-cover rounded-t-2xl"
              />
              <div className="absolute top-8 left-8 z-20 text-white">
                {/* <div
                  className={`w-16 h-16 ${service.bgColor} rounded-2xl flex items-center justify-center mb-4 shadow-lg`}
                >
                  {service.icon}
                </div> */}
                <h2 className="text-3xl font-bold mb-2">{service.title}</h2>
                <Badge className="bg-white/20 text-white border-white/30">
                  Active Program
                </Badge>
              </div>
            </div>
          </div>

          {/* Scrollable Content Container */}
          <div
            className="overflow-y-scroll max-h-[calc(90vh-16rem)] hide-scrollbar"
            // @ts-expect-error noidea
            style={scrollbarHiddenStyle}
          >
            {/* Content */}
            <div className="p-8">
              {/* Description */}
              <div className="mb-8">
                <p className="text-lg text-gray-700 leading-relaxed">
                  {service.modalContent.fullDescription}
                </p>
              </div>

              {/* Impact Stats */}
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-6 mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                  Program Impact
                </h3>
                <div className="grid grid-cols-3 gap-4">
                  {Object.entries(service.modalContent.impact).map(
                    ([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-2xl font-bold text-[#a8c499] mb-1">
                          {/* @ts-expect-error noidea */}
                          {value}
                        </div>
                        <div className="text-sm text-gray-600 capitalize">
                          {key}
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* Key Features */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  What We Offer
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* @ts-expect-error noidea */}
                  {service.modalContent.keyFeatures.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className="w-2 h-2 bg-[#a8c499] rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Testimonial */}
              <div className="bg-white border-l-4 border-[#a097d1] p-6 mb-8 rounded-r-lg shadow-sm">
                <blockquote className="text-gray-700 italic mb-3">
                  &#34;{service.modalContent.testimonial.quote}&#34;
                </blockquote>
                <cite className="text-sm font-medium text-[#a097d1]">
                  — {service.modalContent.testimonial.author}
                </cite>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    );
  };

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
              We are empowering immigrant families across communities
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
                src="/what-we-do-1.jpg"
                alt="Happy immigrant  families celebrating together"
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
              What we do for immigrant families and communities
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
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer group"
                  // @ts-expect-error noidea
                  onClick={() => setSelectedService(service)}
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
                    className={`w-12 h-12 ${service.bgColor} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
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
                    className="text-gray-600 leading-relaxed mb-4"
                  >
                    {service.description}
                  </motion.p>

                  {/* Learn More Link */}
                  <div className="flex items-center text-[#a8c499] font-medium text-sm group-hover:text-[#96b085] transition-colors">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
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
              <Button className="transform hover:scale-105 shadow-md">
                Explore Our Programs
              </Button>
              <Button variant="outline">Get Involved</Button>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Service Modal */}
      <ServiceModal
        service={selectedService}
        isOpen={!!selectedService}
        onClose={() => setSelectedService(null)}
      />
    </section>
  );
};
