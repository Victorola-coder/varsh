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

// Content is editable from the admin, so render fresh on each request.
export const dynamic = "force-dynamic";

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
