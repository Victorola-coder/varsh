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

// ---------------------------------------------------------------------------
// About page — team, patrons and legal
// ---------------------------------------------------------------------------

/** Which block a person appears under on the About page. */
export type TeamGroup = "team" | "patrons" | "legal";

export type TeamMemberItem = {
  name: string;
  role: string;
  group: TeamGroup;
  bio?: string | null;
  image?: string | null;
};

export const teamDefault: TeamMemberItem[] = [
  {
    name: "Aworanti Salvation Grace",
    role: "Executive Director",
    group: "team",
    image: "/images/team/salvation.JPG",
    bio: "Aworanti Salvation Grace is the founder and team lead at VARSH Foundation. She is a project manager, humanitarian, environmental activist, and gender expert who embodies responsive leadership and a commitment to positive change. Salvation Grace passionately advocates for sustainable development and works tirelessly to combat gender-based violence and discrimination through various initiatives that empower young girls and women. A visionary leader, she also organises the annual Ila Orangun Youth Conference, nurturing future leaders in her community. A recognised trailblazer, Salvation Grace has received multiple awards for her dedication to creating a brighter future for vulnerable populations. She graduated from the Department of Philosophy at Obafemi Awolowo University, Ile-Ife.",
  },
  {
    name: "Adesewa Oladipo",
    role: "Administrative Secretary",
    group: "team",
    image: "/images/team/adesewa.JPG",
    bio: "Adesewa Oladipo is the Administrative Secretary at VARSH Foundation, where she oversees office operations, coordinates meetings and events, manages records, and supports both staff and stakeholders. With a degree in Microbiology from the Federal University of Agriculture, Abeokuta, Adesewa's passion for storytelling drew her beyond the lab to the world of photography. As a professional photographer and photo editor, she uses her creative lens to capture powerful images that drive awareness and inspire change, particularly on issues affecting women and girls. A natural leader with a strong record of service, Adesewa is a storyteller, an advocate, and a changemaker.",
  },
  {
    name: "Akande Michael, O",
    role: "Director of Finance and Fundraising",
    group: "team",
    image: "/images/team/akande.jpg",
    bio: "Akande Michael is a highly skilled social analyst, adept business manager, versatile administrator, accomplished media expert, advocate, and humanitarian committed to serving humanity. He completed his Business Management and Administration studies at Osun State Polytechnic and earned a Diploma in Food and Beverages Management from Universita Bocconi. His professional ambitions are centred within the hospitality industry, and he demonstrates a fervent dedication to growth and development. Michael currently serves as the Director of Finance and Fundraising at VARSH Foundation and is the CEO of Kamis Cuisine. He possesses formidable competencies in project execution, critical thinking, risk management, and problem-solving.",
  },
  {
    name: "Ferosayemi Faith Ogunbona",
    role: "Volunteers Manager",
    group: "team",
    image: "/images/team/fero.JPG",
    bio: "Ferosayemi Faith Ogunbona is a Microbiology graduate of the prestigious Olabisi Onabanjo University. A writer and blogger, she creatively transforms personal experiences into soothing words that resonate with readers. Beyond her creative pursuits, Ferosayemi is a dedicated educator, an avid reader, and a child enthusiast. Her passion for positive affirmations and declarations is a cornerstone of her life. As a volunteer and member, she serves as the Volunteers Director at VARSH Foundation.",
  },
  {
    name: "Hassanat Adebowale",
    role: "Director of Media, Communications and Publicity",
    group: "team",
    image: "/images/team/asanat.jpg",
    bio: "Hassanat Adebowale is a law graduate of the prestigious Obafemi Awolowo University. With a passion for literature and a talent for versatile content and technical writing, she has received recognition as an accomplished essayist. In her role, Hassanat combines her legal expertise with her communication skills to craft impactful messages that promote the organisation's mission and advocate for positive community change. With a solid dedication to professional growth and development, Hassanat excels in project management, critical thinking, and creative problem-solving.",
  },
  {
    name: "Shonibare Temitope Emmanuel",
    role: "Director of Human Resources",
    group: "team",
    image: "/images/team/temitope-hr.JPG",
    bio: "Shonibare Temitope Emmanuel is an advocate for gender equality, education, and climate action. He currently serves as the Director of Human Resources at VARSH Foundation, where he has helped drive recruitment and community engagement. Emmanuel is passionate about creating educational opportunities for marginalised youth. As a storyteller, his poetry and non-fiction explore themes like love, family, sexuality, grief, and mental health. A fashion enthusiast and designer, he promotes sustainable fashion practices like upcycling. Recognised for his climate work at the Climate Voices Nigeria Boot Camp, Emmanuel is committed to inspiring self-acceptance and authenticity.",
  },
  {
    name: "Chidiebere Nnadiegbulam",
    role: "Monitoring and Evaluation Officer",
    group: "team",
    image: "/images/team/chidi.jpg",
    bio: "Chidiebere Nnadiegbulam is an experienced geospatial professional known for his creativity and visualisation abilities. Over the past decade, he has significantly contributed to environmental sustainability and humanitarian efforts through dedicated mentorship at the International Federation of Surveyors (FIG) and environmental protection projects. Chidiebere is dedicated to driving innovations and making a lasting impact through cutting-edge geospatial technologies and community-focused initiatives. When not working, he enjoys exploring the wonders of God's creation in nature, which continually fuels his creativity and passion.",
  },
  {
    name: "Barnabas Benjamin-Iorguma",
    role: "Director of Campus Interventions",
    group: "team",
    image: "/images/team/barnabas.jpg",
    bio: "Barnabas Benjamin-Iorguma is the Director of Campus Interventions and an active member of the VARSH Foundation, where he works to create an abuse-free society. He also serves as Managing Editor for the International Food Heroes Agency (IFHA) and Drum Majors for Peace. Barnabas, the Founder and Editor of Consolidation Blog, writes about leadership, security, and social issues. He is a Fellow of the World Institute for Peace (FWIP) and a 2024 Kectil Colleague who volunteers for organisations like Junior Achievement Nigeria, Rotaract Club, and Raising Stars Africa. His interests include volunteering, civic responsibility, research, and entrepreneurship.",
  },
  {
    name: "Joshua Oluwadamilola Precious",
    role: "Director of Projects and Programs",
    group: "team",
    image: "/images/team/damilola-pos.JPG",
    bio: "Joshua Oluwadamilola Precious is the Director of Projects and Programs at VARSH Foundation, a passionate advocate for gender equality and sustainable development. She is committed to challenging harmful norms and ending violence that hinders social progress, using advocacy and community development as tools for change. With extensive experience in volunteering, mobilizing support, and leading impactful projects, Precious is known for developing creative, innovative solutions that advance social justice, promote gender equality, and drive sustainable development in communities.",
  },
  {
    name: "Dorcas Oluwatosin Ajala",
    role: "Director of Operations",
    group: "team",
    image: "/images/team/dop.jpg",
    bio: "Dorcas Oluwatosin Ajala holds a degree in Public Health from Osun State University and is passionate about advocating against gender-based violence, as well as promoting youth, maternal, and child health. She is an active member of the VARSH Club at UNIOSUN and a dedicated volunteer with the VARSH Foundation. Beyond advocacy, Dorcas is also an entrepreneur who enjoys cooking, traveling, and connecting with like-minded people. Known for her inquisitive nature and love for teaching, she is always eager to learn, grow, and develop new skills. Her journey is deeply guided by her faith, which she credits as the foundation of her achievements.",
  },

  {
    name: "Oba Adedokun Omoniyi Abolarin",
    role: "Grand Patron",
    group: "patrons",
    bio: "Oba Adedokun Omoniyi Abolarin, the Oorangun of Oke-Ila, is a highly respected monarch, lawyer, and educator renowned for his deep commitment to community development and education. Born on September 24, 1958, and installed as Oorangun in 2006, he holds degrees in Political Science, Law, and International Relations from Obafemi Awolowo University. As founder of Abolarin College, which offers free education to underprivileged students, he champions the fight against poverty through learning. Recognized nationally with the Vanguard Education Icon Award in 2025, Oba Abolarin continues to serve his community as a teacher, mentor, and leader, blending tradition with a progressive vision for sustainable development.",
  },
  {
    name: "Professor Folasade Hunsu",
    role: "Matron",
    group: "patrons",
    bio: "Professor Folasade Hunsu is a Professor of Literature and Women's Studies at Obafemi Awolowo University (OAU), Nigeria, where she also serves as Chairperson of the OAU chapter of the Congress of University Academics (CONUA), making history as the first female chairperson of any labor union in the university's 63-year history. A renowned scholar with a PhD in English, Professor Hunsu's research focuses on Women's Studies, African literature, and literary theory, and she has received prestigious fellowships including the Cadbury, Carnegie, and Fulbright Fellowships. Known for her passionate humanist activism, she advocates for the vulnerable and marginalized in society and has played a key role in advancing gender policies, sexual harassment prevention, and welfare initiatives at OAU, while inspiring more women to engage in leadership and academic union activities.",
  },
  {
    name: "Mrs. Jane-Frances Chinenye Nzenwa",
    role: "Matron",
    group: "patrons",
    bio: "Mrs. Jane-Frances Chinenye Nzenwa is a Senior Investigation Officer at the National Human Rights Commission, renowned for her expertise in gender equality, human rights advocacy, and combating harmful traditional practices such as female genital mutilation, breast ironing, and money wife practices. With over seven years of experience addressing sexual and gender-based violence, she also serves as the State Gender Focal Person at NHRC and as a Gender-Based Violence Specialist with African Volunteer for Women Empowerment. Holding a B.Tech in Animal Production and Health, an MSc in Gender and Development, and currently completing a PhD at Obafemi Awolowo University, Mrs. Nzenwa is a prolific author, trainer, and public speaker whose work spans research, advocacy, and capacity building across Nigeria. Her numerous publications and leadership roles in local and international organizations highlight her commitment to gender equality, human rights, and social transformation.",
  },
  {
    name: "Francis Olatayo Olasunkanmi",
    role: "Patron",
    group: "patrons",
    bio: "Francis Olatayo Olasunkanmi is a finance and tax professional with the Federal Inland Revenue Service (FIRS). He has built a reputation for excellence in auditing, tax, and financial compliance. With extensive experience in the public sector, he contributes to improving revenue systems and promoting accountability within Nigeria's tax framework. Francis is driven by a commitment to integrity, transparency, and national development.",
  },

  {
    name: "Festus Ogun",
    role: "Lead, Legal Team",
    group: "legal",
    image: "/images/team/festus-legal.JPG",
    bio: "Mr. Festus Ogun is the Managing Partner and head of the Litigation, Arbitration and Alternative Dispute Resolution team of FO LEGAL. He is a seasoned dispute resolution expert, with years of experience handling commercial litigation for a wide spectrum of domestic and international clients across several sectors of the Nigerian economy. Festus has a remarkable track record of defending victims of human rights abuses across Nigeria. He co-founded the Campaign for Justice Reform and serves in various legal advisory roles, championing issues of digital freedom, social justice, and environmental rights. Widely published and frequently featured in national and international media, Festus is recognized for his legal excellence, leadership, and commitment to advancing justice and human rights.",
  },
  {
    name: "Grace Odewuyi",
    role: "Legal Adviser",
    group: "legal",
    image: "/images/team/grace-legal.JPG",
    bio: "Grace Odewuyi is a legal practitioner who is passionate about criminal justice, human rights, social impact and legal advocacy. A graduate of Osun State University and the Nigerian Law School (Lagos Campus), she has worked with the Legal Aid Council of Nigeria, providing essential legal services to those who cannot afford representation. Grace is actively involved in social impact projects that address systemic inequalities and promote access to justice. Her combined experience in legal practice and community service demonstrates her commitment to using law as a tool for positive social change.",
  },
  {
    name: "Sophia Orisaleye",
    role: "Law Enforcement Liaison",
    group: "legal",
    image: "/images/team/sophia.jpg",
    bio: "Orisaleye Sophia is a police officer and one of the founding members of VARSH, deeply committed to advocating for the rights of women and children. She uses her voice and writing to challenge rape, discrimination, and injustice, working powerfully behind the scenes as a background writer and advocate for change. In her personal time, she enjoys reading novels and writing, using her passion for storytelling to inspire awareness and amplify the voices of the marginalized.",
  },
  {
    name: "Grace Eniyandunmo",
    role: "Legal Adviser",
    group: "legal",
    image: "/images/team/grace.JPG",
    bio: "Grace Eniyandunmo is a legal professional with a strong passion for gender justice, human rights, and community advocacy. With a background in law and a growing portfolio of pro bono work, Grace brings her expertise to support the rights of women, children, and survivors of sexual and gender-based violence.",
  },
  {
    name: "Comfort Ayomide Komolafe",
    role: "Legal Adviser",
    group: "legal",
    image: "/images/team/comfort.jpg",
    bio: "Comfort Ayomide Komolafe is a dedicated and highly driven lawyer, with a passion for justice and human rights. Also, she is an Associate Member, Institute of Chartered Mediators and Conciliators, a recognized body for dispute resolution practitioners in Nigeria. Her work focuses on ensuring that survivors have access to justice, and that the Initiative's programs and advocacy efforts are grounded in strong legal frameworks.",
  },
  {
    name: "Akinkunmi Abolade",
    role: "Legal Adviser",
    group: "legal",
    image: "/images/team/akinkunmi-legal.jpg",
    bio: "Akinkunmi Abolade is a lawyer. He is passionate about sustainable development and poverty alleviation in Nigeria and Africa. As such, asides being able to advise businesses as it relates to commercial transactions, he is skilled in advising businesses on how such commercial transactions affect sustainability and human rights. He is passionate about human rights and believes that people should have the freedom to do whatever they desire as long as third parties are not affected. He advocates that laws should be made to promote gender equality and the world should be safer for women.",
  },
];

