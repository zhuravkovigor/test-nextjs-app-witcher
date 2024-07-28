import { returnSEO } from "@/lib/utils/meta";
import { Metadata, NextPage } from "next";

export const metadata: Metadata = {
  ...returnSEO({ title: "Ведьмак | Сериал" }),
};

const Home: NextPage = () => {
  return (
    <main className="container">
      <h2>Hello World</h2>
    </main>
  );
};

export default Home;
