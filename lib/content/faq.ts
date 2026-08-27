import type { Faq } from "@/types/content"

export const FAQS = [
  {
    question: "What makes your service unique?",
    answer:
      "Our aim is to make tailored software accessible to businesses of all sizes, not just large corporations. Every business is unique and deserves tools suited to how it actually works, at a price that makes sense.",
  },
  {
    question: "How much will my application cost?",
    answer:
      "Pricing depends on the complexity and scope of your project. During the enquiry stage we gather detailed requirements and draft an application schematic, which forms the basis of an offer built around your budget. We also offer flexible payment options.",
  },
  {
    question: "How long does it take to develop an application?",
    answer:
      "Timelines vary with the project's complexity and requirements. Once the enquiry stage is complete we provide an estimated delivery date, and you see working software throughout rather than at the end.",
  },
  {
    question: "What kind of after-sales support do you offer?",
    answer:
      "All our software includes a six-month bug-fix warranty. We also set aside development hours for optimisation in the event of unforeseen edge cases.",
  },
  {
    question: "Will you help us go live?",
    answer:
      "Yes. We help you select cloud infrastructure that suits your needs and support you through the deployment process.",
  },
  {
    question: "Do you offer a maintenance retainer?",
    answer:
      "Yes. Retainers cover regular updates, performance monitoring and priority support to keep your application running smoothly and minimise downtime.",
  },
] as const satisfies readonly Faq[]
