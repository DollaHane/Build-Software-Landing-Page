import * as React from "react"
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Text,
} from "@react-email/components"

interface BuidlMailProps {
  name: string
  email: string
  service: string
  budget: string
  timeline: string
  brief: string
}

export const buidlMail: React.FC<Readonly<BuidlMailProps>> = ({
  name,
  email,
  service,
  budget,
  timeline,
  brief,
}) => (
  <Html>
    <Head />
    <Preview>{name} sent an enquiry from the Build Software site</Preview>
    <Body>
      <Container>
        <Heading>New enquiry from buildsoftware.co.za</Heading>
        <Text>
          <strong>{name}</strong> has sent you an enquiry.
        </Text>
        <Hr />
        <Text>Email address: {email}</Text>
        <Text>Service required: {service}</Text>
        <Text>Budget: {budget}</Text>
        <Text>Timeline: {timeline}</Text>
        <Hr />
        <Text>Brief:</Text>
        <Text>{brief || "(none provided)"}</Text>
      </Container>
    </Body>
  </Html>
)
