import { AppRoutes } from "@/lib/constants";
import { TypographyVariantTypes } from "@/lib/models";
import Image from "next/image";
import Link from "next/link";
import Typography from "../ui/Typography";
import Media from "./Media";

const Footer = () => {
  return (
    <footer className="bg-footer text-white md:mt-20">
      <div className="container flex-wrap flex items-center justify-between md:h-[128px] h-[142px]">
        <Link
          href={AppRoutes.HOME}
          className="relative order-1 w-[130px] h-[44px]"
        >
          <Image
            alt="Witcher Logo"
            src="/witcher.png"
            layout="fill"
            objectFit="cover"
          />
        </Link>
        <div className="order-3 md:order-2">
          <Typography
            className="md:max-w-[200px] text-center"
            variant={TypographyVariantTypes.LINK}
          >
            Политика обработки персональных данных
          </Typography>
        </div>

        <Media className="gap-4 order-2 md:order-3" />
      </div>
    </footer>
  );
};

export default Footer;
