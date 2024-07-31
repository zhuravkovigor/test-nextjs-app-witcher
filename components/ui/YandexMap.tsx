"use client";

// Don't have key for google cards, so I decide to use yandex maps

import { PageSizes } from "@/lib/constants/page";
import { TypographyFontWeight, TypographyVariantTypes } from "@/lib/models";
import { Map, Placemark, YMaps } from "@pbe/react-yandex-maps";
import { FC } from "react";
import { useWindowSize } from "usehooks-ts";
import Typography from "./Typography";

interface MapProps {}

const mapState = {
  center: [55.751574, 37.573856], // Координаты центра карты
  zoom: 10,
};

const placemarkOptions = {
  iconLayout: "default#image", // Указываем, что будем использовать изображение
  iconImageHref: "./placemark.svg", // Путь к вашему изображению
  iconImageSize: [80, 80], // Размер изображения (ширина, высота)
  iconImageOffset: [-15, -15], // Смещение изображения (по X и Y)
};

const returnMapHeightByWindowWidth = (width: number) => {
  if (width >= PageSizes.DESKTOP) {
    return "540px";
  }

  return;
};

const YandexMap: FC<MapProps> = (props) => {
  const { width = PageSizes.DESKTOP } = useWindowSize();

  return (
    <div className="mt-20 text-white">
      <div className="container">
        <Typography
          className="mb-8"
          fontWeight={TypographyFontWeight.BOLD}
          variant={TypographyVariantTypes.H2}
        >
          Магазины мерча ведьмака
        </Typography>
      </div>

      <div className="md:container">
        <YMaps>
          <Map
            state={mapState}
            style={{
              width: "100%",
              height: returnMapHeightByWindowWidth(width),
            }}
          >
            <Placemark
              geometry={[55.751574, 37.573856]}
              options={placemarkOptions}
            />
          </Map>
        </YMaps>
      </div>
    </div>
  );
};

export default YandexMap;
