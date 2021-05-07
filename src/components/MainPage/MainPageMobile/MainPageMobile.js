import React, { Component } from "react";
import Auxi from "../../../hoc/Auxi";
import classes from "./MainPageMobile.module.css";
// import * as Language from '../smallParts/lang/lang';
class MainPage extends Component {
  render() {
      return (
        <Auxi>
          <section className={classes.MainPage}>
            <div className={classes.Left}>
              <div className={classes.mobileMain}>
                <h1>KOPYTKO</h1>
                <p>Rodzinnie i cieple - po polsku!</p>
                {/* <p>{Language.MainPageSubTitle}</p> */}
                <a className={classes.buttonMainPage} href="/menu">
                  Zobacz Menu
                </a>
              </div>
            </div>
          </section>
        </Auxi>
      );
    }
  }
export default MainPage;
