export interface Condition {
  label: string;
  id: string;
  value: string;
  content?: React.ReactNode;
}

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
  conditions: Condition[];
  paymentMethods: PaymentMethod[];
}

export type MatchConditionType = "All" | "Any";
export type StatusType = "Enabled" | "Disabled";
