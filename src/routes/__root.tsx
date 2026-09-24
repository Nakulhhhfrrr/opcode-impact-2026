import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { motion, AnimatePresence } from "motion/react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Nav } from "../components/site/Nav";
import { Footer } from "../components/site/Footer";

const EASE = [0.22, 1, 0.36, 1] as const;

function GlitchNumber() {
  const [glitch, setGlitch] = useState(false);

  useEffect(() => {
    const trigger = () => {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 180);
    };
    // Initial glitch shortly after mount, then recurring
    const t = setTimeout(() => {
      trigger();
      const id = setInterval(trigger, 3500 + Math.random() * 1500);
      return () => clearInterval(id);
    }, 1200);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="relative select-none leading-none">
      {/* Glitch layers */}
      <AnimatePresence>
        {glitch && (
          <>
            <motion.span
              key="g-r"
              className="pointer-events-none absolute inset-0 font-mono font-light text-rose-500/70"
              style={{ clipPath: "inset(15% 0 55% 0)", fontSize: "inherit" }}
              animate={{ x: [0, -10, 5, 0] }}
              transition={{ duration: 0.14, ease: "linear" }}
            >404</motion.span>
            <motion.span
              key="g-c"
              className="pointer-events-none absolute inset-0 font-mono font-light text-cyan-accent/60"
              style={{ clipPath: "inset(50% 0 15% 0)", fontSize: "inherit" }}
              animate={{ x: [0, 8, -4, 0] }}
              transition={{ duration: 0.14, ease: "linear", delay: 0.05 }}
            >404</motion.span>
          </>
        )}
      </AnimatePresence>
      <span className="font-mono font-light">404</span>
    </div>
  );
}

function BlinkCursor() {
  const [on, setOn] = useState(true);
  useEffect(() => {
    const id = setInterval(() => setOn((v) => !v), 530);
    return () => clearInterval(id);
  }, []);
  return (
    <span
      className={`inline-block w-[2px] bg-cyan-accent align-middle ml-0.5 transition-opacity duration-75 ${on ? "opacity-100" : "opacity-0"}`}
      style={{ height: "1.05em" }}
    />
  );
}

