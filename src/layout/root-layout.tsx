import { Layout, Page } from "@shopify/polaris";
import React from "react";
import InfoCardsSection from "./sidebar";

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <Page>
      <Layout>
        <Layout.Section variant="oneHalf">{children}</Layout.Section>

        <Layout.Section variant="oneThird">
          <InfoCardsSection />
        </Layout.Section>
      </Layout>
    </Page>
  );
};

export default RootLayout;
