import { BlockStack, RadioButton, Text } from "@shopify/polaris";

const Condition05 = () => {
  return (
    <BlockStack>
      <Text as="h2">You selected Frequent shoppers</Text>
      <RadioButton
        label="Has made 5 or more purchases"
        checked={false}
        id="frequent-shoppers"
        name="frequent-shoppers"
        onChange={() => {}}
      />
    </BlockStack>
  );
};

export default Condition05;
