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
          Find answers to common questions about VARSH Foundation, our work in
          combating sexual and gender-based violence, and how you can support
          our mission.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          About VARSH Foundation
        </h2>

        <div className="space-y-6">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-medium mb-2">
              What is VARSH Foundation?
            </h3>
            <p className="text-base md:text-lg">
              VARSH Foundation is a feminist-led, youth-driven non-profit
              organization established in 2019. We are committed to eradicating
              sexual abuse, child abuse, gender-based violence, and gender
              discrimination in society. Through advocacy, education, and
              community engagement, we work to create a safer environment for
              all, especially women and children.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-medium mb-2">
              What does VARSH stand for?
            </h3>
            <p className="text-base md:text-lg">
              VARSH represents our core values and mission: Voice, Advocacy,
              Resilience, Support, and Hope. These principles guide our work as
              we strive to amplify the voices of survivors, advocate for
              systemic change, build resilient communities, provide support to
              those affected by abuse, and inspire hope for a future free from
              violence.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-medium mb-2">
              What are VARSH Foundation's main focus areas?
            </h3>
            <p className="text-base md:text-lg">
              Our work focuses on several key areas:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Combating sexual and gender-based violence</li>
              <li>Protecting child rights and preventing child abuse</li>
              <li>Promoting women's empowerment and gender equality</li>
              <li>Advocating for peace, justice, and strong institutions</li>
              <li>Providing support services for survivors</li>
              <li>Community education and awareness campaigns</li>
              <li>Youth engagement and leadership development</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          Support for Survivors
        </h2>

        <div className="space-y-6">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-medium mb-2">
              What should I do if I know someone who is a survivor of sexual
              abuse?
            </h3>
            <p className="text-base md:text-lg">
              If you know someone who has experienced sexual abuse:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Listen without judgment and believe them</li>
              <li>Reassure them that it's not their fault</li>
              <li>Respect their decisions and privacy</li>
              <li>
                Encourage them to seek professional help when they're ready
              </li>
              <li>Connect them with VARSH or other support resources</li>
              <li>Continue to support them through their healing journey</li>
            </ul>
            <p className="mt-3">
              Remember that your role is to support, not to pressure or make
              decisions for them.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-medium mb-2">
              How does VARSH support survivors of sexual and gender-based
              violence?
            </h3>
            <p className="text-base md:text-lg">
              VARSH Foundation provides comprehensive support to survivors
              through:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Free and confidential counseling and emotional support</li>
              <li>Legal aid and guidance through reporting processes</li>
              <li>
                Referrals to medical services and mental health professionals
              </li>
              <li>Community-based support groups for survivors</li>
              <li>Advocacy for survivor-centered policies and justice</li>
              <li>Educational resources on healing and recovery</li>
            </ul>
            <p className="mt-3">
              Our support is survivor-centered, trauma-informed, and focused on
              empowerment.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-medium mb-2">
              Is the support provided by VARSH confidential?
            </h3>
            <p className="text-base md:text-lg">
              Yes, confidentiality is a cornerstone of our work with survivors.
              We maintain strict confidentiality standards and protect the
              privacy and dignity of everyone who seeks our support. Information
              shared with us is not disclosed without explicit permission,
              except in situations where there is an immediate risk of harm or
              legal reporting requirements.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          Getting Involved
        </h2>

        <div className="space-y-6">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-medium mb-2">
              How can I get involved with VARSH Foundation?
            </h3>
            <p className="text-base md:text-lg">
              There are several meaningful ways to get involved with our work:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Become a volunteer and contribute your time and skills</li>
              <li>Apply for membership for deeper engagement and leadership</li>
              <li>Make a donation to support our programs and initiatives</li>
              <li>Partner with us for collaborations and joint initiatives</li>
              <li>Attend our events and participate in campaigns</li>
              <li>Amplify our message on social media</li>
              <li>Advocate for our cause in your community</li>
            </ul>
            <p className="mt-2">
              Visit our "Get Involved" section to explore these opportunities in
              detail.
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
              Once we receive your application, our team will review it and
              contact you about next steps. For volunteers, we'll match your
              skills with current needs. For membership applications, there may
              be an interview process.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-medium mb-2">
              Why should I become a VARSH Member, and who can be a member?
            </h3>
            <p className="text-base md:text-lg mb-2">
              By becoming a member, you can:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Gain valuable leadership experience in the non-profit sector
              </li>
              <li>
                Participate in key organizational decision-making processes
              </li>
              <li>
                Expand your network with passionate advocates and professionals
              </li>
              <li>
                Access exclusive training and professional development
                opportunities
              </li>
              <li>Help shape VARSH's strategies and direction</li>
              <li>Make a deeper impact in combating gender-based violence</li>
              <li>
                Develop specialized skills in advocacy and social justice work
              </li>
            </ul>
            <p className="text-base md:text-lg mt-3">
              We welcome applications from individuals who are passionate about
              our mission, share our values, and are committed to making a
              difference. This includes both long-term volunteers and newcomers
              who bring fresh perspectives and diverse skills.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-medium mb-2">
              Is there a difference between being a volunteer and a member?
            </h3>
            <p className="text-base md:text-lg">Yes!</p>
            <p className="text-base md:text-lg mt-2">
              <strong>Volunteers</strong> contribute to specific projects and
              activities based on their availability and interests. This is a
              flexible way to support our work and is often the entry point for
              engagement with VARSH.
            </p>
            <p className="text-base md:text-lg mt-2">
              <strong>Members</strong> take on leadership roles, participate in
              organizational governance and decision-making, commit to
              longer-term engagement, and help guide VARSH's strategic
              direction. Membership involves a deeper level of commitment and
              offers more extensive opportunities for professional development
              and leadership.
            </p>
            <p className="text-base md:text-lg mt-2">
              Both roles are essential to our success and impact.
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
              To apply, complete our online application form through the "Get
              Involved" section of our website. The form will ask for your
              personal information, background, motivation, and how you hope to
              contribute to VARSH's mission. After submission, you'll receive a
              confirmation email, and our team will review your application.
              Shortlisted candidates may be invited for an interview or
              orientation session.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-medium mb-2">
              Is there a cost of applying to become a VARSH Member?
            </h3>
            <p className="text-base md:text-lg">
              There is a non-refundable application fee of ₦1,000. This fee
              helps support the administrative costs of the application process,
              including interviews, training materials, and member onboarding.
              The fee demonstrates a level of commitment and helps us maintain
              the quality of our membership program. If the fee presents a
              financial hardship, please contact us as we may be able to offer
              fee waivers in certain circumstances.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-medium mb-2">
              What should I know before applying?
            </h3>
            <p className="text-base md:text-lg">
              Before applying to be a volunteer or member of VARSH Foundation,
              here are important considerations:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>
                <strong>Mission alignment:</strong> Ensure our focus on
                combating sexual abuse and gender-based violence aligns with
                your values and interests.
              </li>
              <li>
                <strong>Commitment level:</strong> Consider the time and energy
                you can realistically commit. Membership requires more regular
                involvement than volunteering.
              </li>
              <li>
                <strong>Emotional readiness:</strong> Our work deals with
                sensitive and sometimes distressing topics. Reflect on your
                emotional capacity to engage with these issues.
              </li>
              <li>
                <strong>Learning attitude:</strong> We value individuals who are
                open to learning, growing, and sometimes challenging their own
                perspectives.
              </li>
              <li>
                <strong>Team orientation:</strong> Our work is collaborative and
                requires good communication skills and the ability to work
                effectively with diverse team members.
              </li>
            </ul>
            <p className="mt-3">
              If you're uncertain about any aspect of the application process,
              please contact us for clarification before applying.
            </p>
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
              While we don't have strict academic or professional requirements,
              we look for individuals who demonstrate:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Passion for VARSH Foundation's mission and values</li>
              <li>Leadership potential or experience</li>
              <li>Commitment to personal and professional growth</li>
              <li>Strong communication and teamwork skills</li>
              <li>Creativity and problem-solving abilities</li>
              <li>Dedication to community service and social impact</li>
              <li>Integrity and respect for confidentiality</li>
              <li>Willingness to learn about gender-based violence issues</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-medium mb-2">
              What additional hands-on skills are welcome?
            </h3>
            <p className="text-base md:text-lg mb-2">
              These specialized skills can significantly enhance our work and
              may give your application an advantage:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Project management expertise</li>
              <li>Graphic design and visual communication</li>
              <li>Content creation and copywriting</li>
              <li>Fundraising and grant writing experience</li>
              <li>Digital marketing and social media management</li>
              <li>Event planning and coordination</li>
              <li>Data analysis and research skills</li>
              <li>Website development or technical skills</li>
              <li>Training and facilitation experience</li>
              <li>
                Legal knowledge, especially related to gender-based violence
              </li>
              <li>Counseling or psychology background</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-medium mb-2">
              Can I continue volunteering if I'm not selected as a member?
            </h3>
            <p className="text-base md:text-lg">Absolutely!</p>
            <p className="text-base md:text-lg mt-2">
              Volunteers are the backbone of our organization, and your
              contributions remain incredibly valuable regardless of membership
              status. If not selected for membership, you can continue making a
              significant impact through our various volunteer programs. We
              provide all volunteers with meaningful engagement opportunities,
              training, and recognition for their contributions.
            </p>
            <p className="text-base md:text-lg mt-2">
              Additionally, you're welcome to reapply for membership in future
              cycles. We often provide feedback to unsuccessful applicants to
              help strengthen future applications. Many current members were
              initially volunteers who reapplied after gaining more experience
              with our work.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          Partnerships and Donations
        </h2>

        <div className="space-y-6">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-medium mb-2">
              How can my organization partner with VARSH Foundation?
            </h3>
            <p className="text-base md:text-lg">
              We welcome partnerships with organizations that share our
              commitment to ending gender-based violence. Partnership
              opportunities include:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Joint campaigns and awareness initiatives</li>
              <li>Collaborative research and advocacy projects</li>
              <li>Cross-promotional activities</li>
              <li>Resource sharing and capacity building</li>
              <li>Corporate social responsibility programs</li>
              <li>Sponsorship of VARSH events and programs</li>
            </ul>
            <p className="mt-3">
              To discuss partnership possibilities, please contact us at
              varshfoundationng@gmail.com with details about your organization
              and potential areas of collaboration. Our partnership team will
              respond to explore how we can work together effectively.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-medium mb-2">
              How can I donate to VARSH Foundation?
            </h3>
            <p className="text-base md:text-lg">
              Your donations help sustain our programs and expand our impact.
              You can support our work through:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>One-time monetary donations through our website</li>
              <li>Recurring monthly contributions</li>
              <li>Sponsorship of specific programs or initiatives</li>
              <li>In-kind donations of needed supplies or services</li>
              <li>Corporate matching gift programs</li>
            </ul>
            <p className="mt-3">
              All donations to VARSH Foundation are used responsibly and
              transparently to advance our mission. Visit our "Donate" page for
              specific donation methods and options. We provide receipts for all
              donations and regular updates on the impact of your support.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          Staying Connected
        </h2>

        <div className="space-y-6">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-medium mb-2">
              How can I stay updated on VARSH Foundation's activities and
              events?
            </h3>
            <p className="text-base md:text-lg">
              Stay connected with our work through multiple channels:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Follow us on social media platforms (@VARSHFoundation)</li>
              <li>Subscribe to our monthly newsletter</li>
              <li>Visit our website's News & Events section regularly</li>
              <li>Join our WhatsApp community for real-time updates</li>
              <li>Attend our virtual and in-person events</li>
            </ul>
            <p className="mt-3">
              Our communications provide updates on campaigns, success stories,
              volunteer opportunities, and ways to support our mission.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-medium mb-2">
              How can I contact VARSH Foundation for more questions or
              assistance?
            </h3>
            <p className="text-base md:text-lg">
              We're here to help and answer your questions through several
              channels:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Email: varshfoundationng@gmail.com</li>
              <li>Contact form on our website</li>
              <li>Phone: [Phone number - during office hours]</li>
              <li>Social media direct messages</li>
            </ul>
            <p className="mt-3">
              For general inquiries, our response time is typically 1-2 business
              days. For urgent matters related to abuse cases, we prioritize
              rapid response. All communications are handled with
              confidentiality and care.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#FF360010] p-6 md:p-8 rounded-lg shadow-md text-center">
        <h2 className="text-2xl font-semibold mb-4">Still Have Questions?</h2>
        <p className="mb-6 max-w-3xl mx-auto">
          If you couldn't find the answer to your question, please feel free to
          reach out to us directly. We're committed to transparency and are
          happy to provide any additional information you need about our work.
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
