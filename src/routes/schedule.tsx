import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/site/PlaceholderPage";

const TITLE = "Schedule — OPCODE IMPACT 2026";
const DESCRIPTION =
  "The complete two-day schedule including briefings, checkpoints, mentor sessions, meals and the final jury round.";

export const Route = createFileRoute("/schedule")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:image", content: "https://opcode-impact-2026.vercel.app/og-image.png" },
      { property: "og:url", content: "https://opcode-impact-2026.vercel.app/schedule" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:image", content: "https://opcode-impact-2026.vercel.app/og-image.png" },
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
