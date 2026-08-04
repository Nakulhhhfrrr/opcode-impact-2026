import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/site/PlaceholderPage";

const TITLE = "Partners — OPCODE IMPACT 2026";
const DESCRIPTION = "Confirmed partner organisations, their contributed problem statements and the sponsorship prospectus.";

export const Route = createFileRoute("/partners")({
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
      index="04"
      eyebrow="Partners"
      title="Industry, academic and community."
      body="Confirmed partner organisations, their contributed problem statements and the sponsorship prospectus."
    />
  );
}
