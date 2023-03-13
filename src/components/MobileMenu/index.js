import propTypes from "prop-types";

export const MobileMenu = ({activeClass,onClose}) => {
    return(
        <div className={activeClass ? "hamburger_menu active" : "hamburger_menu"}>
            <div className="hamburger_close" onClick={onClose}>
                <i className="fa fa-times" aria-hidden="true"></i>
            </div>
            <div className="hanburger_menu_content text-right">
                <ul className="menu_top_nav">
                    <li className="menu_item has-children">
                        <a href="https://www.naver.com">
                            usd 
                            <i className="fa fa-angle-down"></i>
                        </a>
                        <ul className="menu_selection">
                            <li>
                                <a href="https://www.naver.com">cad</a>
                            </li>
                            <li>
                                <a href="https://www.naver.com">aud</a>
                            </li>
                            <li>
                                <a href="https://www.naver.com">eur</a>
                            </li>
                            <li>
                                <a href="https://www.naver.com">gbp</a>
                            </li>
                        </ul>
                    </li>
                    <li className="menu_item has-children">
                        <a href="https://www.naver.com">
                            Eng
                            <i className="fa fa-angle-down"></i>
                        </a>
                        <ul className="menu_selection">
                            <li>
                                <a href="https://www.naver.com">
                                    French
                                </a>
                            </li>
                            <li>
                                <a href="https://www.naver.com">
                                    Italian
                                </a>
                            </li>
                            <li>
                                <a href="https://www.naver.com">
                                    German
                                </a>
                            </li>
                            <li>
                                <a href="https://www.naver.com">
                                    Spanish
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="menu_item has-children">
                        <a href="https://www.naver.com">
                            My Account
                            <i className="fa fa-angle-down"></i>
                        </a>
                        <ul>
                            <li>
                                <a href="https://www.naver.com">
                                    <i className="fa fa-sign-in" aria-hidden="true"></i>Sign In
                                </a>
                            </li>
                            <li>
                                <a href="https://www.naver.com">
                                    <i className="fa fa-user-plus" aria-hidden="true"></i>
                                    Register
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="menu_item">
                        <a href="https://www.naver.com">home</a>
                    </li>
                    <li className="menu_item">
                        <a href="https://www.naver.com">shop</a>
                    </li>
                    <li className="menu_item">
                        <a href="https://www.naver.com">promotion</a>
                    </li>
                    <li className="menu_item">
                        <a href="https://www.naver.com">pages</a>
                    </li>
                    <li className="menu_item">
                        <a href="https://www.naver.com">blog</a>
                    </li>
                    <li className="menu_item">
                        <a href="https://www.naver.com">contact</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

MobileMenu.propTypes = {
    activeClass: propTypes.bool,
    onClose: propTypes.func,
};