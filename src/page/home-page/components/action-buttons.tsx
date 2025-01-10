import { Box, Button, InlineStack } from "@shopify/polaris";

interface ActionButtonsProps {
  handleSave: () => void;
  handleDiscard: () => void;
}

const ActionButtons = ({ handleSave, handleDiscard }: ActionButtonsProps) => {
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
