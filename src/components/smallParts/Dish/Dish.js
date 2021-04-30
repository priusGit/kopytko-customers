import React, { Component } from "react";
import axios from "../../../axios-orders";
import * as actions from "../../../store/actions/index";
import { connect } from "react-redux";
import classes from "./Dish.module.css";
class Dish extends Component {
  render() {
    return (
      <div
        className={classes.Dish}
        onClick={() =>
          this.props.onItemClicked(this.props.title, this.props.price)
        }
      >
        <p className={classes.DishTitle}>{this.props.title}</p>
        <p className={classes.DishDisc}>
          I’m a dish description. Click “Edit Menu” to open the Restaurant Menu
          editor and change my text.
        </p>
        <p className={classes.DishPrice}>{this.props.price}zł</p>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onItemClicked: (item, price) =>
      dispatch(actions.addItemOnClickAction(item, price)),
  };
};
export default connect(null, mapDispatchToProps)(Dish, axios);
