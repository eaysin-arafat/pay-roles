import { BlockStack, Modal, Text } from "@shopify/polaris";
import React, { useState } from "react";
import Header from "../../components/header";
import ActionButtons from "./components/action-buttons";
import ConditionDisplay from "./components/condition-display";
import Conditions from "./components/conditions";
import Contact from "./components/contact";
import PaymentMethods from "./components/payment-methods";
import RuleSettings from "./components/rule-settings";
import Status from "./components/status";
import { useAddRule } from "./hooks/useAddRole";

const AddRuleComponent: React.FC = () => {
  const {
    rule,
    matchCondition,
    status,
    setStatus,
    setMatchCondition,
    handleRenameToggle,
    handleRemoveCondition,
    handleSelectCondition,
    handleSelectPaymentMethod,
    handleAddPaymentMethod,
    handleRemovePaymentMethod,
    setRule,
  } = useAddRule();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const getSelectedContent = () => {
    if (rule.conditions.length === 0) {
      return (
        <BlockStack>
          <Text as="p">No conditions added yet.</Text>
        </BlockStack>
      );
    }

    return rule.conditions.map((condition) => (
      <ConditionDisplay
        key={condition.id}
        condition={condition}
        handleRemoveCondition={handleRemoveCondition}
      />
    ));
  };

  const handleSaveClick = () => setIsModalOpen(true);

  const handleDiscard = () => {
    setRule({
      id: "",
      ruleName: "",
      hide: false,
      sort: false,
      rename: false,
      conditions: [],
      paymentMethods: [],
    });
    setStatus("Disabled");
    setMatchCondition("All");
  };

  return (
    <BlockStack gap={"300"}>
      <Header title="Add a new rule" />

      <Conditions
        getSelectedContent={getSelectedContent}
        handleSelect={handleSelectCondition}
      />

      <RuleSettings
        rule={rule}
        setRule={setRule}
        matchCondition={matchCondition}
        setMatchCondition={setMatchCondition}
        handleRenameToggle={handleRenameToggle}
      />

      <PaymentMethods
        rule={rule}
        setRule={setRule}
        handleAddPaymentMethod={handleAddPaymentMethod}
        handleRemovePaymentMethod={handleRemovePaymentMethod}
        handleSelectPaymentMethod={handleSelectPaymentMethod}
      />

      <Status status={status} setStatus={setStatus} />

      <ActionButtons
        handleSave={handleSaveClick}
        handleDiscard={handleDiscard}
      />

      <Contact />

      <Modal
        open={isModalOpen}
        size="large"
        onClose={() => setIsModalOpen(false)}
        title="Saved Rule Data"
      >
        <Modal.Section>
          <Text as="h2">Rule Data</Text>
          <pre>
            <code>{JSON.stringify(rule, null, 2)}</code>
          </pre>
        </Modal.Section>
      </Modal>
    </BlockStack>
  );
};

export default AddRuleComponent;
