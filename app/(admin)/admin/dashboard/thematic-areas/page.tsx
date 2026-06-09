import ResourceManager from "../_components/ResourceManager";
import { Field } from "../_components/fields";

const fields: Field[] = [
  { name: "title", label: "Title", required: true, inList: true },
  { name: "content", label: "Content", type: "textarea", required: true },
  { name: "icon", label: "Icon", type: "image", required: true, help: "Path under /public, e.g. /images/gender.svg" },
  { name: "order", label: "Order", type: "number", inList: true },
  { name: "published", label: "Published", type: "boolean", inList: true },
];

export default function ThematicAreasPage() {
  return (
    <ResourceManager
      title="Thematic Areas"
      description="The “Our Thematic Areas” cards on the homepage."
      endpoint="/api/admin/content/thematic-areas"
      fields={fields}
      singularLabel="area"
    />
  );
}
