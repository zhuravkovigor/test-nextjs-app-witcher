"use client";

import CloseIcon from "@/lib/assets/Close";
import { useAppDispatch, useAppSelector } from "@/lib/hooks/redux";
import { TypographyFontWeight, TypographyVariantTypes } from "@/lib/models";
import { toggleModal } from "@/lib/store/slices/data";
import { AnimatePresence, motion } from "framer-motion";
import { FC } from "react";
import Typography from "../ui/Typography";

const DataCollection: FC = () => {
  const isModalOpen = useAppSelector((state) => state.modal.isModalOpen);
  const dispatch = useAppDispatch();

  const toggle = () => dispatch(toggleModal());

  return (
    <AnimatePresence>
      {isModalOpen && (
        <motion.div
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          className="fixed top-0 left-0 bg-black/50 w-full h-full z-50 flex items-center justify-center "
          onClick={toggle}
        >
          <div
            onClick={(e) => {
              e.stopPropagation();
            }}
            className="bg-white overflow-y-scroll w-full h-full md:w-[720px] md:h-[954px] lg:w-[1080px] lg:h-[840px] relative p-12 px-3 pt-6 md:pt-12
             md:px-8 lg:px-20"
          >
            <div className="bg-red-200" onClick={toggle}>
              <CloseIcon className="absolute w-7 top-9 right-9" />
            </div>

            <Typography variant={TypographyVariantTypes.H1}>
              Обработка данных
            </Typography>

            <Typography className="mt-8" fontWeight={TypographyFontWeight.BOLD}>
              1. Что регулирует настоящая политика конфиденциальности
            </Typography>

            <Typography className="mt-4">
              Настоящая политика конфиденциальности (далее — Политика) действует
              в отношении всей информации, включая персональные данные в
              понимании применимого законодательства (далее — «Персональная
              информация»), которую ООО «Гросс маркет» и/или его аффилированные
              лица, в том числе входящие в одну группу с ООО «Гросс маркет»
              (далее — «Гросс маркет»), могут получить о Вас в процессе
              использования Вами любых сайтов, программ, продуктов и/или
              сервисов Гросс маркет (далее вместе «Сервисы»), информацию о
              которых Гросс маркет может также получать Персональную информацию
              от своих партнеров (далее — «Партнеры»), сайты, программы,
              продукты или сервисы которых Вы используете (например, от
              рекламодателей Гросс маркет или службами такси). В таких случаях
              передача Персональной информации возможна только в случаях,
              установленных применимым законодательством, и осуществляется на
              основании специальных договоров между Гросс маркет и каждым из
              Партнеров.
            </Typography>

            <Typography
              className="mt-20"
              fontWeight={TypographyFontWeight.BOLD}
            >
              2. Кто обрабатывает информацию
            </Typography>

            <Typography className="mt-4">
              Для обеспечения использования Вами Сайтов и Сервисов Ваша
              Персональная информация собирается и используется Яндексом, в том
              числе включая общество с ограниченной ответственностью «Гросс
              маркет», юридическое лицо, созданное по законодательству
              Российской Федерации и зарегистрированное по адресу: 123351,
              Россия, Москва, ул. Гроссова, д. 12 (ООО «Гросс маркет»), или его
              аффилированным лицом, предоставляющим соответствующий Сервис в
              иных юрисдикциях. С информацией о том, какое лицо предоставляет
              тот или иной Сервис, Вы можете ознакомиться в условиях
              использования соответствующего Сервиса.
            </Typography>

            <Typography
              className="mt-20"
              fontWeight={TypographyFontWeight.BOLD}
            >
              3. Какова цель данной Политики
            </Typography>

            <Typography className="mt-4">
              Защита Вашей Персональной информации и Вашей конфиденциальности
              чрезвычайно важны для Гросс маркета. Поэтому при использовании
              Вами Сайтов и Сервисов Гросс маркет защищает и обрабатывает Вашу
              Персональную информацию в строгом соответствии с применимым
              законодательством.
            </Typography>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DataCollection;
