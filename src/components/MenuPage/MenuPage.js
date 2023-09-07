import React from "react";
import classes from "./MenuPage.module.css";
import Dish from "../smallParts/Dish/Dish";
import Bar from "../smallParts/Bar/Bar";

const MenuPage = () => (
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

export default MenuPage;
