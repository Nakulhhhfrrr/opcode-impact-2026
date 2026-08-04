import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/site/PlaceholderPage";

const TITLE = "Partners — OPCODE IMPACT 2026";
const DESCRIPTION =
  "Confirmed partner organisations, their contributed problem statements and the sponsorship prospectus.";

export const Route = createFileRoute("/partners")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:image", content: "https://opcode-impact-2026.vercel.app/og-image.png" },
      { property: "og:url", content: "https://opcode-impact-2026.vercel.app/partners" },
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
      index="04"
      eyebrow="Partners"
      title="Industry, academic and community."
      body="Confirmed partner organisations, their contributed problem statements and the sponsorship prospectus."
    />
  );
}
