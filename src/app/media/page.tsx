import React from "react";
import { NewsSection } from ".";
import Navigation from "@/components/inavbar";
import { EventsNewsletterSection } from "../hero";

const page = () => {
  return (
    <>
      <Navigation />
      <NewsSection />
      <EventsNewsletterSection />
    </>
  );
};

export default page;
