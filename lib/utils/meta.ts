import { Metadata } from "next";

export interface SeoFunc {
  title: string;
  description?: string;
}

/**
 * ------------------------
 * Easier control static metadata from one place
 * ------------------------
 */

export const returnSEO = (data: SeoFunc): Metadata => {
  const { title, description = "" } = data;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
    },
  };
};
