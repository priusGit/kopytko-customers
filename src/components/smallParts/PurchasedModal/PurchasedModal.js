import React, { Component } from "react";
import * as actions from "store/actions/index";
import { connect } from "react-redux";
import classes from "./PurchasedModal.module.css";
import Spinner from "../Spinner/Spinner";
import { NavLink } from "react-router-dom";
import pan from "assets/svg/cooking.svg";
import nosignal from "assets/svg/no-signal.svg";
class PurchasedModal extends Component {
  render() {
    let modalConent;
    if (this.props.orderStatus === "sent") {
      modalConent = <Spinner />;
    } else {
      if (this.props.orderStatus === "success") {
        modalConent = (
          <>
            <h1 className={classes.ModalH}>Garnki w ruch!</h1>
            <p>twoje zamówienie zostało przyjęte przez restaurację</p>
            <p>Wysyłka za około: 45 minut</p>
            <img
              className={`${classes.iconPurchasedModal} ${classes.iconPurchasedModal}`}
              src={pan}
              alt="Rotating pan"
            />
            <NavLink
              onClick={() => this.props.afterPurchase(this.props.orderStatus)}
              className={classes.toMainPage}
              exact
              to={"/"}
            >
              Strona główna
            </NavLink>
          </>
        );
      } else {
        modalConent = (
          <>
            <h1 className={classes.ModalH}>
              Niestety, transakcja nie powiodła się
            </h1>
            <p>Spróbuj ponownie za parę minut</p>
            <img
              className={`${classes.iconPurchasedModal} ${classes.nosignal}`}
              src={nosignal}
              alt="No signal"
            />
            <NavLink className={classes.toMainPage} exact to={"/"}>
              Strona główna
            </NavLink>
          </>
        );
      }
    }
    return (
      <div className={classes.PurchasedModalBG}>
        <div className={classes.PurchasedModal}>{modalConent}</div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    orderStatus: state.orderStatus,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    afterPurchase: (orderStatus) =>
      dispatch(actions.afterPurchase(orderStatus)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PurchasedModal);
