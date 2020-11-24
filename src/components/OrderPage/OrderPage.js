import React, { Component } from 'react';
import classes from './OrderPage.module.css';
import Dish from '../smallParts/Dish/Dish';
import axios from '../../axios-orders';
import OrderElement from '../smallParts/OrderElement/OrderElement'
import { connect } from 'react-redux';
class OrderPage extends Component {
    render() {
        let basket = (
            <aside>
                {this.props.orderedItems.map((orderItem, i) => (
                    <OrderElement key={i} id={i} title={orderItem.item} />
                ))}
            </aside>
        );
        return (
            <section className={classes.OrderPage}>
                {basket}
                <section className={classes.Container}>
                    <h1 className={classes.Title}>Zamów do domu!</h1>
                    <p className={classes.subTitle}>Masz ochotę zjeść w domowym zaciszu? Nic trudnego, twoje zamówienie dowieziemy ci pod sam dom! Codziennie, w godzinach działalności restauracji. Dodaj danie do koszyka poprzez kliknięcie na nie, tak po prostu!</p>
                    <ul className={classes.OrderCategories} id="OrderCategories">
                        <li id="recommended" onClick={() => document.getElementById('recommended').scrollIntoView({ behavior: 'smooth', block: 'center' })}>Szef Kuchni Poleca</li>
                        <li id="soups" onClick={() => document.getElementById('soup').scrollIntoView({ behavior: 'smooth', block: 'center' })}>Zupy</li>
                        <li id="mainmeals" onClick={() => document.getElementById('main').scrollIntoView({ behavior: 'smooth', block: 'center' })}>Dania Główne</li>
                        <li id="kidss" onClick={() => document.getElementById('kids').scrollIntoView({ behavior: 'smooth', block: 'center' })}>Dla najmłodszych</li>
                        <li id="deserts" onClick={() => document.getElementById('sweet').scrollIntoView({ behavior: 'smooth', block: 'center' })}>Desery</li>
                        <li id="alcohol" onClick={() => document.getElementById('alco').scrollIntoView({ behavior: 'smooth', block: 'center' })}>Alkohole</li>
                        <li id="drink" onClick={() => document.getElementById('drinks').scrollIntoView({ behavior: 'smooth', block: 'center' })}>Napoje</li>
                    </ul>
                    <h1 className={classes.categoryTitle}>Szef Kuchni Poleca</h1>
                    <div className={classes.bar}></div>
                    <div className={classes.DishesTable} id="recommended">
                        <Dish title="1Reco" price="12zł" />
                        <Dish title="2Reco" price="12zł" />
                        <Dish title="3Reco" price="12zł" />
                        <Dish title="4Reco" price="12zł" />
                        <Dish title="5Reco" price="12zł" />
                        <Dish title="6Reco" price="12zł" />
                        <Dish title="7Reco" price="12zł" />
                    </div>
                    <h1 className={classes.categoryTitle} id="soup">Zupy</h1>
                    <div className={classes.bar}></div>
                    <div className={classes.DishesTable}>
                        <Dish title="1Zupy" price="12zł" />
                        <Dish title="2Zupy" price="12zł" />
                        <Dish title="3Zupy" price="12zł" />
                        <Dish title="4Zupy" price="12zł" />
                        <Dish title="5Zupy" price="12zł" />
                        <Dish title="6Zupy" price="12zł" />
                        <Dish title="7Zupy" price="12zł" />
                    </div>
                    <h1 className={classes.categoryTitle} id="main">Dania Główne</h1>
                    <div className={classes.bar}></div>
                    <div className={classes.DishesTable}>
                        <Dish title="1Główne" price="12zł" />
                        <Dish title="2Główne" price="12zł" />
                        <Dish title="3Główne" price="12zł" />
                        <Dish title="4Główne" price="12zł" />
                        <Dish title="5Główne" price="12zł" />
                        <Dish title="6Główne" price="12zł" />
                        <Dish title="7Główne" price="12zł" />
                    </div>
                    <h1 className={classes.categoryTitle} id="kids">Dla najmłodszych</h1>
                    <div className={classes.bar}></div>
                    <div className={classes.DishesTable}>
                        <Dish title="1Kids" price="12zł" />
                        <Dish title="1Kids" price="12zł" />
                        <Dish title="1Kids" price="12zł" />
                        <Dish title="1Kids" price="12zł" />
                        <Dish title="1Kids" price="12zł" />
                        <Dish title="1Kids" price="12zł" />
                        <Dish title="1Kids" price="12zł" />
                    </div>
                    <h1 className={classes.categoryTitle} id="sweet">Desery</h1>
                    <div className={classes.bar}></div>
                    <div className={classes.DishesTable}>
                        <Dish title="1Sweet" price="12zł" />
                        <Dish title="2Sweet" price="12zł" />
                        <Dish title="3Sweet" price="12zł" />
                        <Dish title="4Sweet" price="12zł" />
                        <Dish title="5Sweet" price="12zł" />
                        <Dish title="6Sweet" price="12zł" />
                        <Dish title="7Sweet" price="12zł" />
                    </div>
                    <h1 className={classes.categoryTitle} id="alco">Alkohol</h1>
                    <div className={classes.bar}></div>
                    <div className={classes.DishesTable}>
                        <Dish title="1Alcohol" price="12zł" />
                        <Dish title="2Alcohol" price="12zł" />
                        <Dish title="3Alcohol" price="12zł" />
                        <Dish title="4Alcohol" price="12zł" />
                        <Dish title="5Alcohol" price="12zł" />
                        <Dish title="6Alcohol" price="12zł" />
                        <Dish title="7Alcohol" price="12zł" />
                    </div>
                    <h1 className={classes.categoryTitle} id="drinks">Napoje</h1>
                    <div className={classes.bar}></div>
                    <div className={classes.DishesTable}>
                        <Dish title="1Drink" price="12zł" />
                        <Dish title="2Drink" price="12zł" />
                        <Dish title="3Drink" price="12zł" />
                        <Dish title="4Drink" price="12zł" />
                        <Dish title="5Drink" price="12zł" />
                        <Dish title="6Drink" price="12zł" />
                        <Dish title="7Drink" price="12zł" />
                    </div>
                </section>
            </section>
        )
    }
}

const mapStateToProps = state => {
    return {
        orderedItems: state.orderedItems
    };
};

export default connect(mapStateToProps, null)(OrderPage, axios);