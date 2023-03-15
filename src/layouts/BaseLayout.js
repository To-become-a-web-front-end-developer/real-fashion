import { useState,useEffect } from "react";
import TopNavBar from "../components/TopNavBar";
import NavBarContainer from '../components/NavBar/NavBarContainer';
import Footer from "../components/Footer";

function BaseLayout(props) {
    const [topHeaderClass, setTopHeaderClass] = useState("show");

    const handleScroll = (e) => {
        if (window.scrollY >= 50 ) {
            setTopHeaderClass("hide")
        } else {
            setTopHeaderClass("show")
        }
    }

    useEffect(() => {
        window.scrollTo(0,0);
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    },[]);

    return(
        <div className="main-wrapper">
            <div className="super_container">
                <header className="header trans_300">
                    <TopNavBar topHeaderClass={topHeaderClass}/>
                    <NavBarContainer />
                </header>
                <Footer/>
            </div>
        </div>
    )
}

export default BaseLayout;