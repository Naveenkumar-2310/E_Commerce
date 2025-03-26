import { object, string } from "yup";
import { REGEX, VALIDATION } from "./common";

export const PaymentValidation = object({
  cardNumber: string()
    .matches(REGEX.CARDNUMBER_REGEX, "Enter a valid 16-digit Card Number")
    .required(VALIDATION.CARDNUMBER),

  cardHolder: string()
    .matches(REGEX.CARDHOLDERNAME_REGEX, "Enter a valid name")
    .required(VALIDATION.CARDHOLDER),

  ExpiryDate: string()
    .matches(REGEX.EXPIRYDATE_REGEX, "Invalid Expiry Date (MM/YY)")
    .required(VALIDATION.EXPIRYDATE),

  CVVNumber: string()
    .matches(REGEX.CVVNUMBER_REGEX, "Invalid CVV (3-digit number)")
    .required(VALIDATION.CVVNUMBER),

  UPIId: string()
    .matches(REGEX.UPIID_REGEX, "Invalid UPI ID (example: user@upi)")
    .required(VALIDATION.UPIID),
});
