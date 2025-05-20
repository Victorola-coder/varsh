import React from "react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="px-4 md:px-8 lg:px-12 py-10 md:py-[150px] max-w-[1200px] mx-auto">
      <section className="mb-16">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8">
          About Us
        </h1>
        <div className="prose max-w-none">
          <h2 className="text-2xl md:text-3xl font-semibold my-6">
            Our Profile
          </h2>
          <p className="text-base md:text-lg">
            VARSH Foundation, founded in 2019, is a feminist-led, non-profit
            organization driven by youth committed to eradicating sexual abuse,
            child abuse, gender-based violence and gender discrimination in
            society. We empower victims and hold offenders accountable through
            legal advocacy and community support. Our work focuses on key areas
            such as child rights, women's empowerment, and the promotion of
            peace and security, with a strong commitment to justice and
            equality. We align our initiatives with the Sustainable Development
            Goals, particularly Goal 5 (Gender Equality), Goal 10 (Reduced
            Inequalities), and Goal 16 (Peace, Justice, and Strong
            Institutions). By raising awareness and engaging communities, we aim
            to create a safer and more equitable environment for all, where
            everyone can live free from the threat of violence and
            discrimination.
          </p>
        </div>
      </section>

      <section className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-[#FF3600] text-white p-6 md:p-8 rounded-lg shadow-md">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Vision</h2>
          <p className="text-base md:text-lg">
            To build an equitable society where every individual is safe from
            sexual abuse, child abuse, and gender discrimination.
          </p>
        </div>
        <div className="bg-[#252A34] text-white p-6 md:p-8 rounded-lg shadow-md">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Mission</h2>
          <p className="text-base md:text-lg">
            To drive meaningful change through advocacy, education, and
            community engagement, fostering awareness and promoting justice for
            survivors of abuse.
          </p>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center">
          Our Strategies
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {[
            "Campaign",
            "Awareness",
            "Advocacy",
            "Solidarity",
            "Empowerment",
            "Engagement",
          ].map((strategy, index) => (
            <div
              key={index}
              className="bg-gray-100 p-4 rounded-lg shadow text-center"
            >
              <p className="font-medium">{strategy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          Goals & Objectives
        </h2>
        <ul className="list-disc pl-6 space-y-4 text-base md:text-lg">
          <li>
            To successfully arrange effective rallies and enlightening campaigns
            and conferences; to establish a swift avenue for awareness programs
            designed for sensitisation on child abuse, sexual harassment, and
            gender-based violence;
          </li>
          <li>
            To educate teenagers in secondary schools about their sexual circle
            and sexual abuse in all its forms;
          </li>
          <li>
            To encourage the Nigerian government to fast-track the effective
            establishment of Sustainable Development Goals;
          </li>
          <li>
            To engage the Nigerian law enforcement agencies, security personnel,
            and legal practitioners in the prosecution of sexual offenders;
          </li>
          <li>
            To create effective online campaigns against sexual abuse through
            social media platforms [YouTube, Facebook, WhatsApp, Twitter,
            Instagram, etc];
          </li>
          <li>
            To help in counselling and educating victims on procedures for
            handling their experiences with culprits;
          </li>
          <li>
            To actively contribute to free health support and counselling
            sessions with professional health care providers – for victims of
            sexual abuse and gender-based violence.
          </li>
        </ul>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          Recognitions and Features
        </h2>
        <div className="space-y-4 text-base md:text-lg">
          <div>
            <p className="font-medium">
              Punch Newspapers: NGO sensitises Osun girls to sex education
              harassment
            </p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://punchng.com/ngo-sensitises-osun-girls-to-sex-education-harassment/"
              className="text-[#FF3600] hover:underline"
            >
              https://punchng.com/ngo-sensitises-osun-girls-to-sex-education-harassment/
            </a>
          </div>
          <div>
            <p className="font-medium">
              International Centre for Investigative Reporting: How rape, sexual
              assault, harassment is forcing girls out of secondary schools
            </p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.icirnigeria.org/how-rape-sexual-assault-harassment-is-forcing-girls-out-of-secondary-schools/"
              className="text-[#FF3600] hover:underline"
            >
              https://www.icirnigeria.org/how-rape-sexual-assault-harassment-is-forcing-girls-out-of-secondary-schools/
            </a>
          </div>
          <div>
            <p className="font-medium">PIJA: What is VARSH - Special Feature</p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://pija.com.ng/what-is-varsh/special-feature/03/2022/"
              className="text-[#FF3600] hover:underline"
            >
              https://pija.com.ng/what-is-varsh/special-feature/03/2022/
            </a>
          </div>
          <div>
            <p className="font-medium">
              Edugist: VARSH Foundation Trains Students in Sex Education
            </p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://edugist.org/tag/varsh-foundation-trains-students-in-sex-education/"
              className="text-[#FF3600] hover:underline"
            >
              https://edugist.org/tag/varsh-foundation-trains-students-in-sex-education/
            </a>
          </div>
          <div>
            <p className="font-medium">
              Edugist: Empowering Girls Through Menstrual Hygiene Education
            </p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://edugist.org/empowering-girls-through-menstrual-hygiene-education-varsh-teachers-educate-students/"
              className="text-[#FF3600] hover:underline"
            >
              https://edugist.org/empowering-girls-through-menstrual-hygiene-education-varsh-teachers-educate-students/
            </a>
          </div>
          <div>
            <p className="font-medium">
              Edugist: OAU Students Launch Initiative to Combat SGBV in Campus
              Communities
            </p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://edugist.org/oau-students-launch-initiative-to-combat-sgbv-in-campus-communities-2/"
              className="text-[#FF3600] hover:underline"
            >
              https://edugist.org/oau-students-launch-initiative-to-combat-sgbv-in-campus-communities-2/
            </a>
          </div>
          <div>
            <p className="font-medium">
              BusinessDay: OAU Students Unveil Project to Fight Sexual Violence
            </p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://businessday.ng/news/article/oau-students-unveils-project-to-fight-sexual-violence/"
              className="text-[#FF3600] hover:underline"
            >
              https://businessday.ng/news/article/oau-students-unveils-project-to-fight-sexual-violence/
            </a>
          </div>
          <div>
            <p className="font-medium">
              The Guardian: Firm, OAU Students Partner to Tackle Sexual Violence
              on Campus
            </p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://guardian.ng/features/education/firm-oau-students-partner-to-tackle-sexual-violence-on-campus/"
              className="text-[#FF3600] hover:underline"
            >
              https://guardian.ng/features/education/firm-oau-students-partner-to-tackle-sexual-violence-on-campus/
            </a>
          </div>
          <div>
            <p className="font-medium">
              Punch Newspapers: OAU Students Unveil Programme to Tackle Sexual
              Violence
            </p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://punchng.com/oau-students-unveil-programme-to-tackle-sexual-violence/"
              className="text-[#FF3600] hover:underline"
            >
              https://punchng.com/oau-students-unveil-programme-to-tackle-sexual-violence/
            </a>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center">
          Meet The Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {[
            {
              name: "Aworanti Salvation Grace",
              title: "Executive Director",
              image: "/team/salvation.JPG",
              bio: "Aworanti Salvation Grace is the founder and team lead at VARSH Foundation. She is a project manager, humanitarian, environmental activist, and gender expert who embodies responsive leadership and a commitment to positive change. Salvation Grace passionately advocates for sustainable development and works tirelessly to combat gender-based violence and discrimination through various initiatives that empower young girls and women. A visionary leader, she also organises the annual Ila Orangun Youth Conference, nurturing future leaders in her community. A recognised trailblazer, Salvation Grace has received multiple awards for her dedication to creating a brighter future for vulnerable populations. She graduated from the Department of Philosophy at Obafemi Awolowo University, Ile-Ife.",
            },
            {
              name: "Adesewa Oladipo",
              title: "Administrative Secretary",
              image: "/team/adesewa.JPG",
              bio: "Adesewa Oladipo is the Administrative Secretary at VARSH Foundation, where she oversees office operations, coordinates meetings and events, manages records, and supports both staff and stakeholders. With a degree in Microbiology from the Federal University of Agriculture, Abeokuta, Adesewa's passion for storytelling drew her beyond the lab to the world of photography. As a professional photographer and photo editor, she uses her creative lens to capture powerful images that drive awareness and inspire change, particularly on issues affecting women and girls. A natural leader with a strong record of service, Adesewa is a storyteller, an advocate, and a changemaker.",
            },
            {
              name: "Akande Michael, O",
              title: "Director of Finance and Fundraising",
              image: "/team/akande.jpg",
              bio: "Akande Michael is a highly skilled social analyst, adept business manager, versatile administrator, accomplished media expert, advocate, and humanitarian committed to serving humanity. He completed his Business Management and Administration studies at Osun State Polytechnic and earned a Diploma in Food and Beverages Management from Universita Bocconi. His professional ambitions are centred within the hospitality industry, and he demonstrates a fervent dedication to growth and development. Michael currently serves as the Director of Finance and Fundraising at VARSH Foundation and is the CEO of Kamis Cuisine. He possesses formidable competencies in project execution, critical thinking, risk management, and problem-solving.",
            },
            {
              name: "Ferosayemi Faith Ogunbona",
              title: "Volunteers Manager",
              image: "/team/fero.JPG",
              bio: "Ferosayemi Faith Ogunbona is a Microbiology graduate of the prestigious Olabisi Onabanjo University. A writer and blogger, she creatively transforms personal experiences into soothing words that resonate with readers. Beyond her creative pursuits, Ferosayemi is a dedicated educator, an avid reader, and a child enthusiast. Her passion for positive affirmations and declarations is a cornerstone of her life. As a volunteer and member, she serves as the Volunteers Director at VARSH Foundation.",
            },
            {
              name: "Hassanat Adebowale",
              title: "Director of Media, Communications and Publicity",
              image: "/team/asanat.jpg",
              bio: "Hassanat Adebowale is a law graduate of the prestigious Obafemi Awolowo University. With a passion for literature and a talent for versatile content and technical writing, she has received recognition as an accomplished essayist. In her role, Hassanat combines her legal expertise with her communication skills to craft impactful messages that promote the organisation's mission and advocate for positive community change. With a solid dedication to professional growth and development, Hassanat excels in project management, critical thinking, and creative problem-solving.",
            },
            {
              name: "Shonibare Temitope Emmanuel",
              title: "Director of Human Resources",
              image: "/team/temitope-hr.JPG",
              bio: "Shonibare Temitope Emmanuel is an advocate for gender equality, education, and climate action. He currently serves as the Director of Human Resources at VARSH Foundation, where he has helped drive recruitment and community engagement. Emmanuel is passionate about creating educational opportunities for marginalised youth. As a storyteller, his poetry and non-fiction explore themes like love, family, sexuality, grief, and mental health. A fashion enthusiast and designer, he promotes sustainable fashion practices like upcycling. Recognised for his climate work at the Climate Voices Nigeria Boot Camp, Emmanuel is committed to inspiring self-acceptance and authenticity.",
            },
            {
              name: "Chidiebere Nnadiegbulam",
              image: "/team/chidi.jpg",
              title: "Monitoring and Evaluation Officer",
              bio: "Chidiebere Nnadiegbulam is an experienced geospatial professional known for his creativity and visualisation abilities. Over the past decade, he has significantly contributed to environmental sustainability and humanitarian efforts through dedicated mentorship at the International Federation of Surveyors (FIG) and environmental protection projects. Chidiebere is dedicated to driving innovations and making a lasting impact through cutting-edge geospatial technologies and community-focused initiatives. When not working, he enjoys exploring the wonders of God's creation in nature, which continually fuels his creativity and passion.",
            },
            {
              name: "Barnabas Benjamin-Iorguma",
              title: "Director of Campus Interventions",
              image: "/team/barnabas.jpg",
              bio: "Barnabas Benjamin-Iorguma is the Director of Campus Interventions and an active member of the VARSH Foundation, where he works to create an abuse-free society. He also serves as Managing Editor for the International Food Heroes Agency (IFHA) and Drum Majors for Peace. Barnabas, the Founder and Editor of Consolidation Blog, writes about leadership, security, and social issues. He is a Fellow of the World Institute for Peace (FWIP) and a 2024 Kectil Colleague who volunteers for organisations like Junior Achievement Nigeria, Rotaract Club, and Raising Stars Africa. His interests include volunteering, civic responsibility, research, and entrepreneurship.",
            },
            {
              name: "Joshua Oluwadamilola Precious",
              title: "Director of Projects and Programs",
              image: "/team/damilola-pos.JPG",
              bio: "Joshua Oluwadamilola Precious is the Director of Projects and Programs at VARSH Foundation, a passionate advocate for gender equality and sustainable development. She is committed to challenging harmful norms and ending violence that hinders social progress, using advocacy and community development as tools for change. With extensive experience in volunteering, mobilizing support, and leading impactful projects, Precious is known for developing creative, innovative solutions that advance social justice, promote gender equality, and drive sustainable development in communities.",
            },
            {
              name: "Dorcas Oluwatosin Ajala",
              title: "Director of Operations",
              image: "/team/dop.jpg",
              bio: "Dorcas Oluwatosin Ajala holds a degree in Public Health from Osun State University and is passionate about advocating against gender-based violence, as well as promoting youth, maternal, and child health. She is an active member of the VARSH Club at UNIOSUN and a dedicated volunteer with the VARSH Foundation. Beyond advocacy, Dorcas is also an entrepreneur who enjoys cooking, traveling, and connecting with like-minded people. Known for her inquisitive nature and love for teaching, she is always eager to learn, grow, and develop new skills. Her journey is deeply guided by her faith, which she credits as the foundation of her achievements.",
            },
          ].map((member, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              {member.image && (
                <div className="mb-4 flex justify-center">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={150}
                    height={150}
                    className="rounded-full object-cover h-[150px] w-[150px]"
                  />
                </div>
              )}
              <h3 className="text-xl font-bold mb-2">{member.name}</h3>
              <p className="text-[#FF3600] font-medium mb-4">{member.title}</p>
              <p className="text-sm">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center">
          Patrons
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              name: "Oba Adedokun Omoniyi Abolarin",
              title: "Grand Patron",
              bio: "Oba Adedokun Omoniyi Abolarin, the Òràngún of Òkè-Ìlá, is a highly respected monarch, lawyer, and educator renowned for his deep commitment to community development and education. Born on September 24, 1958, and installed as Òràngún in 2006, he holds degrees in Political Science, Law, and International Relations from Obafemi Awolowo University. As founder of Abolarin College, which offers free education to underprivileged students, he champions the fight against poverty through learning. Recognized nationally with the Vanguard Education Icon Award in 2025, Oba Abolarin continues to serve his community as a teacher, mentor, and leader, blending tradition with a progressive vision for sustainable development.",
            },
            {
              name: "Mrs. Jane-Frances Chinenye Nzenwa",
              title: "Patron",
              bio: "Mrs. Jane-Frances Chinenye Nzenwa is a Senior Investigation Officer at the National Human Rights Commission, renowned for her expertise in gender equality, human rights advocacy, and combating harmful traditional practices such as female genital mutilation, breast ironing, and money wife practices. With over seven years of experience addressing sexual and gender-based violence, she also serves as the State Gender Focal Person at NHRC and as a Gender-Based Violence Specialist with African Volunteer for Women Empowerment. Holding a B.Tech in Animal Production and Health, an MSc in Gender and Development, and currently completing a PhD at Obafemi Awolowo University, Mrs. Nzenwa is a prolific author, trainer, and public speaker whose work spans research, advocacy, and capacity building across Nigeria. Her numerous publications and leadership roles in local and international organizations highlight her commitment to gender equality, human rights, and social transformation.",
            },
            {
              name: "Francis Olatayo Olasunkanmi",
              title: "Patron",
              bio: "Francis Olatayo Olasunkanmi is a finance and tax professional with the Federal Inland Revenue Service (FIRS). He has built a reputation for excellence in auditing, tax, and financial compliance. With extensive experience in the public sector, he contributes to improving revenue systems and promoting accountability within Nigeria's tax framework. Francis is driven by a commitment to integrity, transparency, and national development.",
            },
            {
              name: "Professor Folasade Hunsu",
              title: "Patron",
              bio: "Professor Folasade Hunsu is a Professor of Literature and Women's Studies at Obafemi Awolowo University (OAU), Nigeria, where she also serves as Chairperson of the OAU chapter of the Congress of University Academics (CONUA), making history as the first female chairperson of any labor union in the university's 63-year history. A renowned scholar with a PhD in English, Professor Hunsu's research focuses on Women's Studies, African literature, and literary theory, and she has received prestigious fellowships including the Cadbury, Carnegie, and Fulbright Fellowships. Known for her passionate humanist activism, she advocates for the vulnerable and marginalized in society and has played a key role in advancing gender policies, sexual harassment prevention, and welfare initiatives at OAU, while inspiring more women to engage in leadership and academic union activities.",
            },
          ].map((patron, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-bold mb-2">{patron.name}</h3>
              <p className="text-[#FF3600] font-medium mb-4">{patron.title}</p>
              <p className="text-sm">{patron.bio}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center">
          Legal Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {[
            {
              name: "Festus Ogun",
              title: "Lead, Legal Team",
              image: "/team/festus-legal.JPG",
              bio: "Mr. Festus Ogun is the Managing Partner and head of the Litigation, Arbitration and Alternative Dispute Resolution team of FO LEGAL. He is a seasoned dispute resolution expert, with years of experience handling commercial litigation for a wide spectrum of domestic and international clients across several sectors of the Nigerian economy. Festus has a remarkable track record of defending victims of human rights abuses across Nigeria. He co-founded the Campaign for Justice Reform and serves in various legal advisory roles, championing issues of digital freedom, social justice, and environmental rights. Widely published and frequently featured in national and international media, Festus is recognized for his legal excellence, leadership, and commitment to advancing justice and human rights.",
            },

            {
              name: "Grace Odewuyi",
              title: "Legal Adviser",
              image: "/team/grace-legal.JPG",
              bio: "Grace Odewuyi is a legal practitioner who is passionate about criminal justice, human rights, social impact and legal advocacy. A graduate of Osun State University and the Nigerian Law School (Lagos Campus), she has worked with the Legal Aid Council of Nigeria, providing essential legal services to those who cannot afford representation. Grace is actively involved in social impact projects that address systemic inequalities and promote access to justice. Her combined experience in legal practice and community service demonstrates her commitment to using law as a tool for positive social change.",
            },

            {
              name: "Sophia Orisaleye",
              image: "/team/sophia.jpg",
              title: "Law Enforcement Liaison",
              bio: "Orisaleye Sophia is a police officer and one of the founding members of VARSH, deeply committed to advocating for the rights of women and children. She uses her voice and writing to challenge rape, discrimination, and injustice, working powerfully behind the scenes as a background writer and advocate for change. In her personal time, she enjoys reading novels and writing, using her passion for storytelling to inspire awareness and amplify the voices of the marginalized.",
            },
            {
              name: "Grace Eniyandunmo",
              title: "Law Enforcement Liaison",
              image: "/team/grace.JPG",
              bio: "Grace Eniyandunmo is a legal professional with a strong passion for gender justice, human rights, and community advocacy. With a background in law and a growing portfolio of pro bono work, Grace brings her expertise to support the rights of women, children, and survivors of sexual and gender-based violence.",
            },
            {
              name: "Comfort Ayomide Komolafe",
              title: "Law Enforcement Liaison",
              image: "/team/comfort.jpg",
              bio: "  Comfort Ayomide Komolafe is a dedicated and highly driven lawyer, with a passion for justice and human rights. Also, she is an Associate Member, Institute of Chartered Mediators and Conciliators, a recognized body for dispute resolution practitioners in Nigeria. Her work focuses on ensuring that survivors have access to justice, and that the Initiative’s programs and advocacy efforts are grounded in strong legal frameworks.",
            },
            {
              name: "Akinkunmi Abolade",
              title: "Legal Adviser",
              image: "/team/akinkunmi-legal.jpg",
              bio: "Akinkunmi Abolade is a lawyer. He is passionate about sustainable development and poverty alleviation in Nigeria and Africa. As such, asides being able to advise businesses as it relates to commercial transactions, he is skilled in advising businesses on how such commercial transactions affect sustainability and human rights. He is passionate about human rights and believes that people should have the freedom to do whatever they desire as long as third parties are not affected. He advocates that laws should be made to promote gender equality and the world should be safer for women.",
            },
          ].map((member, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              {member.image && (
                <div className="mb-4 flex justify-center">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={150}
                    height={150}
                    className="rounded-full object-cover h-[150px] w-[150px]"
                  />
                </div>
              )}
              <h3 className="text-xl font-bold mb-2">{member.name}</h3>
              <p className="text-[#FF3600] font-medium mb-4">{member.title}</p>
              <p className="text-sm">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
