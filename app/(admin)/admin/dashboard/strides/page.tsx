import ResourceManager from "../_components/ResourceManager";
import { Field } from "../_components/fields";

const fields: Field[] = [
  { name: "label", label: "Label", required: true, inList: true, help: "Highlighted word, e.g. Education" },
  { name: "text", label: "Text", type: "textarea", required: true, inList: true },
  { name: "order", label: "Order", type: "number", inList: true },
];

export default function StridesPage() {
  return (
    <ResourceManager
      title="Strides"
      description="The bullet points under the VARSH Foundation story."
      endpoint="/api/admin/content/strides"
      fields={fields}
      singularLabel="stride"
    />
  );
}
