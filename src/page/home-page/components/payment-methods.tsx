import {
  BlockStack,
  Button,
  Card,
  Divider,
  Icon,
  Select,
  Text,
  TextField,
} from "@shopify/polaris";
import { PlusIcon, SelectIcon, XIcon } from "@shopify/polaris-icons";
import React from "react";

import SearchableListboxPopover from "../../../components/popover-with-searchable-listbox";
import { paymentMethodOptions, renameOptions } from "../../../constant/data";
import { Rule } from "../../../types";

interface PaymentMethodsProps {
  rule: Rule;
  setRule: React.Dispatch<React.SetStateAction<Rule>>;
  handleSelectPaymentMethod: (id: string, index: number) => void;
  handleRemovePaymentMethod: (index: number) => void;
  handleAddPaymentMethod: () => void;
}

const PaymentMethods: React.FC<PaymentMethodsProps> = ({
  rule,
  setRule,
  handleRemovePaymentMethod,
  handleAddPaymentMethod,
  handleSelectPaymentMethod,
}) => {
  return (
    <Card padding={"400"}>
      <BlockStack gap={"200"}>
        <Text as="h2" variant="headingSm">
          Payment methods
        </Text>
        <Text as="p">
          Select from existing or type to add your payment method
        </Text>
        <Divider />

        {rule.paymentMethods.length > 0 &&
          rule.paymentMethods.map((paymentMethod, index) => (
            <>
              <div
                key={paymentMethod.id}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  width: "100%",
                }}
              >
                {rule.sort && (
                  <div style={{ width: "120px" }}>
                    <TextField
                      label
                      value={""}
                      onChange={() => {}}
                      type="email"
                      autoComplete="email"
                      placeholder="Order number"
                    />
                  </div>
                )}

                <div style={{ flexGrow: 1 }}>
                  <SearchableListboxPopover
                    searchEnabled
                    segments={paymentMethodOptions}
                    onSelect={(id) => handleSelectPaymentMethod(id, index)}
                    placeholder="Select payment method"
                    activatorNode={
                      <div
                        style={{
                          border: "1px solid gray",
                          padding: "4px 8px",
                          borderRadius: "5px",
                          cursor: "pointer",
                          marginTop: "4px",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                          }}
                        >
                          <Text as="p">
                            {paymentMethod?.label || "Choose a method"}
                          </Text>
                          <div>
                            <Icon source={SelectIcon} />
                          </div>
                        </div>
                      </div>
                    }
                  />
                </div>

                <Button
                  variant="plain"
                  icon={XIcon}
                  onClick={() => handleRemovePaymentMethod(index)}
                />
              </div>

              {rule.rename && (
                <div style={{ display: "flex", gap: "10px" }}>
                  <div style={{ width: "120px" }}>
                    <Select
                      label
                      options={renameOptions}
                      onChange={(value) => {
                        setRule((prevRule) => {
                          const updatedMethods = [...prevRule.paymentMethods];
                          updatedMethods[index] = {
                            ...updatedMethods[index],
                            renameType: value,
                          };

                          return {
                            ...prevRule,
                            paymentMethods: updatedMethods,
                          };
                        });
                      }}
                      value={rule.paymentMethods[index].renameType}
                    />
                  </div>

                  <div style={{ flexGrow: 1 }}>
                    <TextField
                      label
                      autoComplete="on"
                      value={rule.paymentMethods[index].newValue}
                      onChange={(newValue) => {
                        setRule((prevRule) => {
                          const updatedMethods = [...prevRule.paymentMethods];
                          updatedMethods[index] = {
                            ...updatedMethods[index],
                            newValue: newValue,
                          };
                          return {
                            ...prevRule,
                            paymentMethods: updatedMethods,
                          };
                        });
                      }}
                      placeholder="New payment name"
                    />
                  </div>

                  <div style={{ width: "20px" }}></div>
                </div>
              )}
            </>
          ))}

        <Divider />

        <Button
          variant="secondary"
          icon={PlusIcon}
          onClick={handleAddPaymentMethod}
        >
          Add or type a new payment method
        </Button>
      </BlockStack>
    </Card>
  );
};

export default PaymentMethods;
