import { Segment } from "../components/popover-with-searchable-listbox";
import Condition01 from "../page/home-page/components/conditions/condition01";
import Condition02 from "../page/home-page/components/conditions/condition02";
import Condition03 from "../page/home-page/components/conditions/condition03";
import Condition04 from "../page/home-page/components/conditions/condition04";
import Condition05 from "../page/home-page/components/conditions/condition05";
import Condition06 from "../page/home-page/components/conditions/condition06";
import Condition07 from "../page/home-page/components/conditions/condition07";
import Condition08 from "../page/home-page/components/conditions/condition08";
import Condition09 from "../page/home-page/components/conditions/condition09";
import Condition10 from "../page/home-page/components/conditions/condition10";
import Condition12 from "../page/home-page/components/conditions/condition12";
import Condition13 from "../page/home-page/components/conditions/condition13";
import Condition14 from "../page/home-page/components/conditions/condition14";
import Condition15 from "../page/home-page/components/conditions/condition15";
import Condition16 from "../page/home-page/components/conditions/condition16";
import Condition17 from "../page/home-page/components/conditions/condition17";
import Condition18 from "../page/home-page/components/conditions/condition18";

export const segments = [
  {
    label: "New customers",
    id: "1",
    value: "1",
    content: <Condition01 />,
  },
  {
    label: "Abandoned carts - last 30 days",
    id: "2",
    value: "2",
    content: <Condition02 />,
  },
  {
    label: "Returning customers",
    id: "3",
    value: "3",
    content: <Condition03 />,
  },
  {
    label: "International customers",
    id: "4",
    value: "4",
    content: <Condition04 />,
  },
  {
    label: "Frequent shoppers",
    id: "5",
    value: "5",
    content: <Condition05 />,
  },
  {
    label: "Inactive customers",
    id: "6",
    value: "6",
    content: <Condition06 />,
  },
  {
    label: "One-time buyers",
    id: "7",
    value: "7",
    content: <Condition07 />,
  },
  {
    label: "Cart value over $100",
    id: "8",
    value: "8",
    content: <Condition08 />,
  },
  {
    label: "Purchase within last month",
    id: "9",
    value: "9",
    content: <Condition09 />,
  },
  {
    label: "High-spending customers",
    id: "10",
    value: "10",
    content: <Condition10 />,
  },
  {
    label: "Email subscribers",
    id: "11",
    value: "11",
    content: <Condition12 />,
  },
  {
    label: "Gift card users",
    id: "12",
    value: "12",
    content: <Condition13 />,
  },
  {
    label: "Loyalty members",
    id: "13",
    value: "13",
    content: <Condition14 />,
  },
  {
    label: "Abandoned cart over $50",
    id: "14",
    value: "14",
    content: <Condition15 />,
  },
  {
    label: "Discount code users",
    id: "15",
    value: "15",
    content: <Condition16 />,
  },
  {
    label: "Referral program users",
    id: "16",
    value: "16",
    content: <Condition17 />,
  },
  {
    label: "Bulk buyers",
    id: "17",
    value: "17",
    content: <Condition13 />,
  },
  {
    label: "Multiple payment methods",
    id: "18",
    value: "18",
    content: <Condition18 />,
  },
];

export const paymentMethodOptions: Segment[] = [
  {
    id: "1",
    value: "1",
    label: "Cash on Delivery",
  },
  {
    id: "2",
    value: "2",
    label: "Credit Card",
  },
  {
    id: "3",
    value: "3",
    label: "PayPal",
  },
  {
    id: "4",
    value: "4",
    label: "Bank Transfer",
  },
  {
    id: "5",
    value: "5",
    label: "Apple Pay",
  },
  {
    id: "6",
    value: "6",
    label: "Google Pay",
  },
  {
    id: "7",
    value: "7",
    label: "Cryptocurrency",
  },
  {
    id: "8",
    value: "8",
    label: "Mobile Money",
  },
  {
    id: "9",
    value: "9",
    label: "Cheque",
  },
  {
    id: "10",
    value: "10",
    label: "Direct Debit",
  },
  {
    id: "11",
    value: "11",
    label: "Prepaid Card",
  },
  {
    id: "12",
    value: "12",
    label: "Gift Card",
  },
];

export const renameOptions = [
  { label: "Replace with", value: "0" },
  { label: "Add before", value: "1" },
  { label: "Add after", value: "2" },
];
