import React from "react";
import Image from "next/image";
import { getTeam } from "@/lib/content";

export default async function AboutPage() {
  const everyone = await getTeam();
  const team = everyone.filter((m) => m.group === "team");
  const patrons = everyone.filter((m) => m.group === "patrons");
  const legal = everyone.filter((m) => m.group === "legal");

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
          {team.map((member, index) => (
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
              <p className="text-[#FF3600] font-medium mb-4">{member.role}</p>
              <p className="text-sm">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center">
          Patrons and Matrons
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {patrons.map((patron, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-bold mb-2">{patron.name}</h3>
              <p className="text-[#FF3600] font-medium mb-4">{patron.role}</p>
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
          {legal.map((member, index) => (
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
              <p className="text-[#FF3600] font-medium mb-4">{member.role}</p>
              <p className="text-sm">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
