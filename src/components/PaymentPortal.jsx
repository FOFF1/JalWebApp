import React from "react";
import { CheckOutContext } from "../store/CartStore";

const PaymentPortal = (props) => {
  const [checkOutDetails] = React.useContext(CheckOutContext);

return <>{props.user.name} This is payment portal: {checkOutDetails}</>;
};
export default PaymentPortal;
