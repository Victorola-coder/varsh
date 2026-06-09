import ResourceManager from "../_components/ResourceManager";
import { Field } from "../_components/fields";

const fields: Field[] = [
  { name: "name", label: "Name", required: true, inList: true },
  { name: "role", label: "Role", required: true, inList: true },
  { name: "bio", label: "Bio", type: "textarea" },
  { name: "image", label: "Photo", type: "image" },
  { name: "order", label: "Order", type: "number", inList: true },
  { name: "published", label: "Published", type: "boolean", inList: true },
];

export default function TeamPage() {
  return (
    <ResourceManager
      title="Team"
      description="Team members shown on the About page."
      endpoint="/api/admin/content/team"
      fields={fields}
      singularLabel="member"
    />
  );
}
