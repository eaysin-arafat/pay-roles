import { useState } from "react";
import { Rule } from "..";
import { conditionOptions, paymentMethodOptions } from "../../../constant/data";

export const useAddRule = () => {
  const [rule, setRule] = useState<Rule>({
    id: `${Date.now()}`,
    ruleName: "",
    hide: true,
    sort: false,
    rename: false,
    segments: [],
    paymentMethods: [],
  });
  const [matchCondition, setMatchCondition] = useState<"All" | "Any">("All");
  const [status, setStatus] = useState<"Enabled" | "Disabled">("Enabled");

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

  const handleSelectSegment = (segmentId: string) => {
    const selected = conditionOptions.find(
      (segment) => segment.id === segmentId
    );
    if (selected && !rule.segments.some((seg) => seg.id === selected.id)) {
      setRule((prevRule) => ({
        ...prevRule,
        segments: [...prevRule.segments, selected],
      }));
    }
  };

  const handleRemoveSegment = (segmentId: string) => {
    setRule((prevRule) => ({
      ...prevRule,
      segments: prevRule.segments.filter((seg) => seg.id !== segmentId),
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
    console.log(rule);
  };

  return {
    rule,
    setRule,
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
  };
};
