import React, { Component } from 'react';
import axios from '../../../axios-orders';
import * as actions from '../../../store/actions/index';
import { connect } from 'react-redux';
import classes from './OrderElement.module.css'
class OrderElement extends Component {
    Logujchuju() {
        console.log(this.props.id);
    }
    render() {
        return (
            <div className={classes.OrderElement}
                onClick={() => this.props.onOrderElementClick(this.props.id)}
            >
                <p className={classes.DishTitle}>{this.props.title}</p>
                <div className={classes.endLine}></div>
            </div>
        )
    }
}
const mapDispatchToPrsops = dispatch => {
    return {
        onOrderElementClick: (item) => dispatch(actions.deleteItemFromBasketAction(item))
    };
};
export default connect(null, mapDispatchToPrsops)(OrderElement, axios);
//export default OrderElement;