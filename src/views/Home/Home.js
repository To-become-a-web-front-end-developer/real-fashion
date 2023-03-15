import { useState,useEffect } from "react";
import Auth from "../../modules/Auth";
import HomeBanner from "../../components/HomeBanner";
import CategoryBanner from "../../components/CategoryBanner";
import NewArrivals from "../../components/Products/NewArrivals";
import Benefit from "../../components/Benefit";
import {Advertisement} from "../../components/Advertisement";
import BestSeller from "../../components/Products/BestSeller";
import LoginRegister from "../../components/LoginRegisterModal";
import propTypes from "prop-types";

function Home({products, departments, getAllProducts, postCart}) {
    const [modalShow, setModalShow] = useState(false);
    const [login, setLogin] = useState(true);

    useEffect(() => {
        if (!products) {
            getAllProducts();
        }
    },[products,getAllProducts]);

    const showHideModal = () => {
        setModalShow(false);
    }

    const loginClicked = () => {
        setModalShow(true);
        setLogin(true);
    }

    const registerClicked = () => {
        setModalShow(true);
        setLogin(false);
    }

    const addToBag = (params) => {
        if (
            Auth.getUserDetails() !== undefined &&
            Auth.getUserDetails() !== null &&
            Auth.getToken() !== undefined
        ) {
            let cart = postCart(params);
            cart.then((res) => {
                console.log(res);
            });            
        } else {
            setModalShow(true);
        }
    }

    return(
        <div>
            <HomeBanner/>
            <CategoryBanner/>
            {products ? (
                <NewArrivals
                    products={products}
                    departments={departments}
                    addToBag={addToBag}
                />
            ) : null}
            <Benefit/>
            <Advertisement/>
            {products ? (
                <BestSeller
                    products={products}
                    departments={departments}
                    addToBag={addToBag}
                />
            ): null}
            <LoginRegister
                show={modalShow}
                login={login}
                registerClicked={() => registerClicked()}
                loginClicked={() => loginClicked()}
                onHide={() => showHideModal()}
            />
        </div>
    );
};

Home.propTypes = {
    products: propTypes.array,
    departments: propTypes.array,
    getAllProducts: propTypes.func,
    postCart: propTypes.func
};

export default Home;