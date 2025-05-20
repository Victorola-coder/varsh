import React from "react";

export default function ClubsPage() {
  const clubs = [
    {
      name: "Obafemi Awolowo University, Ile-Ife, Osun State",
      contact: "",
    },
    {
      name: "University of Ilorin, Ilorin, Kwara State",
      contact: "",
    },
    {
      name: "Federal University Lokoja, Lokoja, Kogi State",
      contact: "",
    },
    {
      name: "Ahmadu Bello University, Zaria, Kaduna State",
      contact: "",
    },
    {
      name: "Federal University of Agriculture, Abeokuta, Ogun State",
      contact: "",
    },
    {
      name: "Federal University of Technology, Minna, Niger State",
      contact: "",
    },
    {
      name: "Federal University of Technology, Akure, Ondo State",
      contact: "",
    },
    {
      name: "Nigerian Institute of Journalism, Ikeja, Lagos State",
      contact: "",
    },
    {
      name: "Olabisi Onabanjo University, Ago Iwoye, Ogun State",
      contact: "",
    },
    {
      name: "Osun State Polytechnic, Iree, Osun State",
      contact: "",
    },
    {
      name: "Tai Solarin University of Education, Ijebu Ode, Ogun State",
      contact: "",
    },
    {
      name: "Osun State College Of Education, Ila-Orangun, Osun State, in Affiliation With Ekiti State University",
      contact: "",
    },
  ];

  return (
    <main className="px-4 md:px-8 lg:px-12 py-10 md:py-[150px] max-w-[1200px] mx-auto">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12">
        Campus Clubs
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {clubs.map((club, index) => (
          <div
            key={index}
            className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="w-full h-40 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
              {/* Replace with actual campus club logo or image */}
              <div className="text-gray-500 font-medium">Club Image</div>
            </div>
            <h2 className="text-xl font-bold mb-3">{club.name}</h2>
            <div className="flex items-center text-gray-600 mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span>{club.contact || "Contact information coming soon"}</span>
            </div>
            <button className="mt-4 bg-[#FF3600] text-white py-2 px-4 rounded-md hover:bg-[#e13000] transition-colors w-full">
              Join This Club
            </button>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-gray-50 p-6 md:p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">
          Start a VARSH Club in Your Campus
        </h2>
        <p className="text-base md:text-lg mb-6">
          Are you interested in starting a VARSH Foundation club at your
          institution? We welcome the opportunity to expand our network and
          bring our mission to more campuses across Nigeria.
        </p>
        <div className="bg-white p-6 rounded-lg">
          <h3 className="text-xl font-medium mb-4">
            To start a club, you'll need:
          </h3>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>A minimum of 5 dedicated students</li>
            <li>A faculty advisor (recommended)</li>
            <li>Commitment to VARSH Foundation's vision and mission</li>
            <li>Willingness to organize awareness activities on campus</li>
          </ul>
          <button className="bg-[#252A34] text-white py-3 px-6 rounded-md hover:bg-[#1a1e24] transition-colors">
            Apply to Start a Club
          </button>
        </div>
      </div>
    </main>
  );
}
