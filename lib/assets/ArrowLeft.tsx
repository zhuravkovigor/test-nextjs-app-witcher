import { FC } from "react";
import { IIcon } from "../models";

interface ArrowLeftIconProps extends IIcon {}

const ArrowLeftIcon: FC<ArrowLeftIconProps> = (props) => {
  return (
    <svg viewBox="0 0 32 32" fill="none" {...props}>
      <g>
        <path
          d="M7.724 15.1219L22.5249 0.361867C23.0099 -0.121444 23.795 -0.120631 24.2791 0.364367C24.7629 0.849302 24.7616 1.63486 24.2766 2.11855L10.3567 16L24.2771 29.8815C24.7621 30.3652 24.7633 31.1503 24.2796 31.6353C24.0369 31.8784 23.719 32 23.4011 32C23.0839 32 22.7672 31.8792 22.525 31.6378L7.724 16.8782C7.49043 16.6458 7.35937 16.3295 7.35937 16C7.35937 15.6706 7.49081 15.3547 7.724 15.1219Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
};

export default ArrowLeftIcon;
