import Navigation from "@/components/inavbar";
import { EventsNewsletterSection } from "../hero";
import { TeamSection } from "../about";

const page = () => {
  return (
    <>
      <Navigation />
      <TeamSection />
      <EventsNewsletterSection />
    </>
  );
};

export default page;
