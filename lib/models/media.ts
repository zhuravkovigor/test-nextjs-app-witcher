import { FC } from "react";
import { IIcon } from "./ui";

export interface IMedia {
  readonly key: string;
  Element: FC<IIcon>;
  href: string;
}
