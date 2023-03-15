import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { registerNav } from "../modules/Navigation";
import { createBrowserHistory } from "history";
import PageNotFound from "../views/PageNotFound";
import HomeRoutes from "./HomeRoutes";
import PrivateRoutes from "./PrivateRoutes";
import Auth from "../modules/Auth";

const PrivateRoute = ({ element: Element, ...rest }) => {
  const finalComponent =
    Auth.getUserDetails() !== undefined &&
    Auth.getUserDetails() !== null &&
    Auth.getToken() !== undefined ? (
      <Route {...rest} element={<Element />} />
    ) : (
      <Navigate to="/PageNotFound" replace />
    );

  return finalComponent;
};

const AppRoutes = () => {
  const browserHistory = createBrowserHistory();

  useEffect(() => {
    registerNav(browserHistory);
  }, [browserHistory]);

  return (
    <div>
      <Router>
        <Routes>
          {HomeRoutes.map((homeRoute, index) => {
            return (
              <Route
                key={index}
                path={homeRoute.path}
                element={
                  <homeRoute.layout>
                    <homeRoute.component />
                  </homeRoute.layout>
                }
              />
            );
          })}
          {PrivateRoutes.map((privateRoute, index) => {
            return (
              <PrivateRoute
                key={index}
                path={privateRoute.path}
                element={privateRoute.component}
              />
            );
          })}
          <Route path="/PageNotFound" element={<PageNotFound />} />
          <Route path="*" element={<Navigate to="/PageNotFound" replace />} />
        </Routes>
      </Router>
    </div>
  );
};

export default AppRoutes;
