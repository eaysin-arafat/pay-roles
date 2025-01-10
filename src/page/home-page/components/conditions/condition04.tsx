import { BlockStack, Text, TextField } from "@shopify/polaris";

const Condition04 = () => {
  return (
    <BlockStack>
      <Text as="h2">You selected International customers</Text>
      <TextField
        label="Country of origin"
        value=""
        placeholder="Type country"
        autoComplete="off"
      />
    </BlockStack>
  );
};

export default Condition04;
