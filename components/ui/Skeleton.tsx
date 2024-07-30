import { FC } from "react";

interface SkeletonProps {
  className?: string;
}

const Skeleton: FC<SkeletonProps> = (props) => {
  const { className } = props;

  return (
    <div
      className={`w-full h-full animate-pulse bg-zinc-700 ${className}`}
    ></div>
  );
};

export default Skeleton;
