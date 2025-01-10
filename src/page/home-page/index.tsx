// import { BlockStack } from "@shopify/polaris";
// import React from "react";
// import Header from "../../components/header";
// import ActionButtons from "./components/action-buttons";
// import Conditions from "./components/conditions";
// import PaymentMethods from "./components/payment-methods";
// import RuleSettings from "./components/rule-settings";
// import Status from "./components/status";
// import { useAddRule } from "./hooks/useAddRole";

// const AddRulePage: React.FC = () => {
//   const {
//     ruleName,
//     setRuleName,
//     hide,
//     setHide,
//     sort,
//     setSort,
//     rename,
//     setRename,
//     selectedPaymentMethod,
//     handleRenameToggle,
//     handleSelectSegment,
//     getSelectedContent,
//     setSelectedPaymentMethod,
//   } = useAddRule();

//   return (
//     <BlockStack gap="300">
//       <Header title="Add Rule" />

//       <Conditions
//         handleSelect={handleSelectSegment}
//         getSelectedContent={getSelectedContent}
//       />

//       <RuleSettings
//         ruleName={ruleName}
//         selectedPaymentMethod={selectedPaymentMethod}
//         setRuleName={setRuleName}
//         hide={hide}
//         setHide={setHide}
//         sort={sort}
//         setSort={setSort}
//         rename={rename}
//         setRename={setRename}
//         handleRenameToggle={handleRenameToggle}
//       />

//       <PaymentMethods
//         selectedPaymentMethod={selectedPaymentMethod}
//         setSelectedPaymentMethod={setSelectedPaymentMethod}
//         rename={rename}
//         sort={sort}
//       />

//       <Status />

//       <ActionButtons />
//     </BlockStack>
//   );
// };

// export default AddRulePage;

import { BlockStack, Text } from "@shopify/polaris";
import React from "react";
import Header from "../../components/header";
import { Segment } from "../../types";
import ActionButtons from "./components/action-buttons";
import ConditionDisplay from "./components/condition-display";
import Conditions from "./components/conditions";
import PaymentMethods from "./components/payment-methods";
import RuleSettings from "./components/rule-settings";
import Status from "./components/status";
import { useAddRule } from "./hooks/useAddRole";

export interface PaymentMethod {
  id: string;
  label: string;
  value: string;
  newValue?: string;
  sortOrder?: string;
  renameEnabled: boolean;
  renameType?: string;
}

export interface Rule {
  id: string;
  ruleName: string;
  hide: boolean;
  sort: boolean;
  rename: boolean;
  segments: Segment[];
  paymentMethods: PaymentMethod[];
}

const AddRuleComponent: React.FC = () => {
  const {
    rule,
    matchCondition,
    status,
    setStatus,
    setMatchCondition,
    handleRenameToggle,
    handleSelectSegment,
    handleRemoveSegment,
    handleSelectPaymentMethod,
    handleAddPaymentMethod,
    handleRemovePaymentMethod,
    handleSave,
    setRule,
  } = useAddRule();

  const getSelectedContent = () => {
    if (rule.segments.length === 0) {
      return (
        <BlockStack>
          <Text as="p">No conditions added yet.</Text>
        </BlockStack>
      );
    }

    return rule.segments.map((segment) => (
      <ConditionDisplay
        handleRemoveSegment={handleRemoveSegment}
        segment={segment}
      />
    ));
  };

  return (
    <BlockStack gap={"300"}>
      <Header title="Add a new rule" />

      <Conditions
        getSelectedContent={getSelectedContent}
        handleSelect={handleSelectSegment}
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

      <ActionButtons handleSave={handleSave} handleDiscard={() => {}} />
    </BlockStack>
  );
};

export default AddRuleComponent;
