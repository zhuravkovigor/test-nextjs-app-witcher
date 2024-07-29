import type { Metadata, NextPage } from "next";

import { Hero } from "@/components/parts";
import { returnSEO } from "@/lib/utils/meta";

export const metadata: Metadata = {
  ...returnSEO({ title: "Ведьмак | Сериал" }),
};

const Home: NextPage = () => {
  return (
    <>
      <Hero />
    </>
  );
};

export default Home;
