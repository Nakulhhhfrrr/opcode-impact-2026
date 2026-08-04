import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/site/PlaceholderPage";

const TITLE = "Awards & Opportunities — OPCODE IMPACT 2026";
const DESCRIPTION =
  "Prizes, internship opportunities, placement pathways, and industry recognition for outstanding teams at OPCODE IMPACT 2026.";

export const Route = createFileRoute("/prizes")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:image", content: "https://opcode-impact-2026.vercel.app/og-image.png" },
      { property: "og:url", content: "https://opcode-impact-2026.vercel.app/prizes" },
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
      index="07"
      eyebrow="Awards & Opportunities"
      title="Recognition across both tracks."
      body="Prize details, internship pathways, placement opportunities, and special category awards will be announced soon."
    />
  );
}
