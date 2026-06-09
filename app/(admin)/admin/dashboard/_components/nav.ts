export type NavLink = { href: string; label: string };
export type NavSection = { title: string; links: NavLink[] };

const base = "/admin/dashboard";

export const navSections: NavSection[] = [
  {
    title: "Overview",
    links: [{ href: base, label: "Overview" }],
  },
  {
    title: "Homepage",
    links: [
      { href: `${base}/hero`, label: "Hero" },
      { href: `${base}/more`, label: "Intro band" },
      { href: `${base}/about`, label: "About / Story" },
      { href: `${base}/newsletter`, label: "Newsletter" },
    ],
  },
  {
    title: "Content",
    links: [
      { href: `${base}/initiatives`, label: "Initiatives" },
      { href: `${base}/thematic-areas`, label: "Thematic Areas" },
      { href: `${base}/reach-stats`, label: "Reach Stats" },
      { href: `${base}/strides`, label: "Strides" },
      { href: `${base}/team`, label: "Team" },
      { href: `${base}/projects`, label: "Projects" },
      { href: `${base}/faqs`, label: "FAQs" },
      { href: `${base}/clubs`, label: "Campus Clubs" },
    ],
  },
  {
    title: "Submissions",
    links: [
      { href: `${base}/donations`, label: "Donations" },
      { href: `${base}/contacts`, label: "Contact Messages" },
      { href: `${base}/subscribers`, label: "Subscribers" },
    ],
  },
];
