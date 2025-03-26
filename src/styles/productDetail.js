import { Box, List, ListItem, styled, Typography, Button } from "@mui/material";
import Grid from "@mui/material/Grid2";

export const WholeGridProDetail = styled(Grid)({
  padding: "10px 20px",
});

export const BackResultsProDetail = styled(Grid)({
  width: "100%",
  background: "#fff",
  fontFamily: "Rubik",
})

export const BackResultTypography = styled(Typography)({
  fontSize: "12px",
  color: "#565959",
  cursor: "pointer",
  marginBottom: "20px",
  display: "flex",
  alignItems: "center",
  fontFamily: "Rubik",
  "&:hover": {
    cursor: "pointer",
    textDecoration: "underline",
  },
});

export const SingleGridItemContents = styled(Grid)(({ theme }) => ({
  width: "100%",
  display: "flex",
  gap: "100px",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    gap: "20px",
  },
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    gap: "40px",
  },
}));

export const ImgSectionProDetail = styled("img")(({ theme }) => ({
  width: "28%",
  height: "500px",
  objectFit: "contain",
  cursor: "zoom-in",
  borderRadius: "5px",
  border: "1px solid rgba(0,0,0,0.12)",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    height: "250px",
    border: "none",
  },
  [theme.breakpoints.down("md")]: {
    width: "100%",
    height: "250px",
    border: "none",
  },
}));

export const RatingStarBoxProdDetail = styled(Box)({
  display: "flex",
  gap: "5px",
})

export const SecondContentBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "5px",
  width: "36%",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));

export const NameProDetailTypography = styled(Typography)(({ theme }) => ({
  fontFamily: "Rubik",
  fontSize: "19.2px",
  [theme.breakpoints.down("sm")]: {
    fontSize: "13px",
  },
}));

export const ProductDetailBox = styled(Box)({
  display: "flex",
  gap: "20px",
});

export const RatingBoxProDetail = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "5px",
  color: "#007185",
  alignSelf: "center",
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

export const RatingTypographyProDetail = styled(Typography)({
  fontFamily: "Rubik",
  fontSize: "13px",
});

export const BoughtTypographyProDetail = styled(Typography)({
  fontFamily: "Rubik",
  color: "#0f1111",
  fontSize: "12px",
});

export const DiscountSpanproDetail = styled("span")({
  fontSize: "27px",
  color: "#cc0c39",
  fontFamily: "Rubik",
});

export const Rupeesymbol = styled("span")({
  verticalAlign: "super",
  marginLeft: "10px",
});
export const DiscountPriceDetail = styled("span")({
  fontSize: "25px",
  fontFamily: "Rubik",
});

export const PriceBoxProDetail = styled(Box)({
  color: "#565959",
});

export const ActualPriceSpan = styled("span")({
  fontFamily: "Rubik",
  fontSize: "14px",
  textDecoration: "line-through",
});

export const ListSection = styled(List)(({ theme }) => ({
  width: "100%",
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

export const FirstListItemSection = styled(ListItem)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  [theme.breakpoints.down("sm")]: {
    flexShrink: "0",
    width: "50%",
  },
}));

export const ImgProDtail = styled("img")({
  width: "30%",
});

export const ImgInstallation = styled("img")({
  width: "18%",
});

export const SpanSection = styled("span")({
  fontSize: "12px",
  color: "#007185",
});

export const SecondListItemSection = styled(ListItem)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "baseline",
  gap: "5px",
});

export const ListBoxProductSpe = styled(List)(({ theme }) => ({
  width: "40%",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));

export const DetailBox = styled(Box)({
  display: "grid",
  gridTemplateColumns: "1fr 3fr",
  gap: "10px 30px",
})

export const ShowLiNameElement = styled("li")({
  fontSize: "14px",
  fontWeight: "600",
  fontFamily: "Rubik",
});

export const ShowLiValueElement = styled("li")({
  fontSize: "14px",
  fontFamily: "Rubik",
});

export const ShowButton = styled(Button)({
  textTransform: "none",
  color: "#007185",
  fontSize: "14px",
  alignSelf: "start",
  marginTop: "5px",
});

export const AboutListItem = styled(ListItem)({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
});

export const SpecificationPro = styled(Typography)(({ theme }) => ({
  color: "#0f1111",
  fontSize: "20px",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    fontSize: "15px",
  },
}));

export const DetailsProBox = styled(Box)({
  display: "flex",
  width: "100%",
})

export const DetailsNameTypography = styled(Typography)(({ theme }) => ({
  color: "0f1111",
  padding: "12px 10px",
  background: "#ebebeb",
  fontSize: "14px",
  borderTop: "1px solid rgba(0,0,0,0.12)",
  fontFamily: "Rubik",
  width: "40%",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));

export const DetailsValueTypography = styled(Typography)(({ theme }) => ({
  padding: "12px 10px",
  fontSize: "14px",
  borderTop: "1px solid rgba(0,0,0,0.12)",
  fontFamily: "Rubik",
  width: "60%",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));

export const ThirdContentGrid = styled(Grid)(({ theme }) => ({
  width: "20%",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
  [theme.breakpoints.down("lg")]: {
    width: "100%",
  },
}));

export const WrappedBox = styled(Box)({
  border: "1px solid rgba(0,0,0,0.12)",
  padding: "20px",
  borderRadius: "8px",
  display: "flex",
  flexDirection: "column",
  gap: "5px",
});

export const DeliverySectionBox = styled(Box)({
  display: "flex",
  alignItems: "center",
});

export const DeliverySectionTypography = styled(Typography)({
  color: "#007185",
  fontSize: "12px",
  fontFamily: "Rubik",
});

export const StockTypography = styled(Typography)({
  color: "#cc0c39",
  fontSize: "14px",
  fontWeight: "600",
  fontFamily: "Rubik",
  marginLeft: "7px",
});

export const InStockTypography = styled(Typography)({
  color: "green",
  fontSize: "19px",
  paddingLeft: "8px",
});

export const PaymentWholeBox = styled(Box)({
  marginLeft: "7px",
  marginRight: "20px",
});

export const PaymentBox = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
});

export const PaymentKeyTypography = styled(Typography)({
  fontSize: "12px",
  color: "#565959",
  fontFamily: "Rubik",
});

export const PaymentValueTypography = styled(Typography)({
  fontSize: "12px",
  color: "#007185",
  fontFamily: "Rubik",
});

export const DeveloperTypography = styled(Typography)({
  fontSize: "12px",
  color: "#007185",
  fontFamily: "Rubik",
  marginBottom: "15px",
});

export const BuyButton = styled(Button)({
  background: "#ffa41c",
  textTransform: "capitalize",
  color: "#0f1111",
  fontSize: "13px",
  padding: "8px 10px 8px 11px",
  borderRadius: "20px",
});
