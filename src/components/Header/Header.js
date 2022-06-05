import React from "react";

import "./Header.css";

function Header() {
  return (
    <div className="header">
      <h1>BEER STORE</h1>
      <div className="header-block">
        <p className="cart">cart: </p>
        <button>LOG IN</button>
      </div>
    </div>
  );
}

export default Header;
