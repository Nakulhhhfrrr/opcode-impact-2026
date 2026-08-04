import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { Eyebrow, Section, SectionHeading } from "../site/Section";
import { BlurIn, DriftIn, MaskReveal } from "../site/motion-primitives";

export function RegistrationCTA() {
  return (
    <Section id="register" className="relative">
      <div className="py-4 md:py-10">
        <Eyebrow index="11">Registration</Eyebrow>
        <h2 className="mt-7 display-xl text-[2.5rem] sm:text-[4rem] lg:text-[5.5rem]">
          <MaskReveal>Secure today.</MaskReveal>
          <MaskReveal delay={0.1}>
            <span className="text-cyan-accent">Sustain tomorrow.</span>
          </MaskReveal>
        </h2>
        <DriftIn from="up" delay={0.2}>
          <p className="body-copy mt-6 max-w-lg text-[0.9375rem]">
            Open to student teams of 2–4 members from engineering and arts &amp; science
            colleges across India. Hosted by the Department of Computer Science &amp;
            Engineering (Cyber Security), Jyothi Engineering College, Thrissur, Kerala.
          </p>
        </DriftIn>

        {/* Registration details panel */}
        <DriftIn from="up" delay={0.28}>
          <div className="mt-8 grid gap-px border border-border bg-border sm:grid-cols-2">
            <div className="bg-background p-6 md:p-8">
              <p className="label-micro text-steel">Registration Fee</p>
              <p className="mt-3 font-mono text-[2rem] font-light text-cyan-accent leading-none">
                ₹300
              </p>
              <p className="mt-1.5 text-xs font-light text-steel">per participant</p>
            </div>
            <div className="bg-background p-6 md:p-8">
              <p className="label-micro text-steel">Registration Method</p>
              <p className="mt-3 text-[1rem] font-light tracking-[-0.015em] text-foreground">
                Google Form
              </p>
              <p className="mt-1.5 text-xs font-light text-steel/70 italic">
                Registration link will be updated soon
              </p>
            </div>
          </div>
        </DriftIn>

        {/* Food & Accommodation highlight */}
        <DriftIn from="up" delay={0.35}>
          <div className="mt-4 flex items-start gap-4 border border-cyan-accent/30 bg-navy/60 p-6 md:p-7">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-accent" />
            <div>
              <p className="text-[0.9375rem] font-light text-foreground tracking-[-0.015em]">
                Food &amp; Accommodation Included
              </p>
              <p className="body-copy mt-1.5 text-xs text-white/70 leading-relaxed">
                All registered participants receive complimentary food and
                accommodation throughout the 24-hour hackathon. Focus entirely
                on building — we take care of the rest.
              </p>
            </div>
          </div>
        </DriftIn>

        {/* QR + CTA row */}
        <DriftIn from="up" delay={0.42}>
          <div className="mt-8 grid gap-6 sm:grid-cols-[1fr_auto] items-center">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfol77wlEq55j-BK3Kxbg3_s5a7gE7DiAV5QKiNQxsO86LRVA/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden bg-foreground px-9 py-3.5 text-[0.8125rem] font-medium tracking-wide text-background"
                id="register-now-btn"
              >
                <span className="absolute inset-0 translate-y-full bg-cyan-accent transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0" />
                <span className="relative">Register Now</span>
              </a>
              <Link
                to="/about"
                className="group relative overflow-hidden border border-border px-9 py-3.5 text-[0.8125rem] font-light tracking-wide"
              >
                <span className="absolute inset-0 -translate-x-full bg-graphite transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0" />
                <span className="relative">Learn More</span>
              </Link>
            </div>
            {/* QR code */}
            <div className="flex flex-col items-center gap-2 shrink-0">
              <img
                src="/register-qr.png"
                alt="Scan to open registration form"
                width={100}
                height={100}
                className="border border-border bg-white p-1.5 rounded-sm"
              />
              <span className="label-micro text-steel">Scan to register</span>
            </div>
          </div>
        </DriftIn>

        {/* Payment notice */}
        <DriftIn from="up" delay={0.5}>
          <p className="mt-5 text-xs font-light text-steel/70 leading-relaxed max-w-lg">
            Registration is currently being collected through Google Forms. Payment instructions will be communicated separately after registration.
          </p>
        </DriftIn>
      </div>
    </Section>
  );
}

