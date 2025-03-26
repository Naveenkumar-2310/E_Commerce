import { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ROUTES } from "../../router/Routes";
import Loader from "../shared/Loader";
import { Provider } from "react-redux";
import store from "../../redux/store";
import GlobalComponent from "../shared/GlobalComponent";

export default function Root() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Suspense fallback={<Loader />}>
          <Routes>
            {ROUTES.map(({ path, element, children }, index) => (
              <Route key={index} path={path} element={element}>
                {children?.map(({ path, element }, childIndex) => (
                  <Route key={childIndex} path={path} element={element} />
                ))}
              </Route>
            ))}
          </Routes>
        </Suspense>
        <GlobalComponent />
      </Provider>
    </BrowserRouter>
  );
}
