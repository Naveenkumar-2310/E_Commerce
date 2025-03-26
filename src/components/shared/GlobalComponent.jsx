import { Backdrop, CircularProgress, Snackbar, Alert } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { hideSnackbar } from "../../redux/slice";

function GlobalComponent() {
  const dispatch = useDispatch();
  const { message, severity } = useSelector((state) => state.snackbar);
  const { loading } = useSelector((state) => state.loader);

  return (
    <>
      {/* Global Loader */}
      <Backdrop open={loading} sx={{ zIndex: 1300, color: "Blue",backgroundColor : "transparent" }}>
        <CircularProgress color="primary" />
      </Backdrop>

      {/*Global Snackbar */}
      <Snackbar
        open={!!message} 
        autoHideDuration={2000}
        onClose={() => dispatch(hideSnackbar())}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert
          onClose={() => dispatch(hideSnackbar())}
          severity={severity}
          variant="filled"
        >
          {message}
        </Alert>
      </Snackbar>
    </>
  );
}

export default GlobalComponent;

