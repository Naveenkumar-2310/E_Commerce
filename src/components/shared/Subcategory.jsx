// Styled Components
import {
  ContentSubBox,
  DataSubBox,
  ImgSubCategory,
  ProductNamesubTypography,
  WholeGridsub,
} from "../../styles/subcategory";
// Router Paths
import { ROUTE_PATHS } from "../../router/routePaths";
// Navigate Hook
import { useNavigate } from "react-router-dom";


function Subcategory({subcategories}) {
  const navigate = useNavigate();

  const handleClick = (subCategoryId) => {
    navigate(`${ROUTE_PATHS.PRODUCT_LIST}?subCategoryId=${subCategoryId}`);
  };

  return (
    <>
      {/* Subcategory box */}
      <DataSubBox>
        {subcategories.map((subCategory) => (
          <WholeGridsub item key={subCategory.id}>
            <ContentSubBox onClick={() => handleClick(subCategory.id)}>
              <ImgSubCategory
                src={
                  subCategory.product?.[0]?.productImages?.[0]
                    ?.productImagePath || ""
                }
                alt={subCategory.categoryImageName || "No Image"}
              />
              <ProductNamesubTypography variant="body1">
                {subCategory.name}
              </ProductNamesubTypography>
            </ContentSubBox>
          </WholeGridsub>
        ))}
      </DataSubBox>
    </>
  );
}

export default Subcategory;
