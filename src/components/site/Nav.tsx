import { Link, useRouterState } from "@tanstack/react-router";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { useEffect, useState } from "react";
import { EASE } from "./motion-primitives";

const LINKS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Tracks", to: "/tracks" },
  { label: "Gallery", to: "/gallery" },
  { label: "Schedule", to: "/schedule" },
  { label: "Awards", to: "/prizes" },
  { label: "Partners", to: "/partners" },
  { label: "FAQ", to: "/faq" },
  { label: "Contact", to: "/contact" },
] as const;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 40));
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        className="fixed inset-x-0 top-0 z-50"
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: EASE, delay: 0.2 }}
      >
        <div
          className={`transition-[background-color,backdrop-filter,border-color] duration-700 ${
            scrolled || open
              ? "border-b border-border bg-background/85 backdrop-blur-xl"
              : "border-b border-transparent bg-transparent"
          }`}
        >
          <div className="shell flex h-16 items-center justify-between md:h-20">
            <Link to="/" className="group flex items-baseline gap-2.5">
              <span className="text-sm font-medium tracking-[0.22em] uppercase">Opcode</span>
              <span className="text-sm font-light tracking-[0.22em] text-steel uppercase transition-colors duration-500 group-hover:text-cyan-accent">
                Impact
              </span>
              <span className="font-mono text-[0.625rem] text-cyan-accent">26</span>
            </Link>

            <nav className="hidden items-center gap-8 lg:flex">
              {LINKS.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className="link-underline text-[0.8125rem] font-light tracking-wide text-steel transition-colors duration-300 hover:text-foreground"
                  activeProps={{ className: "text-foreground" }}
                  activeOptions={{ exact: l.to === "/" }}
                >
                  {l.label}
                </Link>
              ))}
              <Link
                to="/register"
                className="group relative overflow-hidden border border-foreground/70 px-6 py-2.5 text-[0.8125rem] font-medium tracking-wide"
              >
                <span className="absolute inset-0 -translate-y-full bg-foreground transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0" />
                <span className="relative transition-colors duration-500 group-hover:text-background">
                  Register
                </span>
              </Link>
            </nav>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="flex items-center gap-3 lg:hidden"
            >
              <span className="label-micro text-foreground">{open ? "Close" : "Menu"}</span>
              <span className="flex h-3 w-5 flex-col justify-between">
                <motion.span
                  className="block h-px w-full bg-foreground"
                  animate={{ rotate: open ? 45 : 0, y: open ? 5.5 : 0 }}
                  transition={{ duration: 0.4, ease: EASE }}
                />
                <motion.span
                  className="block h-px w-full bg-foreground"
                  animate={{ rotate: open ? -45 : 0, y: open ? -5.5 : 0 }}
                  transition={{ duration: 0.4, ease: EASE }}
                />
              </span>
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed inset-0 z-40 bg-background lg:hidden"
            initial={{ clipPath: "inset(0% 0% 100% 0%)" }}
            animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
            exit={{ clipPath: "inset(0% 0% 100% 0%)" }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <div className="shell flex h-full flex-col justify-between pt-28 pb-12">
              <nav className="flex flex-col">
                {LINKS.map((l, i) => (
                  <motion.div
                    key={l.to}
                    initial={{ opacity: 0, y: 26 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: EASE, delay: 0.12 + i * 0.05 }}
                    className="border-b border-border"
                  >
                    <Link
                      to={l.to}
                      className="flex items-baseline justify-between py-4 text-[1.75rem] font-light tracking-[-0.02em]"
                    >
                      {l.label}
                      <span className="font-mono text-[0.625rem] text-steel">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: EASE, delay: 0.5 }}
              >
                <Link
                  to="/register"
                  className="flex items-center justify-center border border-foreground bg-foreground py-4 text-sm font-medium tracking-wide text-background"
                >
                  Register Now
                </Link>
                <p className="label-micro mt-6">9–10 October 2026 · Thrissur, Kerala</p>
              </motion.div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
