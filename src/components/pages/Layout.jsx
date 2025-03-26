import { Outlet } from "react-router-dom";
import Header from "../shared/Header";
import Footer from "../shared/Footer";
import Cookies from "universal-cookie";
// Slices
import { login } from "../../redux/slice";
// Hooks
import { useEffect } from "react";
import { useDispatch } from "react-redux";
// API Paths
import { api } from "../../api/config";
import { API_PATH } from "../../api/apiPath";

const cookies = new Cookies();

function Layout() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUserData = async () => {
      const token = cookies.get("token");
      try{
        const { data = [] } = await api.get(API_PATH.USER_INFO_API, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        dispatch(login({ userInfo: data }));
      } catch {}
    };

    fetchUserData();
  }, [dispatch]);

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
