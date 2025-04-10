import React from "react";
import Image from "next/image";

export default function ProjectsPage() {
  return (
    <main className="px-4 md:px-8 lg:px-12 py-10 md:py-16 max-w-[1200px] mx-auto">
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
            with local communities to spread the child safety message. Our
            mission is to empower communities to protect their children
            proactively, ensuring that every child can thrive without the fear
            of abuse.
          </p>
          <p className="text-base md:text-lg mb-6">
            Our goal is to turn every community into a safeguarding haven for
            children, where their rights are protected, their voices are heard,
            and their futures are free from the trauma of sexual abuse.
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
            Girls Talk is a platform for young girls to engage with successful
            women in various fields. By sharing their stories, experiences, and
            insights, these women inspire and empower the next generation of
            leaders. This initiative aims to shatter stereotypes, encourage
            ambition, and amplify the voices of young girls.
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
              Our school outreach programs are at the core of our preventive
              efforts. We visit schools to provide interactive sessions on
              consent, healthy relationships, sexual abuse and the importance of
              speaking up. Through these programs, we aim to equip children with
              the knowledge they need to protect themselves and their peers and
              report cases of sexual harassment and assault in schools.
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
              VARSH Foundation collaborates with religious institutions to
              promote the message of consent, the importance of safe spaces, and
              the role of faith in supporting survivors. We aim to create
              environments where survivors feel heard and supported.
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
              Our house-to-house campaigns are instrumental in spreading
              awareness about sexual abuse prevention. We engage with
              communities directly, reaching every doorstep and providing
              resources and support to those who need it. We aim to create an
              open dialogue that empowers everyone to become advocates for
              change.
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
              At VARSH Foundation, We provide legal assistance to survivors of
              sexual abuse by helping them navigate the legal system and access
              the support they need. Our legal aid initiative ensures that
              survivors have a voice in the justice system and can seek redress
              for the harm they've suffered.
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
