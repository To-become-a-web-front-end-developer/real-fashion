import { Navigate } from "react-router-dom";
import BaseLayout from "../layouts/BaseLayout";

 import Home from "../views/Home/HomeContainer";
 import SingleProductContainer from "../views/Product/SingleProductContainer";
 import CategoryContainer from "../views/Category/CategoryContainer";
 
 var routes = [
   {
     path: "/fashion-cube",
     exact: true,
     layout: BaseLayout,
     component: Home,
   },
 
   {
     path: "/home",
     layout: BaseLayout,
     component: () => <Navigate to="/fashion-cube" />,
   },
   {
     path: "/fashion-cube/single-product/:id",
     layout: BaseLayout,
     component: SingleProductContainer,
   },
   {
     path: "/fashion-cube/shops/:category",
     layout: BaseLayout,
     component: CategoryContainer,
   },
 ];
 
 export default routes;
 