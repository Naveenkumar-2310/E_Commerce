import { ListItemText, styled, TextField, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

export const ModalBox = styled(Box)({
  position: "absolute",
  top: "100px",
  left: "480px",
  borderRadius: "8px",
  width: "30%",
  background: "#fff",
  overflowY: "auto",
  border: "none",
  outline: "none",
  minHeight: "265px",
  maxHeight: "80vh",
  padding: "15px",
});

export const HeadingText = styled(ListItemText)({
  ".MuiListItemText-primary": {
    fontSize: "20px",
  },
});

export const SelectedPaymodeCard = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "10px",
});

export const NameTextfield = styled(TextField)({
  width: "90%",
  marginLeft: "18px",
});

export const HeadingTypography = styled(Typography)({
  paddingLeft: "23px",
});

export const CustomedCVVTextfield = styled(TextField)({
  width: "90%",
  marginLeft: "18px",
  marginBottom: "20px",
});

export const PasswordButton = styled(Button)({
  margin: "-22px",
});

export const BuyButtonModal = styled(Button)({
  width: "90%",
  margin: "20px 0 20px 18px",
  backgroundColor: "#fcdd3d",
  color: "#0f1111",
  fontWeight: "600",
  borderRadius: "20px",
  fontFamily: "Roboto",
});
