import {
  BlockStack,
  Box,
  Card,
  Checkbox,
  RadioButton,
  Text,
  TextField,
} from "@shopify/polaris";
import React from "react";
import { Rule } from "../../../types";

interface RuleSettingsProps {
  rule: Rule;
  setRule: React.Dispatch<React.SetStateAction<Rule>>;
  matchCondition: "Any" | "All";
  setMatchCondition: React.Dispatch<React.SetStateAction<"Any" | "All">>;
  handleRenameToggle: (value: boolean) => void;
}

const RuleSettings: React.FC<RuleSettingsProps> = ({
  rule,
  setRule,
  handleRenameToggle,
  matchCondition,
  setMatchCondition,
}) => {
  return (
    <Card padding={"400"}>
      <Text as="h2" variant="headingMd">
        Rule settings
      </Text>
      <BlockStack gap={"200"}>
        <TextField
          label="Rule name"
          value={rule.ruleName}
          onChange={(value) =>
            setRule((prevRule) => ({ ...prevRule, ruleName: value }))
          }
          placeholder="Hide Cash on Delivery for international order"
          autoComplete="off"
        />
        <Text as="p">For internet use only</Text>
      </BlockStack>

      <Box paddingBlockStart="200">
        <BlockStack gap={"200"}>
          <Text as="p" variant="headingMd">
            Hide, sort or rename payment methods
          </Text>
          <BlockStack>
            <Checkbox
              label="Hide"
              checked={rule.hide}
              onChange={(value) =>
                setRule((prevRule) => ({ ...prevRule, hide: value }))
              }
            />
            <Checkbox
              label="Sort"
              disabled={rule.paymentMethods.length === 0}
              checked={rule.sort}
              onChange={(value) =>
                setRule((prevRule) => ({ ...prevRule, sort: value }))
              }
            />
            <Checkbox
              label="Rename"
              disabled={rule.paymentMethods.length === 0}
              checked={rule.rename}
              onChange={(value) => handleRenameToggle(value)}
            />
          </BlockStack>

          <Box>
            <BlockStack gap={"200"}>
              <Text as="h1" variant="headingMd">
                Match conditions
              </Text>

              <BlockStack gap={"100"}>
                <RadioButton
                  label="All"
                  helpText="Any of the specified conditions must be met."
                  checked={matchCondition === "All"}
                  id="disabled"
                  name="matchCondition"
                  onChange={() => setMatchCondition("All")}
                />
                <RadioButton
                  label="Any"
                  helpText="All specific conditions must be met."
                  id="optional"
                  name="matchCondition"
                  checked={matchCondition === "Any"}
                  onChange={() => setMatchCondition("Any")}
                />
              </BlockStack>
            </BlockStack>
          </Box>
        </BlockStack>
      </Box>
    </Card>
  );
};

export default RuleSettings;
