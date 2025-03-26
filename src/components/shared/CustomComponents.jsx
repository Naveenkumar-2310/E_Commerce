import PropTypes from "prop-types";
import { InputTextfield } from "../../styles/login";

export const CustomComponents = ({
  name,
  value = "",
  onChange,
  onBlur,
  error = false,
  helperText = "",
  type = "",
  InputProps = {},
  fullWidth = true,
  variant = "outlined",
}) => {
  return (
    <InputTextfield
      name={name}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      type={type}
      error={Boolean(error)}
      helperText={helperText || ""}
      InputProps={InputProps}
      fullWidth={fullWidth}
      variant={variant}
    />
  );
};

// ✅ Add PropTypes validation
CustomComponents.propTypes = {
  name: PropTypes.string.isRequired, 
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  error: PropTypes.bool,
  helperText: PropTypes.string,
  type: PropTypes.string,
  InputProps: PropTypes.object,
  fullWidth: PropTypes.bool,
  variant: PropTypes.string,
};

CustomComponents.defaultProps = {
  value: "",
  onBlur: () => {},
  error: false,
  helperText: "",
  type: "text",
  InputProps: {},
  fullWidth: true,
  variant: "outlined",
};
