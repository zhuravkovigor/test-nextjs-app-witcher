"use client";

import {
  ButtonVariantTypes,
  TypographyFontWeight,
  TypographyVariantTypes,
} from "@/lib/models";
import { sleep } from "@/lib/utils/promises";
import Image from "next/image";
import { useEffect, useState, type FC } from "react";
import Button from "../ui/Button";
import Typography from "../ui/Typography";
import GallerySkeleton from "./GallerySkeleton";

const Gallery: FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    sleep(1).then(() => {
      setIsLoading(false);
    });
  }, []);

  const handleLoadImages = () => {
    setIsLoading(true);

    sleep(1).then(() => {
      setIsLoading(false);
    });
  };

  return (
    <section className="container mt-12 text-white">
      <Typography
        fontWeight={TypographyFontWeight.BOLD}
        variant={TypographyVariantTypes.H2}
      >
        Кадры со съемок
      </Typography>

      {isLoading && <GallerySkeleton />}

      {!isLoading && (
        <div className="flex flex-col lg:flex-row gap-6 relative mt-12">
          <div className="lg:w-1/2">
            <Image
              width={588}
              height={588}
              src="/gallery/photo_1.jpg"
              alt="Photo 1"
              loading="lazy"
              className="w-full h-[296px] lg:h-full object-cover"
            />
          </div>

          <div className="grid w-full lg:w-1/2 lg:grid-cols-2 gap-6">
            <Image
              src="/gallery/photo_2.jpg"
              alt="Photo 1"
              loading="lazy"
              className="w-full h-[296px] lg:h-full object-cover"
              width={588}
              height={588}
            />
            <Image
              src="/gallery/photo_3.jpg"
              alt="Photo 1"
              loading="lazy"
              className="w-full h-[296px] lg:h-full object-cover"
              width={588}
              height={588}
            />
            <Image
              src="/gallery/photo_4.jpg"
              alt="Photo 1"
              loading="lazy"
              className="w-full h-[296px] lg:h-full object-cover"
              width={588}
              height={588}
            />
            <Image
              src="/gallery/photo_5.jpg"
              alt="Photo 1"
              width={588}
              height={588}
              loading="lazy"
              className="w-full h-[296px] lg:h-full object-cover"
            />
          </div>
        </div>
      )}

      <Button
        onClick={handleLoadImages}
        className="w-full mt-6"
        variant={ButtonVariantTypes.outlined}
      >
        Показать еще
      </Button>
    </section>
  );
};

export default Gallery;
