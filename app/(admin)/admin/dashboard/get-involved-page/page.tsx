import SingletonEditor from "../_components/SingletonEditor";
import { Field } from "../_components/fields";

const fields: Field[] = [
  { name: "intro", label: "Intro paragraph", type: "textarea", required: true },
  { name: "closing", label: "Closing paragraph", type: "textarea" },
];

export default function GetInvolvedPageEditor() {
  return (
    <SingletonEditor
      title="Get Involved Page"
      description="Intro and closing copy on /get-involved."
      endpoint="/api/admin/site/getInvolved"
      fields={fields}
    />
  );
}
