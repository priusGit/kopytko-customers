import React, { Component } from "react";
import classes from "./MenuPage.module.css";
import Dish from "../smallParts/Dish/Dish";
import Bar from "../smallParts/Bar/Bar";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";
class MenuPage extends Component {
  componentDidMount() {
    this.props.onScreenResize();
    window.scrollTo(0, 0);
    window.addEventListener("resize", this.props.onScreenResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.props.onScreenResize);
  }
  render() {
    return (
      <section className={classes.Menu}>
        <section className={classes.Container}>
          <h1 className={classes.Title}>Menu</h1>
          <p className={classes.subTitle}>Lorem ipsum dolor sit amet</p>
          <h1 className={classes.categoryTitle}>Zupy</h1>
          <Bar style={{ backgroundColor: "red" }} />
          <div className={classes.DishesTable}>
            <Dish title="Kopytka" price="12" />
            <Dish title="Kopytka" price="12" />
            <Dish title="Kopytka" price="12" />
            <Dish title="Kopytka" price="12" />
            <Dish title="Kopytka" price="12" />
            <Dish title="Kopytka" price="12" />
            <Dish title="Kopytka" price="12" />
          </div>
          <h1 className={classes.categoryTitle}>Zupy</h1>
          <Bar />
          <div className={classes.DishesTable}>
            <Dish title="Kopytka" price="12" />
            <Dish title="Kopytka" price="12" />
            <Dish title="Kopytka" price="12" />
            <Dish title="Kopytka" price="12" />
            <Dish title="Kopytka" price="12" />
            <Dish title="Kopytka" price="12" />
            <Dish title="Kopytka" price="12" />
          </div>
          <h1 className={classes.categoryTitle}>Zupy</h1>
          <Bar />
          <div className={classes.DishesTable}>
            <Dish title="Kopytka" price="12" />
            <Dish title="Kopytka" price="12" />
            <Dish title="Kopytka" price="12" />
            <Dish title="Kopytka" price="12" />
            <Dish title="Kopytka" price="12" />
            <Dish title="Kopytka" price="12" />
            <Dish title="Kopytka" price="12" />
          </div>
        </section>
      </section>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    width: state.windowWidth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onScreenResize: () => dispatch(actions.onScreenResize()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MenuPage);
