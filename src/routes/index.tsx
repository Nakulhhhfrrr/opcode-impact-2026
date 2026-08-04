import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { About, RulesEligibility, WhyParticipate } from "@/components/home/AboutWhy";
import { IndustryPartners, ProblemStatements, Tracks } from "@/components/home/TracksPartners";
import { Judges, Prizes, Sponsors, Timeline } from "@/components/home/TimelinePrizes";
import { Contact, FAQ, QuickInfoStrip, RegistrationCTA } from "@/components/home/Closing";

const TITLE = "OPCODE IMPACT 2026 — National 24-Hour Cybersecurity Hackathon";
const DESCRIPTION =
  "A National 24-Hour Cybersecurity for Sustainable Development Hackathon, 9–10 October 2026 at Jyothi Engineering College, Thrissur, Kerala.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main>
      <h1 className="sr-only">
        OPCODE IMPACT 2026 — National 24-Hour Cybersecurity for Sustainable Development
        Hackathon
      </h1>
      <Hero />
      <About />
      <RulesEligibility />
      <WhyParticipate />
      <Tracks />
      <IndustryPartners />
      <ProblemStatements />
      <Timeline />
      <Prizes />
      <Judges />
      <Sponsors />
      <RegistrationCTA />
      <QuickInfoStrip />
      <FAQ />
      <Contact />
    </main>
  );
}
