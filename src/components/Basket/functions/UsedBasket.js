import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import BasketElement from "../BasketElement/BasketElement";
import classes from "../Basket.module.css";
function usedBasket(props) {
  let basketItems = (
    <>
      <h1 className={classes.basketTitle}>Koszyk</h1>
      {props.orderedItems.map((orderItem, i) => (
        <BasketElement
          key={i}
          id={i}
          title={orderItem.item}
          price={orderItem.price}
          amount={orderItem.amount}
        />
      ))}
      <p>Razem: {props.fullPrice}zł</p>
      <p>Koszt dostawy: {props.fullPrice < 60 ? "15zł" : "DARMOWA"}</p>
      <p>
        Cena całkowita: {props.fullPrice + (props.fullPrice < 60 ? 15 : 0)}zł
      </p>
      {props.fullPrice >= 60 ? null : (
        <p>Darmowa dostawa od 60zł! Brakuje Ci: {60 - props.fullPrice}zł</p>
      )}
      <NavLink className={classes.orderButton} exact to={"/checkout"}>
        Kasa (
        {props.fullPrice +
          (props.fullPrice < 60 && props.fullPrice !== 0 ? 15 : 0)}
        zł)
      </NavLink>
    </>
  );
  return basketItems;
}

const mapStateToProps = (state) => {
  return {
    orderedItems: state.orderedItems,
    fullPrice: state.fullPrice,
    width: state.windowWidth,
  };
};
export default connect(mapStateToProps, null)(usedBasket);
