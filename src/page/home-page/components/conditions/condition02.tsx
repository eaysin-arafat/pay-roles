import { BlockStack, Text, TextField } from "@shopify/polaris";

const Condition02 = () => {
  return (
    <BlockStack>
      <Text as="h2">You selected Abandoned carts - last 30 days</Text>
      <TextField
        label="Custom rule for abandoned carts"
        value=""
        placeholder="Custom rule description"
        autoComplete="off"
      />
    </BlockStack>
  );
};

export default Condition02;
