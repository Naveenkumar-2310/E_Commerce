import { styled, Typography,Box } from "@mui/material";
import Grid from "@mui/material/Grid2";

export const WholeFooterBox = styled(Box)({
  color:"#fff"
})

export const BackToTopBox = styled("a")({
  display:"flex", 
  justifyContent:"center", 
  alignItems:"center", 
  backgroundColor:"#37475A", 
  padding:"15px",
  color : "#fff",
  textDecoration : "none",
})

export const WholeFooterGrid = styled(Grid)({
  display:"grid", 
  gridTemplateColumns: "repeat(auto-fit, 250px)", rowGap:"20px", 
  columnGap:"40px", 
  padding:"30px 0", 
  backgroundColor:"rgb(35, 47, 62)", color:"#ddd", 
  placeContent:"center",
})

export const SingleGridItem = styled(Grid)(( {theme}) => ({
  display : "flex",
  flexDirection : "column",
  [theme.breakpoints.down("sm")] : {
    justifyContent : "center",
    alignItems : "center"
  }
}))

export const HeaderTypography = styled(Typography)({
  color:"#fff", 
  fontWeight:"500"
})

export const ContentTypography = styled(Typography)({
  "&:hover" : {
    cursor : "pointer",
    textDecoration : "underline"
  }
})