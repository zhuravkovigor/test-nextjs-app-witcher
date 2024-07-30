"use client";

import { FC } from "react";
import Skeleton from "../ui/Skeleton";

const GallerySkeleton: FC = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-6 relative mt-12">
      <div className="lg:w-1/2 ">
        <Skeleton className="h-[296px] md:h-[588px]" />
      </div>

      <div className="grid w-full lg:w-1/2 lg:grid-cols-2 gap-6">
        <Skeleton className="h-[296px] md:h-full" />
        <Skeleton className="h-[296px] md:h-full" />
        <Skeleton className="h-[296px] md:h-full" />
        <Skeleton className="h-[296px] md:h-full" />
      </div>
    </div>
  );
};

export default GallerySkeleton;
