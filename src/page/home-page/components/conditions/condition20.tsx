import { BlockStack, Select, Text } from "@shopify/polaris";

const Condition20 = () => {
  return (
    <BlockStack>
      <Text as="h2">You selected Multiple payment methods</Text>
      <Select
        label="Select payment methods"
        options={[
          { label: "Credit Card", value: "credit-card" },
          { label: "PayPal", value: "paypal" },
          { label: "Bank Transfer", value: "bank-transfer" },
        ]}
        value="paypal"
      />
    </BlockStack>
  );
};

export default Condition20;
