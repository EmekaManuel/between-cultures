import React from "react";
import Navigation from "@/components/inavbar";
import { EventsNewsletterSection, ProjectsSection } from "../hero";
import { FAQPage } from ".";

const page = () => {
  return (
    <>
      <Navigation />
      <FAQPage />
      <ProjectsSection />
      <EventsNewsletterSection />
    </>
  );
};

export default page;
