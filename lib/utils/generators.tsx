import SliderCard from "@/components/ui/SliderCard";
import { ICarouselCard, ICarouselItem } from "../models";

const exampleWords = ["new", "word", "lie", "idea", "monkey"];

const generateShortKey = () => {
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
