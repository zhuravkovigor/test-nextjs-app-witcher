import { TypographyFontWeight, TypographyVariantTypes } from "@/lib/models";
import Image from "next/image";
import type { FC } from "react";
import Button from "../ui/Button";
import Typography from "../ui/Typography";

const Hero: FC = () => {
  return (
    <section className="overflow-hidden relative h-[353px] md:h-[360px] lg:h-[440px]">
      <Image
        layout="fill"
        objectFit="cover"
        objectPosition="40% 25%"
        className="w-full scale-x-[-1] -z-10 absolute top-0 left-0"
        src="/hero.png"
        alt="Ведьмак"
      />

      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/40 -z-10" />

      <div className="container z-10 text-white pt-10 md:pt-12 lg:pt-20">
        <Typography
          fontWeight={TypographyFontWeight.BOLD}
          variant={TypographyVariantTypes.H1}
        >
          Сериал Ведьмак
        </Typography>
        <Typography
          className="max-w-[280px] md:max-w-[370px] lg:max-w-[424px] mt-4"
          variant={TypographyVariantTypes.P}
        >
          Геральт из Ривии, наемный охотник за чудовищами, перенесший мутации,
          идет навстречу своей судьбе в неспокойном мире, где люди часто
          оказываются куда коварнее чудовищ.
        </Typography>
        <Button className="mt-8">Смотреть сериал</Button>
      </div>
    </section>
  );
};

export default Hero;
