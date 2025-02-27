import Link from "next/link";
import Image from "next/image";

const footerLinks = {
  about: {
    title: "About",
    links: [
      { name: "Who are we", href: "/about" },
      { name: "Where we work", href: "/about/work" },
      { name: "What we do", href: "/about/mission" },
    ],
  },
  resources: {
    title: "Resources",
    links: [
      { name: "Media Center", href: "/resources/media" },
      { name: "Publications", href: "/resources/publications" },
      { name: "Policy", href: "/resources/policy" },
    ],
  },
  getInvolved: {
    title: "Get Involved",
    links: [
      { name: "Join", href: "/join" },
      { name: "Take Action", href: "/take-action" },
      { name: "Volunteer", href: "/volunteer" },
    ],
  },
  latest: {
    title: "Latest",
    links: [
      { name: "News", href: "/news" },
      { name: "Campaigns", href: "/campaigns" },
      { name: "Research", href: "/research" },
    ],
  },
};

const socialLinks = [
  {
    name: "Facebook",
    icon: "/icons/facebook.svg",
    href: "https://facebook.com",
  },
  {
    name: "Instagram",
    icon: "/icons/instagram.svg",
    href: "https://instagram.com",
  },
  { name: "Twitter", icon: "/icons/twitter.svg", href: "https://twitter.com" },
  { name: "YouTube", icon: "/icons/youtube.svg", href: "https://youtube.com" },
];

export default function Footer() {
  return (
    <footer className="bg-white px-[50px] py-[64px]">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Logo and Description Section */}
        <div className="md:col-span-3">
          <Link href="/">
            <Image
              src="/images/logo.svg"
              alt="VARSH Foundation"
              width={150}
              height={60}
              className="mb-4"
            />
          </Link>
          <p className="text-[#1D1D1D]/70 text-sm leading-relaxed mb-6">
            Lorem ipsum dolor sit amet consectetur. Sit eget tempor pulvinar
            dictum. Cras pellentesque amet mauris rhoncus libero odio faucibus
            nunc.
          </p>
          <div className="space-y-2">
            <h4 className="text-sm font-medium text-[#1D1D1D] mb-3">
              Follow Us
            </h4>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#FF3600] hover:opacity-80 transition-opacity"
                >
                  <Image
                    src={social.icon}
                    alt={social.name}
                    width={24}
                    height={24}
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Links Sections */}
        {Object.entries(footerLinks).map(([key, section]) => (
          <div key={key} className="md:col-span-2">
            <h3 className="text-[#1D1D1D] font-bold text-lg mb-4">
              {section.title}
            </h3>
            <ul className="space-y-3">
              {section.links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[#1D1D1D]/70 hover:text-[#FF3600] transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
}
