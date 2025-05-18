import React from "react";
import { WhatWeDoSection } from ".";
import Navigation from "@/components/inavbar";
import { EventsNewsletterSection, ProjectsSection } from "../hero";

const page = () => {
  return (
    <>
      <Navigation />
      <WhatWeDoSection />
      <ProjectsSection />
      <EventsNewsletterSection />
    </>
  );
};

export default page;
