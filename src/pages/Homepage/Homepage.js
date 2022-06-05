import React, { useContext, useEffect } from "react";
import Header from "../../components/Header";
import "./Homepage.css";
import Navigate from "../../components/Navigate";
import Productcard from "../../components/Productcard";
import { DataContext } from "../../App";

function Homepage() {
  const { data, setData } = useContext(DataContext);

  useEffect(() => {
    fetch("https://api.punkapi.com/v2/beers")
      .then((response) => {
        return response.json();
      })
      .then((response) => setData((state) => ({ ...state, beers: response })))
      .catch((err) => console.log(err));
  }, []);

  console.log(data);

  return (
    <div>
      <Header />
      <Navigate />
      <p className="home-disc">
        Where to find new craft beer releases and online? Craft Beer's new
        additions page has you covered. We support the best craft beer
        distributors and alcohol available online for purchase, delivered right
        to your door.
      </p>
      <h2>СATALOG</h2>
      <div className="product-container">
        {data.beers.map((beer) => (
          <Productcard productInfo={beer} />
        ))}
      </div>
    </div>
  );
}

export default Homepage;
