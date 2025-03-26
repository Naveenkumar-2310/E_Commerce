import { Box, styled, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const ShopBox = styled(Box)({
  width: "100%",
  textAlign: "center",
});

export const ShopTypography = styled(Typography)({
  padding: "20px",
  fontSize: "23px",
  fontWeight : "550",
  margin: "20px 0",
});

export const ContentBox = styled(Box)({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(175px,1fr))",
  width: "100%",
});

export const WrappingBox = styled(Box)({
  width: "100%",
});

export const Imgbox = styled(Box)({
  paddingLeft: "20px",
  cursor: "pointer",
});

export const NameTypography = styled(Typography)({
  textAlign: "center",
  margin: 0,
  fontFamily: "Roboto",
  fontSize: "14px",
  color: "#2f2f2f",
  fontWeight: "500",
  marginBottom: "16px",
  padding: "5px 10px",
  borderRadius: "4px",
});

export const CategoryImage = styled("img")({
  width: "100%",
  height: "200px",
  borderRadius: "8px",
  objectFit: "contain",
  boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
  margin: "10px 0",
});

export const LinktoLanding = styled(Link)({
  margin: 0,
  fontFamily: "Roboto",
  fontWeight: "400",
  fontSize: "12px",
  textDecoration: "none",
  cursor: "pointer",
  color: "#0066c0",
  paddingLeft: "6px",
});
