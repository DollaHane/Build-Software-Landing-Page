import {
  Facebook,
  Linkedin,
  LucideProps,
  Moon,
  SunMedium,
  type Icon as LucideIcon,
} from "lucide-react"

export type Icon = LucideIcon

export const Icons = {
  sun: SunMedium,
  moon: Moon,
  facebook: (props: LucideProps) => <Facebook />,
  linkedin: (props: LucideProps) => <Linkedin />,
}
