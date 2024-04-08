import * as React from "react"
import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Text,
} from "@react-email/components"

interface BuidlMailProps {
  name: string
  email: string
  website: string
  source: string
  service: string
}

export const buidlMail: React.FC<Readonly<BuidlMailProps>> = ({
  name,
  email,
  website,
  source,
  service,
}) => (
  <Html>
    <Head />
    <Preview>{name} has sent a mail from the Buidl site!</Preview>
    <Body>
      <Container>
        <Heading>Mail Recieved From Buidl Site</Heading>
        <Text>{name} has sent you an enquiry</Text>
        <Text>Email address: {email}</Text>
        <Text>Existing website: {website}</Text>
        <Text>Service requested: {service}</Text>
        <Text>Heared about you via: {source}</Text>
      </Container>
    </Body>
  </Html>
)
