import { Box, Text } from "@shopify/polaris";
import React from "react";

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <Box padding={"100"}>
      <Text as="h1" variant="headingMd">
        {title}
      </Text>
    </Box>
  );
};

export default Header;
