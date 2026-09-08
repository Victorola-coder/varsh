import {
  Area,
  Hero,
  More,
  Varsh,
  Newsletter,
  Initiatives,
} from "./components/home";
import {
  getHero,
  getMore,
  getAbout,
  getNewsletter,
  getInitiatives,
  getThematicAreas,
  getReachStats,
  getStrides,
} from "@/lib/content";

// Content reads are cached and tag-revalidated on save (see lib/content.ts),
// so this renders statically and still updates the moment an admin saves.

export default async function Home() {
  const [hero, more, about, newsletter, initiatives, areas, stats, strides] =
    await Promise.all([
      getHero(),
      getMore(),
      getAbout(),
      getNewsletter(),
      getInitiatives(),
      getThematicAreas(),
      getReachStats(),
      getStrides(),
    ]);

  return (
    <main>
      <Hero hero={hero} />
      <Area areas={areas} stats={stats} />
      <More more={more} />
      <Initiatives initiatives={initiatives} />
      <Varsh about={about} strides={strides} />
      <Newsletter newsletter={newsletter} />
    </main>
  );
}
