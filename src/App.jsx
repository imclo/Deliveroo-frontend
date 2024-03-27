import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./assets/icons/style.css";

import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

function App() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const [choices, setChoices] = useState([]);
  const [totalBasket, setTotalBasket] = useState(0);

  const fetchData = async () => {
    const response = await axios.get(
      "https://site--deliveroo-backend--chloe-projects--imcl-j5xj.code.run/"
    );
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
        choices={choices}
        setChoices={setChoices}
        totalBasket={totalBasket}
        setTotalBasket={setTotalBasket}
      />
      <Footer />
    </>
  );
}

export default App;