function NotFoundComponent() {
  const path = typeof window !== "undefined" ? window.location.pathname : "/unknown";
  // Truncate long paths so they don't overflow on mobile
  const displayPath = path.length > 24 ? path.slice(0, 22) + "…" : path;

  return (
    <div className="relative flex min-h-[100svh] flex-col overflow-hidden">

      {/* Scanlines */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{ backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, oklch(1 0 0 / 0.012) 2px, oklch(1 0 0 / 0.012) 4px)" }}
      />

      {/* Background watermark 404 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4, ease: EASE, delay: 0.05 }}
        className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center overflow-hidden"
        aria-hidden="true"
      >
        <span
          className="font-mono font-light leading-none text-foreground/[0.04] select-none whitespace-nowrap"
          style={{ fontSize: "clamp(6rem, 30vw, 22rem)", letterSpacing: "-0.04em" }}
        >
          404
        </span>
      </motion.div>

      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 h-[30rem] w-[30rem] sm:h-[50rem] sm:w-[50rem] rounded-full bg-cyan-accent/[0.04] blur-3xl" />
      </div>

      {/* Main centered content */}
      <div className="relative z-10 shell flex flex-1 flex-col justify-center py-24 md:py-24">
        <div className="w-full max-w-xl">

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
            className="flex items-center gap-3 mb-5"
          >
            <span className="relative flex h-1.5 w-1.5 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-rose-500 opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-rose-500" />
            </span>
            <span className="label-micro text-rose-400">System Error</span>
            <span className="h-px w-6 bg-white/15 hidden xs:block" />
            <span className="label-micro text-steel hidden xs:block">404 — Not Found</span>
          </motion.div>

          {/* Glitch number */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.2 }}
            className="text-[2.75rem] sm:text-[4rem] text-foreground/15 mb-3"
          >
            <GlitchNumber />
          </motion.div>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.4 }}
            className="h-px bg-border mb-4"
          />

          {/* Terminal block */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.55 }}
            className="border border-border bg-navy/50 px-4 py-3 mb-5 overflow-hidden"
          >
            <p className="font-mono text-[0.6875rem] sm:text-[0.75rem] leading-relaxed text-steel break-all">
              <span className="text-cyan-accent">opcode@impact</span>
              <span className="text-steel/50">:</span>
              <span className="text-violet-400">~</span>
              <span className="text-steel/50">$ </span>
              <span className="text-foreground/80">resolve </span>
              <span className="text-amber-400/80">"{displayPath}"</span>
              <BlinkCursor />
            </p>
            <p className="font-mono text-[0.625rem] sm:text-[0.6875rem] text-rose-400/60 mt-1.5 break-words">
              ERR_ROUTE_NOT_FOUND: No handler for "{displayPath}"
            </p>
            <p className="font-mono text-[0.625rem] sm:text-[0.6875rem] text-steel/40 mt-0.5">
              The packet was lost in transit.
            </p>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.7 }}
            className="text-[1.375rem] sm:text-[1.875rem] font-light tracking-[-0.03em] leading-tight mb-2"
          >
            Page not found.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.82 }}
            className="text-[0.875rem] font-light text-steel leading-relaxed mb-6"
          >
            This route doesn't exist or has been moved. Head back to base.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.95 }}
            className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-4 sm:gap-x-6"
          >
            <Link
              to="/"
              className="group relative overflow-hidden bg-foreground px-8 py-3.5 text-[0.8125rem] font-medium tracking-wide text-background text-center sm:text-left"
            >
              <span className="absolute inset-0 translate-y-full bg-cyan-accent transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0" />
              <span className="relative">Return Home</span>
            </Link>
            <Link
              to="/register"
              className="text-center sm:text-left border-b border-white/20 pb-1 text-[0.8125rem] font-light tracking-wide text-white/60 transition-colors duration-150 hover:border-cyan-accent hover:text-foreground self-center"
            >
              Register for the hackathon
            </Link>
          </motion.div>

          {/* Bottom meta */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: EASE, delay: 1.2 }}
            className="mt-8 sm:mt-10 flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-y-1 sm:gap-x-4 border-t border-border/50 pt-4"
          >
            <span className="label-micro text-steel/30">OPCODE IMPACT 2026</span>
            <span className="label-micro text-steel/30">9–10 Oct · Thrissur, Kerala</span>
            <span className="label-micro text-steel/30 hidden sm:inline">Jyothi Engineering College (Autonomous)</span>
          </motion.div>
        </div>
      </div>
    </div>
  );
}


function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        title:
          "OPCODE IMPACT 2026 | National Level 24-Hour Cybersecurity for Sustainable Development Hackathon",
      },
      {
        name: "description",
        content:
          "Official website of OPCODE IMPACT 2026, a National Level 24-Hour Cybersecurity for Sustainable Development Hackathon hosted by the Department of Computer Science & Engineering (Cyber Security), Jyothi Engineering College (Autonomous), Thrissur.",
      },
      {
        name: "author",
        content:
          "Department of Computer Science & Engineering (Cyber Security), Jyothi Engineering College (Autonomous)",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://opcode-impact-2026.vercel.app" },
      {
        property: "og:title",
        content:
          "OPCODE IMPACT 2026 | National Level 24-Hour Cybersecurity for Sustainable Development Hackathon",
      },
      {
        property: "og:description",
        content:
          "Official website of OPCODE IMPACT 2026, a National Level 24-Hour Cybersecurity for Sustainable Development Hackathon hosted by the Department of Computer Science & Engineering (Cyber Security), Jyothi Engineering College (Autonomous), Thrissur.",
      },
      {
        property: "og:image",
        content: "https://opcode-impact-2026.vercel.app/og-image.png",
      },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content:
          "OPCODE IMPACT 2026 | National Level 24-Hour Cybersecurity for Sustainable Development Hackathon",
      },
      {
        name: "twitter:description",
        content:
          "Official website of OPCODE IMPACT 2026, a National Level 24-Hour Cybersecurity for Sustainable Development Hackathon hosted by the Department of Computer Science & Engineering (Cyber Security), Jyothi Engineering College (Autonomous), Thrissur.",
      },
      {
        property: "twitter:image",
        content: "https://opcode-impact-2026.vercel.app/og-image.png",
      },
      { name: "theme-color", content: "#08090B" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Geist:wght@200;300;400;500;600&family=Geist+Mono:wght@300;400&display=swap",
      },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "icon", href: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { rel: "icon", href: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Nav />
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
      <Footer />
    </QueryClientProvider>
  );
}
