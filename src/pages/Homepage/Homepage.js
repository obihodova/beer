import React, { useContext } from "react";
import Header from "../../components/Header";
import "./Homepage.css";
import Navigate from "../../components/Navigate";
import Productcard from "../../components/Productcard";
import { DataContext } from "../../App";
import { useSelector } from "react-redux";



function Homepage() {
  const { data } = useContext(DataContext);
  
  const beerInfo = useSelector(store => store.beerInfo);
  console.log(beerInfo);

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
        {beerInfo.beers.map((beer) => (
          <Productcard  key={beer.id}/>
        ))}
      </div>
    </div>
  );
}

export default Homepage;
