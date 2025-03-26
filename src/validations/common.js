export const REGEX = {
  EMAIL_REGEX: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  PHONE_REGEX: /^[6-9]\d{9}$/,
  CARDNUMBER_REGEX: /^\d{16}$/,
  CARDHOLDERNAME_REGEX: /^[a-zA-Z\s]+$/,
  EXPIRYDATE_REGEX: /^(0[1-9]|1[0-2])\/\d{2}$/,
  CVVNUMBER_REGEX: /^\d{3}$/,
  UPIID_REGEX: /^[\w.-]+@[\w.-]+$/,
};

export const VALIDATION = {
    MOBILE : "Mobile is required",
    NAME : "Name is required",
    PASSWORD : "Password is required",
    EMAIL : "Email is required",
    EMAILORMOBILE : "Email or Mobile number is required",
    CARDNUMBER : "Card Number is required",
    CARDHOLDER : "Cardholder Name is required",
    EXPIRYDATE : "Expiry Date is required",
    CVVNUMBER : "CVV Number is required",
    UPIID : "UPI ID is required",
}