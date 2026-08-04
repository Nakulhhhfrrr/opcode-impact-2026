import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/site/PlaceholderPage";

const TITLE = "Schedule — OPCODE IMPACT 2026";
const DESCRIPTION = "The complete two-day schedule including briefings, checkpoints, mentor sessions, meals and the final jury round.";

export const Route = createFileRoute("/schedule")({
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
      index="06"
      eyebrow="Schedule"
      title="Twenty-four hours, hour by hour."
      body="The complete two-day schedule including briefings, checkpoints, mentor sessions, meals and the final jury round."
    />
  );
}
