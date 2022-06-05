import React from "react";
import Header from "../../components/Header";
import notFoundPic from '../../assets/notFound.jpeg';
import "./Notfound.css";
import Navigate from "../../components/Navigate";


function Notfound() {
  return (
      <>
      <Header />
      <Navigate />
      <div className="not_found">
        <h2>Something went wrong. This page does not exist</h2>
        <img src={notFoundPic} alt="not found" />
      </div>
      </>
  );
}

export default Notfound;
