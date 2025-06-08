import React from "react";
import { WhatWeDoSection } from ".";
import Navigation from "@/components/inavbar";
import { EventsNewsletterSection, ProjectsSection } from "../hero";

const page = () => {
  return (
    <>
      <Navigation />
      <WhatWeDoSection showFullDetails={false} />
      <ProjectsSection />
      <EventsNewsletterSection />
    </>
  );
};

export default page;