/** Frequently asked questions shown on /faqs. */
export type FaqItem = { question: string; answer: string; category: string };

export const faqsDefault: FaqItem[] = [
  {
    question: "What is VARSH Foundation?",
    answer: "VARSH Foundation is a feminist-led, youth-driven non-profit organization established in 2019. We are committed to eradicating sexual abuse, child abuse, gender-based violence, and gender discrimination in society. Through advocacy, education, and community engagement, we work to create a safer environment for all, especially women and children.",
    category: "About VARSH Foundation",
  },
  {
    question: "What does VARSH stand for?",
    answer: "VARSH represents our core values and mission: Voice, Advocacy, Resilience, Support, and Hope. These principles guide our work as we strive to amplify the voices of survivors, advocate for systemic change, build resilient communities, provide support to those affected by abuse, and inspire hope for a future free from violence.",
    category: "About VARSH Foundation",
  },
  {
    question: "What are VARSH Foundation's main focus areas?",
    answer: "Our work focuses on several key areas:",
    category: "About VARSH Foundation",
  },
  {
    question: "What should I do if I know someone who is a survivor of sexual abuse?",
    answer: "If you know someone who has experienced sexual abuse:",
    category: "Support for Survivors",
  },
  {
    question: "How does VARSH support survivors of sexual and gender-based violence?",
    answer: "VARSH Foundation provides comprehensive support to survivors through:",
    category: "Support for Survivors",
  },
  {
    question: "Is the support provided by VARSH confidential?",
    answer: "Yes, confidentiality is a cornerstone of our work with survivors. We maintain strict confidentiality standards and protect the privacy and dignity of everyone who seeks our support. Information shared with us is not disclosed without explicit permission, except in situations where there is an immediate risk of harm or legal reporting requirements.",
    category: "Support for Survivors",
  },
  {
    question: "How can I get involved with VARSH Foundation?",
    answer: "There are several meaningful ways to get involved with our work:",
    category: "Getting Involved",
  },
  {
    question: "How can I become a volunteer or member?",
    answer: "To become a volunteer or member of VARSH Foundation, please follow these steps:",
    category: "Getting Involved",
  },
  {
    question: "Why should I become a VARSH Member, and who can be a member?",
    answer: "By becoming a member, you can:",
    category: "Getting Involved",
  },
  {
    question: "Is there a difference between being a volunteer and a member?",
    answer: "Yes!",
    category: "Getting Involved",
  },
  {
    question: "How do I apply?",
    answer: "To apply, complete our online application form through the \"Get Involved\" section of our website. The form will ask for your personal information, background, motivation, and how you hope to contribute to VARSH's mission. After submission, you'll receive a confirmation email, and our team will review your application. Shortlisted candidates may be invited for an interview or orientation session.",
    category: "Application Process",
  },
  {
    question: "Is there a cost of applying to become a VARSH Member?",
    answer: "There is a non-refundable application fee of \u20a61,000. This fee helps support the administrative costs of the application process, including interviews, training materials, and member onboarding. The fee demonstrates a level of commitment and helps us maintain the quality of our membership program. If the fee presents a financial hardship, please contact us as we may be able to offer fee waivers in certain circumstances.",
    category: "Application Process",
  },
  {
    question: "What should I know before applying?",
    answer: "Before applying to be a volunteer or member of VARSH Foundation, here are important considerations:",
    category: "Application Process",
  },
  {
    question: "Are there specific qualifications or skills required for membership?",
    answer: "While we don't have strict academic or professional requirements, we look for individuals who demonstrate:",
    category: "Application Requirements",
  },
  {
    question: "What additional hands-on skills are welcome?",
    answer: "These specialized skills can significantly enhance our work and may give your application an advantage:",
    category: "Application Requirements",
  },
  {
    question: "Can I continue volunteering if I'm not selected as a member?",
    answer: "Absolutely!",
    category: "Application Requirements",
  },
  {
    question: "How can my organization partner with VARSH Foundation?",
    answer: "We welcome partnerships with organizations that share our commitment to ending gender-based violence. Partnership opportunities include:",
    category: "Partnerships and Donations",
  },
  {
    question: "How can I donate to VARSH Foundation?",
    answer: "Your donations help sustain our programs and expand our impact. You can support our work through:",
    category: "Partnerships and Donations",
  },
  {
    question: "How can I stay updated on VARSH Foundation's activities and events?",
    answer: "Stay connected with our work through multiple channels:",
    category: "Staying Connected",
  },
  {
    question: "How can I contact VARSH Foundation for more questions or assistance?",
    answer: "We're here to help and answer your questions through several channels:",
    category: "Staying Connected",
  },
];

