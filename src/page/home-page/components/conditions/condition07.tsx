import { BlockStack, Select, Text } from "@shopify/polaris";

const Condition07 = () => {
  return (
    <BlockStack>
      <Text as="h2">You selected One-time buyers</Text>
      <Select
        label="Select purchase frequency"
        options={[
          { label: "Once", value: "once" },
          { label: "Twice", value: "twice" },
        ]}
        value="once"
      />
    </BlockStack>
  );
};

export default Condition07;
