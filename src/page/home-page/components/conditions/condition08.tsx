import { BlockStack, Text, TextField } from "@shopify/polaris";

const Condition08 = () => {
  return (
    <BlockStack>
      <Text as="h2">You selected Cart value over $100</Text>
      <TextField
        label="Minimum cart value"
        value=""
        placeholder="$100"
        autoComplete="off"
      />
    </BlockStack>
  );
};

export default Condition08;
