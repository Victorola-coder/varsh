import Link from "next/link";
import Image from "next/image";

const footerLinks = {
  about: {
    title: "About",
    links: [
      { name: "Who We Are", href: "/about" },
      { name: "Our Team", href: "/about#team" },
      { name: "Our Mission", href: "/about#mission" },
    ],
  },
  projects: {
    title: "Projects",
    links: [
      { name: "Reach Every Child", href: "/projects#rech" },
      { name: "Girls Talk", href: "/projects#girls-talk" },
      { name: "Walk Against Rape", href: "/projects#walk-against-rape" },
      { name: "School Outreaches", href: "/projects#school-outreaches" },
    ],
  },
  getInvolved: {
    title: "Get Involved",
    links: [
      { name: "Donate", href: "/get-involved#donate" },
      { name: "Become a Member", href: "/get-involved#become-member" },
      { name: "Join a Campus Club", href: "/clubs" },
      { name: "FAQs", href: "/faqs" },
    ],
  },
  connect: {
    title: "Connect",
    links: [
      { name: "Blog", href: "/blog" },
      { name: "Contact Us", href: "/contact" },
      { name: "Feedback", href: "/feedback" },
      { name: "Newsletter", href: "/#newsletter" },
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
    <footer className="bg-white px-4 md:px-8 lg:px-[50px] py-[64px]">
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
            Together for a safer, more equal world - Free from sexual abuse.
            VARSH Foundation is committed to creating a society where every
            individual is safe from sexual abuse, child abuse, and gender
            discrimination.
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

      <div className="mt-12 pt-6 border-t border-gray-200">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-[#1D1D1D]/70 text-sm">
            &copy; {new Date().getFullYear()} VARSH Foundation. All rights
            reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link
              href="/privacy-policy"
              className="text-[#1D1D1D]/70 hover:text-[#FF3600] transition-colors text-sm"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="text-[#1D1D1D]/70 hover:text-[#FF3600] transition-colors text-sm"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
