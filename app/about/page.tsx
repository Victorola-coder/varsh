import React from "react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="px-4 md:px-8 lg:px-12 py-10 md:py-16 max-w-[1200px] mx-auto">
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
              1. Featured by Punch Newspapers. (2022): NGO sensitises Osun girls
              to sex education harassment.
            </p>
            <a
              href="https://punchng.com/ngo-sensitises-osun-girls-to-sex-education-harassment/"
              className="text-[#FF3600] hover:underline"
            >
              https://punchng.com/ngo-sensitises-osun-girls-to-sex-education-harassment/
            </a>
          </div>
          <div>
            <p className="font-medium">
              2. Featured by International Centre for Investigative Reporting
            </p>
            <a
              href="https://www.icirnigeria.org/how-rape-sexual-assault-harassment-is-forcing-girls-out-of-secondary-schools/"
              className="text-[#FF3600] hover:underline"
            >
              https://www.icirnigeria.org/how-rape-sexual-assault-harassment-is-forcing-girls-out-of-secondary-schools/
            </a>
          </div>
          <div>
            <a
              href="https://pija.com.ng/what-is-varsh/special-feature/03/2022/"
              className="text-[#FF3600] hover:underline"
            >
              https://pija.com.ng/what-is-varsh/special-feature/03/2022/
            </a>
          </div>
          <div>
            <a
              href="https://edugist.org/tag/varsh-foundation-trains-students-in-sex-education/"
              className="text-[#FF3600] hover:underline"
            >
              https://edugist.org/tag/varsh-foundation-trains-students-in-sex-education/
            </a>
          </div>
          <div>
            <a
              href="https://edugist.org/empowering-girls-through-menstrual-hygiene-education-varsh-teachers-educate-students/"
              className="text-[#FF3600] hover:underline"
            >
              https://edugist.org/empowering-girls-through-menstrual-hygiene-education-varsh-teachers-educate-students/
            </a>
          </div>
          <div>
            <a
              href="https://edugist.org/oau-students-launch-initiative-to-combat-sgbv-in-campus-communities-2/"
              className="text-[#FF3600] hover:underline"
            >
              https://edugist.org/oau-students-launch-initiative-to-combat-sgbv-in-campus-communities-2/
            </a>
          </div>
          <div>
            <a
              href="https://businessday.ng/news/article/oau-students-unveils-project-to-fight-sexual-violence/"
              className="text-[#FF3600] hover:underline"
            >
              https://businessday.ng/news/article/oau-students-unveils-project-to-fight-sexual-violence/
            </a>
          </div>
          <div>
            <a
              href="https://guardian.ng/features/education/firm-oau-students-partner-to-tackle-sexual-violence-on-campus/"
              className="text-[#FF3600] hover:underline"
            >
              https://guardian.ng/features/education/firm-oau-students-partner-to-tackle-sexual-violence-on-campus/
            </a>
          </div>
          <div>
            <a
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: "Aworanti Salvation Grace",
              title: "Executive Director",
              bio: "Aworanti Salvation Grace is the founder and team lead at VARSH Foundation. She is a project manager, humanitarian, environmental activist, and gender expert who embodies responsive leadership and a commitment to positive change. Salvation Grace passionately advocates for sustainable development and works tirelessly to combat gender-based violence and discrimination through various initiatives that empower young girls and women. A visionary leader, she also organises the annual Ila Orangun Youth Conference, nurturing future leaders in her community. A recognised trailblazer, Salvation Grace has received multiple awards for her dedication to creating a brighter future for vulnerable populations. She graduated from the Department of Philosophy at Obafemi Awolowo University, Ile-Ife.",
            },
            {
              name: "Abioye Ismat",
              title: "Administrative Secretary",
              bio: "Abioye Ismat is an undergraduate Public Health student at Osun State University. Passionate about health equity and wellness, she drives community impact through various initiatives. As a Public Health enthusiast, volunteer, and emerging Data Analyst, her pursuits include researching, data analysis, and assisting. Her skills span health education, public speaking, research methods, and community development. Outside of academics, she enjoys cooking and baking.",
            },
            {
              name: "Akande Michael, O",
              title: "Director of Finance and Fundraising",
              bio: "Akande Michael is a highly skilled social analyst, adept business manager, versatile administrator, accomplished media expert, advocate, and humanitarian committed to serving humanity. He completed his Business Management and Administration studies at Osun State Polytechnic and earned a Diploma in Food and Beverages Management from Universita Bocconi. His professional ambitions are centred within the hospitality industry, and he demonstrates a fervent dedication to growth and development. Michael currently serves as the Director of Finance and Fundraising at VARSH Foundation and is the CEO of Kamis Cuisine. He possesses formidable competencies in project execution, critical thinking, risk management, and problem-solving.",
            },
            {
              name: "Ferosayemi Faith Ogunbona",
              title: "Volunteers Manager",
              bio: "Ferosayemi Faith Ogunbona is a Microbiology graduate of the prestigious Olabisi Onabanjo University. A writer and blogger, she creatively transforms personal experiences into soothing words that resonate with readers. Beyond her creative pursuits, Ferosayemi is a dedicated educator, an avid reader, and a child enthusiast. Her passion for positive affirmations and declarations is a cornerstone of her life. As a volunteer and member, she serves as the Volunteers Director at VARSH Foundation.",
            },
            {
              name: "Hassanat Adebowale",
              title: "Director of Media, Communications and Publicity",
              bio: "Hassanat Adebowale is a law graduate of the prestigious Obafemi Awolowo University. With a passion for literature and a talent for versatile content and technical writing, she has received recognition as an accomplished essayist. In her role, Hassanat combines her legal expertise with her communication skills to craft impactful messages that promote the organisation's mission and advocate for positive community change. With a solid dedication to professional growth and development, Hassanat excels in project management, critical thinking, and creative problem-solving.",
            },
            {
              name: "Shonibare Temitope Emmanuel",
              title: "Director of Human Resources",
              bio: "Shonibare Temitope Emmanuel is an advocate for gender equality, education, and climate action. He currently serves as the Director of Human Resources at VARSH Foundation, where he has helped drive recruitment and community engagement. Emmanuel is passionate about creating educational opportunities for marginalised youth. As a storyteller, his poetry and non-fiction explore themes like love, family, sexuality, grief, and mental health. A fashion enthusiast and designer, he promotes sustainable fashion practices like upcycling. Recognised for his climate work at the Climate Voices Nigeria Boot Camp, Emmanuel is committed to inspiring self-acceptance and authenticity.",
            },
            {
              name: "Chidiebere Nnadiegbulam",
              title: "Monitoring and Evaluation Officer",
              bio: "Chidiebere Nnadiegbulam is an experienced geospatial professional known for his creativity and visualisation abilities. Over the past decade, he has significantly contributed to environmental sustainability and humanitarian efforts through dedicated mentorship at the International Federation of Surveyors (FIG) and environmental protection projects. Chidiebere is dedicated to driving innovations and making a lasting impact through cutting-edge geospatial technologies and community-focused initiatives. When not working, he enjoys exploring the wonders of God's creation in nature, which continually fuels his creativity and passion.",
            },
            {
              name: "Barnabas Benjamin-lorguma",
              title: "Director of Campus Interventions",
              bio: "Barnabas Benjamin-Iorguma is the Director of Campus Interventions and an active member of the VARSH Foundation, where he works to create an abuse-free society. He also serves as Managing Editor for the International Food Heroes Agency (IFHA) and Drum Majors for Peace. Barnabas, the Founder and Editor of Consolidation Blog, writes about leadership, security, and social issues. He is a Fellow of the World Institute for Peace (FWIP) and a 2024 Kectil Colleague who volunteers for organisations like Junior Achievement Nigeria, Rotaract Club, and Raising Stars Africa. His interests include volunteering, civic responsibility, research, and entrepreneurship.",
            },
          ].map((member, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Placeholder for patrons - to be filled with actual data */}
          {[1, 2, 3].map((patron, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-lg shadow-md flex flex-col items-center"
            >
              <div className="w-32 h-32 rounded-full bg-gray-200 mb-4"></div>
              <h3 className="text-xl font-bold mb-2">Patron {patron}</h3>
              <p className="text-center text-sm">
                Information about this patron will be added soon.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center">
          Legal Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Placeholder for legal team - to be filled with actual data */}
          {[1, 2, 3].map((member, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-lg shadow-md flex flex-col items-center"
            >
              <div className="w-32 h-32 rounded-full bg-gray-200 mb-4"></div>
              <h3 className="text-xl font-bold mb-2">Legal Advisor {member}</h3>
              <p className="text-center text-sm">
                Information about this legal team member will be added soon.
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
