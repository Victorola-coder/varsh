import ResourceManager from "../_components/ResourceManager";
import { Field } from "../_components/fields";

const fields: Field[] = [
  { name: "title", label: "Title", required: true, inList: true },
  { name: "slug", label: "Slug", required: true, help: "e.g. understanding-consent" },
  { name: "excerpt", label: "Excerpt", type: "textarea", required: true },
  { name: "content", label: "Body", type: "textarea", help: "HTML. Leave blank if the article lives off-site." },
  { name: "url", label: "External link", help: "e.g. the Medium URL" },
  { name: "author", label: "Author", inList: true },
  { name: "category", label: "Category", inList: true },
  { name: "image", label: "Cover image", type: "image" },
  { name: "date", label: "Published date", type: "date", inList: true },
  { name: "order", label: "Order", type: "number" },
  { name: "published", label: "Published", type: "boolean", inList: true },
];

export default function BlogPage() {
  return (
    <ResourceManager
      title="Blog"
      description="Articles listed on the public blog page."
      endpoint="/api/admin/content/blog"
      fields={fields}
      singularLabel="post"
    />
  );
}
