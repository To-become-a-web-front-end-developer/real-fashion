import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { registerNav } from "../modules/Navigation";
import { createBrowserHistory } from "history";
import PageNotFound from "../views/PageNotFound";
import HomeRoutes from "./HomeRoutes";
import PrivateRoutes from "./PrivateRoutes";
import Auth from "../modules/Auth";

const PrivateRoute = ({ path, element: Element }) => {
  useEffect(() => {
    registerNav();
  }, []);

  return (
    <Route
      path={path}
      element={
        Auth.isAuthenticated() ? (
          <Element />
        ) : (
          <Navigate to="/404" replace />
        )
      }
    />
  );
};

const AppRoutes = () => {
  const browserHistory = createBrowserHistory();

  useEffect(() => {
    registerNav();
  }, []);

  return (
    <Router history={browserHistory}>
      <Routes>
          {HomeRoutes.map(({ path, exact, layout: Layout, component: Component }, index) => (
            <Route
              key={index}
              path={path}
              element={
                <Layout>
                  <Component />
                </Layout>
              }
            />
          ))}
          {PrivateRoutes.map(({ path, exact, layout: Layout, component: Component }, index) => (
            <PrivateRoute
              key={index}
              path={path}
              element={() => (
                <Layout>
                  <Component />
                </Layout>
              )}
            />
          ))}
          <Route path="/404" element={<PageNotFound />} />
          <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
