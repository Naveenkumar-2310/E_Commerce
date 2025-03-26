import { createSlice} from "@reduxjs/toolkit";
import { removeCookie } from "../utils/cookies";

// Name Slice
const nameInitialState = {
 userInfo : {}
};

const nameSlice = createSlice({
  name: "nameSlice",
  initialState: nameInitialState,
  reducers: {
    login: (state, action) => {
      state.userInfo = action.payload;
    },
    logout: (state) => {
      state.userInfo = {};
      removeCookie("login");
    },
  },
});

// Snackbar Slice
const snackbarInitialState = {
  message: "",
  severity: "success",
};

const snackbarSlice = createSlice({
  name: "snackbar",
  initialState: snackbarInitialState,
  reducers: {
    showSnackbar: (state, action) => {
      state.message = action.payload.message;
      state.severity = action.payload.severity || "success";
    },
    hideSnackbar: (state) => {
      state.message = "";
      state.severity = "success";
    },
  },
});

// Loader slice
const loaderInitialState = {
  loading : false,  
} 

const loaderSlice = createSlice({
  name : "loader",
  initialState : loaderInitialState,
  reducers : {
    startLoading : (state) => {
      state.loading = true;
    },
    endLoading : (state) => {
      state.loading = false;
    }
  }
})

// Export actions
export const { login, logout } = nameSlice.actions;
export const { showSnackbar, hideSnackbar } = snackbarSlice.actions;
export const {startLoading, endLoading} = loaderSlice.actions;

// Export reducers
export const nameReducer = nameSlice.reducer;
export const snackbarReducer = snackbarSlice.reducer;
export const loaderReducer = loaderSlice.reducer;
