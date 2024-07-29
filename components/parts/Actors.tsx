import { ICarouselCard } from "@/lib/models";
import { generateSlides } from "@/lib/utils/generators";
import { FC } from "react";
import Carousel from "../ui/Carousel";

const slides: ICarouselCard[] = [
  {
    title: "Геральт",
    actor: "Генри Кавилл",
    description:
      "Один из центральных персонажей сериала, лучший друг и неизменный спутник Геральта, трубадур и бабник",
    image: "/slider/gerald.jpg",
  },
  {
    title: "Лютик",
    actor: "Джои Бэти",
    description:
      "Один из центральных персонажей сериала, лучший друг и неизменный спутник Геральта, трубадур и бабник",
    image: "/slider/lutic.png",
  },
  {
    title: "Йеннифэр",
    actor: "Аня Чалотра",
    description:
      "Один из центральных персонажей сериала, лучший друг и неизменный спутник Геральта, трубадур и бабник",
    image: "/slider/ienifer.jpg",
  },
  {
    title: "Цири",
    actor: "Фрейя Аллан",
    description:
      "Один из центральных персонажей сериала, лучший друг и неизменный спутник Геральта, трубадур и бабник",
    image: "/slider/ciri.jpg",
  },
  {
    title: "Эмгыр вар Эмрейс",
    actor: "Барт Эдвардс",
    description:
      "Один из центральных персонажей сериала, лучший друг и неизменный спутник Геральта, трубадур и бабник",
    image: "/slider/emgir.jpg",
  },
  {
    title: "Эмгыр вар Эмрейс",
    actor: "Барт Эдвардс",
    description:
      "Один из центральных персонажей сериала, лучший друг и неизменный спутник Геральта, трубадур и бабник",
    image: "/slider/emgir.jpg",
  },
];

const Actors: FC = () => {
  return (
    <section>
      <Carousel
        title="Актерский состав"
        {...generateSlides(slides)}
        className="mt-10"
      />
    </section>
  );
};

export default Actors;
