import React from "react";
import { DonationHero, DonationInfo } from ".";
import Navigation from "@/components/inavbar";
import { EventsNewsletterSection } from "../hero";

const page = () => {
  return (
    <>
      <Navigation />
      <DonationHero />
      <DonationInfo />
      <EventsNewsletterSection />
    </>
  );
};

export default page;
