import { configureStore } from "@reduxjs/toolkit";
import { nameReducer, snackbarReducer, loaderReducer } from "../redux/slice";

const store = configureStore({
  reducer: {
    nameSlice: nameReducer,
    snackbar: snackbarReducer,
    loader: loaderReducer,
  },
});

export default store;
