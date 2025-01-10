import {
  AutoSelection,
  EmptySearchResult,
  Icon,
  Link,
  Listbox,
  Popover,
  Scrollable,
  TextField,
} from "@shopify/polaris";
import { SearchIcon } from "@shopify/polaris-icons";
import React, { useState } from "react";

export interface Segment {
  label: string;
  id: string;
  value: string;
  content?: React.ReactNode;
}

interface SearchableListboxPopoverProps {
  searchEnabled?: boolean;
  segments: Segment[];
  initialSelectedSegmentIndex?: number;
  onSelect?: (segmentId: string) => void;
  placeholder?: string;
  activatorNode?: React.ReactNode;
}

const SearchableListboxPopover: React.FC<SearchableListboxPopoverProps> = ({
  searchEnabled = false,
  segments,
  initialSelectedSegmentIndex = 0,
  onSelect,
  placeholder = "Search segments",
  activatorNode,
}) => {
  const [pickerOpen, setPickerOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedSegmentId, setSelectedSegmentId] = useState<string | null>(
    segments[initialSelectedSegmentIndex]?.id || null
  );
  const [filteredSegments, setFilteredSegments] =
    useState<(typeof segments)[number][]>(segments);

  const handleQueryChange = (query: string) => {
    setQuery(query);
    const nextFilteredSegments = segments.filter((segment) =>
      segment.label.toLowerCase().includes(query.toLowerCase().trim())
    );
    setFilteredSegments(nextFilteredSegments);
  };

  const handleQueryClear = () => handleQueryChange("");

  const handleSegmentSelect = (segmentId: string) => {
    setSelectedSegmentId(segmentId);
    const selectedSegment = segments.find(
      (segment) => segment.id === segmentId
    );
    if (selectedSegment) {
      onSelect?.(selectedSegment.id);
    }

    setPickerOpen(false);
    handleQueryChange("");
  };

  const togglePopover = () => setPickerOpen((prevState) => !prevState);

  const listboxId = "SearchableListboxInPopover";

  const activator = (
    <div style={{ width: "100%" }}>
      <Link monochrome removeUnderline onClick={togglePopover}>
        {activatorNode}
      </Link>
    </div>
  );

  const textFieldMarkup = searchEnabled ? (
    <div style={{ padding: "12px" }}>
      <TextField
        clearButton
        labelHidden
        placeholder={placeholder}
        value={query}
        prefix={<Icon source={SearchIcon} />}
        onChange={handleQueryChange}
        onClearButtonClick={handleQueryClear}
        label="Search"
        autoComplete="off"
      />
    </div>
  ) : null;

  const segmentOptions = query ? filteredSegments : segments;

  const segmentList =
    segmentOptions.length > 0
      ? segmentOptions.map(({ label, id, value }) => {
          const selected = selectedSegmentId === id; // Compare by id
          return (
            <Listbox.Option key={id} value={value} selected={selected}>
              <Listbox.TextOption selected={selected}>
                {label}
              </Listbox.TextOption>
            </Listbox.Option>
          );
        })
      : null;

  const noResultsMarkup = segmentOptions.length === 0 && (
    <EmptySearchResult
      title=""
      description={`No segments found matching "${query}"`}
    />
  );

  const listboxMarkup = (
    <Listbox
      enableKeyboardControl
      autoSelection={AutoSelection.FirstSelected}
      customListId={listboxId}
      onSelect={handleSegmentSelect}
    >
      {segmentList}
      {noResultsMarkup}
    </Listbox>
  );

  return (
    <div>
      <Popover
        active={pickerOpen}
        activator={activator}
        onClose={() => setPickerOpen(false)}
        fullWidth
      >
        <Popover.Pane fixed>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              paddingTop: searchEnabled ? "" : "12px",
              paddingBottom: "12px",
              maxHeight: "500px",
            }}
          >
            {textFieldMarkup}

            <Scrollable
              style={{
                position: "relative",
                width: "100%",
              }}
            >
              {listboxMarkup}
            </Scrollable>
          </div>
        </Popover.Pane>
      </Popover>
    </div>
  );
};

export default SearchableListboxPopover;
