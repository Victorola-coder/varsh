import {
  Area,
  Hero,
  More,
  Varsh,
  Newsletter,
  Initiatives,
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
    </main>
  );
}
