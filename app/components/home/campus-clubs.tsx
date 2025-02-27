"use client";

import Link from "next/link";
import { Card, Image } from "../ui";

interface ClubData {
  id: number;
  name: string;
  location: string;
  clubName: string;
  imageUrl: string;
}

const clubs: ClubData[] = [
  {
    id: 1,
    name: "Obafemi Awolowo University",
    location: "Ile-Ife, Osun State",
    clubName: "VARSH OAU Club",
    imageUrl: "/images/clubs/oau.png",
  },
  {
    id: 2,
    name: "University of Ilorin",
    location: "Kwara State",
    clubName: "VARSH UNILORIN Club",
    imageUrl: "/images/clubs/unilorin.png",
  },
  {
    id: 3,
    name: "Federal University Lokoja",
    location: "Lokoja, Kogi State",
    clubName: "VARSH FULOKOJA Club",
    imageUrl: "/images/clubs/fulokoja.png",
  },
  {
    id: 4,
    name: "Federal University Lokoja",
    location: "Lokoja, Kogi State",
    clubName: "VARSH FULOKOJA Club",
    imageUrl: "/images/clubs/fulokoja.png",
  },
  {
    id: 5,
    name: "Nigerian Institute of Journalism",
    location: "Ikeja, Lagos State",
    clubName: "VARSH NIJ Club",
    imageUrl: "/images/clubs/nij.png",
  },
  {
    id: 6,
    name: "University of Ilorin",
    location: "Kwara State",
    clubName: "VARSH UNILORIN Club",
    imageUrl: "/images/clubs/unilorin.png",
  },
  {
    id: 7,
    name: "University of Ilorin",
    location: "Kwara State",
    clubName: "VARSH UNILORIN Club",
    imageUrl: "/images/clubs/unilorin.png",
  },
  {
    id: 8,
    name: "Obafemi Awolowo University",
    location: "Ile-Ife, Osun State",
    clubName: "VARSH OAU Club",
    imageUrl: "/images/clubs/oau.png",
  },
  {
    id: 9,
    name: "Federal University Lokoja",
    location: "Lokoja, Kogi State",
    clubName: "VARSH FULOKOJA Club",
    imageUrl: "/images/clubs/fulokoja.png",
  },
  {
    id: 10,
    name: "Nigerian Institute of Journalism",
    location: "Ikeja, Lagos State",
    clubName: "VARSH NIJ Club",
    imageUrl: "/images/clubs/nij.png",
  },
  {
    id: 11,
    name: "Nigerian Institute of Journalism",
    location: "Ikeja, Lagos State",
    clubName: "VARSH NIJ Club",
    imageUrl: "/images/clubs/nij.png",
  },
  {
    id: 12,
    name: "Nigerian Institute of Journalism",
    location: "Ikeja, Lagos State",
    clubName: "VARSH NIJ Club",
    imageUrl: "/images/clubs/nij.png",
  },
];

export default function CampusClubs() {
  return (
    <section className="px-[50px] py-[64px]">
      <h2 className="text-center text-[40px] font-bold text-[#1D1D1D] mb-12">
        Campus Clubs
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {clubs.map((club) => (
          <Link href={`/clubs/${club.id}`} key={club.id}>
            <div className="relative h-[220px] overflow-hidden rounded-[12px] group">
              <Image
                src={club.imageUrl}
                alt={club.name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-[22px] font-bold leading-tight mb-1">
                    {club.name}
                  </h3>
                  <p className="text-sm text-white mt-1">
                    {club.location} - {club.clubName}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
