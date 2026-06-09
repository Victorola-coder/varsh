import SubmissionsTable, { Column } from "../_components/SubmissionsTable";

const columns: Column[] = [
  { key: "email", label: "Email" },
  { key: "active", label: "Active", type: "boolean" },
  { key: "createdAt", label: "Subscribed", type: "date" },
];

export default function SubscribersPage() {
  return (
    <SubmissionsTable
      title="Newsletter Subscribers"
      description="People subscribed to the newsletter."
      endpoint="/api/admin/submissions/subscribers"
      columns={columns}
    />
  );
}
