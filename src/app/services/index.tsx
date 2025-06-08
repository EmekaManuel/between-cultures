"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  ArrowRight,
  BookOpen,
  Heart,
  MessageCircle,
  Music,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const WhatWeDoSection = ({
  showFullDetails = false,
}: {
  showFullDetails: boolean;
}) => {
  const [selectedService, setSelectedService] = useState<ServiceType | null>(
    null
  );
  const [showComingSoon, setShowComingSoon] = useState(true);

  const services = [
    {
      icon: <Users className="w-6 h-6 text-white" />,
      title: "Cultural Orientation for Families",
      description:
        "Workshops and personalized support to help families understand Western cultural norms, childcare systems, and early learning philosophies—while recognizing and respecting their own traditions.",
      bgColor: "bg-[#a8c499]",
      modalContent: {
        image: "/hero1.jpg",
        fullDescription:
          "Our Cultural Orientation program bridges the gap between traditional practices and Western childcare systems, empowering families to navigate new environments while maintaining their cultural identity.",
        keyFeatures: [
          "Interactive workshops on Western childcare expectations and norms",
          "One-on-one family consultations with cultural mediators",
          "Resource guides in multiple languages",
          "Understanding early learning philosophies and child development approaches",
          "Building confidence in parent-educator communication",
        ],
        impact: {
          families: "180+",
          workshops: "32",
          languages: "8",
        },
        testimonial: {
          quote:
            "These workshops helped me understand what my child's daycare expected while showing me how to share our family traditions with them. Now I feel confident advocating for my child.",
          author: "Amina K., Program Participant",
        },
        nextSteps:
          "Join our monthly family orientation sessions held every second Saturday.",
        contact: "orientation@betweencultures.org",
      },
    },
    {
      icon: <Heart className="w-6 h-6 text-white" />,
      title: "Inclusive Childcare Support",
      description:
        "We work directly with childcare providers to integrate culturally diverse practices into daily routines, classroom activities, storytelling, food, and family engagement.",
      bgColor: "bg-[#a097d1]",
      modalContent: {
        image: "/black-education-2.jpg",
        fullDescription:
          "Our Inclusive Childcare Support program transforms childcare environments into culturally responsive spaces where every child sees themselves reflected and valued in their daily experiences.",
        keyFeatures: [
          "Curriculum integration of diverse cultural practices and stories",
          "Multilingual storytelling and learning materials",
          "Traditional food integration and dietary accommodation support",
          "Family engagement strategies that honor cultural differences",
          "Classroom environment audits for cultural inclusivity",
        ],
        impact: {
          centers: "25+",
          children: "400+",
          providers: "60+",
        },
        testimonial: {
          quote:
            "Working with Between Cultures transformed our center. Children are more engaged, families feel welcomed, and our staff learned so much about creating inclusive spaces.",
          author: "Maria S., Childcare Director",
        },
        nextSteps:
          "Contact us to schedule a consultation for your childcare center.",
        contact: "support@betweencultures.org",
      },
    },
    {
      icon: <BookOpen className="w-6 h-6 text-white" />,
      title: "Educator Training & Resources",
      description:
        "We provide training, toolkits, and one-on-one mentoring for early childhood educators to promote equity, inclusion, and cultural humility in their teaching.",
      bgColor: "bg-[#a8c499]",
      modalContent: {
        image: "/black-education.jpg",
        fullDescription:
          "Our comprehensive training program equips early childhood educators with the knowledge, tools, and confidence to create inclusive learning environments that celebrate diversity and promote cultural understanding.",
        keyFeatures: [
          "Professional development workshops on cultural humility and bias awareness",
          "Comprehensive toolkits for inclusive curriculum development",
          "One-on-one mentoring with experienced cultural education specialists",
          "Ongoing support and resources for implementing inclusive practices",
          "Certification programs in culturally responsive early childhood education",
        ],
        impact: {
          educators: "120+",
          workshops: "48",
          centers: "35+",
        },
        testimonial: {
          quote:
            "The training opened my eyes to how I could better serve all the children in my care. The mentoring support made implementing changes feel manageable and meaningful.",
          author: "Jennifer L., Early Childhood Educator",
        },
        nextSteps: "Register for our quarterly educator training sessions.",
        contact: "training@betweencultures.org",
      },
    },
    {
      icon: <MessageCircle className="w-6 h-6 text-white" />,
      title: "Storytelling Circles",
      description:
        "Safe spaces for families and educators to share experiences, ask questions, and build cross-cultural understanding in a welcoming and judgment-free environment. Podcast creation and other initiatives that amplify voices rarely heard.",
      bgColor: "bg-[#a097d1]",
      modalContent: {
        image: "/black-community.jpg",
        fullDescription:
          "Our Storytelling Circles create brave spaces for authentic dialogue and connection, while our digital initiatives ensure that important voices and experiences reach wider audiences through podcasts and storytelling platforms.",
        keyFeatures: [
          "Monthly storytelling circles for families and educators",
          "Facilitated cross-cultural dialogue sessions",
          "Podcast production workshops and mentorship",
          "Digital storytelling training and support",
          "Community story archive and oral history project",
        ],
        impact: {
          participants: "200+",
          stories: "150+",
          podcasts: "24",
        },
        testimonial: {
          quote:
            "Sharing my story in the circle helped me process my own journey while connecting with others who understood. Now our podcast reaches families across the country.",
          author: "Blessing N., Storyteller & Podcast Host",
        },
        nextSteps:
          "Join our monthly storytelling circles every third Friday evening.",
        contact: "stories@betweencultures.org",
      },
    },
    {
      icon: <Heart className="w-6 h-6 text-white" />,
      title: "Mental Health & Wellness",
      description:
        "We partner with culturally responsive counseling experts to support children and parents navigating the challenges of cultural adjustment in childcare settings.",
      bgColor: "bg-[#a8c499]",
      modalContent: {
        image: "/black-therapy.jpg",
        fullDescription:
          "Our mental health support recognizes the unique psychological challenges faced by immigrant families in childcare transitions, providing culturally informed therapeutic support and wellness resources.",
        keyFeatures: [
          "Individual and family therapy with culturally competent therapists",
          "Support groups for parents navigating childcare cultural adjustments",
          "Child-focused therapy for cultural identity and belonging issues",
          "Crisis intervention and emergency mental health support",
          "Wellness workshops combining traditional and modern healing practices",
        ],
        impact: {
          families: "90+",
          sessions: "800+",
          therapists: "12",
        },
        testimonial: {
          quote:
            "Finding a therapist who understood both my cultural background and the childcare challenges we faced made all the difference. My family is thriving now.",
          author: "David M., Parent",
        },
        nextSteps:
          "Schedule a confidential intake appointment to discuss your family's needs.",
        contact: "wellness@betweencultures.org",
      },
    },
    {
      icon: <Music className="w-6 h-6 text-white" />,
      title: "Cultural Expression",
      description:
        "Arts initiatives, traditional cooking classes, and intergenerational programs that bridge gaps between elders and youth for cultural preservation.",
      bgColor: "bg-[#a097d1]",
      modalContent: {
        image: "/hero2.jpg",
        fullDescription:
          "Through arts, music, dance, and culinary traditions, we create spaces for cultural celebration and preservation while fostering connections across generations and strengthening cultural identity in children.",
        keyFeatures: [
          "Traditional dance and music classes for children and families",
          "Cooking workshops featuring diverse cultural cuisines",
          "Intergenerational storytelling and wisdom-sharing sessions",
          "Cultural arts festivals and community celebrations",
          "Youth cultural mentorship with community elders",
        ],
        impact: {
          participants: "300+",
          events: "20",
          elders: "40+",
        },
        testimonial: {
          quote:
            "My grandmother's recipes are now being taught to dozens of children. Watching my daughter learn traditional dances fills my heart—our culture is alive and thriving.",
          author: "Kofi A., Cultural Instructor",
        },
        nextSteps:
          "Join our weekly cultural expression classes every Saturday morning.",
        contact: "culture@betweencultures.org",
      },
    },
  ];

  interface ServiceType {
    icon: React.ReactNode;
    title: string;
    description: string;
    bgColor: string;
    modalContent: any;
  }

  interface ComingSoonModalProps {
    isOpen: boolean;
    onClose: () => void;
    service: ServiceType | null;
  }

  const ComingSoonModal = ({
    isOpen,
    onClose,
    service,
  }: ComingSoonModalProps) => {
    if (!service) return null;

    return (
      <div className={`fixed inset-0 z-50 ${isOpen ? "block" : "hidden"}`}>
        <div className="fixed inset-0 bg-black/50" onClick={onClose}></div>
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full mx-4 shadow-xl relative">
            <div className="p-8 text-center">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl font-bold"
              >
                ×
              </button>

              {/* Icon */}
              <div
                className={`w-20 h-20 ${
                  service?.bgColor || "bg-gray-400"
                } rounded-2xl flex items-center justify-center mx-auto mb-6`}
              >
                {service?.icon}
              </div>

              {/* Title */}
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {service?.title}
              </h2>

              {/* Coming Soon Message */}
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Details Coming Soon
                </h3>
                <p className="text-gray-600">
                  We&#39;re currently developing the full details for this
                  program. Stay tuned for more information about how this
                  service will support immigrant families and children.
                </p>
              </div>

              {/* Brief Description */}
              {/* <p className="text-gray-600 mb-6 text-left">
                {service?.description}
              </p> */}

              {/* Contact CTA */}
              {/* <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-sm text-gray-600 mb-3">
                  Interested in learning more or getting updates?
                </p>
                <button className="bg-[#a8c499] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#96b085] transition-colors">
                  Contact Us for Updates
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    );
  };

  interface ServiceModalProps {
    service: ServiceType | null;
    isOpen: boolean;
    onClose: () => void;
  }

  const ServiceModal = ({ service, isOpen, onClose }: ServiceModalProps) => {
    if (!service) return null;

    const scrollbarHiddenStyle: React.CSSProperties = {
      scrollbarWidth: "none" as const,
      msOverflowStyle: "none",
    };

    return (
      <div className={`fixed inset-0 z-50 ${isOpen ? "block" : "hidden"}`}>
        <div className="fixed inset-0 bg-black/50" onClick={onClose}></div>
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-4xl max-h-[90vh] overflow-hidden shadow-xl">
            {/* Header */}
            <div className="relative h-64 md:h-80">
              <Image
                src={service.modalContent.image}
                alt={service.title}
                width={1200}
                height={400}
                className="w-full h-full object-cover rounded-t-2xl"
              />
              <div className="absolute top-8 left-8 z-20 text-white">
                <h2 className="text-3xl font-bold mb-2">{service.title}</h2>
                <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm">
                  Active Program
                </span>
              </div>
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-white hover:text-gray-300 text-2xl font-bold"
              >
                ×
              </button>
            </div>

            {/* Scrollable Content */}
            <div
              className="overflow-y-auto max-h-[calc(90vh-16rem)] p-8"
              style={scrollbarHiddenStyle}
            >
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
                          {String(value)}
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
                  {service.modalContent.keyFeatures.map(
                    (feature: string, index: number) => (
                      <div
                        key={index}
                        className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <div className="w-2 h-2 bg-[#a8c499] rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    )
                  )}
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

              {/* Next Steps & Contact */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-semibold text-gray-900 mb-2">Next Steps</h4>
                <p className="text-gray-700 mb-3">
                  {service.modalContent.nextSteps}
                </p>
                <p className="text-sm text-gray-600">
                  Contact us:{" "}
                  <a
                    href={`mailto:${service.modalContent.contact}`}
                    className="text-[#a8c499] hover:underline"
                  >
                    {service.modalContent.contact}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-0.5 bg-[#a8c499]"></div>
              <span className="text-sm font-medium text-gray-600 uppercase tracking-wider">
                What We Do
              </span>
            </div>

            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight">
              We are strengthening immigrant children and their families
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed">
              Our programs support immigrant and racialized children and
              families in navigating childcare in Alberta and Canada. We
              collaborate with childcare providers and institutions to create
              culturally responsive environments that meet the needs of
              immigrant children.
            </p>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <div className="rounded-2xl  shadow-lg">
              <Image
                src="/what-we-do-1.jpg"
                alt="Happy immigrant families celebrating together"
                className="w-full h-80 object-cover"
                width={300}
                height={400}
              />
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-8 lg:p-12">
          <div className="mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-4">
              What we do for immigrant children and their families
            </h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto">
              Our programs focus on creating childcare spaces where all cultures
              are honored and every child feels at home.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer group ${
                  !showFullDetails ? "opacity-90" : ""
                }`}
                onClick={() => {
                  if (showFullDetails) {
                    setSelectedService(service);
                  } else {
                    setSelectedService(service);
                    setShowComingSoon(true);
                  }
                }}
              >
                <div
                  className={`w-12 h-12 ${service.bgColor} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  {service.icon}
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>

                <p className="text-gray-600 leading-relaxed mb-4">
                  {service.description}
                </p>

                <div className="flex items-center text-[#a8c499] font-medium text-sm group-hover:text-[#96b085] transition-colors">
                  {showFullDetails ? "Learn More" : "Details Coming Soon"}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-12 text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={"/contact"}>
                <button className="border-2 border-[#a8c499] text-[#a8c499] px-8 py-3 rounded-lg font-semibold hover:bg-[#a8c499] hover:text-white transition-all">
                  Get Involved
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      {showFullDetails ? (
        <ServiceModal
          service={selectedService}
          isOpen={!!selectedService}
          onClose={() => setSelectedService(null)}
        />
      ) : (
        <ComingSoonModal
          service={selectedService}
          isOpen={showComingSoon}
          onClose={() => {
            setShowComingSoon(true);
            setSelectedService(null);
          }}
        />
      )}
    </section>
  );
};
