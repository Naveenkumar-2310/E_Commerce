// Hooks
import React, { useEffect, useState } from "react";
// Shared Components
import Payment from "../../shared/Payment";
// Navigate Hook
import { useLocation, useNavigate } from "react-router-dom";
// MUI Materials
import { Box, ListItemIcon, Typography } from "@mui/material";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
// Fonts
import "@fontsource/rubik";
import "@fontsource/inter";
import "@fontsource/roboto/500.css";
// MUI Icons
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
// Images from constants
import { IMAGES } from "../../../constants/Constant";
// Styled Components
import {
  BackResultsProDetail,
  BackResultTypography,
  BoughtTypographyProDetail,
  BuyButton,
  DeliverySectionBox,
  DeliverySectionTypography,
  DetailBox,
  DetailsNameTypography,
  DetailsProBox,
  DetailsValueTypography,
  FirstListItemSection,
  ImgSectionProDetail,
  ListBoxProductSpe,
  ListSection,
  NameProDetailTypography,
  PaymentBox,
  PaymentKeyTypography,
  PaymentValueTypography,
  PaymentWholeBox,
  PriceBoxProDetail,
  ProductDetailBox,
  RatingStarBoxProdDetail,
  RatingBoxProDetail,
  RatingTypographyProDetail,
  SecondContentBox,
  SecondListItemSection,
  ShowButton,
  SingleGridItemContents,
  SpecificationPro,
  StockTypography,
  ThirdContentGrid,
  WholeGridProDetail,
  WrappedBox,
  DiscountSpanproDetail,
  Rupeesymbol,
  DiscountPriceDetail,
  ActualPriceSpan,
  ImgProDtail,
  SpanSection,
  ImgInstallation,
  ShowLiNameElement,
  ShowLiValueElement,
  AboutListItem,
  InStockTypography,
  DeveloperTypography,
} from "../../../styles/productDetail";
import { RatingSection } from "../../../styles/product";
import { useSelector } from "react-redux";
import { API_PATH } from "../../../api/apiPath";
import { api } from "../../../api/config";
import { ROUTE_PATHS } from "../../../router/routePaths";

