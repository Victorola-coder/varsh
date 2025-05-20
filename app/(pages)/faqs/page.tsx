import React from "react";
import Link from "next/link";

export default function FaqsPage() {
  return (
    <main className="px-4 md:px-8 lg:px-12 py-10 md:py-[150px] max-w-[1200px] mx-auto">
      <section className="mb-12">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8">
          Frequently Asked Questions
        </h1>
        <p className="text-base md:text-lg text-center max-w-3xl mx-auto">
          Find answers to common questions about VARSH Foundation, our work, and
          how you can get involved.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          Getting Involved
        </h2>

        <div className="space-y-6">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-medium mb-2">
              What should I do if I know someone who is a survivor of sexual
              abuse?
            </h3>
            <p className="text-base md:text-lg">
              If you know someone who has experienced sexual abuse, be
              supportive and encourage them to seek help. They can reach out to
              us or local authorities. Your understanding and support are
              crucial.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-medium mb-2">
              How can I get involved with VARSH Foundation?
            </h3>
            <p className="text-base md:text-lg">
              There are several ways to get involved: become a member,
              volunteer, donate, collaborate, or participate in our events.
              Visit our "Get Involved" section to explore options.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-medium mb-2">
              How can I become a volunteer or member?
            </h3>
            <p className="text-base md:text-lg">
              To become a volunteer or member of VARSH Foundation, please follow
              these steps:
            </p>
            <ol className="list-decimal pl-6 space-y-2 mt-2">
              <li>
                Visit our website and navigate to the "Get Involved" section.
              </li>
              <li>
                Select the "Become a Member" or "Volunteer" option, depending on
                your interest.
              </li>
              <li>
                Fill out the application form with your details and answer the
                provided questions.
              </li>
              <li>Submit your application.</li>
            </ol>
            <p className="mt-2">
              Once we receive your application, our team will review it, and you
              will be notified about its status. For more detailed information,
              please refer to our website's "Get Involved" section.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-medium mb-2">
              Why should I become a VARSH Member, and who can be a member?
            </h3>
            <p className="text-base md:text-lg mb-2">
              By becoming a member, you can gain valuable leadership experience,
              participate in key decision-making processes, expand your network
              with like-minded advocates, access exclusive training and
              professional development opportunities, have a greater say in
              shaping the direction of VARSH, and contribute to meaningful
              social impact initiatives.
            </p>
            <p className="text-base md:text-lg">
              We welcome applications from individuals passionate about our
              mission, whether you're a long-term volunteer or new to VARSH. We
              encourage everyone to step up and take this opportunity to make an
              impact on a larger scale.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-medium mb-2">
              Is there a difference between being a volunteer and a member?
            </h3>
            <p className="text-base md:text-lg">Yes!</p>
            <p className="text-base md:text-lg mt-2">
              While volunteers contribute to specific projects, members take on
              leadership roles, participate in decision-making processes, and
              help guide the organisation's direction. Members also receive
              specialised training and exclusive access to professional
              development opportunities.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          Application Process
        </h2>

        <div className="space-y-6">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-medium mb-2">How do I apply?</h3>
            <p className="text-base md:text-lg">
              To apply, complete our online application form. You'll be
              contacted with further details about the selection process.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-medium mb-2">
              Is there a cost of applying to become a VARSH Member?
            </h3>
            <p className="text-base md:text-lg">
              There is a non-refundable application fee of ₦1,000. This fee
              helps support the administrative costs of the application process.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-medium mb-2">
              What should I know before applying?
            </h3>
            <p className="text-base md:text-lg">
              Before applying to be a volunteer or member of VARSH Foundation,
              here are a few things to keep in mind:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>
                Familiarise yourself with our mission and core values to ensure
                alignment with your own beliefs and goals.
              </li>
              <li>
                Understand the commitment required. Our work often deals with
                sensitive topics, so a strong dedication to our cause is
                essential.
              </li>
              <li>
                Review the specific requirements and expectations for volunteers
                or members as outlined on our website.
              </li>
              <li>
                Feel free to contact us if you have questions or need further
                clarification.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          Application Requirements
        </h2>

        <div className="space-y-6">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-medium mb-2">
              Are there specific qualifications or skills required for
              membership?
            </h3>
            <p className="text-base md:text-lg mb-2">
              While we don't have strict requirements, we look for individuals
              who demonstrate the following:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Passion for Varsh Foundation's mission and values</li>
              <li>Leadership potential or experience</li>
              <li>Commitment to personal and professional growth</li>
              <li>Strong communication and teamwork skills</li>
              <li>Creativity and problem-solving abilities</li>
              <li>Dedication to community service and social impact.</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-medium mb-2">
              What additional hands-on skills are welcome?
            </h3>
            <p className="text-base md:text-lg mb-2">
              Importantly, valuable skills that can contribute to the
              organisation are a significant plus and can give you an edge in
              the selection process. These might include:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Project management expertise</li>
              <li>Graphic design skills</li>
              <li>Fundraising experience</li>
              <li>Marketing and social media skills</li>
              <li>Grant writing abilities</li>
              <li>Specialist knowledge in areas relevant to our mission</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-medium mb-2">
              Can I continue volunteering if I'm not selected as a member?
            </h3>
            <p className="text-base md:text-lg">Absolutely!</p>
            <p className="text-base md:text-lg mt-2">
              Your contributions as a volunteer are always valued and essential
              to our success. We encourage continued involvement in our projects
              and initiatives. And if you are not selected, you're welcome to
              apply again in future rounds. We provide feedback to help you
              strengthen your application for future opportunities. Please note
              that the application fee is non-refundable.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          Becoming a Partner
        </h2>

        <div className="space-y-6">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-medium mb-2">
              How can I become an external partner?
            </h3>
            <p className="text-base md:text-lg">
              We encourage you to contact us directly if you want to become an
              external partner with VARSH Foundation. You can use our contact
              form or send us an email at varshfoundationng@gmail.com. Our
              partnership team will contact you to discuss potential
              collaborations, share information, and explore ways we can work
              together to create a safer world free from gender-based violence
              and sexual abuse.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-medium mb-2">
              How can I donate to VARSH Foundation?
            </h3>
            <p className="text-base md:text-lg">
              To donate, please visit our "Get Involved" section, where you can
              choose your preferred contribution method through monetary
              donations or other means.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          Staying Updated
        </h2>

        <div className="space-y-6">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-medium mb-2">
              How can I stay updated on VARSH Foundation's activities and
              events?
            </h3>
            <p className="text-base md:text-lg">
              You can stay updated by following us on our social media
              platforms, subscribing to our newsletter, and visiting our website
              regularly for events, campaigns, and news updates.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-medium mb-2">
              How can I contact VARSH Foundation for more questions or
              assistance?
            </h3>
            <p className="text-base md:text-lg">
              You can contact us by filling out our contact form on our "Contact
              Us" page or emailing varshfoundationng@gmail.com. We're here to
              help and answer any questions you may have.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#FF360010] p-6 md:p-8 rounded-lg shadow-md text-center">
        <h2 className="text-2xl font-semibold mb-4">Still Have Questions?</h2>
        <p className="mb-6 max-w-3xl mx-auto">
          If you couldn't find the answer to your question, please feel free to
          reach out to us directly.
        </p>
        <Link
          href="/contact"
          className="bg-[#FF3600] text-white py-3 px-6 rounded-md hover:bg-[#e13000] transition-colors inline-block"
        >
          Contact Us
        </Link>
      </section>
    </main>
  );
}
