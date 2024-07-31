"use client";

import { useAppDispatch } from "@/lib/hooks/redux";
import { TypographyVariantTypes } from "@/lib/models";
import { toggleModal } from "@/lib/store/slices/data";
import { FC } from "react";
import Typography from "../ui/Typography";

const ButtonOpenDataCollection: FC = () => {
  const dispatch = useAppDispatch();

  const handleToggle = () => {
    dispatch(toggleModal());
  };

  return (
    <div onClick={handleToggle} className="order-3 md:order-2">
      <Typography
        className="md:max-w-[200px] text-center"
        variant={TypographyVariantTypes.LINK}
      >
        Политика обработки персональных данных
      </Typography>
    </div>
  );
};

export default ButtonOpenDataCollection;
