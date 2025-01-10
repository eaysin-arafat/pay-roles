import { BlockStack, Card, RadioButton, Text } from "@shopify/polaris";
import { Dispatch, SetStateAction } from "react";

interface StatusProps {
  status: string;
  setStatus: Dispatch<SetStateAction<"Enabled" | "Disabled">>;
}

const Status: React.FC<StatusProps> = ({ status, setStatus }) => {
  return (
    <Card padding={"400"}>
      <BlockStack gap={"200"}>
        <Text as="h2" variant="headingLg">
          Status
        </Text>
        <BlockStack>
          <RadioButton
            label="Enabled"
            checked={status === "Enabled"}
            name="status"
            onChange={() => setStatus("Enabled")}
          />

          <RadioButton
            label="Disabled"
            checked={status === "Disabled"}
            name="status"
            onChange={() => setStatus("Disabled")}
          />
        </BlockStack>
      </BlockStack>
    </Card>
  );
};

export default Status;
