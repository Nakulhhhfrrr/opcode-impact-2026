import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/site/PlaceholderPage";

const TITLE = "About — OPCODE IMPACT 2026";
const DESCRIPTION = "The full story of OPCODE IMPACT — the organising department, the academic context and the national ambition behind the event.";

export const Route = createFileRoute("/about")({
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
    <PlaceholderPage
      index="01"
      eyebrow="About"
      title="A department, a discipline, a mandate."
      body="The full story of OPCODE IMPACT — the organising department, the academic context and the national ambition behind the event."
    />
  );
}
