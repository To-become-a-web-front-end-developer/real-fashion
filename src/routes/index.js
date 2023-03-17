import { useEffect,Component } from "react";
import {
  BrowserRouter as Router,
   Navigate,
   Route,
   Switch
} from "react-router-dom";
import { registerNav } from "../modules/Navigation";
import { createBrowserHistory } from "history";
import PageNotFound from "../views/PageNotFound";
import HomeRoutes from "./HomeRoutes";
import PrivateRoutes from "./PrivateRoutes";
import Auth from "../modules/Auth";

 const PrivateRouter = ({ component, ...options }) => {
   const finalComponent =
     Auth.getUserDetails() !== undefined &&
     Auth.getUserDetails() !== null &&
     Auth.getToken() !== undefined ? (
       <Route {...options} component={component} />
     ) : (
       <Navigate to="/PageNotFound" />
     );
 
   return finalComponent;
 };
 
 class Routes extends Component {
   constructor(props) {
     super(props);
     this.state = {};
   }
 
   render() {
     const browserHistory = createBrowserHistory();
 
     return (
       <div>
         <Router ref={registerNav}>
           <Routes>
             {HomeRoutes.map((homeRoute, index) => {
               return (
                 <Route
                   key={index}
                   path={homeRoute.path}
                   exact={homeRoute.exact}
                   component={props => {
                     return (
                       <homeRoute.layout {...props}>
                         <homeRoute.component {...props} />
                       </homeRoute.layout>
                     );
                   }}
                 />
               );
             })}
             {PrivateRoutes.map((privateRoute, index) => {
               return (
                 <PrivateRouter
                   key={index}
                   path={privateRoute.path}
                   exact={privateRoute.exact}
                   component={props => {
                     return (
                       <privateRoute.layout {...props}>
                         <privateRoute.component {...props} />
                       </privateRoute.layout>
                     );
                   }}
                 />
               );
             })}
             <Route Navigate to="/PageNotFound" exact component={PageNotFound} />
           </Routes>
         </Router>
       </div>
     );
   }
 }
 
 export default Routes;
 