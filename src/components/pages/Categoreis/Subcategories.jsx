// MUI Materials
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
// Styled Components
import { NameBox, NameSubTypography } from "../../../styles/subcategory";
import Subcategory from "../../shared/Subcategory";
// Importing useDispatch Hook
import { useDispatch } from "react-redux";
// Hooks
import { useEffect, useState } from "react";
// API Paths and Instance
import { API_PATH } from "../../../api/apiPath";
import { api } from "../../../api/config";
// Slice importing
import { endLoading, startLoading } from "../../../redux/slice";
// Navigate Hook
import { useSearchParams } from "react-router-dom";

function SubCategories() {
  const [subcategories, setSubCategories] = useState([]);
  const [searchParams] = useSearchParams();
  const categoryId = searchParams.get("id");
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchSubCategory = async () => {
      if (!categoryId) return;

      try {
        const { data } = await api.get(
          `${API_PATH.ELECTRONICS_API}/${categoryId}`
        ); 
        setSubCategories(data.subCategories || []);
      } catch {}
    };

    fetchSubCategory();
  }, [categoryId]);
  return (
    <>
      <Grid item>
        <Box>
          <NameBox>
            <NameSubTypography variant="body1">
              Shop by Subcategory
            </NameSubTypography>
          </NameBox>
          <Subcategory subcategories={subcategories} />
        </Box>
      </Grid>
    </>
  );
}

export default SubCategories;
