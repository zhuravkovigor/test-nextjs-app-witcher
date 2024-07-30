import { AppRoutes } from "@/lib/constants";
import { ButtonVariantTypes } from "@/lib/models";
import Link from "next/link";
import { FC } from "react";

interface ButtonProps {
  children: string;
  variant?: ButtonVariantTypes;
  href?: AppRoutes;
  className?: string;
  onClick?: () => void;
}

const returnStylesByType = (type: ButtonVariantTypes): string => {
  let generalStyles = "text-white font-bold text-[16px] ";

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
    onClick,
  } = props;

  return href ? (
    <Link href={href} className={className}>
      <button className={returnStylesByType(variant)}>{children}</button>
    </Link>
  ) : (
    <button
      onClick={onClick}
      className={`${returnStylesByType(variant)} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
