"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  Baby,
  BookOpen,
  ChevronDown,
  Globe,
  GraduationCap,
  Heart,
  HelpCircle,
  Search,
  Users,
} from "lucide-react";
import { useState } from "react";

export const FAQPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [openItems, setOpenItems] = useState<Record<number, boolean>>({});

  const categories = [
    {
      id: "all",
      label: "All Questions",
      icon: <HelpCircle className="w-5 h-5" />,
    },
    { id: "about", label: "About Us", icon: <Users className="w-5 h-5" /> },
    {
      id: "services",
      label: "Our Services",
      icon: <Heart className="w-5 h-5" />,
    },
    {
      id: "childcare",
      label: "Childcare Support",
      icon: <Baby className="w-5 h-5" />,
    },
    {
      id: "educators",
      label: "For Educators",
      icon: <GraduationCap className="w-5 h-5" />,
    },
    {
      id: "involvement",
      label: "Getting Involved",
      icon: <Globe className="w-5 h-5" />,
    },
    {
      id: "practical",
      label: "Practical Info",
      icon: <BookOpen className="w-5 h-5" />,
    },
  ];

  const faqData = [
    // About Us
    {
      category: "about",
      question: "What is the Between Cultures Foundation?",
      answer:
        "The Between Cultures Foundation is a non-profit organization dedicated to empowering immigrant and racialized children in childcare by bridging cultural understanding between their heritage and Western practices. We work with families, educators, and communities to create inclusive early learning environments that celebrate diverse cultural identities.",
    },
    {
      category: "about",
      question: "Who do you serve?",
      answer:
        "We primarily serve immigrant and racialized families with children in childcare, with a special focus on Black immigrant families. We also work with childcare providers, early childhood educators, and community organizations throughout Alberta and Canada.",
    },
    {
      category: "about",
      question: "What is your mission and vision?",
      answer:
        "Our mission is to empower immigrant and racialized children in childcare by bridging cultural understanding between their heritage and Western practices. Our vision is a society where all children, regardless of cultural background, thrive in early learning spaces that honor their heritage and embrace global traditions through culturally responsive care.",
    },
    {
      category: "about",
      question: "Where are you located?",
      answer:
        "We are based in Alberta, Canada, and serve communities across Alberta and Canada. You can reach us at (403) 618-6672 or info@betweencultures.ca.",
    },

    // Services
    {
      category: "services",
      question: "What programs and services do you offer?",
      answer:
        "We offer six main areas of service: Cultural Orientation for Families, Inclusive Childcare Support, Educator Training & Resources, Storytelling Circles, Mental Health & Wellness support, and Cultural Expression programs including arts initiatives and cooking classes.",
    },
    {
      category: "services",
      question: "Are your services free?",
      answer:
        "Yes, most of our core services for immigrant families are provided at no cost. Some specialized training programs for organizations may have associated fees. We believe that financial barriers should not prevent families from accessing culturally responsive childcare support.",
    },
    {
      category: "services",
      question: "Do you offer services in languages other than English?",
      answer:
        "Yes, we are committed to serving diverse communities and offer support in multiple languages. We also have plans to expand our French language services. Please contact us to discuss your specific language needs.",
    },
    {
      category: "services",
      question: "How can I access your services?",
      answer:
        "You can access our services by contacting us directly at (403) 618-6672 or info@betweencultures.ca. We will discuss your needs and connect you with the most appropriate programs and support.",
    },

    // Childcare Support
    {
      category: "childcare",
      question:
        "My child is starting childcare soon. How can you help us prepare?",
      answer:
        "Our Cultural Orientation for Families program helps you understand childcare systems, Western cultural norms, and early learning philosophies while respecting your own traditions. We provide workshops and personalized support to make the transition smoother for your family.",
    },
    {
      category: "childcare",
      question:
        "My child is having cultural adjustment challenges in childcare. What support is available?",
      answer:
        "We offer Mental Health & Wellness support through partnerships with culturally responsive counseling experts. We also provide Storytelling Circles where families can share experiences and build cross-cultural understanding in a safe, judgment-free environment.",
    },
    {
      category: "childcare",
      question:
        "How do you help childcare providers become more culturally inclusive?",
      answer:
        "We work directly with childcare providers through our Inclusive Childcare Support program to integrate culturally diverse practices into daily routines, classroom activities, storytelling, food, and family engagement. We help them create environments that reflect and celebrate the children they serve.",
    },
    {
      category: "childcare",
      question: "Can you help me communicate better with my child's educators?",
      answer:
        "Absolutely! We provide guidance on effective communication strategies and can help facilitate conversations between families and educators. Our Resources page also includes tips for communicating with educators and advocating for your child's needs.",
    },
    {
      category: "childcare",
      question:
        "What should I look for in a culturally responsive childcare provider?",
      answer:
        "Look for providers who show genuine interest in your child's cultural background, incorporate diverse materials and practices, communicate regularly with families, and demonstrate cultural humility. Our Resources page includes a detailed checklist of quality indicators to help you evaluate childcare options.",
    },

    // For Educators
    {
      category: "educators",
      question:
        "I'm an early childhood educator. How can your training help me?",
      answer:
        "Our Educator Training & Resources program provides training, toolkits, and one-on-one mentoring to promote equity, inclusion, and cultural humility in your teaching. We help you create more inclusive environments and better support the diverse children and families you serve.",
    },
    {
      category: "educators",
      question: "What topics does your educator training cover?",
      answer:
        "Our training covers cultural competency, inclusive curriculum development, family engagement strategies, addressing bias and discrimination, supporting multilingual children, and creating culturally responsive learning environments. We customize training to meet specific needs.",
    },
    {
      category: "educators",
      question: "Do you provide ongoing support after training?",
      answer:
        "Yes, we offer ongoing mentoring and support to help educators implement what they've learned. We also provide toolkits, resources, and can facilitate follow-up sessions to address challenges and celebrate successes.",
    },
    {
      category: "educators",
      question: "How can my childcare center partner with you?",
      answer:
        "We welcome partnerships with childcare centers committed to creating inclusive environments. Contact us at info@betweencultures.ca to discuss how we can work together to better serve immigrant and racialized children and their families.",
    },

    // Getting Involved
    {
      category: "involvement",
      question: "How can I volunteer with your organization?",
      answer:
        "We welcome volunteers who are passionate about empowering immigrant families! You can fill out our volunteer application form on our website, which covers areas like cultural programming, childcare support, educational workshops, event organization, translation services, and more.",
    },
    {
      category: "involvement",
      question: "What does it mean to be a cultural ambassador?",
      answer:
        "Cultural ambassadors help bridge communities by sharing their cultural knowledge and heritage with others. They may participate in storytelling circles, cultural events, educator training sessions, or help develop culturally relevant resources and programs.",
    },
    {
      category: "involvement",
      question: "Can I make a donation to support your work?",
      answer:
        "Yes, donations help us provide free services to immigrant families and expand our programs. You can donate through our website or contact us directly. We also accept both one-time and monthly donations to support our ongoing work.",
    },
    {
      category: "involvement",
      question: "I represent an organization. How can we partner with you?",
      answer:
        "We collaborate with educational institutions, healthcare organizations, community centers, government agencies, and businesses. Partnership opportunities include program collaboration, resource sharing, joint events, training development, and research partnerships. Contact us to explore possibilities.",
    },
    {
      category: "involvement",
      question: "Do you offer internship or work opportunities?",
      answer:
        "As a growing organization, we occasionally have opportunities for interns and staff positions. Follow us on social media or subscribe to our newsletter to stay informed about current openings. We also encourage passionate individuals to reach out about volunteer opportunities that could lead to other roles.",
    },

    // Practical Information
    {
      category: "practical",
      question:
        "Do you help with understanding childcare rights and options in Canada?",
      answer:
        "Yes! Our Resources page includes comprehensive guides on childcare rights and options in Canada, information about government benefits and subsidies, and guides to help you navigate the childcare system with confidence.",
    },
    {
      category: "practical",
      question:
        "Can you recommend culturally diverse books and materials for children?",
      answer:
        "Absolutely! Our Resources page features a curated collection of culturally diverse children's books and educational materials that help children see themselves reflected in their learning environment and celebrate global cultures.",
    },
    {
      category: "practical",
      question: "Do you conduct research on immigrant children's experiences?",
      answer:
        "Yes, we are committed to research that amplifies the voices and experiences of immigrant children and families. Our Resources page includes current research on Early Learning and Child Care (ELCC) and cultural responsiveness in childcare settings.",
    },
    {
      category: "practical",
      question: "How can I stay updated on your programs and events?",
      answer:
        "You can subscribe to our newsletter on our website, follow us on Facebook, Instagram, and LinkedIn, or contact us directly. We regularly share updates about programs, events, resources, and opportunities to get involved.",
    },
    {
      category: "practical",
      question:
        "What if I need immediate support or have an urgent childcare concern?",
      answer:
        "Please contact us directly at (403) 618-6672 or info@betweencultures.ca. While we may not be able to provide immediate crisis intervention, we can help connect you with appropriate resources and support services in your community.",
    },
    {
      category: "practical",
      question: "Do you have physical locations where I can visit?",
      answer:
        "We are currently building our capacity and physical presence. Please contact us at (403) 618-6672 or info@betweencultures.ca to discuss meeting options and learn about upcoming community events where you can connect with our team in person.",
    },
  ];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const toggleItem = (index: any) => {
    setOpenItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const filteredFAQs = faqData.filter((item) => {
    const matchesCategory =
      activeCategory === "all" || item.category === activeCategory;
    const matchesSearch =
      searchTerm === "" ||
      item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#a8c499] to-[#8e83bd] text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex items-center justify-center space-x-3 mb-6"
            >
              <div className="w-12 h-0.5 bg-white/60"></div>
              <span className="text-sm font-medium text-white/90 uppercase tracking-wider">
                Frequently Asked Questions
              </span>
              <div className="w-12 h-0.5 bg-white/60"></div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 leading-tight"
            >
              Questions?
              <br />
              <span className="text-white/90 ">We&#39;re Here to Help</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto"
            >
              Find answers to common questions about our services, programs, and
              how we support immigrant families in their childcare journey.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Search and Categories */}
      <section className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {/* Search Bar */}
          <div className="relative max-w-md mx-auto mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search frequently asked questions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#a8c499] focus:border-transparent"
            />
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  activeCategory === category.id
                    ? "bg-[#a8c499] text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category.icon}
                <span>{category.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredFAQs.length === 0 ? (
            <div className="text-center py-12">
              <HelpCircle className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                No results found
              </h3>
              <p className="text-gray-600">
                Try adjusting your search terms or browse different categories.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredFAQs.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
                >
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 pr-4">
                      {item.question}
                    </h3>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-500 transition-transform duration-200 flex-shrink-0 ${
                        openItems[index] ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {openItems[index] && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-4 border-t border-gray-100">
                          <p className="text-gray-700 leading-relaxed pt-4">
                            {item.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
