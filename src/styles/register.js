import { Box, Button, styled, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";

export const WholegridContainer = styled(Grid)({
  display: "flex",
  justifyContent: "center",
  width: "100%",
  height: "90vh",
  flexDirection: "column",
  alignItems: "center",
  marginTop: "25px",
});

export const ButtonBoxregister = styled(Box)({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  placeContent: "center",
  gap: "10px",
  "@media (max-width: 600px)": {
    width: "100%",
    fontSize: "12px",
  },
});

export const RegisterButton = styled(Button)({
  borderRadius: "2px",
  fontWeight: "500",
  boxShadow: "none",
  marginTop: "10px",
  width: "100%",
  fontSize: "0.875rem",
  lineHeight: "1.75",
  letterSpacing: "0.02857em",
  textTransform: "capitalize",
  minWidth: "64px",
  backgroundColor: "#fcdd3d",
  borderColor: "fcdd3d",
  color: "#0f1111",
  "@media (max-width: 600px)": {
    width: "90%",
    fontSize: "12px",
    padding: "5px",
  },
});

export const WholeBoxexisting = styled(Box)({
  width: "100%",
  margin: "20px 35px 0 44px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "10px",
  "@media (max-width: 600px)": {
    margin: "0 10px",
    gap: "8px",
  },
});

export const WrappingBox = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "10px",
  width: "90%",
});

export const LineBox = styled(Box)({
  borderTop: "1px solid rgba(0, 0, 0, 0.21)",
  flex: "1",
});

export const AlreadyTypography = styled(Typography)({
  margin: "0",
  flexShrink: "0",
  borderWidth: "0",
  borderStyle: "solid",
  borderColor: "#000000",
  borderBottomWidth: "thin",
  display: "flex",
  whiteSpace: "nowrap",
  textAlign: "center",
  border: "0",
  borderTopStyle: "solid",
  borderLeftStyle: "solid",
});
