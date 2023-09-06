import React from "react";
import BasketElement from "./BasketElement";
import { useCalculateBasket } from "./hooks";
import { OrderButton, BasketContentTitle } from "./styles";

const UsedBasket = () => {
  const {
    orderedItems,
    fullPrice,
    isPaidDelivery,
    deliveryPrice,
    calculatedFullPrice,
    untillFreeDelivery,
  } = useCalculateBasket();

  return (
    <>
      <BasketContentTitle>Koszyk</BasketContentTitle>
      {orderedItems.map(({ item, price, amount }, i) => (
        <BasketElement
          key={i}
          id={i}
          title={item}
          price={price}
          amount={amount}
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
      <OrderButton exact to={"/checkout"}>
        Kasa {calculatedFullPrice}zł
      </OrderButton>
    </>
  );
};

export default UsedBasket;
