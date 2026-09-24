import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { BlurIn, MaskReveal } from "@/components/site/motion-primitives";

const TITLE = "Partners — OPCODE IMPACT 2026";
const DESCRIPTION =
  "Confirmed partner organisations, their contributed problem statements and the sponsorship prospectus.";

export const Route = createFileRoute("/partners")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:image", content: "https://opcode-impact-2026.vercel.app/og-image.png" },
      { property: "og:url", content: "https://opcode-impact-2026.vercel.app/partners" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:image", content: "https://opcode-impact-2026.vercel.app/og-image.png" },
    ],
  }),
  component: Page,
});

const EASE = [0.22, 1, 0.36, 1] as const;

const MAIN_SPONSOR = {
  name: "Red Team Hacker Academy",
  logo: "/partners/red-team.png",
  desc: "Red Team Hacker Academy is a specialized cybersecurity training institution focusing on offensive security, penetration testing, and ethical hacking. Providing hands-on practical training with real-world scenarios, they equip aspiring security professionals with skills in areas such as web exploitation, network security, and Active Directory security.",
  href: "https://redteamacademy.com",
};

const PARTNERS = [
  { name: "NeST", logo: "/partners/nest.png", desc: "Global technology conglomerate offering advanced engineering solutions.", sizeClass: "h-auto w-40 md:w-48", href: "https://nestgroup.net/" },
  { name: "ESAF", logo: "/partners/esaf.png", desc: "A leading financial institution championing digital banking security.", sizeClass: "h-auto w-40 md:w-48", href: "https://www.esafbank.com/" },
  { name: "K-SAAC", logo: "/partners/ksaac.png", desc: "Kerala State Audit & Accounts Corporation, ensuring financial integrity.", sizeClass: "h-auto w-40 md:w-48", href: "https://ksaac.duk.ac.in/" },
  { name: "Dendo", logo: "/partners/dendo.png", desc: "Providing next-gen IT infrastructure and strategic consulting services.", sizeClass: "h-auto w-40 md:w-48", href: "https://dendo.in/" },
  { name: "Hackup Technology", logo: "/partners/hackup-technology.png", desc: "Specialists in custom web applications, cloud solutions, and IT security.", sizeClass: "h-28 w-auto", href: "https://www.hackuptechnology.com/" },
  { name: "CodeSpace Solutions", logo: "/partners/codespace-solutions.png", desc: "Innovative software development and digital transformation agency.", sizeClass: "h-24 w-auto" },
  { name: "Megacy Soft Solutions", logo: "/partners/megacy-soft-solutions.png", desc: "Enterprise software solutions driving operational excellence.", sizeClass: "h-auto w-48 md:w-56" },
];

function Page() {
  return (
    <main className="shell min-h-[100svh] py-28 md:py-36">
      <div className="flex items-baseline gap-4">
        <span className="label-micro text-cyan-accent">04</span>
        <span className="label-micro">Partners</span>
      </div>
      <h1 className="mt-8 display-xl max-w-4xl text-[2.5rem] sm:text-[4rem] lg:text-[5.5rem]">
        <MaskReveal>Industry, academic and community.</MaskReveal>
      </h1>
      <BlurIn delay={0.15}>
        <p className="body-copy mt-8 max-w-lg text-[0.9375rem]">Confirmed partner organisations, their contributed problem statements and the sponsorship prospectus.</p>
      </BlurIn>

      {/* Main Sponsor */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: EASE, delay: 0.25 }}
        className="mt-20 md:mt-24 border-t border-border pt-12"
      >
        <span className="label-micro text-cyan-accent uppercase tracking-wider">Main Sponsor</span>
        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_1.5fr] lg:gap-16 items-center border border-border bg-navy/20 p-8 md:p-12 transition-colors hover:border-cyan-accent/30 hover:bg-navy/30 group">
          <div className="flex items-center justify-center bg-background p-8 border border-border h-full">
            <img src={MAIN_SPONSOR.logo} alt={MAIN_SPONSOR.name} className="h-32 w-auto object-contain transition-transform duration-500 group-hover:scale-105" />
          </div>
          <div className="space-y-4">
            <h2 className="text-[1.75rem] font-light tracking-[-0.02em]">{MAIN_SPONSOR.name}</h2>
            <p className="text-[0.9375rem] font-light text-steel leading-relaxed">{MAIN_SPONSOR.desc}</p>
            <div className="pt-4">
              <a href={MAIN_SPONSOR.href} target="_blank" rel="noopener noreferrer" className="link-underline text-[0.875rem] text-cyan-accent">
                Visit Website
              </a>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Industry Partners */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-5% 0px" }}
        transition={{ duration: 0.8, ease: EASE }}
        className="mt-16 md:mt-24 border-t border-border pt-12"
      >
        <span className="label-micro text-steel uppercase tracking-wider">Industry Partners</span>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PARTNERS.map((partner, i) => {
            const Component = partner.href ? "a" : "div";
            return (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: EASE, delay: i * 0.1 }}
                className={`group relative flex flex-col justify-between border border-border bg-background p-8 transition-colors duration-500 hover:border-cyan-accent/30 hover:bg-navy/20 ${partner.href ? "cursor-pointer" : ""}`}
              >
                {partner.href && (
                  <a href={partner.href} target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-10" aria-label={`Visit ${partner.name}`} />
                )}
                <div className="flex h-32 items-center justify-start mb-6">
                  <img src={partner.logo} alt={partner.name} className={`${partner.sizeClass} object-contain transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-2 origin-left`} />
                </div>
                <div>
                  <h3 className="text-[1.25rem] font-light tracking-tight text-foreground group-hover:text-cyan-accent transition-colors duration-300">{partner.name}</h3>
                  <p className="mt-3 text-[0.875rem] font-light text-steel leading-relaxed">{partner.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.section>
      
      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: EASE }}
        className="mt-16 md:mt-24 border border-cyan-accent/20 bg-navy/40 p-7 md:p-10"
      >
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div>
            <p className="text-[1.5rem] font-light tracking-[-0.025em] text-foreground md:text-[2rem]">
              Partner with <span className="text-cyan-accent">OPCODE IMPACT.</span>
            </p>
            <p className="mt-3 text-sm font-light text-steel/70 max-w-xl">
              Want to support sustainable development and connect with top cybersecurity talent? We are open to new partnerships.
            </p>
          </div>
          <div className="shrink-0">
            <Link
              to="/contact"
              className="group relative inline-flex overflow-hidden bg-foreground px-8 py-3 text-[0.8125rem] font-medium tracking-wide text-background"
            >
              <span className="absolute inset-0 translate-y-full bg-cyan-accent transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0" />
              <span className="relative">Contact Us</span>
            </Link>
          </div>
        </div>
      </motion.div>

    </main>
  );
}

