import Image from "next/image";

export const NewsSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Section Label */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-0.5 bg-[#a8c499]"></div>
              <span className="text-sm font-medium text-gray-600 uppercase tracking-wider">
                Latest News
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight">
              Our goal is to provide inclusive support for immigrant Black
              families
            </h1>

            {/* Description */}
            <p className="text-lg text-gray-600 leading-relaxed">
              Through education, advocacy, and community programs, we empower
              individuals, celebrate cultural heritage, and build inclusive
              spaces where families thrive and traditions are honored across
              generations.
            </p>

            {/* Read More Button */}
            <div>
              <button className="bg-gradient-to-r from-[#96b085] to-[#8e83bd] hover:bg-[#e6b428] text-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors duration-200 shadow-md hover:shadow-lg">
                Read more
              </button>
            </div>
          </div>

          {/* Right Content - News Articles */}
          <div className="space-y-6">
            {/* Article 1 */}
            <article className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-lg overflow-hidden">
                    <Image
                      src="/projects-hero-2.jpg"
                      alt="Cultural celebration with diverse community members"
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Cultural Heritage Month Celebration
                  </h3>
                  <p className="text-sm text-gray-500 mb-2">15th Nov 2024</p>
                  <p className="text-gray-600 text-sm">
                    Join us as we celebrate the rich cultural heritage of
                    immigrant Black communities through storytelling,
                    traditional foods, and artistic expressions.
                  </p>
                </div>
              </div>
            </article>

            {/* Article 2 */}
            <article className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-lg overflow-hidden">
                    <Image
                      src="/projects-hero-6.jpg"
                      alt="Family mentorship session with parents and children"
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    New Family Mentorship Programs Launch
                  </h3>
                  <p className="text-sm text-gray-500 mb-2">10th Nov 2024</p>
                  <p className="text-gray-600 text-sm">
                    Our expanded family mentorship programs now serve more
                    immigrant families, providing culturally responsive support
                    for parenting and community integration.
                  </p>
                </div>
              </div>
            </article>

            {/* Article 3 */}
            <article className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-lg overflow-hidden">
                    <Image
                      src="/hero5.jpg"
                      alt="Youth leadership development workshop"
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Youth Leadership Development Initiative
                  </h3>
                  <p className="text-sm text-gray-500 mb-2">5th Nov 2024</p>
                  <p className="text-gray-600 text-sm">
                    Empowering the next generation through leadership skills
                    training while fostering cultural pride and academic
                    excellence in our youth programs.
                  </p>
                </div>
              </div>
            </article>

            {/* Article 4 */}
            <article className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-lg overflow-hidden">
                    <Image
                      src="/about-us-hero1.jpg"
                      alt="Community dialogue session bringing people together"
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Community Dialogue Series Begins
                  </h3>
                  <p className="text-sm text-gray-500 mb-2">1st Nov 2024</p>
                  <p className="text-gray-600 text-sm">
                    Building bridges across communities through our new dialogue
                    series, fostering cross-cultural understanding and mutual
                    respect among all participants.
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};
