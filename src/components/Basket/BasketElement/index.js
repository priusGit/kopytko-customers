import React from "react";
import { string, number } from "prop-types";
import { useDispatch } from "react-redux";
import {
  deleteItemFromBasketAction as deleteItem,
  addItemOnClickAction as addItem,
} from "../../../store/actions/index";
import classes from "./BasketElement.module.css";

const BasketElement = ({ id, title, price, amount }) => {
  const dispatch = useDispatch();
  const handleDeleteItem = () => dispatch(deleteItem(title, price, id));
  const handleAddItem = () => dispatch(addItem(title, price, id));
  const isFirst = id === 0;

  return (
    <div className={classes.MobileBasketElement}>
      {isFirst && <div className={classes.endLine}></div>}
      <div className={classes.mBasketContainer}>
        <div className={classes.mBasketLeft}>
          <p>{amount}</p>
        </div>
        <div className={classes.mBasketMid}>
          <p>{title}</p>
        </div>
        <div className={classes.mBasketRight}>
          <p>{amount * price}zł</p>
          <div className={classes.addDelete}>
            <p onClick={() => handleAddItem()}>+</p>
            <p onClick={() => handleDeleteItem()}>-</p>
          </div>
        </div>
      </div>
      <div className={classes.endLine}></div>
    </div>
  );
};

BasketElement.propTypes = {
  id: number.isRequired,
  title: string.isRequired,
  price: string.isRequired,
  amount: number.isRequired,
};

export default BasketElement;
