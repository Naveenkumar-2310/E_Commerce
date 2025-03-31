// Hooks
import  {useState } from "react";
// Image Section
import { loginLogo } from "../../../constants/Constant";
// MUI Materials
import Box from "@mui/material/Box";
import { CircularProgress, InputAdornment } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import Button from "@mui/material/Button";
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
  InputTextfield,
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
// Formik Validation
import { useFormik } from "formik";
import { validationSchema } from "../../../Validations/loginValidation";

function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowpassword] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit
  });

  const handleVisiblePassword = () => {
    setShowpassword(!showPassword);
  };

  return (
    <>
      <WholeGridLogin container spacing={2} xs={12} md={6}>
        {loading ? (
          <CircularProgress />
        ) : (
          <WholeBox>
            <img src={loginLogo} alt="Login_logo" />
            <SignInBox>
              <SigninTypography variant="h5" component="h6">
                Sign in with busniess credentials
              </SigninTypography>
              <form onSubmit={formik.handleSubmit}>
                <Box>
                  <LabelTypography variant="h6" component="p">
                    Email or mobile number
                  </LabelTypography>
                  <InputTextfield
                    variant="outlined"
                    value={formik.values.email}
                    name="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                  />
                </Box>

                <PasswordBox>
                  <LabelTypography variant="h5" component="p">
                    Password
                  </LabelTypography>
                  <InputTextfield
                    variant="outlined"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    name="password"
                    type={showPassword ? "text" : "password"}
                    error={
                      formik.touched.password && Boolean(formik.errors.password)
                    }
                    helperText={
                      formik.touched.password && formik.errors.password
                    }
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
                  <Button variant="contained" type="submit" color="primary" fullWidth>
                    Sign in
                  </Button>
                  <LoginBusTypography
                    variant="body1"
                    component="span"
                    onClick={() => navigate("/")}
                  >
                    Back to home
                  </LoginBusTypography>
                </ButtonBox>
              </form>
            </SignInBox>

            <WholeBoxexisting>
              <WrappingBox>
                <LineBox />
                <AlreadyTypography variant="body1" component="p">
                  Login
                </AlreadyTypography>
                <LineBox />
              </WrappingBox>

              <CreateAccountButton
                variant="contained"
                onClick={() => navigate("/login")}
                sx={{ fontWeight: "550" }}
              >
                LOGIN AS AMAZON USER
              </CreateAccountButton>
            </WholeBoxexisting>
          </WholeBox>
        )}
      </WholeGridLogin>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={() => setOpenSnackbar(false)}
        message={snackMsg}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      />
    </>
  );
}

export default Login;
