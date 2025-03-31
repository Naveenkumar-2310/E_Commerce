// Hooks
import { useState , useEffect} from "react";
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
// Formik Validate
import { useFormik } from "formik";
import { registerValidationSchema } from "../../../Validations/Register";
// Styled Components
import {
  WholeBox,
  SignInBox,
  SigninTypography,
  LabelTypography,
  CreateAccountButton,
} from "../../../styles/login";
import {
  AlreadyTypography,
  ButtonBoxregister,
  LineBox,
  RegisterButton,
  WholeBoxexisting,
  WholegridContainer,
  WrappingBox,
} from "../../../styles/register";
// API Calss
import { ROUTE_PATHS } from "../../../router/routePaths";
import { CustomComponents } from "../../shared/CustomComponents";
import { useDispatch } from "react-redux";
import { endLoading, showSnackbar, startLoading } from "../../../redux/slice";
import { API_PATH } from "../../../api/apiPath";
import { api } from "../../../api/config";
import { getCookie } from "../../../utils/cookies";

function Register() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const token = getCookie("token");
    if (token) {
      navigate(ROUTE_PATHS.DASHBOARD);
    }
  }, [navigate]);

  const handleSubmitForm = async (values) => {
    console.log(values);
    dispatch(startLoading())
    try {
      const {data = []} = await api.post(API_PATH.REGISTER_API, values, {
        headers: { "Content-Type": "application/json" },
      });
        dispatch(
          showSnackbar({
            message: data.message,
            severity: "success",
          })
        );
        navigate(ROUTE_PATHS.LOGIN);
    } catch  {} 
  }

  const formik = useFormik({
    initialValues: {
      name: "",
      mobileNo: "",
      email: "",
      password: "",
    },
    validationSchema: registerValidationSchema,
    onSubmit: handleSubmitForm,
  });

  return (
    <>
      <WholegridContainer container spacing={2} xs={12} md={6}>
        
          <WholeBox>
            <img src={IMAGES.LOGIN_LOGO} alt="Login_logo" />
            <SignInBox>
              <SigninTypography variant="h5" component="h6">
                Create your Account
              </SigninTypography>
              <form onSubmit={formik.handleSubmit}>
                <Box>
                  <LabelTypography variant="h6" component="p">
                    Name
                  </LabelTypography>
                  <CustomComponents
                    variant="outlined"
                    sx={{ mb: 1 }}
                    name="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.name && Boolean(formik.errors.name)}
                    helperText={formik.touched.name && formik.errors.name}
                  />

                  <LabelTypography variant="h6" component="p">
                    Mobile number
                  </LabelTypography>
                  <CustomComponents
                    variant="outlined"
                    sx={{ mb: 1 }}
                    name="mobileNo"
                    value={formik.values.mobileNo}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.mobileNo && Boolean(formik.errors.mobileNo)
                    }
                    helperText={
                      formik.touched.mobileNo && formik.errors.mobileNo
                    }
                  />

                  <LabelTypography variant="h6" component="p">
                    Email
                  </LabelTypography>
                  <CustomComponents
                    variant="outlined"
                    sx={{ mb: 1 }}
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                  />
                </Box>

                <Box>
                  <LabelTypography variant="h5" component="p">
                    Password
                  </LabelTypography>
                  <CustomComponents
                    variant="outlined"
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.password && Boolean(formik.errors.password)
                    }
                    helperText={
                      formik.touched.password && formik.errors.password
                    }
                    sx={{ mb: 1 }}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          {showPassword ? (
                            <VisibilityIcon
                              onClick={() => setShowPassword(!showPassword)}
                              sx={{ cursor: "pointer", color: "#0f1111" }}
                            />
                          ) : (
                            <VisibilityOffIcon
                              onClick={() => setShowPassword(!showPassword)}
                              sx={{ cursor: "pointer", color: "#0f1111" }}
                            />
                          )}
                        </InputAdornment>
                      ),
                    }}
                  />
                </Box>

                <ButtonBoxregister>
                  <RegisterButton variant="contained" type="submit">
                    Register
                  </RegisterButton>
                </ButtonBoxregister>
              </form>
            </SignInBox>

            <WholeBoxexisting>
              <WrappingBox>
                <LineBox />
                <AlreadyTypography variant="body1" component="p">
                  Already have an account?
                </AlreadyTypography>
                <LineBox />
              </WrappingBox>
              <CreateAccountButton
                variant="contained"
                onClick={() => navigate(ROUTE_PATHS.LOGIN)}
              >
                GO TO LOGIN
              </CreateAccountButton>
            </WholeBoxexisting>
          </WholeBox>

      </WholegridContainer>

    </>
  );
}

export default Register;
