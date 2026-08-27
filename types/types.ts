export interface BenefitType {
  icon: JSX.Element
  title: string
  description: string
}

export interface ClassType {
  name: string
  description?: string
  image: object
}

export type ServicesCardType = {
  id: string
  ref: string
  title: string
  content: string
}
