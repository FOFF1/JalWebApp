import React from "react";
import NavBar from "./components/NavBar";
import HomePage from "./views/HomePage";
import { Redirect, Route } from "react-router-dom";
import {
  CheckOutContextProvider,
  CounterContextProvider,
} from "./store/CartStore";
import PrivateRoute from "./components/PrivateRoute";
import PaymentPortal from "./components/PaymentPortal";

const App = () => {
  return (
    <>
      <CounterContextProvider>
        <CheckOutContextProvider>
          <NavBar />
          <Route exact path="/">
            <Redirect to="/products" />
          </Route>
          <Route path="/products" component={HomePage} />
          <PrivateRoute path="/payment" component={PaymentPortal} />
        </CheckOutContextProvider>
      </CounterContextProvider>
    </>
  );
};

export default App;
