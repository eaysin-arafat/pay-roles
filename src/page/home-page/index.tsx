import { BlockStack, Box, Button, InlineStack } from "@shopify/polaris";
import React from "react";
import ConditionCard from "./ConditionCard";
import PaymentMethodsCard from "./PaymentMethodsCard";
import RuleSettingsCard from "./RuleSettingsCard";
import StatusCard from "./StatusCard";

const AddRuleComponent: React.FC = () => {
  const [ruleName, setRuleName] = React.useState<string>("");
  const [hide, setHide] = React.useState<boolean>(true);
  const [sort, setSort] = React.useState<boolean>(false);
  const [rename, setRename] = React.useState<boolean>(false);
  const [selectedSegments, setSelectedSegments] = React.useState<Segment[]>([]);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = React.useState<
    Segment[]
  >([]);
  const [enabled, setEnabled] = React.useState<boolean>(true);

  const handleRenameToggle = (checked: boolean) => {
    setRename(checked);
  };

  const handleSelectSegment = (segmentId: string) => {
    // logic to add segment
  };

  const handleRemoveSegment = (segmentId: string) => {
    // logic to remove segment
  };

  return (
    <BlockStack gap={"300"}>
      <Box padding={"100"}>
        <Text as="h1" variant="headingMd">
          Add rule
        </Text>
      </Box>

      <ConditionCard
        selectedSegments={selectedSegments}
        onSelect={handleSelectSegment}
        onRemoveSegment={handleRemoveSegment}
      />

      <RuleSettingsCard
        ruleName={ruleName}
        setRuleName={setRuleName}
        hide={hide}
        setHide={setHide}
        sort={sort}
        setSort={setSort}
        rename={rename}
        handleRenameToggle={handleRenameToggle}
      />

      <PaymentMethodsCard
        selectedPaymentMethod={selectedPaymentMethod}
        setSelectedPaymentMethod={setSelectedPaymentMethod}
        sort={sort}
        rename={rename}
      />

      <StatusCard enabled={enabled} setEnabled={setEnabled} />

      <Box paddingBlock={"400"}>
        <InlineStack gap={"200"}>
          <Button variant="primary">Save</Button>
          <Button variant="secondary">Discard</Button>
        </InlineStack>
      </Box>
    </BlockStack>
  );
};

export default AddRuleComponent;
