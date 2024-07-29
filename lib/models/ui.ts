import { ReactNode } from "react";

export enum ButtonVariantTypes {
  outlined = "outlined",
  contained = "contained",
}

export enum TypographyVariantTypes {
  H1 = "h1",
  H2 = "h2",
  H3 = "h3",
  H4 = "h4",
  H5 = "h5",
  H6 = "h6",
  P = "p",
}

export enum TypographyFontWeight {
  BOLD = "font-bold",
  MEDIUM = "font-medium",
  REGULAR = "",
}

export interface ICarouselItem {
  key: string;
  Element: ReactNode;
}

export interface ICarouselCard {
  title: string;
  actor: string;
  description: string;
  image: string;
}

export interface IIcon {
  className?: string;
  onClick?: () => void;
}
