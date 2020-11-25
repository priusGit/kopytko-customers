import React, { Component } from 'react';
import { Switch, withRouter, Route } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout/Layout';
import MainPage from './components/MainPage/MainPage';
import FAQPage from './components/FAQPage/FAQPage';
import MenuPage from './components/MenuPage/MenuPage';
import OrderPage from './components/OrderPage/OrderPage';
import OurStory from './components/OurStory/OurStory';
import ReservationsPage from './components/ResevationsPage/ReservationsPage';
import Checkout from './components/CheckoutPage/CheckoutPage';
import Auxi from './hoc/Auxi';
class App extends Component {
  render() {
    let routes = (
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/reservations" exact component={ReservationsPage} />
        <Route path="/ourstory" exact component={OurStory} />
        <Route path="/menu" exact component={MenuPage} />
        <Route path="/orderonline" exact component={OrderPage} />
        <Route path="/faq" exact component={FAQPage} />
        <Route path="/checkout" exact component={Checkout} />
      </Switch>
    );
    return (
      <Auxi>
        <Layout>
          {routes}
        </Layout>
      </Auxi>
    )
  }
}
export default withRouter(App);
