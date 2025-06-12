import { SelectedPage } from "@/types/types"
import { FAQS } from "@/lib/JSON Files/SiteContent"

import { FaqSection } from "../ui/frequently-asked-questions"

type Props = {
  setSelectedPage: (value: SelectedPage) => void
}

export function FreqAskedQuest({ setSelectedPage }: Props) {
  return (
    <FaqSection
      title="Frequently Asked Questions"
      description="Everything you need to know about our services."
      items={FAQS}
      contactInfo={{
        title: "Still have questions?",
        description: "We're here to help you",
        buttonText: "Contact Support",
        onContact: () => console.log("Contact support clicked"),
      }}
      setSelectedPage={setSelectedPage}
    />
  )
}
