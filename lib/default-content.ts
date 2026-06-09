/**
 * Default website content. Single source of truth used both to seed the
 * database and as a graceful fallback for the public site when the DB is
 * empty or unreachable (e.g. before the first migration/seed).
 */

export type Hero = {
  heading: string;
  subheading: string;
  ctaLabel: string;
  ctaHref: string;
  image: string;
};

export type MoreBand = {
  heading: string;
  body: string;
  ctaLabel: string;
  ctaHref: string;
  image: string;
};

export type About = {
  title: string;
  story: string;
  stridesHeading: string;
  image: string;
};

export type Newsletter = {
  badge: string;
  heading: string;
  body: string;
  bullets: string[];
};

export const heroDefault: Hero = {
  heading: "Reach One, Reach All",
  subheading: "Together for a safer, More equal world - Free from sexual abuse",
  ctaLabel: "Donate",
  ctaHref: "/donate",
  image: "/images/hero.png",
};

export const moreDefault: MoreBand = {
  heading: "Together for a Safer, More Equal World - Free From Sexual Abuse.",
  body: "For many years, the issue of sexual abuse has lingered in the shadows, often silenced by fear, stigma and societal indifference. In response to this pressing concern, VARSH Foundation emerged as a beacon of hope and change, dedicated to creating a world that is safer, more equitable and free from the scourge of sexual abuse.",
  ctaLabel: "Learn More",
  ctaHref: "/about",
  image: "/images/SEC2.png",
};

export const aboutDefault: About = {
  title: "VARSH FOUNDATION",
  story:
    'VARSH Foundation was founded in 2019 by a group of passionate and determined individuals led by Salvation Grace, who recognised the urgent need to address and combat sexual abuse and gender-based violence in our society. The name VARSH, albeit an acronym for Voices Against Rape and Sexual Harassment, is a Sanskrit word meaning "rain." This signifies a refreshing and cleansing force, much like the transformative impact the foundation aspires to have on society.',
  stridesHeading:
    "Over the years, VARSH Foundation has made significant strides in its fight against sexual abuse:",
  image: "/images/SEC3.png",
};

export const newsletterDefault: Newsletter = {
  badge: "Join Our Community",
  heading: "Never Miss an Update",
  body: "Subscribe to our newsletter to receive the latest news, impact stories, and upcoming events directly to your inbox.",
  bullets: [
    "Monthly impact reports",
    "Exclusive event invitations",
    "Volunteer opportunities",
  ],
};

export type InitiativeItem = {
  title: string;
  slug: string;
  description: string;
  image: string;
};

export const initiativesDefault: InitiativeItem[] = [
  { title: "Reach Every Child", slug: "reach", image: "/images/init-3.png", description: "Empowering children with knowledge, confidence, and the tools to stand against sexual violence." },
  { title: "Girl's Talk", slug: "girls-talk", image: "/images/init-4.jpg", description: "Creating safe spaces where girls can share, learn, and lead conversations on empowerment and rights." },
  { title: "The Top Girls Mentorship Initiative", slug: "top-girls", image: "/images/init-5.jpg", description: "Empowering young girls to become confident, capable leaders, and guiding them to pursue their dreams and create meaningful change." },
  { title: "Project Safe Communities", slug: "safe-communities", image: "/images/init-2.jpg", description: "Building safer campuses and communities through advocacy, education, and grassroots action." },
  { title: "Walk against Rape", slug: "walk-against-rape", image: "/images/init-1.jpg", description: "We create awareness on sexual and gender-based violence through advocacy walks aimed at sensitizing people on SGBV and its effects in society." },
  { title: "Love on the Street( LOTS)", slug: "love-on-the-street", image: "/images/init-6.jpg", description: "Love on the Street is one of our charity initiatives aimed at spreading love and reaching out to children in underserved communities." },
];

export type ThematicAreaItem = { title: string; content: string; icon: string };

export const thematicAreasDefault: ThematicAreaItem[] = [
  { title: "Gender Equality and Inclusion", icon: "/images/gender.svg", content: "We are dedicated to promoting gender equality and addressing power imbalances that perpetuate gender based violence and discrimination. Our programs seek to eliminate gender based violence, prejudice, challenge harmful preconceptions, and create inclusive environments in which all people can thrive. This pledge is consistent with SDG 5: Achieving gender equality and empowering all women and girls." },
  { title: "Child Rights and protection", icon: "/images/connect.svg", content: "We are committed to fighting child sexual abuse and promoting adequate sex education for adolescents. Our mission is to protect children's rights and well-being by advocating for their safety, education, and development, as well as ensuring that they are not abused, exploited, or neglected. Our efforts align with SDG 16.2: End child abuse, exploitation, trafficking, and all forms of violence and torture." },
  { title: "Peace and Justice", icon: "/images/shield.svg", content: "We work to create peaceful, just, and inclusive societies by increasing access to justice and strengthening institutions. To promote human rights and the rule of law, we engage in legal advocacy, community participation, and policy change. This aligns with SDG 16: Promote peaceful and inclusive societies for sustainable development, offer access to justice for everyone, and build effective, responsible, and inclusive institutions at all levels." },
  { title: "Charity", icon: "/images/heart.svg", content: "Compassion drives our charitable initiatives aimed at supporting children and women in undeserved communities and supporting out of school girls with the initiative to bring them back to school. We provide essential services and aids to survivors of SGBV and those in need, contributing to SDG 1: End poverty in all its forms everywhere." },
];

export type ReachStatItem = { number: string; label: string; description: string };

export const reachStatsDefault: ReachStatItem[] = [
  { number: "85,000+", label: "Lives Impacted", description: "Individuals reached through our programs and initiatives" },
  { number: "37+", label: "Communities", description: "Local communities where we have active programs" },
  { number: "11", label: "University Clubs", description: "Campus clubs spreading awareness in universities" },
  { number: "250+", label: "Volunteers", description: "Dedicated volunteers working with us across Nigeria" },
];

export type StrideItem = { label: string; text: string };

export const stridesDefault: StrideItem[] = [
  { label: "Education", text: "We have reached thousands of individuals through awareness programs and training sessions." },
  { label: "Counselling", text: "Our support has helped survivors regain confidence and rebuild their lives." },
  { label: "Policy Impact", text: "We have contributed to the development of policies that protect the rights of survivors and address sexual abuse." },
];
