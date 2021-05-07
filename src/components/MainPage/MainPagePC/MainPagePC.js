import React, { Component } from "react";
import Auxi from "../../../hoc/Auxi";
import classes from "./MainPagePC.module.css";
// import * as Language from '../smallParts/lang/lang';
class MainPage extends Component {
  render() {
    return (
      <Auxi>
        <section className={classes.MainPage}>
          <div className={classes.Left}>
            <div className={classes.leftContent}>
              <h1>KOPYTKO</h1>
              <p>Rodzinnie i cieple - po polsku!</p>
              <a className={classes.buttonMainPage} href="/menu">
                Zobacz Menu
              </a>
            </div>
          </div>
          <div className={classes.Right}>
            <div className={classes.topleft}></div>
            <div className={classes.topright}></div>
            <div className={classes.botleft}> </div>
            <div className={classes.botright}></div>
          </div>
        </section>
      </Auxi>
    );
  }
}

export default MainPage;
