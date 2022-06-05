import React from "react";
import { Link } from "react-router-dom";
import "./Navigate.css";

function Navigate() {
  return (
    <>
      <hr></hr>
      <div className="navigate">
        <Link to="/" className="nav-link">
          HOME
        </Link>
        <Link to="/about" className="nav-link">
          ABOUT US
        </Link>
      </div>
      <hr></hr>
    </>
  );
}

export default Navigate;
