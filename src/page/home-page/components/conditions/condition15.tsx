import { BlockStack, Text, TextField } from "@shopify/polaris";

const Condition15 = () => {
  return (
    <BlockStack>
      <Text as="h2">You selected Abandoned cart over $50</Text>
      <TextField
        label="Abandoned cart value"
        value=""
        placeholder="$50"
        autoComplete="off"
      />
    </BlockStack>
  );
};

export default Condition15;
