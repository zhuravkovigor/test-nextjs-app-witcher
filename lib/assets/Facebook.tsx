import { FC } from "react";
import { IIcon } from "../models";

interface FacebookIconProps extends IIcon {}

const FacebookIcon: FC<FacebookIconProps> = (props) => {
  return (
    <svg {...props} viewBox="0 0 32 32" fill="none" {...props}>
      <g clip-path="url(#clip0_178_565)">
        <path
          d="M16 0C7.164 0 0 7.164 0 16C0 24.836 7.164 32 16 32C24.836 32 32 24.836 32 16C32 7.164 24.836 0 16 0ZM20 10.6667H18.2C17.4827 10.6667 17.3333 10.9613 17.3333 11.704V13.3333H20L19.7213 16H17.3333V25.3333H13.3333V16H10.6667V13.3333H13.3333V10.256C13.3333 7.89733 14.5747 6.66667 17.372 6.66667H20V10.6667Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_178_565">
          <rect width="32" height="32" fill="currentColor" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default FacebookIcon;
