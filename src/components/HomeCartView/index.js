import { Modal, ModalBody, ModalHeader } from "react-bootstrap"
import jumTo from "../../modules/Navigation";
import Auth from "../../modules/Auth";
import EmptyCart from "../../assets/images/emptyCart.png";
import "./style.css";

export const HomeCartView = (props) => {
    const goToChechout = () => {
        jumTo("/fashion-cube/cart")
    }

    const {items,totalPrice} = props.cart || {};
    console.log(totalPrice);

    return(
        <Modal {...props} className="right">
            <ModalHeader closeButton>
                <Modal.Title>You are cart</Modal.Title>
                {items !== undefined && items !== null ? (
                    <span className="checkout--btn" onClick={() => goToChechout()}>
                        checkout{" "}
                    </span>
                ) : null
                }
            </ModalHeader>
            <ModalBody className="modal-body-content">
                {Auth.getUserDetails() !== undefined &&
                Auth.getUserDetails() !== null &&
                Auth.getToken() !== undefined ? (
                    <div>
                        {items !== undefined && items !== null ? null : (
                            <div className="empty--basket">
                                <img src={EmptyCart} className="img-fluid" alt="empty cart"/>
                                <h4 style={{textAlign: "center"}}>EmptyCart</h4>
                            </div>
                        )}
                    </div>
                ) : (
                    <div className="empty--basket">
                        <h4>Please login to view cart</h4>
                        <img src={EmptyCart} className="img-fluid" alt="empty cart"/>
                    </div>
                )}
                {items !== undefined && 
                items !== null &&
                Object.keys(items).map((id) => {
                    return (
                        <div key={id} className="basket--item">
                            <div className="basket--item--img">
                                <img src={items[id].item.imagePath} alt=""/>
                            </div>
                            <div className="basket--item--details">
                                <div className="basket--item--title">
                                    {items[id].item.title}
                                </div>
                                <div className="basket--item--quantity">
                                    Quantity: <span>{items[id].qty}</span>
                                </div>
                                <div className="basket--item--price">
                                    {" "}
                                    Price: <span>₹{items[id].price}</span>
                                </div>
                            </div>
                        </div>
                    )
                })}
                {items !== undefined && items !== null && (
                    <div className="total--price--container">
                        <h3 style={{textAlign: "center"}}>
                            Total: <span style={{ color: "#FE4C50" }}>₹{totalPrice}</span>{" "}
                        </h3>
                        <button
                        className="btn btn-wide log-btn"
                        style={{ marginTop: 20 }}
                        onClick={() => goToChechout()}
                        >
                            Checkout
                        </button>
                    </div>
                )};
            </ModalBody>
        </Modal>
    )
}