import { BlockStack, Box, Button } from "@shopify/polaris";
import { Segment } from "../../../types";

interface SegmentDisplayProps {
  segment: Segment;
  handleRemoveSegment: (id: string) => void;
}

const ConditionDisplay = ({
  handleRemoveSegment,
  segment,
}: SegmentDisplayProps) => {
  return (
    <BlockStack key={segment.id} gap={"200"}>
      <div style={{ position: "relative" }}>
        <Box>{segment.content}</Box>
        <div style={{ position: "absolute", top: 0, right: 0 }}>
          <Button
            onClick={() => handleRemoveSegment(segment.id)}
            variant="plain"
          >
            Remove
          </Button>
        </div>
      </div>
    </BlockStack>
  );
};

export default ConditionDisplay;
