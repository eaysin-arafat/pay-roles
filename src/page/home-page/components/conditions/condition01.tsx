import { BlockStack, RadioButton, Text } from "@shopify/polaris";

const Condition01 = () => {
  return (
    <BlockStack>
      <Text as="h2" variant="headingMd">
        You selected New customers
      </Text>
      <RadioButton
        label="New customer special condition"
        checked={true}
        id="new-customer-condition"
        name="new-customers"
        onChange={() => {}}
      />
    </BlockStack>
  );
};

export default Condition01;
