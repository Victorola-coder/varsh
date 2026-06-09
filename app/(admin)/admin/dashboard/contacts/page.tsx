import SubmissionsTable, { Column } from "../_components/SubmissionsTable";

const columns: Column[] = [
  { key: "name", label: "Name" },
  { key: "email", label: "Email" },
  { key: "subject", label: "Subject" },
  { key: "message", label: "Message" },
  { key: "read", label: "Read", type: "boolean" },
  { key: "createdAt", label: "Date", type: "date" },
];

export default function ContactsPage() {
  return (
    <SubmissionsTable
      title="Contact Messages"
      description="Messages submitted through the contact form."
      endpoint="/api/admin/submissions/contacts"
      columns={columns}
    />
  );
}
