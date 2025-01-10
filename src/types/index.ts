export interface Segment {
  label: string;
  id: string;
  value: string;
  content?: React.ReactNode;
}

export interface Rule {
  id: string; // Unique identifier for the rule
  ruleName: string;
  hide: boolean;
  sort: boolean;
  rename: boolean;
  matchCondition: "All" | "Any"; // The match condition for the rule
  segments: Segment[]; // List of selected segments/conditions
  paymentMethods: PaymentMethod[]; // List of selected payment methods
  status: "Enabled" | "Disabled"; // Status of the rule
}

export interface PaymentMethod {
  id: string; // Unique identifier for each payment method
  label: string; // Label for the payment method
  value: string; // Original value (e.g., "Cash on Delivery")
  newValue?: string; // New value if renamed
  sortOrder?: string; // Order if sorting is enabled
  renameEnabled: boolean; // Flag to indicate if renaming is enabled
}
