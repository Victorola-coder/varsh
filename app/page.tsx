import {
  Area,
  Hero,
  More,
  Varsh,
  Newsletter,
  Initiatives,
  CampusClubs,
} from "./components/home";

export default function Home() {
  return (
    <main>
      <Hero />
      <Area />
      <More />
      <Initiatives />
      <Varsh />
      <Newsletter />
      <CampusClubs />
    </main>
  );
}
