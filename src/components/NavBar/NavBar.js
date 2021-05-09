import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";
import NavBarPC from "./NavBarPC/NavBarPc";
import NavBarMobile from "./NavBarMobile/NavBarMobile";

class NavBar extends Component {
  componentDidMount() {
    this.props.onScreenResize();
    window.addEventListener("resize", this.props.onScreenResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.props.onScreenResize);
  }

  render() {
    if (this.props.width < 768) {
      return <NavBarMobile />;
    } else {
      return <NavBarPC />;
    }
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
export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
