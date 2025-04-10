import React from "react";
import Link from "next/link";

export default function GetInvolvedPage() {
  return (
    <main className="px-4 md:px-8 lg:px-12 py-10 md:py-16 max-w-[1200px] mx-auto">
      <section className="mb-16">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8">
          Get Involved
        </h1>
        <p className="text-base md:text-lg text-center max-w-3xl mx-auto">
          There are many ways to contribute to our mission of creating a safer,
          more equal world free from sexual abuse. Join us in making a
          difference.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="bg-gray-50 p-6 md:p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Donate</h2>
          <p className="mb-6">
            Your donations help us continue our vital work in communities across
            Nigeria. Every contribution, no matter the size, makes a difference
            in our fight against sexual abuse.
          </p>
          <div className="space-y-4">
            <h3 className="text-xl font-medium">Your donation supports:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Educational workshops for children and youth</li>
              <li>Support services for survivors</li>
              <li>Community awareness campaigns</li>
              <li>Training programs for advocates</li>
              <li>Operational costs to sustain our work</li>
            </ul>
            <button className="bg-[#FF3600] text-white py-3 px-6 rounded-md hover:bg-[#e13000] transition-colors mt-4">
              Donate Now
            </button>
          </div>
        </div>

        <div className="bg-[#252A34] text-white p-6 md:p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Join Our Community</h2>
          <p className="mb-6">
            Become part of our growing network of advocates, supporters, and
            change-makers. Stay connected and informed about our activities and
            impact.
          </p>
          <div className="space-y-4">
            <h3 className="text-xl font-medium">
              As a community member, you'll receive:
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Regular updates on our projects and initiatives</li>
              <li>Invitations to events and webinars</li>
              <li>Resources on sexual abuse prevention</li>
              <li>Opportunities to volunteer and participate</li>
              <li>Inspiring stories of impact and change</li>
            </ul>
            <button className="bg-white text-[#252A34] py-3 px-6 rounded-md hover:bg-gray-100 transition-colors mt-4">
              Join Now
            </button>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <div className="bg-[#FF360010] p-6 md:p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-6">Become a VARSH Member</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-medium mb-4">Why Become a Member?</h3>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>Gain valuable leadership experience</li>
                <li>Participate in key decision-making processes</li>
                <li>Expand your network with like-minded advocates</li>
                <li>Access exclusive training and professional development</li>
                <li>Help shape the future direction of VARSH</li>
                <li>Make a meaningful impact on society</li>
              </ul>
              <p className="text-sm mb-4">
                <strong>Application Fee:</strong> ₦1,000 (non-refundable)
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-4">Membership Process</h3>
              <ol className="list-decimal pl-6 space-y-2 mb-6">
                <li>Complete the online application form</li>
                <li>Pay the application fee</li>
                <li>Participate in the interview process</li>
                <li>Attend orientation if selected</li>
                <li>Begin your journey as a VARSH member</li>
              </ol>
              <button className="bg-[#FF3600] text-white py-3 px-6 rounded-md hover:bg-[#e13000] transition-colors">
                Apply for Membership
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Join a Campus Club
        </h2>
        <div className="bg-gray-50 p-6 md:p-8 rounded-lg shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-medium mb-4">Campus Activism</h3>
              <p className="mb-4">
                Our campus clubs are at the forefront of creating safer
                educational environments. Join one of our existing clubs or
                start a new one at your institution.
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>Participate in awareness campaigns</li>
                <li>Lead educational workshops</li>
                <li>Organize campus events</li>
                <li>Create support networks</li>
                <li>Be part of a nationwide movement</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-4">Get Started</h3>
              <p className="mb-6">
                Find a VARSH campus club near you or take the initiative to
                establish one at your institution. We provide the resources and
                support you need to make an impact on your campus.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/clubs"
                  className="bg-[#252A34] text-white py-3 px-6 rounded-md hover:bg-[#1a1e24] transition-colors text-center"
                >
                  Find a Club
                </Link>
                <button className="bg-[#FF3600] text-white py-3 px-6 rounded-md hover:bg-[#e13000] transition-colors">
                  Start a Club
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Become a Partner
        </h2>
        <div className="bg-gray-50 p-6 md:p-8 rounded-lg shadow-md">
          <p className="text-center mb-8 max-w-3xl mx-auto">
            We welcome partnerships with organizations, institutions, and
            businesses that share our commitment to creating a safer, more equal
            society. Together, we can amplify our impact and reach more
            communities.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-5 rounded-lg shadow-sm text-center">
              <h3 className="text-xl font-semibold mb-3">Corporate Partners</h3>
              <p className="mb-4">
                Join us in corporate social responsibility initiatives that
                align with your values.
              </p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-sm text-center">
              <h3 className="text-xl font-semibold mb-3">NGO Collaborations</h3>
              <p className="mb-4">
                Partner with us on joint projects and initiatives for greater
                collective impact.
              </p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-sm text-center">
              <h3 className="text-xl font-semibold mb-3">
                Academic Institutions
              </h3>
              <p className="mb-4">
                Collaborate on research, education, and campus safety programs.
              </p>
            </div>
          </div>
          <div className="text-center mt-8">
            <button className="bg-[#252A34] text-white py-3 px-8 rounded-md hover:bg-[#1a1e24] transition-colors">
              Explore Partnership Opportunities
            </button>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Have Questions?
        </h2>
        <div className="bg-[#FF360010] p-6 md:p-8 rounded-lg shadow-md text-center">
          <p className="mb-6 max-w-3xl mx-auto">
            If you have questions about getting involved with VARSH Foundation,
            we're here to help. Reach out to us or visit our FAQs page for more
            information.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="bg-[#FF3600] text-white py-3 px-6 rounded-md hover:bg-[#e13000] transition-colors"
            >
              Contact Us
            </Link>
            <Link
              href="/faqs"
              className="bg-white border border-[#FF3600] text-[#FF3600] py-3 px-6 rounded-md hover:bg-gray-50 transition-colors"
            >
              View FAQs
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
