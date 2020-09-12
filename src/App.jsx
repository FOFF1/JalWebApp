import React from "react";
import NavBar from "./components/NavBar";
import HomePage from "./views/HomePage";
import { Redirect, Route, Switch } from "react-router-dom";
import { CounterContextProvider } from "./store/CartStore";

const App = () => {
  return (
    <>
      <CounterContextProvider>
        <NavBar />
        {/* <HomePage /> */}

        <Route exact path="/">
          <Redirect to="/products" />
        </Route>
        <Route path="/products" component={HomePage} />
      </CounterContextProvider>
    </>
  );
};

export default App;