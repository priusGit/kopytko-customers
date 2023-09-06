import * as actionTypes from "./actionTypes";
import axios from "axios-orders";

export const sendMessageStart = () => {
  return {
    type: actionTypes.SEND_MESSAGE_START,
  };
};

export const sendMessageSuccess = () => {
  return {
    type: actionTypes.SEND_MESSAGE_SUCCESS,
  };
};

export const sendMessageFail = (error) => {
  return {
    type: actionTypes.SEND_MESSAGE_FAIL,
    error: error,
  };
};

export const sendMessage = (messageData) => {
  return (dispatch) => {
    dispatch(sendMessageStart());
    axios
      .post("/messages.json", messageData)
      .then(() => {
        dispatch(sendMessageSuccess());
      })
      .catch((error) => {
        dispatch(sendMessageFail(error));
      });
  };
};

export const sendReservationStart = () => {
  return {
    type: actionTypes.SEND_RESERVATION_START,
  };
};

export const sendReservationSuccess = () => {
  return {
    type: actionTypes.SEND_RESERVATION_SUCCESS,
  };
};

export const sendReservationFail = (error) => {
  return {
    type: actionTypes.SEND_RESERVATION_FAIL,
    error: error,
  };
};

export const sendReservation = (reservationData) => {
  return (dispatch) => {
    let link = reservationData.reservationDate;
    dispatch(sendReservationStart());
    axios
      .post("/reservations/" + link + ".json", reservationData)
      .then(() => {
        dispatch(sendReservationSuccess());
        dispatch(fetchReservations(link));
      })
      .catch((error) => {
        dispatch(sendReservationFail(error));
      });
  };
};

export const fetchReservationStart = () => {
  return {
    type: actionTypes.FETCH_RESERVATION_START,
  };
};

export const fetchReservationSuccess = (numberOfReservations) => {
  return {
    type: actionTypes.FETCH_RESERVATION_SUCCESS,
    numberOfReservations: numberOfReservations,
  };
};

export const fetchReservationFail = (error) => {
  return {
    type: actionTypes.FETCH_RESERVATION_FAIL,
    numberOfReservations: 0,
    error: error,
  };
};

export const fetchReservations = (link) => {
  return (dispatch) => {
    dispatch(fetchReservationStart());
    axios
      .get("/reservations/" + link + ".json")
      .then((res) => {
        let numberOfReservations = Object.keys(res.data).length;
        dispatch(fetchReservationSuccess(numberOfReservations));
      })
      .catch((err) => {
        dispatch(fetchReservationFail(err));
      });
  };
};

export const addItemOnClickAction = (item, price) => {
  return {
    type: actionTypes.ADD_ITEM,
    item: item,
    price: price,
  };
};
export const deleteItemFromBasketAction = (item, price, id) => {
  return {
    type: actionTypes.DELETE_ITEM,
    item: item,
    price: price,
    id: id,
  };
};
export const onScreenResize = () => {
  return {
    type: actionTypes.SCREEN_RESIZE,
    width: window.innerWidth,
  };
};
export const sendOrderStart = () => {
  return {
    type: actionTypes.SEND_ORDER_START,
  };
};

export const sendOrderSuccess = () => {
  return {
    type: actionTypes.SEND_ORDER_SUCCESS,
  };
};

export const sendOrderFail = (error) => {
  return {
    type: actionTypes.SEND_ORDER_FAIL,
    error: error,
  };
};

export const onOrderSent = (data) => {
  return (dispatch) => {
    dispatch(sendOrderStart());
    axios
      .post("/orders.json", data)
      .then(() => {
        dispatch(sendOrderSuccess());
      })
      .catch((error) => {
        console.log(error);
        dispatch(sendOrderFail(error));
      });
  };
};
export const afterPurchase = (data) => {
  return {
    type: actionTypes.AFTER_PURCHASE,
    data: data,
  };
};
