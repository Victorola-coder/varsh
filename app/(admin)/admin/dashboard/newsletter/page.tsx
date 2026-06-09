import SingletonEditor from "../_components/SingletonEditor";
import { Field } from "../_components/fields";

const fields: Field[] = [
  { name: "badge", label: "Badge", required: true, help: "Small pill above the heading." },
  { name: "heading", label: "Heading", required: true },
  { name: "body", label: "Body", type: "textarea", required: true },
  { name: "bullets", label: "Bullet points", type: "list", help: "One per line." },
];

export default function NewsletterPage() {
  return (
    <SingletonEditor
      title="Newsletter section"
      description="Copy for the newsletter sign-up section on the homepage."
      endpoint="/api/admin/site/newsletter"
      fields={fields}
    />
  );
}
