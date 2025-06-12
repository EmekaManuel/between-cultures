import React from "react";
import Navigation from "@/components/inavbar";
import { EventsNewsletterSection, ProjectsSection } from "../hero";
import { ResourcesPage } from ".";

const page = () => {
  return (
    <>
      <Navigation />
      <ResourcesPage />
      <ProjectsSection />
      <EventsNewsletterSection />
    </>
  );
};

export default page;
