import React from "react";
import { Switch, withRouter, Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import MainPage from "./components/MainPage";
import FAQPage from "./components/FAQPage";
import MenuPage from "./components/MenuPage";
import OrderPage from "./components/OrderPage";
import OurStory from "./components/OurStory";
import ReservationsPage from "./components/ResevationsPage";
import Checkout from "./components/CheckoutPage";
import Basket from "./components/Basket";

const App = () => {
  let routes = (
    <Switch>
      <Route path="/" exact component={MainPage} />
      <Route path="/reservations" exact component={ReservationsPage} />
      <Route path="/ourstory" exact component={OurStory} />
      <Route path="/menu" exact component={MenuPage} />
      <Route path="/orderonline" exact component={OrderPage} />
      <Route path="/faq" exact component={FAQPage} />
      <Route path="/checkout" exact component={Checkout} />
      <Route path="/basket" exact component={Basket} />
    </Switch>
  );
  return (
    <>
      <Layout>{routes}</Layout>
    </>
  );
};

export default withRouter(App);
