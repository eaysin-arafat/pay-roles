import {
  BlockStack,
  Button,
  Card,
  Icon,
  InlineStack,
  Text,
} from "@shopify/polaris";
import { AlertTriangleIcon } from "@shopify/polaris-icons";
import React from "react";

interface InfoCardProps {
  title: string;
  message: string;
  buttonText?: string;
  buttonLink?: string;
}
const InfoCard: React.FC<InfoCardProps> = ({
  title,
  message,
  buttonText,
  buttonLink,
}) => (
  <Card>
    <BlockStack gap={"400"}>
      <Text variant="headingMd" as="h2">
        {title}
      </Text>
      <InlineStack>
        <p>{message}</p>
      </InlineStack>
      {buttonText && (
        <Button variant="secondary" url={buttonLink}>
          {buttonText}
        </Button>
      )}
    </BlockStack>
  </Card>
);

const InfoCardsSection: React.FC = () => (
  <BlockStack gap={"400"}>
    <Card>
      <BlockStack gap={"400"}>
        <InlineStack align="start">
          <Icon source={AlertTriangleIcon} accessibilityLabel="" />
          <Text as="h2" variant="bodyMd">
            No plan needed!
          </Text>
        </InlineStack>
        <InlineStack>
          <Text as="p" variant="bodyMd">
            Forever free for development stores.
          </Text>
        </InlineStack>
      </BlockStack>
    </Card>
    <InfoCard
      title="Support"
      message="If you need assistance, please reach out to our support team using the button below."
      buttonText="Contact support"
    />
    <InfoCard
      title="Share logs"
      message="Please watch the video below to learn how to share the PayRules logs."
      buttonText="How to share logs"
      buttonLink="#" // Replace with the actual link
    />
  </BlockStack>
);

export default InfoCardsSection;
