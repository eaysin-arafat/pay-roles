import { BlockStack, Box, Button, Card, Text } from "@shopify/polaris";
import { PlusIcon } from "@shopify/polaris-icons";
import React from "react";
import SearchableListboxPopover from "../../../components/popover-with-searchable-listbox";
import { conditionOptions } from "../../../constant/data";

interface ConditionsProps {
  handleSelect: (segmentId: string) => void;
  getSelectedContent: () => React.ReactNode;
}

const Conditions: React.FC<ConditionsProps> = ({
  handleSelect,
  getSelectedContent,
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
          <Text as="h2" variant="headingSm">
            Conditions
          </Text>
          <BlockStack gap={"400"}>{getSelectedContent()}</BlockStack>
        </BlockStack>
      </Card>
    </>
  );
};

export default Conditions;
