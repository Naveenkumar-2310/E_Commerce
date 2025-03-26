import { Box, Rating, Stack, styled, Typography, Button } from "@mui/material";
import Grid from "@mui/material/Grid2";

export const WholeGridProduct = styled(Grid)(({ theme }) => ({
  width: "86%",
  padding: "20px",
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  [theme.breakpoints.down("md")]: {
    gap: "5px",
    width: "100%",
  },
  [theme.breakpoints.down("sm")]: {
    gap: "2px",
  },
}));

export const SingleGridItemResultSection = styled(Grid)(({ theme }) => ({
  width: "100%",
  display: "flex",
  padding: "10px 0",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

export const ResultTypography = styled(Typography)({
  fontFamily: "Rubik",
  fontSize: "20px",
});

export const ProductTypography = styled(Typography)({
  fontFamily: "Rubik",
  fontSize: "14px",
  color: "#565959",
});

export const WholeProductbox = styled(Box)({
  display: "flex",
  height: "auto",
  width: "100%",
  boxShadow: "rgba(0, 0, 0, 0.1) 0px 1px 2px 0px",
  borderSadius: "4px",
  overflow: "hidden",
  padding: "10px 0px",
});

export const ProductimgBox = styled(Box)(({ theme }) => ({
  width: "20%",
  objectFit: "contain",
  [theme.breakpoints.down("md")]: {
    width: "30%",
  },
  [theme.breakpoints.down("sm")]: {
    width: "40%",
  },
}));

export const ProductImg = styled("img")(({ theme }) => ({
  width: "80%",
  height: "218px",
  objectFit: "contain",
  cursor: "pointer",
  [theme.breakpoints.down("md")]: {
    width: "100%",
    height: "200px",
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    height: "150px",
    objectFit: "contain",
  },
}));

export const ProductBox = styled(Box)({
  width: "80%",
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  alignItems: "flex-start",
  ".css-bn0woj-MuiStack-root>:not(style)~:not(style)": {
    marginTop: "0",
  },
});

export const NameProTypography = styled(Typography)(({ theme }) => ({
  cursor: "pointer",
  "&:hover": {
    color: "orange",
  },
  fontFamily: "Inter",
  fontSize: "18px",
  [theme.breakpoints.down("md")]: {
    fontSize: "16px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "14px",
  },
}));

export const RatingBox = styled(Box)(({ theme }) => ({
  width: "30%",
  color: "#007185",
  [theme.breakpoints.down("md")]: {
    width: "50%",
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));

export const StackSection = styled(Stack)({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  alignSelf: "center",
  margin: "0px",
  cursor: "pointer",
});

export const RatingSection = styled(Rating)({
  color: "#de7921",
});

export const RatingTypography = styled(Typography)({
  fontFamily: "Rubik",
});

export const BoughtTypography = styled(Typography)(({ theme }) => ({
  color: "#565959",
  fontSize: "13px",
  [theme.breakpoints.down("sm")]: {
    fontSize: "11px",
  },
}));

export const PriceBox = styled(Box)({
  display: "flex",
});

export const SymbolTypography = styled(Typography)({
  fontSize: "15px",
  verticalAlign: "super",
});

export const PriceTypography = styled(Typography)(({ theme }) => ({
  fontSize: "30px",
  [theme.breakpoints.down("sm")]: {
    fontSize: "20px",
  },
}));

export const ActualpriceBox = styled(Typography)(({ theme }) => ({
  display: "flex",
  padding: "12px 5px",
  alignItems: "flex-end",
  [theme.breakpoints.down("sm")] : {
    padding : "5px 10px"
  }
}));

export const MRPTypography = styled(Typography)(({ theme }) => ({
  marginRight: "5px",
  fontFamily: "Rubik",
  color: "#565959",
  fontSize: "15px",
  [theme.breakpoints.down("sm")] : {
    fontSize : "13px"
  }
}));

export const ActualpriceTypography = styled(Typography)(({ theme }) => ({
  margin: " 0 6px 0 1px",
  fontFamily: "Rubik",
  color: "#565959",
  textDecoration: "line-through",
  fontSize: "15px",
  [theme.breakpoints.down("sm")] : {
    fontSize : "13px"
  }
}));

export const DiscountTypography = styled(Typography)(({ theme }) => ({
  marginRight: "5px",
  fontFamily: "Rubik",
  [theme.breakpoints.down("sm")] : {
    fontSize : "13px"
  }
}));

export const SavepriceTypography = styled(Typography)({
  padding: "2px 5px",
  background: "#7fda89",
  marginRight: "10px",
  borderRadius: "2px",
  color: " #0F1111",
});

export const QuantityoutTypography = styled(Typography)({
  border: "1px solid #0f1111",
  padding: "9px",
  borderRadius: "25px",
  fontSize: "13px",
  cursor: "pointer",
});

export const QuantityTypography = styled(Typography)({
  fontSize: "14px",
  color: "#c30c39",
  fontFamily: "Rubik",
  marginBottom: "10px",
});

export const BuyButton = styled(Button)({
  padding: "8px 10px 8px 11px",
  borderRadius: "20px",
  backgroundColor: "#ffa417",
  color: "#0f1111",
  textTransform: "capitalize",
  fontFamily: "Rubik",
});
