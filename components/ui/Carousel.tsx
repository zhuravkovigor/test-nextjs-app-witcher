"use client";

import {
  ICarouselItem,
  TypographyFontWeight,
  TypographyVariantTypes,
} from "@/lib/models";
import { useState, type FC } from "react";

import ArrowLeftIcon from "@/lib/assets/ArrowLeft";
import { PageSizes } from "@/lib/constants/page";
import { percentage } from "@/lib/utils/math";
import { motion } from "framer-motion";
import { useWindowSize } from "usehooks-ts";
import Typography from "./Typography";

interface CarouselProps {
  items: ICarouselItem[];
  title?: string;
  className?: string;
}

enum StepSizes {
  MOBILE = 220,
  DESKTOP = 315,
  TABLET = 260,
}

const returnCountOfStepsByWindowWidth = (
  width: number,
  countOfItems: number
) => {
  if (width >= PageSizes.DESKTOP) {
    return countOfItems % 4;
  }

  if (width >= PageSizes.TABLET) {
    return countOfItems - 2;
  }

  return countOfItems - 1;
};

const returnStepSizesByPageWidth = (width: number) => {
  if (width >= PageSizes.DESKTOP) {
    return StepSizes.DESKTOP;
  }

  if (width >= PageSizes.TABLET) {
    return StepSizes.TABLET;
  }

  return StepSizes.MOBILE;
};

const Carousel: FC<CarouselProps> = (props) => {
  const { items, className = "", title = "" } = props;

  const { width = 1440 } = useWindowSize();

  const [xAxis, setXAxis] = useState(0);
  const [activeStep, setActiveStep] = useState(0);

  const handleNextSlide = () => {
    if (!hasNextStep) return;
    setXAxis((prev) => (prev -= returnStepSizesByPageWidth(width)));
    setActiveStep((prev) => (prev += 1));
  };

  const handlePrevSlide = () => {
    if (!hasLastStep) return;
    setXAxis((prev) => (prev += returnStepSizesByPageWidth(width)));
    setActiveStep((prev) => (prev -= 1));
  };

  const countOfSteps = returnCountOfStepsByWindowWidth(width, items.length);

  const hasNextStep = countOfSteps !== activeStep;
  const hasLastStep = activeStep !== 0;

  const percentageOfCarousel = percentage(activeStep, countOfSteps);

  return (
    <div className={`container ${className} h-[450px] lg:h-[600px]`}>
      <div className="flex mt-12 justify-between items-center text-white">
        <Typography
          fontWeight={TypographyFontWeight.BOLD}
          variant={TypographyVariantTypes.H2}
        >
          {title}
        </Typography>

        <div className="flex items-center gap-2 md:gap-6 lg:gap-8">
          <ArrowLeftIcon
            onClick={handlePrevSlide}
            className={`${hasLastStep ? "text-primary" : "text-zinc-400"} w-[32px]`}
          />
          <ArrowLeftIcon
            onClick={handleNextSlide}
            className={`${hasNextStep ? "text-primary" : "text-zinc-400"} w-[32px] scale-x-[-1]`}
          />
        </div>
      </div>

      <div className="mt-12 w-full bg-zinc-600 h-[2px] rounded-full relative">
        <div
          style={{
            width: percentageOfCarousel + "%",
          }}
          className="transition-all duration-300 bg-primary w-1/2 absolute h-[2px] rounded-full"
        />
      </div>

      <div className="text-white max-w-[500px] relative mt-12">
        <motion.div
          className="absolute flex gap-5"
          transition={{
            type: "tween",
          }}
          animate={{
            x: xAxis,
          }}
        >
          {items.map((element) => (
            <motion.div key={element.key}>{element.Element}</motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Carousel;
