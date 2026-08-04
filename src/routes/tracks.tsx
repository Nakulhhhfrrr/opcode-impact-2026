import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/site/PlaceholderPage";

const TITLE = "Tracks — OPCODE IMPACT 2026";
const DESCRIPTION = "Detailed track briefs, eligibility, evaluation rubrics and submission requirements for both competition tracks.";

export const Route = createFileRoute("/tracks")({
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
      index="03"
      eyebrow="Tracks"
      title="Industry Challenge and SDG Innovation."
      body="Detailed track briefs, eligibility, evaluation rubrics and submission requirements for both competition tracks."
    />
  );
}
