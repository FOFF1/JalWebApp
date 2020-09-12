import React, { useEffect, useState } from "react";
import Gallery from "../components/Gallery";
import ProductItem from "../components/ProductItem";

const HomePage = (props) => {
  const [productItems, setProductItems] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [hide, setHide] = useState(false);

  // const showProducts = () => {
  //   return setHide(!hide);
  // };

  useEffect(() => {
    (async () => {
      const result = await fetch(
        "https://raw.githubusercontent.com/FOFF1/JCart/master/ProductItem"
      );
      const data = await result.json();
      if (!data) setError("Data is not loaded");
      console.log(data);
      setIsLoaded(true);
      setProductItems(data);
    })();
  }, []);

  console.log("HomePage route " + props.match.url);
  const match = props.match;

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
    return <>{!hide && view}</>;
  }
};

export default HomePage;
