import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { EASE } from "@/components/site/motion-primitives";

const TITLE = "Terms & Conditions — OPCODE IMPACT 2026";
const DESCRIPTION =
  "Terms & Conditions for OPCODE IMPACT 2026, a National-Level 24-Hour Cybersecurity for Sustainable Development Hackathon organized by Jyothi Engineering College (Autonomous), Thrissur, Kerala.";

export const Route = createFileRoute("/terms-and-conditions")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:image", content: "https://opcode-impact-2026.vercel.app/og-image.png" },
      { property: "og:url", content: "https://opcode-impact-2026.vercel.app/terms-and-conditions" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:image", content: "https://opcode-impact-2026.vercel.app/og-image.png" },
    ],
  }),
  component: Page,
});

const SECTIONS = [
  {
    id: "eligibility",
    num: "01",
    title: "Eligibility",
    content: (
      <ul className="mt-4 space-y-2.5 text-sm font-light text-steel leading-relaxed">
        <li className="flex items-start gap-3">
          <span className="mt-[0.35rem] h-1 w-1 shrink-0 rounded-full bg-cyan-accent" />
          OPCODE IMPACT 2026 is open to eligible students and teams as specified by the official event guidelines.
        </li>
        <li className="flex items-start gap-3">
          <span className="mt-[0.35rem] h-1 w-1 shrink-0 rounded-full bg-cyan-accent" />
          Teams must consist of <strong className="text-foreground font-light">2 to 4 members</strong>.
        </li>
        <li className="flex items-start gap-3">
          <span className="mt-[0.35rem] h-1 w-1 shrink-0 rounded-full bg-cyan-accent" />
          Participants are responsible for providing accurate information during registration.
        </li>
        <li className="flex items-start gap-3">
          <span className="mt-[0.35rem] h-1 w-1 shrink-0 rounded-full bg-cyan-accent" />
          The organizers reserve the right to verify eligibility and request appropriate identification or student-status documentation.
        </li>
      </ul>
    ),
  },
  {
    id: "registration",
    num: "02",
    title: "Registration",
    content: (
      <ul className="mt-4 space-y-2.5 text-sm font-light text-steel leading-relaxed">
        <li className="flex items-start gap-3">
          <span className="mt-[0.35rem] h-1 w-1 shrink-0 rounded-full bg-cyan-accent" />
          Registration must be completed through the official registration process.
        </li>
        <li className="flex items-start gap-3">
          <span className="mt-[0.35rem] h-1 w-1 shrink-0 rounded-full bg-cyan-accent" />
          The registration fee is <strong className="text-foreground font-light">₹300 per participant</strong>.
        </li>
        <li className="flex items-start gap-3">
          <span className="mt-[0.35rem] h-1 w-1 shrink-0 rounded-full bg-cyan-accent" />
          Registration is considered complete only after the required information and applicable fee have been successfully submitted.
        </li>
        <li className="flex items-start gap-3">
          <span className="mt-[0.35rem] h-1 w-1 shrink-0 rounded-full bg-cyan-accent" />
          Participants must provide accurate and valid contact information.
        </li>
        <li className="flex items-start gap-3">
          <span className="mt-[0.35rem] h-1 w-1 shrink-0 rounded-full bg-cyan-accent" />
          Registration details may be used by the organizers for event communication, verification, coordination, and certification.
        </li>
      </ul>
    ),
  },
  {
    id: "participation",
    num: "03",
    title: "Event Participation",
    content: (
      <ul className="mt-4 space-y-2.5 text-sm font-light text-steel leading-relaxed">
        <li className="flex items-start gap-3">
          <span className="mt-[0.35rem] h-1 w-1 shrink-0 rounded-full bg-cyan-accent" />
          OPCODE IMPACT 2026 is a <strong className="text-foreground font-light">24-hour continuous hackathon</strong> scheduled for <strong className="text-foreground font-light">9–10 October 2026</strong> at Jyothi Engineering College (Autonomous), Thrissur, Kerala.
        </li>
        <li className="flex items-start gap-3">
          <span className="mt-[0.35rem] h-1 w-1 shrink-0 rounded-full bg-cyan-accent" />
          Participants are expected to follow the event schedule, instructions, venue rules, and directions issued by the organizing team.
        </li>
        <li className="flex items-start gap-3">
          <span className="mt-[0.35rem] h-1 w-1 shrink-0 rounded-full bg-cyan-accent" />
          Teams must complete and submit their work within the officially announced submission period.
        </li>
        <li className="flex items-start gap-3">
          <span className="mt-[0.35rem] h-1 w-1 shrink-0 rounded-full bg-cyan-accent" />
          Participants are responsible for bringing any personal equipment, software, credentials, or other resources required for their project unless specifically provided by the organizers.
        </li>
      </ul>
    ),
  },
  {
    id: "project-development",
    num: "04",
    title: "Project Development",
    content: (
      <ul className="mt-4 space-y-2.5 text-sm font-light text-steel leading-relaxed">
        <li className="flex items-start gap-3">
          <span className="mt-[0.35rem] h-1 w-1 shrink-0 rounded-full bg-cyan-accent" />
          Teams are expected to develop their solutions in accordance with the official hackathon rules.
        </li>
        <li className="flex items-start gap-3">
          <span className="mt-[0.35rem] h-1 w-1 shrink-0 rounded-full bg-cyan-accent" />
          Participants may use appropriate open-source libraries, frameworks, APIs, datasets, development tools, and other publicly available resources, subject to their respective licenses.
        </li>
        <li className="flex items-start gap-3">
          <span className="mt-[0.35rem] h-1 w-1 shrink-0 rounded-full bg-cyan-accent" />
          Use of AI-assisted development tools is permitted unless a particular challenge or organizer specifically restricts their use.
        </li>
        <li className="flex items-start gap-3">
          <span className="mt-[0.35rem] h-1 w-1 shrink-0 rounded-full bg-cyan-accent" />
          Teams remain responsible for understanding, testing, and being able to demonstrate the work they submit.
        </li>
        <li className="flex items-start gap-3">
          <span className="mt-[0.35rem] h-1 w-1 shrink-0 rounded-full bg-cyan-accent" />
          Projects must not knowingly infringe the intellectual property, copyrights, trademarks, privacy, or other rights of third parties.
        </li>
      </ul>
    ),
  },
  {
    id: "cybersecurity",
    num: "05",
    title: "Cybersecurity & Ethical Conduct",
    content: (
      <div className="mt-4 space-y-4 text-sm font-light text-steel leading-relaxed">
        <p>
          Because OPCODE IMPACT 2026 is a cybersecurity-focused event, participants are expected to follow responsible and ethical security practices.
        </p>
        <p className="text-foreground/80">Participants must <strong className="text-foreground font-light">not</strong>:</p>
        <ul className="space-y-2.5">
          {[
            "Attempt unauthorized access to college, event, sponsor, participant, or third-party systems.",
            "Attack or disrupt infrastructure that has not been explicitly authorized for testing.",
            "Target other participants or their devices.",
            "Deploy malware, destructive payloads, ransomware, credential theft mechanisms, or other harmful software.",
            "Conduct activities intended to disrupt the event's network, systems, registration infrastructure, or services.",
            "Use information obtained during the event for unauthorized or harmful purposes.",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-[0.35rem] h-1 w-1 shrink-0 rounded-full bg-cyan-accent/60" />
              {item}
            </li>
          ))}
        </ul>
        <p>
          Security testing must be restricted to <strong className="text-foreground font-light">systems, environments, datasets, and targets explicitly authorized by the organizers or challenge owners</strong>.
        </p>
        <p>
          Any suspected vulnerability affecting event infrastructure should be reported responsibly to the organizing team.
        </p>
      </div>
    ),
  },
  {
    id: "submission",
    num: "06",
    title: "Project Submission & Evaluation",
    content: (
      <div className="mt-4 space-y-4 text-sm font-light text-steel leading-relaxed">
        <ul className="space-y-2.5">
          <li className="flex items-start gap-3">
            <span className="mt-[0.35rem] h-1 w-1 shrink-0 rounded-full bg-cyan-accent" />
            Teams must submit their project and required supporting materials before the announced submission deadline.
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-[0.35rem] h-1 w-1 shrink-0 rounded-full bg-cyan-accent" />
            Submission requirements may include source code, documentation, presentation materials, demonstrations, or other deliverables specified by the organizers.
          </li>
        </ul>
        <p className="text-foreground/80">Projects may be evaluated based on:</p>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4">
          {["Innovation", "Technical Implementation", "Cybersecurity", "Practical Applicability", "SDG Alignment", "Scalability", "User Impact", "Presentation Quality"].map((c) => (
            <span key={c} className="border border-border bg-background/50 px-3 py-2 text-xs text-foreground/70">
              {c}
            </span>
          ))}
        </div>
        <p>The judging panel's decision shall be considered final for the competition.</p>
      </div>
    ),
  },
  {
    id: "ip",
    num: "07",
    title: "Intellectual Property",
    content: (
      <ul className="mt-4 space-y-2.5 text-sm font-light text-steel leading-relaxed">
        {[
          "Participants retain ownership of the intellectual property they independently create, subject to any third-party licenses, challenge-specific conditions, or sponsor requirements applicable to their project.",
          "Participants are responsible for ensuring that their submissions comply with applicable licenses and intellectual-property requirements.",
          "By participating, teams grant the organizers permission to showcase project names, descriptions, demonstrations, photographs, videos, and publicly presentable project information for educational, promotional, and event-related purposes.",
          "No confidential or proprietary project information will be intentionally disclosed by the organizers beyond the information reasonably required for event evaluation and promotion.",
        ].map((item) => (
          <li key={item} className="flex items-start gap-3">
            <span className="mt-[0.35rem] h-1 w-1 shrink-0 rounded-full bg-cyan-accent" />
            {item}
          </li>
        ))}
      </ul>
    ),
  },
  {
    id: "conduct",
    num: "08",
    title: "Code of Conduct",
    content: (
      <div className="mt-4 space-y-3 text-sm font-light text-steel leading-relaxed">
        <p>All participants are expected to maintain a respectful, inclusive, and professional environment.</p>
        <p>Harassment, discrimination, intimidation, threats, violence, cheating, deliberate disruption, impersonation, or other inappropriate conduct will not be tolerated.</p>
        <p>The organizers may take appropriate action, including removal from the event or disqualification, in cases of serious or repeated misconduct.</p>
      </div>
    ),
  },
  {
    id: "accommodation",
    num: "09",
    title: "Accommodation & Food",
    content: (
      <div className="mt-4 space-y-3 text-sm font-light text-steel leading-relaxed">
        <p>Accommodation and food will be provided according to the arrangements announced by the organizing team.</p>
        <p>Participants must follow the accommodation facility's rules and any instructions issued by the organizers.</p>
        <p>The organizers may establish reasonable limits regarding accommodation availability, timings, facilities, and access.</p>
      </div>
    ),
  },
  {
    id: "refunds",
    num: "10",
    title: "Registration Cancellation & Refunds",
    content: (
      <div className="mt-4 space-y-3 text-sm font-light text-steel leading-relaxed">
        <p>Registration cancellation and refund eligibility, if applicable, will be governed by the official refund policy communicated by the organizers.</p>
        <p>Where no refund is applicable, the registration fee will not be refundable except where the organizers explicitly approve an exception.</p>
        <p>If the event is cancelled or materially rescheduled by the organizers, participants will be informed regarding the applicable arrangements.</p>
      </div>
    ),
  },
  {
    id: "changes",
    num: "11",
    title: "Changes to the Event",
    content: (
      <div className="mt-4 space-y-3 text-sm font-light text-steel leading-relaxed">
        <p>The organizers reserve the right to make reasonable changes to the event schedule, venue arrangements, challenges, judging process, rules, or other event details when necessary.</p>
        <p>Participants will be informed of significant changes through official communication channels.</p>
      </div>
    ),
  },
  {
    id: "disqualification",
    num: "12",
    title: "Disqualification",
    content: (
      <div className="mt-4 space-y-4 text-sm font-light text-steel leading-relaxed">
        <p>A team or participant may be disqualified for:</p>
        <ul className="space-y-2.5">
          {[
            "Providing false or misleading registration information.",
            "Violating the hackathon rules or Code of Conduct.",
            "Unauthorized access or malicious activity.",
            "Plagiarism or submission of work that unlawfully infringes third-party rights.",
            "Cheating, manipulation of judging, or deliberate misrepresentation of project work.",
            "Failure to comply with reasonable instructions from the organizing team.",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-[0.35rem] h-1 w-1 shrink-0 rounded-full bg-cyan-accent/60" />
              {item}
            </li>
          ))}
        </ul>
        <p>Disqualification may result in the participant or team becoming ineligible for prizes, certificates, or other event benefits.</p>
      </div>
    ),
  },
  {
    id: "privacy",
    num: "13",
    title: "Privacy & Participant Information",
    content: (
      <div className="mt-4 space-y-4 text-sm font-light text-steel leading-relaxed">
        <p>Information collected during registration may be used for:</p>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          {["Participant Verification", "Event Communication", "Team Coordination", "Accommodation & Food", "Certificates & Records", "Competition Administration", "Event Announcements"].map((item) => (
            <span key={item} className="border border-border bg-background/50 px-3 py-2 text-xs text-foreground/70">
              {item}
            </span>
          ))}
        </div>
        <p>Participant information will be handled in accordance with the organizers' applicable privacy practices.</p>
      </div>
    ),
  },
  {
    id: "acceptance",
    num: "14",
    title: "Acceptance",
    content: (
      <div className="mt-4 space-y-3 text-sm font-light text-steel leading-relaxed">
        <p>By completing registration, participants confirm that they have read, understood, and agreed to these Terms &amp; Conditions and the applicable event rules.</p>
        <p>For questions regarding these Terms &amp; Conditions, participants may contact the official OPCODE IMPACT 2026 organizing team through the contact information provided on the event website.</p>
      </div>
    ),
  },
];

