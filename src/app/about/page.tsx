import React from "react";
import Navigation from "@/components/inavbar";
import { EventsNewsletterSection } from "../hero";
import { AboutUsSection, TeamSection } from ".";

const page = () => {
  return (
    <>
      <Navigation />
      <AboutUsSection />
      <TeamSection />
      <EventsNewsletterSection />
    </>
  );
};

export default page;
