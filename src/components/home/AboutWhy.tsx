import venue from "@/assets/venue.jpg";
import { Eyebrow, Section, SectionHeading } from "../site/Section";
import { BlurIn, DriftIn, MaskReveal, ScaleReveal } from "../site/motion-primitives";

export function About() {
  return (
    <Section id="about" hairline={false}>
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.6fr] lg:gap-16">
        <div>
          <Eyebrow index="01">About Opcode Impact</Eyebrow>
        </div>
        <div>
          <h2 className="display-lg text-[2rem] sm:text-[2.75rem] lg:text-[3.75rem]">
            <MaskReveal>Building secure solutions</MaskReveal>
            <MaskReveal delay={0.08}>for a sustainable</MaskReveal>
            <MaskReveal delay={0.16}>
              <span className="text-cyan-accent">future</span>.
            </MaskReveal>
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <BlurIn delay={0.1}>
              <p className="body-copy text-[0.9375rem] leading-relaxed">
                OPCODE IMPACT 2026 is a premier National 24-Hour Hackathon bringing
                together student engineers, researchers, and academic institutions across
                India to develop secure, resilient, and sustainable technological
                solutions.
              </p>
            </BlurIn>
            <BlurIn delay={0.22}>
              <p className="body-copy text-[0.9375rem] leading-relaxed">
                Organised by the Department of Computer Science &amp; Engineering (Cyber
                Security) at Jyothi Engineering College, Thrissur, the hackathon bridges
                cybersecurity innovation with the United Nations Sustainable Development
                Goals to address real-world challenges.
              </p>
            </BlurIn>
          </div>
        </div>
      </div>

      <div className="mt-12 grid gap-8 lg:mt-16 lg:grid-cols-[1.2fr_1fr] lg:items-center">
        <div>
          <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4 lg:grid-cols-2">
            {[
              ["24", "Hours continuous"],
              ["2", "Competition tracks"],
              ["1", "National mandate"],
              ["SDG", "Aligned innovation"],
            ].map(([value, label], i) => (
              <DriftIn key={label} from="up" delay={i * 0.08}>
                <div className="border-t border-border pt-4">
                  <div className="font-mono text-[2rem] leading-none font-light tabular-nums lg:text-[2.5rem]">
                    {value}
                  </div>
                  <p className="label-micro mt-2 text-steel">{label}</p>
                </div>
              </DriftIn>
            ))}
          </div>
        </div>

        <div>
          <ScaleReveal>
            <img
              src={venue}
              alt="Jyothi Engineering College campus architecture"
              width={1200}
              height={1504}
              loading="lazy"
              className="h-[32vh] w-full object-cover md:h-[42vh] rounded-sm border border-border"
            />
          </ScaleReveal>
          <DriftIn from="up" delay={0.1}>
            <p className="label-micro mt-3 text-steel">
              Jyothi Engineering College · Cheruthuruthy · Thrissur, Kerala
            </p>
          </DriftIn>
        </div>
      </div>
    </Section>
  );
}

export function RulesEligibility() {
  return (
    <Section id="rules">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.6fr] lg:gap-16">
        <div>
          <Eyebrow index="02">Rules &amp; Eligibility</Eyebrow>
        </div>
        <div>
          <SectionHeading>Who Can Participate</SectionHeading>
          <BlurIn delay={0.12}>
            <p className="body-copy mt-4 max-w-xl text-[0.9375rem]">
              Official eligibility guidelines from the national event poster. Open to
              promising student innovators across diverse academic disciplines.
            </p>
          </BlurIn>
        </div>
      </div>

      <div className="mt-12 grid gap-12 lg:mt-16 lg:grid-cols-[1.4fr_1fr]">
        <div className="border-t border-border pt-8">
          <span className="label-micro text-cyan-accent uppercase tracking-wider block mb-4">
            Eligible Student Categories
          </span>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Undergraduate (UG) Students",
              "Postgraduate (PG) Students",
              "Engineering Colleges",
              "Arts & Science Colleges",
              "Interdisciplinary Teams",
            ].map((cat, i) => (
              <DriftIn key={cat} from="up" delay={i * 0.05}>
                <div className="flex items-center gap-3 border border-border bg-background/50 px-4 py-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-accent" />
                  <span className="text-[0.9375rem] font-light text-foreground">{cat}</span>
                </div>
              </DriftIn>
            ))}
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <span className="label-micro text-cyan-accent uppercase tracking-wider block mb-4">
            Team Specification &amp; Format
          </span>
          <div className="bg-navy/70 border border-cyan-accent/30 p-6 md:p-8">
            <div className="flex items-start justify-between gap-4">
              <span className="label-micro text-white/60 mt-1">Team Size</span>
              <div className="text-right">
                <div className="font-mono text-[1.5rem] font-light text-cyan-accent leading-tight">
                  Min 2 Members
                </div>
                <div className="font-mono text-[1.5rem] font-light text-cyan-accent leading-tight">
                  Max 4 Members
                </div>
              </div>
            </div>
            <p className="body-copy mt-4 text-xs text-white/70 leading-relaxed">
              Teams may consist of 2 to 4 members. Interdisciplinary collaboration
              across engineering and science departments is encouraged.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}

const BENEFITS: Array<{ title: string; body: string; span: string }> = [
  {
    title: "Cybersecurity Challenges",
    body: "Work on practical cybersecurity scenarios and technical problem statements.",
    span: "md:col-span-6",
  },
  {
    title: "SDG-Based Innovation",
    body: "Engineer technical solutions directly aligned with United Nations Sustainable Development Goals.",
    span: "md:col-span-6",
  },
  {
    title: "Industry Problem Statements",
    body: "Solve real-world challenges contributed by industry and public sector organizations.",
    span: "md:col-span-6",
  },
  {
    title: "Expert Mentoring",
    body: "Guidance from experienced domain mentors and technical specialists throughout the event.",
    span: "md:col-span-6",
  },
  {
    title: "Internship & Placement Opportunities",
    body: "Direct interaction and exposure with partner organizations and industry delegates.",
    span: "md:col-span-6",
  },
  {
    title: "Awards & Opportunities",
    body: "Exciting prizes, internship pathways, and placement opportunities with partner organisations across both tracks.",
    span: "md:col-span-6",
  },
  {
    title: "Participation Certificates",
    body: "Official certificates issued to all participating team members.",
    span: "md:col-span-6",
  },
  {
    title: "Networking",
    body: "Connect with student engineers, academic leaders, and domain experts nationwide.",
    span: "md:col-span-6",
  },
];

export function WhyParticipate() {
  return (
    <Section id="why">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.6fr] lg:gap-16">
        <div>
          <Eyebrow index="03">Why Participate</Eyebrow>
        </div>
        <div>
          <SectionHeading>Event Benefits</SectionHeading>
        </div>
      </div>

      <div className="mt-12 grid gap-x-8 gap-y-8 md:grid-cols-12 lg:mt-16">
        {BENEFITS.map((b, i) => (
          <DriftIn
            key={b.title}
            from={i % 2 === 0 ? "left" : "right"}
            distance={20}
            delay={(i % 2) * 0.05}
            className={b.span}
          >
            <div className="group border-t border-border pt-4 transition-colors duration-500 hover:border-cyan-accent">
              <span className="font-mono text-[0.625rem] text-steel">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2.5 text-[1.125rem] font-light tracking-[-0.02em] md:text-[1.35rem]">
                {b.title}
              </h3>
              <p className="body-copy mt-2 text-xs leading-relaxed text-steel">{b.body}</p>
            </div>
          </DriftIn>
        ))}
      </div>
    </Section>
  );
}
