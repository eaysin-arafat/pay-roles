import { BlockStack, Text, TextField } from "@shopify/polaris";

const Condition10 = () => {
  return (
    <BlockStack>
      <Text as="h2">You selected High-spending customers</Text>
      <TextField
        label="Total spent"
        value=""
        placeholder="$500+"
        autoComplete="off"
      />
    </BlockStack>
  );
};

export default Condition10;
