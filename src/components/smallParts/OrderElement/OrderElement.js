import React, { Component } from 'react';
import axios from '../../../axios-orders';
import * as actions from '../../../store/actions/index';
import { connect } from 'react-redux';
import classes from './OrderElement.module.css'
class OrderElement extends Component {
    render() {
        return (
            <div className={classes.OrderElement}
                onClick={() => this.props.onOrderElementClick(this.props.id, this.props.price)}
            >
                <p className={classes.DishTitle}>{this.props.title}</p>
                <p>Dodaj notatkę</p>
                <p>{this.props.price}zł</p>
                <div className={classes.endLine}></div>
            </div>
        )
    }
}
const mapDispatchToPrsops = dispatch => {
    return {
        onOrderElementClick: (item, price) => dispatch(actions.deleteItemFromBasketAction(item, price))
    };
};
export default connect(null, mapDispatchToPrsops)(OrderElement, axios);
//export default OrderElement;