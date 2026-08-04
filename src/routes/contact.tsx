import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/site/PlaceholderPage";

const TITLE = "Contact — OPCODE IMPACT 2026";
const DESCRIPTION =
  "Direct contacts for participants, sponsors and press, plus travel directions to the Cheruthuruthy campus.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:image", content: "https://opcode-impact-2026.vercel.app/og-image.png" },
      { property: "og:url", content: "https://opcode-impact-2026.vercel.app/contact" },
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
      index="12"
      eyebrow="Contact"
      title="Reach the organising committee."
      body="Direct contacts for participants, sponsors and press, plus travel directions to the Cheruthuruthy campus."
    />
  );
}
