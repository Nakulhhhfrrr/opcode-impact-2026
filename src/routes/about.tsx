import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { EASE } from "@/components/site/motion-primitives";

const TITLE = "About — OPCODE IMPACT 2026";
const DESCRIPTION =
  "The full story of OPCODE IMPACT — the organising department, the academic context and the national ambition behind the event.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:image", content: "https://opcode-impact-2026.vercel.app/og-image.png" },
      { property: "og:url", content: "https://opcode-impact-2026.vercel.app/about" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:image", content: "https://opcode-impact-2026.vercel.app/og-image.png" },
    ],
  }),
  component: Page,
});

const EMPLOYMENT_ROLES = [
  "Software Engineer",
  "System Analyst",
  "Network Administrator",
  "Information System Manager",
  "Cyber-Security Analyst",
  "Penetration Tester",
  "Threat Analyst",
  "Security Software Specialist",
  "Cyber Threat Responder",
];

const COMPANIES = [
  "Deloitte", "D.E.Shaw", "TCS", "Prodapt", "Wipro", "CTS", "Infosys", "Hexaware", "Accenture",
];

function Page() {
  return (
    <main className="shell min-h-[100svh] py-28 md:py-36">

      {/* ── SECTION 0: Department Hero ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: EASE, delay: 0.1 }}
      >
        {/* Logo strip */}
        <div className="flex flex-wrap items-center gap-5 md:gap-8 pb-8 border-b border-border">
          <img
            src="/WhatsApp Image 2026-08-14 at 1.23.53 PM.jpeg"
            alt="Jyothi Engineering College (Autonomous) logo"
            className="h-14 w-auto object-contain opacity-90"
          />
          <span className="h-8 w-px bg-white/15 hidden sm:block" />
          <img
            src="/WhatsApp Image 2026-08-14 at 1.24.30 PM.jpeg"
            alt="CSI logo"
            className="h-12 w-auto object-contain opacity-90"
          />
          <span className="h-8 w-px bg-white/15 hidden sm:block" />
          <img
            src="/WhatsApp Image 2026-08-14 at 1.24.31 PM.jpeg"
            alt="Government of Kerala logo"
            className="h-12 w-auto object-contain opacity-90"
          />
          <span className="h-8 w-px bg-white/15 hidden sm:block" />
          <img
            src="/cyea-logo.jpg"
            alt="CYEA — Cyber Security Engineering Association"
            className="h-14 w-auto object-contain opacity-90"
          />
        </div>

        {/* Department intro */}
        <div className="mt-8">
          <span className="label-micro text-cyan-accent">About the Department</span>
          <h1 className="mt-3 text-[1.75rem] font-light tracking-[-0.025em] sm:text-[2.5rem] leading-tight max-w-3xl">
            Computer Science &amp; Engineering{" "}
            <span className="text-steel">(Cyber Security)</span>
          </h1>
        </div>
      </motion.div>

      {/* ── SECTION 1: About the Department ── */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: EASE, delay: 0.25 }}
        className="mt-12 md:mt-16"
      >
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.6fr] lg:gap-14 border border-border bg-navy/20 p-6 md:p-8">
          <div className="lg:border-r lg:border-border lg:pr-10">
            <span className="label-micro text-cyan-accent uppercase tracking-wider">Department</span>
            <h2 className="mt-3 text-[1.25rem] font-light tracking-[-0.02em] sm:text-[1.5rem]">
              About the Department
            </h2>
            <p className="mt-3 text-[0.75rem] font-light text-steel/70 leading-relaxed">
              Established 2023 · 60 seats · B.Tech (UG)
            </p>
          </div>
          <div className="space-y-4 text-[0.9375rem] font-light text-steel leading-relaxed">
            <p>
              The <strong className="text-foreground font-light">Department of Computer Science &amp; Engineering (Cyber Security)</strong> was established in the year{" "}
              <strong className="text-foreground font-light">2023</strong> with an annual intake of{" "}
              <strong className="text-foreground font-light">60</strong> in the undergraduate program level. Here we empower the next generation of cyber security experts and engineers.
            </p>
            <p>
              Our department is dedicated to advancing knowledge and innovation in the field of cyber security, addressing the growing challenges of protecting digital information and systems. In today's digital age, the demand for cybersecurity professionals is at an all-time high.
            </p>
            <p>
              Our department is committed to providing a comprehensive education that combines the core principles of computer science with specialized training in cybersecurity. Our curriculum is designed to equip students with the skills and knowledge required to safeguard critical infrastructure, protect sensitive data, and counteract cyber threats.
            </p>
          </div>
        </div>
      </motion.section>

      {/* ── SECTION 2: Scope of Employment ── */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-5% 0px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="mt-10 md:mt-14"
      >
        <div className="border-t border-border pt-8">
          <div className="flex flex-wrap items-baseline gap-4 mb-6">
            <span className="label-micro text-cyan-accent uppercase tracking-wider">Scope</span>
            <h2 className="text-[1.25rem] font-light tracking-[-0.02em]">Scope of Employment</h2>
          </div>

          <p className="text-[0.875rem] font-light text-steel leading-relaxed max-w-2xl mb-6">
            Graduates get excellent placement opportunities in IT firms and corporates across a wide range of specializations:
          </p>

          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
            {EMPLOYMENT_ROLES.map((role, i) => (
              <motion.div
                key={role}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.05 }}
                className="flex items-start gap-3 border border-border bg-background/50 px-4 py-3.5 hover:border-cyan-accent/30 hover:bg-navy/30 transition-colors duration-300"
              >
                <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-cyan-accent" />
                <span className="text-[0.8125rem] font-light text-foreground/85 leading-snug">
                  {role}
                </span>
              </motion.div>
            ))}
          </div>

          <div className="mt-6">
            <p className="label-micro text-steel mb-3">Leading recruiters include</p>
            <div className="flex flex-wrap gap-2">
              {COMPANIES.map((co) => (
                <span
                  key={co}
                  className="border border-border/60 bg-background/30 px-3 py-1.5 text-xs font-light text-steel/80"
                >
                  {co}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* ── SECTION 3: Become Part of It ── */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-5% 0px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="mt-10 md:mt-14"
      >
        <div className="border-t border-border pt-8">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.6fr] lg:gap-14">
            <div className="lg:border-r lg:border-border lg:pr-10">
              <span className="label-micro text-cyan-accent uppercase tracking-wider">Join Us</span>
              <h2 className="mt-3 text-[1.25rem] font-light tracking-[-0.02em]">
                Become Part of It
              </h2>
            </div>
            <div className="border border-cyan-accent/15 bg-navy/25 p-6 md:p-7 space-y-4">
              <p className="text-[0.9375rem] font-light text-steel leading-relaxed">
                If you are passionate about technology and committed to protecting the digital world, the Department of Computer Science &amp; Engineering (Cyber Security) is the place for you. Explore the endless possibilities in the field of cybersecurity and become a part of a community dedicated to making the digital world safer.
              </p>
              <div className="pt-3 border-t border-border/60 flex items-baseline gap-3">
                <span className="label-micro text-steel shrink-0">HOD</span>
                <span className="text-[0.9375rem] font-light tracking-[-0.015em] text-foreground">
                  Dr. Geethu Mary George
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* ── SECTION 4: About CYEA ── */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-5% 0px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="mt-10 md:mt-14"
      >
        <div className="border-t border-border pt-8">
          <div className="border border-border bg-navy/20">
            <div className="grid gap-0 lg:grid-cols-[auto_1fr]">
              {/* Left: logo column */}
              <div className="flex flex-col items-center justify-start gap-4 p-6 md:p-8 lg:border-r lg:border-border lg:min-w-[160px]">
                <img
                  src="/cyea-logo.jpg"
                  alt="CYEA logo"
                  className="h-24 w-24 object-contain bg-white/5 p-1.5"
                />
                <p className="font-mono text-[0.625rem] tracking-widest text-cyan-accent uppercase text-center">
                  CYEA
                </p>
              </div>
              {/* Right: content */}
              <div className="p-6 md:p-8 space-y-4">
                <div>
                  <span className="label-micro text-cyan-accent uppercase tracking-wider">Association</span>
                  <h2 className="mt-2 text-[1.25rem] font-light tracking-[-0.02em] sm:text-[1.5rem]">
                    About CYEA
                  </h2>
                  <p className="mt-1 text-[0.875rem] font-light tracking-[-0.015em] text-foreground/80">
                    Cyber Security Engineering Association
                  </p>
                </div>
                <div className="space-y-3 text-[0.9375rem] font-light text-steel leading-relaxed">
                  <p>
                    <strong className="text-foreground font-light">CYEA — Cyber Security Engineering Association</strong> is the student association of the Department of Computer Science &amp; Engineering (Cyber Security) at{" "}
                    <strong className="text-foreground font-light">Jyothi Engineering College (Autonomous)</strong>.
                  </p>
                  <p>
                    CYEA brings together students passionate about cybersecurity through{" "}
                    <strong className="text-foreground font-light">technical events, workshops, competitions, projects, and industry-oriented activities</strong>, helping them build practical skills and stay ahead in the evolving world of cybersecurity.
                  </p>
                </div>
                <div className="pt-2 border-l-2 border-cyan-accent/40 pl-4">
                  <p className="font-mono text-[0.8125rem] tracking-widest text-cyan-accent uppercase">
                    Encrypt. Protect. Defend.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* ── SECTION 5: About OPCODE IMPACT 2026 ── */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-5% 0px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="mt-10 md:mt-14"
      >
        <div className="border-t border-border pt-8">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.6fr] lg:gap-14">
            {/* Left: event identity */}
            <div className="lg:border-r lg:border-border lg:pr-10">
              <span className="label-micro text-cyan-accent uppercase tracking-wider">The Event</span>
              <h2 className="mt-3 text-[1.25rem] font-light tracking-[-0.02em] sm:text-[1.5rem] leading-tight">
                About OPCODE IMPACT 2026
              </h2>
              <div className="mt-5 space-y-2.5">
                <div className="flex items-baseline gap-3">
                  <span className="label-micro text-steel shrink-0">Type</span>
                  <span className="text-xs font-light text-foreground/80">National-Level Hackathon</span>
                </div>
                <div className="flex items-baseline gap-3">
                  <span className="label-micro text-steel shrink-0">Duration</span>
                  <span className="text-xs font-light text-foreground/80">24 Hours</span>
                </div>
                <div className="flex items-baseline gap-3">
                  <span className="label-micro text-steel shrink-0">Dates</span>
                  <span className="text-xs font-light text-foreground/80">October 9–10, 2026</span>
                </div>
                <div className="flex items-baseline gap-3">
                  <span className="label-micro text-steel shrink-0">Venue</span>
                  <span className="text-xs font-light text-foreground/80 leading-snug">Jyothi Engineering College (Autonomous), Thrissur, Kerala</span>
                </div>
              </div>
            </div>

            {/* Right: description */}
            <div className="space-y-4 text-[0.9375rem] font-light text-steel leading-relaxed">
              <p>
                <strong className="text-foreground font-light">OPCODE IMPACT 2026</strong> is a National-Level 24-Hour Cybersecurity for Sustainable Development Hackathon organized by the Department of Computer Science &amp; Engineering (Cyber Security), Jyothi Engineering College (Autonomous), Thrissur, Kerala.
              </p>
              <p>
                The hackathon brings together students, developers, cybersecurity enthusiasts, and innovators to tackle real-world challenges through technology. Participants will work in teams to identify problems, develop practical solutions, and build working prototypes within a 24-hour competitive environment.
              </p>
              <p>
                The hackathon features two major tracks: the <strong className="text-foreground font-light">Industry Challenge</strong>, where teams address cybersecurity and technology challenges across sectors such as banking and finance, healthcare, manufacturing, government and the public sector, and IT companies and startups; and the <strong className="text-foreground font-light">SDG Innovation Challenge</strong>, focused on developing secure technology solutions aligned with the <strong className="text-foreground font-light">United Nations Sustainable Development Goals</strong>.
              </p>
              <p>
                OPCODE IMPACT 2026 is designed to go beyond a conventional coding competition. Participants get the opportunity to work on relevant problems, interact with industry mentors, explore emerging technologies, and demonstrate their solutions to a wider technical community.
              </p>
              <p>
                With a focus on <strong className="text-foreground font-light">cybersecurity, innovation, sustainability, and real-world impact</strong>, OPCODE IMPACT 2026 aims to provide a platform where ideas can move from concepts to working solutions.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* ── SECTION 6: CTA ── */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        className="mt-12 md:mt-16 border border-cyan-accent/20 bg-navy/40 p-7 md:p-10"
      >
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div>
            <p className="text-[1.5rem] font-light tracking-[-0.025em] text-foreground md:text-[2rem]">
              Secure Today.{" "}
              <span className="text-cyan-accent">Sustain Tomorrow.</span>
            </p>
            <p className="mt-3 text-sm font-light text-steel/70">
              Jyothi Engineering College (Autonomous) · Thrissur, Kerala · October 9–10, 2026
            </p>
          </div>
          <div className="shrink-0">
            <Link
              to="/register"
              className="group relative inline-flex overflow-hidden bg-foreground px-8 py-3 text-[0.8125rem] font-medium tracking-wide text-background"
            >
              <span className="absolute inset-0 translate-y-full bg-cyan-accent transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0" />
              <span className="relative">Register Now</span>
            </Link>
          </div>
        </div>
      </motion.div>

    </main>
  );
}
