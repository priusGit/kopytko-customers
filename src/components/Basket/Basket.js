import React, { Component } from 'react';
import classes from './Basket.module.css';
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux';
import BasketElement from '../smallParts/BasketElement/BasketElement';
import Auxi from '../../hoc/Auxi'
class Basket extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        console.log(this.props.orderedItems);
        let basket = (
            <Auxi>
                {this.props.orderedItems.map((orderItem, i) => (
                    <BasketElement key={i} id={i} title={orderItem.item} price={orderItem.price} amount={orderItem.amount} />
                ))}
                <p>Razem: {this.props.fullPrice}zł</p>
                <p>Koszt dostawy: {this.props.fullPrice < 60 ? "15zł" : "DARMOWA"}</p>
                <p>Cena całkowita: {
                    this.props.fullPrice + (this.props.fullPrice < 60 ? 15 : 0)
                }zł</p>
                {this.props.fullPrice >= 60 ? null : <p>Darmowa dostawa od 60zł! Brakuje Ci: {60 - this.props.fullPrice}zł</p>}
                <NavLink className={classes.proceedToCheckout} exact to={"/checkout"}>Kasa ({this.props.fullPrice + ((this.props.fullPrice < 60) && (this.props.fullPrice !== 0) ? 15 : 0)}zł)</NavLink>
            </Auxi>
        );
        return (
            <section className={classes.MobileBasket}>
                <h1>Koszyk</h1>
                {basket}
            </section>
        )
    }
}

const mapStateToProps = state => {
    return {
        orderedItems: state.orderedItems,
        fullPrice: state.fullPrice
    };
};


export default connect(mapStateToProps, null)(Basket);