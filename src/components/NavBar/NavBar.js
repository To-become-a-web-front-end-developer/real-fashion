import { useState, useEffect } from "react";
import MediaQuery from "../../modules/midiaQuery";
import { Link } from "react-router-dom";
import device from "../../modules/midiaQuery";
import { HomeCartView } from "../HomeCartView";
import {MobileMenu} from "../MobileMenu";

export default function NavBar({departments,cart,getCartByUserId}) {
    
    const [modalShow, setModalShow] = useState(false);
    const [activeClass, setActiveClass] = useState(false);

    useEffect(() => {
        if (Object.keys(cart).length < 1) {
            getCartByUserId();
        }
    },[cart,getCartByUserId]);

    const showHideModal = () => {
        setModalShow(!modalShow);
    }

    const handleMenuClicked = () => {
        setActiveClass(!activeClass);
    }

    return(
        <div className="main_nav_container">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-right">
                        <div className="logo_container">
                            <Link to="/fashion-cube">
                                Fashion<span>CUBE</span>
                            </Link>
                        </div>
                        <nav className="navbar">
                            <ul className="navbar_menu">
                                <li>
                                    <Link to="/home">home</Link>
                                </li>
                                <li className="mega_drop_down">
                                    <a href="https://www.naver.com">
                                        shop<i className="fa fa-angle-dowm"></i>
                                    </a>

                                    <div className="mega_menu">
                                        <div className="mega_menu_wrap">
                                            {departments && 
                                            departments.map((item,index) => {
                                                return(
                                                    <div className="mega_menu_content" key={index}>
                                                        <h5>{item.departmentName}</h5>
                                                        <ul className="stander">
                                                            {item.categories.split(",").map((i,idx) => {
                                                                return(
                                                                    <li key={idx}>
                                                                        <a href={`/fashion-cube/shops/${item.departmentName}/{i}`}>
                                                                            {i}
                                                                        </a>
                                                                    </li>
                                                                );
                                                            })};
                                                        </ul>
                                                    </div>
                                                );
                                            })};
                                        </div>
                                    </div>
                                </li>

                                <li>
                                    <a href="https://www.naver.com">
                                        contact
                                    </a>
                                </li>
                            </ul>

                            <ul className="navbar_user">
                                <li>
                                    <a href="https://www.naver.com">
                                        <i className="fa fa-search" aria-hidden="true"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.naver.com">
                                        <i className="fa fa-user" aria-hidden="true"></i>
                                    </a>
                                </li>
                                <li className="checkout">
                                    <a href="https://www.naver.com">
                                        <i className="fas fa-shopping-bag"></i>
                                        {cart.totalQty !== undefined && (
                                            <span id="checkout_items"className="checkout_items" >
                                                {cart.totalQty}
                                            </span>
                                        )}
                                    </a>
                                </li>
                            </ul>

                            <div className="hamburger_container">
                                <i className="fa fa-bars" aria-hidden="true"></i>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
            <MediaQuery query={device.max.tabletL}>
                <MobileMenu 
                    activeClass={activeClass}
                    onClose={() => handleMenuClicked()}                        
                />
            </MediaQuery>
            {modalShow ? (
                <HomeCartView
                    cart={cart}
                    show={modalShow}
                    onHide={() => showHideModal()}
                />
            ):null}
        </div>
    )
}