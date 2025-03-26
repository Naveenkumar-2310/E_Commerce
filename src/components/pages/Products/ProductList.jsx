// Hooks
import { useEffect, useState } from "react";
// Shared Components
import Payment from "../../shared/Payment";
// Navigate Hook
import { useLocation, useNavigate } from "react-router-dom";
// MUI Materials
import Grid from "@mui/material/Grid2";
import { Box } from "@mui/material";
// Fonts
import "@fontsource/rubik";
import "@fontsource/inter";
// MUI Icons
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
// Styled Components
import {
  ProductimgBox,
  ProductBox,
  ProductTypography,
  ResultTypography,
  WholeProductbox,
  NameProTypography,
  RatingBox,
  StackSection,
  RatingSection,
  RatingTypography,
  BoughtTypography,
  PriceBox,
  SymbolTypography,
  PriceTypography,
  MRPTypography,
  ActualpriceBox,
  ActualpriceTypography,
  DiscountTypography,
  SavepriceTypography,
  QuantityTypography,
  QuantityoutTypography,
  BuyButton,
  WholeGridProduct,
  SingleGridItemResultSection,
  ProductImg,
} from "../../../styles/product";
import { useSelector } from "react-redux";
import { api } from "../../../api/config";
import { API_PATH } from "../../../api/apiPath";
import { ROUTE_PATHS } from "../../../router/routePaths";

function Product() {
  const [subProductData, setSubproductData] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const name = useSelector((state) => state.nameSlice.userName);
  const subCategoryId = new URLSearchParams(location.search).get(
    "subCategoryId"
  );

  useEffect(() => {
    const fetchSubproduct = async () => {
      try{
        if (subCategoryId) {
          const response = await api.post(API_PATH.PRODUCTS_API, {
            filters: [
              { field: "subCategoryId", value: subCategoryId, type: "eq" },
            ],
            sorting: [{ column: "createdAt", order: "desc" }],
          });
          setSubproductData(response.data.rows);
        }
      } catch {}
    };
    fetchSubproduct();
  }, [subCategoryId]);

  const handleClickProduct = (id) => {
    navigate(`${ROUTE_PATHS.PRODUCT_DETAIL}?productId=${id}`);
  };

  const handleOpen = () => {
    name ? setOpen(true) : navigate(ROUTE_PATHS.LOGIN);
  };

  return (
    <>
      {/* Whole Grid */}
      <WholeGridProduct container>
        {/* Wrapping into Grid Item for responsive */}
        <SingleGridItemResultSection item>
          {/* Result Box(Product) */}
          <Box>
            <ResultTypography variant="body1">Result</ResultTypography>
            <ProductTypography variant="body1">
              Check each product page for other buying options.
            </ProductTypography>
          </Box>
        </SingleGridItemResultSection>
        {/* Loading Section while Some error(Network) */}
        {subProductData.map((product) => {
          return (
            <Grid item key={product.id}>
              {/* Whole Product Box */}
              <WholeProductbox>
                {/* Img Box */}
                <ProductimgBox>
                  <ProductImg
                    src={`${product.fileBaseUrl}${product.productImages[0].productImagePath}`}
                    alt=""
                    onClick={() => handleClickProduct(product.id)}
                  />
                </ProductimgBox>
                {/* Product Box */}
                <ProductBox>
                  {/*  Product Name  */}
                  <NameProTypography
                    variant="body1"
                    onClick={() => handleClickProduct(product.id)}
                  >
                    {product.name}
                  </NameProTypography>
                  {/* Rating  box */}
                  <RatingBox>
                    <StackSection spacing={1}>
                      <RatingSection
                        name="read-only"
                        defaultValue={product.overallRatings}
                        precision={0.5}
                        readOnly
                      />
                      <KeyboardArrowDownIcon sx={{ margin: "0" }} />
                      <RatingTypography variant="span">
                        {product.noOfRatings < 1
                          ? `${product.noOfRatings} rating`
                          : `${product.noOfRatings} ratings`}
                      </RatingTypography>
                    </StackSection>
                  </RatingBox>
                  {/* Bought Box */}
                  <Box>
                    <BoughtTypography variant="p">
                      {product.bought} peoples bought in this year
                    </BoughtTypography>
                  </Box>
                  {/* Price */}
                  <Grid item>
                    {/* Whole Price Box */}
                    <PriceBox>
                      <SymbolTypography variant="span">₹</SymbolTypography>
                      <PriceTypography variant="span" component="span">
                        {product.discountedPrice.toLocaleString()}
                      </PriceTypography>
                      {/* Original price Box */}
                      <ActualpriceBox>
                        <MRPTypography variant="span" component="span">
                          M.R.P
                        </MRPTypography>
                        <ActualpriceTypography variant="span" component="span">
                          {product.actualPrice.toLocaleString()}
                        </ActualpriceTypography>
                        <DiscountTypography variant="span" component="span">
                          ({product.discount}% off)
                        </DiscountTypography>
                      </ActualpriceBox>
                    </PriceBox>
                    {/* Save Price Box */}
                    <Box>
                      <SavepriceTypography variant="span">
                        Save ₹
                        {(
                          product.actualPrice - product.discountedPrice
                        ).toLocaleString()}
                      </SavepriceTypography>
                      <span style={{ fontSize: "14px" }}>with this offer</span>
                    </Box>
                  </Grid>
                  {/* Quantity */}
                  <Grid item>
                    {product.quantity < 1 ? (
                      <QuantityoutTypography>
                        Out of stock
                      </QuantityoutTypography>
                    ) : (
                      <>
                        <QuantityTypography>
                          {product.quantity <= 5 &&
                            `Only ${product.quantity} left in stock`}
                        </QuantityTypography>
                        <BuyButton variant="contained" onClick={handleOpen}>
                          Buy Now
                        </BuyButton>
                      </>
                    )}
                  </Grid>
                  {/* Payment Modal Component */}
                </ProductBox>
              </WholeProductbox>
            </Grid>
          );
        })}
      </WholeGridProduct>
      <Payment open={open} selectedpay={1} />
    </>
  );
}

export default Product;
