import SliderCard from "@/components/ui/SliderCard";
import FacebookIcon from "../assets/Facebook";
import InstagramIcon from "../assets/Instagram";
import VKIcon from "../assets/VK";
import { ENV } from "../constants/env";
import { ICarouselCard, ICarouselItem } from "../models";
import { IMedia } from "../models/media";

const exampleWords = ["new", "word", "lie", "idea", "monkey"];

export const generateShortKey = () => {
  let counter = 0;

  return () => {
    counter += 1;

    return (
      exampleWords[Math.floor(Math.random() * exampleWords.length)] +
      " " +
      counter
    );
  };
};

const shortKeyHandle = generateShortKey();

export const generateSlides = (
  slides: ICarouselCard[]
): { items: ICarouselItem[] } => {
  return {
    items: slides.map((item) => ({
      key: shortKeyHandle(),
      Element: <SliderCard {...item} />,
    })),
  };
};

export const generateMediaByENV = () => {
  const resultList: IMedia[] = [];

  if (ENV.INSTAGRAM_LINK) {
    resultList.push({
      href: ENV.INSTAGRAM_LINK,
      Element: InstagramIcon,
      key: shortKeyHandle(),
    });
  }

  if (ENV.FACEBOOK_LINK) {
    resultList.push({
      href: ENV.FACEBOOK_LINK,
      Element: FacebookIcon,
      key: shortKeyHandle(),
    });
  }

  if (ENV.VK_LINK) {
    resultList.push({
      href: ENV.VK_LINK,
      Element: VKIcon,
      key: shortKeyHandle(),
    });
  }

  return resultList;
};
