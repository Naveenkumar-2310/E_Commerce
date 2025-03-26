import { styled, Tab, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Autocomplete from "@mui/material/Autocomplete";
import Select from "@mui/material/Select";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid2";
import Tabs from "@mui/material/Tabs";

export const WholeContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  backgroundColor: "#131921",
  color: "#fff",
  width: "100%",
  flexWrap: "wrap",
  padding: theme.spacing(1),
  [theme.breakpoints.down("md")]: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  [theme.breakpoints.down("sm")]: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center  ",
  },
}));

export const MenuBox = styled(Box)(({ theme }) => ({
  display: "block",
  [theme.breakpoints.up("md")]: {
    display: "none", 
  },
}));

export const DrawerHeadBox = styled(Box)({
  backgroundColor: "#232f3e",
  padding: "16px 30px",
  color: "white",
});

export const DrawerContentBox = styled(Box)({
  padding: "16px 30px",
  display: "flex",
  flexDirection: "column",
  gap: "10px",
});

export const DrawerHeadingtypography = styled(Typography)({
  fontSize: "16px", 
  fontWeight: "600"
})

export const ImgBox = styled(Box)(({ theme }) => ({
  flex: "0 1 auto",
  maxWidth: "100%",
  [theme.breakpoints.down("sm")]: {
    maxWidth: "45%",
  },
}));

export const ImgSection = styled("img")(({ theme }) => ({
  width: "100%",
  cursor: "pointer",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));

export const LocationBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  flex: "0 1 auto",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

export const LocationContentBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
});

export const SearchBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  width: "100%",
  [theme.breakpoints.up("md")]: {
    width: "50%",
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));

export const SelectSection = styled(Select)(({ theme }) => ({
  width: "15%",
  fontSize: "14px",
  height: "40px",
  backgroundColor: "#e6e6e6",
  color: "black",
  borderTopLeftRadius : "4px",
  borderBottomLeftRadius : "4px",
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

export const AutoCompleteSection = styled(Autocomplete)(({ theme }) => ({
  width: "100%",
  backgroundColor: "white",
  "& .MuiInputBase-root": {
    height: "40px",
    padding: "0 10px",
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));

export const SearchBtn = styled(Button)(({ theme }) => ({
  backgroundColor: "#febd69",
  height: "40px",
  minWidth: "40px",
  borderBottomRightRadius : "4px",
  "&:hover": {
    backgroundColor: "#fcdd3d",
  },
  [theme.breakpoints.up("sm")]: {
    minWidth: "50px",
  },
}));

export const TitleBox = styled(Box)({
  padding: "5px",
  backgroundColor: "white",
});

export const TitleSpan = styled("span")({
  cursor: "pointer",
  fontSize: "17px",
  "&:hover": {
    color: "orange",
    textDecoration: "underline",
  },
});

export const StyledSearchIcon = styled(SearchIcon)(({ theme }) => ({
  color: "black",
  fontSize: "25px",
  [theme.breakpoints.up("sm")]: {
    fontSize: "30px",
  },
}));

export const LanguageBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "50px",
  gap : "45px",
  [theme.breakpoints.down("md")]: {
    gap: "1px",
  },
}));

export const LanguageSection = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
  "&:hover": {
    border: "1px solid white",
    padding: theme.spacing(0.5),
    borderRadius: theme.spacing(0.5),
  },
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(1),
  },
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
  [theme.breakpoints.down("lg")]: {
    display: "none",
  },
}));

export const FlagImg = styled(Box)(({ theme }) => ({
  backgroundImage: `url("http://ecommerce-app.bluetickcoders.com/static/media/country.7a0c5e36e30cd9bbd5df.png")`,
  width: "21.6px",
  height: "16.2px",
  backgroundPosition: "0 -166px",
  marginRight: theme.spacing(1),
}));

export const TooltiptitleTypography = styled(Typography)(({ theme }) => ({
  color: "#000",
  marginBottom: theme.spacing(1),
  cursor: "pointer",
  "&:hover": {
    color: "orange",
    textDecoration: "underline",
  },
}));

export const AccountBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    display: "flex", 
    alignItems: "center",
    width: "10%",
    fontSize: "18px",
  },
  [theme.breakpoints.down("md")]: {
    display: "flex", 
    alignItems: "center",
    width: "30%",
  },
  [theme.breakpoints.up("md")]: {
    display: "none",
  },
}));

export const AccountBtn = styled(Button)({
  display: "flex",
  flexDirection: "column",
  alignContent: "flex-start",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  textTransform: "capitalize",
  color: "white",
  "&:hover": {
    border: "1px solid white",
  },
});

export const AccountListBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

export const NavbarGrid = styled(Grid)({
  width: "100%",
  backgroundColor: "#232f3e",
  fontFamily: "PT Sans",
});

export const DeliveryBoxNav = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  color: "White",
  padding: "10px",
  [theme.breakpoints.up("md")]: {
    display: "none",
  },
}));

export const WholeTabs = styled(Tabs)(({ theme }) => ({
  width: "100%",
  "&.css-1qltlow-MuiTabs-indicator" : {
    backgroundColor : "none"
  },
  [theme.breakpoints.up("md")]: {
    display: "flex",
  },
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

export const NavbarTitleBox = styled(Box)({
  padding: "5px",
});

export const AllTab = styled(Tab)({
  color: "white",
  textTransform: "capitalize",
  fontSize: "13px",
  fontFamily: "PT sans",
  backgroundColor : "none",
  "&:hover": {
    border: "2px solid white",
  },
  "&.Mui-selected": {
    color: "white",
    borderBottom: "none",
  },
 
});

export const SubCategoryTypography = styled(Typography)({
  color: "black",
  fontSize: "12px",
  backgroundColor: "white",
  fontFamily: "PT sans",
  padding: "5px 0",
  "&:hover": {
    textDecoration: "underline",
    color: "orange",
    cursor: "pointer",
  },
  
});

export const ResultTab = styled(Tab)({
  color: "white",
  fontFamily: "PT sans",
  textTransform: "capitalize",
  fontSize: "13px",
  "&:hover": {
    border: "2px solid white",
  },
  ".css-tpnrpk-MuiTabs-root": {
    color: "white",
  },
});
