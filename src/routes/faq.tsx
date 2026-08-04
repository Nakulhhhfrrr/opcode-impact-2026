import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/site/PlaceholderPage";

const TITLE = "FAQ — OPCODE IMPACT 2026";
const DESCRIPTION = "An expanded question set covering eligibility, travel, accommodation, intellectual property and code of conduct.";

export const Route = createFileRoute("/faq")({
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
      index="11"
      eyebrow="FAQ"
      title="Everything teams ask."
      body="An expanded question set covering eligibility, travel, accommodation, intellectual property and code of conduct."
    />
  );
}
