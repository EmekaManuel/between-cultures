"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export const NewsSection = () => {
  const newsArticles = [
    {
      title: "Cultural Heritage Month Celebration",
      date: "15th Nov 2024",
      description:
        "Join us as we celebrate the rich cultural heritage of immigrant  communities through storytelling, traditional foods, and artistic expressions.",
      image: "/projects-hero-2.jpg",
      alt: "Cultural celebration with diverse community members",
    },
    {
      title: "New Family Mentorship Programs Launch",
      date: "10th Nov 2024",
      description:
        "Our expanded family mentorship programs now serve more immigrant families, providing culturally responsive support for parenting and community integration.",
      image: "/projects-hero-6.jpg",
      alt: "Family mentorship session with parents and children",
    },
    {
      title: "Youth Leadership Development Initiative",
      date: "5th Nov 2024",
      description:
        "Empowering the next generation through leadership skills training while fostering cultural pride and academic excellence in our youth programs.",
      image: "/hero5.jpg",
      alt: "Youth leadership development workshop",
    },
    {
      title: "Community Dialogue Series Begins",
      date: "1st Nov 2024",
      description:
        "Building bridges across communities through our new dialogue series, fostering cross-cultural understanding and mutual respect among all participants.",
      image: "/about-us-hero1.jpg",
      alt: "Community dialogue session bringing people together",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
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
                Latest News
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
              Our goal is to provide inclusive support for immigrant families
            </motion.h1>

            {/* Description - ANIMATE FROM LEFT */}
            <motion.p
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-lg text-gray-600 leading-relaxed"
            >
              Through education, advocacy, and community programs, we empower
              individuals, celebrate cultural heritage, and build inclusive
              spaces where families thrive and traditions are honored across
              generations.
            </motion.p>

            {/* Read More Button - ANIMATE FROM BOTTOM */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <button className="bg-gradient-to-r from-[#96b085] to-[#8e83bd] hover:bg-[#e6b428] text-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors duration-200 shadow-md hover:shadow-lg">
                Read more
              </button>
            </motion.div>
          </div>

          {/* Right Content - News Articles */}
          <div className="space-y-6">
            {newsArticles.map((article, index) => {
              // Alternating animation directions for articles
              const isEven = index % 2 === 0;
              const animationDirection = isEven
                ? { x: 100, y: 0 } // Even articles from right
                : { x: -50, y: 50 }; // Odd articles from bottom-left diagonal

              return (
                <motion.article
                  key={index}
                  initial={{
                    opacity: 0,
                    ...animationDirection,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.7,
                    delay: 0.3 + index * 0.15, // Staggered delays
                  }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex gap-4">
                    {/* Article Image - ANIMATE WITH SCALE */}
                    <motion.div
                      initial={{ scale: 0, rotate: -10 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      transition={{
                        duration: 0.6,
                        delay: 0.5 + index * 0.15,
                        type: "spring",
                        stiffness: 200,
                      }}
                      viewport={{ once: true }}
                      className="flex-shrink-0"
                    >
                      <div className="w-20 h-20 rounded-lg overflow-hidden">
                        <Image
                          src={article.image}
                          alt={article.alt}
                          width={80}
                          height={80}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </motion.div>

                    {/* Article Content */}
                    <div className="flex-1">
                      {/* Article Title - ANIMATE WITH DELAY */}
                      <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.6,
                          delay: 0.6 + index * 0.15,
                        }}
                        viewport={{ once: true }}
                        className="text-lg font-semibold text-gray-900 mb-2"
                      >
                        {article.title}
                      </motion.h3>

                      {/* Article Date - ANIMATE WITH DELAY */}
                      <motion.p
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.5,
                          delay: 0.7 + index * 0.15,
                        }}
                        viewport={{ once: true }}
                        className="text-sm text-gray-500 mb-2"
                      >
                        {article.date}
                      </motion.p>

                      {/* Article Description - ANIMATE WITH DELAY */}
                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.6,
                          delay: 0.8 + index * 0.15,
                        }}
                        viewport={{ once: true }}
                        className="text-gray-600 text-sm"
                      >
                        {article.description}
                      </motion.p>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
