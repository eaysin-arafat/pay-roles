import { AppProvider } from "@shopify/polaris";
import "@shopify/polaris/build/esm/styles.css";
import enTranslations from "@shopify/polaris/locales/en.json";
import { ReactNode } from "react";

interface PolarisProviderProps {
  children: ReactNode;
}

export const PolarisProvider: React.FC<PolarisProviderProps> = ({
  children,
}) => <AppProvider i18n={enTranslations}>{children}</AppProvider>;
