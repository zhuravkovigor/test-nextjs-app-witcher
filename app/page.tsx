import type { Metadata, NextPage } from "next";

import { Hero } from "@/components/parts";
import Actors from "@/components/parts/Actors";
import { returnSEO } from "@/lib/utils/meta";

export const metadata: Metadata = {
  ...returnSEO({ title: "Ведьмак | Сериал" }),
};

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <Actors />
    </>
  );
};

export default Home;
