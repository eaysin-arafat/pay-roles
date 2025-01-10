import { BlockStack } from "@shopify/polaris";
import React from "react";
import AlertCard from "./components/alert-card";
import InfoCard from "./components/info-card";

const InfoCardsSection: React.FC = () => (
  <BlockStack gap={"400"}>
    <AlertCard />

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
