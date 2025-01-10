import { BlockStack, Button, Card, InlineStack, Text } from "@shopify/polaris";

interface InfoCardProps {
  title: string;
  message: string;
  buttonText?: string;
  buttonLink?: string;
}
const InfoCard: React.FC<InfoCardProps> = ({
  title,
  message,
  buttonText,
  buttonLink,
}) => (
  <Card>
    <BlockStack gap={"400"}>
      <Text variant="headingMd" as="h2">
        {title}
      </Text>
      <InlineStack>
        <p>{message}</p>
      </InlineStack>
      {buttonText && (
        <Button variant="secondary" url={buttonLink}>
          {buttonText}
        </Button>
      )}
    </BlockStack>
  </Card>
);

export default InfoCard;
