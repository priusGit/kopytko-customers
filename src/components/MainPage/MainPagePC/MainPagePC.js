import React from "react";
import classes from "./MainPagePC.module.css";

const MainPage = () => (
  <>
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
      <div className={classes.Right}></div>
    </section>
  </>
);

export default MainPage;
