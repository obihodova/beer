import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import Aboutpage from "./pages/Aboutpage";
import Productpage from "./pages/Productpage";
import Notfound from "./pages/Notfound";
import { useState, useEffect } from "react";

export const DataContext = React.createContext({
  beers: [],
  isLoggin: false,
  cart: {
    goods: 0,
    price: 0,
  },
});

function App() {
  const [data, setData] = useState({
    beers: [],
    isLoggin: false,
    cart: {
      goods: 0,
      price: 0,
    },
  });

  useEffect(() => {
    fetch("https://api.punkapi.com/v2/beers")
      .then((response) => {
        return response.json();
      })
      .then((response) => setData((state) => ({ ...state, beers: response })))
      .catch((err) => console.log(err));
  }, []);

  return (
    <DataContext.Provider value={{ data, setData }}>
      <div className="app">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<Aboutpage />} />
          <Route path="/product/:productId" element={<Productpage />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </div>
    </DataContext.Provider>
  );
}
export default App;
