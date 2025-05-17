import Navigation from "@/components/inavbar";
import EventsNewsletterSection, {
  AboutUsSection,
  DonationBreakdownSection,
  HeroSection,
  ProjectsSection,
  WhatWeDoSection,
} from "./hero";

export default function Home() {
  return (
    <>
      <Navigation />
      <HeroSection />
      <AboutUsSection />
      <WhatWeDoSection />
      <ProjectsSection />
      <DonationBreakdownSection />
      <EventsNewsletterSection />
    </>
  );
}
