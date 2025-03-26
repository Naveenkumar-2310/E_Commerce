import Cookies from "universal-cookie";
import { ROUTE_PATHS } from "../router/routePaths";

const cookies = new Cookies();

export const getCookie = (name) => {
    return cookies.get(name) 
}

export const setCookie = (name, value) => {
    cookies.set(name, value, {
        path: ROUTE_PATHS.LAYOUT,
        secure: true, 
        sameSite: "Strict",
    });
};

export const removeCookie = (name) => {
    cookies.remove(name,{path : ROUTE_PATHS.LAYOUT})
}