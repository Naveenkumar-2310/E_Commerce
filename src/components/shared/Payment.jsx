import { useState } from "react";

// MUI Materials
import {
  Modal,
  Box,
  Radio,
  RadioGroup,
  FormControlLabel,
  Typography,
  Button,
  InputAdornment,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import { useNavigate } from "react-router-dom";

// MUI Icons
import { Visibility, VisibilityOff } from "@mui/icons-material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useFormik } from "formik";
import { PaymentValidation } from "../../Validations/Payment";
import {
  BuyButtonModal,
  CustomedCVVTextfield,
  HeadingText,
  HeadingTypography,
  ModalBox,
  NameTextfield,  
  PasswordButton,
  SelectedPaymodeCard,
} from "../../styles/payment";
import { ROUTE_PATHS } from "../../router/routePaths";

// eslint-disable-next-line react/prop-types
function Payment({ open }) {
  // const navigate = useNavigate();
  const [selectedpay, setSelectedpay] = useState("");
  const [showPassword, setShowpassword] = useState(false);
  const [openPayModal, setOpenPayModal] = useState(false);
  const [setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      cardNumber: "",
      cardHolder: "",
      ExpiryDate: "",
      CVVNumber: "",
      UPIId: "",
    },
    validationSchema: PaymentValidation,
    onSubmit: async () => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setOpenPayModal(true);
      }, 1000);
    },
  });

  const handleClickShowPassword = () => {
    setShowpassword(!showPassword);
  };

  const handleOpenPayment = () => {
    setOpenPayModal(true);
  };

  return (
    <Grid container>
      {/* Payment Modal */}
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ModalBox>
          <List aria-label="mailbox folders">
            <ListItem>
              <HeadingText primary="Select Payment Method" />
            </ListItem>
            <Divider component="li" />
          </List>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            value={selectedpay}
            onChange={(e) => setSelectedpay(e.target.value)}
            name="radio-buttons-group"
            sx={{
              paddingLeft: "15px",
            }}
          >
            {/* Debit/Credit Card */}
            <FormControlLabel
              value="dccc"
              control={<Radio sx={{ "&.Mui-checked": { color: "black" } }} />}
              label="Debit Card or Credit Card"
            />
            {/* UPI */}
            <FormControlLabel
              value="upi"
              control={<Radio sx={{ "&.Mui-checked": { color: "black" } }} />}
              label="UPI"
            />
            {/* Cash on Delivery */}
            <FormControlLabel
              value="cod"
              control={<Radio sx={{ "&.Mui-checked": { color: "black" } }} />}
              label="Cash on Delivery"
            />
          </RadioGroup>

          {selectedpay === "dccc" && (
            <SelectedPaymodeCard>
              <NameTextfield
                placeholder="Card number*"
                name="cardNumber"
                value={formik.values.cardNumber}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.cardNumber && Boolean(formik.errors.cardNumber)
                }
                helperText={
                  formik.touched.cardNumber && formik.errors.cardNumber
                }
              />
              <NameTextfield
                name="cardHolder"
                placeholder="Cardholder Name*"
                value={formik.values.cardHolder}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.cardHolder && Boolean(formik.errors.cardHolder)
                }
                helperText={
                  formik.touched.cardHolder && formik.errors.cardHolder
                }
              />
              <NameTextfield
                name="ExpiryDate"
                placeholder="Expiry Date (MM/YY)*"
                value={formik.values.ExpiryDate}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.ExpiryDate && Boolean(formik.errors.ExpiryDate)
                }
                helperText={
                  formik.touched.ExpiryDate && formik.errors.ExpiryDate
                }
              />
              <HeadingTypography>CVV</HeadingTypography>
              <CustomedCVVTextfield
                type={showPassword ? "text" : "password"}
                name="CVVNumber"
                value={formik.values.CVVNumber}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.CVVNumber && Boolean(formik.errors.CVVNumber)
                }
                helperText={formik.touched.CVVNumber && formik.errors.CVVNumber}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <PasswordButton onClick={handleClickShowPassword}>
                        {showPassword ? (
                          <Visibility sx={{ color: "black" }} />
                        ) : (
                          <VisibilityOff sx={{ color: "black" }} />
                        )}
                      </PasswordButton>
                    </InputAdornment>
                  ),
                }}
              />
            </SelectedPaymodeCard>
          )}

          {selectedpay === "upi" && (
            <Box>
              <NameTextfield
                name="UPIId"
                placeholder="UPI ID"
                value={formik.values.UPIId}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.UPIId && Boolean(formik.errors.UPIId)}
                helperText={formik.touched.UPIId && formik.errors.UPIId}
              />
            </Box>
          )}

          <Box>
            <BuyButtonModal
              variant="contained"
              type="submit"
              onClick={handleOpenPayment}
            >
              PROCEED TO BUY
            </BuyButtonModal>
            <NestedModal open={openPayModal} />
          </Box>
        </ModalBox>
      </Modal>
    </Grid>
  );
}

// eslint-disable-next-line react/prop-types
export const NestedModal = ({ open }) => {
  const navigate = useNavigate();
  return (
    <>
      {/* Nested Modal for Payment Success */}
      <Modal open={open}>
        <Box
          sx={{
            position: "absolute",
            top: "43%",
            left: "52.5%",
            transform: "translate(-50%, -50%)",
            width: "30%",
            height : "300px",
            bgcolor: "white",
            boxShadow: 24,
            borderRadius: 2,
            textAlign: "center",
            outline: "none",
          }}
        >
          <CheckCircleIcon sx={{ color: "green", fontSize: "130px" }} />
          <Typography variant="h6">Payment Successful!</Typography>
          <Typography sx={{ mt: 2 }}>
            Your payment has been processed successfully.
          </Typography>
          <Button
            variant="contained"
            sx={{ mt: 2, backgroundColor: "#0f1111", color: "white" }}
            onClick={() => navigate(ROUTE_PATHS.LAYOUT)}
          >
            Continue Shopping
          </Button>
        </Box>
      </Modal>
    </>
  );
};

export default Payment;
