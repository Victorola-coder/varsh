import ResourceManager from "../_components/ResourceManager";
import { Field } from "../_components/fields";

const fields: Field[] = [
  { name: "title", label: "Title", required: true, inList: true },
  { name: "slug", label: "Slug", type: "slug", required: true, inList: true },
  { name: "summary", label: "Summary", type: "textarea" },
  { name: "content", label: "Content", type: "textarea" },
  { name: "image", label: "Image", type: "image" },
  { name: "date", label: "Date", type: "date" },
  { name: "order", label: "Order", type: "number", inList: true },
  { name: "published", label: "Published", type: "boolean", inList: true },
];

export default function ProjectsPage() {
  return (
    <ResourceManager
      title="Projects"
      description="Projects and programmes."
      endpoint="/api/admin/content/projects"
      fields={fields}
      singularLabel="project"
    />
  );
}
