import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/site/PlaceholderPage";

const TITLE = "Tracks — OPCODE IMPACT 2026";
const DESCRIPTION =
  "Detailed track briefs, eligibility, evaluation rubrics and submission requirements for both competition tracks.";

export const Route = createFileRoute("/tracks")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:image", content: "https://opcode-impact-2026.vercel.app/og-image.png" },
      { property: "og:url", content: "https://opcode-impact-2026.vercel.app/tracks" },
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
      index="03"
      eyebrow="Tracks"
      title="Industry Challenge and SDG Innovation."
      body="Detailed track briefs, eligibility, evaluation rubrics and submission requirements for both competition tracks."
    />
  );
}
