import { useState } from "react";
import { conditionOptions, paymentMethodOptions } from "../../../constant/data";
import { Rule } from "../../../types";

export const initialRuleState: Rule = {
  id: "",
  ruleName: "",
  hide: true,
  sort: false,
  rename: false,
  conditions: [],
  paymentMethods: [],
};

export type MatchConditionType = "All" | "Any";
export type StatusType = "Enabled" | "Disabled";

export const useAddRule = () => {
  const [rule, setRule] = useState<Rule>(initialRuleState);
  const [matchCondition, setMatchCondition] =
    useState<MatchConditionType>("All");
  const [status, setStatus] = useState<StatusType>("Enabled");

  const handleRenameToggle = (checked: boolean) => {
    setRule((prevRule) => ({
      ...prevRule,
      rename: checked,
      paymentMethods: prevRule.paymentMethods.map((method) => ({
        ...method,
        newName: method.value || "",
        newValue: method.value || "",
      })),
    }));
  };

  const handleSelectCondition = (id: string) => {
    const selected = conditionOptions.find((condition) => condition.id === id);
    if (selected && !rule.conditions.some((con) => con.id === selected.id)) {
      setRule((prevRule) => ({
        ...prevRule,
        conditions: [...prevRule.conditions, selected],
      }));
    }
  };

  const handleRemoveCondition = (id: string) => {
    setRule((prevRule) => ({
      ...prevRule,
      conditions: prevRule.conditions.filter(
        (condition) => condition.id !== id
      ),
    }));
  };

  const handleSelectPaymentMethod = (id: string, index: number) => {
    const selected = paymentMethodOptions.find((option) => option.id === id);
    if (selected) {
      setRule((prevRule) => {
        const updatedMethods = [...prevRule.paymentMethods];
        updatedMethods[index] = { ...updatedMethods[index], ...selected };
        return { ...prevRule, paymentMethods: updatedMethods };
      });
    }
  };

  const handleAddPaymentMethod = () => {
    setRule((prevRule) => ({
      ...prevRule,
      paymentMethods: [
        ...prevRule.paymentMethods,
        { id: `${Date.now()}`, label: "", value: "", renameEnabled: false },
      ],
    }));
  };

  const handleRemovePaymentMethod = (index: number) => {
    setRule((prevRule) => ({
      ...prevRule,
      paymentMethods: prevRule.paymentMethods.filter((_, idx) => idx !== index),
    }));
  };

  const handleSave = () => {
    console.log({ ...rule, matchCondition, status });
  };

  return {
    rule,
    setRule,
    matchCondition,
    status,
    setStatus,
    setMatchCondition,
    handleRenameToggle,
    handleSelectCondition,
    handleRemoveCondition,
    handleSelectPaymentMethod,
    handleAddPaymentMethod,
    handleRemovePaymentMethod,
    handleSave,
  };
};
