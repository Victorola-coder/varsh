import SubmissionsTable, { Column } from "../_components/SubmissionsTable";

const columns: Column[] = [
  { key: "amount", label: "Amount", type: "currency" },
  { key: "frequency", label: "Frequency" },
  { key: "name", label: "Name" },
  { key: "email", label: "Email" },
  { key: "status", label: "Status" },
  { key: "anonymous", label: "Anonymous", type: "boolean" },
  { key: "message", label: "Message" },
  { key: "createdAt", label: "Date", type: "date" },
];

export default function DonationsPage() {
  return (
    <SubmissionsTable
      title="Donations"
      description="Donation pledges from the site. No payment gateway is connected yet, so these are intents to give — not received payments."
      endpoint="/api/admin/submissions/donations"
      columns={columns}
    />
  );
}
