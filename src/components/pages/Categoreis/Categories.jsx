// Hooks
import { useEffect, useState } from "react";
import {api } from "../../../api/config";
import { API_PATH } from "../../../api/apiPath";
// MUI Materials
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
// Styled components
import { ShopBox, ShopTypography } from "../../../styles/category";
import Category from "../../shared/Category";

function Categories() {
  const [allCategory, setAllcategory] = useState([]);

  useEffect(() => {
    const fetchCategory = async () => {
      try{
        const { data = [] } = await api.get(
          API_PATH.CATEGORIES_WITH_SUB_API
        );
        setAllcategory(data);
      } catch {}
    };
    fetchCategory();
  }, []);

  return (
    <>
      {/* Whole grid */}
      <Grid item>
        {/* Whole box */}
        <Box>
          {/* Shop by category Box */}
          <ShopBox>
            <ShopTypography variant="body1">Shop by Category</ShopTypography>
          </ShopBox>
          <Category allCategory={allCategory} />
        </Box>
      </Grid>
    </>
  );
}

export default Categories;
