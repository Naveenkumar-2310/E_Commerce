// MUI Materials
import { Typography } from "@mui/material";
// Styled Components
import {
  BackToTopBox,
  HeaderTypography,
  WholeFooterBox,
  SingleGridItem,
  WholeFooterGrid,
  ContentTypography,
} from "../../styles/footer";
// Styled Components
import { LinktoLanding } from "../../styles/category";
import {
  NewcusTypography,
  NotsigninBox,
  NotsigninButton,
  NotsigninTypography,
} from "../../styles/landing";
// Navigate Hook
import { useNavigate } from "react-router-dom";
import { ROUTE_PATHS } from "../../router/routePaths";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Cookie from "universal-cookie"

const cookie = new Cookie();

const Footer = () => {
  const navigate = useNavigate();
  const token = cookie.get("token");

  return (
    <>
      {/* Not Signin Box */}
      {!token && (
        <NotsigninBox>
          <NotsigninTypography variant="p">
            See personalized recommendations
          </NotsigninTypography>
          <NotsigninButton
            variant="contained"
            onClick={() => navigate(ROUTE_PATHS.LOGIN)}
          >
            Sign in
          </NotsigninButton>
          <NewcusTypography variant="p">
            New customer?
            <LinktoLanding to={ROUTE_PATHS.REGISTER}>Start here</LinktoLanding>
          </NewcusTypography>
        </NotsigninBox>
      )}
      <WholeFooterBox>
        <BackToTopBox href="#top">Back to top <KeyboardArrowUpIcon/></BackToTopBox>
        <WholeFooterGrid container>
          <SingleGridItem item="true">
            <HeaderTypography variant="body1" component="p">
              Get to Know Us
            </HeaderTypography>
            <ContentTypography variant="body2" component="p">
              About Us
            </ContentTypography>
            <ContentTypography variant="body2" component="p">
              Careers
            </ContentTypography>
            <ContentTypography variant="body2" component="p">
              Press Releases
            </ContentTypography>
            <ContentTypography variant="body2" component="p">
              Amazon Science
            </ContentTypography>
          </SingleGridItem>
          <SingleGridItem item="true">
            <HeaderTypography variant="body1" component="p">
              Connect wth Us
            </HeaderTypography>
            <ContentTypography variant="body2" component="p">
              Facebook
            </ContentTypography>
            <ContentTypography variant="body2" component="p">
              Twitter
            </ContentTypography>
            <ContentTypography variant="body2" component="p">
              Instagram
            </ContentTypography>
          </SingleGridItem>
          <SingleGridItem item="true">
            <HeaderTypography variant="body1" component="p">
              Make Money with Us
            </HeaderTypography>
            <ContentTypography variant="body2" component="p">
              Sell on Amazon
            </ContentTypography>
            <ContentTypography variant="body2" component="p">
              Sell under Amazon Accelerator
            </ContentTypography>
            <ContentTypography variant="body2" component="p">
              Protect and Build Your Brand
            </ContentTypography>
            <ContentTypography variant="body2" component="p">
              Amazon Global Selling
            </ContentTypography>
            <ContentTypography variant="body2" component="p">
              Supply to Amazon
            </ContentTypography>
            <ContentTypography variant="body2" component="p">
              Become an Affiliate
            </ContentTypography>
            <ContentTypography variant="body2" component="p">
              Fulfilment by Amazon
            </ContentTypography>
            <ContentTypography variant="body2" component="p">
              Advertise Your Products
            </ContentTypography>
            <ContentTypography variant="body2" component="p">
              Amazon Pay on Merchants
            </ContentTypography>
          </SingleGridItem>
          <SingleGridItem item="true">
            <HeaderTypography variant="body1" component="p">
              Let Us Help You
            </HeaderTypography>
            <Typography variant="body2" component="p">
              Your Account
            </Typography>
            <Typography variant="body2" component="p">
              Returns Centre
            </Typography>
            <Typography variant="body2" component="p">
              Recalls and Product Safety Alerts
            </Typography>
            <Typography variant="body2" component="p">
              100% Purchase Protection
            </Typography>
            <Typography variant="body2" component="p">
              Amazon App Download
            </Typography>
            <Typography variant="body2" component="p">
              Help
            </Typography>
          </SingleGridItem>
        </WholeFooterGrid>
      </WholeFooterBox>
    </>
  );
};

export default Footer;
