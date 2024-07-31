import { boolean, mixed, object, string, TestFunction } from "yup";
import { ISelectOption } from "../models";

export const stringSchema = (min = 2, max = 32) =>
  string()
    .min(min, `Минимальная длина поля ${min} символов`)
    .max(max, `Максимальная длина поля ${max} символа`);

export const emailSchema = () => string().email("Введена неверная почта");

export const fileSchema = () => mixed().required("Поле не заполненно");

export const selectSchema = () =>
  object()
    .test(
      "has-value",
      "Выберите город",
      (value: TestFunction<ISelectOption>) => {
        return value?.label;
      }
    )
    .required("Выберите элемент из списка");

export const booleanSchema = () =>
  boolean().oneOf([true], "Вы должны согласится");

export const phoneSchema = () =>
  string()
    .matches(/^7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/, "Неверный номер телефона")
    .required("Данное поле обязательно к заполнению");
