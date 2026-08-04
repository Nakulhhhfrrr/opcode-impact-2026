import { createFileRoute } from "@tanstack/react-router";
import { BlurIn, MaskReveal } from "@/components/site/motion-primitives";
import { Link } from "@tanstack/react-router";

const TITLE = "Gallery — OPCODE IMPACT 2026";
const DESCRIPTION =
  "Event photographs and media from OPCODE IMPACT 2026 will be published here after the hackathon.";

export const Route = createFileRoute("/gallery")({
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
        <span className="label-micro text-cyan-accent">09</span>
        <span className="label-micro">Gallery</span>
      </div>
      <h1 className="mt-8 display-xl max-w-4xl text-[2.5rem] sm:text-[4rem] lg:text-[5.5rem]">
        <MaskReveal>Gallery Coming Soon.</MaskReveal>
      </h1>
      <BlurIn delay={0.15}>
        <p className="body-copy mt-8 max-w-lg text-[0.9375rem]">
          Event photographs, highlights, and media from OPCODE IMPACT 2026 will
          be published here. Check back after the event on 9–10 October 2026.
        </p>
      </BlurIn>
      <BlurIn delay={0.28}>
        <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
          <Link
            to="/"
            className="link-underline text-[0.8125rem] font-light tracking-wide text-steel transition-colors hover:text-foreground"
          >
            Back to home
          </Link>
          <span className="label-micro">Photographs published after the event</span>
        </div>
      </BlurIn>
    </main>
  );
}
