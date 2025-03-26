import { object, string } from "yup";
import { REGEX, VALIDATION } from "./common";

export const validationSchema = object({
  mobileNo: string()
    .required(VALIDATION.EMAILORMOBILE)
    .test(
      "emailOrMobile",
      "Enter a valid email or 10-digit mobile number",
      (value) => {
        if (!value) return false;
        return REGEX.EMAIL_REGEX.test(value) || REGEX.PHONE_REGEX.test(value);
      }
    ),
  password: string().required(VALIDATION.PASSWORD),
});
