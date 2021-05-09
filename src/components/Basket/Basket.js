import React, { Component } from "react";
import { connect } from "react-redux";
import BasketPC from "./BasketPC/BasketPC";
import BasketMobile from "./BasketMobile/BasketMobile";
class Basket extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    if (this.props.width < 768) {
      return <BasketMobile />;
    } else {
      return <BasketPC />;
    }
  }
}

const mapStateToProps = (state) => {
  return {
    orderedItems: state.orderedItems,
    fullPrice: state.fullPrice,
    width: state.windowWidth,
  };
};

export default connect(mapStateToProps, null)(Basket);
