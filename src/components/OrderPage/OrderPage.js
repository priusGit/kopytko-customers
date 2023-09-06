import React, { Component } from "react";
import classes from "./OrderPage.module.css";
import { NavLink } from "react-router-dom";
import Dish from "../smallParts/Dish/Dish";
import axios from "axios-orders";
import { connect } from "react-redux";
import * as actions from "store/actions/index";
import Basket from "../Basket/Basket";
import CategoriesPC from "./components/CategoriesPC";
class OrderPage extends Component {
  componentDidMount() {
    this.props.onScreenResize();
    window.scrollTo(0, 0);
    window.addEventListener("resize", this.props.onScreenResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.props.onScreenResize);
  }
  render() {
    ///Top bar hider with basket position fix
    let prevScrollpos = window.pageYOffset;
    if (this.props.width >= 768) {
      window.onscroll = function () {
        let flag;
        if (document.getElementById("OrderCategories")) {
          flag = true;
        }
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
          document.getElementById("NavBar").style.top = "0";
          if (flag === true) {
            document.getElementById("OrderCategories").style.top = "75px";
            document.getElementById("pcBasket").style.top = "75px";
            document.getElementById("pcBasket").style.height =
              "calc(100vh - 75px)";
          }
        } else {
          document.getElementById("NavBar").style.top = "-75px";
          if (flag === true) {
            document.getElementById("OrderCategories").style.top = "0px";
            document.getElementById("pcBasket").style.top = "0px";
            document.getElementById("pcBasket").style.height = "100vh";
          }
        }
        prevScrollpos = currentScrollPos;
      };
    }
    let proceedtoBasketButton = (
      <div className={classes.bottomButtonContainer} id="proceedtoBasketButton">
        <NavLink className={classes.proceedtoBasketButton} exact to={"/basket"}>
          Kasa (
          {this.props.fullPrice +
            (this.props.fullPrice < 100 && this.props.fullPrice !== 0 ? 15 : 0)}
          zł)
        </NavLink>
      </div>
    );

    return (
      <section className={classes.OrderPage}>
        {this.props.width < 768 ? proceedtoBasketButton : <Basket />}
        <section className={classes.Container}>
          <h1 className={classes.Title}>Zamów do domu!</h1>
          <p className={classes.subTitle}>
            Masz ochotę zjeść w domowym zaciszu? Nic trudnego, twoje zamówienie
            dowieziemy ci pod sam dom! Codziennie, w godzinach działalności
            restauracji. Dodaj danie do koszyka poprzez kliknięcie na nie, tak
            po prostu!
          </p>
          {this.props.width < 768 ? null : <CategoriesPC />}
          <h1 className={classes.categoryTitle}>Szef Kuchni Poleca</h1>
          <div className={classes.bar}></div>
          <div className={classes.DishesTable} id="recommended">
            <Dish
              title="Cynamonka z jajkiem i boczkiem
 "
              price="12"
            />
            <Dish title="2Reco" price="12" />
            <Dish title="3Reco" price="12" />
            <Dish title="4Reco" price="12" />
            <Dish title="5Reco" price="12" />
            <Dish title="6Reco" price="12" />
            <Dish title="7Reco" price="12" />
          </div>
          <h1 className={classes.categoryTitle} id="soup">
            Zupy
          </h1>
          <div className={classes.bar}></div>
          <div className={classes.DishesTable}>
            <Dish title="1Zupy" price="12" />
            <Dish title="2Zupy" price="12" />
            <Dish title="3Zupy" price="12" />
            <Dish title="4Zupy" price="12" />
            <Dish title="5Zupy" price="12" />
            <Dish title="6Zupy" price="12" />
            <Dish title="7Zupy" price="12" />
          </div>
          <h1 className={classes.categoryTitle} id="main">
            Dania Główne
          </h1>
          <div className={classes.bar}></div>
          <div className={classes.DishesTable}>
            <Dish title="1Główne" price="12" />
            <Dish title="2Główne" price="12" />
            <Dish title="3Główne" price="12" />
            <Dish title="4Główne" price="12" />
            <Dish title="5Główne" price="12" />
            <Dish title="6Główne" price="12" />
            <Dish title="7Główne" price="12" />
          </div>
          <h1 className={classes.categoryTitle} id="kids">
            Dla najmłodszych
          </h1>
          <div className={classes.bar}></div>
          <div className={classes.DishesTable}>
            <Dish title="1Kids" price="12" />
            <Dish title="1Kids" price="12" />
            <Dish title="1Kids" price="12" />
            <Dish title="1Kids" price="12" />
            <Dish title="1Kids" price="12" />
            <Dish title="1Kids" price="12" />
            <Dish title="1Kids" price="12" />
          </div>
          <h1 className={classes.categoryTitle} id="sweet">
            Desery
          </h1>
          <div className={classes.bar}></div>
          <div className={classes.DishesTable}>
            <Dish title="1Sweet" price="12" />
            <Dish title="2Sweet" price="12" />
            <Dish title="3Sweet" price="12" />
            <Dish title="4Sweet" price="12" />
            <Dish title="5Sweet" price="12" />
            <Dish title="6Sweet" price="12" />
            <Dish title="7Sweet" price="12" />
          </div>
          <h1 className={classes.categoryTitle} id="alco">
            Alkohol
          </h1>
          <div className={classes.bar}></div>
          <div className={classes.DishesTable}>
            <Dish title="1Alcohol" price="12" />
            <Dish title="2Alcohol" price="12" />
            <Dish title="3Alcohol" price="12" />
            <Dish title="4Alcohol" price="12" />
            <Dish title="5Alcohol" price="12" />
            <Dish title="6Alcohol" price="12" />
            <Dish title="7Alcohol" price="12" />
          </div>
          <h1 className={classes.categoryTitle} id="drinks">
            Napoje
          </h1>
          <div className={classes.bar}></div>
          <div className={classes.DishesTable}>
            <Dish title="1Drink" price="12" />
            <Dish title="2Drink" price="12" />
            <Dish title="3Drink" price="12" />
            <Dish title="4Drink" price="12" />
            <Dish title="5Drink" price="12" />
            <Dish title="6Drink" price="12" />
            <Dish title="7Drink" price="12" />
          </div>
        </section>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    orderedItems: state.orderedItems,
    fullPrice: state.fullPrice,
    width: state.windowWidth,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onScreenResize: () => dispatch(actions.onScreenResize()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderPage, axios);
