import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { About, RulesEligibility, WhyParticipate } from "@/components/home/AboutWhy";
import { IndustryPartners, ProblemStatements, Tracks } from "@/components/home/TracksPartners";
import { Judges, Prizes, Sponsors, Timeline } from "@/components/home/TimelinePrizes";
import { Contact, FAQ, QuickInfoStrip, RegistrationCTA } from "@/components/home/Closing";

const TITLE =
  "OPCODE IMPACT 2026 | National Level 24-Hour Cybersecurity for Sustainable Development Hackathon";
const DESCRIPTION =
  "Official website of OPCODE IMPACT 2026, a National Level 24-Hour Cybersecurity for Sustainable Development Hackathon hosted by the Department of Computer Science & Engineering (Cyber Security), Jyothi Engineering College, Thrissur.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:image", content: "https://opcode-impact-2026.vercel.app/og-image.png" },
      { property: "og:url", content: "https://opcode-impact-2026.vercel.app" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:image", content: "https://opcode-impact-2026.vercel.app/og-image.png" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main>
      <h1 className="sr-only">
        OPCODE IMPACT 2026 — National Level 24-Hour Cybersecurity for Sustainable Development
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
