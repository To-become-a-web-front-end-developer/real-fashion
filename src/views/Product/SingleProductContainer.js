import { connect } from "react-redux";
import SingleProduct from "./SingleProduct";
import { getProduct } from "../../redux/actions/ProductAction";
import { getVariantsByProductId } from "../../redux/actions/variantsAction";
import { postCart } from "../../redux/actions/CartAction";

const mapStoreToProps = (state) => ({
  product: state.product.product,
  variants: state.variant.variants,
});
const mapDispatchToProps = {
  getProduct,
  getVariantsByProductId,
  postCart,
};

export default connect(mapStoreToProps, mapDispatchToProps)(SingleProduct);