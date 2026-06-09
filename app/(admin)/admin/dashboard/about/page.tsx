import SingletonEditor from "../_components/SingletonEditor";
import { Field } from "../_components/fields";

const fields: Field[] = [
  { name: "title", label: "Title", required: true },
  { name: "story", label: "Story", type: "textarea", required: true },
  { name: "stridesHeading", label: "Strides heading", type: "textarea", required: true, help: "Intro line above the bullet list of strides." },
  { name: "image", label: "Image", type: "image", required: true },
];

export default function AboutPage() {
  return (
    <SingletonEditor
      title="About / Story"
      description="The VARSH Foundation story section. (Manage the bullet points under it in “Strides”.)"
      endpoint="/api/admin/site/about"
      fields={fields}
    />
  );
}
