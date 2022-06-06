import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../../App";

import Modal from "../Modal";

import "./Header.css";

function Header() {
  const { data, setData } = useContext(DataContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigate = useNavigate();

  const logIn = (login, password) => {
    if (login === "admin" && password === "admin") {
      setIsModalOpen(false);
      setData((state) => ({ ...state, isLoggin: true }));
      navigate("/");
      return true;
    }
    return false;
  };

  const logOut = () => {
    setData((state) => ({ ...state, isLoggin: false }));
  };

  const handleToggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <div className="header">
      <h1>BEER STORE</h1>
      {data.isLoggin ? (
        <div className="header-block">
          {" "}
          <p className="cart">{`cart: ${data.cart.goods} products ${data.cart.price}$ `}</p>
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
