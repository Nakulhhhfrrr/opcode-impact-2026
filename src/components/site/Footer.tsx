import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="hairline-top py-16">
      <div className="shell">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-baseline gap-2.5">
              <span className="text-sm font-medium tracking-[0.22em] uppercase">Opcode</span>
              <span className="text-sm font-light tracking-[0.22em] text-steel uppercase">
                Impact
              </span>
              <span className="font-mono text-[0.625rem] text-cyan-accent">26</span>
            </div>
            <p className="body-copy mt-5 max-w-sm text-sm">
              National Level 24-Hour Cybersecurity for Sustainable Development Hackathon. Department
              of Computer Science &amp; Engineering (Cyber Security), Jyothi Engineering College,
              Cheruthuruthy, Thrissur, Kerala.
            </p>
          </div>

          <div>
            <p className="label-micro">Navigate</p>
            <ul className="mt-5 space-y-2.5">
              {[
                { label: "About", to: "/about" },
                { label: "Tracks", to: "/tracks" },
                { label: "Schedule", to: "/schedule" },
                { label: "Prizes", to: "/prizes" },
              ].map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="link-underline text-sm font-light text-steel transition-colors hover:text-foreground"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="label-micro">Connect</p>
            <ul className="mt-5 space-y-2.5">
              {[
                { label: "Partners", to: "/partners" },
                { label: "FAQ", to: "/faq" },
                { label: "Contact", to: "/contact" },
                { label: "Register", to: "/register" },
              ].map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="link-underline text-sm font-light text-steel transition-colors hover:text-foreground"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-border pt-8 md:flex-row md:items-center md:justify-between">
          <p className="label-micro">© 2026 Jyothi Engineering College</p>
          <p className="label-micro">Thrissur · Kerala · India</p>
        </div>
      </div>
    </footer>
  );
}
