import { BlockStack, RadioButton, Text } from "@shopify/polaris";

const Condition14 = () => {
  return (
    <BlockStack>
      <Text as="h2">You selected Loyalty members</Text>
      <RadioButton
        label="Member status"
        checked={false}
        id="loyalty-member"
        name="loyalty-members"
        onChange={() => {}}
      />
    </BlockStack>
  );
};

export default Condition14;
