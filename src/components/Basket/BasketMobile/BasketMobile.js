import React, { Component } from "react";
import classes from "../Basket.module.css";
import { connect } from "react-redux";
import EmptyBasket from "../functions/EmptyBasket";
import UsedBasket from "../functions/UsedBasket";

class BasketMobile extends Component {
  render() {
    if (this.props.orderedItems.length === 0) {
      return (
        <section className={classes.MobileBasket}>
          <EmptyBasket />
        </section>
      );
    } else {
      return (
        <section className={classes.MobileBasket}>
          <UsedBasket />
        </section>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    orderedItems: state.orderedItems,
  };
};

export default connect(mapStateToProps, null)(BasketMobile);
