import Navigation from "@/components/inavbar";
import {
  AboutUsSection,
  DonationBreakdownSection,
  EventsNewsletterSection,
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
