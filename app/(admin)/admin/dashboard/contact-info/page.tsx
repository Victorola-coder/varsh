import SingletonEditor from "../_components/SingletonEditor";
import { Field } from "../_components/fields";

const fields: Field[] = [
  { name: "email", label: "Email address", required: true },
  { name: "phone", label: "Phone", help: "Leave blank to hide it on the site" },
  { name: "address", label: "Address" },
  { name: "facebook", label: "Facebook URL", help: "Leave blank to hide the icon" },
  { name: "twitter", label: "X / Twitter URL" },
  { name: "instagram", label: "Instagram URL" },
  { name: "youtube", label: "YouTube URL" },
  { name: "linkedin", label: "LinkedIn URL" },
];

export default function ContactInfoPage() {
  return (
    <SingletonEditor
      title="Contact Details"
      description="Email, phone, address and social links shown on the contact page."
      endpoint="/api/admin/site/contact"
      fields={fields}
    />
  );
}
