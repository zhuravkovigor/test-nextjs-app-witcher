import type { Metadata, NextPage } from "next";

import { Hero } from "@/components/parts";
import Actors from "@/components/parts/Actors";
import Gallery from "@/components/parts/Gallery";
import YandexMap from "@/components/ui/YandexMap";
import { returnSEO } from "@/lib/utils/meta";

export const metadata: Metadata = {
  ...returnSEO({ title: "Ведьмак | Сериал" }),
};

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <Actors />
      <Gallery />
      <YandexMap />
    </>
  );
};

export default Home;
