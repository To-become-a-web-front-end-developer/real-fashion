import { Navigate, Route, Routes } from "react-router-dom";
import BaseLayout from "../layouts/BaseLayout";

import Home from "../views/Home/HomeContainer";
import SingleProductContainer from "../views/Product/SingleProductContainer";
import CategoryContainer from "../views/Category/CategoryContainer";

const routes = [
  {
    path: "/fashion-cube",
    element: <BaseLayout />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "single-product/:id",
        element: <SingleProductContainer />,
      },
      {
        path: "shops/:category",
        element: <CategoryContainer />,
      },
    ],
  },
  {
    path: "/home",
    element: <Navigate to="/fashion-cube" />,
  },
  {
    path: "*",
    element: <Navigate to="/404" />,
  },
];

function AppRoutes() {
  return (
    <Routes>
      {routes.map(({ path, element, children }) => (
        <Route key={path} path={path} element={element}>
          {children &&
            children.map(({ path, element }) => (
              <Route key={path} path={path} element={element} />
            ))}
        </Route>
      ))}
    </Routes>
  );
}

export default AppRoutes;
