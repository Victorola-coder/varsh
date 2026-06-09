import ResourceManager from "../_components/ResourceManager";
import { Field } from "../_components/fields";

const fields: Field[] = [
  { name: "name", label: "Institution name", required: true, inList: true },
  { name: "university", label: "Full institution name", required: true, help: "Used for the full official name." },
  { name: "clubName", label: "Club name", inList: true, help: "e.g. VARSH OAU Club" },
  { name: "location", label: "Location", inList: true },
  { name: "imageUrl", label: "Image", type: "image", help: "Path under /public, e.g. /images/clubs/oau.png" },
  { name: "coordinator", label: "Coordinator", inList: true },
  { name: "phone", label: "Phone" },
  { name: "email", label: "Email" },
  { name: "description", label: "Description", type: "textarea" },
  { name: "order", label: "Order", type: "number", inList: true },
  { name: "published", label: "Published", type: "boolean", inList: true },
];

export default function ClubsPage() {
  return (
    <ResourceManager
      title="Campus Clubs"
      description="University clubs and their coordinators."
      endpoint="/api/admin/content/clubs"
      fields={fields}
      singularLabel="club"
    />
  );
}
