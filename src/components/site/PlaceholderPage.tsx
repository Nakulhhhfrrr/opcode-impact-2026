import { Link } from "@tanstack/react-router";
import { BlurIn, MaskReveal } from "./motion-primitives";

export function PlaceholderPage({
  index,
  eyebrow,
  title,
  body,
}: {
  index: string;
  eyebrow: string;
  title: string;
  body: string;
}) {
  return (
    <main className="shell flex min-h-[100svh] flex-col justify-center py-40">
      <div className="flex items-baseline gap-4">
        <span className="label-micro text-cyan-accent">{index}</span>
        <span className="label-micro">{eyebrow}</span>
      </div>
      <h1 className="mt-8 display-xl max-w-4xl text-[2.5rem] sm:text-[4rem] lg:text-[5.5rem]">
        <MaskReveal>{title}</MaskReveal>
      </h1>
      <BlurIn delay={0.15}>
        <p className="body-copy mt-8 max-w-lg text-[0.9375rem]">{body}</p>
      </BlurIn>
      <BlurIn delay={0.28}>
        <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
          <Link
            to="/"
            className="link-underline text-[0.8125rem] font-light tracking-wide text-steel transition-colors hover:text-foreground"
          >
            Back to home
          </Link>
          <span className="label-micro">Detail published ahead of the event</span>
        </div>
      </BlurIn>
    </main>
  );
}
