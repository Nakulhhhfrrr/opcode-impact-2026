import { Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Countdown } from "./Countdown";
import { EASE } from "./motion-primitives";

function Word({ children, delay }: { children: string; delay: number }) {
  return (
    <span className="inline-block overflow-hidden pb-[0.08em] align-bottom">
      <motion.span
        className="inline-block will-change-transform"
        initial={{ y: "110%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1.2, ease: EASE, delay }}
      >
        {children}
      </motion.span>
    </span>
  );
}

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section ref={ref} className="relative h-[100svh] w-full overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0 will-change-transform">
        <video
          className="h-[118%] w-full object-cover object-center"
          src="/hero.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
        />
      </motion.div>

      <div className="absolute inset-0 bg-background/50" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/25 to-background/60" />

      <motion.div
        style={{ y: contentY, opacity }}
        className="relative flex h-full flex-col justify-end pb-14 md:pb-20"
      >
        <div className="shell">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.35 }}
            className="flex flex-wrap items-center gap-x-5 gap-y-2"
          >
            <span className="label-micro text-cyan-accent">National Hackathon</span>
            <span className="h-px w-10 bg-white/25" />
            <span className="label-micro text-white/70">
              9–10 October 2026 · Jyothi Engineering College · Thrissur, Kerala
            </span>
          </motion.div>

          <h1 className="mt-7 display-xl text-[3rem] sm:text-[4.5rem] lg:text-[6.5rem] xl:text-[7.5rem]">
            <Word delay={0.5}>OPCODE</Word>{" "}
            <Word delay={0.6}>IMPACT</Word>{" "}
            <span className="text-cyan-accent">
              <Word delay={0.7}>2026</Word>
            </span>
          </h1>

          <div className="mt-6 grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-end">
            <div className="min-w-0">
              <p className="text-[1.35rem] font-light tracking-[-0.02em] md:text-[2rem]">
                <Word delay={0.9}>Secure</Word> <Word delay={0.97}>Today.</Word>{" "}
                <Word delay={1.04}>Sustain</Word> <Word delay={1.11}>Tomorrow.</Word>
              </p>
              <motion.p
                initial={{ opacity: 0, filter: "blur(10px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 1.1, ease: EASE, delay: 1.15 }}
                className="mt-4 max-w-lg text-sm font-light leading-relaxed text-white/75"
              >
                National 24-Hour Cybersecurity for Sustainable Development Hackathon.
                Hosted by the Department of Computer Science &amp; Engineering (Cyber
                Security), Jyothi Engineering College, Thrissur, Kerala.
              </motion.p>
            </div>

            <Countdown />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE, delay: 1.4 }}
            className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4"
          >
            <Link
              to="/register"
              className="group relative overflow-hidden bg-foreground px-8 py-3.5 text-[0.8125rem] font-medium tracking-wide text-background"
            >
              <span className="absolute inset-0 translate-y-full bg-cyan-accent transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0" />
              <span className="relative">Register Now</span>
            </Link>
            <a
              href="#about"
              className="group relative overflow-hidden border border-white/45 px-8 py-3.5 text-[0.8125rem] font-light tracking-wide"
            >
              <span className="absolute inset-0 -translate-x-full bg-white/10 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0" />
              <span className="relative">Download Brochure</span>
            </a>
            <a
              href="#problem-statements"
              className="border-b border-white/25 pb-1 text-[0.8125rem] font-light tracking-wide text-white/75 transition-colors duration-300 hover:border-cyan-accent hover:text-foreground"
            >
              Problem Statements
            </a>
            <a
              href="#rules"
              className="link-underline text-[0.8125rem] font-light tracking-wide text-white/60 transition-colors hover:text-foreground"
            >
              Rules &amp; Eligibility
            </a>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.8 }}
        style={{ opacity }}
        className="pointer-events-none absolute right-6 bottom-14 hidden flex-col items-center gap-3 md:flex"
      >
        <span className="label-micro [writing-mode:vertical-rl] text-white/55">
          Scroll
        </span>
        <span className="h-14 w-px bg-gradient-to-b from-white/50 to-transparent" />
      </motion.div>
    </section>
  );
}
