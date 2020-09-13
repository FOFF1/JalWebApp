import React from "react";
import Rater from "react-rater";
import "react-rater/lib/react-rater.css";
const Rating = () => {
  return (
    <>
      {" "}
      <Rater
        total={5}
        rating={2}
        style={{ fontSize: "3rem" }}
        interactive={false}
      />
      <div style={{ fontFamily: "serif", fontSize: "22px" }}>
        <i>'We are happy with the service'</i>
      </div>
    </>
  );
};
export default Rating;
