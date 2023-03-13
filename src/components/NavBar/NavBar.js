import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HomeCartView } from "../HomeCartView";

export default function NavBar({departments,cart,getCartByUserId}) {
    
    const [modalShow, setModalShow] = useState(false);
    const [activeClass, setActiveClass] = useState(false);

    useEffect(() => {
        if (Object.keys(cart).length < 1) {
            
        }
    },[]);

    const showHideModal = () => {
        setModalShow(!modalShow);
    }

    const handleMenuClicked = () => {
        setActiveClass(!activeClass);
    }

    return(
        <div className="main_nav_container">
            <div className="container">

            </div>
        </div>
    )
}