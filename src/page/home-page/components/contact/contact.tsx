import {
  BlockStack,
  Box,
  Card,
  Icon,
  InlineStack,
  Text,
} from "@shopify/polaris";
import { ChatIcon } from "@shopify/polaris-icons";
import styles from "./contact.module.css";

const Contact = () => {
  return (
    <Card padding={"0"}>
      <BlockStack gap={"400"}>
        <div className={styles.header}>
          <InlineStack align="start" gap={"200"} blockAlign="center">
            <div>
              <Icon source={ChatIcon} accessibilityLabel="" />
            </div>
            <Text as="h2" variant="headingMd">
              Need help?
            </Text>
          </InlineStack>
        </div>
        <Box paddingInline={"400"} paddingBlockEnd={"400"}>
          <Text as="p" variant="bodyMd">
            We will set up the rule for you. Contact via the live chat at the
            bottom right.
          </Text>
        </Box>
      </BlockStack>
    </Card>
  );
};

export default Contact;
