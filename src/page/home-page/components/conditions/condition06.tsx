import { BlockStack, Text, TextField } from "@shopify/polaris";

const Condition06 = () => {
  return (
    <BlockStack>
      <Text as="h2">You selected Inactive customers</Text>
      <TextField
        label="Last purchase date"
        value=""
        placeholder="MM/DD/YYYY"
        autoComplete="off"
      />
    </BlockStack>
  );
};

export default Condition06;
