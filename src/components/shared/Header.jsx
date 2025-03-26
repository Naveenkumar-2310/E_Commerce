// Hooks
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// Images
import {IMAGES} from "../../constants/Constant";
// MUI Icons
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MenuIcon from "@mui/icons-material/Menu";
// MUI Materials
import { Typography } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import Tooltip from "@mui/material/Tooltip";
import Grid from "@mui/material/Grid2";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
// Styled components
import {
  WholeContainer,
  ImgBox,
  LocationBox,
  SearchBox,
  SelectSection,
  AutoCompleteSection,
  SearchBtn,
  StyledSearchIcon,
  LanguageBox,
  LanguageSection,
  FlagImg,
  TooltiptitleTypography,
  AccountBtn,
  AllTab,
  SubCategoryTypography,
  ResultTab,
  ImgSection,
  LocationContentBox,
  TitleBox,
  AccountListBox,
  NavbarGrid,
  WholeTabs,
  AccountBox,
  NavbarTitleBox,
  MenuBox,
  DeliveryBoxNav,
  DrawerHeadBox,
  DrawerContentBox,
  DrawerHeadingtypography,
} from "../../styles/header";
// Navigate hook
import { useNavigate, useLocation } from "react-router-dom";
// Cookies
import { removeCookie } from "../../utils/cookies";
// Routing paths
import { ROUTE_PATHS } from "../../router/routePaths";
// Slices
import { logout, hideSnackbar } from "../../redux/slice";
// API Paths
import { api } from "../../api/config";
import { API_PATH } from "../../api/apiPath";

const languages = [
  "English - EN",
  "हिन्दी - HI",
  "தமிழ் - TA",
  "తెలుగు - TE",
  "ಕನ್ನಡ - KN",
  "മലയാളം - ML",
  "বাংলা - BN",
  "मराठी - MR",
];

