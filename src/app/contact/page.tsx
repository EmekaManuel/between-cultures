import React from "react";
import Navigation from "@/components/inavbar";
import { ContactForm, ContactSection } from ".";
import { EventsNewsletterSection } from "../hero";

const page = () => {
  return (
    <>
      <Navigation />
      <ContactSection />
      <ContactForm />
      <EventsNewsletterSection />
    </>
  );
};

export default page;
