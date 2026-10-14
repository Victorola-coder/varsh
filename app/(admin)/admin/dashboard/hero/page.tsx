import SingletonEditor from "../_components/SingletonEditor";
import { Field } from "../_components/fields";

const fields: Field[] = [
  { name: "eyebrow", label: "Eyebrow", help: "Small pill above the headline" },
  { name: "heading", label: "Heading", required: true },
  { name: "subheading", label: "Subheading", type: "textarea", required: true },
  { name: "ctaLabel", label: "Button label", required: true },
  { name: "ctaHref", label: "Button link", required: true, help: "e.g. /donate" },
  { name: "ctaLabel2", label: "Second button label", help: "Optional ghost button" },
  { name: "ctaHref2", label: "Second button link", help: "e.g. /projects" },
  { name: "image", label: "Background image", type: "image", required: true },
];

export default function HeroPage() {
  return (
    <SingletonEditor
      title="Hero"
      description="The top banner on the homepage."
      endpoint="/api/admin/site/hero"
      fields={fields}
    />
  );
}
