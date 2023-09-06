import { useDispatch, useSelector } from "react-redux";
import {
  deleteItemFromBasketAction as deleteItem,
  addItemOnClickAction as addItem,
} from "store/actions/index";

export const useBasket = () => {
  const dispatch = useDispatch();
  const handleDeleteItem = (title, price, id) =>
    dispatch(deleteItem(title, price, id));
  const handleAddItem = (title, price, id) =>
    dispatch(addItem(title, price, id));

  return {
    handleDeleteItem,
    handleAddItem,
  };
};

export const useCalculateBasket = () => {
  const orderedItems = useSelector((state) => state.orderedItems);
  const fullPrice = useSelector((state) => state.fullPrice) || 0;
  const isPaidDelivery = fullPrice < 60;
  const deliveryPrice = isPaidDelivery ? "15zł" : "DARMOWA";
  const calculatedFullPrice = fullPrice + (isPaidDelivery ? 15 : 0) || 0;
  const untillFreeDelivery = 60 - fullPrice;

  return {
    orderedItems,
    fullPrice,
    isPaidDelivery,
    deliveryPrice,
    calculatedFullPrice,
    untillFreeDelivery,
  };
};
