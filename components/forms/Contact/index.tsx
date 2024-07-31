"use client";

import SuccessContactMessage from "@/components/parts/SuccessContactMessage";
import Button from "@/components/ui/Button";
import Checkbox from "@/components/ui/Checkbox";
import FileChooser from "@/components/ui/FileChooser";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import Textarea from "@/components/ui/Textarea";
import Typography from "@/components/ui/Typography";
import { Masks } from "@/lib/constants/masks";
import {
  ButtonTypes,
  ISelectOption,
  TypographyFontWeight,
  TypographyVariantTypes,
} from "@/lib/models";
import { sleep } from "@/lib/utils/promises";
import { useFormik } from "formik";
import { useState } from "react";
import { schema } from "./schema";

export interface IContactForm {
  name: string;
  country: ISelectOption;
  email: string;
  phone: string;
  description: string;
  file: File | null;
  check: boolean;
}

const initialValues = {
  name: "",
  country: {
    label: "",
    value: "",
  },
  description: "",
  email: "",
  file: null,
  phone: "",
  check: false,
};

const localCountries: ISelectOption[] = [
  {
    label: "Москва",
    value: "moscov",
  },
  {
    label: "Санкт-Питербург",
    value: "spt",
  },
  {
    label: "Казань",
    value: "kazan",
  },
  {
    label: "Краснодар",
    value: "krasnodar",
  },
  {
    label: "Ростов на дону",
    value: "rostov",
  },
];

const ContactForm = () => {
  const [goodRequest, setGoodRequest] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { values, touched, setFieldValue, handleSubmit, errors } =
    useFormik<IContactForm>({
      validationSchema: schema,
      initialValues,

      onSubmit: async () => {
        setIsLoading(true);

        await sleep(2);
        setIsLoading(false);

        setGoodRequest(true);
      },
    });

  if (goodRequest) {
    return <SuccessContactMessage />;
  }

  return (
    <form onSubmit={handleSubmit}>
      <Typography
        className="mt-12"
        variant={TypographyVariantTypes.H1}
        fontWeight={TypographyFontWeight.BOLD}
      >
        Оставьте заявку
      </Typography>

      <div className="mt-10 md:w-[320px] lg:w-[486px]">
        <Select
          errorMessage={touched.country ? errors.country : ""}
          placeholder="Страна"
          onChange={(val, option) => {
            setFieldValue("country", option);
          }}
          value={values.country}
          options={localCountries}
        />

        <Input
          value={values.name}
          onChange={(e) => setFieldValue("name", e.target.value)}
          errorMessage={touched.name ? errors.name : ""}
          className="mt-4"
          placeholder="Имя"
        />
        <div className="flex flex-col w-full lg:flex-row items-center gap-6 mt-8">
          <Input
            value={values.email}
            onChange={(e) => setFieldValue("email", e.target.value)}
            errorMessage={touched.email ? errors.email : ""}
            className="w-full"
            placeholder="Email"
          />
          <Input
            errorMessage={touched.phone ? errors.phone : ""}
            className="w-full"
            mask={Masks.PHONE}
            value={values.phone}
            onChange={(e) => setFieldValue("phone", e.target.value)}
            placeholder="+7 (___) ___-__-__"
          />
        </div>
        <Textarea
          errorMessage={touched.description ? errors.description : ""}
          className="mt-10"
          placeholder="Оставьте пометку к заказу"
          value={values.description}
          onChange={(e) => {
            setFieldValue("description", e.target.value);
          }}
        />
      </div>

      <FileChooser
        errorMessage={touched.file ? errors.file : ""}
        onChange={(file) => {
          setFieldValue("file", file);
        }}
        placeholder="Прикрепите файл"
        className="mt-6"
        value={values.file}
      />

      <Checkbox
        errorMessage={touched.check ? errors.check : ""}
        className="mt-6"
        label="Даю согласие на обработку своих персональных данных"
        value={values.check}
        onChange={(value) => setFieldValue("check", value)}
      />
      <Button isLoading={isLoading} type={ButtonTypes.SUBMIT} className="mt-8">
        Оставить заявку
      </Button>
    </form>
  );
};

export default ContactForm;
