import { BlockStack, Checkbox, Text } from "@shopify/polaris";

const Condition09 = () => {
  return (
    <BlockStack>
      <Text as="h2">You selected Purchase within last month</Text>
      <Checkbox label="Include returns" checked={false} />
    </BlockStack>
  );
};

export default Condition09;
