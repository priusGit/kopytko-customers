import React, { Component } from "react";
import classes from "./Basket.module.css";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import BasketElement from "../smallParts/BasketElement/BasketElement";
import Auxi from "../../hoc/Auxi";
class Basket extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    let basket;
    if (this.props.orderedItems.length === 0) {
      basket = (
        <Auxi>
          <h1 className={classes.basketTitle}>Koszyk</h1>
          <div className={classes.endLine}></div>
          <svg
            className={classes.bas}
            viewBox="0 0 24 24"
            width="42px"
            height="42px"
            role="presentation"
            focusable="false"
            aria-hidden="true"
          >
            <path
              d="M6.91 6.222v3.636c0 .389.324.704.726.704a.716.716 0 00.728-.704V6.222h7.272v3.636c0 .389.325.704.728.704a.716.716 0 00.727-.704V6.222H20v12.022C20 19.76 18.719 21 17.152 21H6.848C5.281 21 4 19.76 4 18.244V6.222h2.91zM13.938 2c1.739 0 3.152 1.368 3.152 3.05v1.172h-1.455V5.05c0-.905-.761-1.642-1.697-1.642H10.06c-.936 0-1.697.737-1.697 1.642v1.173H6.909V5.05C6.91 3.368 8.322 2 10.061 2z"
              fillRule="evenodd"
            ></path>
          </svg>
          <h1>Wypełnij swój koszyk</h1>
          <p className={classes.emptyBasketCopy}>
            Kliknij na danie które chcesz dodać do zamówienia, i ciesz się
            pysznym jedzeniem!
          </p>
        </Auxi>
      );
      if (this.props.width < 768) {
        return <section className={classes.MobileBasket}>{basket}</section>;
      } else {
        return (
          <aside className={classes.Basket} id="pcBasket">
            {basket}
          </aside>
        );
      }
    } else {
      let basketItems = (
        <Auxi>
          <h1 className={classes.basketTitle}>Koszyk</h1>
          {this.props.orderedItems.map((orderItem, i) => (
            <BasketElement
              key={i}
              id={i}
              title={orderItem.item}
              price={orderItem.price}
              amount={orderItem.amount}
            />
          ))}
          <p>Razem: {this.props.fullPrice}zł</p>
          <p>Koszt dostawy: {this.props.fullPrice < 60 ? "15zł" : "DARMOWA"}</p>
          <p>
            Cena całkowita:{" "}
            {this.props.fullPrice + (this.props.fullPrice < 60 ? 15 : 0)}zł
          </p>
          {this.props.fullPrice >= 60 ? null : (
            <p>
              Darmowa dostawa od 60zł! Brakuje Ci: {60 - this.props.fullPrice}zł
            </p>
          )}
          <NavLink className={classes.orderButton} exact to={"/checkout"}>
            Kasa (
            {this.props.fullPrice +
              (this.props.fullPrice < 60 && this.props.fullPrice !== 0
                ? 15
                : 0)}
            zł)
          </NavLink>
        </Auxi>
      );

      if (this.props.width < 768) {
        return (
          <section className={classes.MobileBasket}>{basketItems}</section>
        );
      } else {
        return (
          <aside className={classes.Basket} id="pcBasket">
            {basketItems}
          </aside>
        );
      }
    }
  }
}

const mapStateToProps = (state) => {
  return {
    orderedItems: state.orderedItems,
    fullPrice: state.fullPrice,
    width: state.windowWidth,
  };
};

export default connect(mapStateToProps, null)(Basket);
