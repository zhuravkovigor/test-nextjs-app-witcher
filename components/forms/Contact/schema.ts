import {
  booleanSchema,
  emailSchema,
  fileSchema,
  phoneSchema,
  selectSchema,
  stringSchema,
} from "@/lib/utils/schemas";
import { object } from "yup";
import { IContactForm } from ".";

export const schema = object<IContactForm>({
  country: selectSchema(),
  name: stringSchema(2, 32).required("Данное поле обязательно к заполнению"),
  email: emailSchema().required("Данное поле обязательно к заполнению"),
  description: stringSchema(2, 256).required(
    "Данное поле обязательно к заполнению"
  ),
  phone: phoneSchema(),
  file: fileSchema(),
  check: booleanSchema(),
});
