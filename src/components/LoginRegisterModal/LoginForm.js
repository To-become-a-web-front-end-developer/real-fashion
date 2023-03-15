import { useState } from "react"
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { userLogin } from "../../redux/actions/LoginAction";
import Validator from "../../utils/Validator";
import LoadingButton from "../LoadingButton";
import {EMAIL_RULE, DEFAULT_RULE} from "../../utils/Validator/rule"

const LoginForm = ({userLogin,forgotPasswordClicked,registerClicked}) => {

    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading,setLoading] = useState(false);

    const handleChange = e => {
        const {name, value} = e.target;
        name === "email" ? setEmail(value) : setPassword(value);
    }

    const handleSubmit = () => {
        if(!Validator(email, EMAIL_RULE)){
            console.log("Email Error");
            return;
        }
        if (!Validator(password, DEFAULT_RULE)) {
            console.log("Password Error");
            return;
        }
        setLoading(true);
        userLogin(email, password)
        .then(res => {
            console.log(res);
            setLoading(false);
            window.location.reload();
        })
        .catch(error => {
            console.log(error.response);
            setLoading(false);
        });
    }

    return(
        <div>
            <div className="login-form">
                <h2>Login</h2>
                <div className="form-group">
                    <input 
                      type="text"
                      className="form-control"
                      placeholder="Email"
                      id="UserName"
                      name="email"
                      value={email}
                      onChange={handleChange}
                      autoComplete={false}
                    />
                    <i className="fa fa-user"></i>
                </div>
                <div className="form-group log-status">
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        id="password"
                        value={password}
                        onChange={handleChange}
                        autoComplete={false}
                    />
                    <i className="fa fa-lock"></i>
                </div>
                <span className="alert">
                    Invalid Credentials
                </span>
                <a className="alert" href="https://www.naver.com" onClick={forgotPasswordClicked}>
                    Lost you are password?
                </a>
                <LoadingButton
                    type="button"
                    className="log-btn"
                    loading={loading}
                    onClick = {() => handleSubmit()}
                >
                    Log in 
                </LoadingButton>
                <div
                  onClick={registerClicked}
                  style={{
                    textAlign: "center",
                    fontSize: 12,
                    color: "#c4c4c4",
                    cursor: "pointer"
                  }}
                >
                  New user ? Please Register
                </div>
            </div>
        </div>
    )
}

LoginForm.propTypes = {
    forgotPasswordClicked: PropTypes.func,
    registerClicked: PropTypes.func,
    userLogin: PropTypes.func.isRequired
};
  
const mapDispatchToProps = {
    userLogin
};
const mapStoreToProps = state => ({
    login_loading: state.login.login_loading,
    login_error: state.login.error
});

export default connect(mapStoreToProps,mapDispatchToProps)(LoginForm);
  