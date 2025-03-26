import axios from "axios";
import Cookies from "js-cookie";
import  store  from "../redux/store"; 
import { endLoading, showSnackbar, startLoading } from "../redux/slice"; 

export const api = axios.create({
  baseURL: "http://api-ecommerce-app.bluetickcoders.com",
});

// ✅ Request Interceptor: Start Loader & Add Token
api.interceptors.request.use(
  (config) => {
    store.dispatch(startLoading()); 
    const token = Cookies.get("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    store.dispatch(endLoading());
    // store.dispatch(showSnackbar({ message: error.response?.data?.error, severity: "error" }));
    return Promise.reject(error);
  }
);

// ✅ Response Interceptor: Handle Success & Errors
api.interceptors.response.use(
  (response) => {
    store.dispatch(endLoading());
    return response;
  },
  (error) => {
    store.dispatch(endLoading()); 
    if (!error.response) {
      store.dispatch(showSnackbar({ message: error.message, severity: "error" }));
    } else {
      store.dispatch(showSnackbar({ message: error.response?.data?.error, severity: "error" }));
    }
    console.log("Error",error.message)
    return Promise.reject(error);
  }
);
