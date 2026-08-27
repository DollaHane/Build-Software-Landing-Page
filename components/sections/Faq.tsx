import { FAQS } from "@/lib/content"

import { FaqSection } from "../ui/frequently-asked-questions"

export function Faq() {
  return (
    <FaqSection
      title="Frequently Asked Questions"
      description="Everything you need to know before you get in touch."
      items={[...FAQS]}
      contactInfo={{
        title: "Still have questions?",
        description: "We're here to help.",
        buttonText: "Contact us",
      }}
    />
  )
}
