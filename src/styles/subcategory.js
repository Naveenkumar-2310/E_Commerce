import { Box, styled, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";

export const WholeGridsub = styled(Grid)({
  width: "100%",
});

export const NameBox = styled(Box)({
  width: "100%",
  textAlign: "center",
});

export const NameSubTypography = styled(Typography)({
  padding: "20px",
  fontSize: "23px",
  margin: "20px 0",
  fontWeight : "500",
});

export const DataSubBox = styled(Box)({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(175px,1fr))",
});

export const ContentSubBox = styled(Box)({
  paddingLeft: "20px",
  cursor: "pointer",
});

export const ImgSubCategory = styled("img")({
  width: "100%",
  height: "200px",
  borderRadius: "8px",
  objectFit: "contain",
  boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
  margin: "10px 0",
});

export const ProductNamesubTypography = styled(Box)({
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
