import { AppRoutes } from "@/lib/constants";
import { InputVariantTypes } from "@/lib/models";
import Image from "next/image";
import { FC } from "react";
import Button from "../ui/Button";
import Link from "next/link";

const Header: FC = () => {
  return (
    <header className="bg-black">
      <div className="container h-[88px] gap-2 flex items-center justify-between">
        <Link
          href={AppRoutes.HOME}
          className="relative w-[106px] h-[36px] sm:w-[130px] sm:h-[44px]"
        >
          <Image
            alt="Witcher Logo"
            src="/witcher.png"
            layout="fill"
            objectFit="cover"
          />
        </Link>

        <Button href={AppRoutes.REQUEST} variant={InputVariantTypes.outlined}>
          Подключить подписку
        </Button>
      </div>
    </header>
  );
};

export default Header;