function Page() {
  return (
    <main className="shell min-h-[100svh] py-32 md:py-40">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: EASE, delay: 0.1 }}
      >
        <div className="flex items-baseline gap-4">
          <span className="label-micro text-cyan-accent">Legal</span>
          <span className="h-px w-6 bg-white/20" />
          <span className="label-micro text-white/50">Last Updated: August 2026</span>
        </div>

        <h1 className="mt-8 display-xl text-[2.5rem] sm:text-[4rem] lg:text-[5.5rem]">
          Terms &amp;{" "}
          <span className="text-cyan-accent">Conditions</span>
        </h1>

        <p className="mt-6 max-w-2xl text-[0.9375rem] font-light text-steel leading-relaxed">
          Welcome to <strong className="text-foreground font-light">OPCODE IMPACT 2026</strong>, a National-Level 24-Hour Cybersecurity for Sustainable Development Hackathon organized by the Department of Computer Science &amp; Engineering (Cyber Security), Jyothi Engineering College (Autonomous), Thrissur, Kerala.
        </p>
        <p className="mt-3 max-w-2xl text-sm font-light text-steel/70 leading-relaxed">
          By registering for or participating in OPCODE IMPACT 2026, participants agree to comply with the following terms and conditions.
        </p>
      </motion.div>

      {/* Table of contents — desktop sidebar */}
      <div className="mt-16 lg:grid lg:grid-cols-[13rem_1fr] lg:gap-16 lg:mt-20">
        <motion.aside
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.25 }}
          className="hidden lg:block"
        >
          <div className="sticky top-28">
            <p className="label-micro text-steel mb-4">Sections</p>
            <nav className="flex flex-col gap-1">
              {SECTIONS.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="group flex items-baseline gap-3 py-1 text-[0.75rem] font-light text-steel/60 transition-colors duration-300 hover:text-foreground"
                >
                  <span className="font-mono text-[0.5625rem] text-cyan-accent/60 group-hover:text-cyan-accent transition-colors duration-300">
                    {s.num}
                  </span>
                  <span>{s.title}</span>
                </a>
              ))}
            </nav>
            <div className="mt-8 border-t border-border pt-6">
              <Link
                to="/register"
                className="group relative overflow-hidden block border border-cyan-accent/40 px-4 py-3 text-[0.75rem] font-light tracking-wide text-center"
              >
                <span className="absolute inset-0 translate-y-full bg-cyan-accent/10 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0" />
                <span className="relative text-cyan-accent">Register Now →</span>
              </Link>
            </div>
          </div>
        </motion.aside>

        {/* Sections */}
        <div className="mt-12 lg:mt-0 space-y-0">
          {SECTIONS.map((s, i) => (
            <motion.section
              key={s.id}
              id={s.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-5% 0px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: i < 3 ? i * 0.06 : 0 }}
              className="border-t border-border py-8 md:py-10"
            >
              <div className="flex items-baseline gap-4">
                <span className="font-mono text-[0.5625rem] text-cyan-accent shrink-0">{s.num}</span>
                <h2 className="text-[1.125rem] font-light tracking-[-0.02em] text-foreground md:text-[1.35rem]">
                  {s.title}
                </h2>
              </div>
              <div className="mt-1 pl-8">{s.content}</div>
            </motion.section>
          ))}

          {/* Footer signature */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="border-t border-border pt-10 pb-4"
          >
            <div className="flex items-baseline gap-2.5">
              <span className="text-sm font-medium tracking-[0.22em] uppercase">OPCODE</span>
              <span className="text-sm font-light tracking-[0.22em] text-steel uppercase">Impact</span>
              <span className="font-mono text-[0.625rem] text-cyan-accent">26</span>
            </div>
            <p className="mt-2 text-xs font-light text-steel/60 italic">Secure Today. Sustain Tomorrow.</p>
            <p className="mt-1 text-xs font-light text-steel/50">
              Jyothi Engineering College (Autonomous) · Thrissur, Kerala
            </p>
            <div className="mt-6">
              <Link
                to="/register"
                className="group relative overflow-hidden inline-flex bg-foreground px-8 py-3 text-[0.8125rem] font-medium tracking-wide text-background"
              >
                <span className="absolute inset-0 translate-y-full bg-cyan-accent transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0" />
                <span className="relative">Register for OPCODE IMPACT 2026</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
