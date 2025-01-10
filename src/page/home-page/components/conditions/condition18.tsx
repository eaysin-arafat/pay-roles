import { BlockStack, Text, TextField } from "@shopify/polaris";

const Condition18 = () => {
  return (
    <BlockStack>
      <Text as="h2">You selected Bulk buyers</Text>
      <TextField
        label="Minimum order quantity"
        value=""
        placeholder="Enter quantity"
        autoComplete="off"
      />
    </BlockStack>
  );
};

export default Condition18;
