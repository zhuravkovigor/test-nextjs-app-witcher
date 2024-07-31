import { FC } from "react";
import { IIcon } from "../models";

interface CloseIconProps extends IIcon {}

const CloseIcon: FC<CloseIconProps> = (props) => {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none">
      <path
        d="M21 3L3 21"
        stroke="black"
        stroke-width="2"
        stroke-linecap="round"
      />
      <path
        d="M21 21L3 3"
        stroke="black"
        stroke-width="2"
        stroke-linecap="round"
      />
    </svg>
  );
};

export default CloseIcon;
