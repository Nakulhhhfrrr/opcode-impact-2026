import { createFileRoute, Link } from "@tanstack/react-router";
import { BlurIn, DriftIn, MaskReveal } from "@/components/site/motion-primitives";

const TITLE = "Registration — OPCODE IMPACT 2026";
const DESCRIPTION =
  "Register for OPCODE IMPACT 2026 via Google Form. Registration fee: ₹300 per participant. Food and accommodation included for all registered participants.";

const FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSfol77wlEq55j-BK3Kxbg3_s5a7gE7DiAV5QKiNQxsO86LRVA/viewform";

export const Route = createFileRoute("/register")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <main className="shell flex min-h-[100svh] flex-col justify-center py-40">
      <div className="flex items-baseline gap-4">
        <span className="label-micro text-cyan-accent">10</span>
        <span className="label-micro">Registration</span>
      </div>

      <h1 className="mt-8 display-xl max-w-4xl text-[2.5rem] sm:text-[4rem] lg:text-[5.5rem]">
        <MaskReveal>Enter OPCODE</MaskReveal>
        <MaskReveal delay={0.08}>
          <span className="text-cyan-accent">IMPACT 2026.</span>
        </MaskReveal>
      </h1>

      <BlurIn delay={0.15}>
        <p className="body-copy mt-8 max-w-lg text-[0.9375rem]">
          Open to student teams of 2–4 members from engineering and arts &amp;
          science colleges across India. Hosted by the Department of Computer
          Science &amp; Engineering (Cyber Security), Jyothi Engineering
          College, Thrissur, Kerala.
        </p>
      </BlurIn>

      {/* Info panels */}
      <DriftIn from="up" delay={0.22}>
        <div className="mt-10 grid gap-px border border-border bg-border sm:grid-cols-2 max-w-xl">
          <div className="bg-background p-6">
            <p className="label-micro text-steel">Registration Fee</p>
            <p className="mt-3 font-mono text-[2rem] font-light text-cyan-accent leading-none">
              ₹300
            </p>
            <p className="mt-1.5 text-xs font-light text-steel">per participant</p>
          </div>
          <div className="bg-background p-6">
            <p className="label-micro text-steel">Registration Method</p>
            <p className="mt-3 text-[1rem] font-light tracking-[-0.015em] text-foreground">
              Google Forms
            </p>
            <p className="mt-1.5 text-xs font-light text-steel/70 italic">
              Use the button or scan the QR code below
            </p>
          </div>
        </div>
      </DriftIn>

      {/* Food & Accommodation */}
      <DriftIn from="up" delay={0.3}>
        <div className="mt-4 flex items-start gap-4 border border-cyan-accent/30 bg-navy/60 p-6 max-w-xl">
          <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-accent" />
          <div>
            <p className="text-[0.9375rem] font-light text-foreground tracking-[-0.015em]">
              Food &amp; Accommodation Included
            </p>
            <p className="body-copy mt-1.5 text-xs text-white/70 leading-relaxed">
              All registered participants receive complimentary food and
              accommodation throughout the 24-hour hackathon.
            </p>
          </div>
        </div>
      </DriftIn>

      {/* CTA + QR */}
      <DriftIn from="up" delay={0.38}>
        <div className="mt-10 grid gap-6 sm:grid-cols-[1fr_auto] items-center max-w-xl">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
            <a
              href={FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden bg-foreground px-9 py-3.5 text-[0.8125rem] font-medium tracking-wide text-background"
              id="register-form-btn"
            >
              <span className="absolute inset-0 translate-y-full bg-cyan-accent transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0" />
              <span className="relative">Open Registration Form</span>
            </a>
            <Link
              to="/"
              className="group relative overflow-hidden border border-border px-9 py-3.5 text-[0.8125rem] font-light tracking-wide"
            >
              <span className="absolute inset-0 -translate-x-full bg-graphite transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0" />
              <span className="relative">Back to Home</span>
            </Link>
          </div>
          {/* QR code */}
          <div className="flex flex-col items-center gap-2 shrink-0">
            <img
              src="/register-qr.png"
              alt="Scan to open registration form"
              width={110}
              height={110}
              className="border border-border bg-white p-1.5 rounded-sm"
            />
            <span className="label-micro text-steel">Scan to register</span>
          </div>
        </div>
      </DriftIn>

      {/* Payment notice */}
      <DriftIn from="up" delay={0.46}>
        <p className="mt-6 text-xs font-light text-steel/70 leading-relaxed max-w-lg">
          Registration is currently being collected through Google Forms.
          Payment instructions will be communicated separately after
          registration.
        </p>
      </DriftIn>
    </main>
  );
}