function Header() {
  const [categories, setCategory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [selectedTab, setSelectedTab] = useState("all");
  const [openDrawer, setOpendrawer] = useState(false);
  const [hover, setHover] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const user = useSelector(
    (state) => state.nameSlice?.userInfo?.userInfo?.name
  );

  // Handle tab change
  const handleTabChange = (newValue) => {
    setSelectedTab(newValue); // Update the selected tab index
  };

  // Handle category change
  const handleChangeCategory = (event) => {
    const selectedCat = event.target.value;
    setSelectedCategory(selectedCat || "All");
    setSelectedSubcategory(null);
  };

  const handleOpenDrawer = () => {
    setOpendrawer(true);
  };

  // Function to get subcategories for a category
  const getSubcategoriesForCategory = (categoryId) => {
    if (categoryId === "All")
      return categories.flatMap((cat) => cat.subCategories || []);
    return (
      categories.find((category) => category.id === categoryId)
        ?.subCategories || []
    );
  };

  // Handle subcategory selection from tooltip
  const handleSubcategorySelect = (subcategory) => {
    setSelectedSubcategory(subcategory);
    navigate(`${ROUTE_PATHS.PRODUCT_LIST}?subCategoryId=${subcategory.id}`);
  };

  const handleNavCategory = (categoryId) => {
    navigate(`${ROUTE_PATHS.SUB_CATEGORY}?id=${categoryId}`);
  };

  const handleAllCategory = () => {
    navigate(ROUTE_PATHS.CATEGORY);
  };

  useEffect(() => {
    const fetchCategoriesAndSubcategories = async () => {
      try{
        const { data = [] } = await api.get(
          API_PATH.CATEGORIES_WITH_SUB_API
        );
        setCategory(data);
      } catch {}
    };
    fetchCategoriesAndSubcategories();
  }, []);

  useEffect(() => {
    if (location.pathname == "/") {
      navigate(ROUTE_PATHS.LANDING);
    }
  }, [location.pathname, navigate]);

  return (
    <>
      {/* Whole Grid Container */}
      <Grid container>
        <WholeContainer>
          <MenuBox>
            <Button onClick={handleOpenDrawer}>
              <MenuIcon sx={{ color: "white" }} />
            </Button>
            <Drawer
              open={openDrawer}
              onClose={() => setOpendrawer(false)}
              sx={{ width: "60%" }}
            >
              <DrawerHeadBox>
                <Typography>Browse Amazon</Typography>
              </DrawerHeadBox>
              <DrawerContentBox>
                <DrawerHeadingtypography>
                  Shop by Category
                </DrawerHeadingtypography>
                {categories.map((category) => (
                  <Typography
                    key={category.id}
                    sx={{ cursor: "pointer" }}
                    onClick={() => {
                      navigate(
                        `${API_PATH.SUBCATEGORIES_API}?id=${category.id}`
                      );
                      setOpendrawer(false);
                    }}
                  >
                    {category.name}
                  </Typography>
                ))}
                <Typography
                  onClick={() => {
                    navigate(ROUTE_PATHS.CATEGORY);
                    setOpendrawer(false);
                  }}
                  sx={{ cursor: "pointer" }}
                >
                  See All Categories
                </Typography>
              </DrawerContentBox>
            </Drawer>
          </MenuBox>

          {/* Logo */}
          <ImgBox>
            <ImgSection
              src={IMAGES.LANDINGPAGE_LOGO}
              alt="Logo"
              onClick={() => navigate(ROUTE_PATHS.LANDING)}
            />
          </ImgBox>

          {/* SignoutSection */}
          <AccountBox>
            <Tooltip
              title={
                <span
                  style={{ color: hover ? "orange" : "black" }}
                  onMouseEnter={() => setHover(true)}
                  onMouseLeave={() => setHover(false)}
                  onClick={() => {
                    dispatch(hideSnackbar());
                    removeCookie("token");
                    dispatch(logout());
                    navigate(user ? ROUTE_PATHS.LANDING : ROUTE_PATHS.LOGIN);
                  }}
                >
                  {user ? `Sign out` : `Sign in`}
                </span>
              }
              arrow
              componentsProps={{
                tooltip: {
                  sx: {
                    backgroundColor: "white",
                    padding: "10px",
                    color: hover ? "orange" : "black",
                    boxShadow: "none",
                    fontSize: "17px",
                    cursor: "pointer",
                    "&:hover": {
                      textDecoration: "underline",
                    },
                  },
                },
                arrow: {
                  sx: {
                    color: "white",
                  },
                },
              }}
            >
              <AccountBtn>
                <Typography
                  variant="body1"
                  sx={{ fontSize: { md: "15px", lg: "14px" } }}
                >
                  {user ? `Hello, ${user}` : `Hello , signin`}
                </Typography>
                <AccountListBox>
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: { md: "14px", lg: "14px" },
                      fontWeight: "bold",
                    }}
                  >
                    Accounts & Lists
                  </Typography>
                  <ArrowDropDownIcon />
                </AccountListBox>
              </AccountBtn>
            </Tooltip>
          </AccountBox>

          {/* Location Section */}
          <LocationBox>
            <LocationOnOutlinedIcon />
            {/* Location content */}
            <LocationContentBox>
              <Typography
                variant="body2"
                sx={{ fontSize: { md: "10px", lg: "12px" } }}
              >
                Deliver to Test
              </Typography>
              <Typography
                variant="body2"
                sx={{ fontSize: { md: "14px", lg: "16px" } }}
              >
                Update location
              </Typography>
            </LocationContentBox>
          </LocationBox>

          {/* Search Section */}
          <SearchBox>
            <SelectSection
              value={selectedCategory}
              onChange={handleChangeCategory}
            >
              <MenuItem value="All">All</MenuItem>
              {categories.map((category) => (
                <MenuItem key={category.id} value={category.id}>
                  {category.name}
                </MenuItem>
              ))}
            </SelectSection>
            <AutoCompleteSection
              options={getSubcategoriesForCategory(selectedCategory)} // Fetch subcategories
              value={selectedSubcategory || null}
              onChange={(event, value) => setSelectedSubcategory(value)} // Update state
              getOptionLabel={(option) => option?.name}
              renderInput={(params) => (
                <TextField
                  {...params}
                  placeholder="Search Amazon.in"
                  InputProps={{
                    ...params.InputProps,
                    endAdornment: selectedSubcategory
                      ? params.InputProps.endAdornment
                      : null,
                    disableUnderline: true,
                  }}
                  sx={{borderRadius : "0",border : "none",outline : "none"}}
                />
              )}
            />
            <SearchBtn
              variant="contained"
              onClick={() => {
                if (selectedSubcategory) {
                  navigate(`/product?subCategoryId=${selectedSubcategory.id}`);
                } else if (selectedCategory !== "All") {
                  navigate(`/subCategory?id=${selectedCategory}`);
                } else {
                  navigate(ROUTE_PATHS.CATEGORY);
                }
              }}
            >
              <StyledSearchIcon />
            </SearchBtn>
          </SearchBox>

          {/* Language and Sign-in Sections */}
          <LanguageBox>
            {/* Language Selector */}
            <LanguageSection>
              <Tooltip
                style={{ display: "flex", alignItems: "center" }}
                title={
                  languages.length > 0 ? (
                    <TitleBox>
                      {languages.map((lang, index) => (
                        <TooltiptitleTypography key={index}>
                          {lang}
                        </TooltiptitleTypography>
                      ))}
                    </TitleBox>
                  ) : (
                    "No languages Available"
                  )
                }
                arrow
                componentsProps={{
                  tooltip: {
                    sx: {
                      backgroundColor: "#fff",
                      boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                    },
                  },
                }}
              >
                <FlagImg />
                <Typography variant="body1">EN</Typography>
                <ArrowDropDownIcon />
              </Tooltip>
            </LanguageSection>

            {/* SignoutSection */}
            <AccountBox
              sx={{ display: { xs: "none", sm: "none", md: "block" } }}
            >
              <Tooltip
                title={
                  <span
                    style={{ color: hover ? "orange" : "black" }}
                    onClick={() => {
                      dispatch(hideSnackbar());
                      removeCookie("token");
                      dispatch(logout());
                      navigate(user ? ROUTE_PATHS.LANDING : ROUTE_PATHS.LOGIN);
                    }}
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                  >
                    {user ? `Sign out` : `Sign in`}
                  </span>
                }
                arrow
                componentsProps={{
                  tooltip: {
                    sx: {
                      backgroundColor: "white",
                      padding: "10px",
                      color: hover ? "orange" : "black",
                      boxShadow: "none",
                      fontSize: "17px",
                      cursor: "pointer",
                      "&:hover": {
                        textDecoration: "underline",
                      },
                    },
                  },
                  arrow: {
                    sx: {
                      color: "white",
                    },
                  },
                }}
              >
                <AccountBtn>
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: {
                        xs: "5px",
                        sm: "10px",
                        md: "15px",
                        lg: "15px",
                      },
                    }}
                  >
                    {user ? `Hello, ${user}` : `Hello , signin`}
                  </Typography>
                  <AccountListBox>
                    <Typography
                      variant="body1"
                      sx={{
                        fontSize: {
                          xs: "5px",
                          sm: "4px",
                          md: "15px",
                          lg: "15px",
                        },
                      }}
                    >
                      Accounts & Lists
                    </Typography>
                    <ArrowDropDownIcon />
                  </AccountListBox>
                </AccountBtn>
              </Tooltip>
            </AccountBox>
          </LanguageBox>
        </WholeContainer>
      </Grid>

      {/* Navbar Section */}
      <Grid container>
        <NavbarGrid item="true">
          <DeliveryBoxNav>
            <LocationOnOutlinedIcon />
            <Typography>Delivery to Test - Chennai 638001</Typography>
          </DeliveryBoxNav>
          {/* Navbar */}
          <WholeTabs
            value={selectedTab}
            onChange={handleTabChange}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
            TabIndicatorProps={{ style: { display: "none" } }}
          >
            {/* All Category Tab */}
            <AllTab
              value="all"
              label="All Category"
              onClick={handleAllCategory}
            />
            {/* Dynamic Category Tabs with Tooltips */}
            {categories.map((category) => {
              const subCat = category.subCategories;
              return (
                <Tooltip
                  key={category.id}
                  title={
                    <NavbarTitleBox>
                      {subCat.map((subcategory) => (
                        <SubCategoryTypography
                          key={subcategory.id}
                          variant="body2"
                          onClick={() => handleSubcategorySelect(subcategory)}
                        >
                          {subcategory.name}
                        </SubCategoryTypography>
                      ))}
                    </NavbarTitleBox>
                  }
                  arrow
                  componentsProps={{
                    tooltip: {
                      sx: {
                        backgroundColor: "#fff",
                        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                        color: "black",
                        fontFamily: "PT Sans",
                      },
                    },
                    arrow: {
                      sx: {
                        color: "white",
                      },
                    },
                  }}
                >
                  <ResultTab
                    key={category.id}
                    value={category.id}
                    label={category.name}
                    onClick={() => handleNavCategory(category.id)}
                  />
                </Tooltip>
              );
            })}
          </WholeTabs>
        </NavbarGrid>
      </Grid>
    </>
  );
}

export default Header;
