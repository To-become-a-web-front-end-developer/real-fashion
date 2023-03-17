import { combineReducers } from "redux";
import login from "./LoginReducer";
import register from "./RegisterReducer";
import department from "./DepartmentReducer";
import product from "./ProductReducer";
import variant from "./VariantsReducer";
import cart from "./cartReducer";

export default combineReducers({
  department,
  login,
  register,
  product,
  variant,
  cart
});
