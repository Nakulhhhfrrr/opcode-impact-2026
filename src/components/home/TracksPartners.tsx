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
              className={`group relative flex flex-col rounded-sm border bg-navy/90 p-7 transition-all duration-150 ${borderClass} hover:bg-navy`}
            >
              <div className="flex items-center justify-between">
                <span className={`inline-block border px-3 py-1 font-mono text-[0.6875rem] tracking-wider uppercase ${badgeClass}`}>
                  TRACK {num}
                </span>
                <span className="font-mono text-[2.5rem] font-light leading-none text-white/[0.07] transition-all duration-150 group-hover:text-white/20">{num}</span>
              </div>
              <h3 className="mt-5 text-[1.1rem] font-light tracking-[-0.025em] text-foreground leading-snug transition-colors duration-150 group-hover:text-white">
                <MaskReveal delay={i * 0.05}>{title}</MaskReveal>
              </h3>
              <p className="body-copy mt-3 text-[0.875rem] leading-relaxed text-white/60 group-hover:text-white/80 transition-colors duration-150">{desc}</p>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}

export function IndustryPartners() {
  const partners = [
    { name: "NeST", logo: "/partners/nest.png", desc: "Global technology conglomerate offering advanced engineering solutions.", sizeClass: "h-auto w-32 md:w-40", href: "https://nestgroup.net/" },
    { name: "ESAF", logo: "/partners/esaf.png", desc: "A leading financial institution championing digital banking security.", sizeClass: "h-auto w-32 md:w-40", href: "https://www.esafbank.com/" },
    { name: "K-SAAC", logo: "/partners/ksaac.png", desc: "Kerala State Audit & Accounts Corporation, ensuring financial integrity.", sizeClass: "h-auto w-32 md:w-40", href: "https://ksaac.duk.ac.in/" },
    { name: "Dendo", logo: "/partners/dendo.png", desc: "Providing next-gen IT infrastructure and strategic consulting services.", sizeClass: "h-auto w-32 md:w-40", href: "https://dendo.in/" },
    { name: "Hackup Technology", logo: "/partners/hackup-technology.png", desc: "Specialists in custom web applications, cloud solutions, and IT security.", sizeClass: "h-24 w-auto", href: "https://www.hackuptechnology.com/" },
    { name: "CodeSpace Solutions", logo: "/partners/codespace-solutions.png", desc: "Innovative software development and digital transformation agency.", sizeClass: "h-20 w-auto" },
    { name: "Megacy Soft Solutions", logo: "/partners/megacy-soft-solutions.png", desc: "Enterprise software solutions driving operational excellence.", sizeClass: "h-auto w-40 md:w-48" },
  ];

  return (
    <Section id="partners">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.6fr] lg:gap-16">
        <Eyebrow index="05">Partners & Sponsors</Eyebrow>
        <div>
          <SectionHeading>Industry Partners & Sponsors</SectionHeading>
          <BlurIn delay={0.12}>
            <p className="body-copy mt-4 max-w-lg text-[0.9375rem]">
              We are proud to collaborate with leading cybersecurity and technology organizations to bring OPCODE IMPACT to life.
            </p>
          </BlurIn>
        </div>
      </div>

      <div className="mt-12 lg:mt-16">
        <h3 className="mb-6 font-mono text-sm tracking-widest text-cyan-accent uppercase">Main Sponsor</h3>
        <motion.a
          href="https://redteamacademy.com"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="group flex flex-col border border-border bg-background p-8 md:flex-row md:items-center gap-8 transition-colors duration-150 hover:border-cyan-accent/50 cursor-pointer"
        >
          <div className="flex-shrink-0 transition-transform duration-150 group-hover:scale-105">
            <img src="/partners/red-team.png" alt="Red Team Hacker Academy" className="h-24 w-auto object-contain" />
          </div>
          <div>
            <h4 className="text-xl font-light mb-2 group-hover:text-cyan-accent transition-colors duration-150">Red Team Hacker Academy</h4>
            <p className="text-sm text-steel leading-relaxed">
              Red Team Hacker Academy is a specialized cybersecurity training institution focusing on offensive security, penetration testing, and ethical hacking. Providing hands-on practical training with real-world scenarios, they equip aspiring security professionals with skills in areas such as web exploitation, network security, and Active Directory security.
            </p>
          </div>
        </motion.a>
      </div>

      <div className="mt-8">
        <h3 className="mb-6 font-mono text-sm tracking-widest text-steel uppercase">Industry Partners</h3>
        <div className="grid grid-cols-2 gap-px border border-border bg-border sm:grid-cols-3 lg:grid-cols-4">
          {partners.map((partner, i) => {
            const Component = partner.href ? motion.a : motion.div;
            return (
              <Component
                href={partner.href}
                target={partner.href ? "_blank" : undefined}
                rel={partner.href ? "noopener noreferrer" : undefined}
                key={partner.name}
                initial={{ opacity: 0, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.06 }}
                className={`group relative flex h-48 flex-col items-center justify-center bg-background p-6 text-center overflow-hidden transition-colors duration-150 hover:bg-navy/40 ${partner.href ? "cursor-pointer" : ""}`}
              >
                <div className="flex h-full w-full items-center justify-center transition-transform duration-150 group-hover:-translate-y-6 group-hover:scale-90">
                  <img 
                    src={partner.logo} 
                    alt={partner.name} 
                    className={`${partner.sizeClass} max-w-full object-contain`} 
                  />
                </div>
                
                <div className="absolute inset-x-0 bottom-0 flex flex-col items-center justify-end p-4 opacity-0 translate-y-8 transition-all duration-150 group-hover:opacity-100 group-hover:translate-y-0 h-1/2 bg-gradient-to-t from-background via-background/90 to-transparent pointer-events-none">
                   <h4 className="font-mono text-xs tracking-wider text-cyan-accent mb-2 uppercase text-center drop-shadow-md">{partner.name}</h4>
                   <p className="text-[0.7rem] text-steel leading-relaxed text-center">{partner.desc}</p>
                </div>
              </Component>
            );
          })}
        </div>
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
            <div className="group grid grid-cols-[auto_1fr_auto] items-center gap-x-4 border-t border-border py-5 transition-colors duration-150 hover:border-cyan-accent md:grid-cols-[8rem_1fr_auto] md:gap-x-6 md:py-6">
              <span className="font-mono text-[0.625rem] text-cyan-accent tracking-widest">{s.code}</span>
              <h3 className="text-[1rem] font-light tracking-[-0.02em] md:text-[1.25rem] transition-colors duration-150 group-hover:text-white">
                {s.label}
              </h3>
              <span className="label-micro text-steel/60 italic transition-colors duration-150 group-hover:text-steel">
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