/** Projects and initiatives shown on /projects. */
export type ProjectItem = {
  title: string;
  slug: string;
  summary: string;
  content: string;
  image: string | null;
  images: string[];
  category: "main" | "other";
};

export const projectsDefault: ProjectItem[] = [
  {
    title: "Reach Every Child (RECH)",
    slug: "reach-every-child",
    summary: "RECH is an acronym for Reach Every Child. It's a project aimed at creating awareness about sexual abuse, with emphasis on child sexual abuse, in local communities.",
    content: "<p>RECH is our flagship project, dedicated to reaching out to every child providing education on consent, sexual abuse, and healthy relationships. Through school outreaches, workshops, and awareness campaigns, RECH aims to equip children with the knowledge and tools they need to recognise and report abuse.</p><p>Our work also centres on educating communities, parents, and guardians on the signs of abuse, how to protect their children, and how to foster an environment where children feel safe to speak up. We conduct awareness campaigns, workshops, and seminars, engaging with local communities to spread the child safety message. This is geared towards empowering communities to protect their children proactively, ensuring that every child can thrive without the fear of abuse.</p><p>Our goal is to turn every community into a safe haven for children, where their rights are protected, their voices are heard, and their futures are free from the trauma of sexual abuse.</p><h3>Communities Reached:</h3><ul><li>Asi/Asaba, Osun State</li><li>Oyan, Osun State</li><li>Odeda, Ogun State</li><li>Ikirun, Osun State</li><li>Ifedayo Local Government, Osun State</li><li>Ayedaade Local Government, Osun State</li><li>Okpokwu Local Government, Benue State</li></ul>",
    image: "/images/rech/IMG_2527.JPEG",
    images: ["/images/rech/IMG_2527.JPEG", "/images/rech/IMG_2524.JPEG", "/images/rech/IMG_2536.JPEG", "/images/rech/IMG_2539.JPEG"],
    category: "main",
  },
  {
    title: "Girls Talk",
    slug: "girls-talk",
    summary: "Girls Talk is a platform that brings girls together to explore their dreams, build confidence, and strengthen their voices. Through open conversations, engaging activities, and mentorship, the program tackles important topics like leadership, self-esteem, gender equality, and personal growth. It's a space where girls are encouraged to challenge limits, share their stories, and imagine bold futures for themselves and their communities. At its core, Girls Talk is about helping girls rise, lead, and shape a world where they are seen, heard, and valued.",
    content: "",
    image: "/images/girls/IMG_2540.JPEG",
    images: ["/images/girls/IMG_2540.JPEG", "/images/girls/IMG_2550.JPEG"],
    category: "main",
  },
  {
    title: "Project Safe Communities",
    slug: "project-safe-communities",
    summary: "Project Safe Communities is an initiative dedicated to combating Sexual and Gender-Based Violence (SGBV) on campuses and in surrounding communities. This project empowers young leaders with the knowledge and skills to challenge societal norms, promote healthy relationships, and create safer spaces through advocacy, peer education, and outreach. By fostering collaboration, education, and active engagement, we are building a movement that champions equality, supports survivors, and works towards a violence-free future for all.",
    content: "",
    image: "/images/safe/IMG_1006.JPEG",
    images: ["/images/safe/IMG_1006.JPEG", "/images/safe/IMG_1008.JPG"],
    category: "main",
  },
  {
    title: "The Red Dot Gist",
    slug: "the-red-dot-gist",
    summary: "The Red Dot Gist Project is a vibrant menstrual health education and advocacy initiative by VARSH Foundation, designed to break taboos, foster open conversations, and equip young people and communities with knowledge and resources for managing menstrual health with dignity. Through interactive workshops, engaging school visits, pad drives, and community outreaches, the project creates safe spaces for learning, sharing, and empowerment. By combining education with action, Red Dot Gist not only raises awareness but also builds confidence and sparks a broader movement toward menstrual health equity, ensuring that no girl or woman is left behind because of her cycle.",
    content: "",
    image: "/images/red-dot/IMG_2552.JPEG",
    images: ["/images/red-dot/IMG_2552.JPEG", "/images/red-dot/IMG_2555.JPEG", "/images/red-dot/IMG_2556.JPEG"],
    category: "main",
  },
  {
    title: "The Boys At It",
    slug: "the-boys-at-it",
    summary: "The Boys At It is an initiative by VARSH Foundation dedicated to supporting and empowering young boys through education, dialogue, and mentorship. Through open conversations on topics like mental health, positive masculinity, leadership, and relationships, the project creates safe and engaging spaces where boys can openly explore the challenges they face and develop the tools they need to thrive. By fostering conversations around respect, responsibility, and self-awareness, The Boys At It aims to nurture a generation of boys who are confident, compassionate, and equipped to contribute positively to their communities.",
    content: "",
    image: "/images/boys/IMG_3484.jpg",
    images: ["/images/boys/IMG_3484.jpg", "/images/boys/IMG_2557.JPEG"],
    category: "main",
  },
  {
    title: "The Top Girls Mentorship Initiative",
    slug: "the-top-girls-mentorship-initiative",
    summary: "The Top Girls Mentorship Initiative is a signature VARSH program created to empower and nurture young girls into confident, capable leaders and changemakers. Through a blend of mentorship, engaging discussions, and practical guidance, the initiative helps girls build their confidence, develop leadership skills, and pursue their dreams with purpose. By connecting them with inspiring mentors and creating a supportive space for growth, the program equips young women to navigate challenges, amplify their voices, and make meaningful contributions in their communities and beyond. At its heart, the initiative is about investing in the next generation of women leaders and creating a future where every girl can thrive.",
    content: "",
    image: "/images/top-girls/IMG_2500.JPG",
    images: ["/images/top-girls/IMG_2500.JPG", "/images/top-girls/IMG_2560.JPG"],
    category: "main",
  },
  {
    title: "16 Days of Activism Against GBV Campaigns",
    slug: "16-days-of-activism-against-gbv-campaigns",
    summary: "VARSH Foundation is a proud participant in the annual 16 Days of Activism Against Gender-Based Violence, a global campaign dedicated to raising awareness and challenging violence against women and girls. Each year, we join this important initiative to amplify the voices of survivors, promote a zero-tolerance culture towards GBV, and engage communities in meaningful dialogue. Through a combination of social media, physical engagement, and collaborative partnerships, we mobilize youth and advocates to stand against violence and work towards creating a safer, more inclusive society. Our participation is part of our ongoing commitment to tackling gender-based violence and promoting equality for all.",
    content: "",
    image: "/images/16days/IMG_2548.JPEG",
    images: ["/images/16days/IMG_2548.JPEG", "/images/16days/IMG_2546.JPEG"],
    category: "main",
  },
  {
    title: "Walk Against Rape",
    slug: "walk-against-rape",
    summary: "The Walk Against Rape is a community event, bringing together advocates, survivors, and allies to raise awareness and challenge the culture of silence surrounding sexual abuse. This initiative aims to reduce the high incidence of rape and other forms of sexual abuse in communities through education and change in the mindset and orientation of individuals in the society. It sends a powerful message: we stand united against sexual violence, and we are committed to making our communities safer.",
    content: "",
    image: "/images/rape/IMG_2127.JPG",
    images: ["/images/rape/IMG_2127.JPG", "/images/rape/IMG_2502.JPEG", "/images/rape/IMG_2503.JPEG", "/images/rape/IMG_2504.JPEG", "/images/school/IMG_1865.JPEG", "/images/church/IMG_4977.JPG", "/images/IMG_2566.JPEG"],
    category: "main",
  },
  {
    title: "School Outreaches",
    slug: "school-outreaches",
    summary: "At the heart of our prevention efforts are our school outreach programs. We visit schools to facilitate engaging and interactive sessions on topics like consent, healthy relationships, sexual abuse, and the importance of speaking out. Our goal is to empower young people with the knowledge and confidence to protect themselves and their peers, while also encouraging them to report incidents of sexual harassment and assault. Through these initiatives, we aim to build a foundation for a safer future for children and youth.",
    content: "",
    image: "/images/school/IMG_1865.JPEG",
    images: ["/images/school/IMG_1865.JPEG"],
    category: "other",
  },
  {
    title: "Church/Mosque Sensitization",
    slug: "church-mosque-sensitization",
    summary: "We believe that faith-based institutions play a vital role in supporting survivors and fostering safe environments. VARSH Foundation works closely with religious institutions to spread the message of consent, safe spaces, and the importance of supporting survivors. By integrating these crucial conversations into faith communities, we aim to create spaces where survivors feel heard, valued, and supported on their healing journey.",
    content: "",
    image: "/images/church/IMG_4977.JPG",
    images: ["/images/church/IMG_4977.JPG"],
    category: "other",
  },
  {
    title: "House-to-House Campaign",
    slug: "house-to-house-campaign",
    summary: "Our house-to-house campaigns take awareness directly to the heart of the community. We go door-to-door, engaging with families and individuals to provide valuable resources and education about sexual abuse prevention. These personal interactions help open conversations, encourage understanding, and empower everyone to become active advocates for change. Through these efforts, we strive to create a culture where sexual violence is no longer tolerated, and communities are more informed and proactive in addressing the issue.",
    content: "",
    image: "/images/IMG_2566.JPEG",
    images: ["/images/IMG_2566.JPEG"],
    category: "other",
  },
  {
    title: "Legal Aid",
    slug: "legal-aid",
    summary: "At VARSH Foundation, we are committed to ensuring that survivors of sexual abuse have the support they need to seek justice. Our Legal Aid initiative offers survivors the guidance and resources necessary to navigate the legal system, ensuring that they can pursue redress for the harm they have suffered. By providing access to legal assistance, we help give survivors a voice in the justice process and support them in their journey towards healing and justice.",
    content: "",
    image: null,
    images: [],
    category: "other",
  },
];

