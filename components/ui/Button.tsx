import { AppRoutes } from "@/lib/constants";
import { ButtonTypes, ButtonVariantTypes } from "@/lib/models";
import Link from "next/link";
import { FC } from "react";
import Loader from "./Loader";

interface ButtonProps {
  children: string;
  variant?: ButtonVariantTypes;
  href?: AppRoutes;
  className?: string;
  onClick?: () => void;
  type?: ButtonTypes;
  extraClassNameType?: string;
  isLoading?: boolean;
}

const returnStylesByType = (
  type: ButtonVariantTypes,
  extraClassName?: string
): string => {
  let generalStyles = `text-white flex items-center gap-4 font-bold text-[16px] ${extraClassName} `;

  switch (type) {
    case ButtonVariantTypes.contained:
      generalStyles +=
        "px-4 py-3 bg-primary hover:bg-primary-hover hover:shadow-button md:px-8";
      break;
    case ButtonVariantTypes.outlined:
      generalStyles +=
        "border border-primary px-4 py-3 bg-primary/10 hover:bg-primary-hover hover:shadow-button md:px-8";
      break;
    default:
      break;
  }

  return generalStyles;
};

const Button: FC<ButtonProps> = (props) => {
  const {
    children,
    variant = ButtonVariantTypes.contained,
    href = AppRoutes.BLANK,
    className = "",
    extraClassNameType = "",
    onClick,
    isLoading = false,
    type = ButtonTypes.BUTTON,
  } = props;

  return href ? (
    <Link href={href} className={className}>
      <button className={returnStylesByType(variant, extraClassNameType)}>
        {children}
      </button>
    </Link>
  ) : (
    <button
      type={type}
      onClick={onClick}
      className={`${returnStylesByType(variant)} ${className}`}
    >
      {isLoading && <Loader />}
      {children}
    </button>
  );
};

export default Button;
