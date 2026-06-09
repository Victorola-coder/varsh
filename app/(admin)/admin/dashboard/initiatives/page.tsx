import ResourceManager from "../_components/ResourceManager";
import { Field } from "../_components/fields";

const fields: Field[] = [
  { name: "title", label: "Title", required: true, inList: true },
  { name: "slug", label: "Slug", type: "slug", required: true, inList: true, help: "Used in the URL, e.g. 'walk-against-rape'." },
  { name: "description", label: "Description", type: "textarea", required: true },
  { name: "image", label: "Image", type: "image", required: true, help: "Path under /public, e.g. /images/init-1.jpg" },
  { name: "order", label: "Order", type: "number", inList: true },
  { name: "published", label: "Published", type: "boolean", inList: true },
];

export default function InitiativesPage() {
  return (
    <ResourceManager
      title="Featured Initiatives"
      description="The initiative cards shown on the homepage."
      endpoint="/api/admin/content/initiatives"
      fields={fields}
      singularLabel="initiative"
    />
  );
}
