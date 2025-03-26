// Styled components
import {
  CategoryImage,
  ContentBox,
  Imgbox,
  NameTypography,
  WrappingBox,
} from "../../styles/category";
import { ROUTE_PATH } from "../../router/routesPath";
// Navigate hook
import { useNavigate } from "react-router-dom";

export default function Category({ allCategory }) {
  const navigate = useNavigate();

  const handleClickCategory = (id) => {
    navigate(`${ROUTE_PATH.SUB_CATEGORY}?id=${id}`);
  };

  return (
    <>
      {/* Content Box */}
      {console.log(allCategory)}
      <ContentBox>
        {allCategory.map((category) => (
          // Wrapping Box
          <WrappingBox key={category.id}>
            {/* Img Box */}
            <Imgbox onClick={() => handleClickCategory(category.id)}>
              <CategoryImage
                src={category.categoryImagePath}
                alt={category.name}
              />
              <NameTypography variant="body1">{category.name}</NameTypography>
            </Imgbox>
          </WrappingBox>
        ))}
      </ContentBox>
    </>
  );
}
