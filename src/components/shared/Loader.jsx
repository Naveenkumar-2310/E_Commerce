// MUI Material
import { Backdrop, CircularProgress} from "@mui/material";
import { useSelector } from "react-redux";

function Loader() {
    const { loading } = useSelector((state) => state.loader);
  
  return (
    <Backdrop open={loading} sx={{ zIndex: 1300, color: "Blue",backgroundColor : "transparent" }}>
        <CircularProgress color="primary" />
      </Backdrop>

  );
}

export default Loader;
