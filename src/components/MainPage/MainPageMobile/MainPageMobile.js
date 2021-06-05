import React, { Component } from "react";
import classes from "./MainPageMobile.module.css";
import hat from "../../../assets/svg/hat.svg";
// import * as Language from '../smallParts/lang/lang';
class MainPage extends Component {
  render() {
    return (
      <>
        <section className={classes.MainPage}>
          <div className={classes.Left}>
            <div className={classes.mobileMain}>
              <img className={classes.chefHat} src={hat} alt="Chef hat" />
              <h1>KOPYTKO</h1>
              <p>Rodzinnie i ciepło - po polsku!</p>
              {/* <p>{Language.MainPageSubTitle}</p> */}
              <a className={classes.buttonMainPage} href="/menu">
                Zobacz Menu
              </a>
            </div>
          </div>
        </section>
      </>
    );
  }
}
export default MainPage;
