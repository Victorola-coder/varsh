import React from "react";
import Image from "next/image";

export default function ProjectsPage() {
  return (
    <main className="px-4 md:px-8 lg:px-12 py-10 md:py-[150px] max-w-[1200px] mx-auto">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12">
        Our Projects and Initiatives
      </h1>

      <section className="mb-16">
        <div className="bg-gray-50 p-6 md:p-8 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Reach Every Child (RECH)
          </h2>
          <p className="text-base md:text-lg mb-4">
            RECH is an acronym for Reach Every Child. It's a project aimed at
            creating awareness about sexual abuse, with emphasis on child sexual
            abuse, in local communities.
          </p>
          <p className="text-base md:text-lg mb-4">
            RECH is our flagship project, dedicated to reaching out to every
            child providing education on consent, sexual abuse, and healthy
            relationships. Through school outreaches, workshops, and awareness
            campaigns, RECH aims to equip children with the knowledge and tools
            they need to recognise and report abuse.
          </p>
          <p className="text-base md:text-lg mb-4">
            Our work also centres on educating communities, parents, and
            guardians on the signs of abuse, how to protect their children, and
            how to foster an environment where children feel safe to speak up.
            We conduct awareness campaigns, workshops, and seminars, engaging
            with local communities to spread the child safety message. This is
            geared towards empowering communities to protect their children
            proactively, ensuring that every child can thrive without the fear
            of abuse.
          </p>
          <p className="text-base md:text-lg mb-6">
            Our goal is to turn every community into a safe haven for children,
            where their rights are protected, their voices are heard, and their
            futures are free from the trauma of sexual abuse.
          </p>

          <div>
            <h3 className="text-xl font-semibold mb-3">Communities Reached:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Asi/Asaba, Osun State</li>
              <li>Oyan, Osun State</li>
              <li>Odeda, Ogun State</li>
              <li>Ikirun, Osun State</li>
              <li>Ifedayo Local Government, Osun State</li>
              <li>Ayedaade Local Government, Osun State</li>
              <li>Okpokwu Local Government, Benue State</li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="w-full h-64 bg-gray-200 rounded-lg relative">
            {/* Replace with actual project image */}
            <div className="absolute inset-0 flex items-center justify-center text-gray-500">
              RECH Project Image
            </div>
          </div>
          <div className="w-full h-64 bg-gray-200 rounded-lg relative">
            {/* Replace with actual project image */}
            <div className="absolute inset-0 flex items-center justify-center text-gray-500">
              RECH Project Image
            </div>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <div className="bg-gray-50 p-6 md:p-8 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Girls Talk
          </h2>
          <p className="text-base md:text-lg">
            Girls Talk is a platform that brings girls together to explore their
            dreams, build confidence, and strengthen their voices. Through open
            conversations, engaging activities, and mentorship, the program
            tackles important topics like leadership, self-esteem, gender
            equality, and personal growth. It's a space where girls are
            encouraged to challenge limits, share their stories, and imagine
            bold futures for themselves and their communities. At its core,
            Girls Talk is about helping girls rise, lead, and shape a world
            where they are seen, heard, and valued.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="w-full h-64 bg-gray-200 rounded-lg relative">
            {/* Replace with actual project image */}
            <div className="absolute inset-0 flex items-center justify-center text-gray-500">
              Girls Talk Image
            </div>
          </div>
          <div className="w-full h-64 bg-gray-200 rounded-lg relative">
            {/* Replace with actual project image */}
            <div className="absolute inset-0 flex items-center justify-center text-gray-500">
              Girls Talk Image
            </div>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <div className="bg-gray-50 p-6 md:p-8 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Project Safe Communities
          </h2>
          <p className="text-base md:text-lg">
            Project Safe Communities is an initiative dedicated to combating
            Sexual and Gender-Based Violence (SGBV) on campuses and in
            surrounding communities. This project empowers young leaders with
            the knowledge and skills to challenge societal norms, promote
            healthy relationships, and create safer spaces through advocacy,
            peer education, and outreach. By fostering collaboration, education,
            and active engagement, we are building a movement that champions
            equality, supports survivors, and works towards a violence-free
            future for all.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="w-full h-64 bg-gray-200 rounded-lg relative">
            {/* Replace with actual project image */}
            <div className="absolute inset-0 flex items-center justify-center text-gray-500">
              Project Safe Communities Image
            </div>
          </div>
          <div className="w-full h-64 bg-gray-200 rounded-lg relative">
            {/* Replace with actual project image */}
            <div className="absolute inset-0 flex items-center justify-center text-gray-500">
              Project Safe Communities Image
            </div>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <div className="bg-gray-50 p-6 md:p-8 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            The Red Dot Gist
          </h2>
          <p className="text-base md:text-lg">
            The Red Dot Gist Project is a vibrant menstrual health education and
            advocacy initiative by VARSH Foundation, designed to break taboos,
            foster open conversations, and equip young people and communities
            with knowledge and resources for managing menstrual health with
            dignity. Through interactive workshops, engaging school visits, pad
            drives, and community outreaches, the project creates safe spaces
            for learning, sharing, and empowerment. By combining education with
            action, Red Dot Gist not only raises awareness but also builds
            confidence and sparks a broader movement toward menstrual health
            equity, ensuring that no girl or woman is left behind because of her
            cycle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="w-full h-64 bg-gray-200 rounded-lg relative">
            {/* Replace with actual project image */}
            <div className="absolute inset-0 flex items-center justify-center text-gray-500">
              The Red Dot Gist Image
            </div>
          </div>
          <div className="w-full h-64 bg-gray-200 rounded-lg relative">
            {/* Replace with actual project image */}
            <div className="absolute inset-0 flex items-center justify-center text-gray-500">
              The Red Dot Gist Image
            </div>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <div className="bg-gray-50 p-6 md:p-8 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            The Boys At It
          </h2>
          <p className="text-base md:text-lg">
            The Boys At It is an initiative by VARSH Foundation dedicated to
            supporting and empowering young boys through education, dialogue,
            and mentorship. Through open conversations on topics like mental
            health, positive masculinity, leadership, and relationships, the
            project creates safe and engaging spaces where boys can openly
            explore the challenges they face and develop the tools they need to
            thrive. By fostering conversations around respect, responsibility,
            and self-awareness, The Boys At It aims to nurture a generation of
            boys who are confident, compassionate, and equipped to contribute
            positively to their communities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="w-full h-64 bg-gray-200 rounded-lg relative">
            {/* Replace with actual project image */}
            <div className="absolute inset-0 flex items-center justify-center text-gray-500">
              The Boys At It Image
            </div>
          </div>
          <div className="w-full h-64 bg-gray-200 rounded-lg relative">
            {/* Replace with actual project image */}
            <div className="absolute inset-0 flex items-center justify-center text-gray-500">
              The Boys At It Image
            </div>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <div className="bg-gray-50 p-6 md:p-8 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            The Top Girls Mentorship Initiative
          </h2>
          <p className="text-base md:text-lg">
            The Top Girls Mentorship Initiative is a signature VARSH program
            created to empower and nurture young girls into confident, capable
            leaders and changemakers. Through a blend of mentorship, engaging
            discussions, and practical guidance, the initiative helps girls
            build their confidence, develop leadership skills, and pursue their
            dreams with purpose. By connecting them with inspiring mentors and
            creating a supportive space for growth, the program equips young
            women to navigate challenges, amplify their voices, and make
            meaningful contributions in their communities and beyond. At its
            heart, the initiative is about investing in the next generation of
            women leaders and creating a future where every girl can thrive.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="w-full h-64 bg-gray-200 rounded-lg relative">
            {/* Replace with actual project image */}
            <div className="absolute inset-0 flex items-center justify-center text-gray-500">
              Top Girls Mentorship Image
            </div>
          </div>
          <div className="w-full h-64 bg-gray-200 rounded-lg relative">
            {/* Replace with actual project image */}
            <div className="absolute inset-0 flex items-center justify-center text-gray-500">
              Top Girls Mentorship Image
            </div>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <div className="bg-gray-50 p-6 md:p-8 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            16 Days of Activism Against GBV Campaigns
          </h2>
          <p className="text-base md:text-lg">
            VARSH Foundation is a proud participant in the annual 16 Days of
            Activism Against Gender-Based Violence, a global campaign dedicated
            to raising awareness and challenging violence against women and
            girls. Each year, we join this important initiative to amplify the
            voices of survivors, promote a zero-tolerance culture towards GBV,
            and engage communities in meaningful dialogue. Through a combination
            of social media, physical engagement, and collaborative
            partnerships, we mobilize youth and advocates to stand against
            violence and work towards creating a safer, more inclusive society.
            Our participation is part of our ongoing commitment to tackling
            gender-based violence and promoting equality for all.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="w-full h-64 bg-gray-200 rounded-lg relative">
            {/* Replace with actual project image */}
            <div className="absolute inset-0 flex items-center justify-center text-gray-500">
              16 Days of Activism Image
            </div>
          </div>
          <div className="w-full h-64 bg-gray-200 rounded-lg relative">
            {/* Replace with actual project image */}
            <div className="absolute inset-0 flex items-center justify-center text-gray-500">
              16 Days of Activism Image
            </div>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <div className="bg-gray-50 p-6 md:p-8 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Walk Against Rape
          </h2>
          <p className="text-base md:text-lg">
            The Walk Against Rape is a community event, bringing together
            advocates, survivors, and allies to raise awareness and challenge
            the culture of silence surrounding sexual abuse. This initiative
            aims to reduce the high incidence of rape and other forms of sexual
            abuse in communities through education and change in the mindset and
            orientation of individuals in the society. It sends a powerful
            message: we stand united against sexual violence, and we are
            committed to making our communities safer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="w-full h-64 bg-gray-200 rounded-lg relative">
            {/* Replace with actual project image */}
            <div className="absolute inset-0 flex items-center justify-center text-gray-500">
              Walk Against Rape Image
            </div>
          </div>
          <div className="w-full h-64 bg-gray-200 rounded-lg relative">
            {/* Replace with actual project image */}
            <div className="absolute inset-0 flex items-center justify-center text-gray-500">
              Walk Against Rape Image
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center">
          Other Initiatives
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold mb-3">School Outreaches</h3>
            <p className="text-base mb-4">
              At the heart of our prevention efforts are our school outreach
              programs. We visit schools to facilitate engaging and interactive
              sessions on topics like consent, healthy relationships, sexual
              abuse, and the importance of speaking out. Our goal is to empower
              young people with the knowledge and confidence to protect
              themselves and their peers, while also encouraging them to report
              incidents of sexual harassment and assault. Through these
              initiatives, we aim to build a foundation for a safer future for
              children and youth.
            </p>
            <div className="w-full h-48 bg-gray-200 rounded-lg relative">
              {/* Replace with actual initiative image */}
              <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                School Outreach Image
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold mb-3">
              Church/Mosque Sensitization
            </h3>
            <p className="text-base mb-4">
              We believe that faith-based institutions play a vital role in
              supporting survivors and fostering safe environments. VARSH
              Foundation works closely with religious institutions to spread the
              message of consent, safe spaces, and the importance of supporting
              survivors. By integrating these crucial conversations into faith
              communities, we aim to create spaces where survivors feel heard,
              valued, and supported on their healing journey.
            </p>
            <div className="w-full h-48 bg-gray-200 rounded-lg relative">
              {/* Replace with actual initiative image */}
              <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                Religious Sensitization Image
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold mb-3">House-to-House Campaign</h3>
            <p className="text-base mb-4">
              Our house-to-house campaigns take awareness directly to the heart
              of the community. We go door-to-door, engaging with families and
              individuals to provide valuable resources and education about
              sexual abuse prevention. These personal interactions help open
              conversations, encourage understanding, and empower everyone to
              become active advocates for change. Through these efforts, we
              strive to create a culture where sexual violence is no longer
              tolerated, and communities are more informed and proactive in
              addressing the issue.
            </p>
            <div className="w-full h-48 bg-gray-200 rounded-lg relative">
              {/* Replace with actual initiative image */}
              <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                House Campaign Image
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold mb-3">Legal Aid</h3>
            <p className="text-base mb-4">
              At VARSH Foundation, we are committed to ensuring that survivors
              of sexual abuse have the support they need to seek justice. Our
              Legal Aid initiative offers survivors the guidance and resources
              necessary to navigate the legal system, ensuring that they can
              pursue redress for the harm they have suffered. By providing
              access to legal assistance, we help give survivors a voice in the
              justice process and support them in their journey towards healing
              and justice.
            </p>
            <div className="w-full h-48 bg-gray-200 rounded-lg relative">
              {/* Replace with actual initiative image */}
              <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                Legal Aid Image
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
