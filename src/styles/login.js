import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid2";

export const WholeGridLogin = styled(Grid)({
  display: "flex",
  justifyContent: "center",
  width: "100%",
  height: "90vh",
  flexDirection: "column",
  alignItems: "center",
  marginTop: "25px",
  "@media(max-width : 600px)": {
    padding: "0",
  },
});

export const PasswordBox = styled(Box)({
  marginTop: "10px",
});

export const ButtonBox = styled(Box)({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  placeContent: "center",
  gap: "10px",
  marginTop: "20px",
  "@media(max-width : 600px)": {
    justifyContent: "flex-start",
    alignItems: "baseline",
    width: "100%",
  },
});

export const LoginBusTypography = styled(Typography)({
  lineHeight: "1.5",
  letterSpacing: "0.00938em",
  color: "#0066c0",
  cursor: "pointer",
  fontSize: "12px",
  width: "max-content",
  margin: "0 auto",
})

export const WholeBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  margin: "0 auto",
  alignItems: "center",
  alignContent: "center",
  justifyContent: "space-evenly",
  gap: "15px",
});

export const SignInBox = styled(Box)({
  width: "370px",
  minHeight: "350px",
  margin: "0 auto",
  borderRadius: "5px",
  padding: "20px 26px",
  border: "1px #d5d9d9 solid",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: "15px",
  "@media (max-width: 600px)": {
    border: "none",
    padding: "0",
    width: "100%",
  },
});

export const SigninTypography = styled(Typography)({
  margin: "0",
  fontSize: "24px",
  lineHeight: "1.5",
  letterSpacing: "0.00938em",
  color: "#f1111",
});

export const LabelTypography = styled(Typography)({
  margin: 0,
  lineHeight: "1.5",
  letterSpacing: "0.00939em",
  fontWeight: "549",
  fontSize: "14px",
});

export const InputTextfield = styled(TextField)({
  margin: "0px",
  width: "100%",
  minWidth: "0",

 
  "& .MuiOutlinedInput-input": {
    height: "4px !important",  
    padding: "10epx !important", 
  },

  "@media (max-width: 600px)": {
    width: "90%",
  },  
});

export const ContinueButton = styled(Button)({
  width: "100%",
  borderRadius: "19px",
  fontSize: "0.875rem",
  lineHeight: "1.75",
  letterSpacing: "0.02857em",
  textTransform: "capitalize",
  minWidth: "64px",
  backgroundColor: "#fcdd3d",
  borderColor: "fcdd3d",
  color: "#0f1111",
  // fontWeight: "400",
  "@media (max-width: 600px)": {
    width: "90%",
    fontSize: "12px",
    padding: "5px",
  },
});

export const LoginBusniessTypography = styled(Typography)({
  fontSize: "1rem",
  lineHeight: "1.5",
  letterSpacing: "0.00938em",
  color: "#0066c0",
  cursor: "pointer",
  width: "max-content",
  margin: "0 auto",
});

export const CreateAccountButton = styled(Button)({
  width: "90%",
  backgroundColor: "#e0e0e0",
  color: "black",
  borderRadius: "4px",
  fontSize: "12px",
  fontWeight: "550",
  lineHeight: "1.75",
  letterSpacing: "0.02857em",
  textTransform: "uppercase",
  minWidth: "64px",
  padding: "6px 16px",
  boxShadow: "none",
  "@media (max-width: 600px)": {
    width: "80%",
    fontSize: "10px",
    padding: "5px",
    margin: "0px",
  },
});
