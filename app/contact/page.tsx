import ContactForm from "@/components/forms/Contact";
import Typography from "@/components/ui/Typography";
import { TypographyFontWeight, TypographyVariantTypes } from "@/lib/models";
import { returnSEO } from "@/lib/utils/meta";
import { Metadata, NextPage } from "next";

export const metadata: Metadata = {
  ...returnSEO({ title: "Ведьмак | Контакты" }),
};

const ContactPage: NextPage = () => {
  return (
    <div className=" text-white container flex flex-col md:flex-row justify-between bg-contact-page gap-0 md:gap-10">
      <ContactForm />

      <div className="md:mt-36 mt-12 pb-12 md:pb-0 flex flex-col gap-8">
        <div className="flex flex-col gap-1">
          <Typography>Наша горячая линия</Typography>
          <Typography
            variant={TypographyVariantTypes.H3}
            fontWeight={TypographyFontWeight.BOLD}
            className=""
          >
            8 800 38 23 112
          </Typography>
        </div>
        <div className="flex flex-col gap-1">
          <Typography>Главный офис</Typography>
          <Typography
            variant={TypographyVariantTypes.H3}
            fontWeight={TypographyFontWeight.BOLD}
          >
            г. Москва, Садовническая ул., 80
          </Typography>
        </div>
        <div className="flex flex-col gap-1">
          <Typography>Часы работы</Typography>
          <Typography
            variant={TypographyVariantTypes.H3}
            fontWeight={TypographyFontWeight.BOLD}
          >
            Пн-Пт с 10:00 до 22:00
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
