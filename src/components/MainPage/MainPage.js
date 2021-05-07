import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";
import MainPagePC from "./MainPagePC/MainPagePC";
import MainPageMobile from "./MainPageMobile/MainPageMobile";
// import * as Language from '../smallParts/lang/lang';
class MainPage extends Component {
  componentDidMount() {
    this.props.onScreenResize();
    window.scrollTo(0, 0);
    window.addEventListener("resize", this.props.onScreenResize);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.props.onScreenResize);
  }
  render() {
    let content;
    if (this.props.width < 768) {
      content = <MainPageMobile />;
    } else {
      content = <MainPagePC />;
    }
    return content;
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

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
