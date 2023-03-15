import React from "react";
import { Modal } from "react-bootstrap";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import "./style.css";
import PropTypes from "prop-types";

const LoginRegister = ({ showlogin, onHide, login, registerClicked, loginClicked }) => {
  return (
    <Modal
      show={showlogin}
      onHide={onHide}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      id="loginModal"
      className="modal fade login"
    >
      <Modal.Body>
        <div className="modal--close--button" onClick={onHide}>
          <i className="fas fa-times"></i>
        </div>
        {login ? (
          <LoginForm registerClicked={() => registerClicked()} />
        ) : (
          <RegisterForm loginClicked={() => loginClicked()} />
        )}
      </Modal.Body>
    </Modal>
  );
};

LoginRegister.propTypes = {
  showlogin: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
  login: PropTypes.bool.isRequired,
  registerClicked: PropTypes.func.isRequired,
  loginClicked: PropTypes.func.isRequired
};

export default LoginRegister;
