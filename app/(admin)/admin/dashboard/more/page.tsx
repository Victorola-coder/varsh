import SingletonEditor from "../_components/SingletonEditor";
import { Field } from "../_components/fields";

const fields: Field[] = [
  { name: "heading", label: "Heading", required: true },
  { name: "body", label: "Body", type: "textarea", required: true },
  { name: "ctaLabel", label: "Button label", required: true },
  { name: "ctaHref", label: "Button link", required: true, help: "e.g. /about" },
  { name: "image", label: "Image", type: "image", required: true },
];

export default function MorePage() {
  return (
    <SingletonEditor
      title="Intro band"
      description="The image + text band below the hero on the homepage."
      endpoint="/api/admin/site/more"
      fields={fields}
    />
  );
}
