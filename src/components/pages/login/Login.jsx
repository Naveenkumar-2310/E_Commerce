// Hoooks
import { useState } from "react";
// Images
import { IMAGES } from "../../../constants/Constant";
// MUI Materials
import Box from "@mui/material/Box";
import { InputAdornment } from "@mui/material";
// MUI Icons
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
// Navigate Hook
import { useNavigate } from "react-router-dom";
// Styled Components
import {
  WholeBox,
  SignInBox,
  SigninTypography,
  LabelTypography,
  ContinueButton,
  CreateAccountButton,
  LoginBusTypography,
  WholeGridLogin,
  PasswordBox,
  ButtonBox,
} from "../../../styles/login";
import {
  AlreadyTypography,
  LineBox,
  WholeBoxexisting,
  WrappingBox,
} from "../../../styles/register";
// Formik Validaiton
import { useFormik } from "formik";
import { validationSchema } from "../../../Validations/login";
// API Calls
import { api } from "../../../api/config";
import { CustomComponents } from "../../shared/CustomComponents";
import { useDispatch } from "react-redux";
import {
  startLoading,
  endLoading,
  showSnackbar,
  login,
} from "../../../redux/slice";
import { ROUTE_PATHS } from "../../../router/routePaths";
import { API_PATH } from "../../../api/apiPath";
import { setCookie } from "../../../utils/cookies";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showPassword, setShowpassword] = useState(false);

  const handleSubmit = async (values) => {
    dispatch(startLoading());
    try {
      const { data = [] } = await api.post(API_PATH.LOGIN_API, values);

      if (data?.token) {
        ["token", "refreshToken", "id", "role", "roleId", "roleName"].forEach(
          (key) =>
            setCookie(key, data[key] || data.userInfo?.[key], {
              path: ROUTE_PATHS.LAYOUT,
            })
        );

        dispatch(
          showSnackbar({ message: "Login successfully", severity: "success" })
        );
        dispatch(login(data.userInfo));
        navigate(ROUTE_PATHS.LAYOUT);
      }
    } catch {}
  };

  const formik = useFormik({
    initialValues: {
      mobileNo: "",
      password: "",
    },
    validationSchema,
    onSubmit: handleSubmit,
  });

  const handleVisiblePassword = () => {
    setShowpassword(!showPassword);
  };

  return (
    <>
      <WholeGridLogin container spacing={2} xs={12} md={6}>
        <WholeBox>
          <img src={IMAGES.LOGIN_LOGO} alt="Login_logo" />
          <SignInBox>
            <SigninTypography variant="h5" component="h6">
              Sign in or create account
            </SigninTypography>
            <form onSubmit={formik.handleSubmit}>
              <Box>
                <LabelTypography variant="h6" component="p">
                  Email or mobile number
                </LabelTypography>
                <CustomComponents
                  label="Email or mobile number"
                  name="mobileNo"
                  value={formik.values.mobileNo}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.mobileNo && Boolean(formik.errors.mobileNo)
                  }
                  helperText={formik.touched.mobileNo && formik.errors.mobileNo}
                />
              </Box>

              <PasswordBox>
                <LabelTypography variant="h5" component="p">
                  Password
                </LabelTypography>
                <CustomComponents
                  variant="outlined"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  name="password"
                  type={showPassword ? "text" : "password"}
                  error={
                    formik.touched.password && Boolean(formik.errors.password)
                  }
                  helperText={formik.touched.password && formik.errors.password}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        {showPassword ? (
                          <VisibilityIcon
                            onClick={handleVisiblePassword}
                            sx={{ cursor: "pointer", color: "#0f1111" }}
                          />
                        ) : (
                          <VisibilityOffIcon
                            onClick={handleVisiblePassword}
                            sx={{ cursor: "pointer", color: "#0f1111" }}
                          />
                        )}
                      </InputAdornment>
                    ),
                  }}
                />
              </PasswordBox>

              <ButtonBox>
                <ContinueButton variant="contained" type="submit">
                  Continue
                </ContinueButton>
                <LoginBusTypography
                  variant="body1"
                  component="p"
                  onClick={() => navigate(ROUTE_PATH.BUSINESS_ACCOUNT)}
                >
                  Login in Business Account?
                </LoginBusTypography>
                <LoginBusTypography
                  variant="body1"
                  component="span"
                  onClick={() => navigate(-1)}
                >
                  Go Back
                </LoginBusTypography>
              </ButtonBox>
            </form>
          </SignInBox>

          <WholeBoxexisting>
            <WrappingBox>
              <LineBox />
              <AlreadyTypography variant="body1" component="p">
                New to Amazon?
              </AlreadyTypography>
              <LineBox />
            </WrappingBox>

            <CreateAccountButton
              variant="contained"
              onClick={() => navigate(ROUTE_PATH.REGISTER)}
              sx={{ fontWeight: "550" }}
            >
              CREATE NEW ACCOUNT
            </CreateAccountButton>
          </WholeBoxexisting>
        </WholeBox>
      </WholeGridLogin>
    </>
  );
}

export default Login;
