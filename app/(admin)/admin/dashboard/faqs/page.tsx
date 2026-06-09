import ResourceManager from "../_components/ResourceManager";
import { Field } from "../_components/fields";

const fields: Field[] = [
  { name: "question", label: "Question", required: true, inList: true },
  { name: "answer", label: "Answer", type: "textarea", required: true },
  { name: "category", label: "Category", inList: true },
  { name: "order", label: "Order", type: "number", inList: true },
  { name: "published", label: "Published", type: "boolean", inList: true },
];

export default function FaqsPage() {
  return (
    <ResourceManager
      title="FAQs"
      description="Frequently asked questions."
      endpoint="/api/admin/content/faqs"
      fields={fields}
      singularLabel="FAQ"
    />
  );
}