/** Campus clubs shown on /clubs. */
export type CampusClubItem = {
  name: string;
  university: string;
  location?: string;
  clubName?: string;
  imageUrl?: string;
  coordinator?: string;
  phone?: string;
  email?: string;
  order?: number;
};

export const clubsDefault: CampusClubItem[] = [
        {
          name: "Obafemi Awolowo University",
          university: "Obafemi Awolowo University",
          location: "Ile-Ife, Osun State",
          clubName: "VARSH OAU Club",
          imageUrl: "/images/clubs/oau.png",
          coordinator: "Anjola Abolade Oyelola",
          phone: "+2349036770892",
          email: "varshoau@gmail.com",
          order: 1,
        },
        {
          name: "University of Ilorin",
          university: "University of Ilorin",
          location: "Kwara State",
          clubName: "VARSH UNILORIN Club",
          imageUrl: "/images/clubs/unilorin.png",
          coordinator: "Evelyn Modupeoluwa Onaolapo",
          phone: "+2348107430869",
          email: "varshunilorinnclub@gmail.com",
          order: 2,
        },
        {
          name: "Federal University Lokoja",
          university: "Federal University Lokoja",
          location: "Lokoja, Kogi State",
          clubName: "VARSH FULOKOJA Club",
          imageUrl: "/images/clubs/fulokoja.png",
          order: 3,
        },
        {
          name: "Nigerian Institute of Journalism",
          university: "Nigerian Institute of Journalism",
          location: "Ikeja, Lagos State",
          clubName: "VARSH NIJ Club",
          imageUrl: "/images/clubs/nij.png",
          coordinator: "Oluwaseyifunmi Mary Adebayo",
          phone: "+23470838176",
          email: "nijvarshfoundation@gmail.com",
          order: 4,
        },
        {
          name: "Osun State University",
          university: "Osun State University",
          location: "Osogbo, Osun State",
          clubName: "VARSH UNIOSUN Club",
          imageUrl: "/images/clubs/uniosun.png",
          coordinator: "Samuel Oluwafemi Ajala",
          phone: "+2348156403260",
          email: "varshuniosunclub@gmail.com",
          order: 5,
        },
        {
          name: "Olabisi Onabanjo University",
          university: "Olabisi Onabanjo University",
          location: "Ago-Iwoye, Ogun State",
          clubName: "VARSH OOU Club",
          imageUrl: "/images/clubs/oou.png",
          coordinator: "Tolani Deborah Ewuyemi",
          phone: "+2347041679545",
          email: "varshoouclub@gmail.com",
          order: 6,
        },
        {
          name: "Ahmadu Bello University",
          university: "Ahmadu Bello University",
          location: "Zaria, Kaduna State",
          clubName: "VARSH ABU Club",
          imageUrl: "/images/clubs/abu.png",
          order: 7,
        },
        {
          name: "Federal University of Agriculture",
          university: "Federal University of Agriculture, Abeokuta",
          location: "Abeokuta, Ogun State",
          clubName: "VARSH FUNAAB Club",
          imageUrl: "/images/clubs/funaab.png",
          coordinator: "Afolabi Olawunmi Joyqueen",
          phone: "+2347079720917",
          email: "varshfunnabclub@gmail.com",
          order: 8,
        },
        {
          name: "Federal University of Technology, Minna",
          university: "Federal University of Technology, Minna, Niger State",
          location: "Minna, Niger State",
          clubName: "VARSH FUTMINNA Club",
          imageUrl: "/images/clubs/futminna.png",
          order: 9,
        },
        {
          name: "Federal University of Technology, Akure",
          university: "Federal University of Technology, Akure",
          location: "Akure, Ondo State",
          clubName: "VARSH FUTA Club",
          imageUrl: "/images/clubs/futa.png",
          order: 10,
        },
        {
          name: "Osun State Polytechnic, Iree",
          university: "Osun State Polytechnic, Iree, Osun State",
          location: "Iree, Osun State",
          clubName: "VARSH OSPOLY Club",
          imageUrl: "/images/clubs/ospoly.png",
          order: 11,
        },
        {
          name: "Osun State College Of Education, Ila-Orangun",
          university:
            "Osun State College Of Education, Ila-Orangun (in affiliation with Ekiti State University)",
          location: "Ila-Orangun, Osun State",
          clubName: "VARSH OSSCEILA Club",
          imageUrl: "/images/clubs/osued.png",
          order: 12,
        },
      ];
