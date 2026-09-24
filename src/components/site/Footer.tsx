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
              of Computer Science &amp; Engineering (Cyber Security), Jyothi Engineering College
              (Autonomous), Cheruthuruthy, Thrissur, Kerala.
            </p>
            {/* Logos strip */}
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <img
                src="/WhatsApp Image 2026-08-14 at 1.23.53 PM.jpeg"
                alt="Jyothi Engineering College (Autonomous)"
                className="h-8 w-auto object-contain opacity-60 hover:opacity-90 transition-opacity duration-300"
              />
              <img
                src="/WhatsApp Image 2026-08-14 at 1.24.30 PM.jpeg"
                alt="CSI"
                className="h-7 w-auto object-contain opacity-60 hover:opacity-90 transition-opacity duration-300"
              />
              <img
                src="/WhatsApp Image 2026-08-14 at 1.24.31 PM.jpeg"
                alt="Government of Kerala"
                className="h-7 w-auto object-contain opacity-60 hover:opacity-90 transition-opacity duration-300"
              />
              <img
                src="/cyea-logo.jpg"
                alt="CYEA"
                className="h-8 w-auto object-contain opacity-60 hover:opacity-90 transition-opacity duration-300"
              />
            </div>


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
                { label: "Terms & Conditions", to: "/terms-and-conditions" },
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

        {/* Full-width Partner Logos */}
        <div className="mt-16 border-t border-border pt-8">
          <p className="label-micro mb-6 text-steel text-center md:text-left">Sponsors & Partners</p>
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-8 md:gap-12">
             <a href="https://redteamacademy.com" target="_blank" rel="noopener noreferrer" className="block">
               <img src="/partners/red-team.png" alt="Red Team" className="h-7 w-auto object-contain opacity-50 hover:opacity-100 transition-opacity duration-150 grayscale hover:grayscale-0" />
             </a>
             <a href="https://nestgroup.net/" target="_blank" rel="noopener noreferrer" className="block">
               <img src="/partners/nest.png" alt="NeST" className="h-6 w-auto object-contain opacity-50 hover:opacity-100 transition-opacity duration-150 grayscale hover:grayscale-0" />
             </a>
             <a href="https://www.esafbank.com/" target="_blank" rel="noopener noreferrer" className="block">
               <img src="/partners/esaf.png" alt="ESAF" className="h-8 w-auto object-contain opacity-50 hover:opacity-100 transition-opacity duration-150 grayscale hover:grayscale-0" />
             </a>
             <a href="https://ksaac.duk.ac.in/" target="_blank" rel="noopener noreferrer" className="block">
               <img src="/partners/ksaac.png" alt="K-SAAC" className="h-8 w-auto object-contain opacity-50 hover:opacity-100 transition-opacity duration-150 grayscale hover:grayscale-0" />
             </a>
             <a href="https://dendo.in/" target="_blank" rel="noopener noreferrer" className="block">
               <img src="/partners/dendo.png" alt="Dendo" className="h-7 w-auto object-contain opacity-50 hover:opacity-100 transition-opacity duration-150 grayscale hover:grayscale-0" />
             </a>
             <a href="https://www.hackuptechnology.com/" target="_blank" rel="noopener noreferrer" className="block">
               <img src="/partners/hackup-technology.png" alt="Hackup" className="h-10 w-auto object-contain opacity-50 hover:opacity-100 transition-opacity duration-150 grayscale hover:grayscale-0" />
             </a>
             <img src="/partners/codespace-solutions.png" alt="CodeSpace" className="h-8 w-auto object-contain opacity-50 hover:opacity-100 transition-opacity duration-150 grayscale hover:grayscale-0 block" />
             <img src="/partners/megacy-soft-solutions.png" alt="Megacy" className="h-5 w-auto object-contain opacity-50 hover:opacity-100 transition-opacity duration-150 grayscale hover:grayscale-0 block" />
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-border pt-6 md:flex-row md:items-center md:justify-between">
          <p className="label-micro text-steel/50">© 2026 Jyothi Engineering College (Autonomous) · Thrissur, Kerala, India</p>
          <p className="label-micro text-steel/30">Built with ♥ by the CS&E (Cyber Security) Department</p>
        </div>
      </div>
    </footer>
  );
}