const FAQS = [
  [
    "Who can participate?",
    "Open to UG and PG students from engineering and arts & science colleges across India. Teams must consist of 2 to 4 members. Interdisciplinary teams are welcome.",
  ],
  [
    "What are the competition tracks?",
    "Track 01 is the Industry Challenge — solving real-world cybersecurity problems from sectors like banking, healthcare, manufacturing, and government. Track 02 is the SDG Innovation Challenge — building secure, sustainable technology solutions aligned with United Nations Sustainable Development Goals.",
  ],
  [
    "When and where is the event?",
    "OPCODE IMPACT 2026 takes place on 9–10 October 2026 at Jyothi Engineering College, Cheruthuruthy, Thrissur, Kerala. The hackathon runs for 24 continuous hours.",
  ],
  [
    "What is the registration fee?",
    "The registration fee is ₹300 per participant. Registration is completed through Google Form. The registration link will be published soon.",
  ],
  [
    "Is food and accommodation provided?",
    "Yes. Food and accommodation are provided free of charge for all registered participants throughout the 24-hour hackathon.",
  ],
  [
    "When will Problem Statements be released?",
    "Official problem statement sets will be released directly to registered participants. Registration and problem statement details will be announced soon.",
  ],
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <Section id="faq">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.6fr] lg:gap-16">
        <Eyebrow index="12">FAQ</Eyebrow>
        <div>
          <SectionHeading>Frequently Asked Questions</SectionHeading>

          <div className="mt-10">
            {FAQS.map(([q, a], i) => {
              const isOpen = open === i;
              return (
                <div key={q} className="border-t border-border">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${i}`}
                    id={`faq-question-${i}`}
                    className="group flex w-full items-start justify-between gap-8 py-5 text-left"
                  >
                    <span className="text-[1rem] font-light tracking-[-0.015em] transition-colors duration-300 group-hover:text-cyan-accent md:text-[1.125rem]">
                      {q}
                    </span>
                    <span className="relative mt-2 block h-3 w-3 shrink-0">
                      <span className="absolute top-1/2 left-0 h-px w-full bg-foreground" />
                      <motion.span
                        className="absolute top-0 left-1/2 h-full w-px bg-foreground"
                        animate={{ scaleY: isOpen ? 0 : 1 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      />
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen ? (
                      <motion.div
                        id={`faq-answer-${i}`}
                        role="region"
                        aria-labelledby={`faq-question-${i}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="body-copy max-w-xl pb-6 text-sm leading-relaxed">{a}</p>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
              );
            })}
            <div className="border-t border-border" />
          </div>
        </div>
      </div>
    </Section>
  );
}

const FACULTY_COORDINATORS = [
  {
    name: "Dr. Resmi A. M.",
    email: "resmiam@jecc.ac.in",
    phone: "8089641007",
    phoneHref: "tel:+918089641007",
  },
  {
    name: "Dr. Geethu Mary George",
    email: "drgeethumarygeorge@jecc.ac.in",
    phone: "+91 80899 92358",
    phoneHref: "tel:+918089992358",
  },
  {
    name: "Remya M",
    email: "remyam@jecc.ac.in",
    phone: "7994232332",
    phoneHref: "tel:+917994232332",
  },
];

const STUDENT_COORDINATORS_WITH_CONTACT = [
  {
    name: "Hrishikesh P V",
    phone: "+91 80752 29774",
    phoneHref: "tel:+918075229774",
    email: "hrisheekeshpv@gmail.com",
  },
  {
    name: "Nakul Suresh",
    phone: "+91 88917 93404",
    phoneHref: "tel:+918891793404",
    email: null,
  },
  {
    name: "Abhinav K Ramesh",
    phone: "+91 88482 32698",
    phoneHref: "tel:+918848232698",
    email: null,
  },
  {
    name: "Mohammad Nihad P C",
    phone: "+91 85905 89489",
    phoneHref: "tel:+918590589489",
    email: null,
  },
];

const STUDENT_COORDINATORS_LISTED = [
  "Alvin Binoy",
  "Britto Jerry C",
  "Mohammad Bilal",
  "Devanarayanan T N",
];

