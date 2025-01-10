import { BlockStack, Box, Button } from "@shopify/polaris";
import { Condition } from "../../../types";

interface Props {
  condition: Condition;
  handleRemoveCondition: (id: string) => void;
}

const ConditionDisplay = ({ handleRemoveCondition, condition }: Props) => {
  return (
    <BlockStack key={condition.id} gap={"200"}>
      <div style={{ position: "relative" }}>
        <Box>{condition.content}</Box>
        <div style={{ position: "absolute", top: 0, right: 0 }}>
          <Button
            onClick={() => handleRemoveCondition(condition.id)}
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
