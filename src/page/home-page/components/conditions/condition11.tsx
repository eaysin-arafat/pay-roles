import { BlockStack, RadioButton, Text } from "@shopify/polaris";

const Condition11 = () => {
  return (
    <BlockStack>
      <Text as="h2">You selected Email subscribers</Text>
      <RadioButton
        label="Subscribed to newsletter"
        checked={true}
        id="email-subscribed"
        name="email-subscribers"
        onChange={() => {}}
      />
    </BlockStack>
  );
};

export default Condition11;
