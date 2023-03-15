import { connect } from "react-redux";
import Cart from "./Cart";
import { getCartByUserId, postCart } from "../../redux/actions/CartAction";

const mapStoreToProps = (state) => ({
  cart: state.cart.cart,
});
const mapDispatchToProps = (dispatch) => ({
  getCartByUserId: dispatch(getCartByUserId()),
  postCart: (pid, increase, decrease) =>
    dispatch(postCart(pid, increase, decrease)),
});

export default connect(mapStoreToProps, mapDispatchToProps)(Cart);