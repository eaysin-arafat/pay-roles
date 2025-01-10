import { BlockStack, Box, Button, Card, Text } from "@shopify/polaris";
import { PlusIcon } from "@shopify/polaris-icons";
import React from "react";
import SearchableListboxPopover from "../../../components/popover-with-searchable-listbox";
import { conditionOptions } from "../../../constant/data";

interface ConditionsProps {
  handleSelect: (segmentId: string) => void;
  renderSelectedConditions: () => React.ReactNode;
}

const Conditions: React.FC<ConditionsProps> = ({
  handleSelect,
  renderSelectedConditions,
}) => {
  return (
    <>
      <SearchableListboxPopover
        segments={conditionOptions}
        onSelect={handleSelect}
        placeholder="Search customer segments"
        key="condition-title"
        activatorNode={
          <Box>
            <Button variant="secondary" icon={PlusIcon}>
              Add a new condition
            </Button>
          </Box>
        }
      />

      <Card padding={"400"} key={"conditions-list"}>
        <BlockStack>
          <Text as="h2" variant="headingMd">
            Conditions
          </Text>
          <BlockStack gap={"400"}>{renderSelectedConditions()}</BlockStack>
        </BlockStack>
      </Card>
    </>
  );
};

export default Conditions;
