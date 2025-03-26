import { lazy } from "react";
import { ROUTE_PATHS } from "./routePaths";

const Login = lazy(() => import("../components/pages/login/Login"));
const Register = lazy(() => import("../components/pages/login/Register"));
const Landing = lazy(() => import("../components/pages/Landing"));
const Category = lazy(() => import("../components/pages/Categoreis/Categories"));
const Subcategory = lazy(() => import("../components/pages/Categoreis/Subcategories"));
const Product = lazy(() => import("../components/pages/Products/ProductList"));
const ProductDetail = lazy(() => import("../components/pages/Products/ProductDetail"));
const Business = lazy(() => import("../components/pages/login/BusniessAccount"));
const Layout = lazy(() => import("../components/pages/Layout"));

export const ROUTES = [
  {
    path: ROUTE_PATHS.LAYOUT, 
    element: <Layout />,
    children: [
      { path: ROUTE_PATHS.LANDING, element: <Landing /> },
      { path: ROUTE_PATHS.CATEGORY, element: <Category /> },
      { path: ROUTE_PATHS.SUB_CATEGORY, element: <Subcategory /> },
      { path: ROUTE_PATHS.PRODUCT_LIST, element: <Product /> },
      { path: ROUTE_PATHS.PRODUCT_DETAIL, element: <ProductDetail /> },
    ],
  },
  {
    path: ROUTE_PATHS.LOGIN,
    element: <Login />,
  },
  {
    path: ROUTE_PATHS.REGISTER,
    element: <Register />,
  },
  {
    path: ROUTE_PATHS.BUSINESS_ACCOUNT,
    element: <Business />,
  },
  {
    path: ROUTE_PATHS.NO_PATH,
    element: <h1>404 Page Not Found!</h1>,
  },
];
