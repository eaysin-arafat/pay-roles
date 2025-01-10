import {
  BlockStack,
  Box,
  Card,
  Icon,
  InlineStack,
  Text,
} from "@shopify/polaris";
import { AlertTriangleIcon } from "@shopify/polaris-icons";

const AlertCard = () => {
  return (
    <Card padding={"0"}>
      <BlockStack gap={"400"}>
        <div style={{ padding: "10px 15px", backgroundColor: "#fdac3a" }}>
          <InlineStack align="start" gap={"200"} blockAlign="center">
            <div>
              <Icon source={AlertTriangleIcon} accessibilityLabel="" />
            </div>
            <Text as="h2" variant="headingMd">
              No plan needed!
            </Text>
          </InlineStack>
        </div>
        <Box paddingInline={"400"} paddingBlockEnd={"400"}>
          <Text as="p" variant="bodyMd">
            Forever free for development stores.
          </Text>
        </Box>
      </BlockStack>
    </Card>
  );
};

export default AlertCard;
