import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Eyebrow, Section, SectionHeading } from "../site/Section";
import { BlurIn, DriftIn, MaskReveal } from "../site/motion-primitives";

export function Timeline() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 60%"],
  });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const events = [
    [
      "Opening Soon",
      "Registration Opens",
      "Register via Google Form. Fee: ₹300 per participant. Link will be published shortly.",
    ],
    [
      "5 October 2026",
      "Registration Closes",
      "Last date to complete team registration before the hackathon begins.",
    ],
    [
      "9–10 October 2026",
      "National Level Hackathon",
      "24-hour continuous hackathon event at Jyothi Engineering College campus, Thrissur, Kerala.",
    ],
  ] as const;

  return (
    <Section id="schedule">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.6fr] lg:gap-16">
        <Eyebrow index="07">Timeline</Eyebrow>
        <div>
          <SectionHeading>Event Timeline</SectionHeading>
          <BlurIn delay={0.12}>
            <p className="body-copy mt-4 max-w-lg text-[0.9375rem]">
              Detailed event schedule will be published soon. The hackathon runs continuously for 24
              hours on 9–10 October 2026.
            </p>
          </BlurIn>
        </div>
      </div>

      <div ref={ref} className="relative mt-12 pl-8 md:pl-0 lg:mt-16">
        <div className="absolute top-0 bottom-0 left-[3px] w-px bg-border md:left-[calc(13rem+3px)]" />
        <motion.div
          style={{ scaleY }}
          className="absolute top-0 bottom-0 left-[3px] w-px origin-top bg-cyan-accent md:left-[calc(13rem+3px)]"
        />

        {events.map(([time, title, body]) => (
          <DriftIn key={title} from="right" distance={24} delay={0.04}>
            <div className="relative grid gap-x-10 pb-10 md:grid-cols-[13rem_1fr] md:pb-12">
              <div className="md:text-right md:pr-10">
                <span className="label-micro text-cyan-accent">{time}</span>
              </div>
              <div className="relative">
                <span className="absolute top-[0.4rem] -left-[calc(2rem-0px)] h-1.5 w-1.5 rounded-full bg-cyan-accent md:-left-[calc(2.5rem+0.75px)]" />
                <h3 className="text-[1.125rem] font-light tracking-[-0.02em] md:text-[1.35rem]">
                  {title}
                </h3>
                <p className="body-copy mt-2 max-w-md text-sm leading-relaxed">{body}</p>
              </div>
            </div>
          </DriftIn>
        ))}

        <div className="pl-0 md:pl-[15.5rem] pt-2">
          <p className="label-micro text-steel italic">
            Full schedule — including checkpoints, mentoring sessions, and final presentations —
            will be published before the event.
          </p>
        </div>
      </div>
    </Section>
  );
}

export function Prizes() {
  const opportunities = [
    {
      icon: "01",
      label: "Outstanding Team Prizes",
      body: "Exciting prizes and recognitions await the best-performing teams across both competition tracks.",
    },
    {
      icon: "02",
      label: "Internship Opportunities",
      body: "Top performers gain direct internship pathways with partner organisations and industry collaborators.",
    },
    {
      icon: "03",
      label: "Placement Opportunities",
      body: "Participating companies actively scout talent — your performance here can open doors to career opportunities.",
    },
    {
      icon: "04",
      label: "Multi-Category Recognition",
      body: "Awards span multiple categories across both tracks, recognising innovation, impact, and technical excellence.",
    },
    {
      icon: "05",
      label: "Industry Exposure",
      body: "Direct interaction with domain experts, startup founders, and cybersecurity professionals throughout the event.",
    },
  ];

  return (
    <Section id="prizes">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.6fr] lg:gap-16">
        <Eyebrow index="08">Awards</Eyebrow>
        <div>
          <SectionHeading>Awards &amp; Opportunities</SectionHeading>
          <BlurIn delay={0.12}>
            <p className="body-copy mt-4 max-w-lg text-[0.9375rem]">
              OPCODE IMPACT 2026 goes beyond trophies — outstanding teams unlock prizes, career
              pathways, and industry connections that last well beyond the 24 hours.
            </p>
          </BlurIn>
        </div>
      </div>

      <div className="mt-12 space-y-px border border-border bg-border lg:mt-16">
        {opportunities.map((o, i) => (
          <DriftIn key={o.icon} from="left" distance={20} delay={i * 0.07}>
            <div className="grid gap-4 bg-background p-6 md:grid-cols-[3rem_1fr] md:p-8 md:gap-8 items-start">
              <span className="font-mono text-[0.6875rem] text-cyan-accent pt-0.5">{o.icon}</span>
              <div>
                <h3 className="text-[1rem] font-light tracking-[-0.015em] text-foreground">
                  {o.label}
                </h3>
                <p className="body-copy mt-1.5 text-sm text-steel leading-relaxed">{o.body}</p>
              </div>
            </div>
          </DriftIn>
        ))}
      </div>

      <DriftIn from="up" delay={0.15}>
        <p className="mt-6 label-micro text-steel italic">
          Prize details and specific award categories will be announced closer to the event date.
        </p>
      </DriftIn>
    </Section>
  );
}