export function Contact() {
  return (
    <Section id="contact">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.6fr] lg:gap-16">
        <Eyebrow index="13">Contact</Eyebrow>
        <div>
          <SectionHeading>Contact &amp; Venue</SectionHeading>

          {/* Venue info */}
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {[
              ["Host Department", "Department of Computer Science & Engineering (Cyber Security)"],
              ["Host Institution", "Jyothi Engineering College, Thrissur, Kerala"],
              ["Event Dates", "9–10 October 2026"],
              ["Campus Address", "Jyothi Engineering College, Cheruthuruthy, Thrissur — 679 531, Kerala, India."],
            ].map(([label, value], i) => (
              <DriftIn key={label} from="up" delay={i * 0.06}>
                <div className="border-t border-border pt-4">
                  <p className="label-micro text-steel">{label}</p>
                  <p className="mt-2.5 text-[1rem] font-light tracking-[-0.015em] text-foreground leading-snug">
                    {value}
                  </p>
                </div>
              </DriftIn>
            ))}
          </div>

          {/* Faculty Coordinators */}
          <DriftIn from="up" delay={0.26}>
            <div className="mt-10 border-t border-border pt-6">
              <p className="label-micro text-cyan-accent uppercase tracking-wider mb-6">
                Faculty Coordinators
              </p>
              <div className="grid gap-px border border-border bg-border sm:grid-cols-3">
                {FACULTY_COORDINATORS.map((fc, i) => (
                  <motion.div
                    key={fc.email}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-6% 0px" }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: i * 0.07 }}
                    className="bg-background p-6"
                  >
                    <h3 className="text-[1rem] font-light tracking-[-0.015em] text-foreground">
                      {fc.name}
                    </h3>
                    <div className="mt-4 space-y-2">
                      <a
                        href={`mailto:${fc.email}`}
                        className="flex items-baseline gap-2 group"
                        aria-label={`Email ${fc.name}`}
                      >
                        <span className="label-micro text-steel shrink-0">Email</span>
                        <span className="text-xs font-light text-steel/80 break-all transition-colors duration-300 group-hover:text-cyan-accent">
                          {fc.email}
                        </span>
                      </a>
                      <a
                        href={fc.phoneHref}
                        className="flex items-baseline gap-2 group"
                        aria-label={`Call ${fc.name}`}
                      >
                        <span className="label-micro text-steel shrink-0">Phone</span>
                        <span className="text-xs font-light text-steel/80 transition-colors duration-300 group-hover:text-cyan-accent">
                          {fc.phone}
                        </span>
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </DriftIn>

          {/* Student Coordinators */}
          <DriftIn from="up" delay={0.36}>
            <div className="mt-8 border-t border-border pt-6">
              <p className="label-micro text-cyan-accent uppercase tracking-wider mb-6">
                Student Coordinators
              </p>

              {/* Coordinators with contact info */}
              <div className="grid gap-px border border-border bg-border sm:grid-cols-2">
                {STUDENT_COORDINATORS_WITH_CONTACT.map((sc, i) => (
                  <motion.div
                    key={sc.name}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-6% 0px" }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: i * 0.06 }}
                    className="bg-background p-5"
                  >
                    <h3 className="text-[0.9375rem] font-light tracking-[-0.015em] text-foreground">
                      {sc.name}
                    </h3>
                    <div className="mt-3 space-y-1.5">
                      <a
                        href={sc.phoneHref}
                        className="flex items-baseline gap-2 group"
                        aria-label={`Call ${sc.name}`}
                      >
                        <span className="label-micro text-steel shrink-0">Phone</span>
                        <span className="text-xs font-light text-steel/80 transition-colors duration-300 group-hover:text-cyan-accent">
                          {sc.phone}
                        </span>
                      </a>
                      {sc.email ? (
                        <a
                          href={`mailto:${sc.email}`}
                          className="flex items-baseline gap-2 group"
                          aria-label={`Email ${sc.name}`}
                        >
                          <span className="label-micro text-steel shrink-0">Email</span>
                          <span className="text-xs font-light text-steel/80 break-all transition-colors duration-300 group-hover:text-cyan-accent">
                            {sc.email}
                          </span>
                        </a>
                      ) : null}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Additional coordinators */}
              <div className="mt-4">
                <p className="label-micro text-steel mb-3">Also coordinating</p>
                <div className="flex flex-wrap gap-2.5">
                  {STUDENT_COORDINATORS_LISTED.map((name) => (
                    <span
                      key={name}
                      className="border border-border bg-background/50 px-4 py-2 text-xs font-light text-foreground/80"
                    >
                      {name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </DriftIn>
        </div>
      </div>
    </Section>
  );
}

export function QuickInfoStrip() {
  const items = [
    { label: "Registration Fee", value: "₹300 / participant" },
    { label: "Register via", value: "Google Forms" },
    { label: "Food", value: "Included" },
    { label: "Accommodation", value: "Included" },
    { label: "Duration", value: "24-Hour National Hackathon" },
  ];

  return (
    <section aria-label="Quick event information" className="border-t border-border bg-graphite/40">
      <div className="shell">
        <div className="flex flex-wrap items-stretch gap-px bg-border">
          {items.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.06 }}
              className="flex min-w-[9rem] flex-1 flex-col justify-center bg-background px-5 py-5 sm:py-6"
            >
              <span className="label-micro text-steel">{item.label}</span>
              <span className="mt-1.5 text-[0.9375rem] font-light tracking-[-0.015em] text-foreground">
                {item.value}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
