import { TypographyFontWeight, TypographyVariantTypes } from "@/lib/models";
import { FC } from "react";

interface TypographyProps {
  variant?: TypographyVariantTypes;
  children?: string;
  fontWeight?: TypographyFontWeight;
  className?: string;
}

const Typography: FC<TypographyProps> = (props) => {
  const {
    variant,
    children = "",
    fontWeight = TypographyFontWeight.REGULAR,
    className = "",
  } = props;

  switch (variant) {
    case TypographyVariantTypes.H1:
      return (
        <h1
          className={`${fontWeight} text-[32px] md:text-[40px] lg:text-[56px] ${className}`}
        >
          {children}
        </h1>
      );
    case TypographyVariantTypes.H2:
      return (
        <h2
          className={`${fontWeight} text-[28px] md:text-[32px] lg:text-[40px] ${className}`}
        >
          {children}
        </h2>
      );
    case TypographyVariantTypes.H3:
      return (
        <h3
          className={`${fontWeight} text-[36px] md:text-[32px] lg:text-[40px] ${className}`}
        >
          {children}
        </h3>
      );
    case TypographyVariantTypes.H4:
      return (
        <h4
          className={`${fontWeight} text-[16px] md:text-[20px] lg:text-[24px] ${className}`}
        >
          {children}
        </h4>
      );
    case TypographyVariantTypes.H5:
      return (
        <h5 className={`${fontWeight} text-[56px] ${className}`}>{children}</h5>
      );
    case TypographyVariantTypes.H6:
      return (
        <h6 className={`${fontWeight} text-[56px] ${className}`}>{children}</h6>
      );
    case TypographyVariantTypes.P:
    default:
      return (
        <p className={`${fontWeight} leading-[20px] text-[16px] ${className}`}>
          {children}
        </p>
      );
  }
};

export default Typography;
