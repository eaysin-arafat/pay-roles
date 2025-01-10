import { Box, Button, InlineStack } from "@shopify/polaris";

interface ActionButtonsProps {
  handleSave: () => void;
  handleDiscard: () => void;
}

const ActionButtons: React.FC<ActionButtonsProps> = ({
  handleSave,
  handleDiscard,
}) => {
  return (
    <Box paddingBlock={"400"}>
      <InlineStack gap={"200"}>
        <Button variant="primary" onClick={handleSave}>
          Save
        </Button>
        <Button variant="secondary" onClick={handleDiscard}>
          Discard
        </Button>
      </InlineStack>
    </Box>
  );
};

export default ActionButtons;
