import React, { Component } from 'react';
import classes from './OrderPage.module.css';
import Dish from '../smallParts/Dish/Dish';
class OrderPage extends Component {
    render() {
        return (
            <section className={classes.OrderPage}>
                <aside>
                    <p>koszyk czy cos</p>
                </aside>
                <section className={classes.Container}>
                    <h1 className={classes.Title}>Zamów do domu!</h1>
                    <p className={classes.subTitle}>Masz ochotę zjeść w domowym zaciszu? Nic trudnego, twoje zamówienie dowieziemy ci pod sam dom! Codziennie, w godzinach działalności restauracji. Dodaj danie do koszyka poprzez kliknięcie na nie, tak po prostu!</p>
                    <ul className={classes.OrderCategories}>
                        <li id="recommended" onClick={() => document.getElementById('recommended').scrollIntoView({ behavior: 'smooth', block: 'center' })}>Szef Kuchni Poleca</li>
                        <li id="soups" onClick={() => document.getElementById('soup').scrollIntoView({ behavior: 'smooth', block: 'center' })}>Zupy</li>
                        <li id="mainmeals" onClick={() => document.getElementById('main').scrollIntoView({ behavior: 'smooth', block: 'center' })}>Dania Główne</li>
                        <li id="kids" onClick={() => document.getElementById('kids').scrollIntoView({ behavior: 'smooth', block: 'center' })}>Dla najmłodszych</li>
                        <li id="deserts" onClick={() => document.getElementById('sweet').scrollIntoView({ behavior: 'smooth' })}>Desery</li>
                        <li id="drinks" onClick={() => document.getElementById('drinks').scrollIntoView({ behavior: 'smooth' })}>Napoje</li>
                        <li id="alcohol" onClick={() => document.getElementById('alco').scrollIntoView({ behavior: 'smooth' })}>Alkohol</li>
                    </ul>
                    <h1 className={classes.categoryTitle}>Szef Kuchni Poleca</h1>
                    <div className={classes.bar}></div>
                    <div className={classes.DishesTable} id="recommended">
                        <Dish title="Kopytka" price="12zł" />
                        <Dish title="Kopytka" price="12zł" />
                        <Dish title="Kopytka" price="12zł" />
                        <Dish title="Kopytka" price="12zł" />
                        <Dish title="Kopytka" price="12zł" />
                        <Dish title="Kopytka" price="12zł" />
                        <Dish title="Kopytka" price="12zł" />
                    </div>
                    <h1 className={classes.categoryTitle} id="soup">Zupy</h1>
                    <div className={classes.bar}></div>
                    <div className={classes.DishesTable}>
                        <Dish title="Kopytka" price="12zł" />
                        <Dish title="Kopytka" price="12zł" />
                        <Dish title="Kopytka" price="12zł" />
                        <Dish title="Kopytka" price="12zł" />
                        <Dish title="Kopytka" price="12zł" />
                        <Dish title="Kopytka" price="12zł" />
                        <Dish title="Kopytka" price="12zł" />
                    </div>
                    <h1 className={classes.categoryTitle} id="main">Dania Główne</h1>
                    <div className={classes.bar}></div>
                    <div className={classes.DishesTable}>
                        <Dish title="Kopytka" price="12zł" />
                        <Dish title="Kopytka" price="12zł" />
                        <Dish title="Kopytka" price="12zł" />
                        <Dish title="Kopytka" price="12zł" />
                        <Dish title="Kopytka" price="12zł" />
                        <Dish title="Kopytka" price="12zł" />
                        <Dish title="Kopytka" price="12zł" />
                    </div>
                    <h1 className={classes.categoryTitle} id="kids">Dla najmłodszych</h1>
                    <div className={classes.bar}></div>
                    <div className={classes.DishesTable}>
                        <Dish title="Kopytka" price="12zł" />
                        <Dish title="Kopytka" price="12zł" />
                        <Dish title="Kopytka" price="12zł" />
                        <Dish title="Kopytka" price="12zł" />
                        <Dish title="Kopytka" price="12zł" />
                        <Dish title="Kopytka" price="12zł" />
                        <Dish title="Kopytka" price="12zł" />
                    </div>
                    <h1 className={classes.categoryTitle} id="sweet">Desery</h1>
                    <div className={classes.bar}></div>
                    <div className={classes.DishesTable}>
                        <Dish title="Kopytka" price="12zł" />
                        <Dish title="Kopytka" price="12zł" />
                        <Dish title="Kopytka" price="12zł" />
                        <Dish title="Kopytka" price="12zł" />
                        <Dish title="Kopytka" price="12zł" />
                        <Dish title="Kopytka" price="12zł" />
                        <Dish title="Kopytka" price="12zł" />
                    </div>
                    <h1 className={classes.categoryTitle} id="drinks">Napoje</h1>
                    <div className={classes.bar}></div>
                    <div className={classes.DishesTable}>
                        <Dish title="Kopytka" price="12zł" />
                        <Dish title="Kopytka" price="12zł" />
                        <Dish title="Kopytka" price="12zł" />
                        <Dish title="Kopytka" price="12zł" />
                        <Dish title="Kopytka" price="12zł" />
                        <Dish title="Kopytka" price="12zł" />
                        <Dish title="Kopytka" price="12zł" />
                    </div>
                    <h1 className={classes.categoryTitle} id="alco">Alkohol</h1>
                    <div className={classes.bar}></div>
                    <div className={classes.DishesTable}>
                        <Dish title="Kopytka" price="12zł" />
                        <Dish title="Kopytka" price="12zł" />
                        <Dish title="Kopytka" price="12zł" />
                        <Dish title="Kopytka" price="12zł" />
                        <Dish title="Kopytka" price="12zł" />
                        <Dish title="Kopytka" price="12zł" />
                        <Dish title="Kopytka" price="12zł" />
                    </div>
                </section>
            </section>
        )
    }
}

export default OrderPage;