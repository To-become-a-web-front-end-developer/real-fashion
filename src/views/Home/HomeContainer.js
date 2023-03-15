import {getAllProducts, applyFilters} from "../../redux/actions/ProductAction";
import { connect } from "react-redux";
import Home from "./Home";
import {postCart} from "../../redux/actions/CartAction";
  
const mapStoreToProps = state => ({
  products: state.product.products,
  departments: state.department.departments,
  loading: state.product.loading
});

const mapDispatchToProps = dispatch => ({
  getAllProducts: () => dispatch(getAllProducts()),
  applyFilters: filter_string => dispatch(applyFilters(filter_string)),
  postCart: productId => dispatch(postCart(productId))
});

export default connect(mapStoreToProps, mapDispatchToProps)(Home);