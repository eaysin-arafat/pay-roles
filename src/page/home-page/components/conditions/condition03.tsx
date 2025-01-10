import { BlockStack, Select, Text } from "@shopify/polaris";

const Condition03 = () => {
  return (
    <BlockStack>
      <Text as="h2">You selected Returning customers</Text>
      <Select
        label="Select customer tier"
        options={[
          { label: "Bronze", value: "bronze" },
          { label: "Silver", value: "silver" },
          { label: "Gold", value: "gold" },
        ]}
        value="silver"
      />
    </BlockStack>
  );
};

export default Condition03;
