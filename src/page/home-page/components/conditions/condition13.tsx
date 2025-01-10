import { BlockStack, Text, TextField } from "@shopify/polaris";

const Condition13 = () => {
  return (
    <BlockStack>
      <Text as="h2">You selected Gift card users</Text>
      <TextField
        label="Gift card number"
        value=""
        placeholder="Enter gift card number"
        autoComplete="off"
      />
    </BlockStack>
  );
};

export default Condition13;
