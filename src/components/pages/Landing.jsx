// Hooks
import { useEffect, useState } from "react";
// MUI Materials
import { Typography} from "@mui/material";
// Navigate Hook
import { useNavigate } from "react-router-dom";
// Styled components
import {
  BannerImgBox,
  ContentImgLanding,
  GridItemLanding,
  ImgLanding,
  WholeBox,
  WholeGridLanding,
  WrappingBox,
} from "../../styles/landing";
// Routing paths
import { ROUTE_PATHS } from "../../router/routePaths";
// API and Instance paths
import { API_PATH } from "../../api/apiPath";
import { api } from "../../api/config";

function Landing() {
  const [products, setProducts] = useState([]);
  const [banner, setBanner] = useState([]);
  const navigate = useNavigate();

  const handleProduct = (subCategoryId) => {
    navigate(`${ROUTE_PATHS.PRODUCT_LIST}?subCategoryId=${subCategoryId}`);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try{
        const { data = [] } = await api.get(API_PATH.LANDING_API);
      setProducts(data);
      } catch {}
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    const fetchBanners = async () => {
      const { data = [] } = await api.get(API_PATH.BANNER_API);
      setBanner(data);
    };
    fetchBanners();
  }, []);

  return (
    <>
      {/* Whole grid */}
      <WholeGridLanding container spacing={2}>
        {/* Img box */}
        <BannerImgBox>
          {banner.length > 0 && (
            <ImgLanding
              src={banner[0]?.bannerImagePath}
              alt={banner.bannerImageName}
            />
          )}
        </BannerImgBox>

        {/* Whole Box */}
        <WholeBox>
          <WrappingBox>
              {products.map((category) => (
                <GridItemLanding
                  item
                  key={category.id}
                  onClick={() => handleProduct(category.id)}
                >
                  <Typography variant="h5">{category.name}</Typography>
                  {category.product.length > 0 &&
                    category.product[0].productImages.length > 0 && (
                      <ContentImgLanding
                        src={`${category.product[0].fileBaseUrl}${category.product[0].productImages[0].productImagePath}`}
                        alt={category.name}
                      />
                    )}
                </GridItemLanding>
              ))
            }
          </WrappingBox>
        </WholeBox>
      </WholeGridLanding>
    </>
  );
}

export default Landing;
