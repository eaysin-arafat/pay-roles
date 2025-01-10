import { BlockStack, Text, TextField } from "@shopify/polaris";

const Condition16 = () => {
  return (
    <BlockStack>
      <Text as="h2">You selected Discount code users</Text>
      <TextField
        label="Enter discount code"
        value=""
        placeholder="DISCOUNT20"
        autoComplete="off"
      />
    </BlockStack>
  );
};

export default Condition16;
