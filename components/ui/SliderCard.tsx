import {
  ICarouselCard,
  TypographyFontWeight,
  TypographyVariantTypes,
} from "@/lib/models";
import Image from "next/image";
import { FC } from "react";
import Typography from "./Typography";

interface SliderCardProps extends ICarouselCard {}

const SliderCard: FC<SliderCardProps> = (props) => {
  const { title, actor, image, description } = props;

  return (
    <div className="relative overflow-hidden group h-[280px] md:h-[360px] lg:h-[400px] w-[216px] md:w-[256px] lg:w-[282px]">
      <Image
        objectPosition="40% 1%"
        layout="fill"
        objectFit="cover"
        src={image}
        alt={title}
        className="relative -z-20"
      />

      <div className="absolute group-hover:top-5 transition-all duration-300 top-[200px] md:top-[280px] lg:top-[310px] left-[25px]">
        <Typography
          className="z-10"
          fontWeight={TypographyFontWeight.BOLD}
          variant={TypographyVariantTypes.H4}
        >
          {title}
        </Typography>
        <Typography className="mt-2" variant={TypographyVariantTypes.P}>
          {actor}
        </Typography>
      </div>

      <div className="absolute group-hover:opacity-100 opacity-0 transition top-0 left-0 w-full h-full bg-gradient-to-t from-black/40 -z-10"></div>

      <div className="z-10 absolute transition-all duration-300 bottom-[-100px] left-[25px] group-hover:bottom-[20px]">
        {description}
      </div>
    </div>
  );
};

export default SliderCard;
