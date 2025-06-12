"use client";

import { motion } from "framer-motion";
import {
  BookOpen,
  Calendar,
  ChevronRight,
  Download,
  ExternalLink,
  Globe,
  GraduationCap,
  Heart,
  MessageCircle,
  Search,
  Shield,
  Star,
  User,
} from "lucide-react";
import { useState } from "react";

export const ResourcesPage = () => {
  const [activeTab, setActiveTab] = useState("childcare-rights");

  const childcareRights = [
    {
      title: "Your Childcare Rights in Canada",
      description:
        "Comprehensive guide to understanding your rights as parents seeking childcare services in Canada.",
      type: "PDF Guide",
      language: "EN/FR",
      downloadUrl: "#",
      topics: [
        "Legal rights",
        "Provincial differences",
        "Complaint processes",
        "Financial assistance",
      ],
    },
    {
      title: "Canada Child Benefit Information",
      description:
        "Everything you need to know about the Canada Child Benefit and how it can support your family.",
      type: "Government Resource",
      language: "Multiple",
      downloadUrl: "#",
      topics: [
        "Eligibility",
        "Application process",
        "Payment schedules",
        "Special circumstances",
      ],
    },
    {
      title: "Childcare Fee Subsidy Programs",
      description:
        "Provincial guide to childcare fee subsidies and financial support programs across Canada.",
      type: "Interactive Guide",
      language: "EN/FR",
      downloadUrl: "#",
      topics: [
        "Income thresholds",
        "Application requirements",
        "Regional variations",
        "Appeal processes",
      ],
    },
    {
      title: "Quality Indicators in Childcare",
      description:
        "Learn what to look for when choosing quality childcare that respects cultural diversity.",
      type: "Checklist",
      language: "EN/FR/AR/ES",
      downloadUrl: "#",
      topics: [
        "Staff qualifications",
        "Cultural competency",
        "Safety standards",
        "Educational approaches",
      ],
    },
  ];

  const communicationTips = [
    {
      title: "Building Relationships with Educators",
      description:
        "Practical strategies for establishing positive communication with your child's educators.",
      tips: [
        "Schedule regular check-ins, even when there are no problems",
        "Share your child's cultural background and family traditions",
        "Ask about daily routines and how you can support learning at home",
        "Don't hesitate to ask for clarification if something is unclear",
      ],
      icon: <MessageCircle className="w-6 h-6" />,
    },
    {
      title: "Advocating for Your Child's Needs",
      description:
        "How to effectively communicate your child's specific cultural and developmental needs.",
      tips: [
        "Document your concerns and conversations in writing",
        "Request cultural accommodations (dietary, religious, linguistic)",
        "Collaborate on strategies for supporting bilingual development",
        "Know when and how to escalate concerns if needed",
      ],
      icon: <Shield className="w-6 h-6" />,
    },
    {
      title: "Understanding Canadian Education Systems",
      description:
        "Navigate the Canadian childcare and early education landscape with confidence.",
      tips: [
        "Learn about different childcare options (daycare, family care, nanny)",
        "Understand provincial licensing and regulation requirements",
        "Ask about curriculum approaches and learning philosophies",
        "Familiarize yourself with transition processes to school",
      ],
      icon: <GraduationCap className="w-6 h-6" />,
    },
    {
      title: "Language and Cultural Bridge-Building",
      description:
        "Strategies for supporting your child's multilingual development in childcare.",
      tips: [
        "Share books and songs from your culture with educators",
        "Teach educators key words in your home language",
        "Discuss how to maintain home language alongside English/French",
        "Request bilingual resources when available",
      ],
      icon: <Globe className="w-6 h-6" />,
    },
  ];

  const diverseBooks = [
    {
      title: "The Name Jar",
      author: "Yangsook Choi",
      ageRange: "4-8 years",
      description:
        "A beautiful story about a Korean girl who wants to choose an American name to fit in.",
      themes: ["Identity", "Cultural pride", "Belonging"],
      availability: "Available in multiple libraries",
      rating: 5,
    },
    {
      title: "Last Stop on Market Street",
      author: "Matt de la Peña",
      ageRange: "4-8 years",
      description:
        "A story about finding beauty in everyday moments and appreciating diversity in urban communities.",
      themes: ["Community", "Gratitude", "Social awareness"],
      availability: "Caldecott Medal winner",
      rating: 5,
    },
    {
      title: "The Day You Begin",
      author: "Jacqueline Woodson",
      ageRange: "5-10 years",
      description:
        "Encourages children to embrace what makes them different and find courage to connect with others.",
      themes: ["Courage", "Differences", "Connection"],
      availability: "Available in audio format",
      rating: 5,
    },
    {
      title: "Hair Love",
      author: "Matthew A. Cherry",
      ageRange: "3-7 years",
      description:
        "A celebration of African American hair culture and the love between father and daughter.",
      themes: ["Self-acceptance", "Family love", "Cultural beauty"],
      availability: "Academy Award winning book",
      rating: 5,
    },
    {
      title: "The Arabic Quilt",
      author: "Aya Khalil",
      ageRange: "5-9 years",
      description:
        "A story about a young girl connecting her Arabic heritage with her new American home.",
      themes: ["Heritage", "Storytelling", "Family traditions"],
      availability: "Bilingual editions available",
      rating: 4,
    },
    {
      title: "Separate Is Never Equal",
      author: "Duncan Tonatiuh",
      ageRange: "6-10 years",
      description:
        "The true story of how one family fought school segregation and won.",
      themes: ["Justice", "Civil rights", "Perseverance"],
      availability: "Sibert Medal winner",
      rating: 5,
    },
  ];

  const materials = [
    {
      category: "Multilingual Learning Materials",
      items: [
        "Bilingual alphabet books in 15+ languages",
        "Cultural celebration calendars and activity guides",
        "Traditional folk tale collections from around the world",
        "Multilingual song and nursery rhyme collections",
      ],
    },
    {
      category: "Dramatic Play & Cultural Items",
      items: [
        "Culturally diverse dress-up clothes and accessories",
        "Kitchen items from different cultures (chopsticks, tortilla press, etc.)",
        "Musical instruments from various traditions",
        "Dolls and figures representing different ethnicities",
      ],
    },
    {
      category: "Art & Craft Supplies",
      items: [
        "Diverse skin tone art supplies (crayons, paints, paper)",
        "Cultural craft kits (origami, henna patterns, beadwork)",
        "World flag sets and geography materials",
        "Cultural pattern blocks and design templates",
      ],
    },
  ];

  const research = [
    {
      title: "Cultural Responsiveness in Early Childhood Education",
      authors: "Dr. Sarah Chen, Dr. Maria Rodriguez",
      publication: "Canadian Journal of Early Childhood Education",
      year: "2024",
      summary:
        "Comprehensive study on implementing culturally responsive practices in Canadian ELCC settings.",
      keyFindings: [
        "Children in culturally responsive programs show 23% higher engagement",
        "Families report increased satisfaction and involvement",
        "Educator training significantly improves cultural competency",
      ],
      downloadUrl: "#",
    },
    {
      title: "Language Development in Multilingual ELCC Environments",
      authors: "Dr. Ahmed Hassan, Dr. Lin Zhang",
      publication: "International Early Learning Research",
      year: "2023",
      summary:
        "Research on supporting multilingual children's language development in early childcare.",
      keyFindings: [
        "Bilingual programs enhance cognitive flexibility",
        "Home language maintenance supports overall academic success",
        "Educator multilingual awareness improves child outcomes",
      ],
      downloadUrl: "#",
    },
    {
      title: "Immigrant Families and Childcare Access in Canada",
      authors: "Dr. Priya Sharma, Dr. Jean-Baptiste Dubois",
      publication: "Canadian Policy Research Networks",
      year: "2024",
      summary:
        "Analysis of barriers and facilitators for immigrant families accessing quality childcare.",
      keyFindings: [
        "Language barriers affect 67% of new immigrant families",
        "Cultural competency training reduces family stress",
        "Community navigation support improves access by 45%",
      ],
      downloadUrl: "#",
    },
    {
      title: "The Economic Impact of Inclusive ELCC Programs",
      authors: "Dr. Robert Kim, Dr. Fatima Al-Rashid",
      publication: "Economics of Education Review",
      year: "2023",
      summary:
        "Cost-benefit analysis of culturally inclusive early learning and childcare programs.",
      keyFindings: [
        "Every $1 invested in inclusive ELCC yields $7 in economic returns",
        "Reduced achievement gaps save long-term education costs",
        "Increased parental workforce participation boosts GDP",
      ],
      downloadUrl: "#",
    },
  ];

  const tabs = [
    {
      id: "childcare-rights",
      label: "Childcare Rights & Options",
      icon: <Shield className="w-5 h-5" />,
    },
    {
      id: "communication",
      label: "Communication Tips",
      icon: <MessageCircle className="w-5 h-5" />,
    },
    {
      id: "books-materials",
      label: "Books & Materials",
      icon: <BookOpen className="w-5 h-5" />,
    },
    {
      id: "research",
      label: "Research & Studies",
      icon: <Search className="w-5 h-5" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#a097d1] to-[#a8c499] text-white py-16 lg:py-24">
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
                Resources & Support
              </span>
              <div className="w-12 h-0.5 bg-white/60"></div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 leading-tight"
            >
              Empowering Families with
              <br />
              <span className="text-white/90">Knowledge & Resources</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto"
            >
              Access comprehensive guides, tools, and research to navigate
              childcare in Canada, communicate effectively with educators, and
              support your child&#39;s cultural and educational journey.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 overflow-x-auto scrollbar-hide">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 py-4 px-2 border-b-2 font-medium text-sm whitespace-nowrap transition-colors duration-200 ${
                  activeTab === tab.id
                    ? "border-[#a8c499] text-[#a8c499]"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Childcare Rights & Options */}
          {activeTab === "childcare-rights" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Childcare Rights & Options in Canada
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Understanding your rights and options is the first step to
                  accessing quality, culturally responsive childcare for your
                  family.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {childcareRights.map((resource, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          {resource.title}
                        </h3>
                        <p className="text-gray-600 mb-4">
                          {resource.description}
                        </p>
                      </div>
                      <div className="ml-4 text-right">
                        <span className="inline-block bg-[#a8c499]/10 text-[#a8c499] text-xs font-medium px-2 py-1 rounded-full mb-1">
                          {resource.type}
                        </span>
                        <div className="text-xs text-gray-500">
                          {resource.language}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {resource.topics.map((topic, topicIndex) => (
                        <span
                          key={topicIndex}
                          className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <button className="flex items-center space-x-2 text-[#a8c499] hover:text-[#96b085] font-medium">
                        <Download className="w-4 h-4" />
                        <span>Download Guide</span>
                      </button>
                      <button className="flex items-center space-x-1 text-gray-500 hover:text-gray-700">
                        <ExternalLink className="w-4 h-4" />
                        <span className="text-sm">View Online</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Communication Tips */}
          {activeTab === "communication" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Tips for Communicating with Educators
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Build strong partnerships with your child&#39;s educators
                  through effective communication and cultural bridge-building.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {communicationTips.map((section, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
                  >
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-12 h-12 bg-[#a8c499]/10 rounded-lg flex items-center justify-center text-[#a8c499]">
                        {section.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">
                          {section.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-6">{section.description}</p>
                    <ul className="space-y-3">
                      {section.tips.map((tip, tipIndex) => (
                        <li
                          key={tipIndex}
                          className="flex items-start space-x-3"
                        >
                          <ChevronRight className="w-5 h-5 text-[#a8c499] mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Books & Materials */}
          {activeTab === "books-materials" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-12"
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Culturally Diverse Books & Materials
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Discover books and educational materials that celebrate
                  diversity and help children see themselves reflected in their
                  learning environment.
                </p>
              </div>

              {/* Recommended Books */}
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center space-x-2">
                  <BookOpen className="w-6 h-6 text-[#a8c499]" />
                  <span>Recommended Books</span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {diverseBooks.map((book, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200"
                    >
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="text-lg font-semibold text-gray-900 line-clamp-2">
                          {book.title}
                        </h4>
                        <div className="flex">
                          {[...Array(book.rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-4 h-4 text-yellow-400 fill-current"
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">
                        by {book.author}
                      </p>
                      <p className="text-sm text-[#a8c499] font-medium mb-3">
                        {book.ageRange}
                      </p>
                      <p className="text-gray-700 text-sm mb-4">
                        {book.description}
                      </p>

                      <div className="flex flex-wrap gap-1 mb-4">
                        {book.themes.map((theme, themeIndex) => (
                          <span
                            key={themeIndex}
                            className="bg-[#a8c499]/10 text-[#a8c499] text-xs px-2 py-1 rounded"
                          >
                            {theme}
                          </span>
                        ))}
                      </div>

                      <p className="text-xs text-gray-500 italic">
                        {book.availability}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Educational Materials */}
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center space-x-2">
                  <Heart className="w-6 h-6 text-[#a8c499]" />
                  <span>Educational Materials & Resources</span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {materials.map((category, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
                    >
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">
                        {category.category}
                      </h4>
                      <ul className="space-y-3">
                        {category.items.map((item, itemIndex) => (
                          <li
                            key={itemIndex}
                            className="flex items-start space-x-3"
                          >
                            <ChevronRight className="w-4 h-4 text-[#a8c499] mt-1 flex-shrink-0" />
                            <span className="text-gray-700 text-sm">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* Research Section */}
          {activeTab === "research" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Research in Early Learning & Child Care
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Stay informed with the latest research on culturally
                  responsive early childhood education and its impact on
                  children&#39;s development and family wellbeing.
                </p>
              </div>

              <div className="space-y-6">
                {research.map((study, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 hover:shadow-md transition-shadow duration-200"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          {study.title}
                        </h3>
                        <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                          <span className="flex items-center space-x-1">
                            <User className="w-4 h-4" />
                            <span>{study.authors}</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>{study.year}</span>
                          </span>
                        </div>
                        <p className="text-gray-600 mb-4">{study.summary}</p>
                      </div>
                      <span className="bg-[#a8c499]/10 text-[#a8c499] text-xs font-medium px-3 py-1 rounded-full ml-4">
                        {study.publication}
                      </span>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">
                        Key Findings:
                      </h4>
                      <ul className="space-y-2">
                        {study.keyFindings.map((finding, findingIndex) => (
                          <li
                            key={findingIndex}
                            className="flex items-start space-x-3"
                          >
                            <ChevronRight className="w-4 h-4 text-[#a8c499] mt-1 flex-shrink-0" />
                            <span className="text-gray-700">{finding}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <button className="flex items-center space-x-2 text-[#a8c499] hover:text-[#96b085] font-medium">
                        <Download className="w-4 h-4" />
                        <span>Download Full Study</span>
                      </button>
                      <button className="flex items-center space-x-1 text-gray-500 hover:text-gray-700">
                        <ExternalLink className="w-4 h-4" />
                        <span className="text-sm">View Abstract</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
};
