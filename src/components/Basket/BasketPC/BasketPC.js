import React, { Component } from "react";
import classes from "../Basket.module.css";
import { connect } from "react-redux";
import EmptyBasket from "../functions/EmptyBasket";
import UsedBasket from "../functions/UsedBasket";

class BasketPC extends Component {
  render() {
    if (this.props.orderedItems.length === 0) {
      return (
        <aside className={classes.Basket} id="pcBasket">
          <EmptyBasket />
        </aside>
      );
    } else {
      return (
        <aside className={classes.Basket} id="pcBasket">
          <UsedBasket />
        </aside>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    orderedItems: state.orderedItems,
  };
};

export default connect(mapStateToProps, null)(BasketPC);
