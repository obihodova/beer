import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginFalse, loginTrue } from "../../store/loginReducer";
import { useDispatch, useSelector } from "react-redux";
import cartPic from "../../assets/cart.svg";

import Modal from "../Modal";

import "./Header.css";

function Header() {
  const isLoggin = useSelector((state) => state.login.isLogin);
  const cart = useSelector((state) => state.cart);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const logIn = (login, password) => {
    if (login === "admin" && password === "admin") {
      dispatch(loginTrue());
      setIsModalOpen(false);
      navigate("/");
      return true;
    }
    return false;
  };

  const logOut = () => {
    dispatch(loginFalse());
  };

  const handleToggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <div className="header">
      <h1>BEER STORE</h1>
      {isLoggin ? (
        <div className="header-block">
          {" "}
          <Link to="/cart">
            <img src={cartPic} alt="cart"></img>{" "}
          </Link>
          <p className="cart">{`${cart.goods} products ${cart.price}$ `}</p>
          <button onClick={logOut}>LOG OUT</button>{" "}
        </div>
      ) : (
        <div className="header-block">
          {" "}
          <button onClick={handleToggleModal}>LOG IN</button>{" "}
        </div>
      )}
      <Modal visible={isModalOpen} onClose={handleToggleModal} onAuth={logIn} />
    </div>
  );
}

export default Header;
