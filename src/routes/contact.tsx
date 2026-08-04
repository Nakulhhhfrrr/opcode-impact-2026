import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/site/PlaceholderPage";

const TITLE = "Contact — OPCODE IMPACT 2026";
const DESCRIPTION = "Direct contacts for participants, sponsors and press, plus travel directions to the Cheruthuruthy campus.";

export const Route = createFileRoute("/contact")({
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
      index="12"
      eyebrow="Contact"
      title="Reach the organising committee."
      body="Direct contacts for participants, sponsors and press, plus travel directions to the Cheruthuruthy campus."
    />
  );
}
