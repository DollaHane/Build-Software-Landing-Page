import {
  LucideProps,
  Moon,
  SunMedium,
  Linkedin,
  Facebook,
  type Icon as LucideIcon,
} from "lucide-react"

export type Icon = LucideIcon

export const Icons = {
  sun: SunMedium,
  moon: Moon,
  facebook: (props: LucideProps) => (
    <Facebook/>
  ),
  linkedin: (props: LucideProps) => (
    <Linkedin/>
  ),
}
