import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import BasketElement from "./BasketElement";
import classes from "./Basket.module.css";

const UsedBasket = () => {
  const orderedItems = useSelector((state) => state.orderedItems);
  const fullPrice = useSelector((state) => state.fullPrice);
  const isPaidDelivery = fullPrice < 60;
  const deliveryPrice = isPaidDelivery ? "15zł" : "DARMOWA";
  const calculatedFullPrice = fullPrice + (isPaidDelivery ? 15 : 0);
  const untillFreeDelivery = 60 - fullPrice;

  return (
    <>
      <h1 className={classes.basketTitle}>Koszyk</h1>
      {orderedItems.map((orderItem, i) => (
        <BasketElement
          key={i}
          id={i}
          title={orderItem.item}
          price={orderItem.price}
          amount={orderItem.amount}
        />
      ))}
      <p>Razem: {fullPrice}zł</p>
      <p>Koszt dostawy: {deliveryPrice}</p>
      <p>Cena całkowita: {calculatedFullPrice}zł</p>
      {isPaidDelivery && (
        <p>
          Darmowa dostawa od 60zł wartości zamówienia! Brakuje Ci:{" "}
          {untillFreeDelivery}zł
        </p>
      )}
      <NavLink className={classes.orderButton} exact to={"/checkout"}>
        Kasa {calculatedFullPrice}zł
      </NavLink>
    </>
  );
};

export default UsedBasket;