function ProductDetail() {
  const [productDetail, setProductdetail] = useState({});
  const [showmore, setShowmore] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const name = useSelector((state) => state.nameSlice.userInfo.userInfo);

  const productId = new URLSearchParams(location.search).get("productId");

  const handleOpen = () => {
    name ? setOpen(true) : navigate(ROUTE_PATHS.LOGIN);
  };

  const handleClose = () => setOpen(false);

  useEffect(() => {
    const fetchProductDetail = async () => {
      try {
        const { data = [] } = await api.get(
          `${API_PATH.PRODUCT_DETAIL_API}/${productId}`
        );
        setProductdetail(data);
      } catch {}
    };
    fetchProductDetail();
  }, [productId]);

  return (
    <>
      {/* Whole grid Conatiner */}
      <WholeGridProDetail container>
        {/* Wrap into Grid item*/}
        <BackResultsProDetail item>
          {/* Back to result */}
          <BackResultTypography variant="p" onClick={() => navigate(-1)}>
            <KeyboardArrowLeftIcon
              sx={{
                fontSize: "14px",
              }}
            />
            Back to results
          </BackResultTypography>
        </BackResultsProDetail>

        {/* Whole Grid item*/}
        <SingleGridItemContents item>
          {/* 1st Content Box(Img) */}
          {productDetail?.productImages?.length > 0 ? (
            <ImgSectionProDetail
              src={productDetail.productImages[0].productImagePath}
              alt={productDetail.name || "Product Image"}
            />
          ) : (
            <Typography variant="body2">No Image Available</Typography>
          )}
          {/* 2nd content Box */}
          <SecondContentBox>
            {/* Name Section */}
            <NameProDetailTypography variant="body1">
              {productDetail.name}
            </NameProDetailTypography>
            {/* Product Details */}
            <ProductDetailBox>
              {/* Rating star Section */}
              <RatingStarBoxProdDetail>
                <Typography variant="body1" sx={{ color: "#0f1111" }}>
                  {productDetail.overallRatings}
                </Typography>
                <RatingSection
                  name="read-only"
                  value={productDetail.overallRatings ?? 0}
                  precision={0.5}
                  sx={{ color: "#de7921" }}
                  readOnly
                />
                <KeyboardArrowDownIcon sx={{ margin: "0" }} />
              </RatingStarBoxProdDetail>
              {/* Rating Section */}
              <RatingBoxProDetail>
                <RatingTypographyProDetail variant="body1">
                  {productDetail.noOfRatings > 1
                    ? `${productDetail.noOfRatings} Ratings`
                    : `No rating`}
                </RatingTypographyProDetail>
                <RatingTypographyProDetail>|</RatingTypographyProDetail>
                <RatingTypographyProDetail>
                  Search in this page
                </RatingTypographyProDetail>
              </RatingBoxProDetail>
            </ProductDetailBox>
            {/* Bought */}
            <Box>
              <BoughtTypographyProDetail variant="body1">
                {productDetail.bought} peoples in past month
              </BoughtTypographyProDetail>
            </Box>
            {/* Discount */}
            <Box>
              <DiscountSpanproDetail>
                -{productDetail.discount} %
              </DiscountSpanproDetail>
              <Rupeesymbol>₹</Rupeesymbol>
              <DiscountPriceDetail>
                {productDetail.discountedPrice}
              </DiscountPriceDetail>
            </Box>
            {/* Price */}
            <PriceBoxProDetail>
              <ActualPriceSpan>
                M.R.P : {productDetail.actualPrice}
              </ActualPriceSpan>
            </PriceBoxProDetail>
            {/* Delivery Section */}
            <ListSection aria-label="mailbox folders">
              {/* 1st section */}
              <FirstListItemSection>
                {productDetail.hasFreeDelivery > 0 && (
                  <ListItemIcon>
                    <ImgProDtail src={IMAGES.VAN_IMG} alt="vanImg" />
                    <SpanSection>
                      Free <br />
                      Delivery
                    </SpanSection>
                  </ListItemIcon>
                )}
                {productDetail.hasCashOnDelivery > 0 && (
                  <ListItemIcon>
                    <ImgProDtail src={IMAGES.PAYMENT_IMG} alt="PayImg" />
                    <SpanSection>
                      Pay on <br />
                      Delivery
                    </SpanSection>
                  </ListItemIcon>
                )}

                {productDetail.isTopBrand > 0 && (
                  <ListItemIcon>
                    <ImgProDtail src={IMAGES.TOPBRAND_IMG} alt="TopBrandImg" />
                    <SpanSection>
                      Top <br />
                      Brand
                    </SpanSection>
                  </ListItemIcon>
                )}

                {productDetail.isInstallationAvailable > 0 && (
                  <ListItemIcon sx={{ width: "20%" }}>
                    <ImgInstallation
                      src={IMAGES.INSTALLATION_IMG}
                      alt="installationImg"
                    />
                    <SpanSection>
                      Installation <br />
                      Available
                    </SpanSection>
                  </ListItemIcon>
                )}
              </FirstListItemSection>

              <Divider component="li" />
              {/* 2nd Section */}
              {productDetail?.propertyValues?.length > 0 && (
                <SecondListItemSection>
                  <ListItemText
                    primary="General Details"
                    primaryTypographyProps={{
                      fontFamily: "Rubik",
                      fontSize: "20px",
                      fontWeight: "600",
                      color: "#0f1111",
                    }}
                  />
                  {productDetail?.propertyValues?.length > 0 && (
                    // Details About Product
                    <DetailBox>
                      {/* Show first 4 items */}
                      {productDetail?.propertyValues
                        .slice(0, 4)
                        .map((item, index) => (
                          <React.Fragment key={index}>
                            <ShowLiNameElement>{item.name}</ShowLiNameElement>
                            <ShowLiValueElement>
                              {item.value}
                            </ShowLiValueElement>
                          </React.Fragment>
                        ))}

                      {/* Show last 2 items  when 'showMore' is true */}
                      {showmore &&
                        productDetail?.propertyValues
                          .slice(4, 6)
                          .map((item, index) => (
                            <React.Fragment key={index}>
                              <ShowLiNameElement>{item.name}</ShowLiNameElement>
                              <ShowLiValueElement>
                                {item.value}
                              </ShowLiValueElement>
                            </React.Fragment>
                          ))}
                    </DetailBox>
                  )}

                  {/* Show More / Show Less Button */}
                  {productDetail?.propertyValues?.length > 4 && (
                    <ShowButton onClick={() => setShowmore(!showmore)}>
                      <KeyboardArrowDownIcon />
                      {showmore ? "Show Less" : "Show More"}
                    </ShowButton>
                  )}
                </SecondListItemSection>
              )}
              <Divider component="li" />

              {/* 3rd Section */}
              {productDetail.about != null && (
                <Box>
                  <AboutListItem>
                    <ListItemText
                      primary="About this Product"
                      primaryTypographyProps={{
                        fontFamily: "Rubik",
                        fontSize: "20px",
                        fontWeight: "600",
                        color: "#0f1111",
                      }}
                    />

                    <ShowLiValueElement
                      dangerouslySetInnerHTML={{ __html: productDetail.about }}
                    ></ShowLiValueElement>
                  </AboutListItem>
                  <Divider component="li" />
                </Box>
              )}
            </ListSection>
          </SecondContentBox>

          {/*3rd content  */}
          <ThirdContentGrid item>
            {/* Wrapped Box */}
            <WrappedBox>
              {/* Delivery Section Box */}
              <DeliverySectionBox>
                <LocationOnOutlinedIcon />
                <DeliverySectionTypography variant="body2">
                  Deliver to Test -
                </DeliverySectionTypography>
                <DeliverySectionTypography variant="body2">
                  Update location
                </DeliverySectionTypography>
              </DeliverySectionBox>
              {/* Stock Box */}
              <Box>
                {productDetail.quantity < 1 ? (
                  <StockTypography>Out of stock</StockTypography>
                ) : productDetail.quantity <= 5 ? (
                  <StockTypography>
                    Only {productDetail.quantity} left in stock
                  </StockTypography>
                ) : (
                  <InStockTypography>In Stock</InStockTypography>
                )}
              </Box>

              {/* Payment Details whole Box */}
              <PaymentWholeBox>
                {/* Payment Details Box */}
                <PaymentBox>
                  <PaymentKeyTypography>Payment</PaymentKeyTypography>
                  <PaymentValueTypography>
                    Secure Transaction
                  </PaymentValueTypography>
                </PaymentBox>
                <PaymentBox>
                  <PaymentKeyTypography>Ships from</PaymentKeyTypography>
                  <PaymentValueTypography>Amazon</PaymentValueTypography>
                </PaymentBox>
                <PaymentBox>
                  <PaymentKeyTypography>Sold by</PaymentKeyTypography>
                  <DeveloperTypography>Developer Store</DeveloperTypography>
                </PaymentBox>
              </PaymentWholeBox>
              {/* Button Box */}
              <Box>
                {productDetail.quantity >= 1 ? (
                  <BuyButton variant="contained" fullWidth onClick={handleOpen}>
                    Buy now
                  </BuyButton>
                ) : null}
              </Box>
            </WrappedBox>
          </ThirdContentGrid>
        </SingleGridItemContents>

        {/* Payment Modal Component */}
        <Payment open={open} handleClose={handleClose} selectedpay={1} />

        {/* Product Specification*/}
        <ListBoxProductSpe>
          {productDetail?.description?.length > 0 && (
            // Details Box
            <>
              <SpecificationPro>Product Specifications</SpecificationPro>
              {productDetail.description.map((prop, index) => (
                // Display Details
                <DetailsProBox key={index}>
                  <DetailsNameTypography component="div">
                    {prop?.name}
                  </DetailsNameTypography>

                  <DetailsValueTypography component="div">
                    {prop?.value}
                  </DetailsValueTypography>
                </DetailsProBox>
              ))}
            </>
          )}
        </ListBoxProductSpe>
      </WholeGridProDetail>
    </>
  );
}

export default ProductDetail;
