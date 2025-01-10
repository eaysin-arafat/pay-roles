import { Combobox, Icon, Listbox, TextField } from "@shopify/polaris";
import { SearchIcon } from "@shopify/polaris-icons";
import React, { useState } from "react";

interface SearchableSelectProps {
  options: { label: string; value: string }[];
  onSelect: (value: string) => void;
  placeholder?: string;
}

const SearchableSelect: React.FC<SearchableSelectProps> = ({
  options,
  onSelect,
  placeholder = "Search or select",
}) => {
  const [inputValue, setInputValue] = useState("");
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleInputChange = (value: string) => {
    setInputValue(value);
  };

  const handleOptionSelect = (value: string) => {
    setSelectedOption(value);
    onSelect(value);
    setInputValue("");
  };

  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(inputValue.toLowerCase())
  );

  const optionsMarkup = filteredOptions.length ? (
    filteredOptions.map((option) => (
      <Listbox.Option
        key={option.value}
        value={option.value}
        selected={selectedOption === option.value}
        accessibilityLabel={option.label}
      >
        {option.label}
      </Listbox.Option>
    ))
  ) : (
    <Listbox.Option value="no_results" disabled>
      No results found
    </Listbox.Option>
  );

  return (
    <Combobox
      activator={
        <TextField
          label="Search or select" // Required for accessibility
          placeholder={placeholder}
          value={inputValue}
          onChange={handleInputChange}
          prefix={<Icon source={SearchIcon} />}
          autoComplete="off"
        />
      }
    >
      <Listbox onSelect={handleOptionSelect}>{optionsMarkup}</Listbox>
    </Combobox>
  );
};

export default SearchableSelect;
