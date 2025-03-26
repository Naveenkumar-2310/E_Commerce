import { Box, styled, Typography, Button, Grid } from "@mui/material";

export const WholeGridLanding = styled(Grid)({
  backgroundColor: "#EAEDED",
  width: "99%",
  margin: "0 auto",
})

export const ImgLanding = styled("img")(({ theme }) => ({
  width: "100%",
  margin: "0",
  padding: "0",
  [theme.breakpoints.down("md")] : {
    height : "200vh",
  }
}));

export const BannerImgBox = styled(Box)({
  padding: "0",
});

export const WholeBox = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(-37.5),
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: "50px",
  [theme.breakpoints.down("lg")] : {
    marginTop : theme.spacing(-25)
  },
  [theme.breakpoints.down("md")] : {
    marginTop : theme.spacing(-50)
  }
}));

export const WrappingBox = styled(Box)({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
  gap: "20px",
  width: "95%",
})

export const GridItemLanding = styled(Grid)({
  backgroundColor: "#fff",
  borderRadius: "4px",
  textAlign: "center",
  display: "grid",
  justifyContent: "center",
  justifyItems: "center",
  padding: "20px 1px",
  gap: "5px",
  cursor: "pointer",
})

export const ContentImgLanding = styled("img")({
  width: "100%",
  height: "111px",
  objectFit: "contain",
});

export const NameTypography = styled(Typography)({
  fontFamily: "Roboto",
  fontSize: "20px",
});

export const NotsigninBox = styled(Box)({
  borderTop: "1px solid #c2bebe",
  borderBottom: "1px solid #c2bebe",
  margin: "0px",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "30px 20px 20px 20px",
  gap: "5px",
  background: "#fff",
});

export const NotsigninTypography = styled(Box)({
  margin: 0,
  color : "black",
  fontFamily: "Rubik",
  fontWeight: "400",
  fontSize: "15px",
});

export const NotsigninButton = styled(Button)({
  textTransform: "capitalize",
  fontSize: "13px",
  fontWeight: "550",
  padding: "3px 115px",
  backgroundColor: "#ffc52f",
  outline: "none",
  borderRadius: "5px",
  cursor: "pointer",
  color: "#000",
  border: "1px solid #e6a400",
});

export const NewcusTypography = styled(Typography)({
  margin: 0,
  fontFamily: "Rubik",
  fontWeight: "400",
  color : "black",
  fontSize: "13px",
});
