import { motion } from "motion/react";
import { Eyebrow, Section, SectionHeading } from "../site/Section";
import { BlurIn, DriftIn, MaskReveal, Stagger, StaggerItem } from "../site/motion-primitives";

export function Tracks() {
  return (
    <Section id="tracks">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.6fr] lg:gap-16">
        <Eyebrow index="04">Tracks</Eyebrow>
        <div>
          <SectionHeading>Competition Tracks</SectionHeading>
          <BlurIn delay={0.12}>
            <p className="body-copy mt-4 max-w-xl text-[0.9375rem]">
              OPCODE IMPACT features seven distinct competition tracks spanning cybersecurity's
              most critical domains — from industry challenges to digital trust.
            </p>
          </BlurIn>
        </div>
      </div>

      <div className="mt-12 grid gap-6 lg:mt-16 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {[
          { num: "01", title: "Industry Challenges", color: "cyan", desc: "Solve real-world cybersecurity problems contributed by industry and government organisations for deployable impact." },
          { num: "02", title: "SDG Goals", color: "emerald", desc: "Build secure, sustainable solutions aligned with the UN Sustainable Development Goals." },
          { num: "03", title: "Digital Forensics & Cyber Intelligence", color: "violet", desc: "Investigate digital evidence, threat intelligence, and cyber crime analysis at scale." },
          { num: "04", title: "Cloud, DevSecOps & Supply Chain Security", color: "sky", desc: "Secure cloud-native pipelines, DevSecOps workflows, and software supply chains." },
          { num: "05", title: "Post-Quantum Security", color: "amber", desc: "Design and implement cryptographic systems resilient against quantum computing threats." },
          { num: "06", title: "IoT, OT & Critical Infrastructure", color: "rose", desc: "Protect operational technology, industrial control systems, and critical national infrastructure." },
          { num: "07", title: "Deepfakes, Synthetic Media & Digital Trust", color: "indigo", desc: "Combat synthetic media threats and build frameworks for digital authenticity and trust." },
        ].map(({ num, title, color, desc }, i) => {
          const borderClass = color === "cyan" ? "border-cyan-accent/30 hover:border-cyan-accent/70" : color === "emerald" ? "border-emerald-500/30 hover:border-emerald-400/70" : color === "violet" ? "border-violet-500/30 hover:border-violet-400/70" : color === "sky" ? "border-sky-500/30 hover:border-sky-400/70" : color === "amber" ? "border-amber-500/30 hover:border-amber-400/70" : color === "rose" ? "border-rose-500/30 hover:border-rose-400/70" : "border-indigo-500/30 hover:border-indigo-400/70";
          const badgeClass = color === "cyan" ? "border-cyan-accent/40 bg-cyan-accent/10 text-cyan-accent" : color === "emerald" ? "border-emerald-500/40 bg-emerald-500/10 text-emerald-400" : color === "violet" ? "border-violet-500/40 bg-violet-500/10 text-violet-400" : color === "sky" ? "border-sky-500/40 bg-sky-500/10 text-sky-400" : color === "amber" ? "border-amber-500/40 bg-amber-500/10 text-amber-400" : color === "rose" ? "border-rose-500/40 bg-rose-500/10 text-rose-400" : "border-indigo-500/40 bg-indigo-500/10 text-indigo-400";
          return (
            <motion.div
              key={num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: i * 0.07 }}
              className={`group relative flex flex-col rounded-sm border bg-navy/90 p-7 transition-all duration-500 ${borderClass}`}
            >
              <div className="flex items-center justify-between">
                <span className={`inline-block border px-3 py-1 font-mono text-[0.6875rem] tracking-wider uppercase ${badgeClass}`}>
                  TRACK {num}
                </span>
                <span className="font-mono text-[2.5rem] font-light leading-none text-white/10">{num}</span>
              </div>
              <h3 className="mt-5 text-[1.1rem] font-light tracking-[-0.025em] text-foreground leading-snug">
                <MaskReveal delay={i * 0.05}>{title}</MaskReveal>
              </h3>
              <p className="body-copy mt-3 text-[0.875rem] leading-relaxed text-white/70">{desc}</p>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}

export function IndustryPartners() {
  return (
    <Section id="partners">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.6fr] lg:gap-16">
        <Eyebrow index="05">Industry Partners</Eyebrow>
        <div>
          <SectionHeading>Industry Partners</SectionHeading>
          <BlurIn delay={0.12}>
            <p className="body-copy mt-4 max-w-lg text-[0.9375rem]">
              Official partner announcements will be released soon.
            </p>
          </BlurIn>
        </div>
      </div>

      <div className="mt-12 grid grid-cols-2 gap-px border border-border bg-border sm:grid-cols-4 lg:mt-16">
        {[1, 2, 3, 4].map((num, i) => (
          <motion.div
            key={num}
            initial={{ opacity: 0, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.06 }}
            className="flex h-28 flex-col items-center justify-center bg-background px-4 text-center transition-colors duration-500 hover:bg-graphite"
          >
            <span className="font-mono text-[0.625rem] tracking-widest text-cyan-accent/70 uppercase">
              Partner Slot {String(num).padStart(2, "0")}
            </span>
            <span className="mt-1.5 text-xs font-light tracking-wide text-steel">
              To Be Announced
            </span>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

export function ProblemStatements() {
  return (
    <Section id="problem-statements">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.6fr] lg:gap-16">
        <Eyebrow index="06">Problem Statements</Eyebrow>
        <div>
          <SectionHeading>Problem Statements</SectionHeading>
          <BlurIn delay={0.12}>
            <p className="body-copy mt-4 max-w-lg text-[0.9375rem]">
              Problem Statements will be released to registered participants.
            </p>
          </BlurIn>
        </div>
      </div>

      <div className="mt-12 lg:mt-16">
        {[
          { code: "TRACK 01", label: "Industry Challenges", status: "Coming Soon" },
          { code: "TRACK 02", label: "SDG Goals", status: "Coming Soon" },
          { code: "TRACK 03", label: "Digital Forensics & Cyber Intelligence", status: "Coming Soon" },
          { code: "TRACK 04", label: "Cloud, DevSecOps & Supply Chain Security", status: "Coming Soon" },
          { code: "TRACK 05", label: "Post-Quantum Security", status: "Coming Soon" },
          { code: "TRACK 06", label: "IoT, OT & Critical Infrastructure", status: "Coming Soon" },
          { code: "TRACK 07", label: "Deepfakes, Synthetic Media & Digital Trust", status: "Coming Soon" },
        ].map((s, i) => (
          <DriftIn key={s.code} from="up" distance={20} delay={i * 0.08}>
            <div className="group grid grid-cols-[auto_1fr] items-center gap-x-6 border-t border-border py-6 transition-colors duration-500 hover:border-cyan-accent md:grid-cols-[8rem_1fr_auto]">
              <span className="font-mono text-xs text-cyan-accent">{s.code}</span>
              <h3 className="text-[1.125rem] font-light tracking-[-0.02em] md:text-[1.35rem]">
                {s.label}
              </h3>
              <span className="label-micro text-steel transition-colors group-hover:text-foreground">
                {s.status}
              </span>
            </div>
          </DriftIn>
        ))}
        <div className="border-t border-border" />
      </div>
    </Section>
  );
}
