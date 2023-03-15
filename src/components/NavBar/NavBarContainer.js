import { connect } from "react-redux";
import { getDepartments } from "../../redux/actions/DepartmentAction";
import { getCartByUserId } from "../../redux/actions/CartAction";
import NavBar from "./NavBar";

const mapStoreToProps = state => ({
    departments: state.department.departments,
    cart : state.cart.cart,
});

const mapDispatchToProps = dispatch => ({
    getDepartments: dispatch(getDepartments()),
    getCartByUserId: () => dispatch(getCartByUserId()),
});

export default connect(mapStoreToProps, mapDispatchToProps)(NavBar);
