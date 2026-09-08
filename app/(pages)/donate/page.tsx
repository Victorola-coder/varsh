import React from "react";
import Link from "next/link";

export default function DonatePage() {
  const donationOptions = [
    {
      amount: "₦5,000",
      description: "Can provide educational materials for 5 children",
      impact:
        "Help provide essential educational materials on consent and personal boundaries for children.",
    },
    {
      amount: "₦10,000",
      description: "Can support a community awareness campaign",
      impact:
        "Fund a community awareness campaign to educate more people about sexual abuse prevention.",
    },
    {
      amount: "₦25,000",
      description: "Can train 5 volunteers for school outreach",
      impact:
        "Help train our volunteers who conduct educational sessions in schools across Nigeria.",
    },
    {
      amount: "₦50,000",
      description: "Can fund a Girls Talk session",
      impact:
        "Support a Girls Talk session that connects young girls with mentors and role models.",
    },
    {
      amount: "₦100,000",
      description: "Can support a Walk Against Rape event",
      impact:
        "Help fund a community Walk Against Rape event to raise awareness and support survivors.",
    },
    {
      amount: "Other",
      description: "Choose your own amount",
      impact: "Every contribution makes a difference, no matter the size.",
    },
  ];

  return (
    <main className="px-4 md:px-8 lg:px-12 py-10 md:py-[150px] max-w-[1200px] mx-auto">
      <section className="mb-12">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8">
          Support Our Mission
        </h1>
        <p className="text-base md:text-lg text-center max-w-3xl mx-auto">
          Your donation helps us create a safer, more equal world free from
          sexual abuse. Every contribution makes a difference in the lives of
          survivors and communities we serve.
        </p>
      </section>

      <section className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-50 p-6 md:p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-6">Make a Donation</h2>
          <div className="space-y-6">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {donationOptions.map((option, index) => (
                <div
                  key={index}
                  className={`border-2 ${
                    index === 0 ? "border-[#FF3600]" : "border-gray-200"
                  } rounded-lg p-4 text-center cursor-pointer hover:border-[#FF3600] transition-colors`}
                >
                  <p className="font-bold text-xl mb-2">{option.amount}</p>
                  <p className="text-sm text-gray-600">{option.description}</p>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <label
                htmlFor="customAmount"
                className="block text-gray-700 font-medium"
              >
                Custom Amount (₦)
              </label>
              <input
                type="number"
                id="customAmount"
                name="customAmount"
                placeholder="Enter amount"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF3600]"
              />
            </div>

            <div className="space-y-4">
              <h3 className="font-medium">Payment Frequency</h3>
              <div className="flex gap-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="frequency"
                    value="oneTime"
                    className="mr-2 text-[#FF3600] focus:ring-[#FF3600]"
                    defaultChecked
                  />
                  One-time
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="frequency"
                    value="monthly"
                    className="mr-2 text-[#FF3600] focus:ring-[#FF3600]"
                  />
                  Monthly
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="frequency"
                    value="annually"
                    className="mr-2 text-[#FF3600] focus:ring-[#FF3600]"
                  />
                  Annually
                </label>
              </div>
            </div>

            <button className="w-full bg-[#FF3600] text-white py-3 rounded-md font-medium hover:bg-[#e13000] transition-colors">
              Proceed to Payment
            </button>
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-[#252A34] text-white p-6 md:p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Your Impact</h2>
            <p className="mb-6">
              When you donate to VARSH Foundation, you're making a direct impact
              on the lives of survivors and communities across Nigeria. Your
              support helps us:
            </p>
            <ul className="space-y-2 list-disc pl-5">
              <li>Educate children and youth about consent and boundaries</li>
              <li>Support survivors with counseling and legal advocacy</li>
              <li>Train volunteers to lead prevention programs</li>
              <li>Organize awareness campaigns in communities</li>
              <li>Create educational materials and resources</li>
              <li>Provide safe spaces for survivors to share their stories</li>
            </ul>
          </div>

          <div className="bg-[#FF360010] p-6 md:p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Other Ways to Give</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium mb-2">Bank Transfer</h3>
                <p className="mb-2">
                  You can make a direct bank transfer to our account:
                </p>
                <div className="bg-white p-4 rounded-lg">
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <span className="font-medium">Bank Name:</span>
                    <span>United Bank of Africa (UBA)</span>
                    <span className="font-medium">Account Name:</span>
                    <span>
                      Voices Against Rape and sexual harrassment Foundation
                    </span>
                    <span className="font-medium">Account Number:</span>
                    <span>1026410129</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-2">In-Kind Donations</h3>
                <p>
                  We also accept in-kind donations such as books, educational
                  materials, and other resources. Please contact us to learn
                  more about our current needs.
                </p>
                <Link
                  href="/contact"
                  className="text-[#FF3600] hover:underline mt-2 inline-block"
                >
                  Contact us about in-kind donations →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Donation FAQ
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-medium mb-2">
              Is my donation tax-deductible?
            </h3>
            <p>
              VARSH Foundation is a registered non-profit organization in
              Nigeria. Please consult with your tax advisor about the tax
              implications of your donation.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-medium mb-2">
              How will my donation be used?
            </h3>
            <p>
              Your donation will support our programs and initiatives focused on
              sexual abuse prevention, survivor support, and community
              education. We are committed to transparency and responsible use of
              funds.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-medium mb-2">
              Can I make a recurring donation?
            </h3>
            <p>
              Yes, you can choose to make a monthly or annual recurring donation
              to provide consistent support for our work.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-medium mb-2">
              Will I receive a receipt for my donation?
            </h3>
            <p>
              Yes, you will receive a receipt via email for your donation. If
              you need additional documentation, please contact us.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#252A34] text-white p-8 rounded-lg text-center">
        <h2 className="text-2xl font-semibold mb-4">Corporate Partnerships</h2>
        <p className="mb-6 max-w-3xl mx-auto">
          We welcome corporate partnerships and sponsorships. If your
          organization is interested in supporting our mission, please contact
          us to discuss partnership opportunities.
        </p>
        <Link
          href="/contact"
          className="bg-white text-[#252A34] py-3 px-6 rounded-md font-medium hover:bg-gray-100 transition-colors inline-block"
        >
          Explore Corporate Partnerships
        </Link>
      </section>
    </main>
  );
}
