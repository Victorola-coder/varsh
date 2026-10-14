import SingletonEditor from "../_components/SingletonEditor";
import { Field } from "../_components/fields";

const fields: Field[] = [
  { name: "intro", label: "Intro paragraph", type: "textarea", required: true },
  { name: "impact", label: "Your Impact bullets", type: "list", help: "One per line" },
  { name: "bankName", label: "Bank name" },
  { name: "accountName", label: "Account name" },
  { name: "accountNumber", label: "Account number" },
  { name: "inKind", label: "In-kind donations copy", type: "textarea" },
  { name: "corporate", label: "Corporate partnerships copy", type: "textarea" },
];

export default function DonatePageEditor() {
  return (
    <SingletonEditor
      title="Donate Page"
      description="Copy and bank details on /donate. Donation FAQs live under FAQs with the category “Donations”."
      endpoint="/api/admin/site/donate"
      fields={fields}
    />
  );
}
