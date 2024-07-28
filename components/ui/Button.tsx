import { AppRoutes } from "@/lib/constants";
import { InputVariantTypes } from "@/lib/models";
import Link from "next/link";
import { FC } from "react";

interface ButtonProps {
  children: string;
  variant?: InputVariantTypes;
  href: AppRoutes;
}

const returnStylesByType = (type: InputVariantTypes): string => {
  let generalStyles = "text-white font-bold text-[16px] ";

  switch (type) {
    case InputVariantTypes.contained:
      generalStyles += "border-red-200";
      break;

    case InputVariantTypes.outlined:
      generalStyles +=
        "border border-primary px-4 py-3 bg-primary/10 hover:bg-primary hover:shadow-button md:px-8";

      break;
    default:
      break;
  }

  return generalStyles;
};

const Button: FC<ButtonProps> = (props) => {
  const {
    children,
    variant = InputVariantTypes.contained,
    href = AppRoutes.BLANK,
  } = props;

  return href ? (
    <Link href={href}>
      <button className={returnStylesByType(variant)}>{children}</button>
    </Link>
  ) : (
    <button className={returnStylesByType(variant)}>{children}</button>
  );
};

export default Button;
