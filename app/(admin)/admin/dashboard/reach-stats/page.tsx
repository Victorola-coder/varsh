import ResourceManager from "../_components/ResourceManager";
import { Field } from "../_components/fields";

const fields: Field[] = [
  { name: "number", label: "Number", required: true, inList: true, help: "e.g. 85,000+" },
  { name: "label", label: "Label", required: true, inList: true },
  { name: "description", label: "Description", type: "textarea", required: true },
  { name: "order", label: "Order", type: "number", inList: true },
];

export default function ReachStatsPage() {
  return (
    <ResourceManager
      title="Reach Stats"
      description="The “Our Reach” impact numbers on the homepage."
      endpoint="/api/admin/content/reach-stats"
      fields={fields}
      singularLabel="stat"
    />
  );
}
