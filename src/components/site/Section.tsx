import type { ReactNode } from "react";
import { MaskReveal } from "./motion-primitives";

export function Section({
  id,
  children,
  className,
  hairline = true,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  hairline?: boolean;
}) {
  return (
    <section
      id={id}
      className={`${hairline ? "hairline-top" : ""} py-16 md:py-24 ${className ?? ""}`}
    >
      <div className="shell">{children}</div>
    </section>
  );
}

export function Eyebrow({ index, children }: { index?: string; children: ReactNode }) {
  return (
    <div className="flex items-baseline gap-4">
      {index ? <span className="label-micro text-cyan-accent">{index}</span> : null}
      <span className="label-micro">{children}</span>
    </div>
  );
}

export function SectionHeading({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h2 className={`display-lg text-[2.25rem] md:text-[3.5rem] lg:text-[4rem] ${className ?? ""}`}>
      <MaskReveal>{children}</MaskReveal>
    </h2>
  );
}
