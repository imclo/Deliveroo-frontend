import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./assets/icons/style.css";

import Header from "./components/Header";
import Content from "./components/Content";
import Cart from "./components/Cart";

function App() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const [items, setItems] = useState([]);
  const [totalBasket, setTotalBasket] = useState(0);

  const fetchData = async () => {
    const response = await axios.get("http://localhost:3200/");
    // console.log(response.data);
    setData(response.data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return isLoading ? (
    <span>Loading...</span>
  ) : (
    <>
      <Header
        restaurantName={data.restaurant.name}
        description={data.restaurant.description}
        imgRestau={data.restaurant.picture}
      />
      <Content
        categories={data.categories}
        mealsTitle={data.categories.meals}
      />
      <Cart />
    </>
  );
}

export default App;
