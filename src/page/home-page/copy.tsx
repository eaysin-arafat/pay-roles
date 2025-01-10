import {
  BlockStack,
  Box,
  Button,
  Card,
  Checkbox,
  Divider,
  Icon,
  InlineStack,
  RadioButton,
  Select,
  Text,
  TextField,
} from "@shopify/polaris";
import { PlusIcon, SelectIcon, XIcon } from "@shopify/polaris-icons";
import React from "react";
import SearchableListboxPopover, {
  Segment,
} from "../../components/popover-with-searchable-listbox";
import {
  paymentMethodOptions,
  renameOptions,
  segments,
} from "../../constant/data";

const AddRuleComponent: React.FC = () => {
  const [ruleName, setRuleName] = React.useState<string>("");
  const [hide, setHide] = React.useState<boolean>(true);
  const [sort, setSort] = React.useState<boolean>(false);
  const [rename, setRename] = React.useState<boolean>(false);

  const [selectedSegments, setSelectedSegments] = React.useState<Segment[]>([]);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = React.useState<
    Segment[]
  >([]);

  const handleRenameToggle = (checked: boolean) => {
    setRename(checked);
    if (checked) {
      setSelectedPaymentMethod((prev) =>
        prev.map((method) => ({
          ...method,
          newName: method.value || "",
          newValue: method.value || "",
        }))
      );
    }
  };

  const handleSelect = (segmentId: string) => {
    const selected = segments.find((segment) => segment.id === segmentId);
    if (selected && !selectedSegments.some((seg) => seg.id === selected.id)) {
      setSelectedSegments((prev) => [...prev, selected]);
    }
  };

  const handleRemoveSegment = (segmentId: string) => {
    setSelectedSegments((prev) => prev.filter((seg) => seg.id !== segmentId));
  };

  const getSelectedContent = () => {
    if (selectedSegments.length === 0) {
      return (
        <BlockStack>
          <Text as="p">No conditions added yet.</Text>
        </BlockStack>
      );
    }

    return selectedSegments.map((segment) => (
      <BlockStack key={segment.id} gap={"200"}>
        <div style={{ position: "relative" }}>
          <Box>{segment.content}</Box>
          <div style={{ position: "absolute", top: 0, right: 0 }}>
            <Button
              onClick={() => handleRemoveSegment(segment.id)}
              variant="plain"
            >
              Remove
            </Button>
          </div>
        </div>
      </BlockStack>
    ));
  };

  return (
    <BlockStack gap={"300"}>
      <Box padding={"100"}>
        <Text as="h1" variant="headingMd">
          Add rule
        </Text>
      </Box>

      <SearchableListboxPopover
        segments={segments}
        onSelect={handleSelect}
        placeholder="Search customer segments"
        activatorNode={
          <Box>
            <Button variant="secondary" icon={PlusIcon}>
              Add a new condition
            </Button>
          </Box>
        }
      />

      <Card padding={"400"}>
        <BlockStack>
          <Text as="h2" variant="headingSm">
            Conditions
          </Text>
          <BlockStack gap={"400"}>{getSelectedContent()}</BlockStack>
        </BlockStack>
      </Card>

      <Card padding={"400"}>
        <Text as="h2" variant="headingSm">
          Rule settings
        </Text>
        <BlockStack gap={"200"}>
          <TextField
            label="Rule name"
            value={ruleName}
            onChange={(value) => setRuleName(value)}
            placeholder="Hide Cash on Delivery for international order"
            autoComplete="off"
          />
          <Text as="p">For internet use only</Text>
        </BlockStack>

        <Box paddingBlockStart="200">
          <BlockStack gap={"200"}>
            <Text as="p">Hide, sort or rename payment methods</Text>
            <BlockStack>
              <Checkbox
                label="Hide"
                checked={hide}
                onChange={(value) => setHide(value)}
              />
              <Checkbox
                label="Sort"
                disabled={selectedPaymentMethod.length === 0}
                checked={sort}
                onChange={(value) => setSort(value)}
              />
              <Checkbox
                label="Rename"
                disabled={selectedPaymentMethod.length === 0}
                checked={rename}
                onChange={(value) => handleRenameToggle(value)}
              />
            </BlockStack>

            <Box>
              <BlockStack gap={"200"}>
                <Text as="h1">Match conditions</Text>

                <BlockStack gap={"100"}>
                  <RadioButton
                    label="All"
                    helpText="Any of the specified conditions must be met."
                    checked={true}
                    id="disabled"
                    name="accounts"
                    onChange={() => {}}
                  />
                  <RadioButton
                    label="Any"
                    helpText="All specific conditions must be met."
                    id="optional"
                    name="accounts"
                    checked={false}
                    onChange={() => {}}
                  />
                </BlockStack>
              </BlockStack>
            </Box>
          </BlockStack>
        </Box>
      </Card>

      <Card padding={"400"}>
        <BlockStack gap={"200"}>
          <Text as="h2" variant="headingSm">
            Payment methods
          </Text>
          <Text as="p">
            Select from existing or type to add your payment method
          </Text>
          <Divider />

          {/* Render dynamic payment method fields */}
          {selectedPaymentMethod.length > 0 &&
            selectedPaymentMethod.map((paymentMethod, index) => (
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
                  {sort && (
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

                  {/* Input Field for Payment Method */}
                  <div style={{ flexGrow: 1 }}>
                    <SearchableListboxPopover
                      searchEnabled
                      segments={paymentMethodOptions}
                      onSelect={(id) => {
                        const selected = paymentMethodOptions.find(
                          (option) => option.id === id
                        );
                        if (selected) {
                          setSelectedPaymentMethod((prev) =>
                            prev.map((method, idx) =>
                              idx === index
                                ? {
                                    ...method,
                                    id: selected.id,
                                    label: selected.label,
                                  }
                                : method
                            )
                          );
                        }
                      }}
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

                  {/* Remove Button */}
                  <Button
                    variant="plain"
                    icon={XIcon}
                    onClick={() => {
                      setSelectedPaymentMethod((prev) =>
                        prev.filter((_, idx) => idx !== index)
                      );
                    }}
                  ></Button>
                </div>

                {rename && (
                  <div style={{ display: "flex", gap: "10px" }}>
                    <div style={{ width: "120px" }}>
                      <Select
                        label
                        options={renameOptions}
                        onChange={() => {}}
                        value={"0"}
                      />
                    </div>

                    <div style={{ flexGrow: 1 }}>
                      <TextField
                        label
                        autoComplete="on"
                        value={paymentMethod.value || ""}
                        onChange={(value) =>
                          setSelectedPaymentMethod((prev) =>
                            prev.map((method, idx) =>
                              idx === index
                                ? { ...method, newValue: value }
                                : method
                            )
                          )
                        }
                        placeholder="New payment name"
                      />
                    </div>

                    {/* Remove Button */}
                    <div style={{ width: "20px" }}></div>
                  </div>
                )}
              </>
            ))}

          <Divider />

          {/* Add New Payment Method Button */}
          <Button
            variant="secondary"
            icon={PlusIcon}
            onClick={() => {
              setSelectedPaymentMethod((prev) => [
                ...prev,
                { id: `${Date.now()}`, label: "", value: "" },
              ]);
            }}
          >
            Add or type a new payment method
          </Button>
        </BlockStack>
      </Card>

      <Card padding={"400"}>
        <Text as="h2">Status</Text>
        <BlockStack>
          <RadioButton
            label="Enabled"
            checked={true}
            id="disabled"
            name="accounts"
          />

          <RadioButton
            label="Disabled"
            id="optional"
            name="accounts"
            checked={false}
          />
        </BlockStack>
      </Card>

      <Box paddingBlock={"400"}>
        <InlineStack gap={"200"}>
          <Button variant="primary">Save</Button>
          <Button variant="secondary">Discard</Button>
        </InlineStack>
      </Box>
    </BlockStack>
  );
};

export default AddRuleComponent;
