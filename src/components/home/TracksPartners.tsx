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
              OPCODE IMPACT features two distinct competition tracks with dedicated focus
              areas and evaluation criteria.
            </p>
          </BlurIn>
        </div>
      </div>

      <div className="mt-12 grid gap-8 lg:mt-16 lg:grid-cols-2">
        {/* TRACK 01: Industry Challenge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="group relative flex flex-col justify-between rounded-sm border border-cyan-accent/30 bg-navy/90 p-8 md:p-10 transition-all duration-500 hover:border-cyan-accent/70"
        >
          <div>
            <div className="flex items-center justify-between">
              <span className="inline-block border border-cyan-accent/40 bg-cyan-accent/10 px-3 py-1 font-mono text-[0.6875rem] tracking-wider uppercase text-cyan-accent">
                TRACK 01
              </span>
              <span className="font-mono text-[3.5rem] font-light leading-none text-white/10">
                01
              </span>
            </div>

            <h3 className="mt-6 text-[1.75rem] font-light tracking-[-0.03em] text-foreground md:text-[2.25rem]">
              <MaskReveal>Industry Challenge</MaskReveal>
            </h3>

            <p className="body-copy mt-4 text-[0.9375rem] leading-relaxed text-white/80">
              Participants solve practical cybersecurity challenges contributed by
              industry and government organizations. Real-world cybersecurity problem
              statements designed for deployable impact.
            </p>
          </div>

          <div className="mt-8 border-t border-white/10 pt-6">
            <span className="label-micro mb-3 block text-white/40 uppercase">
              Domain Focus Areas
            </span>
            <Stagger className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
              {[
                "Banking & Finance",
                "Healthcare",
                "Manufacturing",
                "Government & Public Sector",
                "IT Companies",
                "Startups",
              ].map((item) => (
                <StaggerItem key={item}>
                  <div className="border border-white/10 bg-white/[0.03] px-3 py-2 text-center text-xs font-light text-white/85 transition-colors group-hover:border-cyan-accent/30">
                    {item}
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </motion.div>

        {/* TRACK 02: SDG Innovation Challenge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
          className="group relative flex flex-col justify-between rounded-sm border border-emerald-500/30 bg-[#0a1f1c]/90 p-8 md:p-10 transition-all duration-500 hover:border-emerald-400/70"
        >
          <div>
            <div className="flex items-center justify-between">
              <span className="inline-block border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 font-mono text-[0.6875rem] tracking-wider uppercase text-emerald-400">
                TRACK 02
              </span>
              <span className="font-mono text-[3.5rem] font-light leading-none text-white/10">
                02
              </span>
            </div>

            <h3 className="mt-6 text-[1.75rem] font-light tracking-[-0.03em] text-foreground md:text-[2.25rem]">
              <MaskReveal delay={0.12}>SDG Innovation Challenge</MaskReveal>
            </h3>

            <p className="body-copy mt-4 text-[0.9375rem] leading-relaxed text-white/80">
              Participants create cybersecurity-enabled solutions that address real
              societal challenges while supporting the UN Sustainable Development Goals.
            </p>
          </div>

          <div className="mt-8 border-t border-white/10 pt-6">
            <span className="label-micro mb-3 block text-white/40 uppercase">
              UN SDG Alignment
            </span>
            <Stagger className="flex flex-col gap-2">
              {[
                "SDG 3 — Good Health & Well-being",
                "SDG 4 — Quality Education",
                "SDG 9 — Industry, Innovation & Infrastructure",
                "SDG 11 — Sustainable Cities & Communities",
                "SDG 13 — Climate Action",
                "SDG 16 — Peace, Justice & Strong Institutions",
              ].map((sdg) => (
                <StaggerItem key={sdg}>
                  <div className="flex items-center gap-2.5 border border-white/10 bg-white/[0.03] px-3.5 py-2 text-xs font-light text-emerald-300/90 transition-colors group-hover:border-emerald-500/30">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    <span>{sdg}</span>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </motion.div>
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
          { code: "TRACK 01", label: "Industry Challenge Statement Set", status: "Coming Soon" },
          { code: "TRACK 02", label: "SDG Innovation Challenge Statement Set", status: "Coming Soon" },
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
