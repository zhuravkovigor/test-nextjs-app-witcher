import { AppRoutes } from "@/lib/constants";
import { TypographyFontWeight, TypographyVariantTypes } from "@/lib/models";
import Button from "../ui/Button";
import Typography from "../ui/Typography";

const SuccessContactMessage = () => {
  return (
    <div className="mt-20">
      <Typography
        variant={TypographyVariantTypes.H1}
        fontWeight={TypographyFontWeight.BOLD}
        className="md:max-w-[200px] md:leading-[60px]"
      >
        Заявка отправлена!
      </Typography>

      <Typography
        className="md:mt-12 mt-5 md:max-w-[486px]"
        variant={TypographyVariantTypes.H4}
      >
        Мы получили вашу заявку. Наши специалисты свяжутся с вами в ближайшее
        время, чтобы уточнить все детали заказа.
      </Typography>

      <Button
        className="mt-12 flex w-full h-[56px]"
        extraClassNameType="w-full md:w-auto"
        href={AppRoutes.HOME}
      >
        Вернуться на главную
      </Button>
    </div>
  );
};

export default SuccessContactMessage;
