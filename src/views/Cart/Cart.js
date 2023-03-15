import Heading from "../../components/Heading";
import CartItem from "./CartItem";
import CalculateTax from "../../utils/CalculateTax";
import { Button } from "react-bootstrap";
import EmptyCart from "../../assets/images/empty_cart.png";

function Cart({cart, postCart}) {
    const {totalPrice, items} = cart;

    return(
        <div className="shopping--cart" data-aos="fade-up">
            <div className="container">
                <div className="shopping--cart--container">
                    <div className="row">
                        <Heading title="Your Shopping Cart" data-aos="fade-up"/>
                    </div>

                    <div style={{height: 30}}></div>

                    <CartItem
                        items={items || {}}
                        handleClick={(pid, increase,decrease) => {
                            postCart(pid,increase,decrease)
                        }}
                    />
                    {items !== undefined && items !== null ? (
                        <div 
                        className="d-flex flex-column jutify-content-end align-items-end"
                        style={{paddingRight: 50}}
                        >
                            <p>
                                SubTotal:{" "}
                                <span style={{color: "#FE4C50"}}>₹{totalPrice}</span>
                            </p>
                            <p>
                                Shipping : <span style={{ color: "#FE4C50" }}>Free</span>
                            </p>

                            <h3 style={{textAlign:"center"}}>
                                Total:{" "}
                                <span style={{color: "#FE4C50"}}>
                                 ₹ {CalculateTax(totalPrice).total}
                                </span>
                            </h3>
                            <hr/>

                            <Button variant="danger" size="sm" style={{marginTop: 30}}>
                                Confirm Checkout
                            </Button>
                        </div>
                    ) : (
                        <div style={{textAlign:"center"}}>
                            <img 
                                src={EmptyCart}
                                alt=""
                                style={{ maxHeight: 400, maxWidth: 400}}
                                className="img-fluid"
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Cart;