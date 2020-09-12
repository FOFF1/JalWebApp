import React, { useEffect, useState } from "react";
import Gallery from "../components/Gallery";
import ProductItem from "../components/ProductItem";

const HomePage = (props) => {
  const [productItems, setProductItems] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      const result = await fetch(
        "https://raw.githubusercontent.com/FOFF1/JCart/master/demo.json"
      );
      const data = await result.json();
      if (!data) setError("Data is not loaded");
      console.log("data is fetched");
      setIsLoaded(true);
      setProductItems(data);
    })();
  }, []);

  if (error) {
    return (
      <div>
        <Gallery />
        <br />
        Error: {error.message}
      </div>
    );
  } else if (!isLoaded) {
    return (
      <div>
        <Gallery />
        <br />
        Loading...
      </div>
    );
  } else {
    const items = productItems.map((prod, id) => {
      return <ProductItem key={id} prodDetail={prod} />;
    });

    const view = (
      <>
        <Gallery />
        <br />
        <div style={{ marginLeft: "90px" }}>{items}</div>
      </>
    );
    return <>{view}</>;
  }
};

export default HomePage;
