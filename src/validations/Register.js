import { object, string } from "yup";
import { REGEX, VALIDATION } from "./common";

export const registerValidationSchema = object({
  name: string().required(VALIDATION.NAME),
  mobileNo: string()
    .required(VALIDATION.MOBILE)
    .matches(REGEX.PHONE_REGEX, "Enter a valid 10-digit mobile number"),
  email: string().required(VALIDATION.EMAIL).email("Enter a valid email"),
  password: string()
    .required(VALIDATION.PASSWORD)
    .min(1, "Password must be at least 1 characters"),
});