export function Judges() {
  const profiles = [
    {
      label: "Industry Experts",
      body: "Senior professionals from cybersecurity, fintech, and enterprise technology sectors.",
    },
    {
      label: "Faculty Members",
      body: "Distinguished academics from leading engineering institutions across India.",
    },
    {
      label: "Startup Founders",
      body: "Founders building at the intersection of security, sustainability, and innovation.",
    },
    {
      label: "Cybersecurity Professionals",
      body: "Practitioners with hands-on expertise in offensive and defensive security disciplines.",
    },
  ];

  return (
    <Section id="judges">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.6fr] lg:gap-16">
        <Eyebrow index="09">Judges &amp; Mentors</Eyebrow>
        <div>
          <SectionHeading>Judging Panel</SectionHeading>
          <BlurIn delay={0.12}>
            <p className="body-copy mt-4 max-w-lg text-[0.9375rem]">
              Our panel will consist of experienced professionals drawn from industry, academia, and
              the startup ecosystem. Full panel announcement coming soon.
            </p>
          </BlurIn>
        </div>
      </div>

      <div className="mt-12 grid gap-x-8 gap-y-px border border-border bg-border sm:grid-cols-2 lg:mt-16">
        {profiles.map((p, i) => (
          <motion.div
            key={p.label}
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-8% 0px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: i * 0.07 }}
            className="bg-background p-7 md:p-9"
          >
            <span className="font-mono text-[0.6875rem] text-cyan-accent">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-4 text-[1.125rem] font-light tracking-[-0.02em]">
              <MaskReveal>{p.label}</MaskReveal>
            </h3>
            <p className="body-copy mt-2 text-xs text-steel leading-relaxed">{p.body}</p>
          </motion.div>
        ))}
      </div>

      <DriftIn from="up" delay={0.2}>
        <p className="mt-6 label-micro text-steel italic">
          Official panel announcement will be made before the event.
        </p>
      </DriftIn>
    </Section>
  );
}

export function Sponsors() {
  return (
    <Section id="sponsors">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.6fr] lg:gap-16">
        <Eyebrow index="10">Sponsors</Eyebrow>
        <div>
          <SectionHeading>Sponsors</SectionHeading>
          <BlurIn delay={0.12}>
            <p className="body-copy mt-4 max-w-lg text-[0.9375rem]">
              Official sponsor announcements coming soon.
            </p>
          </BlurIn>
        </div>
      </div>

      <div className="mt-12 space-y-px border border-border bg-border lg:mt-16">
        {(
          [
            ["Title Partner", "Coming Soon"],
            ["Gold Partners", "Coming Soon"],
            ["Community & Institutional Partners", "Coming Soon"],
          ] as const
        ).map(([tier, status], i) => (
          <DriftIn key={tier} from="left" distance={20} delay={i * 0.07}>
            <div className="grid gap-4 bg-background p-6 md:grid-cols-[14rem_1fr] md:p-8">
              <span className="label-micro text-cyan-accent">{tier}</span>
              <div className="flex items-center">
                <span className="text-[0.9375rem] font-light text-steel/70 italic">{status}</span>
              </div>
            </div>
          </DriftIn>
        ))}
      </div>
    </Section>
  );
}
